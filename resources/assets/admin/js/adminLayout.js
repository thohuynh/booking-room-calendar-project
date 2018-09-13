function adminLayout() {
  this.init()
}

adminLayout.prototype = {
  init: function () {
    this.config()
    this.listen()
  },

  config: function () {
    this.element = {
      tableData: $('.tableData'),
      input: {
        checkBoxBoardCreateRoom: $('#boardCreateRoom')
      }
    }
  },

  listen: function () {
    this.loadTableDefault()
    this.checkBoardCreate()
    this.closeOpenMenuLeft()
  },

  loadTableDefault: function () {
    let self = this
    self.element.tableData.DataTable()
  },

  checkBoardCreate: function () {
    let self = this
    self.element.input.checkBoxBoardCreateRoom.change(function(){
      if ($(this).is(':checked')) {
        self.element.input.checkBoxBoardCreateRoom.val(1)
      } else {
        self.element.input.checkBoxBoardCreateRoom.val(0)
      }
    })
  },

  closeOpenMenuLeft: function () {
    let path = location.pathname.split('/')[2];
    if (path) {
      let elementInfo = "."+path+"-menu-info";
      let element = "."+path+"-menu";
      $(elementInfo).css('display', 'block')
      $(element).addClass('menu-open')
    }
  }
}
export default adminLayout
