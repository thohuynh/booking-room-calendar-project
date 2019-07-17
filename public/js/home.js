/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Sweetalert() {
  this.init();
}

Sweetalert.prototype = {
  init: function init() {
    this.config();
    this.listen();
  },

  config: function config() {},

  listen: function listen() {},

  alertSuccess: function alertSuccess(title) {
    var toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500
    });

    toast({
      type: 'success',
      title: title
    });
  },

  alertError: function alertError() {
    var toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500
    });

    toast({
      type: 'error',
      title: 'Something went wrong!'
    });
  },

  confirm: function confirm(title) {
    return swal({
      title: 'Are you sure?',
      text: title,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes !'
    });
  },

  text: function text(title) {
    return swal({
      title: 'Multiple inputs',
      html: '<input id="swal-input1" type="text" class="swal2-input">' + '<legend>Select a maintenance drone</legend>' + '<div>' + '<input type="radio" id="huey" name="drone" checked />' + '<label for="huey">Huey</label>' + '</div>' + '<div>' + '<input type="radio" id="dewey" name="drone" />' + '<label for="dewey">Dewey</label>' + '</div>' + '<div>' + '<input type="radio" id="louie" name="drone" />' + '<label for="louie">Louie</label>' + '</div>',
      focusConfirm: false,
      preConfirm: function preConfirm() {
        return [document.getElementById('swal-input1').value, document.getElementById('swal-input2').value];
      }
    });
  },

  guideCreateBook: function guideCreateBook() {
    swal.mixin({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([{
      title: 'Step 1',
      text: 'Select "Time" booking on calendar.'
    }, {
      title: 'Step 2',
      text: 'Insert "description", choose "room" and choose "cycle" booking'
    }, {
      title: 'Step 3',
      text: 'Click "Create".'
    }]).then(function (result) {
      swal({
        title: 'All done!',
        confirmButtonText: 'Lovely!'
      });
    });
  },

  guideUpdateBook: function guideUpdateBook() {
    swal.mixin({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([{
      title: 'Step 1',
      text: '"Resize" or "Drag and Drop" or "Click" booking.'
    }, {
      title: 'Step 2',
      text: 'Confirm change if "Resize" or "Drag and Drop" - Make changes if "Click" and click button "Change"'
    }]).then(function (result) {
      swal({
        title: 'All done!',
        confirmButtonText: 'Lovely!'
      });
    });
  },

  guideDeleteBook: function guideDeleteBook() {
    swal.mixin({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([{
      title: 'Step 1',
      text: '"Click" booking you want delete.'
    }, {
      title: 'Step 2',
      text: 'Choose cycle "Delete".'
    }, {
      title: 'Step 3',
      text: 'Click button "Delete"'
    }]).then(function (result) {
      swal({
        title: 'All done!',
        confirmButtonText: 'Lovely!'
      });
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Sweetalert);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store  = __webpack_require__(28)('wks')
  , uid    = __webpack_require__(29)
  , Symbol = __webpack_require__(3).Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(21);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(27)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(3)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(6)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(1).setDesc
  , has = __webpack_require__(20)
  , TAG = __webpack_require__(2)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(49)
  , defined = __webpack_require__(30);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sweetalert2_sweetalert__ = __webpack_require__(0);

function Booking() {
  this.init();
}
Booking.prototype = {
  init: function init() {
    this.config();
    this.listen();
  },

  config: function config() {
    this.alert = new __WEBPACK_IMPORTED_MODULE_0__sweetalert2_sweetalert__["a" /* default */]();
    this.token = $("#token").val();
    this.element = {
      calendar: $('#calendar'),
      modal: $('#exampleModal'),
      modalCreate: $('#modalCreateBooking'),
      divAlertErrorCreate: $('#errorCreate'),
      divAlertErrorUpdate: $('#errorUpdate')
    };
  },

  listen: function listen() {},

  injectErrorCreate: function injectErrorCreate(error) {
    var self = this;
    self.element.divAlertErrorCreate.html('<div class="alert alert-danger"><h1>' + error + '</h1></div>');
  },

  injectErrorUpdate: function injectErrorUpdate(error) {
    var self = this;
    self.element.divAlertErrorUpdate.html('<div class="alert alert-danger"><h1>' + error + '</h1></div>');
  },

  showModalBootstrap: function showModalBootstrap() {
    var self = this;
    self.element.modal.modal('show');
  },

  hideModalBootstrap: function hideModalBootstrap() {
    var self = this;
    self.element.modal.modal('hide');
  },

  showModalBootstrapCreate: function showModalBootstrapCreate() {
    var self = this;
    self.element.modalCreate.modal('show');
  },

  hideModalBootstrapCreate: function hideModalBootstrapCreate() {
    var self = this;
    self.element.modalCreate.modal('hide');
  },

  callAjaxUpdate: function callAjaxUpdate(id, idUserOfBooking, description, dayOfBook, start, end, cycle, startOld, endOld, dayOfBookOld) {
    var self = this;

    $.post(location.origin + '/home/post/updateBooking', {
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
      dayOfBook: dayOfBook
    }, function (data) {
      if (data.status == false) {
        if (data.code == 403) {
          self.injectErrorUpdate('Day is Weekend');
        } else if (data.code == 500) {
          self.injectErrorUpdate('There have been books during this time');
        } else {
          Object.keys(data.message).forEach(function (key) {
            self.injectErrorUpdate(data.message[key][0]);
          });
        }
      } else {
        var alert = 'Saved';
        self.alert.alertSuccess(alert);
        self.updateViewUpdateBooking(id, dayOfBook, idUserOfBooking, description, start, end, cycle, data.data);
        self.hideModalBootstrap();
      }
    }, 'json');
  },

  updateViewUpdateBooking: function updateViewUpdateBooking(id, dayOfBook, idUserOfBooking, description, start, end, cycle, dataFromAjax) {
    var self = this;
    var i = void 0;
    if (dataFromAjax != null) {
      for (i = 0; i < dataFromAjax.booking.length; i++) {
        if (dataFromAjax.booking[i] != null) {

          var dayChange = dataFromAjax.booking[i].day;
          var startChange = dayChange + 'T' + dataFromAjax.booking[i].hour_start;
          var endChange = dayChange + 'T' + dataFromAjax.booking[i].hour_end;
          var eventChang = self.element.calendar.fullCalendar('clientEvents', dataFromAjax.booking[i].id);

          eventChang[0].description = idUserOfBooking + '*#*' + description + '*#*' + dataFromAjax.booking[i].type + '-----' + dataFromAjax.booking[i].day + '/' + dataFromAjax.booking[i].hour_start + '/' + dataFromAjax.booking[i].hour_end;
          eventChang[0].title = dataFromAjax.nameOfUser + ' : \n ' + description;
          eventChang[0].start = $.fullCalendar.moment(startChange);
          eventChang[0].end = $.fullCalendar.moment(endChange);

          self.element.calendar.fullCalendar('updateEvent', eventChang[0]);
        } else {
          return false;
        }
      }
    } else {
      console.log('asdasd');
    }
  },

  deleteView: function deleteView(id, idUserOfBook, dayOfBook, start, end, cycle, type) {
    var self = this;
    this.callAjaxDelete(id, idUserOfBook, dayOfBook, start, end, cycle, type).then(function (result) {
      var i = void 0;
      for (i = 0; i < result.length; i++) {
        if (result) {
          if (result[i] != null) {
            self.element.calendar.fullCalendar('removeEvents', result[i].id);
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    });
  },

  callAjaxDelete: function callAjaxDelete(id, idUserOfBook, dayOfBook, start, end, cycle, type) {
    var self = this;
    var promise = new Promise(function (resolve, reject) {
      $.post(location.origin + '/home/post/deleteBooking', {
        _token: self.token,
        idUserOfBook: idUserOfBook,
        id: id,
        dayOfBook: dayOfBook,
        start: start,
        end: end,
        cycle: cycle,
        type: type
      }, function (data) {
        var result = JSON.parse(data);
        if (result == false) {
          self.alert.alertError();
        } else {
          resolve(result);
          var alert = 'Deleted';
          self.alert.alertSuccess(alert);
        }
      }, 'text');
    });

    return promise;
  },

  createView: function createView(description, roomId, day, start, end, cycle, dayStart, dayEnd) {
    var self = this;

    this.callAjaxCreate(description, roomId, day, start, end, cycle, dayStart, dayEnd).then(function (result) {
      var i = void 0;
      for (i = 0; i < result.booking.length; i++) {
        if (result.booking[i] != null) {
          var eventData = {
            id: result.booking[i].id,
            resourceId: roomId,
            title: result.nameOfUser + ' : \n ' + description,
            description: result.userId + '*#*' + description + '*#*' + result.type + '-----' + result.booking[i].day + '/' + start + '/' + end,
            start: result.booking[i].day + 'T' + start,
            end: result.booking[i].day + 'T' + end
          };
          self.element.calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
        } else {
          return false;
        }
      }
    });
  },

  callAjaxCreate: function callAjaxCreate(description, roomId, dayOfBook, start, end, cycle, dayStart, dayEnd) {
    var self = this;

    var promise = new Promise(function (resolve, reject) {
      $.post(location.origin + '/home/post/createBooking', {
        _token: self.token,
        description: '' + description,
        dayOfBook: dayOfBook,
        roomId: roomId,
        start: start,
        end: end,
        cycle: cycle + '&&' + description,
        dayStart: dayStart,
        dayEnd: dayEnd
      }, function (data) {
        if (data.status == false) {
          if (data.code == 403) {
            self.injectErrorCreate('Day is Weekend');
          } else if (data.code == 500) {
            self.injectErrorCreate('There have been books during this time');
          } else if (data.code = 400) {
            Object.keys(data.message).forEach(function (key) {
              self.injectErrorCreate(data.message[key][0]);
            });
          }
        } else {
          var alert = 'Room was booked';
          self.alert.alertSuccess(alert);
          resolve(data.data);
          self.hideModalBootstrapCreate();
        }
      }, 'json');
    });

    return promise;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Booking);

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var $          = __webpack_require__(1)
  , createDesc = __webpack_require__(24);
module.exports = __webpack_require__(9) ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = __webpack_require__(1).getDesc
  , isObject = __webpack_require__(13)
  , anObject = __webpack_require__(5);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(6)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(25)
  , $export        = __webpack_require__(10)
  , redefine       = __webpack_require__(22)
  , hide           = __webpack_require__(23)
  , has            = __webpack_require__(20)
  , Iterators      = __webpack_require__(8)
  , $iterCreate    = __webpack_require__(62)
  , setToStringTag = __webpack_require__(11)
  , getProto       = __webpack_require__(1).getProto
  , ITERATOR       = __webpack_require__(2)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(7)
  , TAG = __webpack_require__(2)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Calendar__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homeUser__ = __webpack_require__(84);




new __WEBPACK_IMPORTED_MODULE_0__Calendar__["a" /* default */]();
new __WEBPACK_IMPORTED_MODULE_1__homeUser__["a" /* default */]();

$('#cycleCreateBooking').change(function () {
  if ($(this).val() == 'cycleDay') {
    $('#multiCollapseExample1').collapse('show');
  } else {
    $('#multiCollapseExample1').collapse('hide');
  }
});
$("#modalCreateBooking").on('hide.bs.modal', function () {
  $('#errorCreate').html('');
  $('#descriptionCreate').val('');
});
$("#exampleModal").on('hide.bs.modal', function () {
  $('#errorUpdate').html('');
});
$("#modalChangePas").on('hide.bs.modal', function () {
  $('#messChangePass').html('');
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Booking_Booking__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sweetalert2_sweetalert__ = __webpack_require__(0);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



function Calendar() {
  this.init();
}
Calendar.prototype = {

  init: function init() {
    this.config();
    this.listen();
    this.loadCalendar();
  },
  config: function config() {
    this.book = new __WEBPACK_IMPORTED_MODULE_1__Booking_Booking__["a" /* default */]();
    this.alertSweet = new __WEBPACK_IMPORTED_MODULE_2__sweetalert2_sweetalert__["a" /* default */]();
    this.token = $("#token").val();
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
    };
  },

  listen: function listen() {
    this.clickBookingChange();
    this.clickBookingDelete();
    this.clickHowCreateBook();
    this.clickHowUpdateBook();
    this.clickHowDeleteBook();
    this.clickBookingCreate();
  },

  loadBookInCalendar: function loadBookInCalendar(data) {
    this.element.calendar.fullCalendar(data);
  },

  clickHowCreateBook: function clickHowCreateBook() {
    var self = this;
    self.element.btn.howCreateBook.on('click', function () {
      self.alertSweet.guideCreateBook();
    });
  },

  clickHowUpdateBook: function clickHowUpdateBook() {
    var self = this;
    self.element.btn.howUpdateBook.on('click', function () {
      self.alertSweet.guideUpdateBook();
    });
  },

  clickHowDeleteBook: function clickHowDeleteBook() {
    var self = this;
    self.element.btn.howDeleteBook.on('click', function () {
      self.alertSweet.guideDeleteBook();
    });
  },

  clickBookingDelete: function clickBookingDelete() {
    var self = this;
    self.element.btn.bookingDelete.on('click', function () {
      var paramDeleteBook = {
        idBook: self.element.input.idBooking.val(),
        dayOfBook: self.element.input.dayDeleteBooking.val(),
        hourStart: self.element.input.hourStartDeleteBooking.val(),
        hourEnd: self.element.input.hourEndDeleteBooking.val(),
        idUserOfBook: self.element.input.idUserOfBook.val(),
        cycle: self.element.input.cycleUpdateOrDeleteBooking.val(),
        type: self.element.input.typeBooking.val()
      };

      self.deleteBooking(paramDeleteBook);
      self.hideModalBootstrap();
    });
  },

  clickBookingCreate: function clickBookingCreate() {
    var self = this;

    self.element.btn.bookingCreate.on('click', function () {
      var paramCreateBook = {
        description: self.element.input.descriptionCreate.val(),
        roomId: self.element.input.roomIdCreate.val(),
        dayOfBook: self.element.input.dayCreate.val(),
        hourStart: self.element.input.hourStartCreate.val(),
        hourEnd: self.element.input.hourEndCreate.val(),
        cycle: self.element.input.cycleCreateBooking.val(),
        dayStart: self.element.input.dateStartCreate.val(),
        dayEnd: self.element.input.dateEndCreate.val()
      };

      self.createBooking(paramCreateBook);
    });
  },

  clickBookingChange: function clickBookingChange() {
    var self = this;

    self.element.btn.bookingChange.on('click', function () {
      var paramUpdateBook = {
        idBook: self.element.input.idBooking.val(),
        description: self.element.input.description.val(),
        idUserOfBook: self.element.input.idUserOfBook.val(),
        dayOfBook: self.element.input.day.val(),
        hourStart: self.element.input.hourStart.val(),
        hourEnd: self.element.input.hourEnd.val(),
        cycle: self.element.input.typeBooking.val(),
        startOld: self.element.input.hourStartDeleteBooking.val(),
        endOld: self.element.input.hourEndDeleteBooking.val(),
        dayOfBookOld: self.element.input.dayDeleteBooking.val()
      };

      self.updateBooking(paramUpdateBook);
    });
  },

  refetchBooks: function refetchBooks() {
    var self = this;
    self.element.calendar.fullCalendar('refetchEvents');
  },

  fillDataToModal: function fillDataToModal(paramfillDataToModal) {
    var self = this;
    self.element.input.room.val(paramfillDataToModal.room);
    self.element.input.description.val(paramfillDataToModal.description);
    self.element.input.idUserOfBook.val(paramfillDataToModal.idUserOfBook);
    self.element.input.idBooking.val(paramfillDataToModal.idBooking);
    self.element.input.day.val(paramfillDataToModal.dayOfBook);
    self.element.input.hourStart.val(paramfillDataToModal.hourStart);
    self.element.input.hourEnd.val(paramfillDataToModal.hourEnd);
    self.element.input.dayDeleteBooking.val(paramfillDataToModal.dayOfBookDelete);
    self.element.input.hourStartDeleteBooking.val(paramfillDataToModal.hourStartDelete);
    self.element.input.hourEndDeleteBooking.val(paramfillDataToModal.hourEndDelete);
    self.element.input.typeBooking.val(paramfillDataToModal.typeBooking);
  },

  fillDataToModalCreate: function fillDataToModalCreate(paramfillDataToModal) {
    var self = this;
    self.element.input.dayCreate.val(paramfillDataToModal.dayOfBook);
    self.element.input.hourStartCreate.val(paramfillDataToModal.hourStart);
    self.element.input.hourEndCreate.val(paramfillDataToModal.hourEnd);
    self.element.input.dateStartCreate.val(paramfillDataToModal.dateStartCreate);
    self.element.input.dateEndCreate.val(paramfillDataToModal.dateEndCreate);
  },

  showModalBootstrap: function showModalBootstrap() {
    var self = this;
    self.element.modal.modal('show');
  },

  hideModalBootstrap: function hideModalBootstrap() {
    var self = this;
    self.element.modal.modal('hide');
  },

  showModalBootstrapCreate: function showModalBootstrapCreate() {
    var self = this;
    self.element.modalCreate.modal('show');
  },

  hideModalBootstrapCreate: function hideModalBootstrapCreate() {
    var self = this;
    self.element.modalCreate.modal('hide');
  },

  authButtonModalBootstrap: function authButtonModalBootstrap(idAuth, idUserOfBook) {
    var self = this;
    if (idAuth != idUserOfBook) {
      self.element.div.authentication.empty();
    }
  },

  createBooking: function createBooking(paramCreateBook) {
    var self = this;
    self.book.createView(paramCreateBook.description, paramCreateBook.roomId, paramCreateBook.dayOfBook, paramCreateBook.hourStart, paramCreateBook.hourEnd, paramCreateBook.cycle, paramCreateBook.dayStart, paramCreateBook.dayEnd);
  },

  reloadPage: function reloadPage(time) {
    setTimeout("location.reload();", time);
  },

  updateBooking: function updateBooking(paramUpdateBook) {
    var self = this;
    self.book.callAjaxUpdate(paramUpdateBook.idBook, paramUpdateBook.idUserOfBook, paramUpdateBook.description, paramUpdateBook.dayOfBook, paramUpdateBook.hourStart, paramUpdateBook.hourEnd, paramUpdateBook.cycle, paramUpdateBook.startOld, paramUpdateBook.endOld, paramUpdateBook.dayOfBookOld);
  },

  deleteBooking: function deleteBooking(paramDeleteBook) {
    var self = this;
    self.book.deleteView(paramDeleteBook.idBook, paramDeleteBook.idUserOfBook, paramDeleteBook.dayOfBook, paramDeleteBook.hourStart, paramDeleteBook.hourEnd, paramDeleteBook.cycle, paramDeleteBook.type);
  },

  loadDataBooking: function loadDataBooking() {
    var self = this;

    var promise = new Promise(function (resolve, reject) {
      $.post(location.origin + '/home/post/rooms', { _token: self.token }, function (data) {
        if (data != false) {
          resolve(data);
        } else {
          self.alertSweet.alertError();
          reject(Error('loi'));
        }
      }, 'json');
    });

    return promise;
  },

  loadCalendar: function loadCalendar() {
    var self = this;
    this.loadDataBooking().then(function (result) {
      self.loadBookInCalendar({
        header: {
          left: 'prev,next     today',
          right: 'title',
          center: 'agendaWeek,agendaDay,listWeek'
        },
        height: 'parent',
        themeSystem: 'bootstrap4',
        nowIndicator: true,
        allDaySlot: false,
        selectOverlap: false,
        selectable: true,
        defaultView: 'agendaWeek', //tuy chon nay de xem lich theo tuan
        defaultDate: result['dateNow'],
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true,
        eventClick: function eventClick(event, element) {
          // self.refetchBooks()
          var dataBook = '' + event.description.split("-----", 1);
          var dataTime = '' + event.description.split("-----").pop();
          var paramfillDataToModal = {
            room: event.resourceId,
            description: event.description.substr(event.description.indexOf('*#*') + 3).replace('*#*' + event.description.split("*#*").pop(), ''),
            idUserOfBook: event.description.split("*#*", 1),
            idBooking: event.id,
            dayOfBook: event.start.format('DD-MM-YYYY'),
            hourStart: event.start.format('HH:mm:ss'),
            hourEnd: event.end.format('HH:mm:ss'),
            dayOfBookDelete: event.start.format('YYYY-MM-DD'),
            hourStartDelete: event.start.format('HH:mm:ss'),
            hourEndDelete: event.end.format('HH:mm:ss'),
            typeBooking: dataBook.split("*#*").pop()
          };

          self.authButtonModalBootstrap(result['idAuth'], paramfillDataToModal.idUserOfBook);
          self.fillDataToModal(paramfillDataToModal);
          self.showModalBootstrap();
        },
        resources: result['room'],
        events: result['booking'],
        select: function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(start, end, jsEvent, view, resource) {
            var now, paramfillDataToModal;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    now = moment();

                    if (!(start.format() < result['dateNow'] || start.format('YYYY-MM-DD') != end.format('YYYY-MM-DD') || start.format() < now.format() || start.weekday() == 6 || start.weekday() == 0)) {
                      _context.next = 5;
                      break;
                    }

                    return _context.abrupt('return', false);

                  case 5:
                    self.element.input.dateStartCreate.attr({ "min": start.format('YYYY-MM-DD') });
                    self.element.input.dateEndCreate.attr({ "min": start.format('YYYY-MM-DD') });
                    paramfillDataToModal = {
                      dayOfBook: start.format('YYYY-MM-DD'),
                      hourStart: start.format('HH:mm:ss'),
                      hourEnd: end.format('HH:mm:ss'),
                      dateStartCreate: start.format('YYYY-MM-DD'),
                      dateEndCreate: start.format('YYYY-MM-DD')
                    };


                    self.fillDataToModalCreate(paramfillDataToModal);
                    $('#modalCreateBooking').modal('show');
                    //self.showModalBootstrapCreate()
                    //self.element.calendar.fullCalendar(`unselect`)

                  case 10:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function select(_x, _x2, _x3, _x4, _x5) {
            return _ref.apply(this, arguments);
          }

          return select;
        }(),
        eventResize: function eventResize(event, delta, revertFunc) {
          var now = moment();
          if (event.start.format() < now.format() || event.start.weekday() == 6 || event.start.weekday() == 0) {
            revertFunc();
          } else {
            var userIdOfBook = event.description.split("*#*", 1);

            if (result['idAuth'] != userIdOfBook) {
              revertFunc();
            } else {
              var alert = 'Reservation Schedule ' + event.resourceId + ' will finish at ' + event.end.format('HH:mm:ss') + ' on ' + event.end.format('DD-MM-YYYY') + ' !';
              var Confirm = self.alertSweet.confirm(alert);
              Confirm.then(function (result) {
                if (result.value) {
                  var dataBook = '' + event.description.split("-----", 1);
                  var dataTime = '' + event.description.split("-----").pop();
                  var paramUpdateBook = {
                    idBook: event.id,
                    description: event.description.substr(event.description.indexOf('*#*') + 3).replace('*#*' + event.description.split("*#*").pop(), ''),
                    idUserOfBook: '' + event.description.split("*#*", 1),
                    dayOfBook: event.start.format('YYYY-MM-DD'),
                    hourStart: event.start.format('HH:mm:ss'),
                    hourEnd: event.end.format('HH:mm:ss'),
                    cycle: dataBook.split("*#*").pop(),
                    startOld: dataTime.substr(dataTime.indexOf('/') + 1).replace('/' + dataTime.split("/").pop(), ''),
                    endOld: '' + dataTime.split("/").pop(),
                    dayOfBookOld: '' + dataTime.split("/", 1)
                  };

                  self.updateBooking(paramUpdateBook);
                } else {
                  revertFunc();
                }
              });
            }
          }
        },
        eventDrop: function eventDrop(event, delta, revertFunc) {
          var now = moment();
          if (event.start.format() < now.format() || event.start.weekday() == 6 || event.start.weekday() == 0) {
            revertFunc();
          } else {
            var userIdOfBook = event.description.split("*#*", 1);

            if (result['idAuth'] != userIdOfBook) {
              revertFunc();
            } else {
              var alert = 'Reservation Schedule ' + event.resourceId + ' will start at ' + event.start.format('HH:mm:ss') + ' and finish at ' + event.end.format('HH:mm:ss') + ' on ' + event.end.format('DD-MM-YYYY') + '!';
              var Confirm = self.alertSweet.confirm(alert);
              Confirm.then(function (result) {
                if (result.value) {
                  var dataBook = '' + event.description.split("-----", 1);
                  var dataTime = '' + event.description.split("-----").pop();
                  var paramUpdateBook = {
                    idBook: event.id,
                    description: event.description.substr(event.description.indexOf('*#*') + 3).replace('*#*' + event.description.split("*#*").pop(), ''),
                    idUserOfBook: '' + event.description.split("*#*", 1),
                    dayOfBook: event.start.format('YYYY-MM-DD'),
                    hourStart: event.start.format('HH:mm:ss'),
                    hourEnd: event.end.format('HH:mm:ss'),
                    cycle: dataBook.split("*#*").pop(),
                    startOld: dataTime.substr(dataTime.indexOf('/') + 1).replace('/' + dataTime.split("/").pop(), ''),
                    endOld: '' + dataTime.split("/").pop(),
                    dayOfBookOld: '' + dataTime.split("/", 1)
                  };

                  self.updateBooking(paramUpdateBook);
                } else {
                  revertFunc();
                }
              });
            }
          }
        }
      });
    });
  }
  // var homeLoad = new Home()
};/* harmony default export */ __webpack_exports__["a"] = (Calendar);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(43);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

module.exports = { "default": module.exports, __esModule: true };

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */



var _Symbol = __webpack_require__(45)["default"];

var _Object$create = __webpack_require__(53)["default"];

var _Object$setPrototypeOf = __webpack_require__(55)["default"];

var _Promise = __webpack_require__(58)["default"];

!(function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = _Object$create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (_Object$setPrototypeOf) {
      _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = _Object$create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function (arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return _Promise.resolve(value.arg).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return _Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new _Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26), __webpack_require__(44)))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(31);
module.exports = __webpack_require__(4).Symbol;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var $              = __webpack_require__(1)
  , global         = __webpack_require__(3)
  , has            = __webpack_require__(20)
  , DESCRIPTORS    = __webpack_require__(9)
  , $export        = __webpack_require__(10)
  , redefine       = __webpack_require__(22)
  , $fails         = __webpack_require__(27)
  , shared         = __webpack_require__(28)
  , setToStringTag = __webpack_require__(11)
  , uid            = __webpack_require__(29)
  , wks            = __webpack_require__(2)
  , keyOf          = __webpack_require__(48)
  , $names         = __webpack_require__(50)
  , enumKeys       = __webpack_require__(51)
  , isArray        = __webpack_require__(52)
  , anObject       = __webpack_require__(5)
  , toIObject      = __webpack_require__(12)
  , createDesc     = __webpack_require__(24)
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(25)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var $         = __webpack_require__(1)
  , toIObject = __webpack_require__(12);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(7);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12)
  , getNames  = __webpack_require__(1).getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var $ = __webpack_require__(1);
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(7);
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(1);
module.exports = function create(P, D){
  return $.create(P, D);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
module.exports = __webpack_require__(4).Object.setPrototypeOf;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(10);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(32).set});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
__webpack_require__(60);
__webpack_require__(63);
__webpack_require__(67);
module.exports = __webpack_require__(4).Promise;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(61)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(34)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33)
  , defined   = __webpack_require__(30);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $              = __webpack_require__(1)
  , descriptor     = __webpack_require__(24)
  , setToStringTag = __webpack_require__(11)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(23)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
var Iterators = __webpack_require__(8);
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(65)
  , step             = __webpack_require__(66)
  , Iterators        = __webpack_require__(8)
  , toIObject        = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(34)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $          = __webpack_require__(1)
  , LIBRARY    = __webpack_require__(25)
  , global     = __webpack_require__(3)
  , ctx        = __webpack_require__(6)
  , classof    = __webpack_require__(35)
  , $export    = __webpack_require__(10)
  , isObject   = __webpack_require__(13)
  , anObject   = __webpack_require__(5)
  , aFunction  = __webpack_require__(21)
  , strictNew  = __webpack_require__(68)
  , forOf      = __webpack_require__(69)
  , setProto   = __webpack_require__(32).set
  , same       = __webpack_require__(74)
  , SPECIES    = __webpack_require__(2)('species')
  , speciesConstructor = __webpack_require__(75)
  , asap       = __webpack_require__(76)
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , empty      = function(){ /* empty */ }
  , Wrapper;

var testResolve = function(sub){
  var test = new P(empty), promise;
  if(sub)test.constructor = function(exec){
    exec(empty, empty);
  };
  (promise = P.resolve(test))['catch'](empty);
  return promise === test;
};

var USE_NATIVE = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && __webpack_require__(9)){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var PromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve),
  this.reject  = aFunction(reject)
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok)record.h = true;
          result = handler === true ? value : handler(value);
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      var promise = record.p
        , handler, console;
      if(isUnhandled(promise)){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise._d
    , chain  = record.a || record.c
    , i      = 0
    , reaction;
  if(record.h)return false;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(record.p === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = this._d = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  __webpack_require__(81)(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = new PromiseCapability(speciesConstructor(this, P))
        , promise  = reaction.promise
        , record   = this._d;
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if(record.a)record.a.push(reaction);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
__webpack_require__(11)(P, PROMISE);
__webpack_require__(82)(PROMISE);
Wrapper = __webpack_require__(4)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = new PromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof P && sameConstructor(x.constructor, this))return x;
    var capability = new PromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(83)(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject
      , values     = [];
    var abrupt = perform(function(){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        var alreadyCalled = false;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(6)
  , call        = __webpack_require__(70)
  , isArrayIter = __webpack_require__(71)
  , anObject    = __webpack_require__(5)
  , toLength    = __webpack_require__(72)
  , getIterFn   = __webpack_require__(73);
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(8)
  , ITERATOR   = __webpack_require__(2)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(33)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(35)
  , ITERATOR  = __webpack_require__(2)('iterator')
  , Iterators = __webpack_require__(8);
module.exports = __webpack_require__(4).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(5)
  , aFunction = __webpack_require__(21)
  , SPECIES   = __webpack_require__(2)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(3)
  , macrotask = __webpack_require__(77).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(7)(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain, fn;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
};

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify = function(){
    Promise.resolve().then(flush);
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(6)
  , invoke             = __webpack_require__(78)
  , html               = __webpack_require__(79)
  , cel                = __webpack_require__(80)
  , global             = __webpack_require__(3)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(7)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3).document && document.documentElement;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13)
  , document = __webpack_require__(3).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(22);
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core        = __webpack_require__(4)
  , $           = __webpack_require__(1)
  , DESCRIPTORS = __webpack_require__(9)
  , SPECIES     = __webpack_require__(2)('species');

module.exports = function(KEY){
  var C = core[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(2)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sweetalert2_sweetalert__ = __webpack_require__(0);

function homeUser() {
  this.init();
}

homeUser.prototype = {
  init: function init() {
    this.config();
    this.listen();
  },

  config: function config() {
    this.alert = new __WEBPACK_IMPORTED_MODULE_0__sweetalert2_sweetalert__["a" /* default */]();
    this.token = $("#token").val();
    this.element = {
      pMess: $('#messChangePass'),
      input: {
        passwordOld: $('#passwordOld'),
        passwordNew: $('#passwordNew'),
        confirmPassword: $('#confirmPassword')
      },
      btn: {
        submitChagePassword: $('#submitChangePassword')
      },
      modalChangePassword: $('#modalChangePas')
    };
  },

  listen: function listen() {
    this.clickSubmitChagePassword();
  },

  clickSubmitChagePassword: function clickSubmitChagePassword() {
    var self = this;
    self.element.btn.submitChagePassword.click(function () {
      $.post(location.origin + '/home/changePassword', {
        _token: $('#token').val(),
        passwordOld: self.element.input.passwordOld.val() ? self.element.input.passwordOld.val() : null,
        passwordNew: self.element.input.passwordNew.val(),
        confirmPassword: self.element.input.confirmPassword.val()
      }, function (data) {
        console.log(data);
        if (data.status == false) {
          if (data.code == 500) {
            self.element.pMess.text(data.message);
          } else {
            Object.keys(data.message).forEach(function (key) {
              self.element.pMess.text(data.message[key][0]);
            });
          }
        } else {
          var alert = 'Saved';
          self.alert.alertSuccess(alert);
          self.hidemodalChangePassword();
        }
      }, 'json');
    });
  },

  hidemodalChangePassword: function hidemodalChangePassword() {
    var self = this;
    self.element.modalChangePassword.modal('hide');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (homeUser);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTFjMjE1OTlhZTYwZGE0NGUxOWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvQm9va2luZy9Cb29raW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5saWJyYXJ5LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9Ib21lLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvQ2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmtleW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2V0LW5hbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmVudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3RyaWN0LW5ldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm1pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvaG9tZVVzZXIuanMiXSwibmFtZXMiOlsiU3dlZXRhbGVydCIsImluaXQiLCJwcm90b3R5cGUiLCJjb25maWciLCJsaXN0ZW4iLCJhbGVydFN1Y2Nlc3MiLCJ0aXRsZSIsInRvYXN0Iiwic3dhbCIsIm1peGluIiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidHlwZSIsImFsZXJ0RXJyb3IiLCJjb25maXJtIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiaHRtbCIsImZvY3VzQ29uZmlybSIsInByZUNvbmZpcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJndWlkZUNyZWF0ZUJvb2siLCJwcm9ncmVzc1N0ZXBzIiwicXVldWUiLCJ0aGVuIiwicmVzdWx0IiwiZ3VpZGVVcGRhdGVCb29rIiwiZ3VpZGVEZWxldGVCb29rIiwiQm9va2luZyIsImFsZXJ0IiwiU3dlZXQiLCJ0b2tlbiIsIiQiLCJ2YWwiLCJlbGVtZW50IiwiY2FsZW5kYXIiLCJtb2RhbCIsIm1vZGFsQ3JlYXRlIiwiZGl2QWxlcnRFcnJvckNyZWF0ZSIsImRpdkFsZXJ0RXJyb3JVcGRhdGUiLCJpbmplY3RFcnJvckNyZWF0ZSIsImVycm9yIiwic2VsZiIsImluamVjdEVycm9yVXBkYXRlIiwic2hvd01vZGFsQm9vdHN0cmFwIiwiaGlkZU1vZGFsQm9vdHN0cmFwIiwic2hvd01vZGFsQm9vdHN0cmFwQ3JlYXRlIiwiaGlkZU1vZGFsQm9vdHN0cmFwQ3JlYXRlIiwiY2FsbEFqYXhVcGRhdGUiLCJpZCIsImlkVXNlck9mQm9va2luZyIsImRlc2NyaXB0aW9uIiwiZGF5T2ZCb29rIiwic3RhcnQiLCJlbmQiLCJjeWNsZSIsInN0YXJ0T2xkIiwiZW5kT2xkIiwiZGF5T2ZCb29rT2xkIiwicG9zdCIsImxvY2F0aW9uIiwib3JpZ2luIiwiX3Rva2VuIiwiaWRVc2VyT2ZCb29rIiwiZGF0YSIsInN0YXR1cyIsImNvZGUiLCJPYmplY3QiLCJrZXlzIiwibWVzc2FnZSIsImZvckVhY2giLCJrZXkiLCJ1cGRhdGVWaWV3VXBkYXRlQm9va2luZyIsImRhdGFGcm9tQWpheCIsImkiLCJib29raW5nIiwibGVuZ3RoIiwiZGF5Q2hhbmdlIiwiZGF5Iiwic3RhcnRDaGFuZ2UiLCJob3VyX3N0YXJ0IiwiZW5kQ2hhbmdlIiwiaG91cl9lbmQiLCJldmVudENoYW5nIiwiZnVsbENhbGVuZGFyIiwibmFtZU9mVXNlciIsIm1vbWVudCIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVWaWV3IiwiY2FsbEFqYXhEZWxldGUiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJKU09OIiwicGFyc2UiLCJjcmVhdGVWaWV3Iiwicm9vbUlkIiwiZGF5U3RhcnQiLCJkYXlFbmQiLCJjYWxsQWpheENyZWF0ZSIsImV2ZW50RGF0YSIsInJlc291cmNlSWQiLCJ1c2VySWQiLCJDYWxlbmRhciIsImhvbWVVc2VyIiwiY2hhbmdlIiwiY29sbGFwc2UiLCJvbiIsImxvYWRDYWxlbmRhciIsImJvb2siLCJCb29rIiwiYWxlcnRTd2VldCIsImJ0biIsImJvb2tpbmdEZWxldGUiLCJib29raW5nQ2hhbmdlIiwiaG93Q3JlYXRlQm9vayIsImhvd1VwZGF0ZUJvb2siLCJob3dEZWxldGVCb29rIiwiYm9va2luZ0NyZWF0ZSIsImlucHV0IiwiZGVzY3JpcHRpb25DcmVhdGUiLCJjeWNsZVVwZGF0ZU9yRGVsZXRlQm9va2luZyIsImlkQm9va2luZyIsImhvdXJTdGFydCIsInJvb21JZENyZWF0ZSIsImhvdXJFbmQiLCJkYXlDcmVhdGUiLCJob3VyU3RhcnRDcmVhdGUiLCJob3VyRW5kQ3JlYXRlIiwicm9vbSIsImN5Y2xlQ3JlYXRlQm9va2luZyIsImRheURlbGV0ZUJvb2tpbmciLCJob3VyU3RhcnREZWxldGVCb29raW5nIiwiaG91ckVuZERlbGV0ZUJvb2tpbmciLCJ0eXBlQm9va2luZyIsImRhdGVTdGFydENyZWF0ZSIsImRhdGVFbmRDcmVhdGUiLCJkaXYiLCJhdXRoZW50aWNhdGlvbiIsImxvYWQiLCJjbGlja0Jvb2tpbmdDaGFuZ2UiLCJjbGlja0Jvb2tpbmdEZWxldGUiLCJjbGlja0hvd0NyZWF0ZUJvb2siLCJjbGlja0hvd1VwZGF0ZUJvb2siLCJjbGlja0hvd0RlbGV0ZUJvb2siLCJjbGlja0Jvb2tpbmdDcmVhdGUiLCJsb2FkQm9va0luQ2FsZW5kYXIiLCJwYXJhbURlbGV0ZUJvb2siLCJpZEJvb2siLCJkZWxldGVCb29raW5nIiwicGFyYW1DcmVhdGVCb29rIiwiY3JlYXRlQm9va2luZyIsInBhcmFtVXBkYXRlQm9vayIsInVwZGF0ZUJvb2tpbmciLCJyZWZldGNoQm9va3MiLCJmaWxsRGF0YVRvTW9kYWwiLCJwYXJhbWZpbGxEYXRhVG9Nb2RhbCIsImRheU9mQm9va0RlbGV0ZSIsImhvdXJTdGFydERlbGV0ZSIsImhvdXJFbmREZWxldGUiLCJmaWxsRGF0YVRvTW9kYWxDcmVhdGUiLCJhdXRoQnV0dG9uTW9kYWxCb290c3RyYXAiLCJpZEF1dGgiLCJlbXB0eSIsInJlbG9hZFBhZ2UiLCJ0aW1lIiwic2V0VGltZW91dCIsImxvYWREYXRhQm9va2luZyIsIkVycm9yIiwiaGVhZGVyIiwibGVmdCIsInJpZ2h0IiwiY2VudGVyIiwiaGVpZ2h0IiwidGhlbWVTeXN0ZW0iLCJub3dJbmRpY2F0b3IiLCJhbGxEYXlTbG90Iiwic2VsZWN0T3ZlcmxhcCIsInNlbGVjdGFibGUiLCJkZWZhdWx0VmlldyIsImRlZmF1bHREYXRlIiwibmF2TGlua3MiLCJlZGl0YWJsZSIsImV2ZW50TGltaXQiLCJldmVudENsaWNrIiwiZXZlbnQiLCJkYXRhQm9vayIsInNwbGl0IiwiZGF0YVRpbWUiLCJwb3AiLCJzdWJzdHIiLCJpbmRleE9mIiwicmVwbGFjZSIsImZvcm1hdCIsInJlc291cmNlcyIsImV2ZW50cyIsInNlbGVjdCIsImpzRXZlbnQiLCJ2aWV3IiwicmVzb3VyY2UiLCJub3ciLCJ3ZWVrZGF5IiwiYXR0ciIsImV2ZW50UmVzaXplIiwiZGVsdGEiLCJyZXZlcnRGdW5jIiwidXNlcklkT2ZCb29rIiwiQ29uZmlybSIsImV2ZW50RHJvcCIsInBNZXNzIiwicGFzc3dvcmRPbGQiLCJwYXNzd29yZE5ldyIsImNvbmZpcm1QYXNzd29yZCIsInN1Ym1pdENoYWdlUGFzc3dvcmQiLCJtb2RhbENoYW5nZVBhc3N3b3JkIiwiY2xpY2tTdWJtaXRDaGFnZVBhc3N3b3JkIiwiY2xpY2siLCJoaWRlbW9kYWxDaGFuZ2VQYXNzd29yZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQSxTQUFTQSxVQUFU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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHlIOzs7Ozs7O0FDdG9CQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFF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QWFpTCxLQUFiLENBQW1Cek0sSUFBbkIsQ0FBd0JzRCxLQUFLSyxPQUE3QjtBQUNELFdBRkQsTUFFTztBQUNMRixtQkFBT0MsSUFBUCxDQUFZSixLQUFLSyxPQUFqQixFQUEwQkMsT0FBMUIsQ0FBa0MsZUFBTztBQUN2QzVCLG1CQUFLUixPQUFMLENBQWFpTCxLQUFiLENBQW1Cek0sSUFBbkIsQ0FBd0JzRCxLQUFLSyxPQUFMLENBQWFFLEdBQWIsRUFBa0IsQ0FBbEIsQ0FBeEI7QUFDRCxhQUZEO0FBR0Q7QUFDRixTQVJELE1BUU87QUFDTCxjQUFJMUMsZUFBSjtBQUNBYSxlQUFLYixLQUFMLENBQVc5QixZQUFYLENBQXdCOEIsS0FBeEI7QUFDQWEsZUFBS2lMLHVCQUFMO0FBQ0Q7QUFDRixPQXZCSCxFQXdCRSxNQXhCRjtBQTBCRCxLQTNCRDtBQTRCRCxHQXpEa0I7O0FBMkRuQkEsMkJBQXlCLG1DQUFZO0FBQ25DLFFBQUlqTCxPQUFPLElBQVg7QUFDQUEsU0FBS1IsT0FBTCxDQUFhc0wsbUJBQWIsQ0FBaUNwTCxLQUFqQztBQUNEO0FBOURrQixDQUFyQjtBQWdFZXNFLGlFQUFmLEUiLCJmaWxlIjoiL2pzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTFjMjE1OTlhZTYwZGE0NGUxOWYiLCJmdW5jdGlvbiBTd2VldGFsZXJ0KCkge1xuICB0aGlzLmluaXQoKVxufVxuXG5Td2VldGFsZXJ0LnByb3RvdHlwZSA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY29uZmlnKClcbiAgICB0aGlzLmxpc3RlbigpXG4gIH0sXG5cbiAgY29uZmlnOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgbGlzdGVuOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgYWxlcnRTdWNjZXNzOiBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICBjb25zdCB0b2FzdCA9IHN3YWwubWl4aW4oe1xuICAgICAgdG9hc3Q6IHRydWUsXG4gICAgICBwb3NpdGlvbjogYHRvcC1lbmRgLFxuICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICAgICAgdGltZXI6IDE1MDBcbiAgICB9KTtcblxuICAgIHRvYXN0KHtcbiAgICAgIHR5cGU6IGBzdWNjZXNzYCxcbiAgICAgIHRpdGxlOiB0aXRsZVxuICAgIH0pXG4gIH0sXG5cbiAgYWxlcnRFcnJvcjogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRvYXN0ID0gc3dhbC5taXhpbih7XG4gICAgICB0b2FzdDogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiBgdG9wLWVuZGAsXG4gICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgICB0aW1lcjogMTUwMFxuICAgIH0pO1xuXG4gICAgdG9hc3Qoe1xuICAgICAgdHlwZTogYGVycm9yYCxcbiAgICAgIHRpdGxlOiBgU29tZXRoaW5nIHdlbnQgd3JvbmchYFxuICAgIH0pXG4gIH0sXG5cbiAgY29uZmlybTogZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgcmV0dXJuIHN3YWwoe1xuICAgICAgdGl0bGU6IGBBcmUgeW91IHN1cmU/YCxcbiAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgdHlwZTogYHdhcm5pbmdgLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogYCMzMDg1ZDZgLFxuICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IGAjZDMzYCxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBgWWVzICFgXG4gICAgfSlcbiAgfSxcblxuICB0ZXh0OiBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICByZXR1cm4gc3dhbCh7XG4gICAgICB0aXRsZTogJ011bHRpcGxlIGlucHV0cycsXG4gICAgICBodG1sOlxuICAgICAgJzxpbnB1dCBpZD1cInN3YWwtaW5wdXQxXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cInN3YWwyLWlucHV0XCI+JyArXG4gICAgICAnPGxlZ2VuZD5TZWxlY3QgYSBtYWludGVuYW5jZSBkcm9uZTwvbGVnZW5kPicrXG4gICAgICAnPGRpdj4nK1xuICAgICAgJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImh1ZXlcIiBuYW1lPVwiZHJvbmVcIiBjaGVja2VkIC8+JyArXG4gICAgJzxsYWJlbCBmb3I9XCJodWV5XCI+SHVleTwvbGFiZWw+JytcbiAgICAgJzwvZGl2PicrXG5cbiAgICAgICc8ZGl2PicrXG4gICAgICAnPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiZGV3ZXlcIiBuYW1lPVwiZHJvbmVcIiAvPicrXG4gICAgICAnPGxhYmVsIGZvcj1cImRld2V5XCI+RGV3ZXk8L2xhYmVsPicrXG4gICAgICAnPC9kaXY+JytcblxuICAgICAgJzxkaXY+JytcbiAgICAgICc8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJsb3VpZVwiIG5hbWU9XCJkcm9uZVwiIC8+JytcbiAgICAgICc8bGFiZWwgZm9yPVwibG91aWVcIj5Mb3VpZTwvbGFiZWw+JytcbiAgICAgICc8L2Rpdj4nLFxuICAgICAgZm9jdXNDb25maXJtOiBmYWxzZSxcbiAgICAgIHByZUNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dhbC1pbnB1dDEnKS52YWx1ZSxcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dhbC1pbnB1dDInKS52YWx1ZVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBndWlkZUNyZWF0ZUJvb2s6IGZ1bmN0aW9uICgpIHtcbiAgICBzd2FsLm1peGluKHtcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnTmV4dCAmcmFycjsnLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIHByb2dyZXNzU3RlcHM6IFsnMScsICcyJywgJzMnXVxuICAgIH0pLnF1ZXVlKFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdTdGVwIDEnLFxuICAgICAgICB0ZXh0OiAnU2VsZWN0IFwiVGltZVwiIGJvb2tpbmcgb24gY2FsZW5kYXIuJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdTdGVwIDInLFxuICAgICAgICB0ZXh0OiAnSW5zZXJ0IFwiZGVzY3JpcHRpb25cIiwgY2hvb3NlIFwicm9vbVwiIGFuZCBjaG9vc2UgXCJjeWNsZVwiIGJvb2tpbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1N0ZXAgMycsXG4gICAgICAgIHRleHQ6ICdDbGljayBcIkNyZWF0ZVwiLidcbiAgICAgIH1cbiAgICBdKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgc3dhbCh7XG4gICAgICAgICAgdGl0bGU6ICdBbGwgZG9uZSEnLFxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnTG92ZWx5ISdcbiAgICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIGd1aWRlVXBkYXRlQm9vazogZnVuY3Rpb24gKCkge1xuICAgIHN3YWwubWl4aW4oe1xuICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdOZXh0ICZyYXJyOycsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgcHJvZ3Jlc3NTdGVwczogWycxJywgJzInXVxuICAgIH0pLnF1ZXVlKFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdTdGVwIDEnLFxuICAgICAgICB0ZXh0OiAnXCJSZXNpemVcIiBvciBcIkRyYWcgYW5kIERyb3BcIiBvciBcIkNsaWNrXCIgYm9va2luZy4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1N0ZXAgMicsXG4gICAgICAgIHRleHQ6ICdDb25maXJtIGNoYW5nZSBpZiBcIlJlc2l6ZVwiIG9yIFwiRHJhZyBhbmQgRHJvcFwiIC0gTWFrZSBjaGFuZ2VzIGlmIFwiQ2xpY2tcIiBhbmQgY2xpY2sgYnV0dG9uIFwiQ2hhbmdlXCInXG4gICAgICB9XG4gICAgXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBzd2FsKHtcbiAgICAgICAgdGl0bGU6ICdBbGwgZG9uZSEnLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ0xvdmVseSEnXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgZ3VpZGVEZWxldGVCb29rOiBmdW5jdGlvbiAoKSB7XG4gICAgc3dhbC5taXhpbih7XG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogJ05leHQgJnJhcnI7JyxcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBwcm9ncmVzc1N0ZXBzOiBbJzEnLCAnMicsICczJ11cbiAgICB9KS5xdWV1ZShbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnU3RlcCAxJyxcbiAgICAgICAgdGV4dDogJ1wiQ2xpY2tcIiBib29raW5nIHlvdSB3YW50IGRlbGV0ZS4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1N0ZXAgMicsXG4gICAgICAgIHRleHQ6ICdDaG9vc2UgY3ljbGUgXCJEZWxldGVcIi4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1N0ZXAgMycsXG4gICAgICAgIHRleHQ6ICdDbGljayBidXR0b24gXCJEZWxldGVcIidcbiAgICAgIH1cbiAgICBdKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHN3YWwoe1xuICAgICAgICB0aXRsZTogJ0FsbCBkb25lIScsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnTG92ZWx5ISdcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU3dlZXRhbGVydFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0LmpzIiwidmFyICRPYmplY3QgPSBPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgID0gcmVxdWlyZSgnLi8kLnNoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vJC51aWQnKVxuICAsIFN5bWJvbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5TeW1ib2w7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBTeW1ib2wgJiYgU3ltYm9sW25hbWVdIHx8IChTeW1ib2wgfHwgdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQud2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuLyQnKS5zZXREZXNjXG4gICwgaGFzID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFN3ZWV0IGZyb20gJy4uL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQnXG5mdW5jdGlvbiBCb29raW5nKCl7XG4gIHRoaXMuaW5pdCgpXG59XG5Cb29raW5nLnByb3RvdHlwZSA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY29uZmlnKClcbiAgICB0aGlzLmxpc3RlbigpXG4gIH0sXG5cbiAgY29uZmlnOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hbGVydCA9IG5ldyBTd2VldCgpXG4gICAgdGhpcy50b2tlbiA9ICQoXCIjdG9rZW5cIikudmFsKClcbiAgICB0aGlzLmVsZW1lbnQgPSB7XG4gICAgICBjYWxlbmRhcjogJCgnI2NhbGVuZGFyJyksXG4gICAgICBtb2RhbDogJCgnI2V4YW1wbGVNb2RhbCcpLFxuICAgICAgbW9kYWxDcmVhdGU6ICQoJyNtb2RhbENyZWF0ZUJvb2tpbmcnKSxcbiAgICAgIGRpdkFsZXJ0RXJyb3JDcmVhdGU6ICQoJyNlcnJvckNyZWF0ZScpLFxuICAgICAgZGl2QWxlcnRFcnJvclVwZGF0ZTogJCgnI2Vycm9yVXBkYXRlJylcbiAgICB9XG4gIH0sXG5cbiAgbGlzdGVuOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgaW5qZWN0RXJyb3JDcmVhdGU6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuZWxlbWVudC5kaXZBbGVydEVycm9yQ3JlYXRlLmh0bWwoYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj48aDE+JHtlcnJvcn08L2gxPjwvZGl2PmApXG4gIH0sXG5cbiAgaW5qZWN0RXJyb3JVcGRhdGU6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuZWxlbWVudC5kaXZBbGVydEVycm9yVXBkYXRlLmh0bWwoYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj48aDE+JHtlcnJvcn08L2gxPjwvZGl2PmApXG4gIH0sXG5cbiAgc2hvd01vZGFsQm9vdHN0cmFwOiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5lbGVtZW50Lm1vZGFsLm1vZGFsKGBzaG93YClcbiAgfSxcblxuICBoaWRlTW9kYWxCb290c3RyYXA6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmVsZW1lbnQubW9kYWwubW9kYWwoYGhpZGVgKVxuICB9LFxuXG4gIHNob3dNb2RhbEJvb3RzdHJhcENyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuZWxlbWVudC5tb2RhbENyZWF0ZS5tb2RhbChgc2hvd2ApXG4gIH0sXG5cbiAgaGlkZU1vZGFsQm9vdHN0cmFwQ3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5lbGVtZW50Lm1vZGFsQ3JlYXRlLm1vZGFsKGBoaWRlYClcbiAgfSxcblxuICBjYWxsQWpheFVwZGF0ZTogZnVuY3Rpb24oaWQsIGlkVXNlck9mQm9va2luZywgZGVzY3JpcHRpb24sIGRheU9mQm9vaywgc3RhcnQsIGVuZCwgY3ljbGUsIHN0YXJ0T2xkLCBlbmRPbGQsIGRheU9mQm9va09sZCl7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAkLnBvc3QoXG4gICAgICBgJHtsb2NhdGlvbi5vcmlnaW59L2hvbWUvcG9zdC91cGRhdGVCb29raW5nYCxcbiAgICAgIHtcbiAgICAgICAgX3Rva2VuOiBzZWxmLnRva2VuLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgaWRVc2VyT2ZCb29rOiBpZFVzZXJPZkJvb2tpbmcsXG4gICAgICAgIHN0YXJ0T2xkOiBzdGFydE9sZCxcbiAgICAgICAgZW5kT2xkOiBlbmRPbGQsXG4gICAgICAgIGRheU9mQm9va09sZDogZGF5T2ZCb29rT2xkLFxuICAgICAgICBjeWNsZTogY3ljbGUsXG4gICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgZW5kOiBlbmQsXG4gICAgICAgIGRheU9mQm9vazogZGF5T2ZCb29rLFxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKGRhdGEuY29kZSA9PSA0MDMpIHtcbiAgICAgICAgICAgIHNlbGYuaW5qZWN0RXJyb3JVcGRhdGUoYERheSBpcyBXZWVrZW5kYClcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY29kZSA9PSA1MDApIHtcbiAgICAgICAgICAgIHNlbGYuaW5qZWN0RXJyb3JVcGRhdGUoYFRoZXJlIGhhdmUgYmVlbiBib29rcyBkdXJpbmcgdGhpcyB0aW1lYClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5tZXNzYWdlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgIHNlbGYuaW5qZWN0RXJyb3JVcGRhdGUoZGF0YS5tZXNzYWdlW2tleV1bMF0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGFsZXJ0ID0gYFNhdmVkYFxuICAgICAgICAgIHNlbGYuYWxlcnQuYWxlcnRTdWNjZXNzKGFsZXJ0KVxuICAgICAgICAgIHNlbGYudXBkYXRlVmlld1VwZGF0ZUJvb2tpbmcoaWQsIGRheU9mQm9vaywgaWRVc2VyT2ZCb29raW5nLCBkZXNjcmlwdGlvbiwgc3RhcnQsIGVuZCwgY3ljbGUsIGRhdGEuZGF0YSlcbiAgICAgICAgICBzZWxmLmhpZGVNb2RhbEJvb3RzdHJhcCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnanNvbidcbiAgICApXG4gIH0sXG5cbiAgdXBkYXRlVmlld1VwZGF0ZUJvb2tpbmc6IGZ1bmN0aW9uIChpZCwgZGF5T2ZCb29rLCBpZFVzZXJPZkJvb2tpbmcsIGRlc2NyaXB0aW9uLCBzdGFydCwgZW5kLCBjeWNsZSwgZGF0YUZyb21BamF4KSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgbGV0IGlcbiAgICBpZiAoZGF0YUZyb21BamF4ICE9IG51bGwpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhRnJvbUFqYXguYm9va2luZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZGF0YUZyb21BamF4LmJvb2tpbmdbaV0gIT0gbnVsbCkge1xuXG4gICAgICAgICAgbGV0IGRheUNoYW5nZSA9IGRhdGFGcm9tQWpheC5ib29raW5nW2ldLmRheVxuICAgICAgICAgIGxldCBzdGFydENoYW5nZSA9IGAke2RheUNoYW5nZX1UJHtkYXRhRnJvbUFqYXguYm9va2luZ1tpXS5ob3VyX3N0YXJ0fWBcbiAgICAgICAgICBsZXQgZW5kQ2hhbmdlID0gYCR7ZGF5Q2hhbmdlfVQke2RhdGFGcm9tQWpheC5ib29raW5nW2ldLmhvdXJfZW5kfWBcbiAgICAgICAgICBsZXQgZXZlbnRDaGFuZyA9IHNlbGYuZWxlbWVudC5jYWxlbmRhci5mdWxsQ2FsZW5kYXIoICdjbGllbnRFdmVudHMnLCBkYXRhRnJvbUFqYXguYm9va2luZ1tpXS5pZClcblxuICAgICAgICAgIGV2ZW50Q2hhbmdbMF0uZGVzY3JpcHRpb24gPSBgJHtpZFVzZXJPZkJvb2tpbmd9KiMqJHtkZXNjcmlwdGlvbn0qIyoke2RhdGFGcm9tQWpheC5ib29raW5nW2ldLnR5cGV9LS0tLS0ke2RhdGFGcm9tQWpheC5ib29raW5nW2ldLmRheX0vJHtkYXRhRnJvbUFqYXguYm9va2luZ1tpXS5ob3VyX3N0YXJ0fS8ke2RhdGFGcm9tQWpheC5ib29raW5nW2ldLmhvdXJfZW5kfWBcbiAgICAgICAgICBldmVudENoYW5nWzBdLnRpdGxlID0gYCR7ZGF0YUZyb21BamF4Lm5hbWVPZlVzZXJ9IDogXFxuICR7ZGVzY3JpcHRpb259YFxuICAgICAgICAgIGV2ZW50Q2hhbmdbMF0uc3RhcnQgPSAkLmZ1bGxDYWxlbmRhci5tb21lbnQoc3RhcnRDaGFuZ2UpO1xuICAgICAgICAgIGV2ZW50Q2hhbmdbMF0uZW5kID0gJC5mdWxsQ2FsZW5kYXIubW9tZW50KGVuZENoYW5nZSk7XG5cbiAgICAgICAgICBzZWxmLmVsZW1lbnQuY2FsZW5kYXIuZnVsbENhbGVuZGFyKCd1cGRhdGVFdmVudCcsIGV2ZW50Q2hhbmdbMF0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2FzZGFzZCcpXG4gICAgfVxuICB9LFxuXG4gIGRlbGV0ZVZpZXc6IGZ1bmN0aW9uIChpZCwgaWRVc2VyT2ZCb29rLCBkYXlPZkJvb2ssIHN0YXJ0LCBlbmQsIGN5Y2xlLCB0eXBlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy5jYWxsQWpheERlbGV0ZShpZCwgaWRVc2VyT2ZCb29rLCBkYXlPZkJvb2ssIHN0YXJ0LCBlbmQsIGN5Y2xlLCB0eXBlKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgbGV0IGlcbiAgICAgIGZvciAoaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGlmIChyZXN1bHRbaV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgc2VsZi5lbGVtZW50LmNhbGVuZGFyLmZ1bGxDYWxlbmRhcihgcmVtb3ZlRXZlbnRzYCwgcmVzdWx0W2ldLmlkKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGNhbGxBamF4RGVsZXRlOiBmdW5jdGlvbihpZCwgaWRVc2VyT2ZCb29rLCBkYXlPZkJvb2ssIHN0YXJ0LCBlbmQsIGN5Y2xlLCB0eXBlKXtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgJC5wb3N0KFxuICAgICAgICBgJHtsb2NhdGlvbi5vcmlnaW59L2hvbWUvcG9zdC9kZWxldGVCb29raW5nYCxcbiAgICAgICAge1xuICAgICAgICAgIF90b2tlbjogc2VsZi50b2tlbixcbiAgICAgICAgICBpZFVzZXJPZkJvb2s6IGlkVXNlck9mQm9vayxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgZGF5T2ZCb29rIDogZGF5T2ZCb29rLFxuICAgICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgICBlbmQ6IGVuZCxcbiAgICAgICAgICBjeWNsZTogY3ljbGUsXG4gICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICBpZiAocmVzdWx0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICBzZWxmLmFsZXJ0LmFsZXJ0RXJyb3IoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgIGxldCBhbGVydCA9IGBEZWxldGVkYFxuICAgICAgICAgICAgc2VsZi5hbGVydC5hbGVydFN1Y2Nlc3MoYWxlcnQpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAndGV4dCdcbiAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfSxcblxuICBjcmVhdGVWaWV3OiBmdW5jdGlvbihkZXNjcmlwdGlvbiwgcm9vbUlkLCBkYXksIHN0YXJ0LCBlbmQsIGN5Y2xlLCBkYXlTdGFydCwgZGF5RW5kKXtcbiAgICBsZXQgc2VsZiA9IHRoaXNcblxuXG5cblxuICAgIHRoaXMuY2FsbEFqYXhDcmVhdGUoZGVzY3JpcHRpb24sIHJvb21JZCwgZGF5LCBzdGFydCwgZW5kLCBjeWNsZSwgZGF5U3RhcnQsIGRheUVuZCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIGxldCBpXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByZXN1bHQuYm9va2luZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChyZXN1bHQuYm9va2luZ1tpXSAhPSBudWxsKSB7XG4gICAgICAgICAgbGV0IGV2ZW50RGF0YSA9IHtcbiAgICAgICAgICAgIGlkIDogcmVzdWx0LmJvb2tpbmdbaV0uaWQsXG4gICAgICAgICAgICByZXNvdXJjZUlkOiByb29tSWQsXG4gICAgICAgICAgICB0aXRsZTogYCR7cmVzdWx0Lm5hbWVPZlVzZXJ9IDogXFxuICR7ZGVzY3JpcHRpb259YCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgJHtyZXN1bHQudXNlcklkfSojKiR7ZGVzY3JpcHRpb259KiMqJHtyZXN1bHQudHlwZX0tLS0tLSR7cmVzdWx0LmJvb2tpbmdbaV0uZGF5fS8ke3N0YXJ0fS8ke2VuZH1gLFxuICAgICAgICAgICAgc3RhcnQ6IGAke3Jlc3VsdC5ib29raW5nW2ldLmRheX1UJHtzdGFydH1gLFxuICAgICAgICAgICAgZW5kOiBgJHtyZXN1bHQuYm9va2luZ1tpXS5kYXl9VCR7ZW5kfWBcbiAgICAgICAgICB9O1xuICAgICAgICAgIHNlbGYuZWxlbWVudC5jYWxlbmRhci5mdWxsQ2FsZW5kYXIoJ3JlbmRlckV2ZW50JywgZXZlbnREYXRhLCB0cnVlKSAvLyBzdGljaz8gPSB0cnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgY2FsbEFqYXhDcmVhdGU6IGZ1bmN0aW9uKGRlc2NyaXB0aW9uLCByb29tSWQsIGRheU9mQm9vaywgc3RhcnQsIGVuZCwgY3ljbGUsIGRheVN0YXJ0LCBkYXlFbmQpe1xuICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICQucG9zdChcbiAgICAgICAgYCR7bG9jYXRpb24ub3JpZ2lufS9ob21lL3Bvc3QvY3JlYXRlQm9va2luZ2AsXG4gICAgICAgIHtcbiAgICAgICAgICBfdG9rZW46IHNlbGYudG9rZW4sXG4gICAgICAgICAgZGVzY3JpcHRpb246IGAke2Rlc2NyaXB0aW9ufWAsXG4gICAgICAgICAgZGF5T2ZCb29rOiBkYXlPZkJvb2ssXG4gICAgICAgICAgcm9vbUlkOiByb29tSWQsXG4gICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgIGVuZDogZW5kLFxuICAgICAgICAgIGN5Y2xlOiBgJHtjeWNsZX0mJiR7ZGVzY3JpcHRpb259YCxcbiAgICAgICAgICBkYXlTdGFydDogZGF5U3RhcnQsXG4gICAgICAgICAgZGF5RW5kOiBkYXlFbmRcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuY29kZSA9PSA0MDMpIHtcbiAgICAgICAgICAgICAgc2VsZi5pbmplY3RFcnJvckNyZWF0ZShgRGF5IGlzIFdlZWtlbmRgKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmNvZGUgPT0gNTAwKSB7XG4gICAgICAgICAgICAgIHNlbGYuaW5qZWN0RXJyb3JDcmVhdGUoYFRoZXJlIGhhdmUgYmVlbiBib29rcyBkdXJpbmcgdGhpcyB0aW1lYClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5jb2RlID0gNDAwKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEubWVzc2FnZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuaW5qZWN0RXJyb3JDcmVhdGUoZGF0YS5tZXNzYWdlW2tleV1bMF0pXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYWxlcnQgPSBgUm9vbSB3YXMgYm9va2VkYFxuICAgICAgICAgICAgc2VsZi5hbGVydC5hbGVydFN1Y2Nlc3MoYWxlcnQpXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEuZGF0YSlcbiAgICAgICAgICAgIHNlbGYuaGlkZU1vZGFsQm9vdHN0cmFwQ3JlYXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdqc29uJ1xuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBCb29raW5nXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0Jvb2tpbmcvQm9va2luZy5qcyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmhpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBnZXREZXNjICA9IHJlcXVpcmUoJy4vJCcpLmdldERlc2NcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vJC5jdHgnKShGdW5jdGlvbi5jYWxsLCBnZXREZXNjKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vJC5saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90byAgICAgICA9IHJlcXVpcmUoJy4vJCcpLmdldFByb3RvXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCBtZXRob2RzLCBrZXk7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJG5hdGl2ZSl7XG4gICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8oJGRlZmF1bHQuY2FsbChuZXcgQmFzZSkpO1xuICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAvLyBGRiBmaXhcbiAgICBpZighTElCUkFSWSAmJiBoYXMocHJvdG8sIEZGX0lURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICAgIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICAgIH1cbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJylcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IChPID0gT2JqZWN0KGl0KSlbVEFHXSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9DYWxlbmRhcidcbmltcG9ydCBob21lVXNlciBmcm9tICcuL2hvbWVVc2VyJ1xuXG5uZXcgQ2FsZW5kYXIoKVxubmV3IGhvbWVVc2VyKClcblxuJCgnI2N5Y2xlQ3JlYXRlQm9va2luZycpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gIGlmICgkKHRoaXMpLnZhbCgpID09IGBjeWNsZURheWApIHtcbiAgICAkKCcjbXVsdGlDb2xsYXBzZUV4YW1wbGUxJykuY29sbGFwc2UoJ3Nob3cnKVxuICB9IGVsc2Uge1xuICAgICQoJyNtdWx0aUNvbGxhcHNlRXhhbXBsZTEnKS5jb2xsYXBzZSgnaGlkZScpXG4gIH1cbn0pXG4kKFwiI21vZGFsQ3JlYXRlQm9va2luZ1wiKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgJCgnI2Vycm9yQ3JlYXRlJykuaHRtbCgnJylcbiAgJCgnI2Rlc2NyaXB0aW9uQ3JlYXRlJykudmFsKCcnKVxufSk7XG4kKFwiI2V4YW1wbGVNb2RhbFwiKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgJCgnI2Vycm9yVXBkYXRlJykuaHRtbCgnJylcbn0pO1xuJChcIiNtb2RhbENoYW5nZVBhc1wiKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgJCgnI21lc3NDaGFuZ2VQYXNzJykuaHRtbCgnJylcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9Ib21lLmpzIiwiaW1wb3J0IEJvb2sgZnJvbSAnLi9Cb29raW5nL0Jvb2tpbmcnXG5pbXBvcnQgU3dlZXQgZnJvbSAnLi9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0J1xuZnVuY3Rpb24gQ2FsZW5kYXIoKSB7XG4gIHRoaXMuaW5pdCgpXG59XG5DYWxlbmRhci5wcm90b3R5cGUgPSB7XG5cbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY29uZmlnKClcbiAgICB0aGlzLmxpc3RlbigpXG4gICAgdGhpcy5sb2FkQ2FsZW5kYXIoKVxuICB9LFxuICBjb25maWc6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJvb2sgPSBuZXcgQm9vaygpXG4gICAgdGhpcy5hbGVydFN3ZWV0ID0gbmV3IFN3ZWV0KClcbiAgICB0aGlzLnRva2VuID0gJChcIiN0b2tlblwiKS52YWwoKVxuICAgIHRoaXMuZWxlbWVudCA9IHtcbiAgICAgIGNhbGVuZGFyOiAkKCcjY2FsZW5kYXInKSxcbiAgICAgIGJ0bjoge1xuICAgICAgICBib29raW5nRGVsZXRlOiAkKCcjYm9va2luZ0RlbGV0ZScpLFxuICAgICAgICBib29raW5nQ2hhbmdlOiAkKCcjYm9va2luZ0NoYW5nZScpLFxuICAgICAgICBob3dDcmVhdGVCb29rOiAkKCcjaG93Q3JlYXRlQm9vaycpLFxuICAgICAgICBob3dVcGRhdGVCb29rOiAkKCcjaG93VXBkYXRlQm9vaycpLFxuICAgICAgICBob3dEZWxldGVCb29rOiAkKCcjaG93RGVsZXRlQm9vaycpLFxuICAgICAgICBib29raW5nQ3JlYXRlOiAkKCcjYm9va2luZ0NyZWF0ZScpXG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgZGVzY3JpcHRpb246ICQoJyNkZXNjcmlwdGlvbicpLFxuICAgICAgICBkZXNjcmlwdGlvbkNyZWF0ZTogJCgnI2Rlc2NyaXB0aW9uQ3JlYXRlJyksXG4gICAgICAgIGN5Y2xlVXBkYXRlT3JEZWxldGVCb29raW5nOiAkKCcjY3ljbGVVcGRhdGVPckRlbGV0ZUJvb2tpbmcnKSxcbiAgICAgICAgaWRCb29raW5nOiAkKCcjaWRCb29raW5nJyksXG4gICAgICAgIGRheTogJCgnI2RheScpLFxuICAgICAgICBob3VyU3RhcnQ6ICQoJyNob3VyU3RhcnQnKSxcbiAgICAgICAgcm9vbUlkQ3JlYXRlOiAkKCcjcm9vbUlkQ3JlYXRlJyksXG4gICAgICAgIGhvdXJFbmQ6ICQoJyNob3VyRW5kJyksXG4gICAgICAgIGRheUNyZWF0ZTogJCgnI2RheUNyZWF0ZScpLFxuICAgICAgICBob3VyU3RhcnRDcmVhdGU6ICQoJyNob3VyU3RhcnRDcmVhdGUnKSxcbiAgICAgICAgaG91ckVuZENyZWF0ZTogJCgnI2hvdXJFbmRDcmVhdGUnKSxcbiAgICAgICAgaWRVc2VyT2ZCb29rOiAkKCcjaWRVc2VyT2ZCb29rJyksXG4gICAgICAgIHJvb206ICQoJyNyb29tJyksXG4gICAgICAgIGN5Y2xlQ3JlYXRlQm9va2luZzogJCgnI2N5Y2xlQ3JlYXRlQm9va2luZycpLFxuICAgICAgICBkYXlEZWxldGVCb29raW5nOiAkKCcjZGF5RGVsZXRlQm9va2luZycpLFxuICAgICAgICBob3VyU3RhcnREZWxldGVCb29raW5nOiAkKCcjaG91clN0YXJ0RGVsZXRlQm9va2luZycpLFxuICAgICAgICBob3VyRW5kRGVsZXRlQm9va2luZzogJCgnI2hvdXJFbmREZWxldGVCb29raW5nJyksXG4gICAgICAgIHR5cGVCb29raW5nOiAkKCcjdHlwZUJvb2tpbmcnKSxcbiAgICAgICAgZGF0ZVN0YXJ0Q3JlYXRlOiAkKCcjZGF0ZVN0YXJ0Q3JlYXRlJyksXG4gICAgICAgIGRhdGVFbmRDcmVhdGU6ICQoJyNkYXRlRW5kQ3JlYXRlJylcbiAgICAgIH0sXG4gICAgICBkaXY6IHtcbiAgICAgICAgYXV0aGVudGljYXRpb246ICQoJyNhdXRoZW50aWNhdGlvbicpXG4gICAgICB9LFxuICAgICAgbW9kYWw6ICQoJyNleGFtcGxlTW9kYWwnKSxcbiAgICAgIG1vZGFsQ3JlYXRlOiAkKCcjbW9kYWxDcmVhdGVCb29raW5nJyksXG4gICAgICBsb2FkOiAkKCcjbG9hZCcpXG4gICAgfVxuICB9LFxuXG4gIGxpc3RlbjogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xpY2tCb29raW5nQ2hhbmdlKClcbiAgICB0aGlzLmNsaWNrQm9va2luZ0RlbGV0ZSgpXG4gICAgdGhpcy5jbGlja0hvd0NyZWF0ZUJvb2soKVxuICAgIHRoaXMuY2xpY2tIb3dVcGRhdGVCb29rKClcbiAgICB0aGlzLmNsaWNrSG93RGVsZXRlQm9vaygpXG4gICAgdGhpcy5jbGlja0Jvb2tpbmdDcmVhdGUoKVxuICB9LFxuXG4gIGxvYWRCb29rSW5DYWxlbmRhcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2FsZW5kYXIuZnVsbENhbGVuZGFyKGRhdGEpXG4gIH0sXG5cbiAgY2xpY2tIb3dDcmVhdGVCb29rOiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5lbGVtZW50LmJ0bi5ob3dDcmVhdGVCb29rLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuYWxlcnRTd2VldC5ndWlkZUNyZWF0ZUJvb2soKVxuICAgIH0pXG4gIH0sXG5cbiAgY2xpY2tIb3dVcGRhdGVCb29rOiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5lbGVtZW50LmJ0bi5ob3dVcGRhdGVCb29rLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuYWxlcnRTd2VldC5ndWlkZVVwZGF0ZUJvb2soKVxuICAgIH0pXG4gIH0sXG5cbiAgY2xpY2tIb3dEZWxldGVCb29rOiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5lbGVtZW50LmJ0bi5ob3dEZWxldGVCb29rLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuYWxlcnRTd2VldC5ndWlkZURlbGV0ZUJvb2soKVxuICAgIH0pXG4gIH0sXG5cbiAgY2xpY2tCb29raW5nRGVsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5lbGVtZW50LmJ0bi5ib29raW5nRGVsZXRlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBwYXJhbURlbGV0ZUJvb2sgPSB7XG4gICAgICAgIGlkQm9vayA6IHNlbGYuZWxlbWVudC5pbnB1dC5pZEJvb2tpbmcudmFsKCksXG4gICAgICAgIGRheU9mQm9vayA6IHNlbGYuZWxlbWVudC5pbnB1dC5kYXlEZWxldGVCb29raW5nLnZhbCgpLFxuICAgICAgICBob3VyU3RhcnQgOiBzZWxmLmVsZW1lbnQuaW5wdXQuaG91clN0YXJ0RGVsZXRlQm9va2luZy52YWwoKSxcbiAgICAgICAgaG91ckVuZCA6IHNlbGYuZWxlbWVudC5pbnB1dC5ob3VyRW5kRGVsZXRlQm9va2luZy52YWwoKSxcbiAgICAgICAgaWRVc2VyT2ZCb29rIDogc2VsZi5lbGVtZW50LmlucHV0LmlkVXNlck9mQm9vay52YWwoKSxcbiAgICAgICAgY3ljbGU6IHNlbGYuZWxlbWVudC5pbnB1dC5jeWNsZVVwZGF0ZU9yRGVsZXRlQm9va2luZy52YWwoKSxcbiAgICAgICAgdHlwZTogc2VsZi5lbGVtZW50LmlucHV0LnR5cGVCb29raW5nLnZhbCgpXG4gICAgICB9XG5cbiAgICAgIHNlbGYuZGVsZXRlQm9va2luZyhwYXJhbURlbGV0ZUJvb2spXG4gICAgICBzZWxmLmhpZGVNb2RhbEJvb3RzdHJhcCgpXG4gICAgfSlcbiAgfSxcblxuICBjbGlja0Jvb2tpbmdDcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgIHNlbGYuZWxlbWVudC5idG4uYm9va2luZ0NyZWF0ZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgcGFyYW1DcmVhdGVCb29rID0ge1xuICAgICAgICBkZXNjcmlwdGlvbiA6IHNlbGYuZWxlbWVudC5pbnB1dC5kZXNjcmlwdGlvbkNyZWF0ZS52YWwoKSxcbiAgICAgICAgcm9vbUlkIDogc2VsZi5lbGVtZW50LmlucHV0LnJvb21JZENyZWF0ZS52YWwoKSxcbiAgICAgICAgZGF5T2ZCb29rIDogc2VsZi5lbGVtZW50LmlucHV0LmRheUNyZWF0ZS52YWwoKSxcbiAgICAgICAgaG91clN0YXJ0IDogc2VsZi5lbGVtZW50LmlucHV0LmhvdXJTdGFydENyZWF0ZS52YWwoKSxcbiAgICAgICAgaG91ckVuZCA6IHNlbGYuZWxlbWVudC5pbnB1dC5ob3VyRW5kQ3JlYXRlLnZhbCgpLFxuICAgICAgICBjeWNsZTogc2VsZi5lbGVtZW50LmlucHV0LmN5Y2xlQ3JlYXRlQm9va2luZy52YWwoKSxcbiAgICAgICAgZGF5U3RhcnQ6IHNlbGYuZWxlbWVudC5pbnB1dC5kYXRlU3RhcnRDcmVhdGUudmFsKCksXG4gICAgICAgIGRheUVuZDogc2VsZi5lbGVtZW50LmlucHV0LmRhdGVFbmRDcmVhdGUudmFsKCksXG4gICAgICB9XG5cbiAgICAgIHNlbGYuY3JlYXRlQm9va2luZyhwYXJhbUNyZWF0ZUJvb2spXG4gICAgfSlcbiAgfSxcblxuICBjbGlja0Jvb2tpbmdDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgIHNlbGYuZWxlbWVudC5idG4uYm9va2luZ0NoYW5nZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgcGFyYW1VcGRhdGVCb29rID0ge1xuICAgICAgICBpZEJvb2sgOiBzZWxmLmVsZW1lbnQuaW5wdXQuaWRCb29raW5nLnZhbCgpLFxuICAgICAgICBkZXNjcmlwdGlvbiA6IHNlbGYuZWxlbWVudC5pbnB1dC5kZXNjcmlwdGlvbi52YWwoKSxcbiAgICAgICAgaWRVc2VyT2ZCb29rIDogc2VsZi5lbGVtZW50LmlucHV0LmlkVXNlck9mQm9vay52YWwoKSxcbiAgICAgICAgZGF5T2ZCb29rIDogc2VsZi5lbGVtZW50LmlucHV0LmRheS52YWwoKSxcbiAgICAgICAgaG91clN0YXJ0IDogc2VsZi5lbGVtZW50LmlucHV0LmhvdXJTdGFydC52YWwoKSxcbiAgICAgICAgaG91ckVuZCA6IHNlbGYuZWxlbWVudC5pbnB1dC5ob3VyRW5kLnZhbCgpLFxuICAgICAgICBjeWNsZTogc2VsZi5lbGVtZW50LmlucHV0LnR5cGVCb29raW5nLnZhbCgpLFxuICAgICAgICBzdGFydE9sZCA6IHNlbGYuZWxlbWVudC5pbnB1dC5ob3VyU3RhcnREZWxldGVCb29raW5nLnZhbCgpLFxuICAgICAgICBlbmRPbGQgOiBzZWxmLmVsZW1lbnQuaW5wdXQuaG91ckVuZERlbGV0ZUJvb2tpbmcudmFsKCksXG4gICAgICAgIGRheU9mQm9va09sZCA6IHNlbGYuZWxlbWVudC5pbnB1dC5kYXlEZWxldGVCb29raW5nLnZhbCgpXG4gICAgICB9XG5cbiAgICAgIHNlbGYudXBkYXRlQm9va2luZyhwYXJhbVVwZGF0ZUJvb2spXG4gICAgfSlcbiAgfSxcblxuICByZWZldGNoQm9va3M6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuZWxlbWVudC5jYWxlbmRhci5mdWxsQ2FsZW5kYXIoYHJlZmV0Y2hFdmVudHNgKVxuICB9LFxuXG4gIGZpbGxEYXRhVG9Nb2RhbDogZnVuY3Rpb24gKHBhcmFtZmlsbERhdGFUb01vZGFsKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5lbGVtZW50LmlucHV0LnJvb20udmFsKHBhcmFtZmlsbERhdGFUb01vZGFsLnJvb20pXG4gICAgc2VsZi5lbGVtZW50LmlucHV0LmRlc2NyaXB0aW9uLnZhbChwYXJhbWZpbGxEYXRhVG9Nb2RhbC5kZXNjcmlwdGlvbilcbiAgICBzZWxmLmVsZW1lbnQuaW5wdXQuaWRVc2VyT2ZCb29rLnZhbChwYXJhbWZpbGxEYXRhVG9Nb2RhbC5pZFVzZXJPZkJvb2spXG4gICAgc2VsZi5lbGVtZW50LmlucHV0LmlkQm9va2luZy52YWwocGFyYW1maWxsRGF0YVRvTW9kYWwuaWRCb29raW5nKVxuICAgIHNlbGYuZWxlbWVudC5pbnB1dC5kYXkudmFsKHBhcmFtZmlsbERhdGFUb01vZGFsLmRheU9mQm9vaylcbiAgICBzZWxmLmVsZW1lbnQuaW5wdXQuaG91clN0YXJ0LnZhbChwYXJhbWZpbGxEYXRhVG9Nb2RhbC5ob3VyU3RhcnQpXG4gICAgc2VsZi5lbGVtZW50LmlucHV0LmhvdXJFbmQudmFsKHBhcmFtZmlsbERhdGFUb01vZGFsLmhvdXJFbmQpXG4gICAgc2VsZi5lbGVtZW50LmlucHV0LmRheURlbGV0ZUJvb2tpbmcudmFsKHBhcmFtZmlsbERhdGFUb01vZGFsLmRheU9mQm9va0RlbGV0ZSlcbiAgICBzZWxmLmVsZW1lbnQuaW5wdXQuaG91clN0YXJ0RGVsZXRlQm9va2luZy52YWwocGFyYW1maWxsRGF0YVRvTW9kYWwuaG91clN0YXJ0RGVsZXRlKVxuICAgIHNlbGYuZWxlbWVudC5pbnB1dC5ob3VyRW5kRGVsZXRlQm9va2luZy52YWwocGFyYW1maWxsRGF0YVRvTW9kYWwuaG91ckVuZERlbGV0ZSlcbiAgICBzZWxmLmVsZW1lbnQuaW5wdXQudHlwZUJvb2tpbmcudmFsKHBhcmFtZmlsbERhdGFUb01vZGFsLnR5cGVCb29raW5nKVxuICB9LFxuXG4gIGZpbGxEYXRhVG9Nb2RhbENyZWF0ZTogZnVuY3Rpb24gKHBhcmFtZmlsbERhdGFUb01vZGFsKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5lbGVtZW50LmlucHV0LmRheUNyZWF0ZS52YWwocGFyYW1maWxsRGF0YVRvTW9kYWwuZGF5T2ZCb29rKVxuICAgIHNlbGYuZWxlbWVudC5pbnB1dC5ob3VyU3RhcnRDcmVhdGUudmFsKHBhcmFtZmlsbERhdGFUb01vZGFsLmhvdXJTdGFydClcbiAgICBzZWxmLmVsZW1lbnQuaW5wdXQuaG91ckVuZENyZWF0ZS52YWwocGFyYW1maWxsRGF0YVRvTW9kYWwuaG91ckVuZClcbiAgICBzZWxmLmVsZW1lbnQuaW5wdXQuZGF0ZVN0YXJ0Q3JlYXRlLnZhbChwYXJhbWZpbGxEYXRhVG9Nb2RhbC5kYXRlU3RhcnRDcmVhdGUpXG4gICAgc2VsZi5lbGVtZW50LmlucHV0LmRhdGVFbmRDcmVhdGUudmFsKHBhcmFtZmlsbERhdGFUb01vZGFsLmRhdGVFbmRDcmVhdGUpXG4gIH0sXG5cbiAgc2hvd01vZGFsQm9vdHN0cmFwOiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5lbGVtZW50Lm1vZGFsLm1vZGFsKGBzaG93YClcbiAgfSxcblxuICBoaWRlTW9kYWxCb290c3RyYXA6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmVsZW1lbnQubW9kYWwubW9kYWwoYGhpZGVgKVxuICB9LFxuXG4gIHNob3dNb2RhbEJvb3RzdHJhcENyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuZWxlbWVudC5tb2RhbENyZWF0ZS5tb2RhbChgc2hvd2ApXG4gIH0sXG5cbiAgaGlkZU1vZGFsQm9vdHN0cmFwQ3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5lbGVtZW50Lm1vZGFsQ3JlYXRlLm1vZGFsKGBoaWRlYClcbiAgfSxcblxuICBhdXRoQnV0dG9uTW9kYWxCb290c3RyYXA6IGZ1bmN0aW9uIChpZEF1dGgsIGlkVXNlck9mQm9vaykge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGlmIChpZEF1dGggIT0gaWRVc2VyT2ZCb29rKSB7XG4gICAgICBzZWxmLmVsZW1lbnQuZGl2LmF1dGhlbnRpY2F0aW9uLmVtcHR5KCk7XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZUJvb2tpbmc6IGZ1bmN0aW9uIChwYXJhbUNyZWF0ZUJvb2spIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmJvb2suY3JlYXRlVmlldyhcbiAgICAgIHBhcmFtQ3JlYXRlQm9vay5kZXNjcmlwdGlvbixcbiAgICAgIHBhcmFtQ3JlYXRlQm9vay5yb29tSWQsXG4gICAgICBwYXJhbUNyZWF0ZUJvb2suZGF5T2ZCb29rLFxuICAgICAgcGFyYW1DcmVhdGVCb29rLmhvdXJTdGFydCxcbiAgICAgIHBhcmFtQ3JlYXRlQm9vay5ob3VyRW5kLFxuICAgICAgcGFyYW1DcmVhdGVCb29rLmN5Y2xlLFxuICAgICAgcGFyYW1DcmVhdGVCb29rLmRheVN0YXJ0LFxuICAgICAgcGFyYW1DcmVhdGVCb29rLmRheUVuZFxuICAgIClcbiAgfSxcblxuICByZWxvYWRQYWdlIDogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICBzZXRUaW1lb3V0KFwibG9jYXRpb24ucmVsb2FkKCk7XCIsIHRpbWUpO1xuICB9LFxuXG4gIHVwZGF0ZUJvb2tpbmc6IGZ1bmN0aW9uIChwYXJhbVVwZGF0ZUJvb2spIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmJvb2suY2FsbEFqYXhVcGRhdGUoXG4gICAgICBwYXJhbVVwZGF0ZUJvb2suaWRCb29rLFxuICAgICAgcGFyYW1VcGRhdGVCb29rLmlkVXNlck9mQm9vayxcbiAgICAgIHBhcmFtVXBkYXRlQm9vay5kZXNjcmlwdGlvbixcbiAgICAgIHBhcmFtVXBkYXRlQm9vay5kYXlPZkJvb2ssXG4gICAgICBwYXJhbVVwZGF0ZUJvb2suaG91clN0YXJ0LFxuICAgICAgcGFyYW1VcGRhdGVCb29rLmhvdXJFbmQsXG4gICAgICBwYXJhbVVwZGF0ZUJvb2suY3ljbGUsXG4gICAgICBwYXJhbVVwZGF0ZUJvb2suc3RhcnRPbGQsXG4gICAgICBwYXJhbVVwZGF0ZUJvb2suZW5kT2xkLFxuICAgICAgcGFyYW1VcGRhdGVCb29rLmRheU9mQm9va09sZFxuICAgIClcbiAgfSxcblxuICBkZWxldGVCb29raW5nOiBmdW5jdGlvbiAocGFyYW1EZWxldGVCb29rKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5ib29rLmRlbGV0ZVZpZXcoXG4gICAgICBwYXJhbURlbGV0ZUJvb2suaWRCb29rLFxuICAgICAgcGFyYW1EZWxldGVCb29rLmlkVXNlck9mQm9vayxcbiAgICAgIHBhcmFtRGVsZXRlQm9vay5kYXlPZkJvb2ssXG4gICAgICBwYXJhbURlbGV0ZUJvb2suaG91clN0YXJ0LFxuICAgICAgcGFyYW1EZWxldGVCb29rLmhvdXJFbmQsXG4gICAgICBwYXJhbURlbGV0ZUJvb2suY3ljbGUsXG4gICAgICBwYXJhbURlbGV0ZUJvb2sudHlwZVxuICAgIClcbiAgfSxcblxuICBsb2FkRGF0YUJvb2tpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAkLnBvc3QoXG4gICAgICAgIGAke2xvY2F0aW9uLm9yaWdpbn0vaG9tZS9wb3N0L3Jvb21zYCxcbiAgICAgICAge190b2tlbjogc2VsZi50b2tlbn0sXG4gICAgICAgIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBpZiAoZGF0YSAhPSBmYWxzZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuYWxlcnRTd2VldC5hbGVydEVycm9yKClcbiAgICAgICAgICAgIHJlamVjdChFcnJvcihgbG9pYCkpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBganNvbmBcbiAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfSxcblxuICBsb2FkQ2FsZW5kYXI6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB0aGlzLmxvYWREYXRhQm9va2luZygpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgc2VsZi5sb2FkQm9va0luQ2FsZW5kYXIoXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGxlZnQ6IGBwcmV2LG5leHQgICAgIHRvZGF5YCxcbiAgICAgICAgICAgIHJpZ2h0OiBgdGl0bGVgLFxuICAgICAgICAgICAgY2VudGVyOiBgYWdlbmRhV2VlayxhZ2VuZGFEYXksbGlzdFdlZWtgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWlnaHQ6ICdwYXJlbnQnLFxuICAgICAgICAgIHRoZW1lU3lzdGVtOiAnYm9vdHN0cmFwNCcsXG4gICAgICAgICAgbm93SW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgIGFsbERheVNsb3Q6IGZhbHNlLFxuICAgICAgICAgIHNlbGVjdE92ZXJsYXA6IGZhbHNlLFxuICAgICAgICAgIHNlbGVjdGFibGUgOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWaWV3OiBgYWdlbmRhV2Vla2AsLy90dXkgY2hvbiBuYXkgZGUgeGVtIGxpY2ggdGhlbyB0dWFuXG4gICAgICAgICAgZGVmYXVsdERhdGU6IHJlc3VsdFtgZGF0ZU5vd2BdLFxuICAgICAgICAgIG5hdkxpbmtzOiB0cnVlLCAvLyBjYW4gY2xpY2sgZGF5L3dlZWsgbmFtZXMgdG8gbmF2aWdhdGUgdmlld3NcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBldmVudExpbWl0OiB0cnVlLFxuICAgICAgICAgIGV2ZW50Q2xpY2s6IGZ1bmN0aW9uKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBzZWxmLnJlZmV0Y2hCb29rcygpXG4gICAgICAgICAgICBsZXQgZGF0YUJvb2sgPSBgJHtldmVudC5kZXNjcmlwdGlvbi5zcGxpdChcIi0tLS0tXCIsIDEpfWBcbiAgICAgICAgICAgIGxldCBkYXRhVGltZSA9IGAke2V2ZW50LmRlc2NyaXB0aW9uLnNwbGl0KFwiLS0tLS1cIikucG9wKCl9YFxuICAgICAgICAgICAgbGV0IHBhcmFtZmlsbERhdGFUb01vZGFsID0ge1xuICAgICAgICAgICAgICByb29tIDogZXZlbnQucmVzb3VyY2VJZCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBldmVudC5kZXNjcmlwdGlvbi5zdWJzdHIoZXZlbnQuZGVzY3JpcHRpb24uaW5kZXhPZignKiMqJykrMykucmVwbGFjZSgoYCojKiR7ZXZlbnQuZGVzY3JpcHRpb24uc3BsaXQoXCIqIypcIikucG9wKCl9YCksICcnKSxcbiAgICAgICAgICAgICAgaWRVc2VyT2ZCb29rIDogZXZlbnQuZGVzY3JpcHRpb24uc3BsaXQoXCIqIypcIiwgMSksXG4gICAgICAgICAgICAgIGlkQm9va2luZyA6IGV2ZW50LmlkLFxuICAgICAgICAgICAgICBkYXlPZkJvb2sgOiBldmVudC5zdGFydC5mb3JtYXQoYERELU1NLVlZWVlgKSxcbiAgICAgICAgICAgICAgaG91clN0YXJ0IDogZXZlbnQuc3RhcnQuZm9ybWF0KGBISDptbTpzc2ApLFxuICAgICAgICAgICAgICBob3VyRW5kIDogZXZlbnQuZW5kLmZvcm1hdChgSEg6bW06c3NgKSxcbiAgICAgICAgICAgICAgZGF5T2ZCb29rRGVsZXRlIDogZXZlbnQuc3RhcnQuZm9ybWF0KGBZWVlZLU1NLUREYCksXG4gICAgICAgICAgICAgIGhvdXJTdGFydERlbGV0ZSA6IGV2ZW50LnN0YXJ0LmZvcm1hdChgSEg6bW06c3NgKSxcbiAgICAgICAgICAgICAgaG91ckVuZERlbGV0ZSA6IGV2ZW50LmVuZC5mb3JtYXQoYEhIOm1tOnNzYCksXG4gICAgICAgICAgICAgIHR5cGVCb29raW5nOiBkYXRhQm9vay5zcGxpdChcIiojKlwiKS5wb3AoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmF1dGhCdXR0b25Nb2RhbEJvb3RzdHJhcChyZXN1bHRbJ2lkQXV0aCddLCBwYXJhbWZpbGxEYXRhVG9Nb2RhbC5pZFVzZXJPZkJvb2spXG4gICAgICAgICAgICBzZWxmLmZpbGxEYXRhVG9Nb2RhbChwYXJhbWZpbGxEYXRhVG9Nb2RhbClcbiAgICAgICAgICAgIHNlbGYuc2hvd01vZGFsQm9vdHN0cmFwKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc291cmNlczogcmVzdWx0Wydyb29tJ10sXG4gICAgICAgICAgZXZlbnRzOiByZXN1bHRbYGJvb2tpbmdgXSxcbiAgICAgICAgICBzZWxlY3Q6IGFzeW5jIGZ1bmN0aW9uKHN0YXJ0LCBlbmQsIGpzRXZlbnQsIHZpZXcsIHJlc291cmNlKSB7XG4gICAgICAgICAgICBsZXQgbm93ID0gbW9tZW50KClcbiAgICAgICAgICAgIGlmICgoc3RhcnQuZm9ybWF0KCkgPCByZXN1bHRbYGRhdGVOb3dgXSkgfHwgKHN0YXJ0LmZvcm1hdChgWVlZWS1NTS1ERGApICE9IGVuZC5mb3JtYXQoYFlZWVktTU0tRERgKSkgfHwgKHN0YXJ0LmZvcm1hdCgpIDwgbm93LmZvcm1hdCgpKSB8fCAoc3RhcnQud2Vla2RheSgpID09IDYpIHx8IChzdGFydC53ZWVrZGF5KCkgPT0gMCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQuaW5wdXQuZGF0ZVN0YXJ0Q3JlYXRlLmF0dHIoe1wibWluXCIgOiBzdGFydC5mb3JtYXQoYFlZWVktTU0tRERgKX0pXG4gICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5pbnB1dC5kYXRlRW5kQ3JlYXRlLmF0dHIoe1wibWluXCIgOiBzdGFydC5mb3JtYXQoYFlZWVktTU0tRERgKX0pXG4gICAgICAgICAgICAgIGxldCBwYXJhbWZpbGxEYXRhVG9Nb2RhbCA9IHtcbiAgICAgICAgICAgICAgICBkYXlPZkJvb2sgOiBzdGFydC5mb3JtYXQoYFlZWVktTU0tRERgKSxcbiAgICAgICAgICAgICAgICBob3VyU3RhcnQgOiBzdGFydC5mb3JtYXQoYEhIOm1tOnNzYCksXG4gICAgICAgICAgICAgICAgaG91ckVuZCA6IGVuZC5mb3JtYXQoYEhIOm1tOnNzYCksXG4gICAgICAgICAgICAgICAgZGF0ZVN0YXJ0Q3JlYXRlOiBzdGFydC5mb3JtYXQoYFlZWVktTU0tRERgKSxcbiAgICAgICAgICAgICAgICBkYXRlRW5kQ3JlYXRlOiBzdGFydC5mb3JtYXQoYFlZWVktTU0tRERgKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VsZi5maWxsRGF0YVRvTW9kYWxDcmVhdGUocGFyYW1maWxsRGF0YVRvTW9kYWwpXG4gICAgICAgICAgICAgICQoJyNtb2RhbENyZWF0ZUJvb2tpbmcnKS5tb2RhbCgnc2hvdycpXG4gICAgICAgICAgICAgIC8vc2VsZi5zaG93TW9kYWxCb290c3RyYXBDcmVhdGUoKVxuICAgICAgICAgICAgICAvL3NlbGYuZWxlbWVudC5jYWxlbmRhci5mdWxsQ2FsZW5kYXIoYHVuc2VsZWN0YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGV2ZW50UmVzaXplOiBmdW5jdGlvbihldmVudCwgZGVsdGEsIHJldmVydEZ1bmMpIHtcbiAgICAgICAgICAgIGxldCBub3cgPSBtb21lbnQoKVxuICAgICAgICAgICAgaWYgKGV2ZW50LnN0YXJ0LmZvcm1hdCgpIDwgbm93LmZvcm1hdCgpIHx8IChldmVudC5zdGFydC53ZWVrZGF5KCkgPT0gNikgfHwgKGV2ZW50LnN0YXJ0LndlZWtkYXkoKSA9PSAwKSkge1xuICAgICAgICAgICAgICByZXZlcnRGdW5jKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCB1c2VySWRPZkJvb2sgPSBldmVudC5kZXNjcmlwdGlvbi5zcGxpdChcIiojKlwiLCAxKVxuXG4gICAgICAgICAgICAgIGlmIChyZXN1bHRbJ2lkQXV0aCddICE9IHVzZXJJZE9mQm9vaykge1xuICAgICAgICAgICAgICAgIHJldmVydEZ1bmMoKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGBSZXNlcnZhdGlvbiBTY2hlZHVsZSAke2V2ZW50LnJlc291cmNlSWR9IHdpbGwgZmluaXNoIGF0ICR7ZXZlbnQuZW5kLmZvcm1hdChgSEg6bW06c3NgKX0gb24gJHtldmVudC5lbmQuZm9ybWF0KGBERC1NTS1ZWVlZYCl9ICFgXG4gICAgICAgICAgICAgICAgbGV0IENvbmZpcm0gPSBzZWxmLmFsZXJ0U3dlZXQuY29uZmlybShhbGVydClcbiAgICAgICAgICAgICAgICBDb25maXJtLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUJvb2sgPSBgJHtldmVudC5kZXNjcmlwdGlvbi5zcGxpdChcIi0tLS0tXCIsIDEpfWBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFUaW1lID0gYCR7ZXZlbnQuZGVzY3JpcHRpb24uc3BsaXQoXCItLS0tLVwiKS5wb3AoKX1gXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbVVwZGF0ZUJvb2sgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRCb29rOiBldmVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24uc3Vic3RyKGV2ZW50LmRlc2NyaXB0aW9uLmluZGV4T2YoJyojKicpICsgMykucmVwbGFjZSgoYCojKiR7ZXZlbnQuZGVzY3JpcHRpb24uc3BsaXQoXCIqIypcIikucG9wKCl9YCksICcnKSxcbiAgICAgICAgICAgICAgICAgICAgICBpZFVzZXJPZkJvb2s6IGAke2V2ZW50LmRlc2NyaXB0aW9uLnNwbGl0KFwiKiMqXCIsIDEpfWAsXG4gICAgICAgICAgICAgICAgICAgICAgZGF5T2ZCb29rOiBldmVudC5zdGFydC5mb3JtYXQoYFlZWVktTU0tRERgKSxcbiAgICAgICAgICAgICAgICAgICAgICBob3VyU3RhcnQ6IGV2ZW50LnN0YXJ0LmZvcm1hdChgSEg6bW06c3NgKSxcbiAgICAgICAgICAgICAgICAgICAgICBob3VyRW5kOiBldmVudC5lbmQuZm9ybWF0KGBISDptbTpzc2ApLFxuICAgICAgICAgICAgICAgICAgICAgIGN5Y2xlOiBkYXRhQm9vay5zcGxpdChcIiojKlwiKS5wb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGFydE9sZDogZGF0YVRpbWUuc3Vic3RyKGRhdGFUaW1lLmluZGV4T2YoJy8nKSArIDEpLnJlcGxhY2UoKGAvJHtkYXRhVGltZS5zcGxpdChcIi9cIikucG9wKCl9YCksICcnKSxcbiAgICAgICAgICAgICAgICAgICAgICBlbmRPbGQ6IGAke2RhdGFUaW1lLnNwbGl0KFwiL1wiKS5wb3AoKX1gLFxuICAgICAgICAgICAgICAgICAgICAgIGRheU9mQm9va09sZDogYCR7ZGF0YVRpbWUuc3BsaXQoXCIvXCIsIDEpfWBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlQm9va2luZyhwYXJhbVVwZGF0ZUJvb2spXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXZlcnRGdW5jKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBldmVudERyb3A6IGZ1bmN0aW9uKGV2ZW50LCBkZWx0YSwgcmV2ZXJ0RnVuYykge1xuICAgICAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpXG4gICAgICAgICAgICBpZiAoZXZlbnQuc3RhcnQuZm9ybWF0KCkgPCBub3cuZm9ybWF0KCkgfHwgKGV2ZW50LnN0YXJ0LndlZWtkYXkoKSA9PSA2KSB8fCAoZXZlbnQuc3RhcnQud2Vla2RheSgpID09IDApKSB7XG4gICAgICAgICAgICAgIHJldmVydEZ1bmMoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGV0IHVzZXJJZE9mQm9vayA9IGV2ZW50LmRlc2NyaXB0aW9uLnNwbGl0KFwiKiMqXCIsIDEpXG5cbiAgICAgICAgICAgICAgaWYgKHJlc3VsdFsnaWRBdXRoJ10gIT0gdXNlcklkT2ZCb29rKSB7XG4gICAgICAgICAgICAgICAgcmV2ZXJ0RnVuYygpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gYFJlc2VydmF0aW9uIFNjaGVkdWxlICR7ZXZlbnQucmVzb3VyY2VJZH0gd2lsbCBzdGFydCBhdCAke2V2ZW50LnN0YXJ0LmZvcm1hdChgSEg6bW06c3NgKX0gYW5kIGZpbmlzaCBhdCAke2V2ZW50LmVuZC5mb3JtYXQoYEhIOm1tOnNzYCl9IG9uICR7ZXZlbnQuZW5kLmZvcm1hdChgREQtTU0tWVlZWWApfSFgXG4gICAgICAgICAgICAgICAgbGV0IENvbmZpcm0gPSBzZWxmLmFsZXJ0U3dlZXQuY29uZmlybShhbGVydClcbiAgICAgICAgICAgICAgICBDb25maXJtLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUJvb2sgPSBgJHtldmVudC5kZXNjcmlwdGlvbi5zcGxpdChcIi0tLS0tXCIsIDEpfWBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFUaW1lID0gYCR7ZXZlbnQuZGVzY3JpcHRpb24uc3BsaXQoXCItLS0tLVwiKS5wb3AoKX1gXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbVVwZGF0ZUJvb2sgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRCb29rIDogZXZlbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBldmVudC5kZXNjcmlwdGlvbi5zdWJzdHIoZXZlbnQuZGVzY3JpcHRpb24uaW5kZXhPZignKiMqJykrMykucmVwbGFjZSgoYCojKiR7ZXZlbnQuZGVzY3JpcHRpb24uc3BsaXQoXCIqIypcIikucG9wKCl9YCksICcnKSxcbiAgICAgICAgICAgICAgICAgICAgICBpZFVzZXJPZkJvb2sgOiBgJHtldmVudC5kZXNjcmlwdGlvbi5zcGxpdChcIiojKlwiLCAxKX1gLFxuICAgICAgICAgICAgICAgICAgICAgIGRheU9mQm9vayA6IGV2ZW50LnN0YXJ0LmZvcm1hdChgWVlZWS1NTS1ERGApLFxuICAgICAgICAgICAgICAgICAgICAgIGhvdXJTdGFydCA6IGV2ZW50LnN0YXJ0LmZvcm1hdChgSEg6bW06c3NgKSxcbiAgICAgICAgICAgICAgICAgICAgICBob3VyRW5kIDogZXZlbnQuZW5kLmZvcm1hdChgSEg6bW06c3NgKSxcbiAgICAgICAgICAgICAgICAgICAgICBjeWNsZTogZGF0YUJvb2suc3BsaXQoXCIqIypcIikucG9wKCksXG4gICAgICAgICAgICAgICAgICAgICAgc3RhcnRPbGQgOiBkYXRhVGltZS5zdWJzdHIoZGF0YVRpbWUuaW5kZXhPZignLycpKzEpLnJlcGxhY2UoKGAvJHtkYXRhVGltZS5zcGxpdChcIi9cIikucG9wKCl9YCksICcnKSxcbiAgICAgICAgICAgICAgICAgICAgICBlbmRPbGQgOiBgJHtkYXRhVGltZS5zcGxpdChcIi9cIikucG9wKCl9YCxcbiAgICAgICAgICAgICAgICAgICAgICBkYXlPZkJvb2tPbGQgOiBgJHtkYXRhVGltZS5zcGxpdChcIi9cIiwgMSl9YFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVCb29raW5nKHBhcmFtVXBkYXRlQm9vaylcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldmVydEZ1bmMoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgfSlcbiAgfVxufVxuLy8gdmFyIGhvbWVMb2FkID0gbmV3IEhvbWUoKVxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvQ2FsZW5kYXIuanMiLCIvLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPVxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXM7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogbW9kdWxlLmV4cG9ydHMsIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX1N5bWJvbCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9PYmplY3QkY3JlYXRlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9PYmplY3Qkc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9Qcm9taXNlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCIpW1wiZGVmYXVsdFwiXTtcblxuIShmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgX1N5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gX1N5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIGdlbmVyYXRvciA9IF9PYmplY3QkY3JlYXRlKChvdXRlckZuIHx8IEdlbmVyYXRvcikucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3IgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIGlmIChfT2JqZWN0JHNldFByb3RvdHlwZU9mKSB7XG4gICAgICBfT2JqZWN0JHNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBfT2JqZWN0JGNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudGAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuIFNvbWUgbWF5IGNvbnNpZGVyIHRoZSBuYW1lIG9mIHRoaXMgbWV0aG9kIHRvb1xuICAvLyBjdXRlc3ksIGJ1dCB0aGV5IGFyZSBjdXJtdWRnZW9ucy5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gbmV3IEF3YWl0QXJndW1lbnQoYXJnKTtcbiAgfTtcblxuICBmdW5jdGlvbiBBd2FpdEFyZ3VtZW50KGFyZykge1xuICAgIHRoaXMuYXJnID0gYXJnO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF9Qcm9taXNlLnJlc29sdmUodmFsdWUuYXJnKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX1Byb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcpIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiIHx8IG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gQSByZXR1cm4gb3IgdGhyb3cgKHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyB0aHJvd1xuICAgICAgICAgICAgLy8gbWV0aG9kKSBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKHJldHVybk1ldGhvZCkge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gocmV0dXJuTWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgYXJnKTtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmV0dXJuIG1ldGhvZCB0aHJldyBhbiBleGNlcHRpb24sIGxldCB0aGF0XG4gICAgICAgICAgICAgICAgLy8gZXhjZXB0aW9uIHByZXZhaWwgb3ZlciB0aGUgb3JpZ2luYWwgcmV0dXJuIG9yIHRocm93LlxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgb3V0ZXIgcmV0dXJuLCBub3cgdGhhdCB0aGUgZGVsZWdhdGVcbiAgICAgICAgICAgICAgLy8gaXRlcmF0b3IgaGFzIGJlZW4gdGVybWluYXRlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sIGRlbGVnYXRlLml0ZXJhdG9yLCBhcmcpO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMaWtlIHJldHVybmluZyBnZW5lcmF0b3IudGhyb3codW5jYXVnaHQpLCBidXQgd2l0aG91dCB0aGVcbiAgICAgICAgICAgIC8vIG92ZXJoZWFkIG9mIGFuIGV4dHJhIGZ1bmN0aW9uIGNhbGwuXG4gICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkWWllbGQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuc2VudCA9IGFyZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmUgPyBHZW5TdGF0ZUNvbXBsZXRlZCA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSAmJiBtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLFxuICAgICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICB0aGlzLnNlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uIGFicnVwdCh0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJiAodHlwZSA9PT0gXCJicmVha1wiIHx8IHR5cGUgPT09IFwiY29udGludWVcIikgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHwgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2goZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbiBfY2F0Y2godHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbi8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbi8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbnR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOiB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDogdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdW5kZWZpbmVkKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5TeW1ib2w7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyICQgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLndrcycpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuLyQua2V5b2YnKVxuICAsICRuYW1lcyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdldC1uYW1lcycpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJylcbiAgLCBnZXREZXNjICAgICAgICA9ICQuZ2V0RGVzY1xuICAsIHNldERlc2MgICAgICAgID0gJC5zZXREZXNjXG4gICwgX2NyZWF0ZSAgICAgICAgPSAkLmNyZWF0ZVxuICAsIGdldE5hbWVzICAgICAgID0gJG5hbWVzLmdldFxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIHNldHRlciAgICAgICAgID0gZmFsc2VcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgaXNFbnVtICAgICAgICAgPSAkLmlzRW51bVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCB1c2VOYXRpdmUgICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoc2V0RGVzYyh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gc2V0RGVzYyh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnZXREZXNjKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIHNldERlc2MoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pc2V0RGVzYyhPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IHNldERlc2M7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbC5wcm90b3R5cGUpO1xuICBzeW0uX2sgPSB0YWc7XG4gIERFU0NSSVBUT1JTICYmIHNldHRlciAmJiBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlzZXREZXNjKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBzZXREZXNjKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkpO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldXG4gICAgPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgdmFyIEQgPSBnZXREZXNjKGl0ID0gdG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOKXJlc3VsdC5wdXNoKGtleSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyICRzdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgLCBpICAgID0gMVxuICAgICwgJCQgICA9IGFyZ3VtZW50c1xuICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgd2hpbGUoJCQubGVuZ3RoID4gaSlhcmdzLnB1c2goJCRbaSsrXSk7XG4gIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgfTtcbiAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG59O1xudmFyIGJ1Z2d5SlNPTiA9ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighdXNlTmF0aXZlKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKGlzU3ltYm9sKHRoaXMpKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG4gICAgcmV0dXJuIHdyYXAodWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKSk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2wucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICBpc1N5bWJvbCA9IGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xuICB9O1xuXG4gICQuY3JlYXRlICAgICA9ICRjcmVhdGU7XG4gICQuaXNFbnVtICAgICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgJC5nZXREZXNjICAgID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJC5zZXREZXNjICAgID0gJGRlZmluZVByb3BlcnR5O1xuICAkLnNldERlc2NzICAgPSAkZGVmaW5lUHJvcGVydGllcztcbiAgJC5nZXROYW1lcyAgID0gJG5hbWVzLmdldCA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICAkLmdldFN5bWJvbHMgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuLyQubGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxufVxuXG52YXIgc3ltYm9sU3RhdGljcyA9IHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICByZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufTtcbi8vIDE5LjQuMi4yIFN5bWJvbC5oYXNJbnN0YW5jZVxuLy8gMTkuNC4yLjMgU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZVxuLy8gMTkuNC4yLjQgU3ltYm9sLml0ZXJhdG9yXG4vLyAxOS40LjIuNiBTeW1ib2wubWF0Y2hcbi8vIDE5LjQuMi44IFN5bWJvbC5yZXBsYWNlXG4vLyAxOS40LjIuOSBTeW1ib2wuc2VhcmNoXG4vLyAxOS40LjIuMTAgU3ltYm9sLnNwZWNpZXNcbi8vIDE5LjQuMi4xMSBTeW1ib2wuc3BsaXRcbi8vIDE5LjQuMi4xMiBTeW1ib2wudG9QcmltaXRpdmVcbi8vIDE5LjQuMi4xMyBTeW1ib2wudG9TdHJpbmdUYWdcbi8vIDE5LjQuMi4xNCBTeW1ib2wudW5zY29wYWJsZXNcbiQuZWFjaC5jYWxsKChcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCwnICtcbiAgJ3NwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHN5bSA9IHdrcyhpdCk7XG4gIHN5bWJvbFN0YXRpY3NbaXRdID0gdXNlTmF0aXZlID8gc3ltIDogd3JhcChzeW0pO1xufSk7XG5cbnNldHRlciA9IHRydWU7XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnU3ltYm9sJywgc3ltYm9sU3RhdGljcyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXVzZU5hdGl2ZSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIXVzZU5hdGl2ZSB8fCBidWdneUpTT04pLCAnSlNPTicsIHtzdHJpbmdpZnk6ICRzdHJpbmdpZnl9KTtcblxuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJCAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSAkLmdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQua2V5b2YuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgZ2V0TmFtZXMgID0gcmVxdWlyZSgnLi8kJykuZ2V0TmFtZXNcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnZXROYW1lcyhpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICBpZih3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJylyZXR1cm4gZ2V0V2luZG93TmFtZXMoaXQpO1xuICByZXR1cm4gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2V0LW5hbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIga2V5cyAgICAgICA9ICQuZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHM7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9ICQuaXNFbnVtXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpa2V5cy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbihhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXR9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvJC5jb3JlJykuUHJvbWlzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5JdGVyYXRvcnMuTm9kZUxpc3QgPSBJdGVyYXRvcnMuSFRNTENvbGxlY3Rpb24gPSBJdGVyYXRvcnMuQXJyYXk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgTElCUkFSWSAgICA9IHJlcXVpcmUoJy4vJC5saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgY3R4ICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIGNsYXNzb2YgICAgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJylcbiAgLCBzdHJpY3ROZXcgID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKVxuICAsIGZvck9mICAgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCBzZXRQcm90byAgID0gcmVxdWlyZSgnLi8kLnNldC1wcm90bycpLnNldFxuICAsIHNhbWUgICAgICAgPSByZXF1aXJlKCcuLyQuc2FtZS12YWx1ZScpXG4gICwgU1BFQ0lFUyAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi8kLnNwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIGFzYXAgICAgICAgPSByZXF1aXJlKCcuLyQubWljcm90YXNrJylcbiAgLCBQUk9NSVNFICAgID0gJ1Byb21pc2UnXG4gICwgcHJvY2VzcyAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgUCAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIGVtcHR5ICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgV3JhcHBlcjtcblxudmFyIHRlc3RSZXNvbHZlID0gZnVuY3Rpb24oc3ViKXtcbiAgdmFyIHRlc3QgPSBuZXcgUChlbXB0eSksIHByb21pc2U7XG4gIGlmKHN1Yil0ZXN0LmNvbnN0cnVjdG9yID0gZnVuY3Rpb24oZXhlYyl7XG4gICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICB9O1xuICAocHJvbWlzZSA9IFAucmVzb2x2ZSh0ZXN0KSlbJ2NhdGNoJ10oZW1wdHkpO1xuICByZXR1cm4gcHJvbWlzZSA9PT0gdGVzdDtcbn07XG5cbnZhciBVU0VfTkFUSVZFID0gZnVuY3Rpb24oKXtcbiAgdmFyIHdvcmtzID0gZmFsc2U7XG4gIGZ1bmN0aW9uIFAyKHgpe1xuICAgIHZhciBzZWxmID0gbmV3IFAoeCk7XG4gICAgc2V0UHJvdG8oc2VsZiwgUDIucHJvdG90eXBlKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuICB0cnkge1xuICAgIHdvcmtzID0gUCAmJiBQLnJlc29sdmUgJiYgdGVzdFJlc29sdmUoKTtcbiAgICBzZXRQcm90byhQMiwgUCk7XG4gICAgUDIucHJvdG90eXBlID0gJC5jcmVhdGUoUC5wcm90b3R5cGUsIHtjb25zdHJ1Y3Rvcjoge3ZhbHVlOiBQMn19KTtcbiAgICAvLyBhY3R1YWwgRmlyZWZveCBoYXMgYnJva2VuIHN1YmNsYXNzIHN1cHBvcnQsIHRlc3QgdGhhdFxuICAgIGlmKCEoUDIucmVzb2x2ZSg1KS50aGVuKGZ1bmN0aW9uKCl7fSkgaW5zdGFuY2VvZiBQMikpe1xuICAgICAgd29ya3MgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gYWN0dWFsIFY4IGJ1ZywgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxNjJcbiAgICBpZih3b3JrcyAmJiByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSl7XG4gICAgICB2YXIgdGhlbmFibGVUaGVuR290dGVuID0gZmFsc2U7XG4gICAgICBQLnJlc29sdmUoJC5zZXREZXNjKHt9LCAndGhlbicsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpeyB0aGVuYWJsZVRoZW5Hb3R0ZW4gPSB0cnVlOyB9XG4gICAgICB9KSk7XG4gICAgICB3b3JrcyA9IHRoZW5hYmxlVGhlbkdvdHRlbjtcbiAgICB9XG4gIH0gY2F0Y2goZSl7IHdvcmtzID0gZmFsc2U7IH1cbiAgcmV0dXJuIHdvcmtzO1xufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgaWYoTElCUkFSWSAmJiBhID09PSBQICYmIGIgPT09IFdyYXBwZXIpcmV0dXJuIHRydWU7XG4gIHJldHVybiBzYW1lKGEsIGIpO1xufTtcbnZhciBnZXRDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdO1xuICByZXR1cm4gUyAhPSB1bmRlZmluZWQgPyBTIDogQztcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKSxcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdClcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihyZWNvcmQsIGlzUmVqZWN0KXtcbiAgaWYocmVjb3JkLm4pcmV0dXJuO1xuICByZWNvcmQubiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHJlY29yZC5jO1xuICBhc2FwKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcmVjb3JkLnZcbiAgICAgICwgb2sgICAgPSByZWNvcmQucyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvaylyZWNvcmQuaCA9IHRydWU7XG4gICAgICAgICAgcmVzdWx0ID0gaGFuZGxlciA9PT0gdHJ1ZSA/IHZhbHVlIDogaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIGNoYWluLmxlbmd0aCA9IDA7XG4gICAgcmVjb3JkLm4gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdClzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgcHJvbWlzZSA9IHJlY29yZC5wXG4gICAgICAgICwgaGFuZGxlciwgY29uc29sZTtcbiAgICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSByZWNvcmQuYSA9IHVuZGVmaW5lZDtcbiAgICB9LCAxKTtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHZhciByZWNvcmQgPSBwcm9taXNlLl9kXG4gICAgLCBjaGFpbiAgPSByZWNvcmQuYSB8fCByZWNvcmQuY1xuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIGlmKHJlY29yZC5oKXJldHVybiBmYWxzZTtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHJlY29yZCA9IHRoaXM7XG4gIGlmKHJlY29yZC5kKXJldHVybjtcbiAgcmVjb3JkLmQgPSB0cnVlO1xuICByZWNvcmQgPSByZWNvcmQuciB8fCByZWNvcmQ7IC8vIHVud3JhcFxuICByZWNvcmQudiA9IHZhbHVlO1xuICByZWNvcmQucyA9IDI7XG4gIHJlY29yZC5hID0gcmVjb3JkLmMuc2xpY2UoKTtcbiAgbm90aWZ5KHJlY29yZCwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcmVjb3JkID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocmVjb3JkLmQpcmV0dXJuO1xuICByZWNvcmQuZCA9IHRydWU7XG4gIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocmVjb3JkLnAgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBhc2FwKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge3I6IHJlY29yZCwgZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY29yZC52ID0gdmFsdWU7XG4gICAgICByZWNvcmQucyA9IDE7XG4gICAgICBub3RpZnkocmVjb3JkLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7cjogcmVjb3JkLCBkOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gIFAgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIHZhciByZWNvcmQgPSB0aGlzLl9kID0ge1xuICAgICAgcDogc3RyaWN0TmV3KHRoaXMsIFAsIFBST01JU0UpLCAgICAgICAgIC8vIDwtIHByb21pc2VcbiAgICAgIGM6IFtdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICAgIGE6IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgICAgczogMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgICBkOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gZG9uZVxuICAgICAgdjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICBoOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gaGFuZGxlZCByZWplY3Rpb25cbiAgICAgIG46IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHJlY29yZCwgMSksIGN0eCgkcmVqZWN0LCByZWNvcmQsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwocmVjb3JkLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpKFAucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgUCkpXG4gICAgICAgICwgcHJvbWlzZSAgPSByZWFjdGlvbi5wcm9taXNlXG4gICAgICAgICwgcmVjb3JkICAgPSB0aGlzLl9kO1xuICAgICAgcmVhY3Rpb24ub2sgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlY29yZC5jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYocmVjb3JkLmEpcmVjb3JkLmEucHVzaChyZWFjdGlvbik7XG4gICAgICBpZihyZWNvcmQucylub3RpZnkocmVjb3JkLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6IFB9KTtcbnJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpKFAsIFBST01JU0UpO1xucmVxdWlyZSgnLi8kLnNldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi8kLmNvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCB0ZXN0UmVzb2x2ZSh0cnVlKSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiBQICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICBQLmFsbChpdGVyKVsnY2F0Y2gnXShmdW5jdGlvbigpe30pO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKVxuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0XG4gICAgICAsIHZhbHVlcyAgICAgPSBbXTtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCB2YWx1ZXMucHVzaCwgdmFsdWVzKTtcbiAgICAgIHZhciByZW1haW5pbmcgPSB2YWx1ZXMubGVuZ3RoXG4gICAgICAgICwgcmVzdWx0cyAgID0gQXJyYXkocmVtYWluaW5nKTtcbiAgICAgIGlmKHJlbWFpbmluZykkLmVhY2guY2FsbCh2YWx1ZXMsIGZ1bmN0aW9uKHByb21pc2UsIGluZGV4KXtcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgZWxzZSByZXNvbHZlKHJlc3VsdHMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gZ2V0Q29uc3RydWN0b3IodGhpcylcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXRocm93IFR5cGVFcnJvcihuYW1lICsgXCI6IHVzZSB0aGUgJ25ldycgb3BlcmF0b3IhXCIpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3RyaWN0LW5ldy5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQpe1xuICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuOSBTYW1lVmFsdWUoeCwgeSlcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpe1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zYW1lLXZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vJC50YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi8kLmNvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxudmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgdmFyIHBhcmVudCwgZG9tYWluLCBmbjtcbiAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpe1xuICAgIHByb2Nlc3MuZG9tYWluID0gbnVsbDtcbiAgICBwYXJlbnQuZXhpdCgpO1xuICB9XG4gIHdoaWxlKGhlYWQpe1xuICAgIGRvbWFpbiA9IGhlYWQuZG9tYWluO1xuICAgIGZuICAgICA9IGhlYWQuZm47XG4gICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgIGZuKCk7IC8vIDwtIGN1cnJlbnRseSB3ZSB1c2UgaXQgb25seSBmb3IgUHJvbWlzZSAtIHRyeSAvIGNhdGNoIG5vdCByZXF1aXJlZFxuICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xufTtcblxuLy8gTm9kZS5qc1xuaWYoaXNOb2RlKXtcbiAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgfTtcbi8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxufSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgdmFyIHRvZ2dsZSA9IDFcbiAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gLXRvZ2dsZTtcbiAgfTtcbi8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG59IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZmx1c2gpO1xuICB9O1xuLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbi8vIC0gc2V0SW1tZWRpYXRlXG4vLyAtIE1lc3NhZ2VDaGFubmVsXG4vLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4vLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuLy8gLSBzZXRUaW1lb3V0XG59IGVsc2Uge1xuICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhc2FwKGZuKXtcbiAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWQsIGRvbWFpbjogaXNOb2RlICYmIHByb2Nlc3MuZG9tYWlufTtcbiAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICBpZighaGVhZCl7XG4gICAgaGVhZCA9IHRhc2s7XG4gICAgbm90aWZ5KCk7XG4gIH0gbGFzdCA9IHRhc2s7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmh0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdG5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuLyQuY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0bmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmh0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY29yZSAgICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gY29yZVtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSQuc2V0RGVzYyhDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTd2VldCBmcm9tICcuL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQnXG5mdW5jdGlvbiBob21lVXNlcigpIHtcbiAgdGhpcy5pbml0KClcbn1cblxuaG9tZVVzZXIucHJvdG90eXBlID0ge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jb25maWcoKVxuICAgIHRoaXMubGlzdGVuKClcbiAgfSxcblxuICBjb25maWc6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFsZXJ0ID0gbmV3IFN3ZWV0KClcbiAgICB0aGlzLnRva2VuID0gJChcIiN0b2tlblwiKS52YWwoKVxuICAgIHRoaXMuZWxlbWVudCA9IHtcbiAgICAgIHBNZXNzOiAkKCcjbWVzc0NoYW5nZVBhc3MnKSxcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIHBhc3N3b3JkT2xkOiAkKCcjcGFzc3dvcmRPbGQnKSxcbiAgICAgICAgcGFzc3dvcmROZXc6ICQoJyNwYXNzd29yZE5ldycpLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICQoJyNjb25maXJtUGFzc3dvcmQnKVxuICAgICAgfSxcbiAgICAgIGJ0bjoge1xuICAgICAgICBzdWJtaXRDaGFnZVBhc3N3b3JkIDokKCcjc3VibWl0Q2hhbmdlUGFzc3dvcmQnKVxuICAgICAgfSxcbiAgICAgIG1vZGFsQ2hhbmdlUGFzc3dvcmQ6ICQoJyNtb2RhbENoYW5nZVBhcycpXG4gICAgfVxuICB9LFxuXG4gIGxpc3RlbjogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xpY2tTdWJtaXRDaGFnZVBhc3N3b3JkKClcbiAgfSxcblxuICBjbGlja1N1Ym1pdENoYWdlUGFzc3dvcmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmVsZW1lbnQuYnRuLnN1Ym1pdENoYWdlUGFzc3dvcmQuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgJC5wb3N0KFxuICAgICAgICBgJHtsb2NhdGlvbi5vcmlnaW59L2hvbWUvY2hhbmdlUGFzc3dvcmRgLFxuICAgICAgICB7XG4gICAgICAgICAgX3Rva2VuOiAkKCcjdG9rZW4nKS52YWwoKSxcbiAgICAgICAgICBwYXNzd29yZE9sZDogc2VsZi5lbGVtZW50LmlucHV0LnBhc3N3b3JkT2xkLnZhbCgpID8gc2VsZi5lbGVtZW50LmlucHV0LnBhc3N3b3JkT2xkLnZhbCgpIDogbnVsbCxcbiAgICAgICAgICBwYXNzd29yZE5ldzogc2VsZi5lbGVtZW50LmlucHV0LnBhc3N3b3JkTmV3LnZhbCgpLFxuICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogc2VsZi5lbGVtZW50LmlucHV0LmNvbmZpcm1QYXNzd29yZC52YWwoKSxcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5jb2RlID09IDUwMCkge1xuICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQucE1lc3MudGV4dChkYXRhLm1lc3NhZ2UpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhLm1lc3NhZ2UpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQucE1lc3MudGV4dChkYXRhLm1lc3NhZ2Vba2V5XVswXSlcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhbGVydCA9IGBTYXZlZGBcbiAgICAgICAgICAgIHNlbGYuYWxlcnQuYWxlcnRTdWNjZXNzKGFsZXJ0KVxuICAgICAgICAgICAgc2VsZi5oaWRlbW9kYWxDaGFuZ2VQYXNzd29yZCgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnanNvbidcbiAgICAgIClcbiAgICB9KVxuICB9LFxuXG4gIGhpZGVtb2RhbENoYW5nZVBhc3N3b3JkOiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5lbGVtZW50Lm1vZGFsQ2hhbmdlUGFzc3dvcmQubW9kYWwoYGhpZGVgKVxuICB9LFxufVxuZXhwb3J0IGRlZmF1bHQgaG9tZVVzZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvaG9tZVVzZXIuanMiXSwic291cmNlUm9vdCI6IiJ9