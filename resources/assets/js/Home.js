
import Calendar from './Calendar'
import homeUser from './homeUser'

new Calendar()
new homeUser()

$('#cycleCreateBooking').change(function () {
  if ($(this).val() == `cycleDay`) {
    $('#multiCollapseExample1').collapse('show')
  } else {
    $('#multiCollapseExample1').collapse('hide')
  }
})
$("#modalCreateBooking").on('hide.bs.modal', function () {
  $('#errorCreate').html('')
  $('#descriptionCreate').val('')
});
$("#exampleModal").on('hide.bs.modal', function () {
  $('#errorUpdate').html('')
});
$("#modalChangePas").on('hide.bs.modal', function () {
  $('#messChangePass').html('')
});
