import Sweet from '../../../js/sweetalert2/sweetalert'
function UserAdmin() {
  this.init()
}

UserAdmin.prototype = {
  init: function () {
    this.config()
    this.listen()
  },

  config: function () {
    this.alert = new Sweet()
    this.token = $("#token").val()
    this.element = {
      btn: {
        deleteUser: $('.btn-delete-user'),
      },
      input: {
        checkBoxRoleOfUser: $('.checkBoxRoleOfUser'),
      }
    }
  },

  listen: function () {
    this.clickDeleteUser()
    this.changeValueCheckBoxRoleUser()
    this.changeRoleOfUser()
  },

  clickDeleteUser: function () {
    let self = this
    self.element.btn.deleteUser.on('click', function () {
      let Confirm = self.alert.confirm(`XOA ?`)
      Confirm.then((result) => {
        if (result.value) {
          let id = $(this).data('id')
          self.callAjaxDeleteUser(id)
        } else {
          self.alert.alertError()
        }
      })
    })
  },

  reloadPage : function (time) {
    setTimeout("location.reload();", time);
  },

  callAjaxDeleteUser: function (idUser) {
    let self = this
    $.post(
      `${location.origin}/admin/user/${idUser}`,
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
          $(`#user-list-${idUser}`).remove()
        }
      },
      'text'
    )
  },

  callAjaxUpdateRoleUser: function (paramUpdateRole) {
    let self = this
    $.post(
      `${location.origin}/admin/user/${paramUpdateRole.id}`,
      {
        _token: self.token,
        _method: 'PUT',
        checked: paramUpdateRole.checked,
        idRole: paramUpdateRole.idRole
      },
      function(data) {
        let result = JSON.parse(data)
        if (result == false) {
          self.alert.alertError()
        } else {
          let alert = `Saved`
          self.alert.alertSuccess(alert)
        }
      },
      'text'
    )
  },

  changeRoleOfUser: function () {
    let self = this
    self.element.input.checkBoxRoleOfUser.change(function () {
      let paramUpdateRole = {
        id: $(this).data('id'),
        checked: $(this).val(),
        idRole: $(this).data('idrole')
      }
      self.callAjaxUpdateRoleUser(paramUpdateRole)
    })
  },

  changeValueCheckBoxRoleUser: function () {
    let self = this
    self.element.input.checkBoxRoleOfUser.change(function(){
      if ($(this).is(':checked')) {
        self.element.input.checkBoxRoleOfUser.val(1)
      } else {
        self.element.input.checkBoxRoleOfUser.val(0)
      }
    })
  },
}

export default UserAdmin
