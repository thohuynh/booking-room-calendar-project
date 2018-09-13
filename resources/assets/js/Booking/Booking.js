import Sweet from '../sweetalert2/sweetalert'
function Booking(){
  this.init()
}
Booking.prototype = {
  init: function () {
    this.config()
    this.listen()
  },

  config: function () {
    this.alert = new Sweet()
    this.token = $("#token").val()
    this.element = {
      calendar: $('#calendar'),
      modal: $('#exampleModal'),
      modalCreate: $('#modalCreateBooking'),
      divAlertErrorCreate: $('#errorCreate'),
      divAlertErrorUpdate: $('#errorUpdate')
    }
  },

  listen: function () {
  },

  injectErrorCreate: function (error) {
    let self = this
    self.element.divAlertErrorCreate.html(`<div class="alert alert-danger"><h1>${error}</h1></div>`)
  },

  injectErrorUpdate: function (error) {
    let self = this
    self.element.divAlertErrorUpdate.html(`<div class="alert alert-danger"><h1>${error}</h1></div>`)
  },

  showModalBootstrap: function () {
    let self = this
    self.element.modal.modal(`show`)
  },

  hideModalBootstrap: function () {
    let self = this
    self.element.modal.modal(`hide`)
  },

  showModalBootstrapCreate: function () {
    let self = this
    self.element.modalCreate.modal(`show`)
  },

  hideModalBootstrapCreate: function () {
    let self = this
    self.element.modalCreate.modal(`hide`)
  },

  callAjaxUpdate: function(id, idUserOfBooking, description, dayOfBook, start, end, cycle, startOld, endOld, dayOfBookOld){
    let self = this

    $.post(
      `${location.origin}/home/post/updateBooking`,
      {
        _token: self.token,
        id: id,
        description: description,
        idUserOfBook: idUserOfBooking,
        startOld: startOld,
        endOld: endOld,
        dayOfBookOld: dayOfBookOld,
        cycle: cycle,
        start: start,
        end: end,
        dayOfBook: dayOfBook,
      },
      function(data) {
        if (data.status == false) {
          if (data.code == 403) {
            self.injectErrorUpdate(`Day is Weekend`)
          } else if (data.code == 500) {
            self.injectErrorUpdate(`There have been books during this time`)
          } else {
            Object.keys(data.message).forEach(key => {
              self.injectErrorUpdate(data.message[key][0])
            });
          }
        } else {
          let alert = `Saved`
          self.alert.alertSuccess(alert)
          self.updateViewUpdateBooking(id, dayOfBook, idUserOfBooking, description, start, end, cycle, data.data)
          self.hideModalBootstrap()
        }
      },
      'json'
    )
  },

  updateViewUpdateBooking: function (id, dayOfBook, idUserOfBooking, description, start, end, cycle, dataFromAjax) {
    let self = this
    let i
    if (dataFromAjax != null) {
      for (i = 0; i < dataFromAjax.booking.length; i++) {
        if (dataFromAjax.booking[i] != null) {

          let dayChange = dataFromAjax.booking[i].day
          let startChange = `${dayChange}T${dataFromAjax.booking[i].hour_start}`
          let endChange = `${dayChange}T${dataFromAjax.booking[i].hour_end}`
          let eventChang = self.element.calendar.fullCalendar( 'clientEvents', dataFromAjax.booking[i].id)

          eventChang[0].description = `${idUserOfBooking}*#*${description}*#*${dataFromAjax.booking[i].type}-----${dataFromAjax.booking[i].day}/${dataFromAjax.booking[i].hour_start}/${dataFromAjax.booking[i].hour_end}`
          eventChang[0].title = `${dataFromAjax.nameOfUser} : \n ${description}`
          eventChang[0].start = $.fullCalendar.moment(startChange);
          eventChang[0].end = $.fullCalendar.moment(endChange);

          self.element.calendar.fullCalendar('updateEvent', eventChang[0])
        } else {
          return false
        }
      }
    } else {
      console.log('asdasd')
    }
  },

  deleteView: function (id, idUserOfBook, dayOfBook, start, end, cycle, type) {
    let self = this
    this.callAjaxDelete(id, idUserOfBook, dayOfBook, start, end, cycle, type).then(function(result) {
      let i
      for (i = 0; i < result.length; i++) {
        if (result) {
          if (result[i] != null) {
            self.element.calendar.fullCalendar(`removeEvents`, result[i].id)
          } else {
            return false
          }
        } else {
          return false
        }
      }
    })
  },

  callAjaxDelete: function(id, idUserOfBook, dayOfBook, start, end, cycle, type){
    let self = this
    let promise = new Promise(function(resolve, reject) {
      $.post(
        `${location.origin}/home/post/deleteBooking`,
        {
          _token: self.token,
          idUserOfBook: idUserOfBook,
          id: id,
          dayOfBook : dayOfBook,
          start: start,
          end: end,
          cycle: cycle,
          type: type
        },
        function(data) {
          let result = JSON.parse(data)
          if (result == false) {
            self.alert.alertError()
          } else {
            resolve(result)
            let alert = `Deleted`
            self.alert.alertSuccess(alert)
          }
        },
        'text'
      )
    })

    return promise
  },

  createView: function(description, roomId, day, start, end, cycle, dayStart, dayEnd){
    let self = this




    this.callAjaxCreate(description, roomId, day, start, end, cycle, dayStart, dayEnd).then(function(result) {
      let i
        for (i = 0; i < result.booking.length; i++) {
          if (result.booking[i] != null) {
          let eventData = {
            id : result.booking[i].id,
            resourceId: roomId,
            title: `${result.nameOfUser} : \n ${description}`,
            description: `${result.userId}*#*${description}*#*${result.type}-----${result.booking[i].day}/${start}/${end}`,
            start: `${result.booking[i].day}T${start}`,
            end: `${result.booking[i].day}T${end}`
          };
          self.element.calendar.fullCalendar('renderEvent', eventData, true) // stick? = true
          } else {
            return false
          }
        }
    })
  },

  callAjaxCreate: function(description, roomId, dayOfBook, start, end, cycle, dayStart, dayEnd){
    let self = this

    let promise = new Promise(function(resolve, reject) {
      $.post(
        `${location.origin}/home/post/createBooking`,
        {
          _token: self.token,
          description: `${description}`,
          dayOfBook: dayOfBook,
          roomId: roomId,
          start: start,
          end: end,
          cycle: `${cycle}&&${description}`,
          dayStart: dayStart,
          dayEnd: dayEnd
        },
        function(data) {
          if (data.status == false) {
            if (data.code == 403) {
              self.injectErrorCreate(`Day is Weekend`)
            } else if (data.code == 500) {
              self.injectErrorCreate(`There have been books during this time`)
            } else if (data.code = 400) {
              Object.keys(data.message).forEach(key => {
                self.injectErrorCreate(data.message[key][0])
              });
            }
          } else {
            let alert = `Room was booked`
            self.alert.alertSuccess(alert)
            resolve(data.data)
            self.hideModalBootstrapCreate()
          }
        },
        'json'
      )
    })

    return promise
  }
}
export default Booking
