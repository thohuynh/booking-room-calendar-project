
import RoleAdmin from './role/RoleAdmin'
import AdminLayout from './adminLayout.js'
import RoomAdmin from './room/RoomAdmin'
import UserAdmin from './user/UserAdmin'
import BookingAdmin from './booking/BookingAdmin'
import Sweet from './../../js/sweetalert2/sweetalert'

new RoleAdmin()
new RoomAdmin()
new BookingAdmin()
new UserAdmin()
new AdminLayout()

require('./../../js/bootstrap');

$(document).ready(function(){
  // Khởi tạo một đối tượng Pusher với app_key
  var pusher = new Pusher('ea4c1db20cea941f0651', {
    cluster: 'ap1',
    encrypted: true
  });

  //Đăng ký với kênh create-booking mà ta đã tạo trong file CreateBooking.php
  var channel = pusher.subscribe('create-booking');

  //Bind một function alertAdmin với sự kiện CreateBooking
  channel.bind('App\\Events\\CreateBooking', alertAdmin);
});

function alertAdmin(data) {
  console.log(data)
  let book = data
  let alertSweet = new Sweet
  let titleAlert = `${book.booking['nameAuth']} have new booking`
  let alertAdmin = alertSweet.alertSuccess(titleAlert)
}
