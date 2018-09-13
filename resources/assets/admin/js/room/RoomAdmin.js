import Sweet from '../../../js/sweetalert2/sweetalert'
function RoomAdmin() {
  this.init()
}

RoomAdmin.prototype = {
  init: function () {
    this.config()
    this.listen()
  },

  config: function () {
    this.alert = new Sweet()
    this.token = $("#token").val()
    this.element = {
      btn: {
        updateRoom: $('.btn-update-room'),
        deleteRoom: $('.btn-delete-room'),
        submitUpdateRoom: $('#submitUpdateRoom')
      },
      modal: {
        updateRoom: $('#modalUpdateRoom')
      },
      input: {
        idRoom: $('#idRoom'),
        nameUpdateRoom: $('#nameUpdateRoom'),
        disNameUpdateRoom: $('#disNameUpdateRoom'),
        desUpdateRoom: $('#desUpdateRoom'),
        projectorsUpdateRoom: $('#projectorsUpdateRoom'),
        boardUpdateRoom: $('#boardUpdateRoom'),
        colorUpdateRoom: $('#colorUpdateRoom')
      }
    }
  },

  listen: function () {
    this.clickUpdateRoom()
    this.clickDeleteRoom()
    this.clickSubmitUpdateRoom()
    this.changeValueCheckBoxProjectors()
    this.changeValueCheckBoxBoard()
  },

  clickUpdateRoom: function () {
    let self = this
    self.element.btn.updateRoom.on('click', function () {
      let paramfillDataToModalUpdate = {
        id: $(this).data('id'),
        name: $(this).data('name'),
        displayName: $(this).data('disname'),
        description: $(this).data('description'),
        hasProjectors: $(this).data('projectors'),
        hasBoard: $(this).data('board'),
        color: $(this).data('colorroom')
      }
      self.fillDataToModalUpdate(paramfillDataToModalUpdate)
      self.showModalUpdateRoom()
    })
  },

  showModalUpdateRoom: function () {
    let self = this
    self.element.modal.updateRoom.modal(`show`)
  },

  hideModalUpdateRoom: function () {
    let self = this
    self.element.modal.updateRoom.modal(`hide`)
  },

  clickDeleteRoom: function () {
    let self = this
    self.element.btn.deleteRoom.on('click', function () {
      let Confirm = self.alert.confirm(`XOA ?`)
      Confirm.then((result) => {
        if (result.value) {
          let id = $(this).data('id')
          self.callAjaxDeleteRoom(id)
        } else {
          self.alert.alertError()
        }
      })
    })
  },

  reloadPage : function (time) {
    setTimeout("location.reload();", time);
  },

  callAjaxUpdateRoom: function (paramCallAjaxUpdate) {
    let self = this
    $.post(
      `${location.origin}/admin/room/${paramCallAjaxUpdate.id}`,
      {
        _token: self.token,
        _method: 'PUT',
        name: paramCallAjaxUpdate.name,
        displayName: paramCallAjaxUpdate.displayName,
        description: paramCallAjaxUpdate.description,
        hasProjectors: paramCallAjaxUpdate.hasProjectors,
        hasBoard: paramCallAjaxUpdate.hasBoard,
        color: paramCallAjaxUpdate.color
      },
      function(data) {
        let result = JSON.parse(data)
        if (result == false) {
          self.alert.alertError()
        } else {
          let alert = `Saved`
          let iconCheck = `<i class='far fa-check-circle'></i>`
          let iconUnCheck = `<i class='far fa-circle'></i></i>`
          self.alert.alertSuccess(alert)
          $(`#disNameRoomList-${paramCallAjaxUpdate.id}`).text(paramCallAjaxUpdate.displayName)
          $(`#desRoomList-${paramCallAjaxUpdate.id}`).text(paramCallAjaxUpdate.description)
          if (paramCallAjaxUpdate.hasProjectors == 1) {
            $(`#projectorsRoomList-${paramCallAjaxUpdate.id}`).html(iconCheck)
          } else {
            $(`#projectorsRoomList-${paramCallAjaxUpdate.id}`).html(iconUnCheck)
          }

          if (paramCallAjaxUpdate.hasBoard == 1) {
            $(`#boardRoomList-${paramCallAjaxUpdate.id}`).html(iconCheck)
          } else {
            $(`#boardRoomList-${paramCallAjaxUpdate.id}`).html(iconUnCheck)
          }

          $(`#colorRoomList-${paramCallAjaxUpdate.id}`).val(paramCallAjaxUpdate.color)
        }
      },
      'text'
    )
  },

  changeValueCheckBoxProjectors: function () {
    let self = this
    self.element.input.projectorsUpdateRoom.change(function(){
      if ($(this).is(':checked')) {
        self.element.input.projectorsUpdateRoom.val(1)
      } else {
        self.element.input.projectorsUpdateRoom.val(0)
      }
    });
  },

  changeValueCheckBoxBoard: function () {
    let self = this
    self.element.input.boardUpdateRoom.change(function(){
      if ($(this).is(':checked')) {
        self.element.input.boardUpdateRoom.val(1)
      } else {
        self.element.input.boardUpdateRoom.val(0)
      }
    });
  },

  callAjaxDeleteRoom: function (idRoom) {
    let self = this
    $.post(
      `${location.origin}/admin/room/${idRoom}`,
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
          $(`#room-list-${idRoom}`).remove()
        }
      },
      'text'
    )
  },

  fillDataToModalUpdate: function (paramfillDataToModalUpdate) {
    let self = this
    self.element.input.idRoom.val(paramfillDataToModalUpdate.id)
    self.element.input.nameUpdateRoom.val(paramfillDataToModalUpdate.name)
    self.element.input.disNameUpdateRoom.val(paramfillDataToModalUpdate.displayName)
    self.element.input.desUpdateRoom.val(paramfillDataToModalUpdate.description)
    self.element.input.projectorsUpdateRoom.val(paramfillDataToModalUpdate.hasProjectors)
    if (paramfillDataToModalUpdate.hasProjectors == 1) {
      self.element.input.projectorsUpdateRoom.prop('checked', true);
    } else {
      self.element.input.projectorsUpdateRoom.prop('checked', false);
    }

    self.element.input.boardUpdateRoom.val(paramfillDataToModalUpdate.hasBoard)
    if (paramfillDataToModalUpdate.hasBoard == 1) {
      self.element.input.boardUpdateRoom.prop('checked', true);
    } else {
      self.element.input.boardUpdateRoom.prop('checked', false);
    }

    self.element.input.colorUpdateRoom.val(paramfillDataToModalUpdate.color)
  },

  clickSubmitUpdateRoom: function () {
    let self = this
    self.element.btn.submitUpdateRoom.on('click', function () {
      let paramCallAjaxUpdate = {
        id : self.element.input.idRoom.val(),
        name: self.element.input.nameUpdateRoom.val(),
        displayName: self.element.input.disNameUpdateRoom.val(),
        description: self.element.input.desUpdateRoom.val(),
        hasProjectors: self.element.input.projectorsUpdateRoom.val(),
        hasBoard: self.element.input.boardUpdateRoom.val(),
        color: self.element.input.colorUpdateRoom.val()
      }
      self.callAjaxUpdateRoom(paramCallAjaxUpdate)
      self.hideModalUpdateRoom()
    })
  },
}

export default RoomAdmin
