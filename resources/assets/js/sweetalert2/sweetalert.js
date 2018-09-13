function Sweetalert() {
  this.init()
}

Sweetalert.prototype = {
  init: function () {
    this.config()
    this.listen()
  },

  config: function () {
  },

  listen: function () {
  },

  alertSuccess: function (title) {
    const toast = swal.mixin({
      toast: true,
      position: `top-end`,
      showConfirmButton: false,
      timer: 1500
    });

    toast({
      type: `success`,
      title: title
    })
  },

  alertError: function () {
    const toast = swal.mixin({
      toast: true,
      position: `top-end`,
      showConfirmButton: false,
      timer: 1500
    });

    toast({
      type: `error`,
      title: `Something went wrong!`
    })
  },

  confirm: function (title) {
    return swal({
      title: `Are you sure?`,
      text: title,
      type: `warning`,
      showCancelButton: true,
      confirmButtonColor: `#3085d6`,
      cancelButtonColor: `#d33`,
      confirmButtonText: `Yes !`
    })
  },

  text: function (title) {
    return swal({
      title: 'Multiple inputs',
      html:
      '<input id="swal-input1" type="text" class="swal2-input">' +
      '<legend>Select a maintenance drone</legend>'+
      '<div>'+
      '<input type="radio" id="huey" name="drone" checked />' +
    '<label for="huey">Huey</label>'+
     '</div>'+

      '<div>'+
      '<input type="radio" id="dewey" name="drone" />'+
      '<label for="dewey">Dewey</label>'+
      '</div>'+

      '<div>'+
      '<input type="radio" id="louie" name="drone" />'+
      '<label for="louie">Louie</label>'+
      '</div>',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })
  },

  guideCreateBook: function () {
    swal.mixin({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Step 1',
        text: 'Select "Time" booking on calendar.'
      },
      {
        title: 'Step 2',
        text: 'Insert "description", choose "room" and choose "cycle" booking'
      },
      {
        title: 'Step 3',
        text: 'Click "Create".'
      }
    ]).then((result) => {
        swal({
          title: 'All done!',
          confirmButtonText: 'Lovely!'
        })
    })
  },

  guideUpdateBook: function () {
    swal.mixin({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
      {
        title: 'Step 1',
        text: '"Resize" or "Drag and Drop" or "Click" booking.'
      },
      {
        title: 'Step 2',
        text: 'Confirm change if "Resize" or "Drag and Drop" - Make changes if "Click" and click button "Change"'
      }
    ]).then((result) => {
      swal({
        title: 'All done!',
        confirmButtonText: 'Lovely!'
      })
    })
  },

  guideDeleteBook: function () {
    swal.mixin({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Step 1',
        text: '"Click" booking you want delete.'
      },
      {
        title: 'Step 2',
        text: 'Choose cycle "Delete".'
      },
      {
        title: 'Step 3',
        text: 'Click button "Delete"'
      }
    ]).then((result) => {
      swal({
        title: 'All done!',
        confirmButtonText: 'Lovely!'
      })
    })
  }
}
export default Sweetalert
