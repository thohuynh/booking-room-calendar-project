import Book from './Booking/Booking'
import Sweet from './sweetalert2/sweetalert'
require('./bootstrap');

$(document).ready(function(){
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

});



//
// Echo.channel('create-booking')
//   .listen('CreateBooking', (e) => {
//     let book = e.booking
//     console.log(book)
//     let eventChang = $('#calendar').fullCalendar( 'clientEvents', book['id'])
//     // let eventData = {
//     //   id : book['id'],
//     //   resourceId: book['room_id'],
//     //   title: book['description'],
//     //   description: `${book['id']}-${book['description']}`,
//     //   start: `${book['day']}T${book['hour_start']}`,
//     //   end: `${book['day']}T${book['hour_end']}`
//     // };
//     // $('#calendar').fullCalendar('renderEvent', eventData, true) // stick? = true
//     console.log(eventChang)
//   });