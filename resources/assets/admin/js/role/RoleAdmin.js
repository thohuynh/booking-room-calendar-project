import Sweet from '../../../js/sweetalert2/sweetalert'
function RoleAdmin() {
  this.init()
}

RoleAdmin.prototype = {
  init: function () {
    this.config()
    this.listen()
  },

  config: function () {
    this.alert = new Sweet()
    this.token = $("#token").val()
    this.element = {
      btn: {
        updateRole: $('.btn-update-role'),
        deleteRole: $('.btn-delete-role'),
        submitUpdateRole: $('#submitUpdateRole')
      },
      modal: {
        updateRole: $('#modalUpdateRole')
      },
      form: {
        formUpdate: $('#updateRole')
      },
      input: {
        idRole: $('#idRole'),
        nameUpdateRole: $('#nameUpdateRole'),
        displayNameUpdateRole: $('#displayNameUpdateRole'),
        descriptionUpdateRole: $('#descriptionUpdateRole')
      }
    }
  },

  listen: function () {
    this.clickUpdateRole()
    this.clickSubmitUpdateRole()
    this.clickDeleteRole()
  },

  clickUpdateRole: function () {
    let self = this
    self.element.btn.updateRole.on('click', function () {
      let paramfillDataToModalUpdate = {
        id: $(this).data('id'),
        name: $(this).data('name'),
        displayName: $(this).data('disname'),
        description: $(this).data('description')
      }
      self.fillDataToModalUpdate(paramfillDataToModalUpdate)
      self.showModalUpdateRole()
    })
  },

  clickDeleteRole: function () {
    let self = this
    self.element.btn.deleteRole.on('click', function () {
      let Confirm = self.alert.confirm(`XOA ?`)
      Confirm.then((result) => {
        if (result.value) {
          let id = $(this).data('id')
          self.callAjaxDeleteRole(id)
        } else {
          self.alert.alertError()
        }
      })
    })
  },

  reloadPage : function (time) {
    setTimeout("location.reload();", time);
  },

  clickSubmitUpdateRole: function () {
    let self = this
    self.element.btn.submitUpdateRole.on('click', function () {
      let paramCallAjaxUpdate = {
        id : self.element.input.idRole.val(),
        name: self.element.input.nameUpdateRole.val(),
        displayName: self.element.input.displayNameUpdateRole.val(),
        description: self.element.input.descriptionUpdateRole.val()
      }
      self.callAjaxUpdateRole(paramCallAjaxUpdate)
      self.hideModalUpdateRole()
    })
  },

  callAjaxUpdateRole: function (paramCallAjaxUpdate) {
    let self = this
    $.post(
      `${location.origin}/admin/role/${paramCallAjaxUpdate.id}`,
      {
        _token: self.token,
        _method: 'PUT',
        name: paramCallAjaxUpdate.name,
        displayName: paramCallAjaxUpdate.displayName,
        description: paramCallAjaxUpdate.description
      },
      function(data) {
        let result = JSON.parse(data)
        if (result == false) {
          self.alert.alertError()
        } else {
          $(`#disNameRoleList-${paramCallAjaxUpdate.id}`).text(paramCallAjaxUpdate.displayName)
          $(`#descriptionRoleList-${paramCallAjaxUpdate.id}`).text(paramCallAjaxUpdate.description)
          let alert = `Saved`
          self.alert.alertSuccess(alert)
        }
      },
      'text'
    )
  },

  callAjaxDeleteRole: function (idRole) {
    let self = this
    $.post(
      `${location.origin}/admin/role/${idRole}`,
      {
        _token: self.token,
        _method: 'DELETE',
      },
      function(data) {
        let result = JSON.parse(data)
        if (result == false) {
          self.alert.alertError()
        } else {
          let alert = `Deleted`
          self.alert.alertSuccess(alert)
          $(`#role-list-${idRole}`).remove()
        }
      },
      'text'
    )
  },

  showModalUpdateRole: function () {
    let self = this
    self.element.modal.updateRole.modal(`show`)
  },

  hideModalUpdateRole: function () {
    let self = this
    self.element.modal.updateRole.modal(`hide`)
  },

  fillDataToModalUpdate: function (paramfillDataToModalUpdate) {
    let self = this
    self.element.input.idRole.val(paramfillDataToModalUpdate.id)
    self.element.input.nameUpdateRole.val(paramfillDataToModalUpdate.name)
    self.element.input.displayNameUpdateRole.val(paramfillDataToModalUpdate.displayName)
    self.element.input.descriptionUpdateRole.val(paramfillDataToModalUpdate.description)
  }
}

export default RoleAdmin
