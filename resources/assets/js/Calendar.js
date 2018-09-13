import Book from './Booking/Booking'
import Sweet from './sweetalert2/sweetalert'
function Calendar() {
  this.init()
}
Calendar.prototype = {

  init: function () {
    this.config()
    this.listen()
    this.loadCalendar()
  },
  config: function () {
    this.book = new Book()
    this.alertSweet = new Sweet()
    this.token = $("#token").val()
    this.element = {
      calendar: $('#calendar'),
      btn: {
        bookingDelete: $('#bookingDelete'),
        bookingChange: $('#bookingChange'),
        howCreateBook: $('#howCreateBook'),
        howUpdateBook: $('#howUpdateBook'),
        howDeleteBook: $('#howDeleteBook'),
        bookingCreate: $('#bookingCreate')
      },
      input: {
        description: $('#description'),
        descriptionCreate: $('#descriptionCreate'),
        cycleUpdateOrDeleteBooking: $('#cycleUpdateOrDeleteBooking'),
        idBooking: $('#idBooking'),
        day: $('#day'),
        hourStart: $('#hourStart'),
        roomIdCreate: $('#roomIdCreate'),
        hourEnd: $('#hourEnd'),
        dayCreate: $('#dayCreate'),
        hourStartCreate: $('#hourStartCreate'),
        hourEndCreate: $('#hourEndCreate'),
        idUserOfBook: $('#idUserOfBook'),
        room: $('#room'),
        cycleCreateBooking: $('#cycleCreateBooking'),
        dayDeleteBooking: $('#dayDeleteBooking'),
        hourStartDeleteBooking: $('#hourStartDeleteBooking'),
        hourEndDeleteBooking: $('#hourEndDeleteBooking'),
        typeBooking: $('#typeBooking'),
        dateStartCreate: $('#dateStartCreate'),
        dateEndCreate: $('#dateEndCreate')
      },
      div: {
        authentication: $('#authentication')
      },
      modal: $('#exampleModal'),
      modalCreate: $('#modalCreateBooking'),
      load: $('#load')
    }
  },

  listen: function () {
    this.clickBookingChange()
    this.clickBookingDelete()
    this.clickHowCreateBook()
    this.clickHowUpdateBook()
    this.clickHowDeleteBook()
    this.clickBookingCreate()
  },

  loadBookInCalendar: function (data) {
    this.element.calendar.fullCalendar(data)
  },

  clickHowCreateBook: function () {
    let self = this
    self.element.btn.howCreateBook.on('click', function () {
      self.alertSweet.guideCreateBook()
    })
  },

  clickHowUpdateBook: function () {
    let self = this
    self.element.btn.howUpdateBook.on('click', function () {
      self.alertSweet.guideUpdateBook()
    })
  },

  clickHowDeleteBook: function () {
    let self = this
    self.element.btn.howDeleteBook.on('click', function () {
      self.alertSweet.guideDeleteBook()
    })
  },

  clickBookingDelete: function () {
    let self = this
    self.element.btn.bookingDelete.on('click', function () {
      let paramDeleteBook = {
        idBook : self.element.input.idBooking.val(),
        dayOfBook : self.element.input.dayDeleteBooking.val(),
        hourStart : self.element.input.hourStartDeleteBooking.val(),
        hourEnd : self.element.input.hourEndDeleteBooking.val(),
        idUserOfBook : self.element.input.idUserOfBook.val(),
        cycle: self.element.input.cycleUpdateOrDeleteBooking.val(),
        type: self.element.input.typeBooking.val()
      }

      self.deleteBooking(paramDeleteBook)
      self.hideModalBootstrap()
    })
  },

  clickBookingCreate: function () {
    let self = this

    self.element.btn.bookingCreate.on('click', function () {
      let paramCreateBook = {
        description : self.element.input.descriptionCreate.val(),
        roomId : self.element.input.roomIdCreate.val(),
        dayOfBook : self.element.input.dayCreate.val(),
        hourStart : self.element.input.hourStartCreate.val(),
        hourEnd : self.element.input.hourEndCreate.val(),
        cycle: self.element.input.cycleCreateBooking.val(),
        dayStart: self.element.input.dateStartCreate.val(),
        dayEnd: self.element.input.dateEndCreate.val(),
      }

      self.createBooking(paramCreateBook)
    })
  },

  clickBookingChange: function () {
    let self = this

    self.element.btn.bookingChange.on('click', function () {
      let paramUpdateBook = {
        idBook : self.element.input.idBooking.val(),
        description : self.element.input.description.val(),
        idUserOfBook : self.element.input.idUserOfBook.val(),
        dayOfBook : self.element.input.day.val(),
        hourStart : self.element.input.hourStart.val(),
        hourEnd : self.element.input.hourEnd.val(),
        cycle: self.element.input.typeBooking.val(),
        startOld : self.element.input.hourStartDeleteBooking.val(),
        endOld : self.element.input.hourEndDeleteBooking.val(),
        dayOfBookOld : self.element.input.dayDeleteBooking.val()
      }

      self.updateBooking(paramUpdateBook)
    })
  },

  refetchBooks: function() {
    let self = this
    self.element.calendar.fullCalendar(`refetchEvents`)
  },

  fillDataToModal: function (paramfillDataToModal) {
    let self = this
    self.element.input.room.val(paramfillDataToModal.room)
    self.element.input.description.val(paramfillDataToModal.description)
    self.element.input.idUserOfBook.val(paramfillDataToModal.idUserOfBook)
    self.element.input.idBooking.val(paramfillDataToModal.idBooking)
    self.element.input.day.val(paramfillDataToModal.dayOfBook)
    self.element.input.hourStart.val(paramfillDataToModal.hourStart)
    self.element.input.hourEnd.val(paramfillDataToModal.hourEnd)
    self.element.input.dayDeleteBooking.val(paramfillDataToModal.dayOfBookDelete)
    self.element.input.hourStartDeleteBooking.val(paramfillDataToModal.hourStartDelete)
    self.element.input.hourEndDeleteBooking.val(paramfillDataToModal.hourEndDelete)
    self.element.input.typeBooking.val(paramfillDataToModal.typeBooking)
  },

  fillDataToModalCreate: function (paramfillDataToModal) {
    let self = this
    self.element.input.dayCreate.val(paramfillDataToModal.dayOfBook)
    self.element.input.hourStartCreate.val(paramfillDataToModal.hourStart)
    self.element.input.hourEndCreate.val(paramfillDataToModal.hourEnd)
    self.element.input.dateStartCreate.val(paramfillDataToModal.dateStartCreate)
    self.element.input.dateEndCreate.val(paramfillDataToModal.dateEndCreate)
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

  authButtonModalBootstrap: function (idAuth, idUserOfBook) {
    let self = this
    if (idAuth != idUserOfBook) {
      self.element.div.authentication.empty();
    }
  },

  createBooking: function (paramCreateBook) {
    let self = this
    self.book.createView(
      paramCreateBook.description,
      paramCreateBook.roomId,
      paramCreateBook.dayOfBook,
      paramCreateBook.hourStart,
      paramCreateBook.hourEnd,
      paramCreateBook.cycle,
      paramCreateBook.dayStart,
      paramCreateBook.dayEnd
    )
  },

  reloadPage : function (time) {
    setTimeout("location.reload();", time);
  },

  updateBooking: function (paramUpdateBook) {
    let self = this
    self.book.callAjaxUpdate(
      paramUpdateBook.idBook,
      paramUpdateBook.idUserOfBook,
      paramUpdateBook.description,
      paramUpdateBook.dayOfBook,
      paramUpdateBook.hourStart,
      paramUpdateBook.hourEnd,
      paramUpdateBook.cycle,
      paramUpdateBook.startOld,
      paramUpdateBook.endOld,
      paramUpdateBook.dayOfBookOld
    )
  },

  deleteBooking: function (paramDeleteBook) {
    let self = this
    self.book.deleteView(
      paramDeleteBook.idBook,
      paramDeleteBook.idUserOfBook,
      paramDeleteBook.dayOfBook,
      paramDeleteBook.hourStart,
      paramDeleteBook.hourEnd,
      paramDeleteBook.cycle,
      paramDeleteBook.type
    )
  },

  loadDataBooking: function () {
    let self = this

    let promise = new Promise(function(resolve, reject) {
      $.post(
        `${location.origin}/home/post/rooms`,
        {_token: self.token},
        function(data) {
          if (data != false) {
            resolve(data)
          }
          else {
            self.alertSweet.alertError()
            reject(Error(`loi`))
          }
        },
        `json`
      )
    })

    return promise
  },

  loadCalendar: function () {
    let self = this
    this.loadDataBooking().then(function (result) {
      self.loadBookInCalendar(
        {
          header: {
            left: `prev,next today`,
            right: `title`,
            center: `agendaWeek,agendaDay,listWeek`
          },
          height: 'parent',
          themeSystem: 'bootstrap4',
          nowIndicator: true,
          allDaySlot: false,
          selectOverlap: false,
          selectable : true,
          defaultView: `agendaWeek`,//tuy chon nay de xem lich theo tuan
          defaultDate: result[`dateNow`],
          navLinks: true, // can click day/week names to navigate views
          editable: true,
          eventLimit: true,
          eventClick: function(event, element) {
            // self.refetchBooks()
            let dataBook = `${event.description.split("-----", 1)}`
            let dataTime = `${event.description.split("-----").pop()}`
            let paramfillDataToModal = {
              room : event.resourceId,
              description : event.description.substr(event.description.indexOf('*#*')+3).replace((`*#*${event.description.split("*#*").pop()}`), ''),
              idUserOfBook : event.description.split("*#*", 1),
              idBooking : event.id,
              dayOfBook : event.start.format(`DD-MM-YYYY`),
              hourStart : event.start.format(`HH:mm:ss`),
              hourEnd : event.end.format(`HH:mm:ss`),
              dayOfBookDelete : event.start.format(`YYYY-MM-DD`),
              hourStartDelete : event.start.format(`HH:mm:ss`),
              hourEndDelete : event.end.format(`HH:mm:ss`),
              typeBooking: dataBook.split("*#*").pop()
            }

            self.authButtonModalBootstrap(result['idAuth'], paramfillDataToModal.idUserOfBook)
            self.fillDataToModal(paramfillDataToModal)
            self.showModalBootstrap()
          },
          resources: result['room'],
          events: result[`booking`],
          select: async function(start, end, jsEvent, view, resource) {
            let now = moment()
            if ((start.format() < result[`dateNow`]) || (start.format(`YYYY-MM-DD`) != end.format(`YYYY-MM-DD`)) || (start.format() < now.format()) || (start.weekday() == 6) || (start.weekday() == 0)) {
              return false
            } else {
              self.element.input.dateStartCreate.attr({"min" : start.format(`YYYY-MM-DD`)})
              self.element.input.dateEndCreate.attr({"min" : start.format(`YYYY-MM-DD`)})
              let paramfillDataToModal = {
                dayOfBook : start.format(`YYYY-MM-DD`),
                hourStart : start.format(`HH:mm:ss`),
                hourEnd : end.format(`HH:mm:ss`),
                dateStartCreate: start.format(`YYYY-MM-DD`),
                dateEndCreate: start.format(`YYYY-MM-DD`)
              }


              require('./bootstrap');


                // Khởi tạo một đối tượng Pusher với app_key
                var pusher = new Pusher('ea4c1db20cea941f0651', {
                  cluster: 'ap1',
                  encrypted: true
                });

                //Đăng ký với kênh chanel-demo-real-time mà ta đã tạo trong file DemoPusherEvent.php
                var channel = pusher.subscribe('create-booking');

                //Bind một function addMesagePusher với sự kiện DemoPusherEvent
                channel.bind('App\\Events\\CreateBooking', addMessageDemo);

                function addMessageDemo (data) {
                  let book = data
                  let Booking = new Book
                  let alertSweet = new Sweet
                  // let eventChang = Booking.createViewBoard(book.booking.id, book.booking.room_id, book.booking.title, book.booking.description, `2018-07-30T07:00:00`, `2018-07-30T08:00:00`)
                  let alertAdmin = alertSweet.alertError()

                  let eventData = {
                    id : book.booking.book['id'],
                    resourceId: book.booking.book['room_id'],
                    title: book.booking.book['description'],
                    description: `${book.booking.book['id']}-${book.booking.book['description']}`,
                    start: `${book.booking.book['day']}T${book.booking.book['hour_start']}`,
                    end: `${book.booking.book['day']}T${book.booking.book['hour_end']}`
                  };
                  console.log(eventData)
                }



              self.fillDataToModalCreate(paramfillDataToModal)
              self.showModalBootstrapCreate()
              self.element.calendar.fullCalendar(`unselect`)
            }
          },
          eventResize: function(event, delta, revertFunc) {
            let now = moment()
            if (event.start.format() < now.format() || (event.start.weekday() == 6) || (event.start.weekday() == 0)) {
              revertFunc()
            } else {
              let userIdOfBook = event.description.split("*#*", 1)

              if (result['idAuth'] != userIdOfBook) {
                revertFunc()
              } else {
                let alert = `Reservation Schedule ${event.resourceId} will finish at ${event.end.format(`HH:mm:ss`)} on ${event.end.format(`DD-MM-YYYY`)} !`
                let Confirm = self.alertSweet.confirm(alert)
                Confirm.then((result) => {
                  if (result.value) {
                    let dataBook = `${event.description.split("-----", 1)}`
                    let dataTime = `${event.description.split("-----").pop()}`
                    let paramUpdateBook = {
                      idBook: event.id,
                      description: event.description.substr(event.description.indexOf('*#*') + 3).replace((`*#*${event.description.split("*#*").pop()}`), ''),
                      idUserOfBook: `${event.description.split("*#*", 1)}`,
                      dayOfBook: event.start.format(`YYYY-MM-DD`),
                      hourStart: event.start.format(`HH:mm:ss`),
                      hourEnd: event.end.format(`HH:mm:ss`),
                      cycle: dataBook.split("*#*").pop(),
                      startOld: dataTime.substr(dataTime.indexOf('/') + 1).replace((`/${dataTime.split("/").pop()}`), ''),
                      endOld: `${dataTime.split("/").pop()}`,
                      dayOfBookOld: `${dataTime.split("/", 1)}`
                    }

                    self.updateBooking(paramUpdateBook)
                  } else {
                    revertFunc()
                  }
                })
              }
            }
          },
          eventDrop: function(event, delta, revertFunc) {
            let now = moment()
            if (event.start.format() < now.format() || (event.start.weekday() == 6) || (event.start.weekday() == 0)) {
              revertFunc()
            } else {
              let userIdOfBook = event.description.split("*#*", 1)

              if (result['idAuth'] != userIdOfBook) {
                revertFunc()
              } else {
                let alert = `Reservation Schedule ${event.resourceId} will start at ${event.start.format(`HH:mm:ss`)} and finish at ${event.end.format(`HH:mm:ss`)} on ${event.end.format(`DD-MM-YYYY`)}!`
                let Confirm = self.alertSweet.confirm(alert)
                Confirm.then((result) => {
                  if (result.value) {
                    let dataBook = `${event.description.split("-----", 1)}`
                    let dataTime = `${event.description.split("-----").pop()}`
                    let paramUpdateBook = {
                      idBook : event.id,
                      description : event.description.substr(event.description.indexOf('*#*')+3).replace((`*#*${event.description.split("*#*").pop()}`), ''),
                      idUserOfBook : `${event.description.split("*#*", 1)}`,
                      dayOfBook : event.start.format(`YYYY-MM-DD`),
                      hourStart : event.start.format(`HH:mm:ss`),
                      hourEnd : event.end.format(`HH:mm:ss`),
                      cycle: dataBook.split("*#*").pop(),
                      startOld : dataTime.substr(dataTime.indexOf('/')+1).replace((`/${dataTime.split("/").pop()}`), ''),
                      endOld : `${dataTime.split("/").pop()}`,
                      dayOfBookOld : `${dataTime.split("/", 1)}`
                    }

                    self.updateBooking(paramUpdateBook)
                  } else {
                    revertFunc()
                  }
                })
              }
            }
          },
        }
      )
    })
  }
}
// var homeLoad = new Home()
export default Calendar
