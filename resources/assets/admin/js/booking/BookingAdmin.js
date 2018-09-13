import Sweet from '../../../js/sweetalert2/sweetalert'
function BookingAdmin() {
  this.init()
}

BookingAdmin.prototype = {
  init: function () {
    this.config()
    this.listen()
  },

  config: function () {
    this.alert = new Sweet()
    this.token = $("#token").val()
    this.element = {
      btn: {
        deleteBooking: $('.btn-delete-booking'),
      }
    }
  },

  listen: function () {
    this.clickDeleteBooking()
  },

  clickDeleteBooking: function () {
    let self = this
    self.element.btn.deleteBooking.on('click', function () {
      let Confirm = self.alert.confirm(`XOA ?`)
      Confirm.then((result) => {
        if (result.value) {
          let id = $(this).data('id')
          self.callAjaxDeleteBooking(id)
        } else {
          self.alert.alertError()
        }
      })
    })
  },

  callAjaxDeleteBooking: function (idBooking) {
    let self = this
    $.post(
      `${location.origin}/admin/booking/${idBooking}`,
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
          $(`#booking-list-${idBooking}`).remove()
        }
      },
      'text'
    )
  }
}

export default BookingAdmin
