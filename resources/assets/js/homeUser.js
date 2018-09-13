import Sweet from './sweetalert2/sweetalert'
function homeUser() {
  this.init()
}

homeUser.prototype = {
  init: function () {
    this.config()
    this.listen()
  },

  config: function () {
    this.alert = new Sweet()
    this.token = $("#token").val()
    this.element = {
      pMess: $('#messChangePass'),
      input: {
        passwordOld: $('#passwordOld'),
        passwordNew: $('#passwordNew'),
        confirmPassword: $('#confirmPassword')
      },
      btn: {
        submitChagePassword :$('#submitChangePassword')
      },
      modalChangePassword: $('#modalChangePas')
    }
  },

  listen: function () {
    this.clickSubmitChagePassword()
  },

  clickSubmitChagePassword: function () {
    let self = this
    self.element.btn.submitChagePassword.click(function () {
      $.post(
        `${location.origin}/home/changePassword`,
        {
          _token: $('#token').val(),
          passwordOld: self.element.input.passwordOld.val() ? self.element.input.passwordOld.val() : null,
          passwordNew: self.element.input.passwordNew.val(),
          confirmPassword: self.element.input.confirmPassword.val(),
        },
        function(data) {
          console.log(data)
          if (data.status == false) {
            if (data.code == 500) {
              self.element.pMess.text(data.message)
            } else {
              Object.keys(data.message).forEach(key => {
                self.element.pMess.text(data.message[key][0])
              });
            }
          } else {
            let alert = `Saved`
            self.alert.alertSuccess(alert)
            self.hidemodalChangePassword()
          }
        },
        'json'
      )
    })
  },

  hidemodalChangePassword: function () {
    let self = this
    self.element.modalChangePassword.modal(`hide`)
  },
}
export default homeUser
