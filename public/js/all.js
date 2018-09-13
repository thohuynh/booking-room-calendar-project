!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,t;function n(){return e.apply(null,arguments)}function s(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function i(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function r(e){return void 0===e}function a(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function o(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function u(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function d(e,t){for(var n in t)l(t,n)&&(e[n]=t[n]);return l(t,"toString")&&(e.toString=t.toString),l(t,"valueOf")&&(e.valueOf=t.valueOf),e}function h(e,t,n,s){return Ot(e,t,n,s,!0).utc()}function c(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function f(e){if(null==e._isValid){var n=c(e),s=t.call(n.parsedDateParts,function(e){return null!=e}),i=!isNaN(e._d.getTime())&&n.overflow<0&&!n.empty&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&s);if(e._strict&&(i=i&&0===n.charsLeftOver&&0===n.unusedTokens.length&&void 0===n.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return i;e._isValid=i}return e._isValid}function m(e){var t=h(NaN);return null!=e?d(c(t),e):c(t).userInvalidated=!0,t}t=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var _=n.momentProperties=[];function y(e,t){var n,s,i;if(r(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),r(t._i)||(e._i=t._i),r(t._f)||(e._f=t._f),r(t._l)||(e._l=t._l),r(t._strict)||(e._strict=t._strict),r(t._tzm)||(e._tzm=t._tzm),r(t._isUTC)||(e._isUTC=t._isUTC),r(t._offset)||(e._offset=t._offset),r(t._pf)||(e._pf=c(t)),r(t._locale)||(e._locale=t._locale),_.length>0)for(n=0;n<_.length;n++)r(i=t[s=_[n]])||(e[s]=i);return e}var g=!1;function p(e){y(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===g&&(g=!0,n.updateOffset(this),g=!1)}function v(e){return e instanceof p||null!=e&&null!=e._isAMomentObject}function w(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function M(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=w(t)),n}function S(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&M(e[s])!==M(t[s]))&&a++;return a+r}function D(e){!1===n.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function k(e,t){var s=!0;return d(function(){if(null!=n.deprecationHandler&&n.deprecationHandler(null,e),s){for(var i,r=[],a=0;a<arguments.length;a++){if(i="","object"==typeof arguments[a]){for(var o in i+="\n["+a+"] ",arguments[0])i+=o+": "+arguments[0][o]+", ";i=i.slice(0,-2)}else i=arguments[a];r.push(i)}D(e+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),s=!1}return t.apply(this,arguments)},t)}var Y,O={};function T(e,t){null!=n.deprecationHandler&&n.deprecationHandler(e,t),O[e]||(D(t),O[e]=!0)}function x(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=d({},e);for(n in t)l(t,n)&&(i(e[n])&&i(t[n])?(s[n]={},d(s[n],e[n]),d(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)l(e,n)&&!l(t,n)&&i(e[n])&&(s[n]=d({},s[n]));return s}function P(e){null!=e&&this.set(e)}n.suppressDeprecationWarnings=!1,n.deprecationHandler=null,Y=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)l(e,t)&&n.push(t);return n};var W={};function H(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function R(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function C(e){var t,n,s={};for(n in e)l(e,n)&&(t=R(n))&&(s[t]=e[n]);return s}var F={};function L(e,t){F[e]=t}function U(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return U(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(e){var t,n,s,i=e.match(N);for(t=0,n=i.length;t<n;t++)E[i[t]]?i[t]=E[i[t]]:i[t]=(s=i[t]).match(/\[[\s\S]/)?s.replace(/^\[|\]$/g,""):s.replace(/\\/g,"");return function(t){var s,r="";for(s=0;s<n;s++)r+=x(i[s])?i[s].call(t,e):i[s];return r}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;n>=0&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,t,n){oe[e]=x(t)?t:function(e,s){return e&&n?n:t}}function le(e,t){return l(oe,e)?oe[e](t._strict,t._locale):new RegExp(de(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function de(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var he={};function ce(e,t){var n,s=t;for("string"==typeof e&&(e=[e]),a(t)&&(s=function(e,n){n[t]=M(e)}),n=0;n<e.length;n++)he[e[n]]=s}function fe(e,t){ce(e,function(e,n,s,i){s._w=s._w||{},t(e,s._w,s,i)})}var me=0,_e=1,ye=2,ge=3,pe=4,ve=5,we=6,Me=7,Se=8;function De(e){return ke(e)?366:365}function ke(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),H("year","y"),L("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?n.parseTwoDigitYear(e):M(e)}),ce("YY",function(e,t){t[me]=n.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),n.parseTwoDigitYear=function(e){return M(e)+(M(e)>68?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(e,t){return function(s){return null!=s?(be(this,e,s),n.updateOffset(this,t),this):xe(this,e)}}function xe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function be(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ke(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?ke(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),H("month","M"),L("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=M(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:c(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,He="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Re="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=M(t);else if(!a(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Fe(e){return null!=e?(Ce(this,e),n.updateOffset(this,!0),this):xe(this,"Month")}var Le=ae;var Ue=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=h([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=de(s[t]),i[t]=de(i[t]);for(t=0;t<24;t++)r[t]=de(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return o<=0?a=De(r=e-1)+o:o>De(e)?(r=e+1,a=o-De(e)):(r=e,a=o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(De(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),L("week",5),L("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=M(e)});I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),H("day","d"),H("weekday","e"),H("isoWeekday","E"),L("day",11),L("weekday",11),L("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:c(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=M(e)});var je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var ze="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var $e=ae;var qe=ae;var Je=ae;function Be(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=h([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=de(o[t]),u[t]=de(u[t]),l[t]=de(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Qe(){return this.hours()%12||12}function Xe(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Ke(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Qe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Xe("a",!0),Xe("A",!1),H("hour","h"),L("hour",13),ue("a",Ke),ue("A",Ke),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=M(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=M(e),c(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=M(e.substr(0,s)),t[pe]=M(e.substr(s)),c(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=M(e.substr(0,s)),t[pe]=M(e.substr(s,2)),t[ve]=M(e.substr(i)),c(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=M(e.substr(0,s)),t[pe]=M(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=M(e.substr(0,s)),t[pe]=M(e.substr(s,2)),t[ve]=M(e.substr(i))});var et,tt=Te("Hours",!0),nt={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:He,monthsShort:Re,week:{dow:0,doy:6},weekdays:je,weekdaysMin:ze,weekdaysShort:Ze,meridiemParse:/[ap]\.?m?\.?/i},st={},it={};function rt(e){return e?e.toLowerCase().replace("_","-"):e}function at(e){var t=null;if(!st[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=et._abbr,require("./locale/"+e),ot(t)}catch(e){}return st[e]}function ot(e,t){var n;return e&&((n=r(t)?lt(e):ut(e,t))?et=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),et._abbr}function ut(e,t){if(null!==t){var n,s=nt;if(t.abbr=e,null!=st[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=st[e]._config;else if(null!=t.parentLocale)if(null!=st[t.parentLocale])s=st[t.parentLocale]._config;else{if(null==(n=at(t.parentLocale)))return it[t.parentLocale]||(it[t.parentLocale]=[]),it[t.parentLocale].push({name:e,config:t}),null;s=n._config}return st[e]=new P(b(s,t)),it[e]&&it[e].forEach(function(e){ut(e.name,e.config)}),ot(e),st[e]}return delete st[e],null}function lt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return et;if(!s(e)){if(t=at(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=rt(e[r]).split("-")).length,n=(n=rt(e[r+1]))?n.split("-"):null;t>0;){if(s=at(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&S(i,n,!0)>=t-1)break;t--}r++}return et}(e)}function dt(e){var t,n=e._a;return n&&-2===c(e).overflow&&(t=n[_e]<0||n[_e]>11?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||n[ge]>24||24===n[ge]&&(0!==n[pe]||0!==n[ve]||0!==n[we])?ge:n[pe]<0||n[pe]>59?pe:n[ve]<0||n[ve]>59?ve:n[we]<0||n[we]>999?we:-1,c(e)._overflowDayOfYear&&(t<me||t>ye)&&(t=ye),c(e)._overflowWeeks&&-1===t&&(t=Me),c(e)._overflowWeekday&&-1===t&&(t=Se),c(e).overflow=t),e}function ht(e,t,n){return null!=e?e:null!=t?t:n}function ct(e){var t,s,i,r,a,o=[];if(!e._d){var u,l;for(u=e,l=new Date(n.now()),i=u._useUTC?[l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()]:[l.getFullYear(),l.getMonth(),l.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ht(t.GG,e._a[me],Ie(Tt(),1,4).year),s=ht(t.W,1),((i=ht(t.E,1))<1||i>7)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(Tt(),r,a);n=ht(t.gg,e._a[me],l.year),s=ht(t.w,l.week),null!=t.d?((i=t.d)<0||i>6)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||t.e>6)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?c(e)._overflowWeeks=!0:null!=u?c(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(a=ht(e._a[me],i[me]),(e._dayOfYear>De(a)||0===e._dayOfYear)&&(c(e)._overflowDayOfYear=!0),s=Ge(a,0,e._dayOfYear),e._a[_e]=s.getUTCMonth(),e._a[ye]=s.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=i[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[pe]&&0===e._a[ve]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a);return e<100&&e>=0&&isFinite(o.getFullYear())&&o.setFullYear(e),o}).apply(null,o),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==r&&(c(e).weekdayMismatch=!0)}}var ft=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function vt(e){var t,n,s,i,r,a,o=e._i,u=ft.exec(o)||mt.exec(o);if(u){for(c(e).iso=!0,t=0,n=yt.length;t<n;t++)if(yt[t][1].exec(u[1])){i=yt[t][0],s=!1!==yt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[3])){r=(u[2]||" ")+gt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!_t.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),kt(e)}else e._isValid=!1}var wt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Mt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),Re.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim());if(i){var r=Mt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&Ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(c(s).weekdayMismatch=!0,s._isValid=!1,1))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),c(e).rfc2822=!0}else e._isValid=!1}function kt(e){if(e._f!==n.ISO_8601)if(e._f!==n.RFC_2822){e._a=[],c(e).empty=!0;var t,s,i,r,a,o,u,d,h=""+e._i,f=h.length,m=0;for(i=j(e._f,e._locale).match(N)||[],t=0;t<i.length;t++)r=i[t],(s=(h.match(le(r,e))||[])[0])&&((a=h.substr(0,h.indexOf(s))).length>0&&c(e).unusedInput.push(a),h=h.slice(h.indexOf(s)+s.length),m+=s.length),E[r]?(s?c(e).empty=!1:c(e).unusedTokens.push(r),o=r,d=e,null!=(u=s)&&l(he,o)&&he[o](u,d._a,d,o)):e._strict&&!s&&c(e).unusedTokens.push(r);c(e).charsLeftOver=f-m,h.length>0&&c(e).unusedInput.push(h),e._a[ge]<=12&&!0===c(e).bigHour&&e._a[ge]>0&&(c(e).bigHour=void 0),c(e).parsedDateParts=e._a.slice(0),c(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0),t):t}(e._locale,e._a[ge],e._meridiem),ct(e),dt(e)}else Dt(e);else vt(e)}function Yt(e){var t,l,h,_,g=e._i,w=e._f;return e._locale=e._locale||lt(e._l),null===g||void 0===w&&""===g?m({nullInput:!0}):("string"==typeof g&&(e._i=g=e._locale.preparse(g)),v(g)?new p(dt(g)):(o(g)?e._d=g:s(w)?function(e){var t,n,s,i,r;if(0===e._f.length)return c(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<e._f.length;i++)r=0,t=y({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],kt(t),f(t)&&(r+=c(t).charsLeftOver,r+=10*c(t).unusedTokens.length,c(t).score=r,(null==s||r<s)&&(s=r,n=t));d(e,n||t)}(e):w?kt(e):r(l=(t=e)._i)?t._d=new Date(n.now()):o(l)?t._d=new Date(l.valueOf()):"string"==typeof l?(h=t,null===(_=pt.exec(h._i))?(vt(h),!1===h._isValid&&(delete h._isValid,Dt(h),!1===h._isValid&&(delete h._isValid,n.createFromInputFallback(h)))):h._d=new Date(+_[1])):s(l)?(t._a=u(l.slice(0),function(e){return parseInt(e,10)}),ct(t)):i(l)?function(e){if(!e._d){var t=C(e._i);e._a=u([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ct(e)}}(t):a(l)?t._d=new Date(l):n.createFromInputFallback(t),f(e)||(e._d=null),e))}function Ot(e,t,n,r,a){var o,u={};return!0!==n&&!1!==n||(r=n,n=void 0),(i(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||s(e)&&0===e.length)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=a,u._l=n,u._i=e,u._f=t,u._strict=r,(o=new p(dt(Yt(u))))._nextDay&&(o.add(1,"d"),o._nextDay=void 0),o}function Tt(e,t,n,s){return Ot(e,t,n,s,!1)}n.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),n.ISO_8601=function(){},n.RFC_2822=function(){};var xt=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:m()}),bt=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:m()});function Pt(e,t){var n,i;if(1===t.length&&s(t[0])&&(t=t[0]),!t.length)return Tt();for(n=t[0],i=1;i<t.length;++i)t[i].isValid()&&!t[i][e](n)||(n=t[i]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=C(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Wt,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Wt.length;++s)if(e[Wt[s]]){if(n)return!1;parseFloat(e[Wt[s]])!==M(e[Wt[s]])&&(n=!0)}return!0}(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=lt(),this._bubble()}function Rt(e){return e instanceof Ht}function Ct(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,t){I(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+U(~~(e/60),2)+t+U(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ut(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Ut(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+M(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Nt(e,t){var s,i;return t._isUTC?(s=t.clone(),i=(v(e)||o(e)?e.valueOf():Tt(e).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+i),n.updateOffset(s,!1),s):Tt(e).local()}function Gt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Vt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}n.updateOffset=function(){};var Et=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function At(e,t){var n,s,i,r=e,o=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:a(e)?(r={},t?r[t]=e:r.milliseconds=e):(o=Et.exec(e))?(n="-"===o[1]?-1:1,r={y:0,d:M(o[ye])*n,h:M(o[ge])*n,m:M(o[pe])*n,s:M(o[ve])*n,ms:M(Ct(1e3*o[we]))*n}):(o=It.exec(e))?(n="-"===o[1]?-1:(o[1],1),r={y:jt(o[2],n),M:jt(o[3],n),w:jt(o[4],n),d:jt(o[5],n),h:jt(o[6],n),m:jt(o[7],n),s:jt(o[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Nt(t,e),e.isBefore(t)?n=Zt(e,t):((n=Zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Tt(r.from),Tt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&l(e,"_locale")&&(s._locale=e._locale),s}function jt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Zt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function zt(e,t){return function(n,s){var i;return null===s||isNaN(+s)||(T(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=s,s=i),$t(this,At(n="string"==typeof n?+n:n,s),e),this}}function $t(e,t,s,i){var r=t._milliseconds,a=Ct(t._days),o=Ct(t._months);e.isValid()&&(i=null==i||i,o&&Ce(e,xe(e,"Month")+o*s),a&&be(e,"Date",xe(e,"Date")+a*s),r&&e._d.setTime(e._d.valueOf()+r*s),i&&n.updateOffset(e,a||o))}At.fn=Ht.prototype,At.invalid=function(){return At(NaN)};var qt=zt(1,"add"),Jt=zt(-1,"subtract");function Bt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Qt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=lt(e))&&(this._locale=t),this)}n.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",n.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xt=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Kt(){return this._locale}function en(e,t){I(0,[e,e.length],0,t)}function tn(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:(t>(r=Ae(e,s,i))&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),en("gggg","weekYear"),en("ggggg","weekYear"),en("GGGG","isoWeekYear"),en("GGGGG","isoWeekYear"),H("weekYear","gg"),H("isoWeekYear","GG"),L("weekYear",1),L("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=M(e)}),fe(["gg","GG"],function(e,t,s,i){t[i]=n.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),H("quarter","Q"),L("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(M(e)-1)}),I("D",["DD",2],"Do","date"),H("date","D"),L("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=M(e.match(B)[0])});var nn=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),H("dayOfYear","DDD"),L("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=M(e)}),I("m",["mm",2],0,"minute"),H("minute","m"),L("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],pe);var sn=Te("Minutes",!1);I("s",["ss",2],0,"second"),H("second","s"),L("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],ve);var rn,an=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),H("millisecond","ms"),L("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),rn="SSSS";rn.length<=9;rn+="S")ue(rn,ne);function on(e,t){t[we]=M(1e3*("0."+e))}for(rn="S";rn.length<=9;rn+="S")ce(rn,on);var un=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var ln=p.prototype;function dn(e){return e}ln.add=qt,ln.calendar=function(e,t){var s=e||Tt(),i=Nt(s,this).startOf("day"),r=n.calendarFormat(this,i)||"sameElse",a=t&&(x(t[r])?t[r].call(this,s):t[r]);return this.format(a||this.localeData().calendar(r,this,Tt(s)))},ln.clone=function(){return new p(this)},ln.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Nt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=R(t)){case"year":r=Bt(this,s)/12;break;case"month":r=Bt(this,s);break;case"quarter":r=Bt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:w(r)},ln.endOf=function(e){return void 0===(e=R(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},ln.format=function(e){e||(e=this.isUtc()?n.defaultFormatUtc:n.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},ln.from=function(e,t){return this.isValid()&&(v(e)&&e.isValid()||Tt(e).isValid())?At({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.fromNow=function(e){return this.from(Tt(),e)},ln.to=function(e,t){return this.isValid()&&(v(e)&&e.isValid()||Tt(e).isValid())?At({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.toNow=function(e){return this.to(Tt(),e)},ln.get=function(e){return x(this[e=R(e)])?this[e]():this},ln.invalidAt=function(){return c(this).overflow},ln.isAfter=function(e,t){var n=v(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(r(t)?"millisecond":t))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},ln.isBefore=function(e,t){var n=v(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(r(t)?"millisecond":t))?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},ln.isBetween=function(e,t,n,s){return("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))},ln.isSame=function(e,t){var n,s=v(e)?e:Tt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=R(t||"millisecond"))?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},ln.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},ln.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},ln.isValid=function(){return f(this)},ln.lang=Xt,ln.locale=Qt,ln.localeData=Kt,ln.max=bt,ln.min=xt,ln.parsingFlags=function(){return d({},c(this))},ln.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:F[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=C(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(x(this[e=R(e)]))return this[e](t);return this},ln.startOf=function(e){switch(e=R(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},ln.subtract=Jt,ln.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},ln.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},ln.toDate=function(){return new Date(this.valueOf())},ln.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):x(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},ln.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},ln.toJSON=function(){return this.isValid()?this.toISOString():null},ln.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},ln.unix=function(){return Math.floor(this.valueOf()/1e3)},ln.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},ln.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},ln.year=Oe,ln.isLeapYear=function(){return ke(this.year())},ln.weekYear=function(e){return tn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},ln.isoWeekYear=function(e){return tn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},ln.quarter=ln.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},ln.month=Fe,ln.daysInMonth=function(){return Pe(this.year(),this.month())},ln.week=ln.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},ln.isoWeek=ln.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},ln.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},ln.isoWeeksInYear=function(){return Ae(this.year(),1,4)},ln.date=nn,ln.day=ln.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},ln.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},ln.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=(n=e,s=this.localeData(),"string"==typeof n?s.weekdaysParse(n)%7||7:isNaN(n)?null:n);return this.day(this.day()%7?t:t-7)}return this.day()||7;var n,s},ln.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},ln.hour=ln.hours=tt,ln.minute=ln.minutes=sn,ln.second=ln.seconds=an,ln.millisecond=ln.milliseconds=un,ln.utcOffset=function(e,t,s){var i,r=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Ut(re,e)))return this}else Math.abs(e)<16&&!s&&(e*=60);return!this._isUTC&&t&&(i=Gt(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?$t(this,At(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,n.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:Gt(this)},ln.utc=function(e){return this.utcOffset(0,e)},ln.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Gt(this),"m")),this},ln.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ut(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},ln.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Tt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},ln.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},ln.isLocal=function(){return!!this.isValid()&&!this._isUTC},ln.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},ln.isUtc=Vt,ln.isUTC=Vt,ln.zoneAbbr=function(){return this._isUTC?"UTC":""},ln.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},ln.dates=k("dates accessor is deprecated. Use date instead.",nn),ln.months=k("months accessor is deprecated. Use month instead",Fe),ln.years=k("years accessor is deprecated. Use year instead",Oe),ln.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),ln.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!r(this._isDSTShifted))return this._isDSTShifted;var e={};if(y(e,this),(e=Yt(e))._a){var t=e._isUTC?h(e._a):Tt(e._a);this._isDSTShifted=this.isValid()&&S(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted});var hn=P.prototype;function cn(e,t,n,s){var i=lt(),r=h().set(s,t);return i[n](r,e)}function fn(e,t,n){if(a(e)&&(t=e,e=void 0),e=e||"",null!=t)return cn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=cn(e,s,n,"month");return i}function mn(e,t,n,s){"boolean"==typeof e?(a(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,a(t)&&(n=t,t=void 0),t=t||"");var i,r=lt(),o=e?r._week.dow:0;if(null!=n)return cn(t,(n+o)%7,s,"day");var u=[];for(i=0;i<7;i++)u[i]=cn(t,(i+o)%7,s,"day");return u}hn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return x(s)?s.call(t,n):s},hn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},hn.invalidDate=function(){return this._invalidDate},hn.ordinal=function(e){return this._ordinal.replace("%d",e)},hn.preparse=dn,hn.postformat=dn,hn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return x(i)?i(e,t,n,s):i.replace(/%d/i,e)},hn.pastFuture=function(e,t){var n=this._relativeTime[e>0?"future":"past"];return x(n)?n(t):n.replace(/%s/i,t)},hn.set=function(e){var t,n;for(n in e)x(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},hn.months=function(e,t){return e?s(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:s(this._months)?this._months:this._months.standalone},hn.monthsShort=function(e,t){return e?s(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},hn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=h([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=h([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},hn.monthsRegex=function(e){return this._monthsParseExact?(l(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(l(this,"_monthsRegex")||(this._monthsRegex=Ue),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},hn.monthsShortRegex=function(e){return this._monthsParseExact?(l(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(l(this,"_monthsShortRegex")||(this._monthsShortRegex=Le),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},hn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},hn.firstDayOfYear=function(){return this._week.doy},hn.firstDayOfWeek=function(){return this._week.dow},hn.weekdays=function(e,t){return e?s(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:s(this._weekdays)?this._weekdays:this._weekdays.standalone},hn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},hn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},hn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=h([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=h([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},hn.weekdaysRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(l(this,"_weekdaysRegex")||(this._weekdaysRegex=$e),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},hn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},hn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Je),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},hn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},hn.meridiem=function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},ot("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===M(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),n.lang=k("moment.lang is deprecated. Use moment.locale instead.",ot),n.langData=k("moment.langData is deprecated. Use moment.localeData instead.",lt);var _n=Math.abs;function yn(e,t,n,s){var i=At(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function gn(e){return e<0?Math.floor(e):Math.ceil(e)}function pn(e){return 4800*e/146097}function vn(e){return 146097*e/4800}function wn(e){return function(){return this.as(e)}}var Mn=wn("ms"),Sn=wn("s"),Dn=wn("m"),kn=wn("h"),Yn=wn("d"),On=wn("w"),Tn=wn("M"),xn=wn("y");function bn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Pn=bn("milliseconds"),Wn=bn("seconds"),Hn=bn("minutes"),Rn=bn("hours"),Cn=bn("days"),Fn=bn("months"),Ln=bn("years");var Un=Math.round,Nn={ss:44,s:45,m:45,h:22,d:26,M:11};var Gn=Math.abs;function Vn(e){return(e>0)-(e<0)||+e}function En(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Gn(this._milliseconds)/1e3,s=Gn(this._days),i=Gn(this._months);t=w((e=w(n/60))/60),n%=60,e%=60;var r=w(i/12),a=i%=12,o=s,u=t,l=e,d=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var c=h<0?"-":"",f=Vn(this._months)!==Vn(h)?"-":"",m=Vn(this._days)!==Vn(h)?"-":"",_=Vn(this._milliseconds)!==Vn(h)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||d?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(d?_+d+"S":"")}var In=Ht.prototype;return In.isValid=function(){return this._isValid},In.abs=function(){var e=this._data;return this._milliseconds=_n(this._milliseconds),this._days=_n(this._days),this._months=_n(this._months),e.milliseconds=_n(e.milliseconds),e.seconds=_n(e.seconds),e.minutes=_n(e.minutes),e.hours=_n(e.hours),e.months=_n(e.months),e.years=_n(e.years),this},In.add=function(e,t){return yn(this,e,t,1)},In.subtract=function(e,t){return yn(this,e,t,-1)},In.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=R(e))||"year"===e)return t=this._days+s/864e5,n=this._months+pn(t),"month"===e?n:n/12;switch(t=this._days+Math.round(vn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},In.asMilliseconds=Mn,In.asSeconds=Sn,In.asMinutes=Dn,In.asHours=kn,In.asDays=Yn,In.asWeeks=On,In.asMonths=Tn,In.asYears=xn,In.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*M(this._months/12):NaN},In._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return r>=0&&a>=0&&o>=0||r<=0&&a<=0&&o<=0||(r+=864e5*gn(vn(o)+a),a=0,o=0),u.milliseconds=r%1e3,e=w(r/1e3),u.seconds=e%60,t=w(e/60),u.minutes=t%60,n=w(t/60),u.hours=n%24,o+=i=w(pn(a+=w(n/24))),a-=gn(vn(i)),s=w(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},In.clone=function(){return At(this)},In.get=function(e){return e=R(e),this.isValid()?this[e+"s"]():NaN},In.milliseconds=Pn,In.seconds=Wn,In.minutes=Hn,In.hours=Rn,In.days=Cn,In.weeks=function(){return w(this.days()/7)},In.months=Fn,In.years=Ln,In.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,d,h,c=this.localeData(),f=(n=!e,s=c,i=At(t=this).abs(),r=Un(i.as("s")),a=Un(i.as("m")),o=Un(i.as("h")),u=Un(i.as("d")),l=Un(i.as("M")),d=Un(i.as("y")),(h=r<=Nn.ss&&["s",r]||r<Nn.s&&["ss",r]||a<=1&&["m"]||a<Nn.m&&["mm",a]||o<=1&&["h"]||o<Nn.h&&["hh",o]||u<=1&&["d"]||u<Nn.d&&["dd",u]||l<=1&&["M"]||l<Nn.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=n,h[3]=+t>0,h[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,h));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},In.toISOString=En,In.toString=En,In.toJSON=En,In.locale=Qt,In.localeData=Kt,In.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",En),In.lang=Xt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(M(e))}),n.version="2.21.0",e=Tt,n.fn=ln,n.min=function(){return Pt("isBefore",[].slice.call(arguments,0))},n.max=function(){return Pt("isAfter",[].slice.call(arguments,0))},n.now=function(){return Date.now?Date.now():+new Date},n.utc=h,n.unix=function(e){return Tt(1e3*e)},n.months=function(e,t){return fn(e,t,"months")},n.isDate=o,n.locale=ot,n.invalid=m,n.duration=At,n.isMoment=v,n.weekdays=function(e,t,n){return mn(e,t,n,"weekdays")},n.parseZone=function(){return Tt.apply(null,arguments).parseZone()},n.localeData=lt,n.isDuration=Rt,n.monthsShort=function(e,t){return fn(e,t,"monthsShort")},n.weekdaysMin=function(e,t,n){return mn(e,t,n,"weekdaysMin")},n.defineLocale=ut,n.updateLocale=function(e,t){if(null!=t){var n,s,i=nt;null!=(s=at(e))&&(i=s._config),(n=new P(t=b(i,t))).parentLocale=st[e],st[e]=n,ot(e)}else null!=st[e]&&(null!=st[e].parentLocale?st[e]=st[e].parentLocale:null!=st[e]&&delete st[e]);return st[e]},n.locales=function(){return Y(st)},n.weekdaysShort=function(e,t,n){return mn(e,t,n,"weekdaysShort")},n.normalizeUnits=R,n.relativeTimeRounding=function(e){return void 0===e?Un:"function"==typeof e&&(Un=e,!0)},n.relativeTimeThreshold=function(e,t){return void 0!==Nn[e]&&(void 0===t?Nn[e]:(Nn[e]=t,"s"===e&&(Nn.ss=t-1),!0))},n.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},n.prototype=ln,n.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},n});
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*!
 * FullCalendar v3.9.0
 * Docs & License: https://fullcalendar.io/
 * (c) 2018 Adam Shaw
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["moment", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["FullCalendar"] = factory(require("moment"), require("jquery"));
	else
		root["FullCalendar"] = factory(root["moment"], root["jQuery"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 236);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

/*
derived from:
https://github.com/Microsoft/tslib/blob/v1.6.0/tslib.js

only include the helpers we need, to keep down filesize
*/
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p]; };
exports.__extends = function (d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(0);
var $ = __webpack_require__(3);
/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Given the scrollbar widths of some other container, create borders/margins on rowEls in order to match the left
// and right space that was offset by the scrollbars. A 1-pixel border first, then margin beyond that.
function compensateScroll(rowEls, scrollbarWidths) {
    if (scrollbarWidths.left) {
        rowEls.css({
            'border-left-width': 1,
            'margin-left': scrollbarWidths.left - 1
        });
    }
    if (scrollbarWidths.right) {
        rowEls.css({
            'border-right-width': 1,
            'margin-right': scrollbarWidths.right - 1
        });
    }
}
exports.compensateScroll = compensateScroll;
// Undoes compensateScroll and restores all borders/margins
function uncompensateScroll(rowEls) {
    rowEls.css({
        'margin-left': '',
        'margin-right': '',
        'border-left-width': '',
        'border-right-width': ''
    });
}
exports.uncompensateScroll = uncompensateScroll;
// Make the mouse cursor express that an event is not allowed in the current area
function disableCursor() {
    $('body').addClass('fc-not-allowed');
}
exports.disableCursor = disableCursor;
// Returns the mouse cursor to its original look
function enableCursor() {
    $('body').removeClass('fc-not-allowed');
}
exports.enableCursor = enableCursor;
// Given a total available height to fill, have `els` (essentially child rows) expand to accomodate.
// By default, all elements that are shorter than the recommended height are expanded uniformly, not considering
// any other els that are already too tall. if `shouldRedistribute` is on, it considers these tall rows and
// reduces the available height.
function distributeHeight(els, availableHeight, shouldRedistribute) {
    // *FLOORING NOTE*: we floor in certain places because zoom can give inaccurate floating-point dimensions,
    // and it is better to be shorter than taller, to avoid creating unnecessary scrollbars.
    var minOffset1 = Math.floor(availableHeight / els.length); // for non-last element
    var minOffset2 = Math.floor(availableHeight - minOffset1 * (els.length - 1)); // for last element *FLOORING NOTE*
    var flexEls = []; // elements that are allowed to expand. array of DOM nodes
    var flexOffsets = []; // amount of vertical space it takes up
    var flexHeights = []; // actual css height
    var usedHeight = 0;
    undistributeHeight(els); // give all elements their natural height
    // find elements that are below the recommended height (expandable).
    // important to query for heights in a single first pass (to avoid reflow oscillation).
    els.each(function (i, el) {
        var minOffset = i === els.length - 1 ? minOffset2 : minOffset1;
        var naturalOffset = $(el).outerHeight(true);
        if (naturalOffset < minOffset) {
            flexEls.push(el);
            flexOffsets.push(naturalOffset);
            flexHeights.push($(el).height());
        }
        else {
            // this element stretches past recommended height (non-expandable). mark the space as occupied.
            usedHeight += naturalOffset;
        }
    });
    // readjust the recommended height to only consider the height available to non-maxed-out rows.
    if (shouldRedistribute) {
        availableHeight -= usedHeight;
        minOffset1 = Math.floor(availableHeight / flexEls.length);
        minOffset2 = Math.floor(availableHeight - minOffset1 * (flexEls.length - 1)); // *FLOORING NOTE*
    }
    // assign heights to all expandable elements
    $(flexEls).each(function (i, el) {
        var minOffset = i === flexEls.length - 1 ? minOffset2 : minOffset1;
        var naturalOffset = flexOffsets[i];
        var naturalHeight = flexHeights[i];
        var newHeight = minOffset - (naturalOffset - naturalHeight); // subtract the margin/padding
        if (naturalOffset < minOffset) {
            $(el).height(newHeight);
        }
    });
}
exports.distributeHeight = distributeHeight;
// Undoes distrubuteHeight, restoring all els to their natural height
function undistributeHeight(els) {
    els.height('');
}
exports.undistributeHeight = undistributeHeight;
// Given `els`, a jQuery set of <td> cells, find the cell with the largest natural width and set the widths of all the
// cells to be that width.
// PREREQUISITE: if you want a cell to take up width, it needs to have a single inner element w/ display:inline
function matchCellWidths(els) {
    var maxInnerWidth = 0;
    els.find('> *').each(function (i, innerEl) {
        var innerWidth = $(innerEl).outerWidth();
        if (innerWidth > maxInnerWidth) {
            maxInnerWidth = innerWidth;
        }
    });
    maxInnerWidth++; // sometimes not accurate of width the text needs to stay on one line. insurance
    els.width(maxInnerWidth);
    return maxInnerWidth;
}
exports.matchCellWidths = matchCellWidths;
// Given one element that resides inside another,
// Subtracts the height of the inner element from the outer element.
function subtractInnerElHeight(outerEl, innerEl) {
    var both = outerEl.add(innerEl);
    var diff;
    // effin' IE8/9/10/11 sometimes returns 0 for dimensions. this weird hack was the only thing that worked
    both.css({
        position: 'relative',
        left: -1 // ensure reflow in case the el was already relative. negative is less likely to cause new scroll
    });
    diff = outerEl.outerHeight() - innerEl.outerHeight(); // grab the dimensions
    both.css({ position: '', left: '' }); // undo hack
    return diff;
}
exports.subtractInnerElHeight = subtractInnerElHeight;
/* Element Geom Utilities
----------------------------------------------------------------------------------------------------------------------*/
// borrowed from https://github.com/jquery/jquery-ui/blob/1.11.0/ui/core.js#L51
function getScrollParent(el) {
    var position = el.css('position');
    var scrollParent = el.parents().filter(function () {
        var parent = $(this);
        return (/(auto|scroll)/).test(parent.css('overflow') + parent.css('overflow-y') + parent.css('overflow-x'));
    }).eq(0);
    return position === 'fixed' || !scrollParent.length ? $(el[0].ownerDocument || document) : scrollParent;
}
exports.getScrollParent = getScrollParent;
// Queries the outer bounding area of a jQuery element.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getOuterRect(el, origin) {
    var offset = el.offset();
    var left = offset.left - (origin ? origin.left : 0);
    var top = offset.top - (origin ? origin.top : 0);
    return {
        left: left,
        right: left + el.outerWidth(),
        top: top,
        bottom: top + el.outerHeight()
    };
}
exports.getOuterRect = getOuterRect;
// Queries the area within the margin/border/scrollbars of a jQuery element. Does not go within the padding.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
// WARNING: given element can't have borders
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getClientRect(el, origin) {
    var offset = el.offset();
    var scrollbarWidths = getScrollbarWidths(el);
    var left = offset.left + getCssFloat(el, 'border-left-width') + scrollbarWidths.left - (origin ? origin.left : 0);
    var top = offset.top + getCssFloat(el, 'border-top-width') + scrollbarWidths.top - (origin ? origin.top : 0);
    return {
        left: left,
        right: left + el[0].clientWidth,
        top: top,
        bottom: top + el[0].clientHeight // clientHeight includes padding but NOT scrollbars
    };
}
exports.getClientRect = getClientRect;
// Queries the area within the margin/border/padding of a jQuery element. Assumed not to have scrollbars.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getContentRect(el, origin) {
    var offset = el.offset(); // just outside of border, margin not included
    var left = offset.left + getCssFloat(el, 'border-left-width') + getCssFloat(el, 'padding-left') -
        (origin ? origin.left : 0);
    var top = offset.top + getCssFloat(el, 'border-top-width') + getCssFloat(el, 'padding-top') -
        (origin ? origin.top : 0);
    return {
        left: left,
        right: left + el.width(),
        top: top,
        bottom: top + el.height()
    };
}
exports.getContentRect = getContentRect;
// Returns the computed left/right/top/bottom scrollbar widths for the given jQuery element.
// WARNING: given element can't have borders (which will cause offsetWidth/offsetHeight to be larger).
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getScrollbarWidths(el) {
    var leftRightWidth = el[0].offsetWidth - el[0].clientWidth;
    var bottomWidth = el[0].offsetHeight - el[0].clientHeight;
    var widths;
    leftRightWidth = sanitizeScrollbarWidth(leftRightWidth);
    bottomWidth = sanitizeScrollbarWidth(bottomWidth);
    widths = { left: 0, right: 0, top: 0, bottom: bottomWidth };
    if (getIsLeftRtlScrollbars() && el.css('direction') === 'rtl') {
        widths.left = leftRightWidth;
    }
    else {
        widths.right = leftRightWidth;
    }
    return widths;
}
exports.getScrollbarWidths = getScrollbarWidths;
// The scrollbar width computations in getScrollbarWidths are sometimes flawed when it comes to
// retina displays, rounding, and IE11. Massage them into a usable value.
function sanitizeScrollbarWidth(width) {
    width = Math.max(0, width); // no negatives
    width = Math.round(width);
    return width;
}
// Logic for determining if, when the element is right-to-left, the scrollbar appears on the left side
var _isLeftRtlScrollbars = null;
function getIsLeftRtlScrollbars() {
    if (_isLeftRtlScrollbars === null) {
        _isLeftRtlScrollbars = computeIsLeftRtlScrollbars();
    }
    return _isLeftRtlScrollbars;
}
function computeIsLeftRtlScrollbars() {
    var el = $('<div><div/></div>')
        .css({
        position: 'absolute',
        top: -1000,
        left: 0,
        border: 0,
        padding: 0,
        overflow: 'scroll',
        direction: 'rtl'
    })
        .appendTo('body');
    var innerEl = el.children();
    var res = innerEl.offset().left > el.offset().left; // is the inner div shifted to accommodate a left scrollbar?
    el.remove();
    return res;
}
// Retrieves a jQuery element's computed CSS value as a floating-point number.
// If the queried value is non-numeric (ex: IE can return "medium" for border width), will just return zero.
function getCssFloat(el, prop) {
    return parseFloat(el.css(prop)) || 0;
}
/* Mouse / Touch Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
    return ev.which === 1 && !ev.ctrlKey;
}
exports.isPrimaryMouseButton = isPrimaryMouseButton;
function getEvX(ev) {
    var touches = ev.originalEvent.touches;
    // on mobile FF, pageX for touch events is present, but incorrect,
    // so, look at touch coordinates first.
    if (touches && touches.length) {
        return touches[0].pageX;
    }
    return ev.pageX;
}
exports.getEvX = getEvX;
function getEvY(ev) {
    var touches = ev.originalEvent.touches;
    // on mobile FF, pageX for touch events is present, but incorrect,
    // so, look at touch coordinates first.
    if (touches && touches.length) {
        return touches[0].pageY;
    }
    return ev.pageY;
}
exports.getEvY = getEvY;
function getEvIsTouch(ev) {
    return /^touch/.test(ev.type);
}
exports.getEvIsTouch = getEvIsTouch;
function preventSelection(el) {
    el.addClass('fc-unselectable')
        .on('selectstart', preventDefault);
}
exports.preventSelection = preventSelection;
function allowSelection(el) {
    el.removeClass('fc-unselectable')
        .off('selectstart', preventDefault);
}
exports.allowSelection = allowSelection;
// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev) {
    ev.preventDefault();
}
exports.preventDefault = preventDefault;
/* General Geometry Utils
----------------------------------------------------------------------------------------------------------------------*/
// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1, rect2) {
    var res = {
        left: Math.max(rect1.left, rect2.left),
        right: Math.min(rect1.right, rect2.right),
        top: Math.max(rect1.top, rect2.top),
        bottom: Math.min(rect1.bottom, rect2.bottom)
    };
    if (res.left < res.right && res.top < res.bottom) {
        return res;
    }
    return false;
}
exports.intersectRects = intersectRects;
// Returns a new point that will have been moved to reside within the given rectangle
function constrainPoint(point, rect) {
    return {
        left: Math.min(Math.max(point.left, rect.left), rect.right),
        top: Math.min(Math.max(point.top, rect.top), rect.bottom)
    };
}
exports.constrainPoint = constrainPoint;
// Returns a point that is the center of the given rectangle
function getRectCenter(rect) {
    return {
        left: (rect.left + rect.right) / 2,
        top: (rect.top + rect.bottom) / 2
    };
}
exports.getRectCenter = getRectCenter;
// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1, point2) {
    return {
        left: point1.left - point2.left,
        top: point1.top - point2.top
    };
}
exports.diffPoints = diffPoints;
/* Object Ordering by Field
----------------------------------------------------------------------------------------------------------------------*/
function parseFieldSpecs(input) {
    var specs = [];
    var tokens = [];
    var i;
    var token;
    if (typeof input === 'string') {
        tokens = input.split(/\s*,\s*/);
    }
    else if (typeof input === 'function') {
        tokens = [input];
    }
    else if ($.isArray(input)) {
        tokens = input;
    }
    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        if (typeof token === 'string') {
            specs.push(token.charAt(0) === '-' ?
                { field: token.substring(1), order: -1 } :
                { field: token, order: 1 });
        }
        else if (typeof token === 'function') {
            specs.push({ func: token });
        }
    }
    return specs;
}
exports.parseFieldSpecs = parseFieldSpecs;
function compareByFieldSpecs(obj1, obj2, fieldSpecs, obj1fallback, obj2fallback) {
    var i;
    var cmp;
    for (i = 0; i < fieldSpecs.length; i++) {
        cmp = compareByFieldSpec(obj1, obj2, fieldSpecs[i], obj1fallback, obj2fallback);
        if (cmp) {
            return cmp;
        }
    }
    return 0;
}
exports.compareByFieldSpecs = compareByFieldSpecs;
function compareByFieldSpec(obj1, obj2, fieldSpec, obj1fallback, obj2fallback) {
    if (fieldSpec.func) {
        return fieldSpec.func(obj1, obj2);
    }
    var val1 = obj1[fieldSpec.field];
    var val2 = obj2[fieldSpec.field];
    if (val1 == null && obj1fallback) {
        val1 = obj1fallback[fieldSpec.field];
    }
    if (val2 == null && obj2fallback) {
        val2 = obj2fallback[fieldSpec.field];
    }
    return flexibleCompare(val1, val2) * (fieldSpec.order || 1);
}
exports.compareByFieldSpec = compareByFieldSpec;
function flexibleCompare(a, b) {
    if (!a && !b) {
        return 0;
    }
    if (b == null) {
        return -1;
    }
    if (a == null) {
        return 1;
    }
    if ($.type(a) === 'string' || $.type(b) === 'string') {
        return String(a).localeCompare(String(b));
    }
    return a - b;
}
exports.flexibleCompare = flexibleCompare;
/* Date Utilities
----------------------------------------------------------------------------------------------------------------------*/
exports.dayIDs = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
exports.unitsDesc = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond']; // descending
// Diffs the two moments into a Duration where full-days are recorded first, then the remaining time.
// Moments will have their timezones normalized.
function diffDayTime(a, b) {
    return moment.duration({
        days: a.clone().stripTime().diff(b.clone().stripTime(), 'days'),
        ms: a.time() - b.time() // time-of-day from day start. disregards timezone
    });
}
exports.diffDayTime = diffDayTime;
// Diffs the two moments via their start-of-day (regardless of timezone). Produces whole-day durations.
function diffDay(a, b) {
    return moment.duration({
        days: a.clone().stripTime().diff(b.clone().stripTime(), 'days')
    });
}
exports.diffDay = diffDay;
// Diffs two moments, producing a duration, made of a whole-unit-increment of the given unit. Uses rounding.
function diffByUnit(a, b, unit) {
    return moment.duration(Math.round(a.diff(b, unit, true)), // returnFloat=true
    unit);
}
exports.diffByUnit = diffByUnit;
// Computes the unit name of the largest whole-unit period of time.
// For example, 48 hours will be "days" whereas 49 hours will be "hours".
// Accepts start/end, a range object, or an original duration object.
function computeGreatestUnit(start, end) {
    var i;
    var unit;
    var val;
    for (i = 0; i < exports.unitsDesc.length; i++) {
        unit = exports.unitsDesc[i];
        val = computeRangeAs(unit, start, end);
        if (val >= 1 && isInt(val)) {
            break;
        }
    }
    return unit; // will be "milliseconds" if nothing else matches
}
exports.computeGreatestUnit = computeGreatestUnit;
// like computeGreatestUnit, but has special abilities to interpret the source input for clues
function computeDurationGreatestUnit(duration, durationInput) {
    var unit = computeGreatestUnit(duration);
    // prevent days:7 from being interpreted as a week
    if (unit === 'week' && typeof durationInput === 'object' && durationInput.days) {
        unit = 'day';
    }
    return unit;
}
exports.computeDurationGreatestUnit = computeDurationGreatestUnit;
// Computes the number of units (like "hours") in the given range.
// Range can be a {start,end} object, separate start/end args, or a Duration.
// Results are based on Moment's .as() and .diff() methods, so results can depend on internal handling
// of month-diffing logic (which tends to vary from version to version).
function computeRangeAs(unit, start, end) {
    if (end != null) {
        return end.diff(start, unit, true);
    }
    else if (moment.isDuration(start)) {
        return start.as(unit);
    }
    else {
        return start.end.diff(start.start, unit, true);
    }
}
// Intelligently divides a range (specified by a start/end params) by a duration
function divideRangeByDuration(start, end, dur) {
    var months;
    if (durationHasTime(dur)) {
        return (end - start) / dur;
    }
    months = dur.asMonths();
    if (Math.abs(months) >= 1 && isInt(months)) {
        return end.diff(start, 'months', true) / months;
    }
    return end.diff(start, 'days', true) / dur.asDays();
}
exports.divideRangeByDuration = divideRangeByDuration;
// Intelligently divides one duration by another
function divideDurationByDuration(dur1, dur2) {
    var months1;
    var months2;
    if (durationHasTime(dur1) || durationHasTime(dur2)) {
        return dur1 / dur2;
    }
    months1 = dur1.asMonths();
    months2 = dur2.asMonths();
    if (Math.abs(months1) >= 1 && isInt(months1) &&
        Math.abs(months2) >= 1 && isInt(months2)) {
        return months1 / months2;
    }
    return dur1.asDays() / dur2.asDays();
}
exports.divideDurationByDuration = divideDurationByDuration;
// Intelligently multiplies a duration by a number
function multiplyDuration(dur, n) {
    var months;
    if (durationHasTime(dur)) {
        return moment.duration(dur * n);
    }
    months = dur.asMonths();
    if (Math.abs(months) >= 1 && isInt(months)) {
        return moment.duration({ months: months * n });
    }
    return moment.duration({ days: dur.asDays() * n });
}
exports.multiplyDuration = multiplyDuration;
// Returns a boolean about whether the given duration has any time parts (hours/minutes/seconds/ms)
function durationHasTime(dur) {
    return Boolean(dur.hours() || dur.minutes() || dur.seconds() || dur.milliseconds());
}
exports.durationHasTime = durationHasTime;
function isNativeDate(input) {
    return Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
}
exports.isNativeDate = isNativeDate;
// Returns a boolean about whether the given input is a time string, like "06:40:00" or "06:00"
function isTimeString(str) {
    return typeof str === 'string' &&
        /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(str);
}
exports.isTimeString = isTimeString;
/* Logging and Debug
----------------------------------------------------------------------------------------------------------------------*/
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var console = window.console;
    if (console && console.log) {
        return console.log.apply(console, args);
    }
}
exports.log = log;
function warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var console = window.console;
    if (console && console.warn) {
        return console.warn.apply(console, args);
    }
    else {
        return log.apply(null, args);
    }
}
exports.warn = warn;
/* General Utilities
----------------------------------------------------------------------------------------------------------------------*/
var hasOwnPropMethod = {}.hasOwnProperty;
// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexProps) {
    var dest = {};
    var i;
    var name;
    var complexObjs;
    var j;
    var val;
    var props;
    if (complexProps) {
        for (i = 0; i < complexProps.length; i++) {
            name = complexProps[i];
            complexObjs = [];
            // collect the trailing object values, stopping when a non-object is discovered
            for (j = propObjs.length - 1; j >= 0; j--) {
                val = propObjs[j][name];
                if (typeof val === 'object') {
                    complexObjs.unshift(val);
                }
                else if (val !== undefined) {
                    dest[name] = val; // if there were no objects, this value will be used
                    break;
                }
            }
            // if the trailing values were objects, use the merged value
            if (complexObjs.length) {
                dest[name] = mergeProps(complexObjs);
            }
        }
    }
    // copy values into the destination, going from last to first
    for (i = propObjs.length - 1; i >= 0; i--) {
        props = propObjs[i];
        for (name in props) {
            if (!(name in dest)) {
                dest[name] = props[name];
            }
        }
    }
    return dest;
}
exports.mergeProps = mergeProps;
function copyOwnProps(src, dest) {
    for (var name_1 in src) {
        if (hasOwnProp(src, name_1)) {
            dest[name_1] = src[name_1];
        }
    }
}
exports.copyOwnProps = copyOwnProps;
function hasOwnProp(obj, name) {
    return hasOwnPropMethod.call(obj, name);
}
exports.hasOwnProp = hasOwnProp;
function applyAll(functions, thisObj, args) {
    if ($.isFunction(functions)) {
        functions = [functions];
    }
    if (functions) {
        var i = void 0;
        var ret = void 0;
        for (i = 0; i < functions.length; i++) {
            ret = functions[i].apply(thisObj, args) || ret;
        }
        return ret;
    }
}
exports.applyAll = applyAll;
function removeMatching(array, testFunc) {
    var removeCnt = 0;
    var i = 0;
    while (i < array.length) {
        if (testFunc(array[i])) {
            array.splice(i, 1);
            removeCnt++;
        }
        else {
            i++;
        }
    }
    return removeCnt;
}
exports.removeMatching = removeMatching;
function removeExact(array, exactVal) {
    var removeCnt = 0;
    var i = 0;
    while (i < array.length) {
        if (array[i] === exactVal) {
            array.splice(i, 1);
            removeCnt++;
        }
        else {
            i++;
        }
    }
    return removeCnt;
}
exports.removeExact = removeExact;
function isArraysEqual(a0, a1) {
    var len = a0.length;
    var i;
    if (len == null || len !== a1.length) {
        return false;
    }
    for (i = 0; i < len; i++) {
        if (a0[i] !== a1[i]) {
            return false;
        }
    }
    return true;
}
exports.isArraysEqual = isArraysEqual;
function firstDefined() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
        if (args[i] !== undefined) {
            return args[i];
        }
    }
}
exports.firstDefined = firstDefined;
function htmlEscape(s) {
    return (s + '').replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#039;')
        .replace(/"/g, '&quot;')
        .replace(/\n/g, '<br />');
}
exports.htmlEscape = htmlEscape;
function stripHtmlEntities(text) {
    return text.replace(/&.*?;/g, '');
}
exports.stripHtmlEntities = stripHtmlEntities;
// Given a hash of CSS properties, returns a string of CSS.
// Uses property names as-is (no camel-case conversion). Will not make statements for null/undefined values.
function cssToStr(cssProps) {
    var statements = [];
    $.each(cssProps, function (name, val) {
        if (val != null) {
            statements.push(name + ':' + val);
        }
    });
    return statements.join(';');
}
exports.cssToStr = cssToStr;
// Given an object hash of HTML attribute names to values,
// generates a string that can be injected between < > in HTML
function attrsToStr(attrs) {
    var parts = [];
    $.each(attrs, function (name, val) {
        if (val != null) {
            parts.push(name + '="' + htmlEscape(val) + '"');
        }
    });
    return parts.join(' ');
}
exports.attrsToStr = attrsToStr;
function capitaliseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitaliseFirstLetter = capitaliseFirstLetter;
function compareNumbers(a, b) {
    return a - b;
}
exports.compareNumbers = compareNumbers;
function isInt(n) {
    return n % 1 === 0;
}
exports.isInt = isInt;
// Returns a method bound to the given object context.
// Just like one of the jQuery.proxy signatures, but without the undesired behavior of treating the same method with
// different contexts as identical when binding/unbinding events.
function proxy(obj, methodName) {
    var method = obj[methodName];
    return function () {
        return method.apply(obj, arguments);
    };
}
exports.proxy = proxy;
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// https://github.com/jashkenas/underscore/blob/1.6.0/underscore.js#L714
function debounce(func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout;
    var args;
    var context;
    var timestamp;
    var result;
    var later = function () {
        var last = +new Date() - timestamp;
        if (last < wait) {
            timeout = setTimeout(later, wait - last);
        }
        else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
            }
        }
    };
    return function () {
        context = this;
        args = arguments;
        timestamp = +new Date();
        var callNow = immediate && !timeout;
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }
        return result;
    };
}
exports.debounce = debounce;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(0);
var moment_ext_1 = __webpack_require__(10);
var UnzonedRange = /** @class */ (function () {
    function UnzonedRange(startInput, endInput) {
        // TODO: move these into footprint.
        // Especially, doesn't make sense for null startMs/endMs.
        this.isStart = true;
        this.isEnd = true;
        if (moment.isMoment(startInput)) {
            startInput = startInput.clone().stripZone();
        }
        if (moment.isMoment(endInput)) {
            endInput = endInput.clone().stripZone();
        }
        if (startInput) {
            this.startMs = startInput.valueOf();
        }
        if (endInput) {
            this.endMs = endInput.valueOf();
        }
    }
    /*
    SIDEEFFECT: will mutate eventRanges.
    Will return a new array result.
    Only works for non-open-ended ranges.
    */
    UnzonedRange.invertRanges = function (ranges, constraintRange) {
        var invertedRanges = [];
        var startMs = constraintRange.startMs; // the end of the previous range. the start of the new range
        var i;
        var dateRange;
        // ranges need to be in order. required for our date-walking algorithm
        ranges.sort(compareUnzonedRanges);
        for (i = 0; i < ranges.length; i++) {
            dateRange = ranges[i];
            // add the span of time before the event (if there is any)
            if (dateRange.startMs > startMs) {
                invertedRanges.push(new UnzonedRange(startMs, dateRange.startMs));
            }
            if (dateRange.endMs > startMs) {
                startMs = dateRange.endMs;
            }
        }
        // add the span of time after the last event (if there is any)
        if (startMs < constraintRange.endMs) {
            invertedRanges.push(new UnzonedRange(startMs, constraintRange.endMs));
        }
        return invertedRanges;
    };
    UnzonedRange.prototype.intersect = function (otherRange) {
        var startMs = this.startMs;
        var endMs = this.endMs;
        var newRange = null;
        if (otherRange.startMs != null) {
            if (startMs == null) {
                startMs = otherRange.startMs;
            }
            else {
                startMs = Math.max(startMs, otherRange.startMs);
            }
        }
        if (otherRange.endMs != null) {
            if (endMs == null) {
                endMs = otherRange.endMs;
            }
            else {
                endMs = Math.min(endMs, otherRange.endMs);
            }
        }
        if (startMs == null || endMs == null || startMs < endMs) {
            newRange = new UnzonedRange(startMs, endMs);
            newRange.isStart = this.isStart && startMs === this.startMs;
            newRange.isEnd = this.isEnd && endMs === this.endMs;
        }
        return newRange;
    };
    UnzonedRange.prototype.intersectsWith = function (otherRange) {
        return (this.endMs == null || otherRange.startMs == null || this.endMs > otherRange.startMs) &&
            (this.startMs == null || otherRange.endMs == null || this.startMs < otherRange.endMs);
    };
    UnzonedRange.prototype.containsRange = function (innerRange) {
        return (this.startMs == null || (innerRange.startMs != null && innerRange.startMs >= this.startMs)) &&
            (this.endMs == null || (innerRange.endMs != null && innerRange.endMs <= this.endMs));
    };
    // `date` can be a moment, a Date, or a millisecond time.
    UnzonedRange.prototype.containsDate = function (date) {
        var ms = date.valueOf();
        return (this.startMs == null || ms >= this.startMs) &&
            (this.endMs == null || ms < this.endMs);
    };
    // If the given date is not within the given range, move it inside.
    // (If it's past the end, make it one millisecond before the end).
    // `date` can be a moment, a Date, or a millisecond time.
    // Returns a MS-time.
    UnzonedRange.prototype.constrainDate = function (date) {
        var ms = date.valueOf();
        if (this.startMs != null && ms < this.startMs) {
            ms = this.startMs;
        }
        if (this.endMs != null && ms >= this.endMs) {
            ms = this.endMs - 1;
        }
        return ms;
    };
    UnzonedRange.prototype.equals = function (otherRange) {
        return this.startMs === otherRange.startMs && this.endMs === otherRange.endMs;
    };
    UnzonedRange.prototype.clone = function () {
        var range = new UnzonedRange(this.startMs, this.endMs);
        range.isStart = this.isStart;
        range.isEnd = this.isEnd;
        return range;
    };
    // Returns an ambig-zoned moment from startMs.
    // BEWARE: returned moment is not localized.
    // Formatting and start-of-week will be default.
    UnzonedRange.prototype.getStart = function () {
        if (this.startMs != null) {
            return moment_ext_1.default.utc(this.startMs).stripZone();
        }
        return null;
    };
    // Returns an ambig-zoned moment from startMs.
    // BEWARE: returned moment is not localized.
    // Formatting and start-of-week will be default.
    UnzonedRange.prototype.getEnd = function () {
        if (this.endMs != null) {
            return moment_ext_1.default.utc(this.endMs).stripZone();
        }
        return null;
    };
    UnzonedRange.prototype.as = function (unit) {
        return moment.utc(this.endMs).diff(moment.utc(this.startMs), unit, true);
    };
    return UnzonedRange;
}());
exports.default = UnzonedRange;
/*
Only works for non-open-ended ranges.
*/
function compareUnzonedRanges(range1, range2) {
    return range1.startMs - range2.startMs; // earlier ranges go first
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var ParsableModelMixin_1 = __webpack_require__(208);
var Class_1 = __webpack_require__(33);
var EventDefParser_1 = __webpack_require__(49);
var EventSource = /** @class */ (function (_super) {
    tslib_1.__extends(EventSource, _super);
    // can we do away with calendar? at least for the abstract?
    // useful for buildEventDef
    function EventSource(calendar) {
        var _this = _super.call(this) || this;
        _this.calendar = calendar;
        _this.className = [];
        _this.uid = String(EventSource.uuid++);
        return _this;
    }
    /*
    rawInput can be any data type!
    */
    EventSource.parse = function (rawInput, calendar) {
        var source = new this(calendar);
        if (typeof rawInput === 'object') {
            if (source.applyProps(rawInput)) {
                return source;
            }
        }
        return false;
    };
    EventSource.normalizeId = function (id) {
        if (id) {
            return String(id);
        }
        return null;
    };
    EventSource.prototype.fetch = function (start, end, timezone) {
        // subclasses must implement. must return a promise.
    };
    EventSource.prototype.removeEventDefsById = function (eventDefId) {
        // optional for subclasses to implement
    };
    EventSource.prototype.removeAllEventDefs = function () {
        // optional for subclasses to implement
    };
    /*
    For compairing/matching
    */
    EventSource.prototype.getPrimitive = function (otherSource) {
        // subclasses must implement
    };
    EventSource.prototype.parseEventDefs = function (rawEventDefs) {
        var i;
        var eventDef;
        var eventDefs = [];
        for (i = 0; i < rawEventDefs.length; i++) {
            eventDef = this.parseEventDef(rawEventDefs[i]);
            if (eventDef) {
                eventDefs.push(eventDef);
            }
        }
        return eventDefs;
    };
    EventSource.prototype.parseEventDef = function (rawInput) {
        var calendarTransform = this.calendar.opt('eventDataTransform');
        var sourceTransform = this.eventDataTransform;
        if (calendarTransform) {
            rawInput = calendarTransform(rawInput, this.calendar);
        }
        if (sourceTransform) {
            rawInput = sourceTransform(rawInput, this.calendar);
        }
        return EventDefParser_1.default.parse(rawInput, this);
    };
    EventSource.prototype.applyManualStandardProps = function (rawProps) {
        if (rawProps.id != null) {
            this.id = EventSource.normalizeId(rawProps.id);
        }
        // TODO: converge with EventDef
        if ($.isArray(rawProps.className)) {
            this.className = rawProps.className;
        }
        else if (typeof rawProps.className === 'string') {
            this.className = rawProps.className.split(/\s+/);
        }
        return true;
    };
    EventSource.uuid = 0;
    EventSource.defineStandardProps = ParsableModelMixin_1.default.defineStandardProps;
    EventSource.copyVerbatimStandardProps = ParsableModelMixin_1.default.copyVerbatimStandardProps;
    return EventSource;
}(Class_1.default));
exports.default = EventSource;
ParsableModelMixin_1.default.mixInto(EventSource);
// Parsing
// ---------------------------------------------------------------------------------------------------------------------
EventSource.defineStandardProps({
    // manually process...
    id: false,
    className: false,
    // automatically transfer...
    color: true,
    backgroundColor: true,
    borderColor: true,
    textColor: true,
    editable: true,
    startEditable: true,
    durationEditable: true,
    rendering: true,
    overlap: true,
    constraint: true,
    allDayDefault: true,
    eventDataTransform: true
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
Utility methods for easily listening to events on another object,
and more importantly, easily unlistening from them.

USAGE:
  import { default as ListenerMixin, ListenerInterface } from './ListenerMixin'
in class:
  listenTo: ListenerInterface['listenTo']
  stopListeningTo: ListenerInterface['stopListeningTo']
after class:
  ListenerMixin.mixInto(TheClass)
*/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var Mixin_1 = __webpack_require__(14);
var guid = 0;
var ListenerMixin = /** @class */ (function (_super) {
    tslib_1.__extends(ListenerMixin, _super);
    function ListenerMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
    Given an `other` object that has on/off methods, bind the given `callback` to an event by the given name.
    The `callback` will be called with the `this` context of the object that .listenTo is being called on.
    Can be called:
      .listenTo(other, eventName, callback)
    OR
      .listenTo(other, {
        eventName1: callback1,
        eventName2: callback2
      })
    */
    ListenerMixin.prototype.listenTo = function (other, arg, callback) {
        if (typeof arg === 'object') {
            for (var eventName in arg) {
                if (arg.hasOwnProperty(eventName)) {
                    this.listenTo(other, eventName, arg[eventName]);
                }
            }
        }
        else if (typeof arg === 'string') {
            other.on(arg + '.' + this.getListenerNamespace(), // use event namespacing to identify this object
            $.proxy(callback, this) // always use `this` context
            // the usually-undesired jQuery guid behavior doesn't matter,
            // because we always unbind via namespace
            );
        }
    };
    /*
    Causes the current object to stop listening to events on the `other` object.
    `eventName` is optional. If omitted, will stop listening to ALL events on `other`.
    */
    ListenerMixin.prototype.stopListeningTo = function (other, eventName) {
        other.off((eventName || '') + '.' + this.getListenerNamespace());
    };
    /*
    Returns a string, unique to this object, to be used for event namespacing
    */
    ListenerMixin.prototype.getListenerNamespace = function () {
        if (this.listenerId == null) {
            this.listenerId = guid++;
        }
        return '_listener' + this.listenerId;
    };
    return ListenerMixin;
}(Mixin_1.default));
exports.default = ListenerMixin;


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(0);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var ambigDateOfMonthRegex = /^\s*\d{4}-\d\d$/;
var ambigTimeOrZoneRegex = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/;
var newMomentProto = moment.fn; // where we will attach our new methods
exports.newMomentProto = newMomentProto;
var oldMomentProto = $.extend({}, newMomentProto); // copy of original moment methods
exports.oldMomentProto = oldMomentProto;
// tell momentjs to transfer these properties upon clone
var momentProperties = moment.momentProperties;
momentProperties.push('_fullCalendar');
momentProperties.push('_ambigTime');
momentProperties.push('_ambigZone');
/*
Call this if you want Moment's original format method to be used
*/
function oldMomentFormat(mom, formatStr) {
    return oldMomentProto.format.call(mom, formatStr); // oldMomentProto defined in moment-ext.js
}
exports.oldMomentFormat = oldMomentFormat;
// Creating
// -------------------------------------------------------------------------------------------------
// Creates a new moment, similar to the vanilla moment(...) constructor, but with
// extra features (ambiguous time, enhanced formatting). When given an existing moment,
// it will function as a clone (and retain the zone of the moment). Anything else will
// result in a moment in the local zone.
var momentExt = function () {
    return makeMoment(arguments);
};
exports.default = momentExt;
// Sames as momentExt, but forces the resulting moment to be in the UTC timezone.
momentExt.utc = function () {
    var mom = makeMoment(arguments, true);
    // Force it into UTC because makeMoment doesn't guarantee it
    // (if given a pre-existing moment for example)
    if (mom.hasTime()) {
        mom.utc();
    }
    return mom;
};
// Same as momentExt, but when given an ISO8601 string, the timezone offset is preserved.
// ISO8601 strings with no timezone offset will become ambiguously zoned.
momentExt.parseZone = function () {
    return makeMoment(arguments, true, true);
};
// Builds an enhanced moment from args. When given an existing moment, it clones. When given a
// native Date, or called with no arguments (the current time), the resulting moment will be local.
// Anything else needs to be "parsed" (a string or an array), and will be affected by:
//    parseAsUTC - if there is no zone information, should we parse the input in UTC?
//    parseZone - if there is zone information, should we force the zone of the moment?
function makeMoment(args, parseAsUTC, parseZone) {
    if (parseAsUTC === void 0) { parseAsUTC = false; }
    if (parseZone === void 0) { parseZone = false; }
    var input = args[0];
    var isSingleString = args.length === 1 && typeof input === 'string';
    var isAmbigTime;
    var isAmbigZone;
    var ambigMatch;
    var mom;
    if (moment.isMoment(input) || util_1.isNativeDate(input) || input === undefined) {
        mom = moment.apply(null, args);
    }
    else {
        isAmbigTime = false;
        isAmbigZone = false;
        if (isSingleString) {
            if (ambigDateOfMonthRegex.test(input)) {
                // accept strings like '2014-05', but convert to the first of the month
                input += '-01';
                args = [input]; // for when we pass it on to moment's constructor
                isAmbigTime = true;
                isAmbigZone = true;
            }
            else if ((ambigMatch = ambigTimeOrZoneRegex.exec(input))) {
                isAmbigTime = !ambigMatch[5]; // no time part?
                isAmbigZone = true;
            }
        }
        else if ($.isArray(input)) {
            // arrays have no timezone information, so assume ambiguous zone
            isAmbigZone = true;
        }
        // otherwise, probably a string with a format
        if (parseAsUTC || isAmbigTime) {
            mom = moment.utc.apply(moment, args);
        }
        else {
            mom = moment.apply(null, args);
        }
        if (isAmbigTime) {
            mom._ambigTime = true;
            mom._ambigZone = true; // ambiguous time always means ambiguous zone
        }
        else if (parseZone) {
            if (isAmbigZone) {
                mom._ambigZone = true;
            }
            else if (isSingleString) {
                mom.utcOffset(input); // if not a valid zone, will assign UTC
            }
        }
    }
    mom._fullCalendar = true; // flag for extended functionality
    return mom;
}
// Week Number
// -------------------------------------------------------------------------------------------------
// Returns the week number, considering the locale's custom week number calcuation
// `weeks` is an alias for `week`
newMomentProto.week = newMomentProto.weeks = function (input) {
    var weekCalc = this._locale._fullCalendar_weekCalc;
    if (input == null && typeof weekCalc === 'function') {
        return weekCalc(this);
    }
    else if (weekCalc === 'ISO') {
        return oldMomentProto.isoWeek.apply(this, arguments); // ISO getter/setter
    }
    return oldMomentProto.week.apply(this, arguments); // local getter/setter
};
// Time-of-day
// -------------------------------------------------------------------------------------------------
// GETTER
// Returns a Duration with the hours/minutes/seconds/ms values of the moment.
// If the moment has an ambiguous time, a duration of 00:00 will be returned.
//
// SETTER
// You can supply a Duration, a Moment, or a Duration-like argument.
// When setting the time, and the moment has an ambiguous time, it then becomes unambiguous.
newMomentProto.time = function (time) {
    // Fallback to the original method (if there is one) if this moment wasn't created via FullCalendar.
    // `time` is a generic enough method name where this precaution is necessary to avoid collisions w/ other plugins.
    if (!this._fullCalendar) {
        return oldMomentProto.time.apply(this, arguments);
    }
    if (time == null) {
        return moment.duration({
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        });
    }
    else {
        this._ambigTime = false; // mark that the moment now has a time
        if (!moment.isDuration(time) && !moment.isMoment(time)) {
            time = moment.duration(time);
        }
        // The day value should cause overflow (so 24 hours becomes 00:00:00 of next day).
        // Only for Duration times, not Moment times.
        var dayHours = 0;
        if (moment.isDuration(time)) {
            dayHours = Math.floor(time.asDays()) * 24;
        }
        // We need to set the individual fields.
        // Can't use startOf('day') then add duration. In case of DST at start of day.
        return this.hours(dayHours + time.hours())
            .minutes(time.minutes())
            .seconds(time.seconds())
            .milliseconds(time.milliseconds());
    }
};
// Converts the moment to UTC, stripping out its time-of-day and timezone offset,
// but preserving its YMD. A moment with a stripped time will display no time
// nor timezone offset when .format() is called.
newMomentProto.stripTime = function () {
    if (!this._ambigTime) {
        this.utc(true); // keepLocalTime=true (for keeping *date* value)
        // set time to zero
        this.set({
            hours: 0,
            minutes: 0,
            seconds: 0,
            ms: 0
        });
        // Mark the time as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
        // which clears all ambig flags.
        this._ambigTime = true;
        this._ambigZone = true; // if ambiguous time, also ambiguous timezone offset
    }
    return this; // for chaining
};
// Returns if the moment has a non-ambiguous time (boolean)
newMomentProto.hasTime = function () {
    return !this._ambigTime;
};
// Timezone
// -------------------------------------------------------------------------------------------------
// Converts the moment to UTC, stripping out its timezone offset, but preserving its
// YMD and time-of-day. A moment with a stripped timezone offset will display no
// timezone offset when .format() is called.
newMomentProto.stripZone = function () {
    var wasAmbigTime;
    if (!this._ambigZone) {
        wasAmbigTime = this._ambigTime;
        this.utc(true); // keepLocalTime=true (for keeping date and time values)
        // the above call to .utc()/.utcOffset() unfortunately might clear the ambig flags, so restore
        this._ambigTime = wasAmbigTime || false;
        // Mark the zone as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
        // which clears the ambig flags.
        this._ambigZone = true;
    }
    return this; // for chaining
};
// Returns of the moment has a non-ambiguous timezone offset (boolean)
newMomentProto.hasZone = function () {
    return !this._ambigZone;
};
// implicitly marks a zone
newMomentProto.local = function (keepLocalTime) {
    // for when converting from ambiguously-zoned to local,
    // keep the time values when converting from UTC -> local
    oldMomentProto.local.call(this, this._ambigZone || keepLocalTime);
    // ensure non-ambiguous
    // this probably already happened via local() -> utcOffset(), but don't rely on Moment's internals
    this._ambigTime = false;
    this._ambigZone = false;
    return this; // for chaining
};
// implicitly marks a zone
newMomentProto.utc = function (keepLocalTime) {
    oldMomentProto.utc.call(this, keepLocalTime);
    // ensure non-ambiguous
    // this probably already happened via utc() -> utcOffset(), but don't rely on Moment's internals
    this._ambigTime = false;
    this._ambigZone = false;
    return this;
};
// implicitly marks a zone (will probably get called upon .utc() and .local())
newMomentProto.utcOffset = function (tzo) {
    if (tzo != null) {
        // these assignments needs to happen before the original zone method is called.
        // I forget why, something to do with a browser crash.
        this._ambigTime = false;
        this._ambigZone = false;
    }
    return oldMomentProto.utcOffset.apply(this, arguments);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
USAGE:
  import { default as EmitterMixin, EmitterInterface } from './EmitterMixin'
in class:
  on: EmitterInterface['on']
  one: EmitterInterface['one']
  off: EmitterInterface['off']
  trigger: EmitterInterface['trigger']
  triggerWith: EmitterInterface['triggerWith']
  hasHandlers: EmitterInterface['hasHandlers']
after class:
  EmitterMixin.mixInto(TheClass)
*/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var Mixin_1 = __webpack_require__(14);
var EmitterMixin = /** @class */ (function (_super) {
    tslib_1.__extends(EmitterMixin, _super);
    function EmitterMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // jQuery-ification via $(this) allows a non-DOM object to have
    // the same event handling capabilities (including namespaces).
    EmitterMixin.prototype.on = function (types, handler) {
        $(this).on(types, this._prepareIntercept(handler));
        return this; // for chaining
    };
    EmitterMixin.prototype.one = function (types, handler) {
        $(this).one(types, this._prepareIntercept(handler));
        return this; // for chaining
    };
    EmitterMixin.prototype._prepareIntercept = function (handler) {
        // handlers are always called with an "event" object as their first param.
        // sneak the `this` context and arguments into the extra parameter object
        // and forward them on to the original handler.
        var intercept = function (ev, extra) {
            return handler.apply(extra.context || this, extra.args || []);
        };
        // mimick jQuery's internal "proxy" system (risky, I know)
        // causing all functions with the same .guid to appear to be the same.
        // https://github.com/jquery/jquery/blob/2.2.4/src/core.js#L448
        // this is needed for calling .off with the original non-intercept handler.
        if (!handler.guid) {
            handler.guid = $.guid++;
        }
        intercept.guid = handler.guid;
        return intercept;
    };
    EmitterMixin.prototype.off = function (types, handler) {
        $(this).off(types, handler);
        return this; // for chaining
    };
    EmitterMixin.prototype.trigger = function (types) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // pass in "extra" info to the intercept
        $(this).triggerHandler(types, { args: args });
        return this; // for chaining
    };
    EmitterMixin.prototype.triggerWith = function (types, context, args) {
        // `triggerHandler` is less reliant on the DOM compared to `trigger`.
        // pass in "extra" info to the intercept.
        $(this).triggerHandler(types, { context: context, args: args });
        return this; // for chaining
    };
    EmitterMixin.prototype.hasHandlers = function (type) {
        var hash = $._data(this, 'events'); // http://blog.jquery.com/2012/08/09/jquery-1-8-released/
        return hash && hash[type] && hash[type].length > 0;
    };
    return EmitterMixin;
}(Mixin_1.default));
exports.default = EmitterMixin;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/*
Meant to be immutable
*/
var ComponentFootprint = /** @class */ (function () {
    function ComponentFootprint(unzonedRange, isAllDay) {
        this.isAllDay = false; // component can choose to ignore this
        this.unzonedRange = unzonedRange;
        this.isAllDay = isAllDay;
    }
    /*
    Only works for non-open-ended ranges.
    */
    ComponentFootprint.prototype.toLegacy = function (calendar) {
        return {
            start: calendar.msToMoment(this.unzonedRange.startMs, this.isAllDay),
            end: calendar.msToMoment(this.unzonedRange.endMs, this.isAllDay)
        };
    };
    return ComponentFootprint;
}());
exports.default = ComponentFootprint;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var EventDef_1 = __webpack_require__(34);
var EventInstance_1 = __webpack_require__(209);
var EventDateProfile_1 = __webpack_require__(17);
var SingleEventDef = /** @class */ (function (_super) {
    tslib_1.__extends(SingleEventDef, _super);
    function SingleEventDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
    Will receive start/end params, but will be ignored.
    */
    SingleEventDef.prototype.buildInstances = function () {
        return [this.buildInstance()];
    };
    SingleEventDef.prototype.buildInstance = function () {
        return new EventInstance_1.default(this, // definition
        this.dateProfile);
    };
    SingleEventDef.prototype.isAllDay = function () {
        return this.dateProfile.isAllDay();
    };
    SingleEventDef.prototype.clone = function () {
        var def = _super.prototype.clone.call(this);
        def.dateProfile = this.dateProfile;
        return def;
    };
    SingleEventDef.prototype.rezone = function () {
        var calendar = this.source.calendar;
        var dateProfile = this.dateProfile;
        this.dateProfile = new EventDateProfile_1.default(calendar.moment(dateProfile.start), dateProfile.end ? calendar.moment(dateProfile.end) : null, calendar);
    };
    /*
    NOTE: if super-method fails, should still attempt to apply
    */
    SingleEventDef.prototype.applyManualStandardProps = function (rawProps) {
        var superSuccess = _super.prototype.applyManualStandardProps.call(this, rawProps);
        var dateProfile = EventDateProfile_1.default.parse(rawProps, this.source); // returns null on failure
        if (dateProfile) {
            this.dateProfile = dateProfile;
            // make sure `date` shows up in the legacy event objects as-is
            if (rawProps.date != null) {
                this.miscProps.date = rawProps.date;
            }
            return superSuccess;
        }
        else {
            return false;
        }
    };
    return SingleEventDef;
}(EventDef_1.default));
exports.default = SingleEventDef;
// Parsing
// ---------------------------------------------------------------------------------------------------------------------
SingleEventDef.defineStandardProps({
    start: false,
    date: false,
    end: false,
    allDay: false
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var Mixin = /** @class */ (function () {
    function Mixin() {
    }
    Mixin.mixInto = function (destClass) {
        var _this = this;
        Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
            if (!destClass.prototype[name]) {
                destClass.prototype[name] = _this.prototype[name];
            }
        });
    };
    /*
    will override existing methods
    TODO: remove! not used anymore
    */
    Mixin.mixOver = function (destClass) {
        var _this = this;
        Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
            destClass.prototype[name] = _this.prototype[name];
        });
    };
    return Mixin;
}());
exports.default = Mixin;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var Interaction = /** @class */ (function () {
    function Interaction(component) {
        this.view = component._getView();
        this.component = component;
    }
    Interaction.prototype.opt = function (name) {
        return this.view.opt(name);
    };
    Interaction.prototype.end = function () {
        // subclasses can implement
    };
    return Interaction;
}());
exports.default = Interaction;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.version = '3.9.0';
// When introducing internal API incompatibilities (where fullcalendar plugins would break),
// the minor version of the calendar should be upped (ex: 2.7.2 -> 2.8.0)
// and the below integer should be incremented.
exports.internalApiVersion = 12;
var util_1 = __webpack_require__(4);
exports.applyAll = util_1.applyAll;
exports.debounce = util_1.debounce;
exports.isInt = util_1.isInt;
exports.htmlEscape = util_1.htmlEscape;
exports.cssToStr = util_1.cssToStr;
exports.proxy = util_1.proxy;
exports.capitaliseFirstLetter = util_1.capitaliseFirstLetter;
exports.getOuterRect = util_1.getOuterRect;
exports.getClientRect = util_1.getClientRect;
exports.getContentRect = util_1.getContentRect;
exports.getScrollbarWidths = util_1.getScrollbarWidths;
exports.preventDefault = util_1.preventDefault;
exports.parseFieldSpecs = util_1.parseFieldSpecs;
exports.compareByFieldSpecs = util_1.compareByFieldSpecs;
exports.compareByFieldSpec = util_1.compareByFieldSpec;
exports.flexibleCompare = util_1.flexibleCompare;
exports.computeGreatestUnit = util_1.computeGreatestUnit;
exports.divideRangeByDuration = util_1.divideRangeByDuration;
exports.divideDurationByDuration = util_1.divideDurationByDuration;
exports.multiplyDuration = util_1.multiplyDuration;
exports.durationHasTime = util_1.durationHasTime;
exports.log = util_1.log;
exports.warn = util_1.warn;
exports.removeExact = util_1.removeExact;
exports.intersectRects = util_1.intersectRects;
var date_formatting_1 = __webpack_require__(47);
exports.formatDate = date_formatting_1.formatDate;
exports.formatRange = date_formatting_1.formatRange;
exports.queryMostGranularFormatUnit = date_formatting_1.queryMostGranularFormatUnit;
var locale_1 = __webpack_require__(31);
exports.datepickerLocale = locale_1.datepickerLocale;
exports.locale = locale_1.locale;
var moment_ext_1 = __webpack_require__(10);
exports.moment = moment_ext_1.default;
var EmitterMixin_1 = __webpack_require__(11);
exports.EmitterMixin = EmitterMixin_1.default;
var ListenerMixin_1 = __webpack_require__(7);
exports.ListenerMixin = ListenerMixin_1.default;
var Model_1 = __webpack_require__(48);
exports.Model = Model_1.default;
var Constraints_1 = __webpack_require__(207);
exports.Constraints = Constraints_1.default;
var UnzonedRange_1 = __webpack_require__(5);
exports.UnzonedRange = UnzonedRange_1.default;
var ComponentFootprint_1 = __webpack_require__(12);
exports.ComponentFootprint = ComponentFootprint_1.default;
var BusinessHourGenerator_1 = __webpack_require__(212);
exports.BusinessHourGenerator = BusinessHourGenerator_1.default;
var EventDef_1 = __webpack_require__(34);
exports.EventDef = EventDef_1.default;
var EventDefMutation_1 = __webpack_require__(37);
exports.EventDefMutation = EventDefMutation_1.default;
var EventSourceParser_1 = __webpack_require__(38);
exports.EventSourceParser = EventSourceParser_1.default;
var EventSource_1 = __webpack_require__(6);
exports.EventSource = EventSource_1.default;
var ThemeRegistry_1 = __webpack_require__(51);
exports.defineThemeSystem = ThemeRegistry_1.defineThemeSystem;
var EventInstanceGroup_1 = __webpack_require__(18);
exports.EventInstanceGroup = EventInstanceGroup_1.default;
var ArrayEventSource_1 = __webpack_require__(52);
exports.ArrayEventSource = ArrayEventSource_1.default;
var FuncEventSource_1 = __webpack_require__(215);
exports.FuncEventSource = FuncEventSource_1.default;
var JsonFeedEventSource_1 = __webpack_require__(216);
exports.JsonFeedEventSource = JsonFeedEventSource_1.default;
var EventFootprint_1 = __webpack_require__(36);
exports.EventFootprint = EventFootprint_1.default;
var Class_1 = __webpack_require__(33);
exports.Class = Class_1.default;
var Mixin_1 = __webpack_require__(14);
exports.Mixin = Mixin_1.default;
var CoordCache_1 = __webpack_require__(53);
exports.CoordCache = CoordCache_1.default;
var DragListener_1 = __webpack_require__(54);
exports.DragListener = DragListener_1.default;
var Promise_1 = __webpack_require__(20);
exports.Promise = Promise_1.default;
var TaskQueue_1 = __webpack_require__(217);
exports.TaskQueue = TaskQueue_1.default;
var RenderQueue_1 = __webpack_require__(218);
exports.RenderQueue = RenderQueue_1.default;
var Scroller_1 = __webpack_require__(39);
exports.Scroller = Scroller_1.default;
var Theme_1 = __webpack_require__(19);
exports.Theme = Theme_1.default;
var DateComponent_1 = __webpack_require__(219);
exports.DateComponent = DateComponent_1.default;
var InteractiveDateComponent_1 = __webpack_require__(40);
exports.InteractiveDateComponent = InteractiveDateComponent_1.default;
var Calendar_1 = __webpack_require__(220);
exports.Calendar = Calendar_1.default;
var View_1 = __webpack_require__(41);
exports.View = View_1.default;
var ViewRegistry_1 = __webpack_require__(22);
exports.defineView = ViewRegistry_1.defineView;
exports.getViewConfig = ViewRegistry_1.getViewConfig;
var DayTableMixin_1 = __webpack_require__(55);
exports.DayTableMixin = DayTableMixin_1.default;
var BusinessHourRenderer_1 = __webpack_require__(56);
exports.BusinessHourRenderer = BusinessHourRenderer_1.default;
var EventRenderer_1 = __webpack_require__(42);
exports.EventRenderer = EventRenderer_1.default;
var FillRenderer_1 = __webpack_require__(57);
exports.FillRenderer = FillRenderer_1.default;
var HelperRenderer_1 = __webpack_require__(58);
exports.HelperRenderer = HelperRenderer_1.default;
var ExternalDropping_1 = __webpack_require__(222);
exports.ExternalDropping = ExternalDropping_1.default;
var EventResizing_1 = __webpack_require__(223);
exports.EventResizing = EventResizing_1.default;
var EventPointing_1 = __webpack_require__(59);
exports.EventPointing = EventPointing_1.default;
var EventDragging_1 = __webpack_require__(224);
exports.EventDragging = EventDragging_1.default;
var DateSelecting_1 = __webpack_require__(225);
exports.DateSelecting = DateSelecting_1.default;
var StandardInteractionsMixin_1 = __webpack_require__(60);
exports.StandardInteractionsMixin = StandardInteractionsMixin_1.default;
var AgendaView_1 = __webpack_require__(226);
exports.AgendaView = AgendaView_1.default;
var TimeGrid_1 = __webpack_require__(227);
exports.TimeGrid = TimeGrid_1.default;
var DayGrid_1 = __webpack_require__(61);
exports.DayGrid = DayGrid_1.default;
var BasicView_1 = __webpack_require__(62);
exports.BasicView = BasicView_1.default;
var MonthView_1 = __webpack_require__(229);
exports.MonthView = MonthView_1.default;
var ListView_1 = __webpack_require__(230);
exports.ListView = ListView_1.default;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var UnzonedRange_1 = __webpack_require__(5);
/*
Meant to be immutable
*/
var EventDateProfile = /** @class */ (function () {
    function EventDateProfile(start, end, calendar) {
        this.start = start;
        this.end = end || null;
        this.unzonedRange = this.buildUnzonedRange(calendar);
    }
    /*
    Needs an EventSource object
    */
    EventDateProfile.parse = function (rawProps, source) {
        var startInput = rawProps.start || rawProps.date;
        var endInput = rawProps.end;
        if (!startInput) {
            return false;
        }
        var calendar = source.calendar;
        var start = calendar.moment(startInput);
        var end = endInput ? calendar.moment(endInput) : null;
        var forcedAllDay = rawProps.allDay;
        var forceEventDuration = calendar.opt('forceEventDuration');
        if (!start.isValid()) {
            return false;
        }
        if (end && (!end.isValid() || !end.isAfter(start))) {
            end = null;
        }
        if (forcedAllDay == null) {
            forcedAllDay = source.allDayDefault;
            if (forcedAllDay == null) {
                forcedAllDay = calendar.opt('allDayDefault');
            }
        }
        if (forcedAllDay === true) {
            start.stripTime();
            if (end) {
                end.stripTime();
            }
        }
        else if (forcedAllDay === false) {
            if (!start.hasTime()) {
                start.time(0);
            }
            if (end && !end.hasTime()) {
                end.time(0);
            }
        }
        if (!end && forceEventDuration) {
            end = calendar.getDefaultEventEnd(!start.hasTime(), start);
        }
        return new EventDateProfile(start, end, calendar);
    };
    EventDateProfile.isStandardProp = function (propName) {
        return propName === 'start' || propName === 'date' || propName === 'end' || propName === 'allDay';
    };
    EventDateProfile.prototype.isAllDay = function () {
        return !(this.start.hasTime() || (this.end && this.end.hasTime()));
    };
    /*
    Needs a Calendar object
    */
    EventDateProfile.prototype.buildUnzonedRange = function (calendar) {
        var startMs = this.start.clone().stripZone().valueOf();
        var endMs = this.getEnd(calendar).stripZone().valueOf();
        return new UnzonedRange_1.default(startMs, endMs);
    };
    /*
    Needs a Calendar object
    */
    EventDateProfile.prototype.getEnd = function (calendar) {
        return this.end ?
            this.end.clone() :
            // derive the end from the start and allDay. compute allDay if necessary
            calendar.getDefaultEventEnd(this.isAllDay(), this.start);
    };
    return EventDateProfile;
}());
exports.default = EventDateProfile;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var UnzonedRange_1 = __webpack_require__(5);
var util_1 = __webpack_require__(35);
var EventRange_1 = __webpack_require__(211);
/*
It's expected that there will be at least one EventInstance,
OR that an explicitEventDef is assigned.
*/
var EventInstanceGroup = /** @class */ (function () {
    function EventInstanceGroup(eventInstances) {
        this.eventInstances = eventInstances || [];
    }
    EventInstanceGroup.prototype.getAllEventRanges = function (constraintRange) {
        if (constraintRange) {
            return this.sliceNormalRenderRanges(constraintRange);
        }
        else {
            return this.eventInstances.map(util_1.eventInstanceToEventRange);
        }
    };
    EventInstanceGroup.prototype.sliceRenderRanges = function (constraintRange) {
        if (this.isInverse()) {
            return this.sliceInverseRenderRanges(constraintRange);
        }
        else {
            return this.sliceNormalRenderRanges(constraintRange);
        }
    };
    EventInstanceGroup.prototype.sliceNormalRenderRanges = function (constraintRange) {
        var eventInstances = this.eventInstances;
        var i;
        var eventInstance;
        var slicedRange;
        var slicedEventRanges = [];
        for (i = 0; i < eventInstances.length; i++) {
            eventInstance = eventInstances[i];
            slicedRange = eventInstance.dateProfile.unzonedRange.intersect(constraintRange);
            if (slicedRange) {
                slicedEventRanges.push(new EventRange_1.default(slicedRange, eventInstance.def, eventInstance));
            }
        }
        return slicedEventRanges;
    };
    EventInstanceGroup.prototype.sliceInverseRenderRanges = function (constraintRange) {
        var unzonedRanges = this.eventInstances.map(util_1.eventInstanceToUnzonedRange);
        var ownerDef = this.getEventDef();
        unzonedRanges = UnzonedRange_1.default.invertRanges(unzonedRanges, constraintRange);
        return unzonedRanges.map(function (unzonedRange) {
            return new EventRange_1.default(unzonedRange, ownerDef); // don't give an EventInstance
        });
    };
    EventInstanceGroup.prototype.isInverse = function () {
        return this.getEventDef().hasInverseRendering();
    };
    EventInstanceGroup.prototype.getEventDef = function () {
        return this.explicitEventDef || this.eventInstances[0].def;
    };
    return EventInstanceGroup;
}());
exports.default = EventInstanceGroup;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var Theme = /** @class */ (function () {
    function Theme(optionsManager) {
        this.optionsManager = optionsManager;
        this.processIconOverride();
    }
    Theme.prototype.processIconOverride = function () {
        if (this.iconOverrideOption) {
            this.setIconOverride(this.optionsManager.get(this.iconOverrideOption));
        }
    };
    Theme.prototype.setIconOverride = function (iconOverrideHash) {
        var iconClassesCopy;
        var buttonName;
        if ($.isPlainObject(iconOverrideHash)) {
            iconClassesCopy = $.extend({}, this.iconClasses);
            for (buttonName in iconOverrideHash) {
                iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
            }
            this.iconClasses = iconClassesCopy;
        }
        else if (iconOverrideHash === false) {
            this.iconClasses = {};
        }
    };
    Theme.prototype.applyIconOverridePrefix = function (className) {
        var prefix = this.iconOverridePrefix;
        if (prefix && className.indexOf(prefix) !== 0) {
            className = prefix + className;
        }
        return className;
    };
    Theme.prototype.getClass = function (key) {
        return this.classes[key] || '';
    };
    Theme.prototype.getIconClass = function (buttonName) {
        var className = this.iconClasses[buttonName];
        if (className) {
            return this.baseIconClass + ' ' + className;
        }
        return '';
    };
    Theme.prototype.getCustomButtonIconClass = function (customButtonProps) {
        var className;
        if (this.iconOverrideCustomButtonOption) {
            className = customButtonProps[this.iconOverrideCustomButtonOption];
            if (className) {
                return this.baseIconClass + ' ' + this.applyIconOverridePrefix(className);
            }
        }
        return '';
    };
    return Theme;
}());
exports.default = Theme;
Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = '';
Theme.prototype.iconOverridePrefix = '';


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var PromiseStub = {
    construct: function (executor) {
        var deferred = $.Deferred();
        var promise = deferred.promise();
        if (typeof executor === 'function') {
            executor(function (val) {
                deferred.resolve(val);
                attachImmediatelyResolvingThen(promise, val);
            }, function () {
                deferred.reject();
                attachImmediatelyRejectingThen(promise);
            });
        }
        return promise;
    },
    resolve: function (val) {
        var deferred = $.Deferred().resolve(val);
        var promise = deferred.promise();
        attachImmediatelyResolvingThen(promise, val);
        return promise;
    },
    reject: function () {
        var deferred = $.Deferred().reject();
        var promise = deferred.promise();
        attachImmediatelyRejectingThen(promise);
        return promise;
    }
};
exports.default = PromiseStub;
function attachImmediatelyResolvingThen(promise, val) {
    promise.then = function (onResolve) {
        if (typeof onResolve === 'function') {
            return PromiseStub.resolve(onResolve(val));
        }
        return promise;
    };
}
function attachImmediatelyRejectingThen(promise) {
    promise.then = function (onResolve, onReject) {
        if (typeof onReject === 'function') {
            onReject();
        }
        return promise;
    };
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var exportHooks = __webpack_require__(16);
var EmitterMixin_1 = __webpack_require__(11);
var ListenerMixin_1 = __webpack_require__(7);
exportHooks.touchMouseIgnoreWait = 500;
var globalEmitter = null;
var neededCount = 0;
/*
Listens to document and window-level user-interaction events, like touch events and mouse events,
and fires these events as-is to whoever is observing a GlobalEmitter.
Best when used as a singleton via GlobalEmitter.get()

Normalizes mouse/touch events. For examples:
- ignores the the simulated mouse events that happen after a quick tap: mousemove+mousedown+mouseup+click
- compensates for various buggy scenarios where a touchend does not fire
*/
var GlobalEmitter = /** @class */ (function () {
    function GlobalEmitter() {
        this.isTouching = false;
        this.mouseIgnoreDepth = 0;
    }
    // gets the singleton
    GlobalEmitter.get = function () {
        if (!globalEmitter) {
            globalEmitter = new GlobalEmitter();
            globalEmitter.bind();
        }
        return globalEmitter;
    };
    // called when an object knows it will need a GlobalEmitter in the near future.
    GlobalEmitter.needed = function () {
        GlobalEmitter.get(); // ensures globalEmitter
        neededCount++;
    };
    // called when the object that originally called needed() doesn't need a GlobalEmitter anymore.
    GlobalEmitter.unneeded = function () {
        neededCount--;
        if (!neededCount) {
            globalEmitter.unbind();
            globalEmitter = null;
        }
    };
    GlobalEmitter.prototype.bind = function () {
        var _this = this;
        this.listenTo($(document), {
            touchstart: this.handleTouchStart,
            touchcancel: this.handleTouchCancel,
            touchend: this.handleTouchEnd,
            mousedown: this.handleMouseDown,
            mousemove: this.handleMouseMove,
            mouseup: this.handleMouseUp,
            click: this.handleClick,
            selectstart: this.handleSelectStart,
            contextmenu: this.handleContextMenu
        });
        // because we need to call preventDefault
        // because https://www.chromestatus.com/features/5093566007214080
        // TODO: investigate performance because this is a global handler
        window.addEventListener('touchmove', this.handleTouchMoveProxy = function (ev) {
            _this.handleTouchMove($.Event(ev));
        }, { passive: false } // allows preventDefault()
        );
        // attach a handler to get called when ANY scroll action happens on the page.
        // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
        // http://stackoverflow.com/a/32954565/96342
        window.addEventListener('scroll', this.handleScrollProxy = function (ev) {
            _this.handleScroll($.Event(ev));
        }, true // useCapture
        );
    };
    GlobalEmitter.prototype.unbind = function () {
        this.stopListeningTo($(document));
        window.removeEventListener('touchmove', this.handleTouchMoveProxy);
        window.removeEventListener('scroll', this.handleScrollProxy, true // useCapture
        );
    };
    // Touch Handlers
    // -----------------------------------------------------------------------------------------------------------------
    GlobalEmitter.prototype.handleTouchStart = function (ev) {
        // if a previous touch interaction never ended with a touchend, then implicitly end it,
        // but since a new touch interaction is about to begin, don't start the mouse ignore period.
        this.stopTouch(ev, true); // skipMouseIgnore=true
        this.isTouching = true;
        this.trigger('touchstart', ev);
    };
    GlobalEmitter.prototype.handleTouchMove = function (ev) {
        if (this.isTouching) {
            this.trigger('touchmove', ev);
        }
    };
    GlobalEmitter.prototype.handleTouchCancel = function (ev) {
        if (this.isTouching) {
            this.trigger('touchcancel', ev);
            // Have touchcancel fire an artificial touchend. That way, handlers won't need to listen to both.
            // If touchend fires later, it won't have any effect b/c isTouching will be false.
            this.stopTouch(ev);
        }
    };
    GlobalEmitter.prototype.handleTouchEnd = function (ev) {
        this.stopTouch(ev);
    };
    // Mouse Handlers
    // -----------------------------------------------------------------------------------------------------------------
    GlobalEmitter.prototype.handleMouseDown = function (ev) {
        if (!this.shouldIgnoreMouse()) {
            this.trigger('mousedown', ev);
        }
    };
    GlobalEmitter.prototype.handleMouseMove = function (ev) {
        if (!this.shouldIgnoreMouse()) {
            this.trigger('mousemove', ev);
        }
    };
    GlobalEmitter.prototype.handleMouseUp = function (ev) {
        if (!this.shouldIgnoreMouse()) {
            this.trigger('mouseup', ev);
        }
    };
    GlobalEmitter.prototype.handleClick = function (ev) {
        if (!this.shouldIgnoreMouse()) {
            this.trigger('click', ev);
        }
    };
    // Misc Handlers
    // -----------------------------------------------------------------------------------------------------------------
    GlobalEmitter.prototype.handleSelectStart = function (ev) {
        this.trigger('selectstart', ev);
    };
    GlobalEmitter.prototype.handleContextMenu = function (ev) {
        this.trigger('contextmenu', ev);
    };
    GlobalEmitter.prototype.handleScroll = function (ev) {
        this.trigger('scroll', ev);
    };
    // Utils
    // -----------------------------------------------------------------------------------------------------------------
    GlobalEmitter.prototype.stopTouch = function (ev, skipMouseIgnore) {
        if (skipMouseIgnore === void 0) { skipMouseIgnore = false; }
        if (this.isTouching) {
            this.isTouching = false;
            this.trigger('touchend', ev);
            if (!skipMouseIgnore) {
                this.startTouchMouseIgnore();
            }
        }
    };
    GlobalEmitter.prototype.startTouchMouseIgnore = function () {
        var _this = this;
        var wait = exportHooks.touchMouseIgnoreWait;
        if (wait) {
            this.mouseIgnoreDepth++;
            setTimeout(function () {
                _this.mouseIgnoreDepth--;
            }, wait);
        }
    };
    GlobalEmitter.prototype.shouldIgnoreMouse = function () {
        return this.isTouching || Boolean(this.mouseIgnoreDepth);
    };
    return GlobalEmitter;
}());
exports.default = GlobalEmitter;
ListenerMixin_1.default.mixInto(GlobalEmitter);
EmitterMixin_1.default.mixInto(GlobalEmitter);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var exportHooks = __webpack_require__(16);
exports.viewHash = {};
exportHooks.views = exports.viewHash;
function defineView(viewName, viewConfig) {
    exports.viewHash[viewName] = viewConfig;
}
exports.defineView = defineView;
function getViewConfig(viewName) {
    return exports.viewHash[viewName];
}
exports.getViewConfig = getViewConfig;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var DragListener_1 = __webpack_require__(54);
/* Tracks mouse movements over a component and raises events about which hit the mouse is over.
------------------------------------------------------------------------------------------------------------------------
options:
- subjectEl
- subjectCenter
*/
var HitDragListener = /** @class */ (function (_super) {
    tslib_1.__extends(HitDragListener, _super);
    function HitDragListener(component, options) {
        var _this = _super.call(this, options) || this;
        _this.component = component;
        return _this;
    }
    // Called when drag listening starts (but a real drag has not necessarily began).
    // ev might be undefined if dragging was started manually.
    HitDragListener.prototype.handleInteractionStart = function (ev) {
        var subjectEl = this.subjectEl;
        var subjectRect;
        var origPoint;
        var point;
        this.component.hitsNeeded();
        this.computeScrollBounds(); // for autoscroll
        if (ev) {
            origPoint = { left: util_1.getEvX(ev), top: util_1.getEvY(ev) };
            point = origPoint;
            // constrain the point to bounds of the element being dragged
            if (subjectEl) {
                subjectRect = util_1.getOuterRect(subjectEl); // used for centering as well
                point = util_1.constrainPoint(point, subjectRect);
            }
            this.origHit = this.queryHit(point.left, point.top);
            // treat the center of the subject as the collision point?
            if (subjectEl && this.options.subjectCenter) {
                // only consider the area the subject overlaps the hit. best for large subjects.
                // TODO: skip this if hit didn't supply left/right/top/bottom
                if (this.origHit) {
                    subjectRect = util_1.intersectRects(this.origHit, subjectRect) ||
                        subjectRect; // in case there is no intersection
                }
                point = util_1.getRectCenter(subjectRect);
            }
            this.coordAdjust = util_1.diffPoints(point, origPoint); // point - origPoint
        }
        else {
            this.origHit = null;
            this.coordAdjust = null;
        }
        // call the super-method. do it after origHit has been computed
        _super.prototype.handleInteractionStart.call(this, ev);
    };
    // Called when the actual drag has started
    HitDragListener.prototype.handleDragStart = function (ev) {
        var hit;
        _super.prototype.handleDragStart.call(this, ev);
        // might be different from this.origHit if the min-distance is large
        hit = this.queryHit(util_1.getEvX(ev), util_1.getEvY(ev));
        // report the initial hit the mouse is over
        // especially important if no min-distance and drag starts immediately
        if (hit) {
            this.handleHitOver(hit);
        }
    };
    // Called when the drag moves
    HitDragListener.prototype.handleDrag = function (dx, dy, ev) {
        var hit;
        _super.prototype.handleDrag.call(this, dx, dy, ev);
        hit = this.queryHit(util_1.getEvX(ev), util_1.getEvY(ev));
        if (!isHitsEqual(hit, this.hit)) {
            if (this.hit) {
                this.handleHitOut();
            }
            if (hit) {
                this.handleHitOver(hit);
            }
        }
    };
    // Called when dragging has been stopped
    HitDragListener.prototype.handleDragEnd = function (ev) {
        this.handleHitDone();
        _super.prototype.handleDragEnd.call(this, ev);
    };
    // Called when a the mouse has just moved over a new hit
    HitDragListener.prototype.handleHitOver = function (hit) {
        var isOrig = isHitsEqual(hit, this.origHit);
        this.hit = hit;
        this.trigger('hitOver', this.hit, isOrig, this.origHit);
    };
    // Called when the mouse has just moved out of a hit
    HitDragListener.prototype.handleHitOut = function () {
        if (this.hit) {
            this.trigger('hitOut', this.hit);
            this.handleHitDone();
            this.hit = null;
        }
    };
    // Called after a hitOut. Also called before a dragStop
    HitDragListener.prototype.handleHitDone = function () {
        if (this.hit) {
            this.trigger('hitDone', this.hit);
        }
    };
    // Called when the interaction ends, whether there was a real drag or not
    HitDragListener.prototype.handleInteractionEnd = function (ev, isCancelled) {
        _super.prototype.handleInteractionEnd.call(this, ev, isCancelled);
        this.origHit = null;
        this.hit = null;
        this.component.hitsNotNeeded();
    };
    // Called when scrolling has stopped, whether through auto scroll, or the user scrolling
    HitDragListener.prototype.handleScrollEnd = function () {
        _super.prototype.handleScrollEnd.call(this);
        // hits' absolute positions will be in new places after a user's scroll.
        // HACK for recomputing.
        if (this.isDragging) {
            this.component.releaseHits();
            this.component.prepareHits();
        }
    };
    // Gets the hit underneath the coordinates for the given mouse event
    HitDragListener.prototype.queryHit = function (left, top) {
        if (this.coordAdjust) {
            left += this.coordAdjust.left;
            top += this.coordAdjust.top;
        }
        return this.component.queryHit(left, top);
    };
    return HitDragListener;
}(DragListener_1.default));
exports.default = HitDragListener;
// Returns `true` if the hits are identically equal. `false` otherwise. Must be from the same component.
// Two null values will be considered equal, as two "out of the component" states are the same.
function isHitsEqual(hit0, hit1) {
    if (!hit0 && !hit1) {
        return true;
    }
    if (hit0 && hit1) {
        return hit0.component === hit1.component &&
            isHitPropsWithin(hit0, hit1) &&
            isHitPropsWithin(hit1, hit0); // ensures all props are identical
    }
    return false;
}
// Returns true if all of subHit's non-standard properties are within superHit
function isHitPropsWithin(subHit, superHit) {
    for (var propName in subHit) {
        if (!/^(component|left|right|top|bottom)$/.test(propName)) {
            if (subHit[propName] !== superHit[propName]) {
                return false;
            }
        }
    }
    return true;
}


/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var exportHooks = __webpack_require__(16);
var options_1 = __webpack_require__(32);
var util_1 = __webpack_require__(4);
exports.localeOptionHash = {};
exportHooks.locales = exports.localeOptionHash;
// NOTE: can't guarantee any of these computations will run because not every locale has datepicker
// configs, so make sure there are English fallbacks for these in the defaults file.
var dpComputableOptions = {
    buttonText: function (dpOptions) {
        return {
            // the translations sometimes wrongly contain HTML entities
            prev: util_1.stripHtmlEntities(dpOptions.prevText),
            next: util_1.stripHtmlEntities(dpOptions.nextText),
            today: util_1.stripHtmlEntities(dpOptions.currentText)
        };
    },
    // Produces format strings like "MMMM YYYY" -> "September 2014"
    monthYearFormat: function (dpOptions) {
        return dpOptions.showMonthAfterYear ?
            'YYYY[' + dpOptions.yearSuffix + '] MMMM' :
            'MMMM YYYY[' + dpOptions.yearSuffix + ']';
    }
};
var momComputableOptions = {
    // Produces format strings like "ddd M/D" -> "Fri 9/15"
    dayOfMonthFormat: function (momOptions, fcOptions) {
        var format = momOptions.longDateFormat('l'); // for the format like "M/D/YYYY"
        // strip the year off the edge, as well as other misc non-whitespace chars
        format = format.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, '');
        if (fcOptions.isRTL) {
            format += ' ddd'; // for RTL, add day-of-week to end
        }
        else {
            format = 'ddd ' + format; // for LTR, add day-of-week to beginning
        }
        return format;
    },
    // Produces format strings like "h:mma" -> "6:00pm"
    mediumTimeFormat: function (momOptions) {
        return momOptions.longDateFormat('LT')
            .replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
    },
    // Produces format strings like "h(:mm)a" -> "6pm" / "6:30pm"
    smallTimeFormat: function (momOptions) {
        return momOptions.longDateFormat('LT')
            .replace(':mm', '(:mm)')
            .replace(/(\Wmm)$/, '($1)') // like above, but for foreign locales
            .replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
    },
    // Produces format strings like "h(:mm)t" -> "6p" / "6:30p"
    extraSmallTimeFormat: function (momOptions) {
        return momOptions.longDateFormat('LT')
            .replace(':mm', '(:mm)')
            .replace(/(\Wmm)$/, '($1)') // like above, but for foreign locales
            .replace(/\s*a$/i, 't'); // convert to AM/PM/am/pm to lowercase one-letter. remove any spaces beforehand
    },
    // Produces format strings like "ha" / "H" -> "6pm" / "18"
    hourFormat: function (momOptions) {
        return momOptions.longDateFormat('LT')
            .replace(':mm', '')
            .replace(/(\Wmm)$/, '') // like above, but for foreign locales
            .replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
    },
    // Produces format strings like "h:mm" -> "6:30" (with no AM/PM)
    noMeridiemTimeFormat: function (momOptions) {
        return momOptions.longDateFormat('LT')
            .replace(/\s*a$/i, ''); // remove trailing AM/PM
    }
};
// options that should be computed off live calendar options (considers override options)
// TODO: best place for this? related to locale?
// TODO: flipping text based on isRTL is a bad idea because the CSS `direction` might want to handle it
var instanceComputableOptions = {
    // Produces format strings for results like "Mo 16"
    smallDayDateFormat: function (options) {
        return options.isRTL ?
            'D dd' :
            'dd D';
    },
    // Produces format strings for results like "Wk 5"
    weekFormat: function (options) {
        return options.isRTL ?
            'w[ ' + options.weekNumberTitle + ']' :
            '[' + options.weekNumberTitle + ' ]w';
    },
    // Produces format strings for results like "Wk5"
    smallWeekFormat: function (options) {
        return options.isRTL ?
            'w[' + options.weekNumberTitle + ']' :
            '[' + options.weekNumberTitle + ']w';
    }
};
// TODO: make these computable properties in optionsManager
function populateInstanceComputableOptions(options) {
    $.each(instanceComputableOptions, function (name, func) {
        if (options[name] == null) {
            options[name] = func(options);
        }
    });
}
exports.populateInstanceComputableOptions = populateInstanceComputableOptions;
// Initialize jQuery UI datepicker translations while using some of the translations
// Will set this as the default locales for datepicker.
function datepickerLocale(localeCode, dpLocaleCode, dpOptions) {
    // get the FullCalendar internal option hash for this locale. create if necessary
    var fcOptions = exports.localeOptionHash[localeCode] || (exports.localeOptionHash[localeCode] = {});
    // transfer some simple options from datepicker to fc
    fcOptions.isRTL = dpOptions.isRTL;
    fcOptions.weekNumberTitle = dpOptions.weekHeader;
    // compute some more complex options from datepicker
    $.each(dpComputableOptions, function (name, func) {
        fcOptions[name] = func(dpOptions);
    });
    var jqDatePicker = $.datepicker;
    // is jQuery UI Datepicker is on the page?
    if (jqDatePicker) {
        // Register the locale data.
        // FullCalendar and MomentJS use locale codes like "pt-br" but Datepicker
        // does it like "pt-BR" or if it doesn't have the locale, maybe just "pt".
        // Make an alias so the locale can be referenced either way.
        jqDatePicker.regional[dpLocaleCode] =
            jqDatePicker.regional[localeCode] = // alias
                dpOptions;
        // Alias 'en' to the default locale data. Do this every time.
        jqDatePicker.regional.en = jqDatePicker.regional[''];
        // Set as Datepicker's global defaults.
        jqDatePicker.setDefaults(dpOptions);
    }
}
exports.datepickerLocale = datepickerLocale;
// Sets FullCalendar-specific translations. Will set the locales as the global default.
function locale(localeCode, newFcOptions) {
    var fcOptions;
    var momOptions;
    // get the FullCalendar internal option hash for this locale. create if necessary
    fcOptions = exports.localeOptionHash[localeCode] || (exports.localeOptionHash[localeCode] = {});
    // provided new options for this locales? merge them in
    if (newFcOptions) {
        fcOptions = exports.localeOptionHash[localeCode] = options_1.mergeOptions([fcOptions, newFcOptions]);
    }
    // compute locale options that weren't defined.
    // always do this. newFcOptions can be undefined when initializing from i18n file,
    // so no way to tell if this is an initialization or a default-setting.
    momOptions = getMomentLocaleData(localeCode); // will fall back to en
    $.each(momComputableOptions, function (name, func) {
        if (fcOptions[name] == null) {
            fcOptions[name] = (func)(momOptions, fcOptions);
        }
    });
    // set it as the default locale for FullCalendar
    options_1.globalDefaults.locale = localeCode;
}
exports.locale = locale;
// Returns moment's internal locale data. If doesn't exist, returns English.
function getMomentLocaleData(localeCode) {
    return moment.localeData(localeCode) || moment.localeData('en');
}
exports.getMomentLocaleData = getMomentLocaleData;
// Initialize English by forcing computation of moment-derived options.
// Also, sets it as the default.
locale('en', options_1.englishDefaults);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(4);
exports.globalDefaults = {
    titleRangeSeparator: ' \u2013 ',
    monthYearFormat: 'MMMM YYYY',
    defaultTimedEventDuration: '02:00:00',
    defaultAllDayEventDuration: { days: 1 },
    forceEventDuration: false,
    nextDayThreshold: '09:00:00',
    // display
    columnHeader: true,
    defaultView: 'month',
    aspectRatio: 1.35,
    header: {
        left: 'title',
        center: '',
        right: 'today prev,next'
    },
    weekends: true,
    weekNumbers: false,
    weekNumberTitle: 'W',
    weekNumberCalculation: 'local',
    // editable: false,
    // nowIndicator: false,
    scrollTime: '06:00:00',
    minTime: '00:00:00',
    maxTime: '24:00:00',
    showNonCurrentDates: true,
    // event ajax
    lazyFetching: true,
    startParam: 'start',
    endParam: 'end',
    timezoneParam: 'timezone',
    timezone: false,
    // allDayDefault: undefined,
    // locale
    locale: null,
    isRTL: false,
    buttonText: {
        prev: 'prev',
        next: 'next',
        prevYear: 'prev year',
        nextYear: 'next year',
        year: 'year',
        today: 'today',
        month: 'month',
        week: 'week',
        day: 'day'
    },
    // buttonIcons: null,
    allDayText: 'all-day',
    // allows setting a min-height to the event segment to prevent short events overlapping each other
    agendaEventMinHeight: 0,
    // jquery-ui theming
    theme: false,
    // themeButtonIcons: null,
    // eventResizableFromStart: false,
    dragOpacity: .75,
    dragRevertDuration: 500,
    dragScroll: true,
    // selectable: false,
    unselectAuto: true,
    // selectMinDistance: 0,
    dropAccept: '*',
    eventOrder: 'title',
    // eventRenderWait: null,
    eventLimit: false,
    eventLimitText: 'more',
    eventLimitClick: 'popover',
    dayPopoverFormat: 'LL',
    handleWindowResize: true,
    windowResizeDelay: 100,
    longPressDelay: 1000
};
exports.englishDefaults = {
    dayPopoverFormat: 'dddd, MMMM D'
};
exports.rtlDefaults = {
    header: {
        left: 'next,prev today',
        center: '',
        right: 'title'
    },
    buttonIcons: {
        prev: 'right-single-arrow',
        next: 'left-single-arrow',
        prevYear: 'right-double-arrow',
        nextYear: 'left-double-arrow'
    },
    themeButtonIcons: {
        prev: 'circle-triangle-e',
        next: 'circle-triangle-w',
        nextYear: 'seek-prev',
        prevYear: 'seek-next'
    }
};
var complexOptions = [
    'header',
    'footer',
    'buttonText',
    'buttonIcons',
    'themeButtonIcons'
];
// Merges an array of option objects into a single object
function mergeOptions(optionObjs) {
    return util_1.mergeProps(optionObjs, complexOptions);
}
exports.mergeOptions = mergeOptions;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
// Class that all other classes will inherit from
var Class = /** @class */ (function () {
    function Class() {
    }
    // Called on a class to create a subclass.
    // LIMITATION: cannot provide a constructor!
    Class.extend = function (members) {
        var SubClass = /** @class */ (function (_super) {
            tslib_1.__extends(SubClass, _super);
            function SubClass() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SubClass;
        }(this));
        util_1.copyOwnProps(members, SubClass.prototype);
        return SubClass;
    };
    // Adds new member variables/methods to the class's prototype.
    // Can be called with another class, or a plain object hash containing new members.
    Class.mixin = function (members) {
        util_1.copyOwnProps(members, this.prototype);
    };
    return Class;
}());
exports.default = Class;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var ParsableModelMixin_1 = __webpack_require__(208);
var EventDef = /** @class */ (function () {
    function EventDef(source) {
        this.source = source;
        this.className = [];
        this.miscProps = {};
    }
    EventDef.parse = function (rawInput, source) {
        var def = new this(source);
        if (def.applyProps(rawInput)) {
            return def;
        }
        return false;
    };
    EventDef.normalizeId = function (id) {
        return String(id);
    };
    EventDef.generateId = function () {
        return '_fc' + (EventDef.uuid++);
    };
    EventDef.prototype.clone = function () {
        var copy = new this.constructor(this.source);
        copy.id = this.id;
        copy.rawId = this.rawId;
        copy.uid = this.uid; // not really unique anymore :(
        EventDef.copyVerbatimStandardProps(this, copy);
        copy.className = this.className.slice(); // copy
        copy.miscProps = $.extend({}, this.miscProps);
        return copy;
    };
    EventDef.prototype.hasInverseRendering = function () {
        return this.getRendering() === 'inverse-background';
    };
    EventDef.prototype.hasBgRendering = function () {
        var rendering = this.getRendering();
        return rendering === 'inverse-background' || rendering === 'background';
    };
    EventDef.prototype.getRendering = function () {
        if (this.rendering != null) {
            return this.rendering;
        }
        return this.source.rendering;
    };
    EventDef.prototype.getConstraint = function () {
        if (this.constraint != null) {
            return this.constraint;
        }
        if (this.source.constraint != null) {
            return this.source.constraint;
        }
        return this.source.calendar.opt('eventConstraint'); // what about View option?
    };
    EventDef.prototype.getOverlap = function () {
        if (this.overlap != null) {
            return this.overlap;
        }
        if (this.source.overlap != null) {
            return this.source.overlap;
        }
        return this.source.calendar.opt('eventOverlap'); // what about View option?
    };
    EventDef.prototype.isStartExplicitlyEditable = function () {
        if (this.startEditable != null) {
            return this.startEditable;
        }
        return this.source.startEditable;
    };
    EventDef.prototype.isDurationExplicitlyEditable = function () {
        if (this.durationEditable != null) {
            return this.durationEditable;
        }
        return this.source.durationEditable;
    };
    EventDef.prototype.isExplicitlyEditable = function () {
        if (this.editable != null) {
            return this.editable;
        }
        return this.source.editable;
    };
    EventDef.prototype.toLegacy = function () {
        var obj = $.extend({}, this.miscProps);
        obj._id = this.uid;
        obj.source = this.source;
        obj.className = this.className.slice(); // copy
        obj.allDay = this.isAllDay();
        if (this.rawId != null) {
            obj.id = this.rawId;
        }
        EventDef.copyVerbatimStandardProps(this, obj);
        return obj;
    };
    EventDef.prototype.applyManualStandardProps = function (rawProps) {
        if (rawProps.id != null) {
            this.id = EventDef.normalizeId((this.rawId = rawProps.id));
        }
        else {
            this.id = EventDef.generateId();
        }
        if (rawProps._id != null) {
            this.uid = String(rawProps._id);
        }
        else {
            this.uid = EventDef.generateId();
        }
        // TODO: converge with EventSource
        if ($.isArray(rawProps.className)) {
            this.className = rawProps.className;
        }
        if (typeof rawProps.className === 'string') {
            this.className = rawProps.className.split(/\s+/);
        }
        return true;
    };
    EventDef.prototype.applyMiscProps = function (rawProps) {
        $.extend(this.miscProps, rawProps);
    };
    EventDef.uuid = 0;
    EventDef.defineStandardProps = ParsableModelMixin_1.default.defineStandardProps;
    EventDef.copyVerbatimStandardProps = ParsableModelMixin_1.default.copyVerbatimStandardProps;
    return EventDef;
}());
exports.default = EventDef;
ParsableModelMixin_1.default.mixInto(EventDef);
EventDef.defineStandardProps({
    // not automatically assigned (`false`)
    _id: false,
    id: false,
    className: false,
    source: false,
    // automatically assigned (`true`)
    title: true,
    url: true,
    rendering: true,
    constraint: true,
    overlap: true,
    editable: true,
    startEditable: true,
    durationEditable: true,
    color: true,
    backgroundColor: true,
    borderColor: true,
    textColor: true
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var EventRange_1 = __webpack_require__(211);
var EventFootprint_1 = __webpack_require__(36);
var ComponentFootprint_1 = __webpack_require__(12);
function eventDefsToEventInstances(eventDefs, unzonedRange) {
    var eventInstances = [];
    var i;
    for (i = 0; i < eventDefs.length; i++) {
        eventInstances.push.apply(eventInstances, // append
        eventDefs[i].buildInstances(unzonedRange));
    }
    return eventInstances;
}
exports.eventDefsToEventInstances = eventDefsToEventInstances;
function eventInstanceToEventRange(eventInstance) {
    return new EventRange_1.default(eventInstance.dateProfile.unzonedRange, eventInstance.def, eventInstance);
}
exports.eventInstanceToEventRange = eventInstanceToEventRange;
function eventRangeToEventFootprint(eventRange) {
    return new EventFootprint_1.default(new ComponentFootprint_1.default(eventRange.unzonedRange, eventRange.eventDef.isAllDay()), eventRange.eventDef, eventRange.eventInstance // might not exist
    );
}
exports.eventRangeToEventFootprint = eventRangeToEventFootprint;
function eventInstanceToUnzonedRange(eventInstance) {
    return eventInstance.dateProfile.unzonedRange;
}
exports.eventInstanceToUnzonedRange = eventInstanceToUnzonedRange;
function eventFootprintToComponentFootprint(eventFootprint) {
    return eventFootprint.componentFootprint;
}
exports.eventFootprintToComponentFootprint = eventFootprintToComponentFootprint;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var EventFootprint = /** @class */ (function () {
    function EventFootprint(componentFootprint, eventDef, eventInstance) {
        this.componentFootprint = componentFootprint;
        this.eventDef = eventDef;
        if (eventInstance) {
            this.eventInstance = eventInstance;
        }
    }
    EventFootprint.prototype.getEventLegacy = function () {
        return (this.eventInstance || this.eventDef).toLegacy();
    };
    return EventFootprint;
}());
exports.default = EventFootprint;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(4);
var EventDateProfile_1 = __webpack_require__(17);
var EventDef_1 = __webpack_require__(34);
var EventDefDateMutation_1 = __webpack_require__(50);
var SingleEventDef_1 = __webpack_require__(13);
var EventDefMutation = /** @class */ (function () {
    function EventDefMutation() {
    }
    EventDefMutation.createFromRawProps = function (eventInstance, rawProps, largeUnit) {
        var eventDef = eventInstance.def;
        var dateProps = {};
        var standardProps = {};
        var miscProps = {};
        var verbatimStandardProps = {};
        var eventDefId = null;
        var className = null;
        var propName;
        var dateProfile;
        var dateMutation;
        var defMutation;
        for (propName in rawProps) {
            if (EventDateProfile_1.default.isStandardProp(propName)) {
                dateProps[propName] = rawProps[propName];
            }
            else if (eventDef.isStandardProp(propName)) {
                standardProps[propName] = rawProps[propName];
            }
            else if (eventDef.miscProps[propName] !== rawProps[propName]) {
                miscProps[propName] = rawProps[propName];
            }
        }
        dateProfile = EventDateProfile_1.default.parse(dateProps, eventDef.source);
        if (dateProfile) {
            dateMutation = EventDefDateMutation_1.default.createFromDiff(eventInstance.dateProfile, dateProfile, largeUnit);
        }
        if (standardProps.id !== eventDef.id) {
            eventDefId = standardProps.id; // only apply if there's a change
        }
        if (!util_1.isArraysEqual(standardProps.className, eventDef.className)) {
            className = standardProps.className; // only apply if there's a change
        }
        EventDef_1.default.copyVerbatimStandardProps(standardProps, // src
        verbatimStandardProps // dest
        );
        defMutation = new EventDefMutation();
        defMutation.eventDefId = eventDefId;
        defMutation.className = className;
        defMutation.verbatimStandardProps = verbatimStandardProps;
        defMutation.miscProps = miscProps;
        if (dateMutation) {
            defMutation.dateMutation = dateMutation;
        }
        return defMutation;
    };
    /*
    eventDef assumed to be a SingleEventDef.
    returns an undo function.
    */
    EventDefMutation.prototype.mutateSingle = function (eventDef) {
        var origDateProfile;
        if (this.dateMutation) {
            origDateProfile = eventDef.dateProfile;
            eventDef.dateProfile = this.dateMutation.buildNewDateProfile(origDateProfile, eventDef.source.calendar);
        }
        // can't undo
        // TODO: more DRY with EventDef::applyManualStandardProps
        if (this.eventDefId != null) {
            eventDef.id = EventDef_1.default.normalizeId((eventDef.rawId = this.eventDefId));
        }
        // can't undo
        // TODO: more DRY with EventDef::applyManualStandardProps
        if (this.className) {
            eventDef.className = this.className;
        }
        // can't undo
        if (this.verbatimStandardProps) {
            SingleEventDef_1.default.copyVerbatimStandardProps(this.verbatimStandardProps, // src
            eventDef // dest
            );
        }
        // can't undo
        if (this.miscProps) {
            eventDef.applyMiscProps(this.miscProps);
        }
        if (origDateProfile) {
            return function () {
                eventDef.dateProfile = origDateProfile;
            };
        }
        else {
            return function () { };
        }
    };
    EventDefMutation.prototype.setDateMutation = function (dateMutation) {
        if (dateMutation && !dateMutation.isEmpty()) {
            this.dateMutation = dateMutation;
        }
        else {
            this.dateMutation = null;
        }
    };
    EventDefMutation.prototype.isEmpty = function () {
        return !this.dateMutation;
    };
    return EventDefMutation;
}());
exports.default = EventDefMutation;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sourceClasses: [],
    registerClass: function (EventSourceClass) {
        this.sourceClasses.unshift(EventSourceClass); // give highest priority
    },
    parse: function (rawInput, calendar) {
        var sourceClasses = this.sourceClasses;
        var i;
        var eventSource;
        for (i = 0; i < sourceClasses.length; i++) {
            eventSource = sourceClasses[i].parse(rawInput, calendar);
            if (eventSource) {
                return eventSource;
            }
        }
    }
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var Class_1 = __webpack_require__(33);
/*
Embodies a div that has potential scrollbars
*/
var Scroller = /** @class */ (function (_super) {
    tslib_1.__extends(Scroller, _super);
    function Scroller(options) {
        var _this = _super.call(this) || this;
        options = options || {};
        _this.overflowX = options.overflowX || options.overflow || 'auto';
        _this.overflowY = options.overflowY || options.overflow || 'auto';
        return _this;
    }
    Scroller.prototype.render = function () {
        this.el = this.renderEl();
        this.applyOverflow();
    };
    Scroller.prototype.renderEl = function () {
        return (this.scrollEl = $('<div class="fc-scroller"></div>'));
    };
    // sets to natural height, unlocks overflow
    Scroller.prototype.clear = function () {
        this.setHeight('auto');
        this.applyOverflow();
    };
    Scroller.prototype.destroy = function () {
        this.el.remove();
    };
    // Overflow
    // -----------------------------------------------------------------------------------------------------------------
    Scroller.prototype.applyOverflow = function () {
        this.scrollEl.css({
            'overflow-x': this.overflowX,
            'overflow-y': this.overflowY
        });
    };
    // Causes any 'auto' overflow values to resolves to 'scroll' or 'hidden'.
    // Useful for preserving scrollbar widths regardless of future resizes.
    // Can pass in scrollbarWidths for optimization.
    Scroller.prototype.lockOverflow = function (scrollbarWidths) {
        var overflowX = this.overflowX;
        var overflowY = this.overflowY;
        scrollbarWidths = scrollbarWidths || this.getScrollbarWidths();
        if (overflowX === 'auto') {
            overflowX = (scrollbarWidths.top || scrollbarWidths.bottom || // horizontal scrollbars?
                // OR scrolling pane with massless scrollbars?
                this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth) ? 'scroll' : 'hidden';
        }
        if (overflowY === 'auto') {
            overflowY = (scrollbarWidths.left || scrollbarWidths.right || // vertical scrollbars?
                // OR scrolling pane with massless scrollbars?
                this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight) ? 'scroll' : 'hidden';
        }
        this.scrollEl.css({ 'overflow-x': overflowX, 'overflow-y': overflowY });
    };
    // Getters / Setters
    // -----------------------------------------------------------------------------------------------------------------
    Scroller.prototype.setHeight = function (height) {
        this.scrollEl.height(height);
    };
    Scroller.prototype.getScrollTop = function () {
        return this.scrollEl.scrollTop();
    };
    Scroller.prototype.setScrollTop = function (top) {
        this.scrollEl.scrollTop(top);
    };
    Scroller.prototype.getClientWidth = function () {
        return this.scrollEl[0].clientWidth;
    };
    Scroller.prototype.getClientHeight = function () {
        return this.scrollEl[0].clientHeight;
    };
    Scroller.prototype.getScrollbarWidths = function () {
        return util_1.getScrollbarWidths(this.scrollEl);
    };
    return Scroller;
}(Class_1.default));
exports.default = Scroller;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var DateComponent_1 = __webpack_require__(219);
var GlobalEmitter_1 = __webpack_require__(21);
var InteractiveDateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InteractiveDateComponent, _super);
    function InteractiveDateComponent(_view, _options) {
        var _this = _super.call(this, _view, _options) || this;
        // self-config, overridable by subclasses
        _this.segSelector = '.fc-event-container > *'; // what constitutes an event element?
        if (_this.dateSelectingClass) {
            _this.dateClicking = new _this.dateClickingClass(_this);
        }
        if (_this.dateSelectingClass) {
            _this.dateSelecting = new _this.dateSelectingClass(_this);
        }
        if (_this.eventPointingClass) {
            _this.eventPointing = new _this.eventPointingClass(_this);
        }
        if (_this.eventDraggingClass && _this.eventPointing) {
            _this.eventDragging = new _this.eventDraggingClass(_this, _this.eventPointing);
        }
        if (_this.eventResizingClass && _this.eventPointing) {
            _this.eventResizing = new _this.eventResizingClass(_this, _this.eventPointing);
        }
        if (_this.externalDroppingClass) {
            _this.externalDropping = new _this.externalDroppingClass(_this);
        }
        return _this;
    }
    // Sets the container element that the view should render inside of, does global DOM-related initializations,
    // and renders all the non-date-related content inside.
    InteractiveDateComponent.prototype.setElement = function (el) {
        _super.prototype.setElement.call(this, el);
        if (this.dateClicking) {
            this.dateClicking.bindToEl(el);
        }
        if (this.dateSelecting) {
            this.dateSelecting.bindToEl(el);
        }
        this.bindAllSegHandlersToEl(el);
    };
    InteractiveDateComponent.prototype.removeElement = function () {
        this.endInteractions();
        _super.prototype.removeElement.call(this);
    };
    InteractiveDateComponent.prototype.executeEventUnrender = function () {
        this.endInteractions();
        _super.prototype.executeEventUnrender.call(this);
    };
    InteractiveDateComponent.prototype.bindGlobalHandlers = function () {
        _super.prototype.bindGlobalHandlers.call(this);
        if (this.externalDropping) {
            this.externalDropping.bindToDocument();
        }
    };
    InteractiveDateComponent.prototype.unbindGlobalHandlers = function () {
        _super.prototype.unbindGlobalHandlers.call(this);
        if (this.externalDropping) {
            this.externalDropping.unbindFromDocument();
        }
    };
    InteractiveDateComponent.prototype.bindDateHandlerToEl = function (el, name, handler) {
        var _this = this;
        // attach a handler to the grid's root element.
        // jQuery will take care of unregistering them when removeElement gets called.
        this.el.on(name, function (ev) {
            if (!$(ev.target).is(_this.segSelector + ':not(.fc-helper),' + // directly on an event element
                _this.segSelector + ':not(.fc-helper) *,' + // within an event element
                '.fc-more,' + // a "more.." link
                'a[data-goto]' // a clickable nav link
            )) {
                return handler.call(_this, ev);
            }
        });
    };
    InteractiveDateComponent.prototype.bindAllSegHandlersToEl = function (el) {
        [
            this.eventPointing,
            this.eventDragging,
            this.eventResizing
        ].forEach(function (eventInteraction) {
            if (eventInteraction) {
                eventInteraction.bindToEl(el);
            }
        });
    };
    InteractiveDateComponent.prototype.bindSegHandlerToEl = function (el, name, handler) {
        var _this = this;
        el.on(name, this.segSelector, function (ev) {
            var segEl = $(ev.currentTarget);
            if (!segEl.is('.fc-helper')) {
                var seg = segEl.data('fc-seg'); // grab segment data. put there by View::renderEventsPayload
                if (seg && !_this.shouldIgnoreEventPointing()) {
                    return handler.call(_this, seg, ev); // context will be the Grid
                }
            }
        });
    };
    InteractiveDateComponent.prototype.shouldIgnoreMouse = function () {
        // HACK
        // This will still work even though bindDateHandlerToEl doesn't use GlobalEmitter.
        return GlobalEmitter_1.default.get().shouldIgnoreMouse();
    };
    InteractiveDateComponent.prototype.shouldIgnoreTouch = function () {
        var view = this._getView();
        // On iOS (and Android?) when a new selection is initiated overtop another selection,
        // the touchend never fires because the elements gets removed mid-touch-interaction (my theory).
        // HACK: simply don't allow this to happen.
        // ALSO: prevent selection when an *event* is already raised.
        return view.isSelected || view.selectedEvent;
    };
    InteractiveDateComponent.prototype.shouldIgnoreEventPointing = function () {
        // only call the handlers if there is not a drag/resize in progress
        return (this.eventDragging && this.eventDragging.isDragging) ||
            (this.eventResizing && this.eventResizing.isResizing);
    };
    InteractiveDateComponent.prototype.canStartSelection = function (seg, ev) {
        return util_1.getEvIsTouch(ev) &&
            !this.canStartResize(seg, ev) &&
            (this.isEventDefDraggable(seg.footprint.eventDef) ||
                this.isEventDefResizable(seg.footprint.eventDef));
    };
    InteractiveDateComponent.prototype.canStartDrag = function (seg, ev) {
        return !this.canStartResize(seg, ev) &&
            this.isEventDefDraggable(seg.footprint.eventDef);
    };
    InteractiveDateComponent.prototype.canStartResize = function (seg, ev) {
        var view = this._getView();
        var eventDef = seg.footprint.eventDef;
        return (!util_1.getEvIsTouch(ev) || view.isEventDefSelected(eventDef)) &&
            this.isEventDefResizable(eventDef) &&
            $(ev.target).is('.fc-resizer');
    };
    // Kills all in-progress dragging.
    // Useful for when public API methods that result in re-rendering are invoked during a drag.
    // Also useful for when touch devices misbehave and don't fire their touchend.
    InteractiveDateComponent.prototype.endInteractions = function () {
        [
            this.dateClicking,
            this.dateSelecting,
            this.eventPointing,
            this.eventDragging,
            this.eventResizing
        ].forEach(function (interaction) {
            if (interaction) {
                interaction.end();
            }
        });
    };
    // Event Drag-n-Drop
    // ---------------------------------------------------------------------------------------------------------------
    // Computes if the given event is allowed to be dragged by the user
    InteractiveDateComponent.prototype.isEventDefDraggable = function (eventDef) {
        return this.isEventDefStartEditable(eventDef);
    };
    InteractiveDateComponent.prototype.isEventDefStartEditable = function (eventDef) {
        var isEditable = eventDef.isStartExplicitlyEditable();
        if (isEditable == null) {
            isEditable = this.opt('eventStartEditable');
            if (isEditable == null) {
                isEditable = this.isEventDefGenerallyEditable(eventDef);
            }
        }
        return isEditable;
    };
    InteractiveDateComponent.prototype.isEventDefGenerallyEditable = function (eventDef) {
        var isEditable = eventDef.isExplicitlyEditable();
        if (isEditable == null) {
            isEditable = this.opt('editable');
        }
        return isEditable;
    };
    // Event Resizing
    // ---------------------------------------------------------------------------------------------------------------
    // Computes if the given event is allowed to be resized from its starting edge
    InteractiveDateComponent.prototype.isEventDefResizableFromStart = function (eventDef) {
        return this.opt('eventResizableFromStart') && this.isEventDefResizable(eventDef);
    };
    // Computes if the given event is allowed to be resized from its ending edge
    InteractiveDateComponent.prototype.isEventDefResizableFromEnd = function (eventDef) {
        return this.isEventDefResizable(eventDef);
    };
    // Computes if the given event is allowed to be resized by the user at all
    InteractiveDateComponent.prototype.isEventDefResizable = function (eventDef) {
        var isResizable = eventDef.isDurationExplicitlyEditable();
        if (isResizable == null) {
            isResizable = this.opt('eventDurationEditable');
            if (isResizable == null) {
                isResizable = this.isEventDefGenerallyEditable(eventDef);
            }
        }
        return isResizable;
    };
    // Event Mutation / Constraints
    // ---------------------------------------------------------------------------------------------------------------
    // Diffs the two dates, returning a duration, based on granularity of the grid
    // TODO: port isTimeScale into this system?
    InteractiveDateComponent.prototype.diffDates = function (a, b) {
        if (this.largeUnit) {
            return util_1.diffByUnit(a, b, this.largeUnit);
        }
        else {
            return util_1.diffDayTime(a, b);
        }
    };
    // is it allowed, in relation to the view's validRange?
    // NOTE: very similar to isExternalInstanceGroupAllowed
    InteractiveDateComponent.prototype.isEventInstanceGroupAllowed = function (eventInstanceGroup) {
        var view = this._getView();
        var dateProfile = this.dateProfile;
        var eventFootprints = this.eventRangesToEventFootprints(eventInstanceGroup.getAllEventRanges());
        var i;
        for (i = 0; i < eventFootprints.length; i++) {
            // TODO: just use getAllEventRanges directly
            if (!dateProfile.validUnzonedRange.containsRange(eventFootprints[i].componentFootprint.unzonedRange)) {
                return false;
            }
        }
        return view.calendar.constraints.isEventInstanceGroupAllowed(eventInstanceGroup);
    };
    // NOTE: very similar to isEventInstanceGroupAllowed
    // when it's a completely anonymous external drag, no event.
    InteractiveDateComponent.prototype.isExternalInstanceGroupAllowed = function (eventInstanceGroup) {
        var view = this._getView();
        var dateProfile = this.dateProfile;
        var eventFootprints = this.eventRangesToEventFootprints(eventInstanceGroup.getAllEventRanges());
        var i;
        for (i = 0; i < eventFootprints.length; i++) {
            if (!dateProfile.validUnzonedRange.containsRange(eventFootprints[i].componentFootprint.unzonedRange)) {
                return false;
            }
        }
        for (i = 0; i < eventFootprints.length; i++) {
            // treat it as a selection
            // TODO: pass in eventInstanceGroup instead
            //  because we don't want calendar's constraint system to depend on a component's
            //  determination of footprints.
            if (!view.calendar.constraints.isSelectionFootprintAllowed(eventFootprints[i].componentFootprint)) {
                return false;
            }
        }
        return true;
    };
    return InteractiveDateComponent;
}(DateComponent_1.default));
exports.default = InteractiveDateComponent;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var RenderQueue_1 = __webpack_require__(218);
var DateProfileGenerator_1 = __webpack_require__(221);
var InteractiveDateComponent_1 = __webpack_require__(40);
var GlobalEmitter_1 = __webpack_require__(21);
var UnzonedRange_1 = __webpack_require__(5);
/* An abstract class from which other views inherit from
----------------------------------------------------------------------------------------------------------------------*/
var View = /** @class */ (function (_super) {
    tslib_1.__extends(View, _super);
    function View(calendar, viewSpec) {
        var _this = _super.call(this, null, viewSpec.options) || this;
        _this.batchRenderDepth = 0;
        _this.isSelected = false; // boolean whether a range of time is user-selected or not
        _this.calendar = calendar;
        _this.viewSpec = viewSpec;
        // shortcuts
        _this.type = viewSpec.type;
        // .name is deprecated
        _this.name = _this.type;
        _this.initRenderQueue();
        _this.initHiddenDays();
        _this.dateProfileGenerator = new _this.dateProfileGeneratorClass(_this);
        _this.bindBaseRenderHandlers();
        _this.eventOrderSpecs = util_1.parseFieldSpecs(_this.opt('eventOrder'));
        // legacy
        if (_this['initialize']) {
            _this['initialize']();
        }
        return _this;
    }
    View.prototype._getView = function () {
        return this;
    };
    // Retrieves an option with the given name
    View.prototype.opt = function (name) {
        return this.options[name];
    };
    /* Render Queue
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.initRenderQueue = function () {
        this.renderQueue = new RenderQueue_1.default({
            event: this.opt('eventRenderWait')
        });
        this.renderQueue.on('start', this.onRenderQueueStart.bind(this));
        this.renderQueue.on('stop', this.onRenderQueueStop.bind(this));
        this.on('before:change', this.startBatchRender);
        this.on('change', this.stopBatchRender);
    };
    View.prototype.onRenderQueueStart = function () {
        this.calendar.freezeContentHeight();
        this.addScroll(this.queryScroll());
    };
    View.prototype.onRenderQueueStop = function () {
        if (this.calendar.updateViewSize()) {
            this.popScroll();
        }
        this.calendar.thawContentHeight();
    };
    View.prototype.startBatchRender = function () {
        if (!(this.batchRenderDepth++)) {
            this.renderQueue.pause();
        }
    };
    View.prototype.stopBatchRender = function () {
        if (!(--this.batchRenderDepth)) {
            this.renderQueue.resume();
        }
    };
    View.prototype.requestRender = function (func, namespace, actionType) {
        this.renderQueue.queue(func, namespace, actionType);
    };
    // given func will auto-bind to `this`
    View.prototype.whenSizeUpdated = function (func) {
        if (this.renderQueue.isRunning) {
            this.renderQueue.one('stop', func.bind(this));
        }
        else {
            func.call(this);
        }
    };
    /* Title and Date Formatting
    ------------------------------------------------------------------------------------------------------------------*/
    // Computes what the title at the top of the calendar should be for this view
    View.prototype.computeTitle = function (dateProfile) {
        var unzonedRange;
        // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
        if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
            unzonedRange = dateProfile.currentUnzonedRange;
        }
        else {
            unzonedRange = dateProfile.activeUnzonedRange;
        }
        return this.formatRange({
            start: this.calendar.msToMoment(unzonedRange.startMs, dateProfile.isRangeAllDay),
            end: this.calendar.msToMoment(unzonedRange.endMs, dateProfile.isRangeAllDay)
        }, dateProfile.isRangeAllDay, this.opt('titleFormat') || this.computeTitleFormat(dateProfile), this.opt('titleRangeSeparator'));
    };
    // Generates the format string that should be used to generate the title for the current date range.
    // Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
    View.prototype.computeTitleFormat = function (dateProfile) {
        var currentRangeUnit = dateProfile.currentRangeUnit;
        if (currentRangeUnit === 'year') {
            return 'YYYY';
        }
        else if (currentRangeUnit === 'month') {
            return this.opt('monthYearFormat'); // like "September 2014"
        }
        else if (dateProfile.currentUnzonedRange.as('days') > 1) {
            return 'll'; // multi-day range. shorter, like "Sep 9 - 10 2014"
        }
        else {
            return 'LL'; // one day. longer, like "September 9 2014"
        }
    };
    // Date Setting/Unsetting
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.setDate = function (date) {
        var currentDateProfile = this.get('dateProfile');
        var newDateProfile = this.dateProfileGenerator.build(date, undefined, true); // forceToValid=true
        if (!currentDateProfile ||
            !currentDateProfile.activeUnzonedRange.equals(newDateProfile.activeUnzonedRange)) {
            this.set('dateProfile', newDateProfile);
        }
    };
    View.prototype.unsetDate = function () {
        this.unset('dateProfile');
    };
    // Event Data
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.fetchInitialEvents = function (dateProfile) {
        var calendar = this.calendar;
        var forceAllDay = dateProfile.isRangeAllDay && !this.usesMinMaxTime;
        return calendar.requestEvents(calendar.msToMoment(dateProfile.activeUnzonedRange.startMs, forceAllDay), calendar.msToMoment(dateProfile.activeUnzonedRange.endMs, forceAllDay));
    };
    View.prototype.bindEventChanges = function () {
        this.listenTo(this.calendar, 'eventsReset', this.resetEvents); // TODO: make this a real event
    };
    View.prototype.unbindEventChanges = function () {
        this.stopListeningTo(this.calendar, 'eventsReset');
    };
    View.prototype.setEvents = function (eventsPayload) {
        this.set('currentEvents', eventsPayload);
        this.set('hasEvents', true);
    };
    View.prototype.unsetEvents = function () {
        this.unset('currentEvents');
        this.unset('hasEvents');
    };
    View.prototype.resetEvents = function (eventsPayload) {
        this.startBatchRender();
        this.unsetEvents();
        this.setEvents(eventsPayload);
        this.stopBatchRender();
    };
    // Date High-level Rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.requestDateRender = function (dateProfile) {
        var _this = this;
        this.requestRender(function () {
            _this.executeDateRender(dateProfile);
        }, 'date', 'init');
    };
    View.prototype.requestDateUnrender = function () {
        var _this = this;
        this.requestRender(function () {
            _this.executeDateUnrender();
        }, 'date', 'destroy');
    };
    // if dateProfile not specified, uses current
    View.prototype.executeDateRender = function (dateProfile) {
        _super.prototype.executeDateRender.call(this, dateProfile);
        if (this['render']) {
            this['render'](); // TODO: deprecate
        }
        this.trigger('datesRendered');
        this.addScroll({ isDateInit: true });
        this.startNowIndicator(); // shouldn't render yet because updateSize will be called soon
    };
    View.prototype.executeDateUnrender = function () {
        this.unselect();
        this.stopNowIndicator();
        this.trigger('before:datesUnrendered');
        if (this['destroy']) {
            this['destroy'](); // TODO: deprecate
        }
        _super.prototype.executeDateUnrender.call(this);
    };
    // "Base" rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.bindBaseRenderHandlers = function () {
        var _this = this;
        this.on('datesRendered', function () {
            _this.whenSizeUpdated(_this.triggerViewRender);
        });
        this.on('before:datesUnrendered', function () {
            _this.triggerViewDestroy();
        });
    };
    View.prototype.triggerViewRender = function () {
        this.publiclyTrigger('viewRender', {
            context: this,
            args: [this, this.el]
        });
    };
    View.prototype.triggerViewDestroy = function () {
        this.publiclyTrigger('viewDestroy', {
            context: this,
            args: [this, this.el]
        });
    };
    // Event High-level Rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.requestEventsRender = function (eventsPayload) {
        var _this = this;
        this.requestRender(function () {
            _this.executeEventRender(eventsPayload);
            _this.whenSizeUpdated(_this.triggerAfterEventsRendered);
        }, 'event', 'init');
    };
    View.prototype.requestEventsUnrender = function () {
        var _this = this;
        this.requestRender(function () {
            _this.triggerBeforeEventsDestroyed();
            _this.executeEventUnrender();
        }, 'event', 'destroy');
    };
    // Business Hour High-level Rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.requestBusinessHoursRender = function (businessHourGenerator) {
        var _this = this;
        this.requestRender(function () {
            _this.renderBusinessHours(businessHourGenerator);
        }, 'businessHours', 'init');
    };
    View.prototype.requestBusinessHoursUnrender = function () {
        var _this = this;
        this.requestRender(function () {
            _this.unrenderBusinessHours();
        }, 'businessHours', 'destroy');
    };
    // Misc view rendering utils
    // -----------------------------------------------------------------------------------------------------------------
    // Binds DOM handlers to elements that reside outside the view container, such as the document
    View.prototype.bindGlobalHandlers = function () {
        _super.prototype.bindGlobalHandlers.call(this);
        this.listenTo(GlobalEmitter_1.default.get(), {
            touchstart: this.processUnselect,
            mousedown: this.handleDocumentMousedown
        });
    };
    // Unbinds DOM handlers from elements that reside outside the view container
    View.prototype.unbindGlobalHandlers = function () {
        _super.prototype.unbindGlobalHandlers.call(this);
        this.stopListeningTo(GlobalEmitter_1.default.get());
    };
    /* Now Indicator
    ------------------------------------------------------------------------------------------------------------------*/
    // Immediately render the current time indicator and begins re-rendering it at an interval,
    // which is defined by this.getNowIndicatorUnit().
    // TODO: somehow do this for the current whole day's background too
    View.prototype.startNowIndicator = function () {
        var _this = this;
        var unit;
        var update;
        var delay; // ms wait value
        if (this.opt('nowIndicator')) {
            unit = this.getNowIndicatorUnit();
            if (unit) {
                update = util_1.proxy(this, 'updateNowIndicator'); // bind to `this`
                this.initialNowDate = this.calendar.getNow();
                this.initialNowQueriedMs = new Date().valueOf();
                // wait until the beginning of the next interval
                delay = this.initialNowDate.clone().startOf(unit).add(1, unit).valueOf() - this.initialNowDate.valueOf();
                this.nowIndicatorTimeoutID = setTimeout(function () {
                    _this.nowIndicatorTimeoutID = null;
                    update();
                    delay = +moment.duration(1, unit);
                    delay = Math.max(100, delay); // prevent too frequent
                    _this.nowIndicatorIntervalID = setInterval(update, delay); // update every interval
                }, delay);
            }
            // rendering will be initiated in updateSize
        }
    };
    // rerenders the now indicator, computing the new current time from the amount of time that has passed
    // since the initial getNow call.
    View.prototype.updateNowIndicator = function () {
        if (this.isDatesRendered &&
            this.initialNowDate // activated before?
        ) {
            this.unrenderNowIndicator(); // won't unrender if unnecessary
            this.renderNowIndicator(this.initialNowDate.clone().add(new Date().valueOf() - this.initialNowQueriedMs) // add ms
            );
            this.isNowIndicatorRendered = true;
        }
    };
    // Immediately unrenders the view's current time indicator and stops any re-rendering timers.
    // Won't cause side effects if indicator isn't rendered.
    View.prototype.stopNowIndicator = function () {
        if (this.isNowIndicatorRendered) {
            if (this.nowIndicatorTimeoutID) {
                clearTimeout(this.nowIndicatorTimeoutID);
                this.nowIndicatorTimeoutID = null;
            }
            if (this.nowIndicatorIntervalID) {
                clearInterval(this.nowIndicatorIntervalID);
                this.nowIndicatorIntervalID = null;
            }
            this.unrenderNowIndicator();
            this.isNowIndicatorRendered = false;
        }
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.updateSize = function (totalHeight, isAuto, isResize) {
        if (this['setHeight']) {
            this['setHeight'](totalHeight, isAuto);
        }
        else {
            _super.prototype.updateSize.call(this, totalHeight, isAuto, isResize);
        }
        this.updateNowIndicator();
    };
    /* Scroller
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.addScroll = function (scroll) {
        var queuedScroll = this.queuedScroll || (this.queuedScroll = {});
        $.extend(queuedScroll, scroll);
    };
    View.prototype.popScroll = function () {
        this.applyQueuedScroll();
        this.queuedScroll = null;
    };
    View.prototype.applyQueuedScroll = function () {
        if (this.queuedScroll) {
            this.applyScroll(this.queuedScroll);
        }
    };
    View.prototype.queryScroll = function () {
        var scroll = {};
        if (this.isDatesRendered) {
            $.extend(scroll, this.queryDateScroll());
        }
        return scroll;
    };
    View.prototype.applyScroll = function (scroll) {
        if (scroll.isDateInit && this.isDatesRendered) {
            $.extend(scroll, this.computeInitialDateScroll());
        }
        if (this.isDatesRendered) {
            this.applyDateScroll(scroll);
        }
    };
    View.prototype.computeInitialDateScroll = function () {
        return {}; // subclasses must implement
    };
    View.prototype.queryDateScroll = function () {
        return {}; // subclasses must implement
    };
    View.prototype.applyDateScroll = function (scroll) {
        // subclasses must implement
    };
    /* Event Drag-n-Drop
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.reportEventDrop = function (eventInstance, eventMutation, el, ev) {
        var eventManager = this.calendar.eventManager;
        var undoFunc = eventManager.mutateEventsWithId(eventInstance.def.id, eventMutation);
        var dateMutation = eventMutation.dateMutation;
        // update the EventInstance, for handlers
        if (dateMutation) {
            eventInstance.dateProfile = dateMutation.buildNewDateProfile(eventInstance.dateProfile, this.calendar);
        }
        this.triggerEventDrop(eventInstance, 
        // a drop doesn't necessarily mean a date mutation (ex: resource change)
        (dateMutation && dateMutation.dateDelta) || moment.duration(), undoFunc, el, ev);
    };
    // Triggers event-drop handlers that have subscribed via the API
    View.prototype.triggerEventDrop = function (eventInstance, dateDelta, undoFunc, el, ev) {
        this.publiclyTrigger('eventDrop', {
            context: el[0],
            args: [
                eventInstance.toLegacy(),
                dateDelta,
                undoFunc,
                ev,
                {},
                this
            ]
        });
    };
    /* External Element Drag-n-Drop
    ------------------------------------------------------------------------------------------------------------------*/
    // Must be called when an external element, via jQuery UI, has been dropped onto the calendar.
    // `meta` is the parsed data that has been embedded into the dragging event.
    // `dropLocation` is an object that contains the new zoned start/end/allDay values for the event.
    View.prototype.reportExternalDrop = function (singleEventDef, isEvent, isSticky, el, ev, ui) {
        if (isEvent) {
            this.calendar.eventManager.addEventDef(singleEventDef, isSticky);
        }
        this.triggerExternalDrop(singleEventDef, isEvent, el, ev, ui);
    };
    // Triggers external-drop handlers that have subscribed via the API
    View.prototype.triggerExternalDrop = function (singleEventDef, isEvent, el, ev, ui) {
        // trigger 'drop' regardless of whether element represents an event
        this.publiclyTrigger('drop', {
            context: el[0],
            args: [
                singleEventDef.dateProfile.start.clone(),
                ev,
                ui,
                this
            ]
        });
        if (isEvent) {
            // signal an external event landed
            this.publiclyTrigger('eventReceive', {
                context: this,
                args: [
                    singleEventDef.buildInstance().toLegacy(),
                    this
                ]
            });
        }
    };
    /* Event Resizing
    ------------------------------------------------------------------------------------------------------------------*/
    // Must be called when an event in the view has been resized to a new length
    View.prototype.reportEventResize = function (eventInstance, eventMutation, el, ev) {
        var eventManager = this.calendar.eventManager;
        var undoFunc = eventManager.mutateEventsWithId(eventInstance.def.id, eventMutation);
        // update the EventInstance, for handlers
        eventInstance.dateProfile = eventMutation.dateMutation.buildNewDateProfile(eventInstance.dateProfile, this.calendar);
        this.triggerEventResize(eventInstance, eventMutation.dateMutation.endDelta, undoFunc, el, ev);
    };
    // Triggers event-resize handlers that have subscribed via the API
    View.prototype.triggerEventResize = function (eventInstance, durationDelta, undoFunc, el, ev) {
        this.publiclyTrigger('eventResize', {
            context: el[0],
            args: [
                eventInstance.toLegacy(),
                durationDelta,
                undoFunc,
                ev,
                {},
                this
            ]
        });
    };
    /* Selection (time range)
    ------------------------------------------------------------------------------------------------------------------*/
    // Selects a date span on the view. `start` and `end` are both Moments.
    // `ev` is the native mouse event that begin the interaction.
    View.prototype.select = function (footprint, ev) {
        this.unselect(ev);
        this.renderSelectionFootprint(footprint);
        this.reportSelection(footprint, ev);
    };
    View.prototype.renderSelectionFootprint = function (footprint) {
        if (this['renderSelection']) {
            this['renderSelection'](footprint.toLegacy(this.calendar));
        }
        else {
            _super.prototype.renderSelectionFootprint.call(this, footprint);
        }
    };
    // Called when a new selection is made. Updates internal state and triggers handlers.
    View.prototype.reportSelection = function (footprint, ev) {
        this.isSelected = true;
        this.triggerSelect(footprint, ev);
    };
    // Triggers handlers to 'select'
    View.prototype.triggerSelect = function (footprint, ev) {
        var dateProfile = this.calendar.footprintToDateProfile(footprint); // abuse of "Event"DateProfile?
        this.publiclyTrigger('select', {
            context: this,
            args: [
                dateProfile.start,
                dateProfile.end,
                ev,
                this
            ]
        });
    };
    // Undoes a selection. updates in the internal state and triggers handlers.
    // `ev` is the native mouse event that began the interaction.
    View.prototype.unselect = function (ev) {
        if (this.isSelected) {
            this.isSelected = false;
            if (this['destroySelection']) {
                this['destroySelection'](); // TODO: deprecate
            }
            this.unrenderSelection();
            this.publiclyTrigger('unselect', {
                context: this,
                args: [ev, this]
            });
        }
    };
    /* Event Selection
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.selectEventInstance = function (eventInstance) {
        if (!this.selectedEventInstance ||
            this.selectedEventInstance !== eventInstance) {
            this.unselectEventInstance();
            this.getEventSegs().forEach(function (seg) {
                if (seg.footprint.eventInstance === eventInstance &&
                    seg.el // necessary?
                ) {
                    seg.el.addClass('fc-selected');
                }
            });
            this.selectedEventInstance = eventInstance;
        }
    };
    View.prototype.unselectEventInstance = function () {
        if (this.selectedEventInstance) {
            this.getEventSegs().forEach(function (seg) {
                if (seg.el) {
                    seg.el.removeClass('fc-selected');
                }
            });
            this.selectedEventInstance = null;
        }
    };
    View.prototype.isEventDefSelected = function (eventDef) {
        // event references might change on refetchEvents(), while selectedEventInstance doesn't,
        // so compare IDs
        return this.selectedEventInstance && this.selectedEventInstance.def.id === eventDef.id;
    };
    /* Mouse / Touch Unselecting (time range & event unselection)
    ------------------------------------------------------------------------------------------------------------------*/
    // TODO: move consistently to down/start or up/end?
    // TODO: don't kill previous selection if touch scrolling
    View.prototype.handleDocumentMousedown = function (ev) {
        if (util_1.isPrimaryMouseButton(ev)) {
            this.processUnselect(ev);
        }
    };
    View.prototype.processUnselect = function (ev) {
        this.processRangeUnselect(ev);
        this.processEventUnselect(ev);
    };
    View.prototype.processRangeUnselect = function (ev) {
        var ignore;
        // is there a time-range selection?
        if (this.isSelected && this.opt('unselectAuto')) {
            // only unselect if the clicked element is not identical to or inside of an 'unselectCancel' element
            ignore = this.opt('unselectCancel');
            if (!ignore || !$(ev.target).closest(ignore).length) {
                this.unselect(ev);
            }
        }
    };
    View.prototype.processEventUnselect = function (ev) {
        if (this.selectedEventInstance) {
            if (!$(ev.target).closest('.fc-selected').length) {
                this.unselectEventInstance();
            }
        }
    };
    /* Triggers
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.triggerBaseRendered = function () {
        this.publiclyTrigger('viewRender', {
            context: this,
            args: [this, this.el]
        });
    };
    View.prototype.triggerBaseUnrendered = function () {
        this.publiclyTrigger('viewDestroy', {
            context: this,
            args: [this, this.el]
        });
    };
    // Triggers handlers to 'dayClick'
    // Span has start/end of the clicked area. Only the start is useful.
    View.prototype.triggerDayClick = function (footprint, dayEl, ev) {
        var dateProfile = this.calendar.footprintToDateProfile(footprint); // abuse of "Event"DateProfile?
        this.publiclyTrigger('dayClick', {
            context: dayEl,
            args: [dateProfile.start, ev, this]
        });
    };
    /* Date Utils
    ------------------------------------------------------------------------------------------------------------------*/
    // For DateComponent::getDayClasses
    View.prototype.isDateInOtherMonth = function (date, dateProfile) {
        return false;
    };
    // Arguments after name will be forwarded to a hypothetical function value
    // WARNING: passed-in arguments will be given to generator functions as-is and can cause side-effects.
    // Always clone your objects if you fear mutation.
    View.prototype.getUnzonedRangeOption = function (name) {
        var val = this.opt(name);
        if (typeof val === 'function') {
            val = val.apply(null, Array.prototype.slice.call(arguments, 1));
        }
        if (val) {
            return this.calendar.parseUnzonedRange(val);
        }
    };
    /* Hidden Days
    ------------------------------------------------------------------------------------------------------------------*/
    // Initializes internal variables related to calculating hidden days-of-week
    View.prototype.initHiddenDays = function () {
        var hiddenDays = this.opt('hiddenDays') || []; // array of day-of-week indices that are hidden
        var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
        var dayCnt = 0;
        var i;
        if (this.opt('weekends') === false) {
            hiddenDays.push(0, 6); // 0=sunday, 6=saturday
        }
        for (i = 0; i < 7; i++) {
            if (!(isHiddenDayHash[i] = $.inArray(i, hiddenDays) !== -1)) {
                dayCnt++;
            }
        }
        if (!dayCnt) {
            throw new Error('invalid hiddenDays'); // all days were hidden? bad.
        }
        this.isHiddenDayHash = isHiddenDayHash;
    };
    // Remove days from the beginning and end of the range that are computed as hidden.
    // If the whole range is trimmed off, returns null
    View.prototype.trimHiddenDays = function (inputUnzonedRange) {
        var start = inputUnzonedRange.getStart();
        var end = inputUnzonedRange.getEnd();
        if (start) {
            start = this.skipHiddenDays(start);
        }
        if (end) {
            end = this.skipHiddenDays(end, -1, true);
        }
        if (start === null || end === null || start < end) {
            return new UnzonedRange_1.default(start, end);
        }
        return null;
    };
    // Is the current day hidden?
    // `day` is a day-of-week index (0-6), or a Moment
    View.prototype.isHiddenDay = function (day) {
        if (moment.isMoment(day)) {
            day = day.day();
        }
        return this.isHiddenDayHash[day];
    };
    // Incrementing the current day until it is no longer a hidden day, returning a copy.
    // DOES NOT CONSIDER validUnzonedRange!
    // If the initial value of `date` is not a hidden day, don't do anything.
    // Pass `isExclusive` as `true` if you are dealing with an end date.
    // `inc` defaults to `1` (increment one day forward each time)
    View.prototype.skipHiddenDays = function (date, inc, isExclusive) {
        if (inc === void 0) { inc = 1; }
        if (isExclusive === void 0) { isExclusive = false; }
        var out = date.clone();
        while (this.isHiddenDayHash[(out.day() + (isExclusive ? inc : 0) + 7) % 7]) {
            out.add(inc, 'days');
        }
        return out;
    };
    return View;
}(InteractiveDateComponent_1.default));
exports.default = View;
View.prototype.usesMinMaxTime = false;
View.prototype.dateProfileGeneratorClass = DateProfileGenerator_1.default;
View.watch('displayingDates', ['isInDom', 'dateProfile'], function (deps) {
    this.requestDateRender(deps.dateProfile);
}, function () {
    this.requestDateUnrender();
});
View.watch('displayingBusinessHours', ['displayingDates', 'businessHourGenerator'], function (deps) {
    this.requestBusinessHoursRender(deps.businessHourGenerator);
}, function () {
    this.requestBusinessHoursUnrender();
});
View.watch('initialEvents', ['dateProfile'], function (deps) {
    return this.fetchInitialEvents(deps.dateProfile);
});
View.watch('bindingEvents', ['initialEvents'], function (deps) {
    this.setEvents(deps.initialEvents);
    this.bindEventChanges();
}, function () {
    this.unbindEventChanges();
    this.unsetEvents();
});
View.watch('displayingEvents', ['displayingDates', 'hasEvents'], function () {
    this.requestEventsRender(this.get('currentEvents'));
}, function () {
    this.requestEventsUnrender();
});
View.watch('title', ['dateProfile'], function (deps) {
    return (this.title = this.computeTitle(deps.dateProfile)); // assign to View for legacy reasons
});
View.watch('legacyDateProps', ['dateProfile'], function (deps) {
    var calendar = this.calendar;
    var dateProfile = deps.dateProfile;
    // DEPRECATED, but we need to keep it updated...
    this.start = calendar.msToMoment(dateProfile.activeUnzonedRange.startMs, dateProfile.isRangeAllDay);
    this.end = calendar.msToMoment(dateProfile.activeUnzonedRange.endMs, dateProfile.isRangeAllDay);
    this.intervalStart = calendar.msToMoment(dateProfile.currentUnzonedRange.startMs, dateProfile.isRangeAllDay);
    this.intervalEnd = calendar.msToMoment(dateProfile.currentUnzonedRange.endMs, dateProfile.isRangeAllDay);
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var EventRenderer = /** @class */ (function () {
    function EventRenderer(component, fillRenderer) {
        this.view = component._getView();
        this.component = component;
        this.fillRenderer = fillRenderer;
    }
    EventRenderer.prototype.opt = function (name) {
        return this.view.opt(name);
    };
    // Updates values that rely on options and also relate to range
    EventRenderer.prototype.rangeUpdated = function () {
        var displayEventTime;
        var displayEventEnd;
        this.eventTimeFormat =
            this.opt('eventTimeFormat') ||
                this.opt('timeFormat') || // deprecated
                this.computeEventTimeFormat();
        displayEventTime = this.opt('displayEventTime');
        if (displayEventTime == null) {
            displayEventTime = this.computeDisplayEventTime(); // might be based off of range
        }
        displayEventEnd = this.opt('displayEventEnd');
        if (displayEventEnd == null) {
            displayEventEnd = this.computeDisplayEventEnd(); // might be based off of range
        }
        this.displayEventTime = displayEventTime;
        this.displayEventEnd = displayEventEnd;
    };
    EventRenderer.prototype.render = function (eventsPayload) {
        var dateProfile = this.component._getDateProfile();
        var eventDefId;
        var instanceGroup;
        var eventRanges;
        var bgRanges = [];
        var fgRanges = [];
        for (eventDefId in eventsPayload) {
            instanceGroup = eventsPayload[eventDefId];
            eventRanges = instanceGroup.sliceRenderRanges(dateProfile.activeUnzonedRange);
            if (instanceGroup.getEventDef().hasBgRendering()) {
                bgRanges.push.apply(bgRanges, eventRanges);
            }
            else {
                fgRanges.push.apply(fgRanges, eventRanges);
            }
        }
        this.renderBgRanges(bgRanges);
        this.renderFgRanges(fgRanges);
    };
    EventRenderer.prototype.unrender = function () {
        this.unrenderBgRanges();
        this.unrenderFgRanges();
    };
    EventRenderer.prototype.renderFgRanges = function (eventRanges) {
        var eventFootprints = this.component.eventRangesToEventFootprints(eventRanges);
        var segs = this.component.eventFootprintsToSegs(eventFootprints);
        // render an `.el` on each seg
        // returns a subset of the segs. segs that were actually rendered
        segs = this.renderFgSegEls(segs);
        if (this.renderFgSegs(segs) !== false) {
            this.fgSegs = segs;
        }
    };
    EventRenderer.prototype.unrenderFgRanges = function () {
        this.unrenderFgSegs(this.fgSegs || []);
        this.fgSegs = null;
    };
    EventRenderer.prototype.renderBgRanges = function (eventRanges) {
        var eventFootprints = this.component.eventRangesToEventFootprints(eventRanges);
        var segs = this.component.eventFootprintsToSegs(eventFootprints);
        if (this.renderBgSegs(segs) !== false) {
            this.bgSegs = segs;
        }
    };
    EventRenderer.prototype.unrenderBgRanges = function () {
        this.unrenderBgSegs();
        this.bgSegs = null;
    };
    EventRenderer.prototype.getSegs = function () {
        return (this.bgSegs || []).concat(this.fgSegs || []);
    };
    // Renders foreground event segments onto the grid
    EventRenderer.prototype.renderFgSegs = function (segs) {
        // subclasses must implement
        // segs already has rendered els, and has been filtered.
        return false; // signal failure if not implemented
    };
    // Unrenders all currently rendered foreground segments
    EventRenderer.prototype.unrenderFgSegs = function (segs) {
        // subclasses must implement
    };
    EventRenderer.prototype.renderBgSegs = function (segs) {
        var _this = this;
        if (this.fillRenderer) {
            this.fillRenderer.renderSegs('bgEvent', segs, {
                getClasses: function (seg) {
                    return _this.getBgClasses(seg.footprint.eventDef);
                },
                getCss: function (seg) {
                    return {
                        'background-color': _this.getBgColor(seg.footprint.eventDef)
                    };
                },
                filterEl: function (seg, el) {
                    return _this.filterEventRenderEl(seg.footprint, el);
                }
            });
        }
        else {
            return false; // signal failure if no fillRenderer
        }
    };
    EventRenderer.prototype.unrenderBgSegs = function () {
        if (this.fillRenderer) {
            this.fillRenderer.unrender('bgEvent');
        }
    };
    // Renders and assigns an `el` property for each foreground event segment.
    // Only returns segments that successfully rendered.
    EventRenderer.prototype.renderFgSegEls = function (segs, disableResizing) {
        var _this = this;
        if (disableResizing === void 0) { disableResizing = false; }
        var hasEventRenderHandlers = this.view.hasPublicHandlers('eventRender');
        var html = '';
        var renderedSegs = [];
        var i;
        if (segs.length) {
            // build a large concatenation of event segment HTML
            for (i = 0; i < segs.length; i++) {
                this.beforeFgSegHtml(segs[i]);
                html += this.fgSegHtml(segs[i], disableResizing);
            }
            // Grab individual elements from the combined HTML string. Use each as the default rendering.
            // Then, compute the 'el' for each segment. An el might be null if the eventRender callback returned false.
            $(html).each(function (i, node) {
                var seg = segs[i];
                var el = $(node);
                if (hasEventRenderHandlers) {
                    el = _this.filterEventRenderEl(seg.footprint, el);
                }
                if (el) {
                    el.data('fc-seg', seg); // used by handlers
                    seg.el = el;
                    renderedSegs.push(seg);
                }
            });
        }
        return renderedSegs;
    };
    EventRenderer.prototype.beforeFgSegHtml = function (seg) {
    };
    // Generates the HTML for the default rendering of a foreground event segment. Used by renderFgSegEls()
    EventRenderer.prototype.fgSegHtml = function (seg, disableResizing) {
        // subclasses should implement
    };
    // Generic utility for generating the HTML classNames for an event segment's element
    EventRenderer.prototype.getSegClasses = function (seg, isDraggable, isResizable) {
        var classes = [
            'fc-event',
            seg.isStart ? 'fc-start' : 'fc-not-start',
            seg.isEnd ? 'fc-end' : 'fc-not-end'
        ].concat(this.getClasses(seg.footprint.eventDef));
        if (isDraggable) {
            classes.push('fc-draggable');
        }
        if (isResizable) {
            classes.push('fc-resizable');
        }
        // event is currently selected? attach a className.
        if (this.view.isEventDefSelected(seg.footprint.eventDef)) {
            classes.push('fc-selected');
        }
        return classes;
    };
    // Given an event and the default element used for rendering, returns the element that should actually be used.
    // Basically runs events and elements through the eventRender hook.
    EventRenderer.prototype.filterEventRenderEl = function (eventFootprint, el) {
        var legacy = eventFootprint.getEventLegacy();
        var custom = this.view.publiclyTrigger('eventRender', {
            context: legacy,
            args: [legacy, el, this.view]
        });
        if (custom === false) {
            el = null;
        }
        else if (custom && custom !== true) {
            el = $(custom);
        }
        return el;
    };
    // Compute the text that should be displayed on an event's element.
    // `range` can be the Event object itself, or something range-like, with at least a `start`.
    // If event times are disabled, or the event has no time, will return a blank string.
    // If not specified, formatStr will default to the eventTimeFormat setting,
    // and displayEnd will default to the displayEventEnd setting.
    EventRenderer.prototype.getTimeText = function (eventFootprint, formatStr, displayEnd) {
        return this._getTimeText(eventFootprint.eventInstance.dateProfile.start, eventFootprint.eventInstance.dateProfile.end, eventFootprint.componentFootprint.isAllDay, formatStr, displayEnd);
    };
    EventRenderer.prototype._getTimeText = function (start, end, isAllDay, formatStr, displayEnd) {
        if (formatStr == null) {
            formatStr = this.eventTimeFormat;
        }
        if (displayEnd == null) {
            displayEnd = this.displayEventEnd;
        }
        if (this.displayEventTime && !isAllDay) {
            if (displayEnd && end) {
                return this.view.formatRange({ start: start, end: end }, false, // allDay
                formatStr);
            }
            else {
                return start.format(formatStr);
            }
        }
        return '';
    };
    EventRenderer.prototype.computeEventTimeFormat = function () {
        return this.opt('smallTimeFormat');
    };
    EventRenderer.prototype.computeDisplayEventTime = function () {
        return true;
    };
    EventRenderer.prototype.computeDisplayEventEnd = function () {
        return true;
    };
    EventRenderer.prototype.getBgClasses = function (eventDef) {
        var classNames = this.getClasses(eventDef);
        classNames.push('fc-bgevent');
        return classNames;
    };
    EventRenderer.prototype.getClasses = function (eventDef) {
        var objs = this.getStylingObjs(eventDef);
        var i;
        var classNames = [];
        for (i = 0; i < objs.length; i++) {
            classNames.push.apply(// append
            classNames, objs[i].eventClassName || objs[i].className || []);
        }
        return classNames;
    };
    // Utility for generating event skin-related CSS properties
    EventRenderer.prototype.getSkinCss = function (eventDef) {
        return {
            'background-color': this.getBgColor(eventDef),
            'border-color': this.getBorderColor(eventDef),
            color: this.getTextColor(eventDef)
        };
    };
    // Queries for caller-specified color, then falls back to default
    EventRenderer.prototype.getBgColor = function (eventDef) {
        var objs = this.getStylingObjs(eventDef);
        var i;
        var val;
        for (i = 0; i < objs.length && !val; i++) {
            val = objs[i].eventBackgroundColor || objs[i].eventColor ||
                objs[i].backgroundColor || objs[i].color;
        }
        if (!val) {
            val = this.opt('eventBackgroundColor') || this.opt('eventColor');
        }
        return val;
    };
    // Queries for caller-specified color, then falls back to default
    EventRenderer.prototype.getBorderColor = function (eventDef) {
        var objs = this.getStylingObjs(eventDef);
        var i;
        var val;
        for (i = 0; i < objs.length && !val; i++) {
            val = objs[i].eventBorderColor || objs[i].eventColor ||
                objs[i].borderColor || objs[i].color;
        }
        if (!val) {
            val = this.opt('eventBorderColor') || this.opt('eventColor');
        }
        return val;
    };
    // Queries for caller-specified color, then falls back to default
    EventRenderer.prototype.getTextColor = function (eventDef) {
        var objs = this.getStylingObjs(eventDef);
        var i;
        var val;
        for (i = 0; i < objs.length && !val; i++) {
            val = objs[i].eventTextColor ||
                objs[i].textColor;
        }
        if (!val) {
            val = this.opt('eventTextColor');
        }
        return val;
    };
    EventRenderer.prototype.getStylingObjs = function (eventDef) {
        var objs = this.getFallbackStylingObjs(eventDef);
        objs.unshift(eventDef);
        return objs;
    };
    EventRenderer.prototype.getFallbackStylingObjs = function (eventDef) {
        return [eventDef.source];
    };
    EventRenderer.prototype.sortEventSegs = function (segs) {
        segs.sort(util_1.proxy(this, 'compareEventSegs'));
    };
    // A cmp function for determining which segments should take visual priority
    EventRenderer.prototype.compareEventSegs = function (seg1, seg2) {
        var f1 = seg1.footprint;
        var f2 = seg2.footprint;
        var cf1 = f1.componentFootprint;
        var cf2 = f2.componentFootprint;
        var r1 = cf1.unzonedRange;
        var r2 = cf2.unzonedRange;
        return r1.startMs - r2.startMs || // earlier events go first
            (r2.endMs - r2.startMs) - (r1.endMs - r1.startMs) || // tie? longer events go first
            cf2.isAllDay - cf1.isAllDay || // tie? put all-day events first (booleans cast to 0/1)
            util_1.compareByFieldSpecs(f1.eventDef, f2.eventDef, this.view.eventOrderSpecs, f1.eventDef.miscProps, f2.eventDef.miscProps);
    };
    return EventRenderer;
}());
exports.default = EventRenderer;


/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment_ext_1 = __webpack_require__(10);
// Plugin
// -------------------------------------------------------------------------------------------------
moment_ext_1.newMomentProto.format = function () {
    if (this._fullCalendar && arguments[0]) {
        return formatDate(this, arguments[0]); // our extended formatting
    }
    if (this._ambigTime) {
        return moment_ext_1.oldMomentFormat(englishMoment(this), 'YYYY-MM-DD');
    }
    if (this._ambigZone) {
        return moment_ext_1.oldMomentFormat(englishMoment(this), 'YYYY-MM-DD[T]HH:mm:ss');
    }
    if (this._fullCalendar) {
        // moment.format() doesn't ensure english, but we want to.
        return moment_ext_1.oldMomentFormat(englishMoment(this));
    }
    return moment_ext_1.oldMomentProto.format.apply(this, arguments);
};
moment_ext_1.newMomentProto.toISOString = function () {
    if (this._ambigTime) {
        return moment_ext_1.oldMomentFormat(englishMoment(this), 'YYYY-MM-DD');
    }
    if (this._ambigZone) {
        return moment_ext_1.oldMomentFormat(englishMoment(this), 'YYYY-MM-DD[T]HH:mm:ss');
    }
    if (this._fullCalendar) {
        // depending on browser, moment might not output english. ensure english.
        // https://github.com/moment/moment/blob/2.18.1/src/lib/moment/format.js#L22
        return moment_ext_1.oldMomentProto.toISOString.apply(englishMoment(this), arguments);
    }
    return moment_ext_1.oldMomentProto.toISOString.apply(this, arguments);
};
function englishMoment(mom) {
    if (mom.locale() !== 'en') {
        return mom.clone().locale('en');
    }
    return mom;
}
// Config
// ---------------------------------------------------------------------------------------------------------------------
/*
Inserted between chunks in the fake ("intermediate") formatting string.
Important that it passes as whitespace (\s) because moment often identifies non-standalone months
via a regexp with an \s.
*/
var PART_SEPARATOR = '\u000b'; // vertical tab
/*
Inserted as the first character of a literal-text chunk to indicate that the literal text is not actually literal text,
but rather, a "special" token that has custom rendering (see specialTokens map).
*/
var SPECIAL_TOKEN_MARKER = '\u001f'; // information separator 1
/*
Inserted at the beginning and end of a span of text that must have non-zero numeric characters.
Handling of these markers is done in a post-processing step at the very end of text rendering.
*/
var MAYBE_MARKER = '\u001e'; // information separator 2
var MAYBE_REGEXP = new RegExp(MAYBE_MARKER + '([^' + MAYBE_MARKER + ']*)' + MAYBE_MARKER, 'g'); // must be global
/*
Addition formatting tokens we want recognized
*/
var specialTokens = {
    t: function (date) {
        return moment_ext_1.oldMomentFormat(date, 'a').charAt(0);
    },
    T: function (date) {
        return moment_ext_1.oldMomentFormat(date, 'A').charAt(0);
    }
};
/*
The first characters of formatting tokens for units that are 1 day or larger.
`value` is for ranking relative size (lower means bigger).
`unit` is a normalized unit, used for comparing moments.
*/
var largeTokenMap = {
    Y: { value: 1, unit: 'year' },
    M: { value: 2, unit: 'month' },
    W: { value: 3, unit: 'week' },
    w: { value: 3, unit: 'week' },
    D: { value: 4, unit: 'day' },
    d: { value: 4, unit: 'day' } // day of week
};
// Single Date Formatting
// ---------------------------------------------------------------------------------------------------------------------
/*
Formats `date` with a Moment formatting string, but allow our non-zero areas and special token
*/
function formatDate(date, formatStr) {
    return renderFakeFormatString(getParsedFormatString(formatStr).fakeFormatString, date);
}
exports.formatDate = formatDate;
// Date Range Formatting
// -------------------------------------------------------------------------------------------------
// TODO: make it work with timezone offset
/*
Using a formatting string meant for a single date, generate a range string, like
"Sep 2 - 9 2013", that intelligently inserts a separator where the dates differ.
If the dates are the same as far as the format string is concerned, just return a single
rendering of one date, without any separator.
*/
function formatRange(date1, date2, formatStr, separator, isRTL) {
    var localeData;
    date1 = moment_ext_1.default.parseZone(date1);
    date2 = moment_ext_1.default.parseZone(date2);
    localeData = date1.localeData();
    // Expand localized format strings, like "LL" -> "MMMM D YYYY".
    // BTW, this is not important for `formatDate` because it is impossible to put custom tokens
    // or non-zero areas in Moment's localized format strings.
    formatStr = localeData.longDateFormat(formatStr) || formatStr;
    return renderParsedFormat(getParsedFormatString(formatStr), date1, date2, separator || ' - ', isRTL);
}
exports.formatRange = formatRange;
/*
Renders a range with an already-parsed format string.
*/
function renderParsedFormat(parsedFormat, date1, date2, separator, isRTL) {
    var sameUnits = parsedFormat.sameUnits;
    var unzonedDate1 = date1.clone().stripZone(); // for same-unit comparisons
    var unzonedDate2 = date2.clone().stripZone(); // "
    var renderedParts1 = renderFakeFormatStringParts(parsedFormat.fakeFormatString, date1);
    var renderedParts2 = renderFakeFormatStringParts(parsedFormat.fakeFormatString, date2);
    var leftI;
    var leftStr = '';
    var rightI;
    var rightStr = '';
    var middleI;
    var middleStr1 = '';
    var middleStr2 = '';
    var middleStr = '';
    // Start at the leftmost side of the formatting string and continue until you hit a token
    // that is not the same between dates.
    for (leftI = 0; leftI < sameUnits.length && (!sameUnits[leftI] || unzonedDate1.isSame(unzonedDate2, sameUnits[leftI])); leftI++) {
        leftStr += renderedParts1[leftI];
    }
    // Similarly, start at the rightmost side of the formatting string and move left
    for (rightI = sameUnits.length - 1; rightI > leftI && (!sameUnits[rightI] || unzonedDate1.isSame(unzonedDate2, sameUnits[rightI])); rightI--) {
        // If current chunk is on the boundary of unique date-content, and is a special-case
        // date-formatting postfix character, then don't consume it. Consider it unique date-content.
        // TODO: make configurable
        if (rightI - 1 === leftI && renderedParts1[rightI] === '.') {
            break;
        }
        rightStr = renderedParts1[rightI] + rightStr;
    }
    // The area in the middle is different for both of the dates.
    // Collect them distinctly so we can jam them together later.
    for (middleI = leftI; middleI <= rightI; middleI++) {
        middleStr1 += renderedParts1[middleI];
        middleStr2 += renderedParts2[middleI];
    }
    if (middleStr1 || middleStr2) {
        if (isRTL) {
            middleStr = middleStr2 + separator + middleStr1;
        }
        else {
            middleStr = middleStr1 + separator + middleStr2;
        }
    }
    return processMaybeMarkers(leftStr + middleStr + rightStr);
}
// Format String Parsing
// ---------------------------------------------------------------------------------------------------------------------
var parsedFormatStrCache = {};
/*
Returns a parsed format string, leveraging a cache.
*/
function getParsedFormatString(formatStr) {
    return parsedFormatStrCache[formatStr] ||
        (parsedFormatStrCache[formatStr] = parseFormatString(formatStr));
}
/*
Parses a format string into the following:
- fakeFormatString: a momentJS formatting string, littered with special control characters that get post-processed.
- sameUnits: for every part in fakeFormatString, if the part is a token, the value will be a unit string (like "day"),
  that indicates how similar a range's start & end must be in order to share the same formatted text.
  If not a token, then the value is null.
  Always a flat array (not nested liked "chunks").
*/
function parseFormatString(formatStr) {
    var chunks = chunkFormatString(formatStr);
    return {
        fakeFormatString: buildFakeFormatString(chunks),
        sameUnits: buildSameUnits(chunks)
    };
}
/*
Break the formatting string into an array of chunks.
A 'maybe' chunk will have nested chunks.
*/
function chunkFormatString(formatStr) {
    var chunks = [];
    var match;
    // TODO: more descrimination
    // \4 is a backreference to the first character of a multi-character set.
    var chunker = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g;
    while ((match = chunker.exec(formatStr))) {
        if (match[1]) {
            chunks.push.apply(chunks, // append
            splitStringLiteral(match[1]));
        }
        else if (match[2]) {
            chunks.push({ maybe: chunkFormatString(match[2]) });
        }
        else if (match[3]) {
            chunks.push({ token: match[3] });
        }
        else if (match[5]) {
            chunks.push.apply(chunks, // append
            splitStringLiteral(match[5]));
        }
    }
    return chunks;
}
/*
Potentially splits a literal-text string into multiple parts. For special cases.
*/
function splitStringLiteral(s) {
    if (s === '. ') {
        return ['.', ' ']; // for locales with periods bound to the end of each year/month/date
    }
    else {
        return [s];
    }
}
/*
Given chunks parsed from a real format string, generate a fake (aka "intermediate") format string with special control
characters that will eventually be given to moment for formatting, and then post-processed.
*/
function buildFakeFormatString(chunks) {
    var parts = [];
    var i;
    var chunk;
    for (i = 0; i < chunks.length; i++) {
        chunk = chunks[i];
        if (typeof chunk === 'string') {
            parts.push('[' + chunk + ']');
        }
        else if (chunk.token) {
            if (chunk.token in specialTokens) {
                parts.push(SPECIAL_TOKEN_MARKER + // useful during post-processing
                    '[' + chunk.token + ']' // preserve as literal text
                );
            }
            else {
                parts.push(chunk.token); // unprotected text implies a format string
            }
        }
        else if (chunk.maybe) {
            parts.push(MAYBE_MARKER + // useful during post-processing
                buildFakeFormatString(chunk.maybe) +
                MAYBE_MARKER);
        }
    }
    return parts.join(PART_SEPARATOR);
}
/*
Given parsed chunks from a real formatting string, generates an array of unit strings (like "day") that indicate
in which regard two dates must be similar in order to share range formatting text.
The `chunks` can be nested (because of "maybe" chunks), however, the returned array will be flat.
*/
function buildSameUnits(chunks) {
    var units = [];
    var i;
    var chunk;
    var tokenInfo;
    for (i = 0; i < chunks.length; i++) {
        chunk = chunks[i];
        if (chunk.token) {
            tokenInfo = largeTokenMap[chunk.token.charAt(0)];
            units.push(tokenInfo ? tokenInfo.unit : 'second'); // default to a very strict same-second
        }
        else if (chunk.maybe) {
            units.push.apply(units, // append
            buildSameUnits(chunk.maybe));
        }
        else {
            units.push(null);
        }
    }
    return units;
}
// Rendering to text
// ---------------------------------------------------------------------------------------------------------------------
/*
Formats a date with a fake format string, post-processes the control characters, then returns.
*/
function renderFakeFormatString(fakeFormatString, date) {
    return processMaybeMarkers(renderFakeFormatStringParts(fakeFormatString, date).join(''));
}
/*
Formats a date into parts that will have been post-processed, EXCEPT for the "maybe" markers.
*/
function renderFakeFormatStringParts(fakeFormatString, date) {
    var parts = [];
    var fakeRender = moment_ext_1.oldMomentFormat(date, fakeFormatString);
    var fakeParts = fakeRender.split(PART_SEPARATOR);
    var i;
    var fakePart;
    for (i = 0; i < fakeParts.length; i++) {
        fakePart = fakeParts[i];
        if (fakePart.charAt(0) === SPECIAL_TOKEN_MARKER) {
            parts.push(
            // the literal string IS the token's name.
            // call special token's registered function.
            specialTokens[fakePart.substring(1)](date));
        }
        else {
            parts.push(fakePart);
        }
    }
    return parts;
}
/*
Accepts an almost-finally-formatted string and processes the "maybe" control characters, returning a new string.
*/
function processMaybeMarkers(s) {
    return s.replace(MAYBE_REGEXP, function (m0, m1) {
        if (m1.match(/[1-9]/)) {
            return m1;
        }
        else {
            return '';
        }
    });
}
// Misc Utils
// -------------------------------------------------------------------------------------------------
/*
Returns a unit string, either 'year', 'month', 'day', or null for the most granular formatting token in the string.
*/
function queryMostGranularFormatUnit(formatStr) {
    var chunks = chunkFormatString(formatStr);
    var i;
    var chunk;
    var candidate;
    var best;
    for (i = 0; i < chunks.length; i++) {
        chunk = chunks[i];
        if (chunk.token) {
            candidate = largeTokenMap[chunk.token.charAt(0)];
            if (candidate) {
                if (!best || candidate.value > best.value) {
                    best = candidate;
                }
            }
        }
    }
    if (best) {
        return best.unit;
    }
    return null;
}
exports.queryMostGranularFormatUnit = queryMostGranularFormatUnit;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Class_1 = __webpack_require__(33);
var EmitterMixin_1 = __webpack_require__(11);
var ListenerMixin_1 = __webpack_require__(7);
var Model = /** @class */ (function (_super) {
    tslib_1.__extends(Model, _super);
    function Model() {
        var _this = _super.call(this) || this;
        _this._watchers = {};
        _this._props = {};
        _this.applyGlobalWatchers();
        _this.constructed();
        return _this;
    }
    Model.watch = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // subclasses should make a masked-copy of the superclass's map
        // TODO: write test
        if (!this.prototype.hasOwnProperty('_globalWatchArgs')) {
            this.prototype._globalWatchArgs = Object.create(this.prototype._globalWatchArgs);
        }
        this.prototype._globalWatchArgs[name] = args;
    };
    Model.prototype.constructed = function () {
        // useful for monkeypatching. TODO: BaseClass?
    };
    Model.prototype.applyGlobalWatchers = function () {
        var map = this._globalWatchArgs;
        var name;
        for (name in map) {
            this.watch.apply(this, [name].concat(map[name]));
        }
    };
    Model.prototype.has = function (name) {
        return name in this._props;
    };
    Model.prototype.get = function (name) {
        if (name === undefined) {
            return this._props;
        }
        return this._props[name];
    };
    Model.prototype.set = function (name, val) {
        var newProps;
        if (typeof name === 'string') {
            newProps = {};
            newProps[name] = val === undefined ? null : val;
        }
        else {
            newProps = name;
        }
        this.setProps(newProps);
    };
    Model.prototype.reset = function (newProps) {
        var oldProps = this._props;
        var changeset = {}; // will have undefined's to signal unsets
        var name;
        for (name in oldProps) {
            changeset[name] = undefined;
        }
        for (name in newProps) {
            changeset[name] = newProps[name];
        }
        this.setProps(changeset);
    };
    Model.prototype.unset = function (name) {
        var newProps = {};
        var names;
        var i;
        if (typeof name === 'string') {
            names = [name];
        }
        else {
            names = name;
        }
        for (i = 0; i < names.length; i++) {
            newProps[names[i]] = undefined;
        }
        this.setProps(newProps);
    };
    Model.prototype.setProps = function (newProps) {
        var changedProps = {};
        var changedCnt = 0;
        var name;
        var val;
        for (name in newProps) {
            val = newProps[name];
            // a change in value?
            // if an object, don't check equality, because might have been mutated internally.
            // TODO: eventually enforce immutability.
            if (typeof val === 'object' ||
                val !== this._props[name]) {
                changedProps[name] = val;
                changedCnt++;
            }
        }
        if (changedCnt) {
            this.trigger('before:batchChange', changedProps);
            for (name in changedProps) {
                val = changedProps[name];
                this.trigger('before:change', name, val);
                this.trigger('before:change:' + name, val);
            }
            for (name in changedProps) {
                val = changedProps[name];
                if (val === undefined) {
                    delete this._props[name];
                }
                else {
                    this._props[name] = val;
                }
                this.trigger('change:' + name, val);
                this.trigger('change', name, val);
            }
            this.trigger('batchChange', changedProps);
        }
    };
    Model.prototype.watch = function (name, depList, startFunc, stopFunc) {
        var _this = this;
        this.unwatch(name);
        this._watchers[name] = this._watchDeps(depList, function (deps) {
            var res = startFunc.call(_this, deps);
            if (res && res.then) {
                _this.unset(name); // put in an unset state while resolving
                res.then(function (val) {
                    _this.set(name, val);
                });
            }
            else {
                _this.set(name, res);
            }
        }, function (deps) {
            _this.unset(name);
            if (stopFunc) {
                stopFunc.call(_this, deps);
            }
        });
    };
    Model.prototype.unwatch = function (name) {
        var watcher = this._watchers[name];
        if (watcher) {
            delete this._watchers[name];
            watcher.teardown();
        }
    };
    Model.prototype._watchDeps = function (depList, startFunc, stopFunc) {
        var _this = this;
        var queuedChangeCnt = 0;
        var depCnt = depList.length;
        var satisfyCnt = 0;
        var values = {}; // what's passed as the `deps` arguments
        var bindTuples = []; // array of [ eventName, handlerFunc ] arrays
        var isCallingStop = false;
        var onBeforeDepChange = function (depName, val, isOptional) {
            queuedChangeCnt++;
            if (queuedChangeCnt === 1) {
                if (satisfyCnt === depCnt) {
                    isCallingStop = true;
                    stopFunc(values);
                    isCallingStop = false;
                }
            }
        };
        var onDepChange = function (depName, val, isOptional) {
            if (val === undefined) {
                // required dependency that was previously set?
                if (!isOptional && values[depName] !== undefined) {
                    satisfyCnt--;
                }
                delete values[depName];
            }
            else {
                // required dependency that was previously unset?
                if (!isOptional && values[depName] === undefined) {
                    satisfyCnt++;
                }
                values[depName] = val;
            }
            queuedChangeCnt--;
            if (!queuedChangeCnt) {
                // now finally satisfied or satisfied all along?
                if (satisfyCnt === depCnt) {
                    // if the stopFunc initiated another value change, ignore it.
                    // it will be processed by another change event anyway.
                    if (!isCallingStop) {
                        startFunc(values);
                    }
                }
            }
        };
        // intercept for .on() that remembers handlers
        var bind = function (eventName, handler) {
            _this.on(eventName, handler);
            bindTuples.push([eventName, handler]);
        };
        // listen to dependency changes
        depList.forEach(function (depName) {
            var isOptional = false;
            if (depName.charAt(0) === '?') {
                depName = depName.substring(1);
                isOptional = true;
            }
            bind('before:change:' + depName, function (val) {
                onBeforeDepChange(depName, val, isOptional);
            });
            bind('change:' + depName, function (val) {
                onDepChange(depName, val, isOptional);
            });
        });
        // process current dependency values
        depList.forEach(function (depName) {
            var isOptional = false;
            if (depName.charAt(0) === '?') {
                depName = depName.substring(1);
                isOptional = true;
            }
            if (_this.has(depName)) {
                values[depName] = _this.get(depName);
                satisfyCnt++;
            }
            else if (isOptional) {
                satisfyCnt++;
            }
        });
        // initially satisfied
        if (satisfyCnt === depCnt) {
            startFunc(values);
        }
        return {
            teardown: function () {
                // remove all handlers
                for (var i = 0; i < bindTuples.length; i++) {
                    _this.off(bindTuples[i][0], bindTuples[i][1]);
                }
                bindTuples = null;
                // was satisfied, so call stopFunc
                if (satisfyCnt === depCnt) {
                    stopFunc();
                }
            },
            flash: function () {
                if (satisfyCnt === depCnt) {
                    stopFunc();
                    startFunc(values);
                }
            }
        };
    };
    Model.prototype.flash = function (name) {
        var watcher = this._watchers[name];
        if (watcher) {
            watcher.flash();
        }
    };
    return Model;
}(Class_1.default));
exports.default = Model;
Model.prototype._globalWatchArgs = {}; // mutation protection in Model.watch
EmitterMixin_1.default.mixInto(Model);
ListenerMixin_1.default.mixInto(Model);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var SingleEventDef_1 = __webpack_require__(13);
var RecurringEventDef_1 = __webpack_require__(210);
exports.default = {
    parse: function (eventInput, source) {
        if (util_1.isTimeString(eventInput.start) || moment.isDuration(eventInput.start) ||
            util_1.isTimeString(eventInput.end) || moment.isDuration(eventInput.end)) {
            return RecurringEventDef_1.default.parse(eventInput, source);
        }
        else {
            return SingleEventDef_1.default.parse(eventInput, source);
        }
    }
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(4);
var EventDateProfile_1 = __webpack_require__(17);
var EventDefDateMutation = /** @class */ (function () {
    function EventDefDateMutation() {
        this.clearEnd = false;
        this.forceTimed = false;
        this.forceAllDay = false;
    }
    EventDefDateMutation.createFromDiff = function (dateProfile0, dateProfile1, largeUnit) {
        var clearEnd = dateProfile0.end && !dateProfile1.end;
        var forceTimed = dateProfile0.isAllDay() && !dateProfile1.isAllDay();
        var forceAllDay = !dateProfile0.isAllDay() && dateProfile1.isAllDay();
        var dateDelta;
        var endDiff;
        var endDelta;
        var mutation;
        // subtracts the dates in the appropriate way, returning a duration
        function subtractDates(date1, date0) {
            if (largeUnit) {
                return util_1.diffByUnit(date1, date0, largeUnit); // poorly named
            }
            else if (dateProfile1.isAllDay()) {
                return util_1.diffDay(date1, date0); // poorly named
            }
            else {
                return util_1.diffDayTime(date1, date0); // poorly named
            }
        }
        dateDelta = subtractDates(dateProfile1.start, dateProfile0.start);
        if (dateProfile1.end) {
            // use unzonedRanges because dateProfile0.end might be null
            endDiff = subtractDates(dateProfile1.unzonedRange.getEnd(), dateProfile0.unzonedRange.getEnd());
            endDelta = endDiff.subtract(dateDelta);
        }
        mutation = new EventDefDateMutation();
        mutation.clearEnd = clearEnd;
        mutation.forceTimed = forceTimed;
        mutation.forceAllDay = forceAllDay;
        mutation.setDateDelta(dateDelta);
        mutation.setEndDelta(endDelta);
        return mutation;
    };
    /*
    returns an undo function.
    */
    EventDefDateMutation.prototype.buildNewDateProfile = function (eventDateProfile, calendar) {
        var start = eventDateProfile.start.clone();
        var end = null;
        var shouldRezone = false;
        if (eventDateProfile.end && !this.clearEnd) {
            end = eventDateProfile.end.clone();
        }
        else if (this.endDelta && !end) {
            end = calendar.getDefaultEventEnd(eventDateProfile.isAllDay(), start);
        }
        if (this.forceTimed) {
            shouldRezone = true;
            if (!start.hasTime()) {
                start.time(0);
            }
            if (end && !end.hasTime()) {
                end.time(0);
            }
        }
        else if (this.forceAllDay) {
            if (start.hasTime()) {
                start.stripTime();
            }
            if (end && end.hasTime()) {
                end.stripTime();
            }
        }
        if (this.dateDelta) {
            shouldRezone = true;
            start.add(this.dateDelta);
            if (end) {
                end.add(this.dateDelta);
            }
        }
        // do this before adding startDelta to start, so we can work off of start
        if (this.endDelta) {
            shouldRezone = true;
            end.add(this.endDelta);
        }
        if (this.startDelta) {
            shouldRezone = true;
            start.add(this.startDelta);
        }
        if (shouldRezone) {
            start = calendar.applyTimezone(start);
            if (end) {
                end = calendar.applyTimezone(end);
            }
        }
        // TODO: okay to access calendar option?
        if (!end && calendar.opt('forceEventDuration')) {
            end = calendar.getDefaultEventEnd(eventDateProfile.isAllDay(), start);
        }
        return new EventDateProfile_1.default(start, end, calendar);
    };
    EventDefDateMutation.prototype.setDateDelta = function (dateDelta) {
        if (dateDelta && dateDelta.valueOf()) {
            this.dateDelta = dateDelta;
        }
        else {
            this.dateDelta = null;
        }
    };
    EventDefDateMutation.prototype.setStartDelta = function (startDelta) {
        if (startDelta && startDelta.valueOf()) {
            this.startDelta = startDelta;
        }
        else {
            this.startDelta = null;
        }
    };
    EventDefDateMutation.prototype.setEndDelta = function (endDelta) {
        if (endDelta && endDelta.valueOf()) {
            this.endDelta = endDelta;
        }
        else {
            this.endDelta = null;
        }
    };
    EventDefDateMutation.prototype.isEmpty = function () {
        return !this.clearEnd && !this.forceTimed && !this.forceAllDay &&
            !this.dateDelta && !this.startDelta && !this.endDelta;
    };
    return EventDefDateMutation;
}());
exports.default = EventDefDateMutation;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var StandardTheme_1 = __webpack_require__(213);
var JqueryUiTheme_1 = __webpack_require__(214);
var themeClassHash = {};
function defineThemeSystem(themeName, themeClass) {
    themeClassHash[themeName] = themeClass;
}
exports.defineThemeSystem = defineThemeSystem;
function getThemeSystemClass(themeSetting) {
    if (!themeSetting) {
        return StandardTheme_1.default;
    }
    else if (themeSetting === true) {
        return JqueryUiTheme_1.default;
    }
    else {
        return themeClassHash[themeSetting];
    }
}
exports.getThemeSystemClass = getThemeSystemClass;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var Promise_1 = __webpack_require__(20);
var EventSource_1 = __webpack_require__(6);
var SingleEventDef_1 = __webpack_require__(13);
var ArrayEventSource = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayEventSource, _super);
    function ArrayEventSource(calendar) {
        var _this = _super.call(this, calendar) || this;
        _this.eventDefs = []; // for if setRawEventDefs is never called
        return _this;
    }
    ArrayEventSource.parse = function (rawInput, calendar) {
        var rawProps;
        // normalize raw input
        if ($.isArray(rawInput.events)) {
            rawProps = rawInput;
        }
        else if ($.isArray(rawInput)) {
            rawProps = { events: rawInput };
        }
        if (rawProps) {
            return EventSource_1.default.parse.call(this, rawProps, calendar);
        }
        return false;
    };
    ArrayEventSource.prototype.setRawEventDefs = function (rawEventDefs) {
        this.rawEventDefs = rawEventDefs;
        this.eventDefs = this.parseEventDefs(rawEventDefs);
    };
    ArrayEventSource.prototype.fetch = function (start, end, timezone) {
        var eventDefs = this.eventDefs;
        var i;
        if (this.currentTimezone != null &&
            this.currentTimezone !== timezone) {
            for (i = 0; i < eventDefs.length; i++) {
                if (eventDefs[i] instanceof SingleEventDef_1.default) {
                    eventDefs[i].rezone();
                }
            }
        }
        this.currentTimezone = timezone;
        return Promise_1.default.resolve(eventDefs);
    };
    ArrayEventSource.prototype.addEventDef = function (eventDef) {
        this.eventDefs.push(eventDef);
    };
    /*
    eventDefId already normalized to a string
    */
    ArrayEventSource.prototype.removeEventDefsById = function (eventDefId) {
        return util_1.removeMatching(this.eventDefs, function (eventDef) {
            return eventDef.id === eventDefId;
        });
    };
    ArrayEventSource.prototype.removeAllEventDefs = function () {
        this.eventDefs = [];
    };
    ArrayEventSource.prototype.getPrimitive = function () {
        return this.rawEventDefs;
    };
    ArrayEventSource.prototype.applyManualStandardProps = function (rawProps) {
        var superSuccess = _super.prototype.applyManualStandardProps.call(this, rawProps);
        this.setRawEventDefs(rawProps.events);
        return superSuccess;
    };
    return ArrayEventSource;
}(EventSource_1.default));
exports.default = ArrayEventSource;
ArrayEventSource.defineStandardProps({
    events: false // don't automatically transfer
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
/*
A cache for the left/right/top/bottom/width/height values for one or more elements.
Works with both offset (from topleft document) and position (from offsetParent).

options:
- els
- isHorizontal
- isVertical
*/
var CoordCache = /** @class */ (function () {
    function CoordCache(options) {
        this.isHorizontal = false; // whether to query for left/right/width
        this.isVertical = false; // whether to query for top/bottom/height
        this.els = $(options.els);
        this.isHorizontal = options.isHorizontal;
        this.isVertical = options.isVertical;
        this.forcedOffsetParentEl = options.offsetParent ? $(options.offsetParent) : null;
    }
    // Queries the els for coordinates and stores them.
    // Call this method before using and of the get* methods below.
    CoordCache.prototype.build = function () {
        var offsetParentEl = this.forcedOffsetParentEl;
        if (!offsetParentEl && this.els.length > 0) {
            offsetParentEl = this.els.eq(0).offsetParent();
        }
        this.origin = offsetParentEl ?
            offsetParentEl.offset() :
            null;
        this.boundingRect = this.queryBoundingRect();
        if (this.isHorizontal) {
            this.buildElHorizontals();
        }
        if (this.isVertical) {
            this.buildElVerticals();
        }
    };
    // Destroys all internal data about coordinates, freeing memory
    CoordCache.prototype.clear = function () {
        this.origin = null;
        this.boundingRect = null;
        this.lefts = null;
        this.rights = null;
        this.tops = null;
        this.bottoms = null;
    };
    // When called, if coord caches aren't built, builds them
    CoordCache.prototype.ensureBuilt = function () {
        if (!this.origin) {
            this.build();
        }
    };
    // Populates the left/right internal coordinate arrays
    CoordCache.prototype.buildElHorizontals = function () {
        var lefts = [];
        var rights = [];
        this.els.each(function (i, node) {
            var el = $(node);
            var left = el.offset().left;
            var width = el.outerWidth();
            lefts.push(left);
            rights.push(left + width);
        });
        this.lefts = lefts;
        this.rights = rights;
    };
    // Populates the top/bottom internal coordinate arrays
    CoordCache.prototype.buildElVerticals = function () {
        var tops = [];
        var bottoms = [];
        this.els.each(function (i, node) {
            var el = $(node);
            var top = el.offset().top;
            var height = el.outerHeight();
            tops.push(top);
            bottoms.push(top + height);
        });
        this.tops = tops;
        this.bottoms = bottoms;
    };
    // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
    // If no intersection is made, returns undefined.
    CoordCache.prototype.getHorizontalIndex = function (leftOffset) {
        this.ensureBuilt();
        var lefts = this.lefts;
        var rights = this.rights;
        var len = lefts.length;
        var i;
        for (i = 0; i < len; i++) {
            if (leftOffset >= lefts[i] && leftOffset < rights[i]) {
                return i;
            }
        }
    };
    // Given a top offset (from document top), returns the index of the el that it vertically intersects.
    // If no intersection is made, returns undefined.
    CoordCache.prototype.getVerticalIndex = function (topOffset) {
        this.ensureBuilt();
        var tops = this.tops;
        var bottoms = this.bottoms;
        var len = tops.length;
        var i;
        for (i = 0; i < len; i++) {
            if (topOffset >= tops[i] && topOffset < bottoms[i]) {
                return i;
            }
        }
    };
    // Gets the left offset (from document left) of the element at the given index
    CoordCache.prototype.getLeftOffset = function (leftIndex) {
        this.ensureBuilt();
        return this.lefts[leftIndex];
    };
    // Gets the left position (from offsetParent left) of the element at the given index
    CoordCache.prototype.getLeftPosition = function (leftIndex) {
        this.ensureBuilt();
        return this.lefts[leftIndex] - this.origin.left;
    };
    // Gets the right offset (from document left) of the element at the given index.
    // This value is NOT relative to the document's right edge, like the CSS concept of "right" would be.
    CoordCache.prototype.getRightOffset = function (leftIndex) {
        this.ensureBuilt();
        return this.rights[leftIndex];
    };
    // Gets the right position (from offsetParent left) of the element at the given index.
    // This value is NOT relative to the offsetParent's right edge, like the CSS concept of "right" would be.
    CoordCache.prototype.getRightPosition = function (leftIndex) {
        this.ensureBuilt();
        return this.rights[leftIndex] - this.origin.left;
    };
    // Gets the width of the element at the given index
    CoordCache.prototype.getWidth = function (leftIndex) {
        this.ensureBuilt();
        return this.rights[leftIndex] - this.lefts[leftIndex];
    };
    // Gets the top offset (from document top) of the element at the given index
    CoordCache.prototype.getTopOffset = function (topIndex) {
        this.ensureBuilt();
        return this.tops[topIndex];
    };
    // Gets the top position (from offsetParent top) of the element at the given position
    CoordCache.prototype.getTopPosition = function (topIndex) {
        this.ensureBuilt();
        return this.tops[topIndex] - this.origin.top;
    };
    // Gets the bottom offset (from the document top) of the element at the given index.
    // This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
    CoordCache.prototype.getBottomOffset = function (topIndex) {
        this.ensureBuilt();
        return this.bottoms[topIndex];
    };
    // Gets the bottom position (from the offsetParent top) of the element at the given index.
    // This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
    CoordCache.prototype.getBottomPosition = function (topIndex) {
        this.ensureBuilt();
        return this.bottoms[topIndex] - this.origin.top;
    };
    // Gets the height of the element at the given index
    CoordCache.prototype.getHeight = function (topIndex) {
        this.ensureBuilt();
        return this.bottoms[topIndex] - this.tops[topIndex];
    };
    // Bounding Rect
    // TODO: decouple this from CoordCache
    // Compute and return what the elements' bounding rectangle is, from the user's perspective.
    // Right now, only returns a rectangle if constrained by an overflow:scroll element.
    // Returns null if there are no elements
    CoordCache.prototype.queryBoundingRect = function () {
        var scrollParentEl;
        if (this.els.length > 0) {
            scrollParentEl = util_1.getScrollParent(this.els.eq(0));
            if (!scrollParentEl.is(document)) {
                return util_1.getClientRect(scrollParentEl);
            }
        }
        return null;
    };
    CoordCache.prototype.isPointInBounds = function (leftOffset, topOffset) {
        return this.isLeftInBounds(leftOffset) && this.isTopInBounds(topOffset);
    };
    CoordCache.prototype.isLeftInBounds = function (leftOffset) {
        return !this.boundingRect || (leftOffset >= this.boundingRect.left && leftOffset < this.boundingRect.right);
    };
    CoordCache.prototype.isTopInBounds = function (topOffset) {
        return !this.boundingRect || (topOffset >= this.boundingRect.top && topOffset < this.boundingRect.bottom);
    };
    return CoordCache;
}());
exports.default = CoordCache;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var ListenerMixin_1 = __webpack_require__(7);
var GlobalEmitter_1 = __webpack_require__(21);
/* Tracks a drag's mouse movement, firing various handlers
----------------------------------------------------------------------------------------------------------------------*/
// TODO: use Emitter
var DragListener = /** @class */ (function () {
    function DragListener(options) {
        this.isInteracting = false;
        this.isDistanceSurpassed = false;
        this.isDelayEnded = false;
        this.isDragging = false;
        this.isTouch = false;
        this.isGeneric = false; // initiated by 'dragstart' (jqui)
        this.shouldCancelTouchScroll = true;
        this.scrollAlwaysKills = false;
        this.isAutoScroll = false;
        // defaults
        this.scrollSensitivity = 30; // pixels from edge for scrolling to start
        this.scrollSpeed = 200; // pixels per second, at maximum speed
        this.scrollIntervalMs = 50; // millisecond wait between scroll increment
        this.options = options || {};
    }
    // Interaction (high-level)
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.startInteraction = function (ev, extraOptions) {
        if (extraOptions === void 0) { extraOptions = {}; }
        if (ev.type === 'mousedown') {
            if (GlobalEmitter_1.default.get().shouldIgnoreMouse()) {
                return;
            }
            else if (!util_1.isPrimaryMouseButton(ev)) {
                return;
            }
            else {
                ev.preventDefault(); // prevents native selection in most browsers
            }
        }
        if (!this.isInteracting) {
            // process options
            this.delay = util_1.firstDefined(extraOptions.delay, this.options.delay, 0);
            this.minDistance = util_1.firstDefined(extraOptions.distance, this.options.distance, 0);
            this.subjectEl = this.options.subjectEl;
            util_1.preventSelection($('body'));
            this.isInteracting = true;
            this.isTouch = util_1.getEvIsTouch(ev);
            this.isGeneric = ev.type === 'dragstart';
            this.isDelayEnded = false;
            this.isDistanceSurpassed = false;
            this.originX = util_1.getEvX(ev);
            this.originY = util_1.getEvY(ev);
            this.scrollEl = util_1.getScrollParent($(ev.target));
            this.bindHandlers();
            this.initAutoScroll();
            this.handleInteractionStart(ev);
            this.startDelay(ev);
            if (!this.minDistance) {
                this.handleDistanceSurpassed(ev);
            }
        }
    };
    DragListener.prototype.handleInteractionStart = function (ev) {
        this.trigger('interactionStart', ev);
    };
    DragListener.prototype.endInteraction = function (ev, isCancelled) {
        if (this.isInteracting) {
            this.endDrag(ev);
            if (this.delayTimeoutId) {
                clearTimeout(this.delayTimeoutId);
                this.delayTimeoutId = null;
            }
            this.destroyAutoScroll();
            this.unbindHandlers();
            this.isInteracting = false;
            this.handleInteractionEnd(ev, isCancelled);
            util_1.allowSelection($('body'));
        }
    };
    DragListener.prototype.handleInteractionEnd = function (ev, isCancelled) {
        this.trigger('interactionEnd', ev, isCancelled || false);
    };
    // Binding To DOM
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.bindHandlers = function () {
        // some browsers (Safari in iOS 10) don't allow preventDefault on touch events that are bound after touchstart,
        // so listen to the GlobalEmitter singleton, which is always bound, instead of the document directly.
        var globalEmitter = GlobalEmitter_1.default.get();
        if (this.isGeneric) {
            this.listenTo($(document), {
                drag: this.handleMove,
                dragstop: this.endInteraction
            });
        }
        else if (this.isTouch) {
            this.listenTo(globalEmitter, {
                touchmove: this.handleTouchMove,
                touchend: this.endInteraction,
                scroll: this.handleTouchScroll
            });
        }
        else {
            this.listenTo(globalEmitter, {
                mousemove: this.handleMouseMove,
                mouseup: this.endInteraction
            });
        }
        this.listenTo(globalEmitter, {
            selectstart: util_1.preventDefault,
            contextmenu: util_1.preventDefault // long taps would open menu on Chrome dev tools
        });
    };
    DragListener.prototype.unbindHandlers = function () {
        this.stopListeningTo(GlobalEmitter_1.default.get());
        this.stopListeningTo($(document)); // for isGeneric
    };
    // Drag (high-level)
    // -----------------------------------------------------------------------------------------------------------------
    // extraOptions ignored if drag already started
    DragListener.prototype.startDrag = function (ev, extraOptions) {
        this.startInteraction(ev, extraOptions); // ensure interaction began
        if (!this.isDragging) {
            this.isDragging = true;
            this.handleDragStart(ev);
        }
    };
    DragListener.prototype.handleDragStart = function (ev) {
        this.trigger('dragStart', ev);
    };
    DragListener.prototype.handleMove = function (ev) {
        var dx = util_1.getEvX(ev) - this.originX;
        var dy = util_1.getEvY(ev) - this.originY;
        var minDistance = this.minDistance;
        var distanceSq; // current distance from the origin, squared
        if (!this.isDistanceSurpassed) {
            distanceSq = dx * dx + dy * dy;
            if (distanceSq >= minDistance * minDistance) {
                this.handleDistanceSurpassed(ev);
            }
        }
        if (this.isDragging) {
            this.handleDrag(dx, dy, ev);
        }
    };
    // Called while the mouse is being moved and when we know a legitimate drag is taking place
    DragListener.prototype.handleDrag = function (dx, dy, ev) {
        this.trigger('drag', dx, dy, ev);
        this.updateAutoScroll(ev); // will possibly cause scrolling
    };
    DragListener.prototype.endDrag = function (ev) {
        if (this.isDragging) {
            this.isDragging = false;
            this.handleDragEnd(ev);
        }
    };
    DragListener.prototype.handleDragEnd = function (ev) {
        this.trigger('dragEnd', ev);
    };
    // Delay
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.startDelay = function (initialEv) {
        var _this = this;
        if (this.delay) {
            this.delayTimeoutId = setTimeout(function () {
                _this.handleDelayEnd(initialEv);
            }, this.delay);
        }
        else {
            this.handleDelayEnd(initialEv);
        }
    };
    DragListener.prototype.handleDelayEnd = function (initialEv) {
        this.isDelayEnded = true;
        if (this.isDistanceSurpassed) {
            this.startDrag(initialEv);
        }
    };
    // Distance
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.handleDistanceSurpassed = function (ev) {
        this.isDistanceSurpassed = true;
        if (this.isDelayEnded) {
            this.startDrag(ev);
        }
    };
    // Mouse / Touch
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.handleTouchMove = function (ev) {
        // prevent inertia and touchmove-scrolling while dragging
        if (this.isDragging && this.shouldCancelTouchScroll) {
            ev.preventDefault();
        }
        this.handleMove(ev);
    };
    DragListener.prototype.handleMouseMove = function (ev) {
        this.handleMove(ev);
    };
    // Scrolling (unrelated to auto-scroll)
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.handleTouchScroll = function (ev) {
        // if the drag is being initiated by touch, but a scroll happens before
        // the drag-initiating delay is over, cancel the drag
        if (!this.isDragging || this.scrollAlwaysKills) {
            this.endInteraction(ev, true); // isCancelled=true
        }
    };
    // Utils
    // -----------------------------------------------------------------------------------------------------------------
    // Triggers a callback. Calls a function in the option hash of the same name.
    // Arguments beyond the first `name` are forwarded on.
    DragListener.prototype.trigger = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.options[name]) {
            this.options[name].apply(this, args);
        }
        // makes _methods callable by event name. TODO: kill this
        if (this['_' + name]) {
            this['_' + name].apply(this, args);
        }
    };
    // Auto-scroll
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.initAutoScroll = function () {
        var scrollEl = this.scrollEl;
        this.isAutoScroll =
            this.options.scroll &&
                scrollEl &&
                !scrollEl.is(window) &&
                !scrollEl.is(document);
        if (this.isAutoScroll) {
            // debounce makes sure rapid calls don't happen
            this.listenTo(scrollEl, 'scroll', util_1.debounce(this.handleDebouncedScroll, 100));
        }
    };
    DragListener.prototype.destroyAutoScroll = function () {
        this.endAutoScroll(); // kill any animation loop
        // remove the scroll handler if there is a scrollEl
        if (this.isAutoScroll) {
            this.stopListeningTo(this.scrollEl, 'scroll'); // will probably get removed by unbindHandlers too :(
        }
    };
    // Computes and stores the bounding rectangle of scrollEl
    DragListener.prototype.computeScrollBounds = function () {
        if (this.isAutoScroll) {
            this.scrollBounds = util_1.getOuterRect(this.scrollEl);
            // TODO: use getClientRect in future. but prevents auto scrolling when on top of scrollbars
        }
    };
    // Called when the dragging is in progress and scrolling should be updated
    DragListener.prototype.updateAutoScroll = function (ev) {
        var sensitivity = this.scrollSensitivity;
        var bounds = this.scrollBounds;
        var topCloseness;
        var bottomCloseness;
        var leftCloseness;
        var rightCloseness;
        var topVel = 0;
        var leftVel = 0;
        if (bounds) {
            // compute closeness to edges. valid range is from 0.0 - 1.0
            topCloseness = (sensitivity - (util_1.getEvY(ev) - bounds.top)) / sensitivity;
            bottomCloseness = (sensitivity - (bounds.bottom - util_1.getEvY(ev))) / sensitivity;
            leftCloseness = (sensitivity - (util_1.getEvX(ev) - bounds.left)) / sensitivity;
            rightCloseness = (sensitivity - (bounds.right - util_1.getEvX(ev))) / sensitivity;
            // translate vertical closeness into velocity.
            // mouse must be completely in bounds for velocity to happen.
            if (topCloseness >= 0 && topCloseness <= 1) {
                topVel = topCloseness * this.scrollSpeed * -1; // negative. for scrolling up
            }
            else if (bottomCloseness >= 0 && bottomCloseness <= 1) {
                topVel = bottomCloseness * this.scrollSpeed;
            }
            // translate horizontal closeness into velocity
            if (leftCloseness >= 0 && leftCloseness <= 1) {
                leftVel = leftCloseness * this.scrollSpeed * -1; // negative. for scrolling left
            }
            else if (rightCloseness >= 0 && rightCloseness <= 1) {
                leftVel = rightCloseness * this.scrollSpeed;
            }
        }
        this.setScrollVel(topVel, leftVel);
    };
    // Sets the speed-of-scrolling for the scrollEl
    DragListener.prototype.setScrollVel = function (topVel, leftVel) {
        this.scrollTopVel = topVel;
        this.scrollLeftVel = leftVel;
        this.constrainScrollVel(); // massages into realistic values
        // if there is non-zero velocity, and an animation loop hasn't already started, then START
        if ((this.scrollTopVel || this.scrollLeftVel) && !this.scrollIntervalId) {
            this.scrollIntervalId = setInterval(util_1.proxy(this, 'scrollIntervalFunc'), // scope to `this`
            this.scrollIntervalMs);
        }
    };
    // Forces scrollTopVel and scrollLeftVel to be zero if scrolling has already gone all the way
    DragListener.prototype.constrainScrollVel = function () {
        var el = this.scrollEl;
        if (this.scrollTopVel < 0) {
            if (el.scrollTop() <= 0) {
                this.scrollTopVel = 0;
            }
        }
        else if (this.scrollTopVel > 0) {
            if (el.scrollTop() + el[0].clientHeight >= el[0].scrollHeight) {
                this.scrollTopVel = 0;
            }
        }
        if (this.scrollLeftVel < 0) {
            if (el.scrollLeft() <= 0) {
                this.scrollLeftVel = 0;
            }
        }
        else if (this.scrollLeftVel > 0) {
            if (el.scrollLeft() + el[0].clientWidth >= el[0].scrollWidth) {
                this.scrollLeftVel = 0;
            }
        }
    };
    // This function gets called during every iteration of the scrolling animation loop
    DragListener.prototype.scrollIntervalFunc = function () {
        var el = this.scrollEl;
        var frac = this.scrollIntervalMs / 1000; // considering animation frequency, what the vel should be mult'd by
        // change the value of scrollEl's scroll
        if (this.scrollTopVel) {
            el.scrollTop(el.scrollTop() + this.scrollTopVel * frac);
        }
        if (this.scrollLeftVel) {
            el.scrollLeft(el.scrollLeft() + this.scrollLeftVel * frac);
        }
        this.constrainScrollVel(); // since the scroll values changed, recompute the velocities
        // if scrolled all the way, which causes the vels to be zero, stop the animation loop
        if (!this.scrollTopVel && !this.scrollLeftVel) {
            this.endAutoScroll();
        }
    };
    // Kills any existing scrolling animation loop
    DragListener.prototype.endAutoScroll = function () {
        if (this.scrollIntervalId) {
            clearInterval(this.scrollIntervalId);
            this.scrollIntervalId = null;
            this.handleScrollEnd();
        }
    };
    // Get called when the scrollEl is scrolled (NOTE: this is delayed via debounce)
    DragListener.prototype.handleDebouncedScroll = function () {
        // recompute all coordinates, but *only* if this is *not* part of our scrolling animation
        if (!this.scrollIntervalId) {
            this.handleScrollEnd();
        }
    };
    DragListener.prototype.handleScrollEnd = function () {
        // Called when scrolling has stopped, whether through auto scroll, or the user scrolling
    };
    return DragListener;
}());
exports.default = DragListener;
ListenerMixin_1.default.mixInto(DragListener);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var Mixin_1 = __webpack_require__(14);
/*
A set of rendering and date-related methods for a visual component comprised of one or more rows of day columns.
Prerequisite: the object being mixed into needs to be a *Grid*
*/
var DayTableMixin = /** @class */ (function (_super) {
    tslib_1.__extends(DayTableMixin, _super);
    function DayTableMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Populates internal variables used for date calculation and rendering
    DayTableMixin.prototype.updateDayTable = function () {
        var t = this;
        var view = t.view;
        var calendar = view.calendar;
        var date = calendar.msToUtcMoment(t.dateProfile.renderUnzonedRange.startMs, true);
        var end = calendar.msToUtcMoment(t.dateProfile.renderUnzonedRange.endMs, true);
        var dayIndex = -1;
        var dayIndices = [];
        var dayDates = [];
        var daysPerRow;
        var firstDay;
        var rowCnt;
        while (date.isBefore(end)) {
            if (view.isHiddenDay(date)) {
                dayIndices.push(dayIndex + 0.5); // mark that it's between indices
            }
            else {
                dayIndex++;
                dayIndices.push(dayIndex);
                dayDates.push(date.clone());
            }
            date.add(1, 'days');
        }
        if (this.breakOnWeeks) {
            // count columns until the day-of-week repeats
            firstDay = dayDates[0].day();
            for (daysPerRow = 1; daysPerRow < dayDates.length; daysPerRow++) {
                if (dayDates[daysPerRow].day() === firstDay) {
                    break;
                }
            }
            rowCnt = Math.ceil(dayDates.length / daysPerRow);
        }
        else {
            rowCnt = 1;
            daysPerRow = dayDates.length;
        }
        this.dayDates = dayDates;
        this.dayIndices = dayIndices;
        this.daysPerRow = daysPerRow;
        this.rowCnt = rowCnt;
        this.updateDayTableCols();
    };
    // Computes and assigned the colCnt property and updates any options that may be computed from it
    DayTableMixin.prototype.updateDayTableCols = function () {
        this.colCnt = this.computeColCnt();
        this.colHeadFormat =
            this.opt('columnHeaderFormat') ||
                this.opt('columnFormat') || // deprecated
                this.computeColHeadFormat();
    };
    // Determines how many columns there should be in the table
    DayTableMixin.prototype.computeColCnt = function () {
        return this.daysPerRow;
    };
    // Computes the ambiguously-timed moment for the given cell
    DayTableMixin.prototype.getCellDate = function (row, col) {
        return this.dayDates[this.getCellDayIndex(row, col)].clone();
    };
    // Computes the ambiguously-timed date range for the given cell
    DayTableMixin.prototype.getCellRange = function (row, col) {
        var start = this.getCellDate(row, col);
        var end = start.clone().add(1, 'days');
        return { start: start, end: end };
    };
    // Returns the number of day cells, chronologically, from the first of the grid (0-based)
    DayTableMixin.prototype.getCellDayIndex = function (row, col) {
        return row * this.daysPerRow + this.getColDayIndex(col);
    };
    // Returns the numner of day cells, chronologically, from the first cell in *any given row*
    DayTableMixin.prototype.getColDayIndex = function (col) {
        if (this.isRTL) {
            return this.colCnt - 1 - col;
        }
        else {
            return col;
        }
    };
    // Given a date, returns its chronolocial cell-index from the first cell of the grid.
    // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
    // If before the first offset, returns a negative number.
    // If after the last offset, returns an offset past the last cell offset.
    // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
    DayTableMixin.prototype.getDateDayIndex = function (date) {
        var dayIndices = this.dayIndices;
        var dayOffset = date.diff(this.dayDates[0], 'days');
        if (dayOffset < 0) {
            return dayIndices[0] - 1;
        }
        else if (dayOffset >= dayIndices.length) {
            return dayIndices[dayIndices.length - 1] + 1;
        }
        else {
            return dayIndices[dayOffset];
        }
    };
    /* Options
    ------------------------------------------------------------------------------------------------------------------*/
    // Computes a default column header formatting string if `colFormat` is not explicitly defined
    DayTableMixin.prototype.computeColHeadFormat = function () {
        // if more than one week row, or if there are a lot of columns with not much space,
        // put just the day numbers will be in each cell
        if (this.rowCnt > 1 || this.colCnt > 10) {
            return 'ddd'; // "Sat"
        }
        else if (this.colCnt > 1) {
            return this.opt('dayOfMonthFormat'); // "Sat 12/10"
        }
        else {
            return 'dddd'; // "Saturday"
        }
    };
    /* Slicing
    ------------------------------------------------------------------------------------------------------------------*/
    // Slices up a date range into a segment for every week-row it intersects with
    DayTableMixin.prototype.sliceRangeByRow = function (unzonedRange) {
        var daysPerRow = this.daysPerRow;
        var normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
        var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
        var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
        var segs = [];
        var row;
        var rowFirst;
        var rowLast; // inclusive day-index range for current row
        var segFirst;
        var segLast; // inclusive day-index range for segment
        for (row = 0; row < this.rowCnt; row++) {
            rowFirst = row * daysPerRow;
            rowLast = rowFirst + daysPerRow - 1;
            // intersect segment's offset range with the row's
            segFirst = Math.max(rangeFirst, rowFirst);
            segLast = Math.min(rangeLast, rowLast);
            // deal with in-between indices
            segFirst = Math.ceil(segFirst); // in-between starts round to next cell
            segLast = Math.floor(segLast); // in-between ends round to prev cell
            if (segFirst <= segLast) {
                segs.push({
                    row: row,
                    // normalize to start of row
                    firstRowDayIndex: segFirst - rowFirst,
                    lastRowDayIndex: segLast - rowFirst,
                    // must be matching integers to be the segment's start/end
                    isStart: segFirst === rangeFirst,
                    isEnd: segLast === rangeLast
                });
            }
        }
        return segs;
    };
    // Slices up a date range into a segment for every day-cell it intersects with.
    // TODO: make more DRY with sliceRangeByRow somehow.
    DayTableMixin.prototype.sliceRangeByDay = function (unzonedRange) {
        var daysPerRow = this.daysPerRow;
        var normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
        var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
        var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
        var segs = [];
        var row;
        var rowFirst;
        var rowLast; // inclusive day-index range for current row
        var i;
        var segFirst;
        var segLast; // inclusive day-index range for segment
        for (row = 0; row < this.rowCnt; row++) {
            rowFirst = row * daysPerRow;
            rowLast = rowFirst + daysPerRow - 1;
            for (i = rowFirst; i <= rowLast; i++) {
                // intersect segment's offset range with the row's
                segFirst = Math.max(rangeFirst, i);
                segLast = Math.min(rangeLast, i);
                // deal with in-between indices
                segFirst = Math.ceil(segFirst); // in-between starts round to next cell
                segLast = Math.floor(segLast); // in-between ends round to prev cell
                if (segFirst <= segLast) {
                    segs.push({
                        row: row,
                        // normalize to start of row
                        firstRowDayIndex: segFirst - rowFirst,
                        lastRowDayIndex: segLast - rowFirst,
                        // must be matching integers to be the segment's start/end
                        isStart: segFirst === rangeFirst,
                        isEnd: segLast === rangeLast
                    });
                }
            }
        }
        return segs;
    };
    /* Header Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayTableMixin.prototype.renderHeadHtml = function () {
        var theme = this.view.calendar.theme;
        return '' +
            '<div class="fc-row ' + theme.getClass('headerRow') + '">' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            '<thead>' +
            this.renderHeadTrHtml() +
            '</thead>' +
            '</table>' +
            '</div>';
    };
    DayTableMixin.prototype.renderHeadIntroHtml = function () {
        return this.renderIntroHtml(); // fall back to generic
    };
    DayTableMixin.prototype.renderHeadTrHtml = function () {
        return '' +
            '<tr>' +
            (this.isRTL ? '' : this.renderHeadIntroHtml()) +
            this.renderHeadDateCellsHtml() +
            (this.isRTL ? this.renderHeadIntroHtml() : '') +
            '</tr>';
    };
    DayTableMixin.prototype.renderHeadDateCellsHtml = function () {
        var htmls = [];
        var col;
        var date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.getCellDate(0, col);
            htmls.push(this.renderHeadDateCellHtml(date));
        }
        return htmls.join('');
    };
    // TODO: when internalApiVersion, accept an object for HTML attributes
    // (colspan should be no different)
    DayTableMixin.prototype.renderHeadDateCellHtml = function (date, colspan, otherAttrs) {
        var t = this;
        var view = t.view;
        var isDateValid = t.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
        var classNames = [
            'fc-day-header',
            view.calendar.theme.getClass('widgetHeader')
        ];
        var innerHtml;
        if (typeof t.opt('columnHeaderHtml') === 'function') {
            innerHtml = t.opt('columnHeaderHtml')(date);
        }
        else if (typeof t.opt('columnHeaderText') === 'function') {
            innerHtml = util_1.htmlEscape(t.opt('columnHeaderText')(date));
        }
        else {
            innerHtml = util_1.htmlEscape(date.format(t.colHeadFormat));
        }
        // if only one row of days, the classNames on the header can represent the specific days beneath
        if (t.rowCnt === 1) {
            classNames = classNames.concat(
            // includes the day-of-week class
            // noThemeHighlight=true (don't highlight the header)
            t.getDayClasses(date, true));
        }
        else {
            classNames.push('fc-' + util_1.dayIDs[date.day()]); // only add the day-of-week class
        }
        return '' +
            '<th class="' + classNames.join(' ') + '"' +
            ((isDateValid && t.rowCnt) === 1 ?
                ' data-date="' + date.format('YYYY-MM-DD') + '"' :
                '') +
            (colspan > 1 ?
                ' colspan="' + colspan + '"' :
                '') +
            (otherAttrs ?
                ' ' + otherAttrs :
                '') +
            '>' +
            (isDateValid ?
                // don't make a link if the heading could represent multiple days, or if there's only one day (forceOff)
                view.buildGotoAnchorHtml({ date: date, forceOff: t.rowCnt > 1 || t.colCnt === 1 }, innerHtml) :
                // if not valid, display text, but no link
                innerHtml) +
            '</th>';
    };
    /* Background Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayTableMixin.prototype.renderBgTrHtml = function (row) {
        return '' +
            '<tr>' +
            (this.isRTL ? '' : this.renderBgIntroHtml(row)) +
            this.renderBgCellsHtml(row) +
            (this.isRTL ? this.renderBgIntroHtml(row) : '') +
            '</tr>';
    };
    DayTableMixin.prototype.renderBgIntroHtml = function (row) {
        return this.renderIntroHtml(); // fall back to generic
    };
    DayTableMixin.prototype.renderBgCellsHtml = function (row) {
        var htmls = [];
        var col;
        var date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.getCellDate(row, col);
            htmls.push(this.renderBgCellHtml(date));
        }
        return htmls.join('');
    };
    DayTableMixin.prototype.renderBgCellHtml = function (date, otherAttrs) {
        var t = this;
        var view = t.view;
        var isDateValid = t.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
        var classes = t.getDayClasses(date);
        classes.unshift('fc-day', view.calendar.theme.getClass('widgetContent'));
        return '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + date.format('YYYY-MM-DD') + '"' : // if date has a time, won't format it
                '') +
            (otherAttrs ?
                ' ' + otherAttrs :
                '') +
            '></td>';
    };
    /* Generic
    ------------------------------------------------------------------------------------------------------------------*/
    DayTableMixin.prototype.renderIntroHtml = function () {
        // Generates the default HTML intro for any row. User classes should override
    };
    // TODO: a generic method for dealing with <tr>, RTL, intro
    // when increment internalApiVersion
    // wrapTr (scheduler)
    /* Utils
    ------------------------------------------------------------------------------------------------------------------*/
    // Applies the generic "intro" and "outro" HTML to the given cells.
    // Intro means the leftmost cell when the calendar is LTR and the rightmost cell when RTL. Vice-versa for outro.
    DayTableMixin.prototype.bookendCells = function (trEl) {
        var introHtml = this.renderIntroHtml();
        if (introHtml) {
            if (this.isRTL) {
                trEl.append(introHtml);
            }
            else {
                trEl.prepend(introHtml);
            }
        }
    };
    return DayTableMixin;
}(Mixin_1.default));
exports.default = DayTableMixin;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var BusinessHourRenderer = /** @class */ (function () {
    /*
    component implements:
      - eventRangesToEventFootprints
      - eventFootprintsToSegs
    */
    function BusinessHourRenderer(component, fillRenderer) {
        this.component = component;
        this.fillRenderer = fillRenderer;
    }
    BusinessHourRenderer.prototype.render = function (businessHourGenerator) {
        var component = this.component;
        var unzonedRange = component._getDateProfile().activeUnzonedRange;
        var eventInstanceGroup = businessHourGenerator.buildEventInstanceGroup(component.hasAllDayBusinessHours, unzonedRange);
        var eventFootprints = eventInstanceGroup ?
            component.eventRangesToEventFootprints(eventInstanceGroup.sliceRenderRanges(unzonedRange)) :
            [];
        this.renderEventFootprints(eventFootprints);
    };
    BusinessHourRenderer.prototype.renderEventFootprints = function (eventFootprints) {
        var segs = this.component.eventFootprintsToSegs(eventFootprints);
        this.renderSegs(segs);
        this.segs = segs;
    };
    BusinessHourRenderer.prototype.renderSegs = function (segs) {
        if (this.fillRenderer) {
            this.fillRenderer.renderSegs('businessHours', segs, {
                getClasses: function (seg) {
                    return ['fc-nonbusiness', 'fc-bgevent'];
                }
            });
        }
    };
    BusinessHourRenderer.prototype.unrender = function () {
        if (this.fillRenderer) {
            this.fillRenderer.unrender('businessHours');
        }
        this.segs = null;
    };
    BusinessHourRenderer.prototype.getSegs = function () {
        return this.segs || [];
    };
    return BusinessHourRenderer;
}());
exports.default = BusinessHourRenderer;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var FillRenderer = /** @class */ (function () {
    function FillRenderer(component) {
        this.fillSegTag = 'div';
        this.component = component;
        this.elsByFill = {};
    }
    FillRenderer.prototype.renderFootprint = function (type, componentFootprint, props) {
        this.renderSegs(type, this.component.componentFootprintToSegs(componentFootprint), props);
    };
    FillRenderer.prototype.renderSegs = function (type, segs, props) {
        var els;
        segs = this.buildSegEls(type, segs, props); // assignes `.el` to each seg. returns successfully rendered segs
        els = this.attachSegEls(type, segs);
        if (els) {
            this.reportEls(type, els);
        }
        return segs;
    };
    // Unrenders a specific type of fill that is currently rendered on the grid
    FillRenderer.prototype.unrender = function (type) {
        var el = this.elsByFill[type];
        if (el) {
            el.remove();
            delete this.elsByFill[type];
        }
    };
    // Renders and assigns an `el` property for each fill segment. Generic enough to work with different types.
    // Only returns segments that successfully rendered.
    FillRenderer.prototype.buildSegEls = function (type, segs, props) {
        var _this = this;
        var html = '';
        var renderedSegs = [];
        var i;
        if (segs.length) {
            // build a large concatenation of segment HTML
            for (i = 0; i < segs.length; i++) {
                html += this.buildSegHtml(type, segs[i], props);
            }
            // Grab individual elements from the combined HTML string. Use each as the default rendering.
            // Then, compute the 'el' for each segment.
            $(html).each(function (i, node) {
                var seg = segs[i];
                var el = $(node);
                // allow custom filter methods per-type
                if (props.filterEl) {
                    el = props.filterEl(seg, el);
                }
                if (el) {
                    el = $(el); // allow custom filter to return raw DOM node
                    // correct element type? (would be bad if a non-TD were inserted into a table for example)
                    if (el.is(_this.fillSegTag)) {
                        seg.el = el;
                        renderedSegs.push(seg);
                    }
                }
            });
        }
        return renderedSegs;
    };
    // Builds the HTML needed for one fill segment. Generic enough to work with different types.
    FillRenderer.prototype.buildSegHtml = function (type, seg, props) {
        // custom hooks per-type
        var classes = props.getClasses ? props.getClasses(seg) : [];
        var css = util_1.cssToStr(props.getCss ? props.getCss(seg) : {});
        return '<' + this.fillSegTag +
            (classes.length ? ' class="' + classes.join(' ') + '"' : '') +
            (css ? ' style="' + css + '"' : '') +
            ' />';
    };
    // Should return wrapping DOM structure
    FillRenderer.prototype.attachSegEls = function (type, segs) {
        // subclasses must implement
    };
    FillRenderer.prototype.reportEls = function (type, nodes) {
        if (this.elsByFill[type]) {
            this.elsByFill[type] = this.elsByFill[type].add(nodes);
        }
        else {
            this.elsByFill[type] = $(nodes);
        }
    };
    return FillRenderer;
}());
exports.default = FillRenderer;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var SingleEventDef_1 = __webpack_require__(13);
var EventFootprint_1 = __webpack_require__(36);
var EventSource_1 = __webpack_require__(6);
var HelperRenderer = /** @class */ (function () {
    function HelperRenderer(component, eventRenderer) {
        this.view = component._getView();
        this.component = component;
        this.eventRenderer = eventRenderer;
    }
    HelperRenderer.prototype.renderComponentFootprint = function (componentFootprint) {
        this.renderEventFootprints([
            this.fabricateEventFootprint(componentFootprint)
        ]);
    };
    HelperRenderer.prototype.renderEventDraggingFootprints = function (eventFootprints, sourceSeg, isTouch) {
        this.renderEventFootprints(eventFootprints, sourceSeg, 'fc-dragging', isTouch ? null : this.view.opt('dragOpacity'));
    };
    HelperRenderer.prototype.renderEventResizingFootprints = function (eventFootprints, sourceSeg, isTouch) {
        this.renderEventFootprints(eventFootprints, sourceSeg, 'fc-resizing');
    };
    HelperRenderer.prototype.renderEventFootprints = function (eventFootprints, sourceSeg, extraClassNames, opacity) {
        var segs = this.component.eventFootprintsToSegs(eventFootprints);
        var classNames = 'fc-helper ' + (extraClassNames || '');
        var i;
        // assigns each seg's el and returns a subset of segs that were rendered
        segs = this.eventRenderer.renderFgSegEls(segs);
        for (i = 0; i < segs.length; i++) {
            segs[i].el.addClass(classNames);
        }
        if (opacity != null) {
            for (i = 0; i < segs.length; i++) {
                segs[i].el.css('opacity', opacity);
            }
        }
        this.helperEls = this.renderSegs(segs, sourceSeg);
    };
    /*
    Must return all mock event elements
    */
    HelperRenderer.prototype.renderSegs = function (segs, sourceSeg) {
        // Subclasses must implement
    };
    HelperRenderer.prototype.unrender = function () {
        if (this.helperEls) {
            this.helperEls.remove();
            this.helperEls = null;
        }
    };
    HelperRenderer.prototype.fabricateEventFootprint = function (componentFootprint) {
        var calendar = this.view.calendar;
        var eventDateProfile = calendar.footprintToDateProfile(componentFootprint);
        var dummyEvent = new SingleEventDef_1.default(new EventSource_1.default(calendar));
        var dummyInstance;
        dummyEvent.dateProfile = eventDateProfile;
        dummyInstance = dummyEvent.buildInstance();
        return new EventFootprint_1.default(componentFootprint, dummyEvent, dummyInstance);
    };
    return HelperRenderer;
}());
exports.default = HelperRenderer;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var GlobalEmitter_1 = __webpack_require__(21);
var Interaction_1 = __webpack_require__(15);
var EventPointing = /** @class */ (function (_super) {
    tslib_1.__extends(EventPointing, _super);
    function EventPointing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
    component must implement:
      - publiclyTrigger
    */
    EventPointing.prototype.bindToEl = function (el) {
        var component = this.component;
        component.bindSegHandlerToEl(el, 'click', this.handleClick.bind(this));
        component.bindSegHandlerToEl(el, 'mouseenter', this.handleMouseover.bind(this));
        component.bindSegHandlerToEl(el, 'mouseleave', this.handleMouseout.bind(this));
    };
    EventPointing.prototype.handleClick = function (seg, ev) {
        var res = this.component.publiclyTrigger('eventClick', {
            context: seg.el[0],
            args: [seg.footprint.getEventLegacy(), ev, this.view]
        });
        if (res === false) {
            ev.preventDefault();
        }
    };
    // Updates internal state and triggers handlers for when an event element is moused over
    EventPointing.prototype.handleMouseover = function (seg, ev) {
        if (!GlobalEmitter_1.default.get().shouldIgnoreMouse() &&
            !this.mousedOverSeg) {
            this.mousedOverSeg = seg;
            // TODO: move to EventSelecting's responsibility
            if (this.view.isEventDefResizable(seg.footprint.eventDef)) {
                seg.el.addClass('fc-allow-mouse-resize');
            }
            this.component.publiclyTrigger('eventMouseover', {
                context: seg.el[0],
                args: [seg.footprint.getEventLegacy(), ev, this.view]
            });
        }
    };
    // Updates internal state and triggers handlers for when an event element is moused out.
    // Can be given no arguments, in which case it will mouseout the segment that was previously moused over.
    EventPointing.prototype.handleMouseout = function (seg, ev) {
        if (this.mousedOverSeg) {
            this.mousedOverSeg = null;
            // TODO: move to EventSelecting's responsibility
            if (this.view.isEventDefResizable(seg.footprint.eventDef)) {
                seg.el.removeClass('fc-allow-mouse-resize');
            }
            this.component.publiclyTrigger('eventMouseout', {
                context: seg.el[0],
                args: [
                    seg.footprint.getEventLegacy(),
                    ev || {},
                    this.view
                ]
            });
        }
    };
    EventPointing.prototype.end = function () {
        if (this.mousedOverSeg) {
            this.handleMouseout(this.mousedOverSeg);
        }
    };
    return EventPointing;
}(Interaction_1.default));
exports.default = EventPointing;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Mixin_1 = __webpack_require__(14);
var DateClicking_1 = __webpack_require__(245);
var DateSelecting_1 = __webpack_require__(225);
var EventPointing_1 = __webpack_require__(59);
var EventDragging_1 = __webpack_require__(224);
var EventResizing_1 = __webpack_require__(223);
var ExternalDropping_1 = __webpack_require__(222);
var StandardInteractionsMixin = /** @class */ (function (_super) {
    tslib_1.__extends(StandardInteractionsMixin, _super);
    function StandardInteractionsMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardInteractionsMixin;
}(Mixin_1.default));
exports.default = StandardInteractionsMixin;
StandardInteractionsMixin.prototype.dateClickingClass = DateClicking_1.default;
StandardInteractionsMixin.prototype.dateSelectingClass = DateSelecting_1.default;
StandardInteractionsMixin.prototype.eventPointingClass = EventPointing_1.default;
StandardInteractionsMixin.prototype.eventDraggingClass = EventDragging_1.default;
StandardInteractionsMixin.prototype.eventResizingClass = EventResizing_1.default;
StandardInteractionsMixin.prototype.externalDroppingClass = ExternalDropping_1.default;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var CoordCache_1 = __webpack_require__(53);
var Popover_1 = __webpack_require__(249);
var UnzonedRange_1 = __webpack_require__(5);
var ComponentFootprint_1 = __webpack_require__(12);
var EventFootprint_1 = __webpack_require__(36);
var BusinessHourRenderer_1 = __webpack_require__(56);
var StandardInteractionsMixin_1 = __webpack_require__(60);
var InteractiveDateComponent_1 = __webpack_require__(40);
var DayTableMixin_1 = __webpack_require__(55);
var DayGridEventRenderer_1 = __webpack_require__(250);
var DayGridHelperRenderer_1 = __webpack_require__(251);
var DayGridFillRenderer_1 = __webpack_require__(252);
/* A component that renders a grid of whole-days that runs horizontally. There can be multiple rows, one per week.
----------------------------------------------------------------------------------------------------------------------*/
var DayGrid = /** @class */ (function (_super) {
    tslib_1.__extends(DayGrid, _super);
    function DayGrid(view) {
        var _this = _super.call(this, view) || this;
        _this.cellWeekNumbersVisible = false; // display week numbers in day cell?
        _this.bottomCoordPadding = 0; // hack for extending the hit area for the last row of the coordinate grid
        // isRigid determines whether the individual rows should ignore the contents and be a constant height.
        // Relies on the view's colCnt and rowCnt. In the future, this component should probably be self-sufficient.
        _this.isRigid = false;
        _this.hasAllDayBusinessHours = true;
        return _this;
    }
    // Slices up the given span (unzoned start/end with other misc data) into an array of segments
    DayGrid.prototype.componentFootprintToSegs = function (componentFootprint) {
        var segs = this.sliceRangeByRow(componentFootprint.unzonedRange);
        var i;
        var seg;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            if (this.isRTL) {
                seg.leftCol = this.daysPerRow - 1 - seg.lastRowDayIndex;
                seg.rightCol = this.daysPerRow - 1 - seg.firstRowDayIndex;
            }
            else {
                seg.leftCol = seg.firstRowDayIndex;
                seg.rightCol = seg.lastRowDayIndex;
            }
        }
        return segs;
    };
    /* Date Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.renderDates = function (dateProfile) {
        this.dateProfile = dateProfile;
        this.updateDayTable();
        this.renderGrid();
    };
    DayGrid.prototype.unrenderDates = function () {
        this.removeSegPopover();
    };
    // Renders the rows and columns into the component's `this.el`, which should already be assigned.
    DayGrid.prototype.renderGrid = function () {
        var view = this.view;
        var rowCnt = this.rowCnt;
        var colCnt = this.colCnt;
        var html = '';
        var row;
        var col;
        if (this.headContainerEl) {
            this.headContainerEl.html(this.renderHeadHtml());
        }
        for (row = 0; row < rowCnt; row++) {
            html += this.renderDayRowHtml(row, this.isRigid);
        }
        this.el.html(html);
        this.rowEls = this.el.find('.fc-row');
        this.cellEls = this.el.find('.fc-day, .fc-disabled-day');
        this.rowCoordCache = new CoordCache_1.default({
            els: this.rowEls,
            isVertical: true
        });
        this.colCoordCache = new CoordCache_1.default({
            els: this.cellEls.slice(0, this.colCnt),
            isHorizontal: true
        });
        // trigger dayRender with each cell's element
        for (row = 0; row < rowCnt; row++) {
            for (col = 0; col < colCnt; col++) {
                this.publiclyTrigger('dayRender', {
                    context: view,
                    args: [
                        this.getCellDate(row, col),
                        this.getCellEl(row, col),
                        view
                    ]
                });
            }
        }
    };
    // Generates the HTML for a single row, which is a div that wraps a table.
    // `row` is the row number.
    DayGrid.prototype.renderDayRowHtml = function (row, isRigid) {
        var theme = this.view.calendar.theme;
        var classes = ['fc-row', 'fc-week', theme.getClass('dayRow')];
        if (isRigid) {
            classes.push('fc-rigid');
        }
        return '' +
            '<div class="' + classes.join(' ') + '">' +
            '<div class="fc-bg">' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            this.renderBgTrHtml(row) +
            '</table>' +
            '</div>' +
            '<div class="fc-content-skeleton">' +
            '<table>' +
            (this.getIsNumbersVisible() ?
                '<thead>' +
                    this.renderNumberTrHtml(row) +
                    '</thead>' :
                '') +
            '</table>' +
            '</div>' +
            '</div>';
    };
    DayGrid.prototype.getIsNumbersVisible = function () {
        return this.getIsDayNumbersVisible() || this.cellWeekNumbersVisible;
    };
    DayGrid.prototype.getIsDayNumbersVisible = function () {
        return this.rowCnt > 1;
    };
    /* Grid Number Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.renderNumberTrHtml = function (row) {
        return '' +
            '<tr>' +
            (this.isRTL ? '' : this.renderNumberIntroHtml(row)) +
            this.renderNumberCellsHtml(row) +
            (this.isRTL ? this.renderNumberIntroHtml(row) : '') +
            '</tr>';
    };
    DayGrid.prototype.renderNumberIntroHtml = function (row) {
        return this.renderIntroHtml();
    };
    DayGrid.prototype.renderNumberCellsHtml = function (row) {
        var htmls = [];
        var col;
        var date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.getCellDate(row, col);
            htmls.push(this.renderNumberCellHtml(date));
        }
        return htmls.join('');
    };
    // Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
    // The number row will only exist if either day numbers or week numbers are turned on.
    DayGrid.prototype.renderNumberCellHtml = function (date) {
        var view = this.view;
        var html = '';
        var isDateValid = this.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
        var isDayNumberVisible = this.getIsDayNumbersVisible() && isDateValid;
        var classes;
        var weekCalcFirstDoW;
        if (!isDayNumberVisible && !this.cellWeekNumbersVisible) {
            // no numbers in day cell (week number must be along the side)
            return '<td/>'; //  will create an empty space above events :(
        }
        classes = this.getDayClasses(date);
        classes.unshift('fc-day-top');
        if (this.cellWeekNumbersVisible) {
            // To determine the day of week number change under ISO, we cannot
            // rely on moment.js methods such as firstDayOfWeek() or weekday(),
            // because they rely on the locale's dow (possibly overridden by
            // our firstDay option), which may not be Monday. We cannot change
            // dow, because that would affect the calendar start day as well.
            if (date._locale._fullCalendar_weekCalc === 'ISO') {
                weekCalcFirstDoW = 1; // Monday by ISO 8601 definition
            }
            else {
                weekCalcFirstDoW = date._locale.firstDayOfWeek();
            }
        }
        html += '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + date.format() + '"' :
                '') +
            '>';
        if (this.cellWeekNumbersVisible && (date.day() === weekCalcFirstDoW)) {
            html += view.buildGotoAnchorHtml({ date: date, type: 'week' }, { 'class': 'fc-week-number' }, date.format('w') // inner HTML
            );
        }
        if (isDayNumberVisible) {
            html += view.buildGotoAnchorHtml(date, { 'class': 'fc-day-number' }, date.format('D') // inner HTML
            );
        }
        html += '</td>';
        return html;
    };
    /* Hit System
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.prepareHits = function () {
        this.colCoordCache.build();
        this.rowCoordCache.build();
        this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding; // hack
    };
    DayGrid.prototype.releaseHits = function () {
        this.colCoordCache.clear();
        this.rowCoordCache.clear();
    };
    DayGrid.prototype.queryHit = function (leftOffset, topOffset) {
        if (this.colCoordCache.isLeftInBounds(leftOffset) && this.rowCoordCache.isTopInBounds(topOffset)) {
            var col = this.colCoordCache.getHorizontalIndex(leftOffset);
            var row = this.rowCoordCache.getVerticalIndex(topOffset);
            if (row != null && col != null) {
                return this.getCellHit(row, col);
            }
        }
    };
    DayGrid.prototype.getHitFootprint = function (hit) {
        var range = this.getCellRange(hit.row, hit.col);
        return new ComponentFootprint_1.default(new UnzonedRange_1.default(range.start, range.end), true // all-day?
        );
    };
    DayGrid.prototype.getHitEl = function (hit) {
        return this.getCellEl(hit.row, hit.col);
    };
    /* Cell System
    ------------------------------------------------------------------------------------------------------------------*/
    // FYI: the first column is the leftmost column, regardless of date
    DayGrid.prototype.getCellHit = function (row, col) {
        return {
            row: row,
            col: col,
            component: this,
            left: this.colCoordCache.getLeftOffset(col),
            right: this.colCoordCache.getRightOffset(col),
            top: this.rowCoordCache.getTopOffset(row),
            bottom: this.rowCoordCache.getBottomOffset(row)
        };
    };
    DayGrid.prototype.getCellEl = function (row, col) {
        return this.cellEls.eq(row * this.colCnt + col);
    };
    /* Event Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    // Unrenders all events currently rendered on the grid
    DayGrid.prototype.executeEventUnrender = function () {
        this.removeSegPopover(); // removes the "more.." events popover
        _super.prototype.executeEventUnrender.call(this);
    };
    // Retrieves all rendered segment objects currently rendered on the grid
    DayGrid.prototype.getOwnEventSegs = function () {
        // append the segments from the "more..." popover
        return _super.prototype.getOwnEventSegs.call(this).concat(this.popoverSegs || []);
    };
    /* Event Drag Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of an event or external element being dragged.
    // `eventLocation` has zoned start and end (optional)
    DayGrid.prototype.renderDrag = function (eventFootprints, seg, isTouch) {
        var i;
        for (i = 0; i < eventFootprints.length; i++) {
            this.renderHighlight(eventFootprints[i].componentFootprint);
        }
        // render drags from OTHER components as helpers
        if (eventFootprints.length && seg && seg.component !== this) {
            this.helperRenderer.renderEventDraggingFootprints(eventFootprints, seg, isTouch);
            return true; // signal helpers rendered
        }
    };
    // Unrenders any visual indication of a hovering event
    DayGrid.prototype.unrenderDrag = function () {
        this.unrenderHighlight();
        this.helperRenderer.unrender();
    };
    /* Event Resize Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of an event being resized
    DayGrid.prototype.renderEventResize = function (eventFootprints, seg, isTouch) {
        var i;
        for (i = 0; i < eventFootprints.length; i++) {
            this.renderHighlight(eventFootprints[i].componentFootprint);
        }
        this.helperRenderer.renderEventResizingFootprints(eventFootprints, seg, isTouch);
    };
    // Unrenders a visual indication of an event being resized
    DayGrid.prototype.unrenderEventResize = function () {
        this.unrenderHighlight();
        this.helperRenderer.unrender();
    };
    /* More+ Link Popover
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.removeSegPopover = function () {
        if (this.segPopover) {
            this.segPopover.hide(); // in handler, will call segPopover's removeElement
        }
    };
    // Limits the number of "levels" (vertically stacking layers of events) for each row of the grid.
    // `levelLimit` can be false (don't limit), a number, or true (should be computed).
    DayGrid.prototype.limitRows = function (levelLimit) {
        var rowStructs = this.eventRenderer.rowStructs || [];
        var row; // row #
        var rowLevelLimit;
        for (row = 0; row < rowStructs.length; row++) {
            this.unlimitRow(row);
            if (!levelLimit) {
                rowLevelLimit = false;
            }
            else if (typeof levelLimit === 'number') {
                rowLevelLimit = levelLimit;
            }
            else {
                rowLevelLimit = this.computeRowLevelLimit(row);
            }
            if (rowLevelLimit !== false) {
                this.limitRow(row, rowLevelLimit);
            }
        }
    };
    // Computes the number of levels a row will accomodate without going outside its bounds.
    // Assumes the row is "rigid" (maintains a constant height regardless of what is inside).
    // `row` is the row number.
    DayGrid.prototype.computeRowLevelLimit = function (row) {
        var rowEl = this.rowEls.eq(row); // the containing "fake" row div
        var rowHeight = rowEl.height(); // TODO: cache somehow?
        var trEls = this.eventRenderer.rowStructs[row].tbodyEl.children();
        var i;
        var trEl;
        var trHeight;
        function iterInnerHeights(i, childNode) {
            trHeight = Math.max(trHeight, $(childNode).outerHeight());
        }
        // Reveal one level <tr> at a time and stop when we find one out of bounds
        for (i = 0; i < trEls.length; i++) {
            trEl = trEls.eq(i).removeClass('fc-limited'); // reset to original state (reveal)
            // with rowspans>1 and IE8, trEl.outerHeight() would return the height of the largest cell,
            // so instead, find the tallest inner content element.
            trHeight = 0;
            trEl.find('> td > :first-child').each(iterInnerHeights);
            if (trEl.position().top + trHeight > rowHeight) {
                return i;
            }
        }
        return false; // should not limit at all
    };
    // Limits the given grid row to the maximum number of levels and injects "more" links if necessary.
    // `row` is the row number.
    // `levelLimit` is a number for the maximum (inclusive) number of levels allowed.
    DayGrid.prototype.limitRow = function (row, levelLimit) {
        var _this = this;
        var rowStruct = this.eventRenderer.rowStructs[row];
        var moreNodes = []; // array of "more" <a> links and <td> DOM nodes
        var col = 0; // col #, left-to-right (not chronologically)
        var levelSegs; // array of segment objects in the last allowable level, ordered left-to-right
        var cellMatrix; // a matrix (by level, then column) of all <td> jQuery elements in the row
        var limitedNodes; // array of temporarily hidden level <tr> and segment <td> DOM nodes
        var i;
        var seg;
        var segsBelow; // array of segment objects below `seg` in the current `col`
        var totalSegsBelow; // total number of segments below `seg` in any of the columns `seg` occupies
        var colSegsBelow; // array of segment arrays, below seg, one for each column (offset from segs's first column)
        var td;
        var rowspan;
        var segMoreNodes; // array of "more" <td> cells that will stand-in for the current seg's cell
        var j;
        var moreTd;
        var moreWrap;
        var moreLink;
        // Iterates through empty level cells and places "more" links inside if need be
        var emptyCellsUntil = function (endCol) {
            while (col < endCol) {
                segsBelow = _this.getCellSegs(row, col, levelLimit);
                if (segsBelow.length) {
                    td = cellMatrix[levelLimit - 1][col];
                    moreLink = _this.renderMoreLink(row, col, segsBelow);
                    moreWrap = $('<div/>').append(moreLink);
                    td.append(moreWrap);
                    moreNodes.push(moreWrap[0]);
                }
                col++;
            }
        };
        if (levelLimit && levelLimit < rowStruct.segLevels.length) {
            levelSegs = rowStruct.segLevels[levelLimit - 1];
            cellMatrix = rowStruct.cellMatrix;
            limitedNodes = rowStruct.tbodyEl.children().slice(levelLimit) // get level <tr> elements past the limit
                .addClass('fc-limited').get(); // hide elements and get a simple DOM-nodes array
            // iterate though segments in the last allowable level
            for (i = 0; i < levelSegs.length; i++) {
                seg = levelSegs[i];
                emptyCellsUntil(seg.leftCol); // process empty cells before the segment
                // determine *all* segments below `seg` that occupy the same columns
                colSegsBelow = [];
                totalSegsBelow = 0;
                while (col <= seg.rightCol) {
                    segsBelow = this.getCellSegs(row, col, levelLimit);
                    colSegsBelow.push(segsBelow);
                    totalSegsBelow += segsBelow.length;
                    col++;
                }
                if (totalSegsBelow) {
                    td = cellMatrix[levelLimit - 1][seg.leftCol]; // the segment's parent cell
                    rowspan = td.attr('rowspan') || 1;
                    segMoreNodes = [];
                    // make a replacement <td> for each column the segment occupies. will be one for each colspan
                    for (j = 0; j < colSegsBelow.length; j++) {
                        moreTd = $('<td class="fc-more-cell"/>').attr('rowspan', rowspan);
                        segsBelow = colSegsBelow[j];
                        moreLink = this.renderMoreLink(row, seg.leftCol + j, [seg].concat(segsBelow) // count seg as hidden too
                        );
                        moreWrap = $('<div/>').append(moreLink);
                        moreTd.append(moreWrap);
                        segMoreNodes.push(moreTd[0]);
                        moreNodes.push(moreTd[0]);
                    }
                    td.addClass('fc-limited').after($(segMoreNodes)); // hide original <td> and inject replacements
                    limitedNodes.push(td[0]);
                }
            }
            emptyCellsUntil(this.colCnt); // finish off the level
            rowStruct.moreEls = $(moreNodes); // for easy undoing later
            rowStruct.limitedEls = $(limitedNodes); // for easy undoing later
        }
    };
    // Reveals all levels and removes all "more"-related elements for a grid's row.
    // `row` is a row number.
    DayGrid.prototype.unlimitRow = function (row) {
        var rowStruct = this.eventRenderer.rowStructs[row];
        if (rowStruct.moreEls) {
            rowStruct.moreEls.remove();
            rowStruct.moreEls = null;
        }
        if (rowStruct.limitedEls) {
            rowStruct.limitedEls.removeClass('fc-limited');
            rowStruct.limitedEls = null;
        }
    };
    // Renders an <a> element that represents hidden event element for a cell.
    // Responsible for attaching click handler as well.
    DayGrid.prototype.renderMoreLink = function (row, col, hiddenSegs) {
        var _this = this;
        var view = this.view;
        return $('<a class="fc-more"/>')
            .text(this.getMoreLinkText(hiddenSegs.length))
            .on('click', function (ev) {
            var clickOption = _this.opt('eventLimitClick');
            var date = _this.getCellDate(row, col);
            var moreEl = $(ev.currentTarget);
            var dayEl = _this.getCellEl(row, col);
            var allSegs = _this.getCellSegs(row, col);
            // rescope the segments to be within the cell's date
            var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
            var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);
            if (typeof clickOption === 'function') {
                // the returned value can be an atomic option
                clickOption = _this.publiclyTrigger('eventLimitClick', {
                    context: view,
                    args: [
                        {
                            date: date.clone(),
                            dayEl: dayEl,
                            moreEl: moreEl,
                            segs: reslicedAllSegs,
                            hiddenSegs: reslicedHiddenSegs
                        },
                        ev,
                        view
                    ]
                });
            }
            if (clickOption === 'popover') {
                _this.showSegPopover(row, col, moreEl, reslicedAllSegs);
            }
            else if (typeof clickOption === 'string') {
                view.calendar.zoomTo(date, clickOption);
            }
        });
    };
    // Reveals the popover that displays all events within a cell
    DayGrid.prototype.showSegPopover = function (row, col, moreLink, segs) {
        var _this = this;
        var view = this.view;
        var moreWrap = moreLink.parent(); // the <div> wrapper around the <a>
        var topEl; // the element we want to match the top coordinate of
        var options;
        if (this.rowCnt === 1) {
            topEl = view.el; // will cause the popover to cover any sort of header
        }
        else {
            topEl = this.rowEls.eq(row); // will align with top of row
        }
        options = {
            className: 'fc-more-popover ' + view.calendar.theme.getClass('popover'),
            content: this.renderSegPopoverContent(row, col, segs),
            parentEl: view.el,
            top: topEl.offset().top,
            autoHide: true,
            viewportConstrain: this.opt('popoverViewportConstrain'),
            hide: function () {
                // kill everything when the popover is hidden
                // notify events to be removed
                if (_this.popoverSegs) {
                    _this.triggerBeforeEventSegsDestroyed(_this.popoverSegs);
                }
                _this.segPopover.removeElement();
                _this.segPopover = null;
                _this.popoverSegs = null;
            }
        };
        // Determine horizontal coordinate.
        // We use the moreWrap instead of the <td> to avoid border confusion.
        if (this.isRTL) {
            options.right = moreWrap.offset().left + moreWrap.outerWidth() + 1; // +1 to be over cell border
        }
        else {
            options.left = moreWrap.offset().left - 1; // -1 to be over cell border
        }
        this.segPopover = new Popover_1.default(options);
        this.segPopover.show();
        // the popover doesn't live within the grid's container element, and thus won't get the event
        // delegated-handlers for free. attach event-related handlers to the popover.
        this.bindAllSegHandlersToEl(this.segPopover.el);
        this.triggerAfterEventSegsRendered(segs);
    };
    // Builds the inner DOM contents of the segment popover
    DayGrid.prototype.renderSegPopoverContent = function (row, col, segs) {
        var view = this.view;
        var theme = view.calendar.theme;
        var title = this.getCellDate(row, col).format(this.opt('dayPopoverFormat'));
        var content = $('<div class="fc-header ' + theme.getClass('popoverHeader') + '">' +
            '<span class="fc-close ' + theme.getIconClass('close') + '"></span>' +
            '<span class="fc-title">' +
            util_1.htmlEscape(title) +
            '</span>' +
            '<div class="fc-clear"/>' +
            '</div>' +
            '<div class="fc-body ' + theme.getClass('popoverContent') + '">' +
            '<div class="fc-event-container"></div>' +
            '</div>');
        var segContainer = content.find('.fc-event-container');
        var i;
        // render each seg's `el` and only return the visible segs
        segs = this.eventRenderer.renderFgSegEls(segs, true); // disableResizing=true
        this.popoverSegs = segs;
        for (i = 0; i < segs.length; i++) {
            // because segments in the popover are not part of a grid coordinate system, provide a hint to any
            // grids that want to do drag-n-drop about which cell it came from
            this.hitsNeeded();
            segs[i].hit = this.getCellHit(row, col);
            this.hitsNotNeeded();
            segContainer.append(segs[i].el);
        }
        return content;
    };
    // Given the events within an array of segment objects, reslice them to be in a single day
    DayGrid.prototype.resliceDaySegs = function (segs, dayDate) {
        var dayStart = dayDate.clone();
        var dayEnd = dayStart.clone().add(1, 'days');
        var dayRange = new UnzonedRange_1.default(dayStart, dayEnd);
        var newSegs = [];
        var i;
        var seg;
        var slicedRange;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            slicedRange = seg.footprint.componentFootprint.unzonedRange.intersect(dayRange);
            if (slicedRange) {
                newSegs.push($.extend({}, seg, {
                    footprint: new EventFootprint_1.default(new ComponentFootprint_1.default(slicedRange, seg.footprint.componentFootprint.isAllDay), seg.footprint.eventDef, seg.footprint.eventInstance),
                    isStart: seg.isStart && slicedRange.isStart,
                    isEnd: seg.isEnd && slicedRange.isEnd
                }));
            }
        }
        // force an order because eventsToSegs doesn't guarantee one
        // TODO: research if still needed
        this.eventRenderer.sortEventSegs(newSegs);
        return newSegs;
    };
    // Generates the text that should be inside a "more" link, given the number of events it represents
    DayGrid.prototype.getMoreLinkText = function (num) {
        var opt = this.opt('eventLimitText');
        if (typeof opt === 'function') {
            return opt(num);
        }
        else {
            return '+' + num + ' ' + opt;
        }
    };
    // Returns segments within a given cell.
    // If `startLevel` is specified, returns only events including and below that level. Otherwise returns all segs.
    DayGrid.prototype.getCellSegs = function (row, col, startLevel) {
        var segMatrix = this.eventRenderer.rowStructs[row].segMatrix;
        var level = startLevel || 0;
        var segs = [];
        var seg;
        while (level < segMatrix.length) {
            seg = segMatrix[level][col];
            if (seg) {
                segs.push(seg);
            }
            level++;
        }
        return segs;
    };
    return DayGrid;
}(InteractiveDateComponent_1.default));
exports.default = DayGrid;
DayGrid.prototype.eventRendererClass = DayGridEventRenderer_1.default;
DayGrid.prototype.businessHourRendererClass = BusinessHourRenderer_1.default;
DayGrid.prototype.helperRendererClass = DayGridHelperRenderer_1.default;
DayGrid.prototype.fillRendererClass = DayGridFillRenderer_1.default;
StandardInteractionsMixin_1.default.mixInto(DayGrid);
DayTableMixin_1.default.mixInto(DayGrid);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var Scroller_1 = __webpack_require__(39);
var View_1 = __webpack_require__(41);
var BasicViewDateProfileGenerator_1 = __webpack_require__(228);
var DayGrid_1 = __webpack_require__(61);
/* An abstract class for the "basic" views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a DayGrid subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
var BasicView = /** @class */ (function (_super) {
    tslib_1.__extends(BasicView, _super);
    function BasicView(calendar, viewSpec) {
        var _this = _super.call(this, calendar, viewSpec) || this;
        _this.dayGrid = _this.instantiateDayGrid();
        _this.dayGrid.isRigid = _this.hasRigidRows();
        if (_this.opt('weekNumbers')) {
            if (_this.opt('weekNumbersWithinDays')) {
                _this.dayGrid.cellWeekNumbersVisible = true;
                _this.dayGrid.colWeekNumbersVisible = false;
            }
            else {
                _this.dayGrid.cellWeekNumbersVisible = false;
                _this.dayGrid.colWeekNumbersVisible = true;
            }
        }
        _this.addChild(_this.dayGrid);
        _this.scroller = new Scroller_1.default({
            overflowX: 'hidden',
            overflowY: 'auto'
        });
        return _this;
    }
    // Generates the DayGrid object this view needs. Draws from this.dayGridClass
    BasicView.prototype.instantiateDayGrid = function () {
        // generate a subclass on the fly with BasicView-specific behavior
        // TODO: cache this subclass
        var subclass = makeDayGridSubclass(this.dayGridClass);
        return new subclass(this);
    };
    BasicView.prototype.executeDateRender = function (dateProfile) {
        this.dayGrid.breakOnWeeks = /year|month|week/.test(dateProfile.currentRangeUnit);
        _super.prototype.executeDateRender.call(this, dateProfile);
    };
    BasicView.prototype.renderSkeleton = function () {
        var dayGridContainerEl;
        var dayGridEl;
        this.el.addClass('fc-basic-view').html(this.renderSkeletonHtml());
        this.scroller.render();
        dayGridContainerEl = this.scroller.el.addClass('fc-day-grid-container');
        dayGridEl = $('<div class="fc-day-grid" />').appendTo(dayGridContainerEl);
        this.el.find('.fc-body > tr > td').append(dayGridContainerEl);
        this.dayGrid.headContainerEl = this.el.find('.fc-head-container');
        this.dayGrid.setElement(dayGridEl);
    };
    BasicView.prototype.unrenderSkeleton = function () {
        this.dayGrid.removeElement();
        this.scroller.destroy();
    };
    // Builds the HTML skeleton for the view.
    // The day-grid component will render inside of a container defined by this HTML.
    BasicView.prototype.renderSkeletonHtml = function () {
        var theme = this.calendar.theme;
        return '' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            (this.opt('columnHeader') ?
                '<thead class="fc-head">' +
                    '<tr>' +
                    '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                    '</tr>' +
                    '</thead>' :
                '') +
            '<tbody class="fc-body">' +
            '<tr>' +
            '<td class="' + theme.getClass('widgetContent') + '"></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
    };
    // Generates an HTML attribute string for setting the width of the week number column, if it is known
    BasicView.prototype.weekNumberStyleAttr = function () {
        if (this.weekNumberWidth != null) {
            return 'style="width:' + this.weekNumberWidth + 'px"';
        }
        return '';
    };
    // Determines whether each row should have a constant height
    BasicView.prototype.hasRigidRows = function () {
        var eventLimit = this.opt('eventLimit');
        return eventLimit && typeof eventLimit !== 'number';
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    // Refreshes the horizontal dimensions of the view
    BasicView.prototype.updateSize = function (totalHeight, isAuto, isResize) {
        var eventLimit = this.opt('eventLimit');
        var headRowEl = this.dayGrid.headContainerEl.find('.fc-row');
        var scrollerHeight;
        var scrollbarWidths;
        // hack to give the view some height prior to dayGrid's columns being rendered
        // TODO: separate setting height from scroller VS dayGrid.
        if (!this.dayGrid.rowEls) {
            if (!isAuto) {
                scrollerHeight = this.computeScrollerHeight(totalHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            return;
        }
        _super.prototype.updateSize.call(this, totalHeight, isAuto, isResize);
        if (this.dayGrid.colWeekNumbersVisible) {
            // Make sure all week number cells running down the side have the same width.
            // Record the width for cells created later.
            this.weekNumberWidth = util_1.matchCellWidths(this.el.find('.fc-week-number'));
        }
        // reset all heights to be natural
        this.scroller.clear();
        util_1.uncompensateScroll(headRowEl);
        this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed
        // is the event limit a constant level number?
        if (eventLimit && typeof eventLimit === 'number') {
            this.dayGrid.limitRows(eventLimit); // limit the levels first so the height can redistribute after
        }
        // distribute the height to the rows
        // (totalHeight is a "recommended" value if isAuto)
        scrollerHeight = this.computeScrollerHeight(totalHeight);
        this.setGridHeight(scrollerHeight, isAuto);
        // is the event limit dynamically calculated?
        if (eventLimit && typeof eventLimit !== 'number') {
            this.dayGrid.limitRows(eventLimit); // limit the levels after the grid's row heights have been set
        }
        if (!isAuto) {
            this.scroller.setHeight(scrollerHeight);
            scrollbarWidths = this.scroller.getScrollbarWidths();
            if (scrollbarWidths.left || scrollbarWidths.right) {
                util_1.compensateScroll(headRowEl, scrollbarWidths);
                // doing the scrollbar compensation might have created text overflow which created more height. redo
                scrollerHeight = this.computeScrollerHeight(totalHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            // guarantees the same scrollbar widths
            this.scroller.lockOverflow(scrollbarWidths);
        }
    };
    // given a desired total height of the view, returns what the height of the scroller should be
    BasicView.prototype.computeScrollerHeight = function (totalHeight) {
        return totalHeight -
            util_1.subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
    };
    // Sets the height of just the DayGrid component in this view
    BasicView.prototype.setGridHeight = function (height, isAuto) {
        if (isAuto) {
            util_1.undistributeHeight(this.dayGrid.rowEls); // let the rows be their natural height with no expanding
        }
        else {
            util_1.distributeHeight(this.dayGrid.rowEls, height, true); // true = compensate for height-hogging rows
        }
    };
    /* Scroll
    ------------------------------------------------------------------------------------------------------------------*/
    BasicView.prototype.computeInitialDateScroll = function () {
        return { top: 0 };
    };
    BasicView.prototype.queryDateScroll = function () {
        return { top: this.scroller.getScrollTop() };
    };
    BasicView.prototype.applyDateScroll = function (scroll) {
        if (scroll.top !== undefined) {
            this.scroller.setScrollTop(scroll.top);
        }
    };
    return BasicView;
}(View_1.default));
exports.default = BasicView;
BasicView.prototype.dateProfileGeneratorClass = BasicViewDateProfileGenerator_1.default;
BasicView.prototype.dayGridClass = DayGrid_1.default;
// customize the rendering behavior of BasicView's dayGrid
function makeDayGridSubclass(SuperClass) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(SubClass, _super);
        function SubClass() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.colWeekNumbersVisible = false; // display week numbers along the side?
            return _this;
        }
        // Generates the HTML that will go before the day-of week header cells
        SubClass.prototype.renderHeadIntroHtml = function () {
            var view = this.view;
            if (this.colWeekNumbersVisible) {
                return '' +
                    '<th class="fc-week-number ' + view.calendar.theme.getClass('widgetHeader') + '" ' + view.weekNumberStyleAttr() + '>' +
                    '<span>' + // needed for matchCellWidths
                    util_1.htmlEscape(this.opt('weekNumberTitle')) +
                    '</span>' +
                    '</th>';
            }
            return '';
        };
        // Generates the HTML that will go before content-skeleton cells that display the day/week numbers
        SubClass.prototype.renderNumberIntroHtml = function (row) {
            var view = this.view;
            var weekStart = this.getCellDate(row, 0);
            if (this.colWeekNumbersVisible) {
                return '' +
                    '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '>' +
                    view.buildGotoAnchorHtml(// aside from link, important for matchCellWidths
                    { date: weekStart, type: 'week', forceOff: this.colCnt === 1 }, weekStart.format('w') // inner HTML
                    ) +
                    '</td>';
            }
            return '';
        };
        // Generates the HTML that goes before the day bg cells for each day-row
        SubClass.prototype.renderBgIntroHtml = function () {
            var view = this.view;
            if (this.colWeekNumbersVisible) {
                return '<td class="fc-week-number ' + view.calendar.theme.getClass('widgetContent') + '" ' +
                    view.weekNumberStyleAttr() + '></td>';
            }
            return '';
        };
        // Generates the HTML that goes before every other type of row generated by DayGrid.
        // Affects helper-skeleton and highlight-skeleton rows.
        SubClass.prototype.renderIntroHtml = function () {
            var view = this.view;
            if (this.colWeekNumbersVisible) {
                return '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '></td>';
            }
            return '';
        };
        SubClass.prototype.getIsNumbersVisible = function () {
            return DayGrid_1.default.prototype.getIsNumbersVisible.apply(this, arguments) || this.colWeekNumbersVisible;
        };
        return SubClass;
    }(SuperClass));
}


/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var UnzonedRange_1 = __webpack_require__(5);
var ComponentFootprint_1 = __webpack_require__(12);
var EventDefParser_1 = __webpack_require__(49);
var EventSource_1 = __webpack_require__(6);
var util_1 = __webpack_require__(35);
var Constraints = /** @class */ (function () {
    function Constraints(eventManager, _calendar) {
        this.eventManager = eventManager;
        this._calendar = _calendar;
    }
    Constraints.prototype.opt = function (name) {
        return this._calendar.opt(name);
    };
    /*
    determines if eventInstanceGroup is allowed,
    in relation to other EVENTS and business hours.
    */
    Constraints.prototype.isEventInstanceGroupAllowed = function (eventInstanceGroup) {
        var eventDef = eventInstanceGroup.getEventDef();
        var eventFootprints = this.eventRangesToEventFootprints(eventInstanceGroup.getAllEventRanges());
        var i;
        var peerEventInstances = this.getPeerEventInstances(eventDef);
        var peerEventRanges = peerEventInstances.map(util_1.eventInstanceToEventRange);
        var peerEventFootprints = this.eventRangesToEventFootprints(peerEventRanges);
        var constraintVal = eventDef.getConstraint();
        var overlapVal = eventDef.getOverlap();
        var eventAllowFunc = this.opt('eventAllow');
        for (i = 0; i < eventFootprints.length; i++) {
            if (!this.isFootprintAllowed(eventFootprints[i].componentFootprint, peerEventFootprints, constraintVal, overlapVal, eventFootprints[i].eventInstance)) {
                return false;
            }
        }
        if (eventAllowFunc) {
            for (i = 0; i < eventFootprints.length; i++) {
                if (eventAllowFunc(eventFootprints[i].componentFootprint.toLegacy(this._calendar), eventFootprints[i].getEventLegacy()) === false) {
                    return false;
                }
            }
        }
        return true;
    };
    Constraints.prototype.getPeerEventInstances = function (eventDef) {
        return this.eventManager.getEventInstancesWithoutId(eventDef.id);
    };
    Constraints.prototype.isSelectionFootprintAllowed = function (componentFootprint) {
        var peerEventInstances = this.eventManager.getEventInstances();
        var peerEventRanges = peerEventInstances.map(util_1.eventInstanceToEventRange);
        var peerEventFootprints = this.eventRangesToEventFootprints(peerEventRanges);
        var selectAllowFunc;
        if (this.isFootprintAllowed(componentFootprint, peerEventFootprints, this.opt('selectConstraint'), this.opt('selectOverlap'))) {
            selectAllowFunc = this.opt('selectAllow');
            if (selectAllowFunc) {
                return selectAllowFunc(componentFootprint.toLegacy(this._calendar)) !== false;
            }
            else {
                return true;
            }
        }
        return false;
    };
    Constraints.prototype.isFootprintAllowed = function (componentFootprint, peerEventFootprints, constraintVal, overlapVal, subjectEventInstance // optional
    ) {
        var constraintFootprints; // ComponentFootprint[]
        var overlapEventFootprints; // EventFootprint[]
        if (constraintVal != null) {
            constraintFootprints = this.constraintValToFootprints(constraintVal, componentFootprint.isAllDay);
            if (!this.isFootprintWithinConstraints(componentFootprint, constraintFootprints)) {
                return false;
            }
        }
        overlapEventFootprints = this.collectOverlapEventFootprints(peerEventFootprints, componentFootprint);
        if (overlapVal === false) {
            if (overlapEventFootprints.length) {
                return false;
            }
        }
        else if (typeof overlapVal === 'function') {
            if (!isOverlapsAllowedByFunc(overlapEventFootprints, overlapVal, subjectEventInstance)) {
                return false;
            }
        }
        if (subjectEventInstance) {
            if (!isOverlapEventInstancesAllowed(overlapEventFootprints, subjectEventInstance)) {
                return false;
            }
        }
        return true;
    };
    // Constraint
    // ------------------------------------------------------------------------------------------------
    Constraints.prototype.isFootprintWithinConstraints = function (componentFootprint, constraintFootprints) {
        var i;
        for (i = 0; i < constraintFootprints.length; i++) {
            if (this.footprintContainsFootprint(constraintFootprints[i], componentFootprint)) {
                return true;
            }
        }
        return false;
    };
    Constraints.prototype.constraintValToFootprints = function (constraintVal, isAllDay) {
        var eventInstances;
        if (constraintVal === 'businessHours') {
            return this.buildCurrentBusinessFootprints(isAllDay);
        }
        else if (typeof constraintVal === 'object') {
            eventInstances = this.parseEventDefToInstances(constraintVal); // handles recurring events
            if (!eventInstances) {
                return this.parseFootprints(constraintVal);
            }
            else {
                return this.eventInstancesToFootprints(eventInstances);
            }
        }
        else if (constraintVal != null) {
            eventInstances = this.eventManager.getEventInstancesWithId(constraintVal);
            return this.eventInstancesToFootprints(eventInstances);
        }
    };
    // returns ComponentFootprint[]
    // uses current view's range
    Constraints.prototype.buildCurrentBusinessFootprints = function (isAllDay) {
        var view = this._calendar.view;
        var businessHourGenerator = view.get('businessHourGenerator');
        var unzonedRange = view.dateProfile.activeUnzonedRange;
        var eventInstanceGroup = businessHourGenerator.buildEventInstanceGroup(isAllDay, unzonedRange);
        if (eventInstanceGroup) {
            return this.eventInstancesToFootprints(eventInstanceGroup.eventInstances);
        }
        else {
            return [];
        }
    };
    // conversion util
    Constraints.prototype.eventInstancesToFootprints = function (eventInstances) {
        var eventRanges = eventInstances.map(util_1.eventInstanceToEventRange);
        var eventFootprints = this.eventRangesToEventFootprints(eventRanges);
        return eventFootprints.map(util_1.eventFootprintToComponentFootprint);
    };
    // Overlap
    // ------------------------------------------------------------------------------------------------
    Constraints.prototype.collectOverlapEventFootprints = function (peerEventFootprints, targetFootprint) {
        var overlapEventFootprints = [];
        var i;
        for (i = 0; i < peerEventFootprints.length; i++) {
            if (this.footprintsIntersect(targetFootprint, peerEventFootprints[i].componentFootprint)) {
                overlapEventFootprints.push(peerEventFootprints[i]);
            }
        }
        return overlapEventFootprints;
    };
    // Conversion: eventDefs -> eventInstances -> eventRanges -> eventFootprints -> componentFootprints
    // ------------------------------------------------------------------------------------------------
    // NOTE: this might seem like repetitive code with the Grid class, however, this code is related to
    // constraints whereas the Grid code is related to rendering. Each approach might want to convert
    // eventRanges -> eventFootprints in a different way. Regardless, there are opportunities to make
    // this more DRY.
    /*
    Returns false on invalid input.
    */
    Constraints.prototype.parseEventDefToInstances = function (eventInput) {
        var eventManager = this.eventManager;
        var eventDef = EventDefParser_1.default.parse(eventInput, new EventSource_1.default(this._calendar));
        if (!eventDef) {
            return false;
        }
        return eventDef.buildInstances(eventManager.currentPeriod.unzonedRange);
    };
    Constraints.prototype.eventRangesToEventFootprints = function (eventRanges) {
        var i;
        var eventFootprints = [];
        for (i = 0; i < eventRanges.length; i++) {
            eventFootprints.push.apply(// footprints
            eventFootprints, this.eventRangeToEventFootprints(eventRanges[i]));
        }
        return eventFootprints;
    };
    Constraints.prototype.eventRangeToEventFootprints = function (eventRange) {
        return [util_1.eventRangeToEventFootprint(eventRange)];
    };
    /*
    Parses footprints directly.
    Very similar to EventDateProfile::parse :(
    */
    Constraints.prototype.parseFootprints = function (rawInput) {
        var start;
        var end;
        if (rawInput.start) {
            start = this._calendar.moment(rawInput.start);
            if (!start.isValid()) {
                start = null;
            }
        }
        if (rawInput.end) {
            end = this._calendar.moment(rawInput.end);
            if (!end.isValid()) {
                end = null;
            }
        }
        return [
            new ComponentFootprint_1.default(new UnzonedRange_1.default(start, end), (start && !start.hasTime()) || (end && !end.hasTime()) // isAllDay
            )
        ];
    };
    // Footprint Utils
    // ----------------------------------------------------------------------------------------
    Constraints.prototype.footprintContainsFootprint = function (outerFootprint, innerFootprint) {
        return outerFootprint.unzonedRange.containsRange(innerFootprint.unzonedRange);
    };
    Constraints.prototype.footprintsIntersect = function (footprint0, footprint1) {
        return footprint0.unzonedRange.intersectsWith(footprint1.unzonedRange);
    };
    return Constraints;
}());
exports.default = Constraints;
// optional subjectEventInstance
function isOverlapsAllowedByFunc(overlapEventFootprints, overlapFunc, subjectEventInstance) {
    var i;
    for (i = 0; i < overlapEventFootprints.length; i++) {
        if (!overlapFunc(overlapEventFootprints[i].eventInstance.toLegacy(), subjectEventInstance ? subjectEventInstance.toLegacy() : null)) {
            return false;
        }
    }
    return true;
}
function isOverlapEventInstancesAllowed(overlapEventFootprints, subjectEventInstance) {
    var subjectLegacyInstance = subjectEventInstance.toLegacy();
    var i;
    var overlapEventInstance;
    var overlapEventDef;
    var overlapVal;
    for (i = 0; i < overlapEventFootprints.length; i++) {
        overlapEventInstance = overlapEventFootprints[i].eventInstance;
        overlapEventDef = overlapEventInstance.def;
        // don't need to pass in calendar, because don't want to consider global eventOverlap property,
        // because we already considered that earlier in the process.
        overlapVal = overlapEventDef.getOverlap();
        if (overlapVal === false) {
            return false;
        }
        else if (typeof overlapVal === 'function') {
            if (!overlapVal(overlapEventInstance.toLegacy(), subjectLegacyInstance)) {
                return false;
            }
        }
    }
    return true;
}


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

/*
USAGE:
  import { default as ParsableModelMixin, ParsableModelInterface } from './ParsableModelMixin'
in class:
  applyProps: ParsableModelInterface['applyProps']
  applyManualStandardProps: ParsableModelInterface['applyManualStandardProps']
  applyMiscProps: ParsableModelInterface['applyMiscProps']
  isStandardProp: ParsableModelInterface['isStandardProp']
  static defineStandardProps = ParsableModelMixin.defineStandardProps
  static copyVerbatimStandardProps = ParsableModelMixin.copyVerbatimStandardProps
after class:
  ParsableModelMixin.mixInto(TheClass)
*/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var Mixin_1 = __webpack_require__(14);
var ParsableModelMixin = /** @class */ (function (_super) {
    tslib_1.__extends(ParsableModelMixin, _super);
    function ParsableModelMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParsableModelMixin.defineStandardProps = function (propDefs) {
        var proto = this.prototype;
        if (!proto.hasOwnProperty('standardPropMap')) {
            proto.standardPropMap = Object.create(proto.standardPropMap);
        }
        util_1.copyOwnProps(propDefs, proto.standardPropMap);
    };
    ParsableModelMixin.copyVerbatimStandardProps = function (src, dest) {
        var map = this.prototype.standardPropMap;
        var propName;
        for (propName in map) {
            if (src[propName] != null && // in the src object?
                map[propName] === true // false means "copy verbatim"
            ) {
                dest[propName] = src[propName];
            }
        }
    };
    /*
    Returns true/false for success.
    Meant to be only called ONCE, at object creation.
    */
    ParsableModelMixin.prototype.applyProps = function (rawProps) {
        var standardPropMap = this.standardPropMap;
        var manualProps = {};
        var miscProps = {};
        var propName;
        for (propName in rawProps) {
            if (standardPropMap[propName] === true) {
                this[propName] = rawProps[propName];
            }
            else if (standardPropMap[propName] === false) {
                manualProps[propName] = rawProps[propName];
            }
            else {
                miscProps[propName] = rawProps[propName];
            }
        }
        this.applyMiscProps(miscProps);
        return this.applyManualStandardProps(manualProps);
    };
    /*
    If subclasses override, they must call this supermethod and return the boolean response.
    Meant to be only called ONCE, at object creation.
    */
    ParsableModelMixin.prototype.applyManualStandardProps = function (rawProps) {
        return true;
    };
    /*
    Can be called even after initial object creation.
    */
    ParsableModelMixin.prototype.applyMiscProps = function (rawProps) {
        // subclasses can implement
    };
    /*
    TODO: why is this a method when defineStandardProps is static
    */
    ParsableModelMixin.prototype.isStandardProp = function (propName) {
        return propName in this.standardPropMap;
    };
    return ParsableModelMixin;
}(Mixin_1.default));
exports.default = ParsableModelMixin;
ParsableModelMixin.prototype.standardPropMap = {}; // will be cloned by defineStandardProps


/***/ }),
/* 209 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var EventInstance = /** @class */ (function () {
    function EventInstance(def, dateProfile) {
        this.def = def;
        this.dateProfile = dateProfile;
    }
    EventInstance.prototype.toLegacy = function () {
        var dateProfile = this.dateProfile;
        var obj = this.def.toLegacy();
        obj.start = dateProfile.start.clone();
        obj.end = dateProfile.end ? dateProfile.end.clone() : null;
        return obj;
    };
    return EventInstance;
}());
exports.default = EventInstance;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var EventDef_1 = __webpack_require__(34);
var EventInstance_1 = __webpack_require__(209);
var EventDateProfile_1 = __webpack_require__(17);
var RecurringEventDef = /** @class */ (function (_super) {
    tslib_1.__extends(RecurringEventDef, _super);
    function RecurringEventDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecurringEventDef.prototype.isAllDay = function () {
        return !this.startTime && !this.endTime;
    };
    RecurringEventDef.prototype.buildInstances = function (unzonedRange) {
        var calendar = this.source.calendar;
        var unzonedDate = unzonedRange.getStart();
        var unzonedEnd = unzonedRange.getEnd();
        var zonedDayStart;
        var instanceStart;
        var instanceEnd;
        var instances = [];
        while (unzonedDate.isBefore(unzonedEnd)) {
            // if everyday, or this particular day-of-week
            if (!this.dowHash || this.dowHash[unzonedDate.day()]) {
                zonedDayStart = calendar.applyTimezone(unzonedDate);
                instanceStart = zonedDayStart.clone();
                instanceEnd = null;
                if (this.startTime) {
                    instanceStart.time(this.startTime);
                }
                else {
                    instanceStart.stripTime();
                }
                if (this.endTime) {
                    instanceEnd = zonedDayStart.clone().time(this.endTime);
                }
                instances.push(new EventInstance_1.default(this, // definition
                new EventDateProfile_1.default(instanceStart, instanceEnd, calendar)));
            }
            unzonedDate.add(1, 'days');
        }
        return instances;
    };
    RecurringEventDef.prototype.setDow = function (dowNumbers) {
        if (!this.dowHash) {
            this.dowHash = {};
        }
        for (var i = 0; i < dowNumbers.length; i++) {
            this.dowHash[dowNumbers[i]] = true;
        }
    };
    RecurringEventDef.prototype.clone = function () {
        var def = _super.prototype.clone.call(this);
        if (def.startTime) {
            def.startTime = moment.duration(this.startTime);
        }
        if (def.endTime) {
            def.endTime = moment.duration(this.endTime);
        }
        if (this.dowHash) {
            def.dowHash = $.extend({}, this.dowHash);
        }
        return def;
    };
    return RecurringEventDef;
}(EventDef_1.default));
exports.default = RecurringEventDef;
/*
HACK to work with TypeScript mixins
NOTE: if super-method fails, should still attempt to apply
*/
RecurringEventDef.prototype.applyProps = function (rawProps) {
    var superSuccess = EventDef_1.default.prototype.applyProps.call(this, rawProps);
    if (rawProps.start) {
        this.startTime = moment.duration(rawProps.start);
    }
    if (rawProps.end) {
        this.endTime = moment.duration(rawProps.end);
    }
    if (rawProps.dow) {
        this.setDow(rawProps.dow);
    }
    return superSuccess;
};
// Parsing
// ---------------------------------------------------------------------------------------------------------------------
RecurringEventDef.defineStandardProps({
    start: false,
    end: false,
    dow: false
});


/***/ }),
/* 211 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var EventRange = /** @class */ (function () {
    function EventRange(unzonedRange, eventDef, eventInstance) {
        this.unzonedRange = unzonedRange;
        this.eventDef = eventDef;
        if (eventInstance) {
            this.eventInstance = eventInstance;
        }
    }
    return EventRange;
}());
exports.default = EventRange;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(35);
var EventInstanceGroup_1 = __webpack_require__(18);
var RecurringEventDef_1 = __webpack_require__(210);
var EventSource_1 = __webpack_require__(6);
var BUSINESS_HOUR_EVENT_DEFAULTS = {
    start: '09:00',
    end: '17:00',
    dow: [1, 2, 3, 4, 5],
    rendering: 'inverse-background'
    // classNames are defined in businessHoursSegClasses
};
var BusinessHourGenerator = /** @class */ (function () {
    function BusinessHourGenerator(rawComplexDef, calendar) {
        this.rawComplexDef = rawComplexDef;
        this.calendar = calendar;
    }
    BusinessHourGenerator.prototype.buildEventInstanceGroup = function (isAllDay, unzonedRange) {
        var eventDefs = this.buildEventDefs(isAllDay);
        var eventInstanceGroup;
        if (eventDefs.length) {
            eventInstanceGroup = new EventInstanceGroup_1.default(util_1.eventDefsToEventInstances(eventDefs, unzonedRange));
            // so that inverse-background rendering can happen even when no eventRanges in view
            eventInstanceGroup.explicitEventDef = eventDefs[0];
            return eventInstanceGroup;
        }
    };
    BusinessHourGenerator.prototype.buildEventDefs = function (isAllDay) {
        var rawComplexDef = this.rawComplexDef;
        var rawDefs = [];
        var requireDow = false;
        var i;
        var defs = [];
        if (rawComplexDef === true) {
            rawDefs = [{}]; // will get BUSINESS_HOUR_EVENT_DEFAULTS verbatim
        }
        else if ($.isPlainObject(rawComplexDef)) {
            rawDefs = [rawComplexDef];
        }
        else if ($.isArray(rawComplexDef)) {
            rawDefs = rawComplexDef;
            requireDow = true; // every sub-definition NEEDS a day-of-week
        }
        for (i = 0; i < rawDefs.length; i++) {
            if (!requireDow || rawDefs[i].dow) {
                defs.push(this.buildEventDef(isAllDay, rawDefs[i]));
            }
        }
        return defs;
    };
    BusinessHourGenerator.prototype.buildEventDef = function (isAllDay, rawDef) {
        var fullRawDef = $.extend({}, BUSINESS_HOUR_EVENT_DEFAULTS, rawDef);
        if (isAllDay) {
            fullRawDef.start = null;
            fullRawDef.end = null;
        }
        return RecurringEventDef_1.default.parse(fullRawDef, new EventSource_1.default(this.calendar) // dummy source
        );
    };
    return BusinessHourGenerator;
}());
exports.default = BusinessHourGenerator;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Theme_1 = __webpack_require__(19);
var StandardTheme = /** @class */ (function (_super) {
    tslib_1.__extends(StandardTheme, _super);
    function StandardTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardTheme;
}(Theme_1.default));
exports.default = StandardTheme;
StandardTheme.prototype.classes = {
    widget: 'fc-unthemed',
    widgetHeader: 'fc-widget-header',
    widgetContent: 'fc-widget-content',
    buttonGroup: 'fc-button-group',
    button: 'fc-button',
    cornerLeft: 'fc-corner-left',
    cornerRight: 'fc-corner-right',
    stateDefault: 'fc-state-default',
    stateActive: 'fc-state-active',
    stateDisabled: 'fc-state-disabled',
    stateHover: 'fc-state-hover',
    stateDown: 'fc-state-down',
    popoverHeader: 'fc-widget-header',
    popoverContent: 'fc-widget-content',
    // day grid
    headerRow: 'fc-widget-header',
    dayRow: 'fc-widget-content',
    // list view
    listView: 'fc-widget-content'
};
StandardTheme.prototype.baseIconClass = 'fc-icon';
StandardTheme.prototype.iconClasses = {
    close: 'fc-icon-x',
    prev: 'fc-icon-left-single-arrow',
    next: 'fc-icon-right-single-arrow',
    prevYear: 'fc-icon-left-double-arrow',
    nextYear: 'fc-icon-right-double-arrow'
};
StandardTheme.prototype.iconOverrideOption = 'buttonIcons';
StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Theme_1 = __webpack_require__(19);
var JqueryUiTheme = /** @class */ (function (_super) {
    tslib_1.__extends(JqueryUiTheme, _super);
    function JqueryUiTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JqueryUiTheme;
}(Theme_1.default));
exports.default = JqueryUiTheme;
JqueryUiTheme.prototype.classes = {
    widget: 'ui-widget',
    widgetHeader: 'ui-widget-header',
    widgetContent: 'ui-widget-content',
    buttonGroup: 'fc-button-group',
    button: 'ui-button',
    cornerLeft: 'ui-corner-left',
    cornerRight: 'ui-corner-right',
    stateDefault: 'ui-state-default',
    stateActive: 'ui-state-active',
    stateDisabled: 'ui-state-disabled',
    stateHover: 'ui-state-hover',
    stateDown: 'ui-state-down',
    today: 'ui-state-highlight',
    popoverHeader: 'ui-widget-header',
    popoverContent: 'ui-widget-content',
    // day grid
    headerRow: 'ui-widget-header',
    dayRow: 'ui-widget-content',
    // list view
    listView: 'ui-widget-content'
};
JqueryUiTheme.prototype.baseIconClass = 'ui-icon';
JqueryUiTheme.prototype.iconClasses = {
    close: 'ui-icon-closethick',
    prev: 'ui-icon-circle-triangle-w',
    next: 'ui-icon-circle-triangle-e',
    prevYear: 'ui-icon-seek-prev',
    nextYear: 'ui-icon-seek-next'
};
JqueryUiTheme.prototype.iconOverrideOption = 'themeButtonIcons';
JqueryUiTheme.prototype.iconOverrideCustomButtonOption = 'themeIcon';
JqueryUiTheme.prototype.iconOverridePrefix = 'ui-icon-';


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var Promise_1 = __webpack_require__(20);
var EventSource_1 = __webpack_require__(6);
var FuncEventSource = /** @class */ (function (_super) {
    tslib_1.__extends(FuncEventSource, _super);
    function FuncEventSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FuncEventSource.parse = function (rawInput, calendar) {
        var rawProps;
        // normalize raw input
        if ($.isFunction(rawInput.events)) {
            rawProps = rawInput;
        }
        else if ($.isFunction(rawInput)) {
            rawProps = { events: rawInput };
        }
        if (rawProps) {
            return EventSource_1.default.parse.call(this, rawProps, calendar);
        }
        return false;
    };
    FuncEventSource.prototype.fetch = function (start, end, timezone) {
        var _this = this;
        this.calendar.pushLoading();
        return Promise_1.default.construct(function (onResolve) {
            _this.func.call(_this.calendar, start.clone(), end.clone(), timezone, function (rawEventDefs) {
                _this.calendar.popLoading();
                onResolve(_this.parseEventDefs(rawEventDefs));
            });
        });
    };
    FuncEventSource.prototype.getPrimitive = function () {
        return this.func;
    };
    FuncEventSource.prototype.applyManualStandardProps = function (rawProps) {
        var superSuccess = _super.prototype.applyManualStandardProps.call(this, rawProps);
        this.func = rawProps.events;
        return superSuccess;
    };
    return FuncEventSource;
}(EventSource_1.default));
exports.default = FuncEventSource;
FuncEventSource.defineStandardProps({
    events: false // don't automatically transfer
});


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var Promise_1 = __webpack_require__(20);
var EventSource_1 = __webpack_require__(6);
var JsonFeedEventSource = /** @class */ (function (_super) {
    tslib_1.__extends(JsonFeedEventSource, _super);
    function JsonFeedEventSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JsonFeedEventSource.parse = function (rawInput, calendar) {
        var rawProps;
        // normalize raw input
        if (typeof rawInput.url === 'string') {
            rawProps = rawInput;
        }
        else if (typeof rawInput === 'string') {
            rawProps = { url: rawInput };
        }
        if (rawProps) {
            return EventSource_1.default.parse.call(this, rawProps, calendar);
        }
        return false;
    };
    JsonFeedEventSource.prototype.fetch = function (start, end, timezone) {
        var _this = this;
        var ajaxSettings = this.ajaxSettings;
        var onSuccess = ajaxSettings.success;
        var onError = ajaxSettings.error;
        var requestParams = this.buildRequestParams(start, end, timezone);
        // todo: eventually handle the promise's then,
        // don't intercept success/error
        // tho will be a breaking API change
        this.calendar.pushLoading();
        return Promise_1.default.construct(function (onResolve, onReject) {
            $.ajax($.extend({}, // destination
            JsonFeedEventSource.AJAX_DEFAULTS, ajaxSettings, {
                url: _this.url,
                data: requestParams,
                success: function (rawEventDefs, status, xhr) {
                    var callbackRes;
                    _this.calendar.popLoading();
                    if (rawEventDefs) {
                        callbackRes = util_1.applyAll(onSuccess, _this, [rawEventDefs, status, xhr]); // redirect `this`
                        if ($.isArray(callbackRes)) {
                            rawEventDefs = callbackRes;
                        }
                        onResolve(_this.parseEventDefs(rawEventDefs));
                    }
                    else {
                        onReject();
                    }
                },
                error: function (xhr, statusText, errorThrown) {
                    _this.calendar.popLoading();
                    util_1.applyAll(onError, _this, [xhr, statusText, errorThrown]); // redirect `this`
                    onReject();
                }
            }));
        });
    };
    JsonFeedEventSource.prototype.buildRequestParams = function (start, end, timezone) {
        var calendar = this.calendar;
        var ajaxSettings = this.ajaxSettings;
        var startParam;
        var endParam;
        var timezoneParam;
        var customRequestParams;
        var params = {};
        startParam = this.startParam;
        if (startParam == null) {
            startParam = calendar.opt('startParam');
        }
        endParam = this.endParam;
        if (endParam == null) {
            endParam = calendar.opt('endParam');
        }
        timezoneParam = this.timezoneParam;
        if (timezoneParam == null) {
            timezoneParam = calendar.opt('timezoneParam');
        }
        // retrieve any outbound GET/POST $.ajax data from the options
        if ($.isFunction(ajaxSettings.data)) {
            // supplied as a function that returns a key/value object
            customRequestParams = ajaxSettings.data();
        }
        else {
            // probably supplied as a straight key/value object
            customRequestParams = ajaxSettings.data || {};
        }
        $.extend(params, customRequestParams);
        params[startParam] = start.format();
        params[endParam] = end.format();
        if (timezone && timezone !== 'local') {
            params[timezoneParam] = timezone;
        }
        return params;
    };
    JsonFeedEventSource.prototype.getPrimitive = function () {
        return this.url;
    };
    JsonFeedEventSource.prototype.applyMiscProps = function (rawProps) {
        this.ajaxSettings = rawProps;
    };
    JsonFeedEventSource.AJAX_DEFAULTS = {
        dataType: 'json',
        cache: false
    };
    return JsonFeedEventSource;
}(EventSource_1.default));
exports.default = JsonFeedEventSource;
JsonFeedEventSource.defineStandardProps({
    // automatically transfer (true)...
    url: true,
    startParam: true,
    endParam: true,
    timezoneParam: true
});


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var EmitterMixin_1 = __webpack_require__(11);
var TaskQueue = /** @class */ (function () {
    function TaskQueue() {
        this.q = [];
        this.isPaused = false;
        this.isRunning = false;
    }
    TaskQueue.prototype.queue = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.q.push.apply(this.q, args); // append
        this.tryStart();
    };
    TaskQueue.prototype.pause = function () {
        this.isPaused = true;
    };
    TaskQueue.prototype.resume = function () {
        this.isPaused = false;
        this.tryStart();
    };
    TaskQueue.prototype.getIsIdle = function () {
        return !this.isRunning && !this.isPaused;
    };
    TaskQueue.prototype.tryStart = function () {
        if (!this.isRunning && this.canRunNext()) {
            this.isRunning = true;
            this.trigger('start');
            this.runRemaining();
        }
    };
    TaskQueue.prototype.canRunNext = function () {
        return !this.isPaused && this.q.length;
    };
    TaskQueue.prototype.runRemaining = function () {
        var _this = this;
        var task;
        var res;
        do {
            task = this.q.shift(); // always freshly reference q. might have been reassigned.
            res = this.runTask(task);
            if (res && res.then) {
                res.then(function () {
                    if (_this.canRunNext()) {
                        _this.runRemaining();
                    }
                });
                return; // prevent marking as stopped
            }
        } while (this.canRunNext());
        this.trigger('stop'); // not really a 'stop' ... more of a 'drained'
        this.isRunning = false;
        // if 'stop' handler added more tasks.... TODO: write test for this
        this.tryStart();
    };
    TaskQueue.prototype.runTask = function (task) {
        return task(); // task *is* the function, but subclasses can change the format of a task
    };
    return TaskQueue;
}());
exports.default = TaskQueue;
EmitterMixin_1.default.mixInto(TaskQueue);


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var TaskQueue_1 = __webpack_require__(217);
var RenderQueue = /** @class */ (function (_super) {
    tslib_1.__extends(RenderQueue, _super);
    function RenderQueue(waitsByNamespace) {
        var _this = _super.call(this) || this;
        _this.waitsByNamespace = waitsByNamespace || {};
        return _this;
    }
    RenderQueue.prototype.queue = function (taskFunc, namespace, type) {
        var task = {
            func: taskFunc,
            namespace: namespace,
            type: type
        };
        var waitMs;
        if (namespace) {
            waitMs = this.waitsByNamespace[namespace];
        }
        if (this.waitNamespace) {
            if (namespace === this.waitNamespace && waitMs != null) {
                this.delayWait(waitMs);
            }
            else {
                this.clearWait();
                this.tryStart();
            }
        }
        if (this.compoundTask(task)) {
            if (!this.waitNamespace && waitMs != null) {
                this.startWait(namespace, waitMs);
            }
            else {
                this.tryStart();
            }
        }
    };
    RenderQueue.prototype.startWait = function (namespace, waitMs) {
        this.waitNamespace = namespace;
        this.spawnWait(waitMs);
    };
    RenderQueue.prototype.delayWait = function (waitMs) {
        clearTimeout(this.waitId);
        this.spawnWait(waitMs);
    };
    RenderQueue.prototype.spawnWait = function (waitMs) {
        var _this = this;
        this.waitId = setTimeout(function () {
            _this.waitNamespace = null;
            _this.tryStart();
        }, waitMs);
    };
    RenderQueue.prototype.clearWait = function () {
        if (this.waitNamespace) {
            clearTimeout(this.waitId);
            this.waitId = null;
            this.waitNamespace = null;
        }
    };
    RenderQueue.prototype.canRunNext = function () {
        if (!_super.prototype.canRunNext.call(this)) {
            return false;
        }
        // waiting for a certain namespace to stop receiving tasks?
        if (this.waitNamespace) {
            var q = this.q;
            // if there was a different namespace task in the meantime,
            // that forces all previously-waiting tasks to suddenly execute.
            // TODO: find a way to do this in constant time.
            for (var i = 0; i < q.length; i++) {
                if (q[i].namespace !== this.waitNamespace) {
                    return true; // allow execution
                }
            }
            return false;
        }
        return true;
    };
    RenderQueue.prototype.runTask = function (task) {
        task.func();
    };
    RenderQueue.prototype.compoundTask = function (newTask) {
        var q = this.q;
        var shouldAppend = true;
        var i;
        var task;
        if (newTask.namespace && newTask.type === 'destroy') {
            // remove all init/add/remove ops with same namespace, regardless of order
            for (i = q.length - 1; i >= 0; i--) {
                task = q[i];
                switch (task.type) {
                    case 'init':
                        shouldAppend = false;
                    // the latest destroy is cancelled out by not doing the init
                    /* falls through */
                    case 'add':
                    /* falls through */
                    case 'remove':
                        q.splice(i, 1); // remove task
                }
            }
        }
        if (shouldAppend) {
            q.push(newTask);
        }
        return shouldAppend;
    };
    return RenderQueue;
}(TaskQueue_1.default));
exports.default = RenderQueue;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var moment_ext_1 = __webpack_require__(10);
var date_formatting_1 = __webpack_require__(47);
var Component_1 = __webpack_require__(237);
var util_2 = __webpack_require__(35);
var DateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DateComponent, _super);
    function DateComponent(_view, _options) {
        var _this = _super.call(this) || this;
        _this.isRTL = false; // frequently accessed options
        _this.hitsNeededDepth = 0; // necessary because multiple callers might need the same hits
        _this.hasAllDayBusinessHours = false; // TODO: unify with largeUnit and isTimeScale?
        _this.isDatesRendered = false;
        // hack to set options prior to the this.opt calls
        if (_view) {
            _this['view'] = _view;
        }
        if (_options) {
            _this['options'] = _options;
        }
        _this.uid = String(DateComponent.guid++);
        _this.childrenByUid = {};
        _this.nextDayThreshold = moment.duration(_this.opt('nextDayThreshold'));
        _this.isRTL = _this.opt('isRTL');
        if (_this.fillRendererClass) {
            _this.fillRenderer = new _this.fillRendererClass(_this);
        }
        if (_this.eventRendererClass) {
            _this.eventRenderer = new _this.eventRendererClass(_this, _this.fillRenderer);
        }
        if (_this.helperRendererClass && _this.eventRenderer) {
            _this.helperRenderer = new _this.helperRendererClass(_this, _this.eventRenderer);
        }
        if (_this.businessHourRendererClass && _this.fillRenderer) {
            _this.businessHourRenderer = new _this.businessHourRendererClass(_this, _this.fillRenderer);
        }
        return _this;
    }
    DateComponent.prototype.addChild = function (child) {
        if (!this.childrenByUid[child.uid]) {
            this.childrenByUid[child.uid] = child;
            return true;
        }
        return false;
    };
    DateComponent.prototype.removeChild = function (child) {
        if (this.childrenByUid[child.uid]) {
            delete this.childrenByUid[child.uid];
            return true;
        }
        return false;
    };
    // TODO: only do if isInDom?
    // TODO: make part of Component, along with children/batch-render system?
    DateComponent.prototype.updateSize = function (totalHeight, isAuto, isResize) {
        this.callChildren('updateSize', arguments);
    };
    // Options
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.opt = function (name) {
        return this._getView().opt(name); // default implementation
    };
    DateComponent.prototype.publiclyTrigger = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var calendar = this._getCalendar();
        return calendar.publiclyTrigger.apply(calendar, args);
    };
    DateComponent.prototype.hasPublicHandlers = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var calendar = this._getCalendar();
        return calendar.hasPublicHandlers.apply(calendar, args);
    };
    // Date
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.executeDateRender = function (dateProfile) {
        this.dateProfile = dateProfile; // for rendering
        this.renderDates(dateProfile);
        this.isDatesRendered = true;
        this.callChildren('executeDateRender', arguments);
    };
    DateComponent.prototype.executeDateUnrender = function () {
        this.callChildren('executeDateUnrender', arguments);
        this.dateProfile = null;
        this.unrenderDates();
        this.isDatesRendered = false;
    };
    // date-cell content only
    DateComponent.prototype.renderDates = function (dateProfile) {
        // subclasses should implement
    };
    // date-cell content only
    DateComponent.prototype.unrenderDates = function () {
        // subclasses should override
    };
    // Now-Indicator
    // -----------------------------------------------------------------------------------------------------------------
    // Returns a string unit, like 'second' or 'minute' that defined how often the current time indicator
    // should be refreshed. If something falsy is returned, no time indicator is rendered at all.
    DateComponent.prototype.getNowIndicatorUnit = function () {
        // subclasses should implement
    };
    // Renders a current time indicator at the given datetime
    DateComponent.prototype.renderNowIndicator = function (date) {
        this.callChildren('renderNowIndicator', arguments);
    };
    // Undoes the rendering actions from renderNowIndicator
    DateComponent.prototype.unrenderNowIndicator = function () {
        this.callChildren('unrenderNowIndicator', arguments);
    };
    // Business Hours
    // ---------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.renderBusinessHours = function (businessHourGenerator) {
        if (this.businessHourRenderer) {
            this.businessHourRenderer.render(businessHourGenerator);
        }
        this.callChildren('renderBusinessHours', arguments);
    };
    // Unrenders previously-rendered business-hours
    DateComponent.prototype.unrenderBusinessHours = function () {
        this.callChildren('unrenderBusinessHours', arguments);
        if (this.businessHourRenderer) {
            this.businessHourRenderer.unrender();
        }
    };
    // Event Displaying
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.executeEventRender = function (eventsPayload) {
        if (this.eventRenderer) {
            this.eventRenderer.rangeUpdated(); // poorly named now
            this.eventRenderer.render(eventsPayload);
        }
        else if (this['renderEvents']) {
            this['renderEvents'](convertEventsPayloadToLegacyArray(eventsPayload));
        }
        this.callChildren('executeEventRender', arguments);
    };
    DateComponent.prototype.executeEventUnrender = function () {
        this.callChildren('executeEventUnrender', arguments);
        if (this.eventRenderer) {
            this.eventRenderer.unrender();
        }
        else if (this['destroyEvents']) {
            this['destroyEvents']();
        }
    };
    DateComponent.prototype.getBusinessHourSegs = function () {
        var segs = this.getOwnBusinessHourSegs();
        this.iterChildren(function (child) {
            segs.push.apply(segs, child.getBusinessHourSegs());
        });
        return segs;
    };
    DateComponent.prototype.getOwnBusinessHourSegs = function () {
        if (this.businessHourRenderer) {
            return this.businessHourRenderer.getSegs();
        }
        return [];
    };
    DateComponent.prototype.getEventSegs = function () {
        var segs = this.getOwnEventSegs();
        this.iterChildren(function (child) {
            segs.push.apply(segs, child.getEventSegs());
        });
        return segs;
    };
    DateComponent.prototype.getOwnEventSegs = function () {
        if (this.eventRenderer) {
            return this.eventRenderer.getSegs();
        }
        return [];
    };
    // Event Rendering Triggering
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.triggerAfterEventsRendered = function () {
        this.triggerAfterEventSegsRendered(this.getEventSegs());
        this.publiclyTrigger('eventAfterAllRender', {
            context: this,
            args: [this]
        });
    };
    DateComponent.prototype.triggerAfterEventSegsRendered = function (segs) {
        var _this = this;
        // an optimization, because getEventLegacy is expensive
        if (this.hasPublicHandlers('eventAfterRender')) {
            segs.forEach(function (seg) {
                var legacy;
                if (seg.el) {
                    legacy = seg.footprint.getEventLegacy();
                    _this.publiclyTrigger('eventAfterRender', {
                        context: legacy,
                        args: [legacy, seg.el, _this]
                    });
                }
            });
        }
    };
    DateComponent.prototype.triggerBeforeEventsDestroyed = function () {
        this.triggerBeforeEventSegsDestroyed(this.getEventSegs());
    };
    DateComponent.prototype.triggerBeforeEventSegsDestroyed = function (segs) {
        var _this = this;
        if (this.hasPublicHandlers('eventDestroy')) {
            segs.forEach(function (seg) {
                var legacy;
                if (seg.el) {
                    legacy = seg.footprint.getEventLegacy();
                    _this.publiclyTrigger('eventDestroy', {
                        context: legacy,
                        args: [legacy, seg.el, _this]
                    });
                }
            });
        }
    };
    // Event Rendering Utils
    // -----------------------------------------------------------------------------------------------------------------
    // Hides all rendered event segments linked to the given event
    // RECURSIVE with subcomponents
    DateComponent.prototype.showEventsWithId = function (eventDefId) {
        this.getEventSegs().forEach(function (seg) {
            if (seg.footprint.eventDef.id === eventDefId &&
                seg.el // necessary?
            ) {
                seg.el.css('visibility', '');
            }
        });
        this.callChildren('showEventsWithId', arguments);
    };
    // Shows all rendered event segments linked to the given event
    // RECURSIVE with subcomponents
    DateComponent.prototype.hideEventsWithId = function (eventDefId) {
        this.getEventSegs().forEach(function (seg) {
            if (seg.footprint.eventDef.id === eventDefId &&
                seg.el // necessary?
            ) {
                seg.el.css('visibility', 'hidden');
            }
        });
        this.callChildren('hideEventsWithId', arguments);
    };
    // Drag-n-Drop Rendering (for both events and external elements)
    // ---------------------------------------------------------------------------------------------------------------
    // Renders a visual indication of a event or external-element drag over the given drop zone.
    // If an external-element, seg will be `null`.
    // Must return elements used for any mock events.
    DateComponent.prototype.renderDrag = function (eventFootprints, seg, isTouch) {
        var renderedHelper = false;
        this.iterChildren(function (child) {
            if (child.renderDrag(eventFootprints, seg, isTouch)) {
                renderedHelper = true;
            }
        });
        return renderedHelper;
    };
    // Unrenders a visual indication of an event or external-element being dragged.
    DateComponent.prototype.unrenderDrag = function () {
        this.callChildren('unrenderDrag', arguments);
    };
    // Event Resizing
    // ---------------------------------------------------------------------------------------------------------------
    // Renders a visual indication of an event being resized.
    DateComponent.prototype.renderEventResize = function (eventFootprints, seg, isTouch) {
        this.callChildren('renderEventResize', arguments);
    };
    // Unrenders a visual indication of an event being resized.
    DateComponent.prototype.unrenderEventResize = function () {
        this.callChildren('unrenderEventResize', arguments);
    };
    // Selection
    // ---------------------------------------------------------------------------------------------------------------
    // Renders a visual indication of the selection
    // TODO: rename to `renderSelection` after legacy is gone
    DateComponent.prototype.renderSelectionFootprint = function (componentFootprint) {
        this.renderHighlight(componentFootprint);
        this.callChildren('renderSelectionFootprint', arguments);
    };
    // Unrenders a visual indication of selection
    DateComponent.prototype.unrenderSelection = function () {
        this.unrenderHighlight();
        this.callChildren('unrenderSelection', arguments);
    };
    // Highlight
    // ---------------------------------------------------------------------------------------------------------------
    // Renders an emphasis on the given date range. Given a span (unzoned start/end and other misc data)
    DateComponent.prototype.renderHighlight = function (componentFootprint) {
        if (this.fillRenderer) {
            this.fillRenderer.renderFootprint('highlight', componentFootprint, {
                getClasses: function () {
                    return ['fc-highlight'];
                }
            });
        }
        this.callChildren('renderHighlight', arguments);
    };
    // Unrenders the emphasis on a date range
    DateComponent.prototype.unrenderHighlight = function () {
        if (this.fillRenderer) {
            this.fillRenderer.unrender('highlight');
        }
        this.callChildren('unrenderHighlight', arguments);
    };
    // Hit Areas
    // ---------------------------------------------------------------------------------------------------------------
    // just because all DateComponents support this interface
    // doesn't mean they need to have their own internal coord system. they can defer to sub-components.
    DateComponent.prototype.hitsNeeded = function () {
        if (!(this.hitsNeededDepth++)) {
            this.prepareHits();
        }
        this.callChildren('hitsNeeded', arguments);
    };
    DateComponent.prototype.hitsNotNeeded = function () {
        if (this.hitsNeededDepth && !(--this.hitsNeededDepth)) {
            this.releaseHits();
        }
        this.callChildren('hitsNotNeeded', arguments);
    };
    DateComponent.prototype.prepareHits = function () {
        // subclasses can implement
    };
    DateComponent.prototype.releaseHits = function () {
        // subclasses can implement
    };
    // Given coordinates from the topleft of the document, return data about the date-related area underneath.
    // Can return an object with arbitrary properties (although top/right/left/bottom are encouraged).
    // Must have a `grid` property, a reference to this current grid. TODO: avoid this
    // The returned object will be processed by getHitFootprint and getHitEl.
    DateComponent.prototype.queryHit = function (leftOffset, topOffset) {
        var childrenByUid = this.childrenByUid;
        var uid;
        var hit;
        for (uid in childrenByUid) {
            hit = childrenByUid[uid].queryHit(leftOffset, topOffset);
            if (hit) {
                break;
            }
        }
        return hit;
    };
    DateComponent.prototype.getSafeHitFootprint = function (hit) {
        var footprint = this.getHitFootprint(hit);
        if (!this.dateProfile.activeUnzonedRange.containsRange(footprint.unzonedRange)) {
            return null;
        }
        return footprint;
    };
    DateComponent.prototype.getHitFootprint = function (hit) {
        // what about being abstract!?
    };
    // Given position-level information about a date-related area within the grid,
    // should return a jQuery element that best represents it. passed to dayClick callback.
    DateComponent.prototype.getHitEl = function (hit) {
        // what about being abstract!?
    };
    /* Converting eventRange -> eventFootprint
    ------------------------------------------------------------------------------------------------------------------*/
    DateComponent.prototype.eventRangesToEventFootprints = function (eventRanges) {
        var eventFootprints = [];
        var i;
        for (i = 0; i < eventRanges.length; i++) {
            eventFootprints.push.apply(// append
            eventFootprints, this.eventRangeToEventFootprints(eventRanges[i]));
        }
        return eventFootprints;
    };
    DateComponent.prototype.eventRangeToEventFootprints = function (eventRange) {
        return [util_2.eventRangeToEventFootprint(eventRange)];
    };
    /* Converting componentFootprint/eventFootprint -> segs
    ------------------------------------------------------------------------------------------------------------------*/
    DateComponent.prototype.eventFootprintsToSegs = function (eventFootprints) {
        var segs = [];
        var i;
        for (i = 0; i < eventFootprints.length; i++) {
            segs.push.apply(segs, this.eventFootprintToSegs(eventFootprints[i]));
        }
        return segs;
    };
    // Given an event's span (unzoned start/end and other misc data), and the event itself,
    // slices into segments and attaches event-derived properties to them.
    // eventSpan - { start, end, isStart, isEnd, otherthings... }
    DateComponent.prototype.eventFootprintToSegs = function (eventFootprint) {
        var unzonedRange = eventFootprint.componentFootprint.unzonedRange;
        var segs;
        var i;
        var seg;
        segs = this.componentFootprintToSegs(eventFootprint.componentFootprint);
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            if (!unzonedRange.isStart) {
                seg.isStart = false;
            }
            if (!unzonedRange.isEnd) {
                seg.isEnd = false;
            }
            seg.footprint = eventFootprint;
            // TODO: rename to seg.eventFootprint
        }
        return segs;
    };
    DateComponent.prototype.componentFootprintToSegs = function (componentFootprint) {
        return [];
    };
    // Utils
    // ---------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.callChildren = function (methodName, args) {
        this.iterChildren(function (child) {
            child[methodName].apply(child, args);
        });
    };
    DateComponent.prototype.iterChildren = function (func) {
        var childrenByUid = this.childrenByUid;
        var uid;
        for (uid in childrenByUid) {
            func(childrenByUid[uid]);
        }
    };
    DateComponent.prototype._getCalendar = function () {
        var t = this;
        return t.calendar || t.view.calendar;
    };
    DateComponent.prototype._getView = function () {
        return this.view;
    };
    DateComponent.prototype._getDateProfile = function () {
        return this._getView().get('dateProfile');
    };
    // Generates HTML for an anchor to another view into the calendar.
    // Will either generate an <a> tag or a non-clickable <span> tag, depending on enabled settings.
    // `gotoOptions` can either be a moment input, or an object with the form:
    // { date, type, forceOff }
    // `type` is a view-type like "day" or "week". default value is "day".
    // `attrs` and `innerHtml` are use to generate the rest of the HTML tag.
    DateComponent.prototype.buildGotoAnchorHtml = function (gotoOptions, attrs, innerHtml) {
        var date;
        var type;
        var forceOff;
        var finalOptions;
        if ($.isPlainObject(gotoOptions)) {
            date = gotoOptions.date;
            type = gotoOptions.type;
            forceOff = gotoOptions.forceOff;
        }
        else {
            date = gotoOptions; // a single moment input
        }
        date = moment_ext_1.default(date); // if a string, parse it
        finalOptions = {
            date: date.format('YYYY-MM-DD'),
            type: type || 'day'
        };
        if (typeof attrs === 'string') {
            innerHtml = attrs;
            attrs = null;
        }
        attrs = attrs ? ' ' + util_1.attrsToStr(attrs) : ''; // will have a leading space
        innerHtml = innerHtml || '';
        if (!forceOff && this.opt('navLinks')) {
            return '<a' + attrs +
                ' data-goto="' + util_1.htmlEscape(JSON.stringify(finalOptions)) + '">' +
                innerHtml +
                '</a>';
        }
        else {
            return '<span' + attrs + '>' +
                innerHtml +
                '</span>';
        }
    };
    DateComponent.prototype.getAllDayHtml = function () {
        return this.opt('allDayHtml') || util_1.htmlEscape(this.opt('allDayText'));
    };
    // Computes HTML classNames for a single-day element
    DateComponent.prototype.getDayClasses = function (date, noThemeHighlight) {
        var view = this._getView();
        var classes = [];
        var today;
        if (!this.dateProfile.activeUnzonedRange.containsDate(date)) {
            classes.push('fc-disabled-day'); // TODO: jQuery UI theme?
        }
        else {
            classes.push('fc-' + util_1.dayIDs[date.day()]);
            if (view.isDateInOtherMonth(date, this.dateProfile)) {
                classes.push('fc-other-month');
            }
            today = view.calendar.getNow();
            if (date.isSame(today, 'day')) {
                classes.push('fc-today');
                if (noThemeHighlight !== true) {
                    classes.push(view.calendar.theme.getClass('today'));
                }
            }
            else if (date < today) {
                classes.push('fc-past');
            }
            else {
                classes.push('fc-future');
            }
        }
        return classes;
    };
    // Utility for formatting a range. Accepts a range object, formatting string, and optional separator.
    // Displays all-day ranges naturally, with an inclusive end. Takes the current isRTL into account.
    // The timezones of the dates within `range` will be respected.
    DateComponent.prototype.formatRange = function (range, isAllDay, formatStr, separator) {
        var end = range.end;
        if (isAllDay) {
            end = end.clone().subtract(1); // convert to inclusive. last ms of previous day
        }
        return date_formatting_1.formatRange(range.start, end, formatStr, separator, this.isRTL);
    };
    // Compute the number of the give units in the "current" range.
    // Will return a floating-point number. Won't round.
    DateComponent.prototype.currentRangeAs = function (unit) {
        return this._getDateProfile().currentUnzonedRange.as(unit);
    };
    // Returns the date range of the full days the given range visually appears to occupy.
    // Returns a plain object with start/end, NOT an UnzonedRange!
    DateComponent.prototype.computeDayRange = function (unzonedRange) {
        var calendar = this._getCalendar();
        var startDay = calendar.msToUtcMoment(unzonedRange.startMs, true); // the beginning of the day the range starts
        var end = calendar.msToUtcMoment(unzonedRange.endMs);
        var endTimeMS = +end.time(); // # of milliseconds into `endDay`
        var endDay = end.clone().stripTime(); // the beginning of the day the range exclusively ends
        // If the end time is actually inclusively part of the next day and is equal to or
        // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
        // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
        if (endTimeMS && endTimeMS >= this.nextDayThreshold) {
            endDay.add(1, 'days');
        }
        // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
        if (endDay <= startDay) {
            endDay = startDay.clone().add(1, 'days');
        }
        return { start: startDay, end: endDay };
    };
    // Does the given range visually appear to occupy more than one day?
    DateComponent.prototype.isMultiDayRange = function (unzonedRange) {
        var dayRange = this.computeDayRange(unzonedRange);
        return dayRange.end.diff(dayRange.start, 'days') > 1;
    };
    DateComponent.guid = 0; // TODO: better system for this?
    return DateComponent;
}(Component_1.default));
exports.default = DateComponent;
// legacy
function convertEventsPayloadToLegacyArray(eventsPayload) {
    var eventDefId;
    var eventInstances;
    var legacyEvents = [];
    var i;
    for (eventDefId in eventsPayload) {
        eventInstances = eventsPayload[eventDefId].eventInstances;
        for (i = 0; i < eventInstances.length; i++) {
            legacyEvents.push(eventInstances[i].toLegacy());
        }
    }
    return legacyEvents;
}


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var options_1 = __webpack_require__(32);
var Iterator_1 = __webpack_require__(238);
var GlobalEmitter_1 = __webpack_require__(21);
var EmitterMixin_1 = __webpack_require__(11);
var ListenerMixin_1 = __webpack_require__(7);
var Toolbar_1 = __webpack_require__(239);
var OptionsManager_1 = __webpack_require__(240);
var ViewSpecManager_1 = __webpack_require__(241);
var Constraints_1 = __webpack_require__(207);
var locale_1 = __webpack_require__(31);
var moment_ext_1 = __webpack_require__(10);
var UnzonedRange_1 = __webpack_require__(5);
var ComponentFootprint_1 = __webpack_require__(12);
var EventDateProfile_1 = __webpack_require__(17);
var EventManager_1 = __webpack_require__(242);
var BusinessHourGenerator_1 = __webpack_require__(212);
var EventSourceParser_1 = __webpack_require__(38);
var EventDefParser_1 = __webpack_require__(49);
var SingleEventDef_1 = __webpack_require__(13);
var EventDefMutation_1 = __webpack_require__(37);
var EventSource_1 = __webpack_require__(6);
var ThemeRegistry_1 = __webpack_require__(51);
var Calendar = /** @class */ (function () {
    function Calendar(el, overrides) {
        this.loadingLevel = 0; // number of simultaneous loading tasks
        this.ignoreUpdateViewSize = 0;
        this.freezeContentHeightDepth = 0;
        // declare the current calendar instance relies on GlobalEmitter. needed for garbage collection.
        // unneeded() is called in destroy.
        GlobalEmitter_1.default.needed();
        this.el = el;
        this.viewsByType = {};
        this.optionsManager = new OptionsManager_1.default(this, overrides);
        this.viewSpecManager = new ViewSpecManager_1.default(this.optionsManager, this);
        this.initMomentInternals(); // needs to happen after options hash initialized
        this.initCurrentDate();
        this.initEventManager();
        this.constraints = new Constraints_1.default(this.eventManager, this);
        this.constructed();
    }
    Calendar.prototype.constructed = function () {
        // useful for monkeypatching. used?
    };
    Calendar.prototype.getView = function () {
        return this.view;
    };
    Calendar.prototype.publiclyTrigger = function (name, triggerInfo) {
        var optHandler = this.opt(name);
        var context;
        var args;
        if ($.isPlainObject(triggerInfo)) {
            context = triggerInfo.context;
            args = triggerInfo.args;
        }
        else if ($.isArray(triggerInfo)) {
            args = triggerInfo;
        }
        if (context == null) {
            context = this.el[0]; // fallback context
        }
        if (!args) {
            args = [];
        }
        this.triggerWith(name, context, args); // Emitter's method
        if (optHandler) {
            return optHandler.apply(context, args);
        }
    };
    Calendar.prototype.hasPublicHandlers = function (name) {
        return this.hasHandlers(name) ||
            this.opt(name); // handler specified in options
    };
    // Options Public API
    // -----------------------------------------------------------------------------------------------------------------
    // public getter/setter
    Calendar.prototype.option = function (name, value) {
        var newOptionHash;
        if (typeof name === 'string') {
            if (value === undefined) {
                return this.optionsManager.get(name);
            }
            else {
                newOptionHash = {};
                newOptionHash[name] = value;
                this.optionsManager.add(newOptionHash);
            }
        }
        else if (typeof name === 'object') {
            this.optionsManager.add(name);
        }
    };
    // private getter
    Calendar.prototype.opt = function (name) {
        return this.optionsManager.get(name);
    };
    // View
    // -----------------------------------------------------------------------------------------------------------------
    // Given a view name for a custom view or a standard view, creates a ready-to-go View object
    Calendar.prototype.instantiateView = function (viewType) {
        var spec = this.viewSpecManager.getViewSpec(viewType);
        if (!spec) {
            throw new Error("View type \"" + viewType + "\" is not valid");
        }
        return new spec['class'](this, spec);
    };
    // Returns a boolean about whether the view is okay to instantiate at some point
    Calendar.prototype.isValidViewType = function (viewType) {
        return Boolean(this.viewSpecManager.getViewSpec(viewType));
    };
    Calendar.prototype.changeView = function (viewName, dateOrRange) {
        if (dateOrRange) {
            if (dateOrRange.start && dateOrRange.end) {
                this.optionsManager.recordOverrides({
                    visibleRange: dateOrRange
                });
            }
            else {
                this.currentDate = this.moment(dateOrRange).stripZone(); // just like gotoDate
            }
        }
        this.renderView(viewName);
    };
    // Forces navigation to a view for the given date.
    // `viewType` can be a specific view name or a generic one like "week" or "day".
    Calendar.prototype.zoomTo = function (newDate, viewType) {
        var spec;
        viewType = viewType || 'day'; // day is default zoom
        spec = this.viewSpecManager.getViewSpec(viewType) ||
            this.viewSpecManager.getUnitViewSpec(viewType);
        this.currentDate = newDate.clone();
        this.renderView(spec ? spec.type : null);
    };
    // Current Date
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.initCurrentDate = function () {
        var defaultDateInput = this.opt('defaultDate');
        // compute the initial ambig-timezone date
        if (defaultDateInput != null) {
            this.currentDate = this.moment(defaultDateInput).stripZone();
        }
        else {
            this.currentDate = this.getNow(); // getNow already returns unzoned
        }
    };
    Calendar.prototype.prev = function () {
        var view = this.view;
        var prevInfo = view.dateProfileGenerator.buildPrev(view.get('dateProfile'));
        if (prevInfo.isValid) {
            this.currentDate = prevInfo.date;
            this.renderView();
        }
    };
    Calendar.prototype.next = function () {
        var view = this.view;
        var nextInfo = view.dateProfileGenerator.buildNext(view.get('dateProfile'));
        if (nextInfo.isValid) {
            this.currentDate = nextInfo.date;
            this.renderView();
        }
    };
    Calendar.prototype.prevYear = function () {
        this.currentDate.add(-1, 'years');
        this.renderView();
    };
    Calendar.prototype.nextYear = function () {
        this.currentDate.add(1, 'years');
        this.renderView();
    };
    Calendar.prototype.today = function () {
        this.currentDate = this.getNow(); // should deny like prev/next?
        this.renderView();
    };
    Calendar.prototype.gotoDate = function (zonedDateInput) {
        this.currentDate = this.moment(zonedDateInput).stripZone();
        this.renderView();
    };
    Calendar.prototype.incrementDate = function (delta) {
        this.currentDate.add(moment.duration(delta));
        this.renderView();
    };
    // for external API
    Calendar.prototype.getDate = function () {
        return this.applyTimezone(this.currentDate); // infuse the calendar's timezone
    };
    // Loading Triggering
    // -----------------------------------------------------------------------------------------------------------------
    // Should be called when any type of async data fetching begins
    Calendar.prototype.pushLoading = function () {
        if (!(this.loadingLevel++)) {
            this.publiclyTrigger('loading', [true, this.view]);
        }
    };
    // Should be called when any type of async data fetching completes
    Calendar.prototype.popLoading = function () {
        if (!(--this.loadingLevel)) {
            this.publiclyTrigger('loading', [false, this.view]);
        }
    };
    // High-level Rendering
    // -----------------------------------------------------------------------------------
    Calendar.prototype.render = function () {
        if (!this.contentEl) {
            this.initialRender();
        }
        else if (this.elementVisible()) {
            // mainly for the public API
            this.calcSize();
            this.updateViewSize();
        }
    };
    Calendar.prototype.initialRender = function () {
        var _this = this;
        var el = this.el;
        el.addClass('fc');
        // event delegation for nav links
        el.on('click.fc', 'a[data-goto]', function (ev) {
            var anchorEl = $(ev.currentTarget);
            var gotoOptions = anchorEl.data('goto'); // will automatically parse JSON
            var date = _this.moment(gotoOptions.date);
            var viewType = gotoOptions.type;
            // property like "navLinkDayClick". might be a string or a function
            var customAction = _this.view.opt('navLink' + util_1.capitaliseFirstLetter(viewType) + 'Click');
            if (typeof customAction === 'function') {
                customAction(date, ev);
            }
            else {
                if (typeof customAction === 'string') {
                    viewType = customAction;
                }
                _this.zoomTo(date, viewType);
            }
        });
        // called immediately, and upon option change
        this.optionsManager.watch('settingTheme', ['?theme', '?themeSystem'], function (opts) {
            var themeClass = ThemeRegistry_1.getThemeSystemClass(opts.themeSystem || opts.theme);
            var theme = new themeClass(_this.optionsManager);
            var widgetClass = theme.getClass('widget');
            _this.theme = theme;
            if (widgetClass) {
                el.addClass(widgetClass);
            }
        }, function () {
            var widgetClass = _this.theme.getClass('widget');
            _this.theme = null;
            if (widgetClass) {
                el.removeClass(widgetClass);
            }
        });
        this.optionsManager.watch('settingBusinessHourGenerator', ['?businessHours'], function (deps) {
            _this.businessHourGenerator = new BusinessHourGenerator_1.default(deps.businessHours, _this);
            if (_this.view) {
                _this.view.set('businessHourGenerator', _this.businessHourGenerator);
            }
        }, function () {
            _this.businessHourGenerator = null;
        });
        // called immediately, and upon option change.
        // HACK: locale often affects isRTL, so we explicitly listen to that too.
        this.optionsManager.watch('applyingDirClasses', ['?isRTL', '?locale'], function (opts) {
            el.toggleClass('fc-ltr', !opts.isRTL);
            el.toggleClass('fc-rtl', opts.isRTL);
        });
        this.contentEl = $("<div class='fc-view-container'/>").prependTo(el);
        this.initToolbars();
        this.renderHeader();
        this.renderFooter();
        this.renderView(this.opt('defaultView'));
        if (this.opt('handleWindowResize')) {
            $(window).resize(this.windowResizeProxy = util_1.debounce(// prevents rapid calls
            this.windowResize.bind(this), this.opt('windowResizeDelay')));
        }
    };
    Calendar.prototype.destroy = function () {
        if (this.view) {
            this.clearView();
        }
        this.toolbarsManager.proxyCall('removeElement');
        this.contentEl.remove();
        this.el.removeClass('fc fc-ltr fc-rtl');
        // removes theme-related root className
        this.optionsManager.unwatch('settingTheme');
        this.optionsManager.unwatch('settingBusinessHourGenerator');
        this.el.off('.fc'); // unbind nav link handlers
        if (this.windowResizeProxy) {
            $(window).unbind('resize', this.windowResizeProxy);
            this.windowResizeProxy = null;
        }
        GlobalEmitter_1.default.unneeded();
    };
    Calendar.prototype.elementVisible = function () {
        return this.el.is(':visible');
    };
    // Render Queue
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.bindViewHandlers = function (view) {
        var _this = this;
        view.watch('titleForCalendar', ['title'], function (deps) {
            if (view === _this.view) {
                _this.setToolbarsTitle(deps.title);
            }
        });
        view.watch('dateProfileForCalendar', ['dateProfile'], function (deps) {
            if (view === _this.view) {
                _this.currentDate = deps.dateProfile.date; // might have been constrained by view dates
                _this.updateToolbarButtons(deps.dateProfile);
            }
        });
    };
    Calendar.prototype.unbindViewHandlers = function (view) {
        view.unwatch('titleForCalendar');
        view.unwatch('dateProfileForCalendar');
    };
    // View Rendering
    // -----------------------------------------------------------------------------------
    // Renders a view because of a date change, view-type change, or for the first time.
    // If not given a viewType, keep the current view but render different dates.
    // Accepts an optional scroll state to restore to.
    Calendar.prototype.renderView = function (viewType) {
        var oldView = this.view;
        var newView;
        this.freezeContentHeight();
        if (oldView && viewType && oldView.type !== viewType) {
            this.clearView();
        }
        // if viewType changed, or the view was never created, create a fresh view
        if (!this.view && viewType) {
            newView = this.view =
                this.viewsByType[viewType] ||
                    (this.viewsByType[viewType] = this.instantiateView(viewType));
            this.bindViewHandlers(newView);
            newView.startBatchRender(); // so that setElement+setDate rendering are joined
            newView.setElement($("<div class='fc-view fc-" + viewType + "-view' />").appendTo(this.contentEl));
            this.toolbarsManager.proxyCall('activateButton', viewType);
        }
        if (this.view) {
            // prevent unnecessary change firing
            if (this.view.get('businessHourGenerator') !== this.businessHourGenerator) {
                this.view.set('businessHourGenerator', this.businessHourGenerator);
            }
            this.view.setDate(this.currentDate);
            if (newView) {
                newView.stopBatchRender();
            }
        }
        this.thawContentHeight();
    };
    // Unrenders the current view and reflects this change in the Header.
    // Unregsiters the `view`, but does not remove from viewByType hash.
    Calendar.prototype.clearView = function () {
        var currentView = this.view;
        this.toolbarsManager.proxyCall('deactivateButton', currentView.type);
        this.unbindViewHandlers(currentView);
        currentView.removeElement();
        currentView.unsetDate(); // so bindViewHandlers doesn't fire with old values next time
        this.view = null;
    };
    // Destroys the view, including the view object. Then, re-instantiates it and renders it.
    // Maintains the same scroll state.
    // TODO: maintain any other user-manipulated state.
    Calendar.prototype.reinitView = function () {
        var oldView = this.view;
        var scroll = oldView.queryScroll(); // wouldn't be so complicated if Calendar owned the scroll
        this.freezeContentHeight();
        this.clearView();
        this.calcSize();
        this.renderView(oldView.type); // needs the type to freshly render
        this.view.applyScroll(scroll);
        this.thawContentHeight();
    };
    // Resizing
    // -----------------------------------------------------------------------------------
    Calendar.prototype.getSuggestedViewHeight = function () {
        if (this.suggestedViewHeight == null) {
            this.calcSize();
        }
        return this.suggestedViewHeight;
    };
    Calendar.prototype.isHeightAuto = function () {
        return this.opt('contentHeight') === 'auto' || this.opt('height') === 'auto';
    };
    Calendar.prototype.updateViewSize = function (isResize) {
        if (isResize === void 0) { isResize = false; }
        var view = this.view;
        var scroll;
        if (!this.ignoreUpdateViewSize && view) {
            if (isResize) {
                this.calcSize();
                scroll = view.queryScroll();
            }
            this.ignoreUpdateViewSize++;
            view.updateSize(this.getSuggestedViewHeight(), this.isHeightAuto(), isResize);
            this.ignoreUpdateViewSize--;
            if (isResize) {
                view.applyScroll(scroll);
            }
            return true; // signal success
        }
    };
    Calendar.prototype.calcSize = function () {
        if (this.elementVisible()) {
            this._calcSize();
        }
    };
    Calendar.prototype._calcSize = function () {
        var contentHeightInput = this.opt('contentHeight');
        var heightInput = this.opt('height');
        if (typeof contentHeightInput === 'number') {
            this.suggestedViewHeight = contentHeightInput;
        }
        else if (typeof contentHeightInput === 'function') {
            this.suggestedViewHeight = contentHeightInput();
        }
        else if (typeof heightInput === 'number') {
            this.suggestedViewHeight = heightInput - this.queryToolbarsHeight();
        }
        else if (typeof heightInput === 'function') {
            this.suggestedViewHeight = heightInput() - this.queryToolbarsHeight();
        }
        else if (heightInput === 'parent') {
            this.suggestedViewHeight = this.el.parent().height() - this.queryToolbarsHeight();
        }
        else {
            this.suggestedViewHeight = Math.round(this.contentEl.width() /
                Math.max(this.opt('aspectRatio'), .5));
        }
    };
    Calendar.prototype.windowResize = function (ev) {
        if (
        // the purpose: so we don't process jqui "resize" events that have bubbled up
        // cast to any because .target, which is Element, can't be compared to window for some reason.
        ev.target === window &&
            this.view &&
            this.view.isDatesRendered) {
            if (this.updateViewSize(true)) {
                this.publiclyTrigger('windowResize', [this.view]);
            }
        }
    };
    /* Height "Freezing"
    -----------------------------------------------------------------------------*/
    Calendar.prototype.freezeContentHeight = function () {
        if (!(this.freezeContentHeightDepth++)) {
            this.forceFreezeContentHeight();
        }
    };
    Calendar.prototype.forceFreezeContentHeight = function () {
        this.contentEl.css({
            width: '100%',
            height: this.contentEl.height(),
            overflow: 'hidden'
        });
    };
    Calendar.prototype.thawContentHeight = function () {
        this.freezeContentHeightDepth--;
        // always bring back to natural height
        this.contentEl.css({
            width: '',
            height: '',
            overflow: ''
        });
        // but if there are future thaws, re-freeze
        if (this.freezeContentHeightDepth) {
            this.forceFreezeContentHeight();
        }
    };
    // Toolbar
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.initToolbars = function () {
        this.header = new Toolbar_1.default(this, this.computeHeaderOptions());
        this.footer = new Toolbar_1.default(this, this.computeFooterOptions());
        this.toolbarsManager = new Iterator_1.default([this.header, this.footer]);
    };
    Calendar.prototype.computeHeaderOptions = function () {
        return {
            extraClasses: 'fc-header-toolbar',
            layout: this.opt('header')
        };
    };
    Calendar.prototype.computeFooterOptions = function () {
        return {
            extraClasses: 'fc-footer-toolbar',
            layout: this.opt('footer')
        };
    };
    // can be called repeatedly and Header will rerender
    Calendar.prototype.renderHeader = function () {
        var header = this.header;
        header.setToolbarOptions(this.computeHeaderOptions());
        header.render();
        if (header.el) {
            this.el.prepend(header.el);
        }
    };
    // can be called repeatedly and Footer will rerender
    Calendar.prototype.renderFooter = function () {
        var footer = this.footer;
        footer.setToolbarOptions(this.computeFooterOptions());
        footer.render();
        if (footer.el) {
            this.el.append(footer.el);
        }
    };
    Calendar.prototype.setToolbarsTitle = function (title) {
        this.toolbarsManager.proxyCall('updateTitle', title);
    };
    Calendar.prototype.updateToolbarButtons = function (dateProfile) {
        var now = this.getNow();
        var view = this.view;
        var todayInfo = view.dateProfileGenerator.build(now);
        var prevInfo = view.dateProfileGenerator.buildPrev(view.get('dateProfile'));
        var nextInfo = view.dateProfileGenerator.buildNext(view.get('dateProfile'));
        this.toolbarsManager.proxyCall((todayInfo.isValid && !dateProfile.currentUnzonedRange.containsDate(now)) ?
            'enableButton' :
            'disableButton', 'today');
        this.toolbarsManager.proxyCall(prevInfo.isValid ?
            'enableButton' :
            'disableButton', 'prev');
        this.toolbarsManager.proxyCall(nextInfo.isValid ?
            'enableButton' :
            'disableButton', 'next');
    };
    Calendar.prototype.queryToolbarsHeight = function () {
        return this.toolbarsManager.items.reduce(function (accumulator, toolbar) {
            var toolbarHeight = toolbar.el ? toolbar.el.outerHeight(true) : 0; // includes margin
            return accumulator + toolbarHeight;
        }, 0);
    };
    // Selection
    // -----------------------------------------------------------------------------------------------------------------
    // this public method receives start/end dates in any format, with any timezone
    Calendar.prototype.select = function (zonedStartInput, zonedEndInput) {
        this.view.select(this.buildSelectFootprint.apply(this, arguments));
    };
    Calendar.prototype.unselect = function () {
        if (this.view) {
            this.view.unselect();
        }
    };
    // Given arguments to the select method in the API, returns a span (unzoned start/end and other info)
    Calendar.prototype.buildSelectFootprint = function (zonedStartInput, zonedEndInput) {
        var start = this.moment(zonedStartInput).stripZone();
        var end;
        if (zonedEndInput) {
            end = this.moment(zonedEndInput).stripZone();
        }
        else if (start.hasTime()) {
            end = start.clone().add(this.defaultTimedEventDuration);
        }
        else {
            end = start.clone().add(this.defaultAllDayEventDuration);
        }
        return new ComponentFootprint_1.default(new UnzonedRange_1.default(start, end), !start.hasTime());
    };
    // Date Utils
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.initMomentInternals = function () {
        var _this = this;
        this.defaultAllDayEventDuration = moment.duration(this.opt('defaultAllDayEventDuration'));
        this.defaultTimedEventDuration = moment.duration(this.opt('defaultTimedEventDuration'));
        // Called immediately, and when any of the options change.
        // Happens before any internal objects rebuild or rerender, because this is very core.
        this.optionsManager.watch('buildingMomentLocale', [
            '?locale', '?monthNames', '?monthNamesShort', '?dayNames', '?dayNamesShort',
            '?firstDay', '?weekNumberCalculation'
        ], function (opts) {
            var weekNumberCalculation = opts.weekNumberCalculation;
            var firstDay = opts.firstDay;
            var _week;
            // normalize
            if (weekNumberCalculation === 'iso') {
                weekNumberCalculation = 'ISO'; // normalize
            }
            var localeData = Object.create(// make a cheap copy
            locale_1.getMomentLocaleData(opts.locale) // will fall back to en
            );
            if (opts.monthNames) {
                localeData._months = opts.monthNames;
            }
            if (opts.monthNamesShort) {
                localeData._monthsShort = opts.monthNamesShort;
            }
            if (opts.dayNames) {
                localeData._weekdays = opts.dayNames;
            }
            if (opts.dayNamesShort) {
                localeData._weekdaysShort = opts.dayNamesShort;
            }
            if (firstDay == null && weekNumberCalculation === 'ISO') {
                firstDay = 1;
            }
            if (firstDay != null) {
                _week = Object.create(localeData._week); // _week: { dow: # }
                _week.dow = firstDay;
                localeData._week = _week;
            }
            if (weekNumberCalculation === 'ISO' ||
                weekNumberCalculation === 'local' ||
                typeof weekNumberCalculation === 'function') {
                localeData._fullCalendar_weekCalc = weekNumberCalculation; // moment-ext will know what to do with it
            }
            _this.localeData = localeData;
            // If the internal current date object already exists, move to new locale.
            // We do NOT need to do this technique for event dates, because this happens when converting to "segments".
            if (_this.currentDate) {
                _this.localizeMoment(_this.currentDate); // sets to localeData
            }
        });
    };
    // Builds a moment using the settings of the current calendar: timezone and locale.
    // Accepts anything the vanilla moment() constructor accepts.
    Calendar.prototype.moment = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var mom;
        if (this.opt('timezone') === 'local') {
            mom = moment_ext_1.default.apply(null, args);
            // Force the moment to be local, because momentExt doesn't guarantee it.
            if (mom.hasTime()) {
                mom.local();
            }
        }
        else if (this.opt('timezone') === 'UTC') {
            mom = moment_ext_1.default.utc.apply(null, args); // process as UTC
        }
        else {
            mom = moment_ext_1.default.parseZone.apply(null, args); // let the input decide the zone
        }
        this.localizeMoment(mom); // TODO
        return mom;
    };
    Calendar.prototype.msToMoment = function (ms, forceAllDay) {
        var mom = moment_ext_1.default.utc(ms); // TODO: optimize by using Date.UTC
        if (forceAllDay) {
            mom.stripTime();
        }
        else {
            mom = this.applyTimezone(mom); // may or may not apply locale
        }
        this.localizeMoment(mom);
        return mom;
    };
    Calendar.prototype.msToUtcMoment = function (ms, forceAllDay) {
        var mom = moment_ext_1.default.utc(ms); // TODO: optimize by using Date.UTC
        if (forceAllDay) {
            mom.stripTime();
        }
        this.localizeMoment(mom);
        return mom;
    };
    // Updates the given moment's locale settings to the current calendar locale settings.
    Calendar.prototype.localizeMoment = function (mom) {
        mom._locale = this.localeData;
    };
    // Returns a boolean about whether or not the calendar knows how to calculate
    // the timezone offset of arbitrary dates in the current timezone.
    Calendar.prototype.getIsAmbigTimezone = function () {
        return this.opt('timezone') !== 'local' && this.opt('timezone') !== 'UTC';
    };
    // Returns a copy of the given date in the current timezone. Has no effect on dates without times.
    Calendar.prototype.applyTimezone = function (date) {
        if (!date.hasTime()) {
            return date.clone();
        }
        var zonedDate = this.moment(date.toArray());
        var timeAdjust = date.time().asMilliseconds() - zonedDate.time().asMilliseconds();
        var adjustedZonedDate;
        // Safari sometimes has problems with this coersion when near DST. Adjust if necessary. (bug #2396)
        if (timeAdjust) {
            adjustedZonedDate = zonedDate.clone().add(timeAdjust); // add milliseconds
            if (date.time().asMilliseconds() - adjustedZonedDate.time().asMilliseconds() === 0) {
                zonedDate = adjustedZonedDate;
            }
        }
        return zonedDate;
    };
    /*
    Assumes the footprint is non-open-ended.
    */
    Calendar.prototype.footprintToDateProfile = function (componentFootprint, ignoreEnd) {
        if (ignoreEnd === void 0) { ignoreEnd = false; }
        var start = moment_ext_1.default.utc(componentFootprint.unzonedRange.startMs);
        var end;
        if (!ignoreEnd) {
            end = moment_ext_1.default.utc(componentFootprint.unzonedRange.endMs);
        }
        if (componentFootprint.isAllDay) {
            start.stripTime();
            if (end) {
                end.stripTime();
            }
        }
        else {
            start = this.applyTimezone(start);
            if (end) {
                end = this.applyTimezone(end);
            }
        }
        return new EventDateProfile_1.default(start, end, this);
    };
    // Returns a moment for the current date, as defined by the client's computer or from the `now` option.
    // Will return an moment with an ambiguous timezone.
    Calendar.prototype.getNow = function () {
        var now = this.opt('now');
        if (typeof now === 'function') {
            now = now();
        }
        return this.moment(now).stripZone();
    };
    // Produces a human-readable string for the given duration.
    // Side-effect: changes the locale of the given duration.
    Calendar.prototype.humanizeDuration = function (duration) {
        return duration.locale(this.opt('locale')).humanize();
    };
    // will return `null` if invalid range
    Calendar.prototype.parseUnzonedRange = function (rangeInput) {
        var start = null;
        var end = null;
        if (rangeInput.start) {
            start = this.moment(rangeInput.start).stripZone();
        }
        if (rangeInput.end) {
            end = this.moment(rangeInput.end).stripZone();
        }
        if (!start && !end) {
            return null;
        }
        if (start && end && end.isBefore(start)) {
            return null;
        }
        return new UnzonedRange_1.default(start, end);
    };
    // Event-Date Utilities
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.initEventManager = function () {
        var _this = this;
        var eventManager = new EventManager_1.default(this);
        var rawSources = this.opt('eventSources') || [];
        var singleRawSource = this.opt('events');
        this.eventManager = eventManager;
        if (singleRawSource) {
            rawSources.unshift(singleRawSource);
        }
        eventManager.on('release', function (eventsPayload) {
            _this.trigger('eventsReset', eventsPayload);
        });
        eventManager.freeze();
        rawSources.forEach(function (rawSource) {
            var source = EventSourceParser_1.default.parse(rawSource, _this);
            if (source) {
                eventManager.addSource(source);
            }
        });
        eventManager.thaw();
    };
    Calendar.prototype.requestEvents = function (start, end) {
        return this.eventManager.requestEvents(start, end, this.opt('timezone'), !this.opt('lazyFetching'));
    };
    // Get an event's normalized end date. If not present, calculate it from the defaults.
    Calendar.prototype.getEventEnd = function (event) {
        if (event.end) {
            return event.end.clone();
        }
        else {
            return this.getDefaultEventEnd(event.allDay, event.start);
        }
    };
    // Given an event's allDay status and start date, return what its fallback end date should be.
    // TODO: rename to computeDefaultEventEnd
    Calendar.prototype.getDefaultEventEnd = function (allDay, zonedStart) {
        var end = zonedStart.clone();
        if (allDay) {
            end.stripTime().add(this.defaultAllDayEventDuration);
        }
        else {
            end.add(this.defaultTimedEventDuration);
        }
        if (this.getIsAmbigTimezone()) {
            end.stripZone(); // we don't know what the tzo should be
        }
        return end;
    };
    // Public Events API
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.rerenderEvents = function () {
        this.view.flash('displayingEvents');
    };
    Calendar.prototype.refetchEvents = function () {
        this.eventManager.refetchAllSources();
    };
    Calendar.prototype.renderEvents = function (eventInputs, isSticky) {
        this.eventManager.freeze();
        for (var i = 0; i < eventInputs.length; i++) {
            this.renderEvent(eventInputs[i], isSticky);
        }
        this.eventManager.thaw();
    };
    Calendar.prototype.renderEvent = function (eventInput, isSticky) {
        if (isSticky === void 0) { isSticky = false; }
        var eventManager = this.eventManager;
        var eventDef = EventDefParser_1.default.parse(eventInput, eventInput.source || eventManager.stickySource);
        if (eventDef) {
            eventManager.addEventDef(eventDef, isSticky);
        }
    };
    // legacyQuery operates on legacy event instance objects
    Calendar.prototype.removeEvents = function (legacyQuery) {
        var eventManager = this.eventManager;
        var legacyInstances = [];
        var idMap = {};
        var eventDef;
        var i;
        if (legacyQuery == null) {
            eventManager.removeAllEventDefs(); // persist=true
        }
        else {
            eventManager.getEventInstances().forEach(function (eventInstance) {
                legacyInstances.push(eventInstance.toLegacy());
            });
            legacyInstances = filterLegacyEventInstances(legacyInstances, legacyQuery);
            // compute unique IDs
            for (i = 0; i < legacyInstances.length; i++) {
                eventDef = this.eventManager.getEventDefByUid(legacyInstances[i]._id);
                idMap[eventDef.id] = true;
            }
            eventManager.freeze();
            for (i in idMap) {
                eventManager.removeEventDefsById(i); // persist=true
            }
            eventManager.thaw();
        }
    };
    // legacyQuery operates on legacy event instance objects
    Calendar.prototype.clientEvents = function (legacyQuery) {
        var legacyEventInstances = [];
        this.eventManager.getEventInstances().forEach(function (eventInstance) {
            legacyEventInstances.push(eventInstance.toLegacy());
        });
        return filterLegacyEventInstances(legacyEventInstances, legacyQuery);
    };
    Calendar.prototype.updateEvents = function (eventPropsArray) {
        this.eventManager.freeze();
        for (var i = 0; i < eventPropsArray.length; i++) {
            this.updateEvent(eventPropsArray[i]);
        }
        this.eventManager.thaw();
    };
    Calendar.prototype.updateEvent = function (eventProps) {
        var eventDef = this.eventManager.getEventDefByUid(eventProps._id);
        var eventInstance;
        var eventDefMutation;
        if (eventDef instanceof SingleEventDef_1.default) {
            eventInstance = eventDef.buildInstance();
            eventDefMutation = EventDefMutation_1.default.createFromRawProps(eventInstance, eventProps, // raw props
            null // largeUnit -- who uses it?
            );
            this.eventManager.mutateEventsWithId(eventDef.id, eventDefMutation); // will release
        }
    };
    // Public Event Sources API
    // ------------------------------------------------------------------------------------
    Calendar.prototype.getEventSources = function () {
        return this.eventManager.otherSources.slice(); // clone
    };
    Calendar.prototype.getEventSourceById = function (id) {
        return this.eventManager.getSourceById(EventSource_1.default.normalizeId(id));
    };
    Calendar.prototype.addEventSource = function (sourceInput) {
        var source = EventSourceParser_1.default.parse(sourceInput, this);
        if (source) {
            this.eventManager.addSource(source);
        }
    };
    Calendar.prototype.removeEventSources = function (sourceMultiQuery) {
        var eventManager = this.eventManager;
        var sources;
        var i;
        if (sourceMultiQuery == null) {
            this.eventManager.removeAllSources();
        }
        else {
            sources = eventManager.multiQuerySources(sourceMultiQuery);
            eventManager.freeze();
            for (i = 0; i < sources.length; i++) {
                eventManager.removeSource(sources[i]);
            }
            eventManager.thaw();
        }
    };
    Calendar.prototype.removeEventSource = function (sourceQuery) {
        var eventManager = this.eventManager;
        var sources = eventManager.querySources(sourceQuery);
        var i;
        eventManager.freeze();
        for (i = 0; i < sources.length; i++) {
            eventManager.removeSource(sources[i]);
        }
        eventManager.thaw();
    };
    Calendar.prototype.refetchEventSources = function (sourceMultiQuery) {
        var eventManager = this.eventManager;
        var sources = eventManager.multiQuerySources(sourceMultiQuery);
        var i;
        eventManager.freeze();
        for (i = 0; i < sources.length; i++) {
            eventManager.refetchSource(sources[i]);
        }
        eventManager.thaw();
    };
    // not for internal use. use options module directly instead.
    Calendar.defaults = options_1.globalDefaults;
    Calendar.englishDefaults = options_1.englishDefaults;
    Calendar.rtlDefaults = options_1.rtlDefaults;
    return Calendar;
}());
exports.default = Calendar;
EmitterMixin_1.default.mixInto(Calendar);
ListenerMixin_1.default.mixInto(Calendar);
function filterLegacyEventInstances(legacyEventInstances, legacyQuery) {
    if (legacyQuery == null) {
        return legacyEventInstances;
    }
    else if ($.isFunction(legacyQuery)) {
        return legacyEventInstances.filter(legacyQuery);
    }
    else {
        legacyQuery += ''; // normalize to string
        return legacyEventInstances.filter(function (legacyEventInstance) {
            // soft comparison because id not be normalized to string
            // tslint:disable-next-line
            return legacyEventInstance.id == legacyQuery ||
                legacyEventInstance._id === legacyQuery; // can specify internal id, but must exactly match
        });
    }
}


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var UnzonedRange_1 = __webpack_require__(5);
var DateProfileGenerator = /** @class */ (function () {
    function DateProfileGenerator(_view) {
        this._view = _view;
    }
    DateProfileGenerator.prototype.opt = function (name) {
        return this._view.opt(name);
    };
    DateProfileGenerator.prototype.trimHiddenDays = function (unzonedRange) {
        return this._view.trimHiddenDays(unzonedRange);
    };
    DateProfileGenerator.prototype.msToUtcMoment = function (ms, forceAllDay) {
        return this._view.calendar.msToUtcMoment(ms, forceAllDay);
    };
    /* Date Range Computation
    ------------------------------------------------------------------------------------------------------------------*/
    // Builds a structure with info about what the dates/ranges will be for the "prev" view.
    DateProfileGenerator.prototype.buildPrev = function (currentDateProfile) {
        var prevDate = currentDateProfile.date.clone()
            .startOf(currentDateProfile.currentRangeUnit)
            .subtract(currentDateProfile.dateIncrement);
        return this.build(prevDate, -1);
    };
    // Builds a structure with info about what the dates/ranges will be for the "next" view.
    DateProfileGenerator.prototype.buildNext = function (currentDateProfile) {
        var nextDate = currentDateProfile.date.clone()
            .startOf(currentDateProfile.currentRangeUnit)
            .add(currentDateProfile.dateIncrement);
        return this.build(nextDate, 1);
    };
    // Builds a structure holding dates/ranges for rendering around the given date.
    // Optional direction param indicates whether the date is being incremented/decremented
    // from its previous value. decremented = -1, incremented = 1 (default).
    DateProfileGenerator.prototype.build = function (date, direction, forceToValid) {
        if (forceToValid === void 0) { forceToValid = false; }
        var isDateAllDay = !date.hasTime();
        var validUnzonedRange;
        var minTime = null;
        var maxTime = null;
        var currentInfo;
        var isRangeAllDay;
        var renderUnzonedRange;
        var activeUnzonedRange;
        var isValid;
        validUnzonedRange = this.buildValidRange();
        validUnzonedRange = this.trimHiddenDays(validUnzonedRange);
        if (forceToValid) {
            date = this.msToUtcMoment(validUnzonedRange.constrainDate(date), // returns MS
            isDateAllDay);
        }
        currentInfo = this.buildCurrentRangeInfo(date, direction);
        isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
        renderUnzonedRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.unzonedRange), currentInfo.unit, isRangeAllDay);
        renderUnzonedRange = this.trimHiddenDays(renderUnzonedRange);
        activeUnzonedRange = renderUnzonedRange.clone();
        if (!this.opt('showNonCurrentDates')) {
            activeUnzonedRange = activeUnzonedRange.intersect(currentInfo.unzonedRange);
        }
        minTime = moment.duration(this.opt('minTime'));
        maxTime = moment.duration(this.opt('maxTime'));
        activeUnzonedRange = this.adjustActiveRange(activeUnzonedRange, minTime, maxTime);
        activeUnzonedRange = activeUnzonedRange.intersect(validUnzonedRange); // might return null
        if (activeUnzonedRange) {
            date = this.msToUtcMoment(activeUnzonedRange.constrainDate(date), // returns MS
            isDateAllDay);
        }
        // it's invalid if the originally requested date is not contained,
        // or if the range is completely outside of the valid range.
        isValid = currentInfo.unzonedRange.intersectsWith(validUnzonedRange);
        return {
            // constraint for where prev/next operations can go and where events can be dragged/resized to.
            // an object with optional start and end properties.
            validUnzonedRange: validUnzonedRange,
            // range the view is formally responsible for.
            // for example, a month view might have 1st-31st, excluding padded dates
            currentUnzonedRange: currentInfo.unzonedRange,
            // name of largest unit being displayed, like "month" or "week"
            currentRangeUnit: currentInfo.unit,
            isRangeAllDay: isRangeAllDay,
            // dates that display events and accept drag-n-drop
            // will be `null` if no dates accept events
            activeUnzonedRange: activeUnzonedRange,
            // date range with a rendered skeleton
            // includes not-active days that need some sort of DOM
            renderUnzonedRange: renderUnzonedRange,
            // Duration object that denotes the first visible time of any given day
            minTime: minTime,
            // Duration object that denotes the exclusive visible end time of any given day
            maxTime: maxTime,
            isValid: isValid,
            date: date,
            // how far the current date will move for a prev/next operation
            dateIncrement: this.buildDateIncrement(currentInfo.duration)
            // pass a fallback (might be null) ^
        };
    };
    // Builds an object with optional start/end properties.
    // Indicates the minimum/maximum dates to display.
    // not responsible for trimming hidden days.
    DateProfileGenerator.prototype.buildValidRange = function () {
        return this._view.getUnzonedRangeOption('validRange', this._view.calendar.getNow()) ||
            new UnzonedRange_1.default(); // completely open-ended
    };
    // Builds a structure with info about the "current" range, the range that is
    // highlighted as being the current month for example.
    // See build() for a description of `direction`.
    // Guaranteed to have `range` and `unit` properties. `duration` is optional.
    // TODO: accept a MS-time instead of a moment `date`?
    DateProfileGenerator.prototype.buildCurrentRangeInfo = function (date, direction) {
        var viewSpec = this._view.viewSpec;
        var duration = null;
        var unit = null;
        var unzonedRange = null;
        var dayCount;
        if (viewSpec.duration) {
            duration = viewSpec.duration;
            unit = viewSpec.durationUnit;
            unzonedRange = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        else if ((dayCount = this.opt('dayCount'))) {
            unit = 'day';
            unzonedRange = this.buildRangeFromDayCount(date, direction, dayCount);
        }
        else if ((unzonedRange = this.buildCustomVisibleRange(date))) {
            unit = util_1.computeGreatestUnit(unzonedRange.getStart(), unzonedRange.getEnd());
        }
        else {
            duration = this.getFallbackDuration();
            unit = util_1.computeGreatestUnit(duration);
            unzonedRange = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        return { duration: duration, unit: unit, unzonedRange: unzonedRange };
    };
    DateProfileGenerator.prototype.getFallbackDuration = function () {
        return moment.duration({ days: 1 });
    };
    // Returns a new activeUnzonedRange to have time values (un-ambiguate)
    // minTime or maxTime causes the range to expand.
    DateProfileGenerator.prototype.adjustActiveRange = function (unzonedRange, minTime, maxTime) {
        var start = unzonedRange.getStart();
        var end = unzonedRange.getEnd();
        if (this._view.usesMinMaxTime) {
            if (minTime < 0) {
                start.time(0).add(minTime);
            }
            if (maxTime > 24 * 60 * 60 * 1000) {
                end.time(maxTime - (24 * 60 * 60 * 1000));
            }
        }
        return new UnzonedRange_1.default(start, end);
    };
    // Builds the "current" range when it is specified as an explicit duration.
    // `unit` is the already-computed computeGreatestUnit value of duration.
    // TODO: accept a MS-time instead of a moment `date`?
    DateProfileGenerator.prototype.buildRangeFromDuration = function (date, direction, duration, unit) {
        var alignment = this.opt('dateAlignment');
        var dateIncrementInput;
        var dateIncrementDuration;
        var start;
        var end;
        var res;
        // compute what the alignment should be
        if (!alignment) {
            dateIncrementInput = this.opt('dateIncrement');
            if (dateIncrementInput) {
                dateIncrementDuration = moment.duration(dateIncrementInput);
                // use the smaller of the two units
                if (dateIncrementDuration < duration) {
                    alignment = util_1.computeDurationGreatestUnit(dateIncrementDuration, dateIncrementInput);
                }
                else {
                    alignment = unit;
                }
            }
            else {
                alignment = unit;
            }
        }
        // if the view displays a single day or smaller
        if (duration.as('days') <= 1) {
            if (this._view.isHiddenDay(start)) {
                start = this._view.skipHiddenDays(start, direction);
                start.startOf('day');
            }
        }
        function computeRes() {
            start = date.clone().startOf(alignment);
            end = start.clone().add(duration);
            res = new UnzonedRange_1.default(start, end);
        }
        computeRes();
        // if range is completely enveloped by hidden days, go past the hidden days
        if (!this.trimHiddenDays(res)) {
            date = this._view.skipHiddenDays(date, direction);
            computeRes();
        }
        return res;
    };
    // Builds the "current" range when a dayCount is specified.
    // TODO: accept a MS-time instead of a moment `date`?
    DateProfileGenerator.prototype.buildRangeFromDayCount = function (date, direction, dayCount) {
        var customAlignment = this.opt('dateAlignment');
        var runningCount = 0;
        var start = date.clone();
        var end;
        if (customAlignment) {
            start.startOf(customAlignment);
        }
        start.startOf('day');
        start = this._view.skipHiddenDays(start, direction);
        end = start.clone();
        do {
            end.add(1, 'day');
            if (!this._view.isHiddenDay(end)) {
                runningCount++;
            }
        } while (runningCount < dayCount);
        return new UnzonedRange_1.default(start, end);
    };
    // Builds a normalized range object for the "visible" range,
    // which is a way to define the currentUnzonedRange and activeUnzonedRange at the same time.
    // TODO: accept a MS-time instead of a moment `date`?
    DateProfileGenerator.prototype.buildCustomVisibleRange = function (date) {
        var visibleUnzonedRange = this._view.getUnzonedRangeOption('visibleRange', this._view.calendar.applyTimezone(date) // correct zone. also generates new obj that avoids mutations
        );
        if (visibleUnzonedRange && (visibleUnzonedRange.startMs == null || visibleUnzonedRange.endMs == null)) {
            return null;
        }
        return visibleUnzonedRange;
    };
    // Computes the range that will represent the element/cells for *rendering*,
    // but which may have voided days/times.
    // not responsible for trimming hidden days.
    DateProfileGenerator.prototype.buildRenderRange = function (currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
        return currentUnzonedRange.clone();
    };
    // Compute the duration value that should be added/substracted to the current date
    // when a prev/next operation happens.
    DateProfileGenerator.prototype.buildDateIncrement = function (fallback) {
        var dateIncrementInput = this.opt('dateIncrement');
        var customAlignment;
        if (dateIncrementInput) {
            return moment.duration(dateIncrementInput);
        }
        else if ((customAlignment = this.opt('dateAlignment'))) {
            return moment.duration(1, customAlignment);
        }
        else if (fallback) {
            return fallback;
        }
        else {
            return moment.duration({ days: 1 });
        }
    };
    return DateProfileGenerator;
}());
exports.default = DateProfileGenerator;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var exportHooks = __webpack_require__(16);
var util_1 = __webpack_require__(4);
var moment_ext_1 = __webpack_require__(10);
var ListenerMixin_1 = __webpack_require__(7);
var HitDragListener_1 = __webpack_require__(23);
var SingleEventDef_1 = __webpack_require__(13);
var EventInstanceGroup_1 = __webpack_require__(18);
var EventSource_1 = __webpack_require__(6);
var Interaction_1 = __webpack_require__(15);
var ExternalDropping = /** @class */ (function (_super) {
    tslib_1.__extends(ExternalDropping, _super);
    function ExternalDropping() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDragging = false; // jqui-dragging an external element? boolean
        return _this;
    }
    /*
    component impements:
      - eventRangesToEventFootprints
      - isEventInstanceGroupAllowed
      - isExternalInstanceGroupAllowed
      - renderDrag
      - unrenderDrag
    */
    ExternalDropping.prototype.end = function () {
        if (this.dragListener) {
            this.dragListener.endInteraction();
        }
    };
    ExternalDropping.prototype.bindToDocument = function () {
        this.listenTo($(document), {
            dragstart: this.handleDragStart,
            sortstart: this.handleDragStart // jqui
        });
    };
    ExternalDropping.prototype.unbindFromDocument = function () {
        this.stopListeningTo($(document));
    };
    // Called when a jQuery UI drag is initiated anywhere in the DOM
    ExternalDropping.prototype.handleDragStart = function (ev, ui) {
        var el;
        var accept;
        if (this.opt('droppable')) {
            el = $((ui ? ui.item : null) || ev.target);
            // Test that the dragged element passes the dropAccept selector or filter function.
            // FYI, the default is "*" (matches all)
            accept = this.opt('dropAccept');
            if ($.isFunction(accept) ? accept.call(el[0], el) : el.is(accept)) {
                if (!this.isDragging) {
                    this.listenToExternalDrag(el, ev, ui);
                }
            }
        }
    };
    // Called when a jQuery UI drag starts and it needs to be monitored for dropping
    ExternalDropping.prototype.listenToExternalDrag = function (el, ev, ui) {
        var _this = this;
        var component = this.component;
        var view = this.view;
        var meta = getDraggedElMeta(el); // extra data about event drop, including possible event to create
        var singleEventDef; // a null value signals an unsuccessful drag
        // listener that tracks mouse movement over date-associated pixel regions
        var dragListener = this.dragListener = new HitDragListener_1.default(component, {
            interactionStart: function () {
                _this.isDragging = true;
            },
            hitOver: function (hit) {
                var isAllowed = true;
                var hitFootprint = hit.component.getSafeHitFootprint(hit); // hit might not belong to this grid
                var mutatedEventInstanceGroup;
                if (hitFootprint) {
                    singleEventDef = _this.computeExternalDrop(hitFootprint, meta);
                    if (singleEventDef) {
                        mutatedEventInstanceGroup = new EventInstanceGroup_1.default(singleEventDef.buildInstances());
                        isAllowed = meta.eventProps ? // isEvent?
                            component.isEventInstanceGroupAllowed(mutatedEventInstanceGroup) :
                            component.isExternalInstanceGroupAllowed(mutatedEventInstanceGroup);
                    }
                    else {
                        isAllowed = false;
                    }
                }
                else {
                    isAllowed = false;
                }
                if (!isAllowed) {
                    singleEventDef = null;
                    util_1.disableCursor();
                }
                if (singleEventDef) {
                    component.renderDrag(// called without a seg parameter
                    component.eventRangesToEventFootprints(mutatedEventInstanceGroup.sliceRenderRanges(component.dateProfile.renderUnzonedRange, view.calendar)));
                }
            },
            hitOut: function () {
                singleEventDef = null; // signal unsuccessful
            },
            hitDone: function () {
                util_1.enableCursor();
                component.unrenderDrag();
            },
            interactionEnd: function (ev) {
                if (singleEventDef) {
                    view.reportExternalDrop(singleEventDef, Boolean(meta.eventProps), // isEvent
                    Boolean(meta.stick), // isSticky
                    el, ev, ui);
                }
                _this.isDragging = false;
                _this.dragListener = null;
            }
        });
        dragListener.startDrag(ev); // start listening immediately
    };
    // Given a hit to be dropped upon, and misc data associated with the jqui drag (guaranteed to be a plain object),
    // returns the zoned start/end dates for the event that would result from the hypothetical drop. end might be null.
    // Returning a null value signals an invalid drop hit.
    // DOES NOT consider overlap/constraint.
    // Assumes both footprints are non-open-ended.
    ExternalDropping.prototype.computeExternalDrop = function (componentFootprint, meta) {
        var calendar = this.view.calendar;
        var start = moment_ext_1.default.utc(componentFootprint.unzonedRange.startMs).stripZone();
        var end;
        var eventDef;
        if (componentFootprint.isAllDay) {
            // if dropped on an all-day span, and element's metadata specified a time, set it
            if (meta.startTime) {
                start.time(meta.startTime);
            }
            else {
                start.stripTime();
            }
        }
        if (meta.duration) {
            end = start.clone().add(meta.duration);
        }
        start = calendar.applyTimezone(start);
        if (end) {
            end = calendar.applyTimezone(end);
        }
        eventDef = SingleEventDef_1.default.parse($.extend({}, meta.eventProps, {
            start: start,
            end: end
        }), new EventSource_1.default(calendar));
        return eventDef;
    };
    return ExternalDropping;
}(Interaction_1.default));
exports.default = ExternalDropping;
ListenerMixin_1.default.mixInto(ExternalDropping);
/* External-Dragging-Element Data
----------------------------------------------------------------------------------------------------------------------*/
// Require all HTML5 data-* attributes used by FullCalendar to have this prefix.
// A value of '' will query attributes like data-event. A value of 'fc' will query attributes like data-fc-event.
exportHooks.dataAttrPrefix = '';
// Given a jQuery element that might represent a dragged FullCalendar event, returns an intermediate data structure
// to be used for Event Object creation.
// A defined `.eventProps`, even when empty, indicates that an event should be created.
function getDraggedElMeta(el) {
    var prefix = exportHooks.dataAttrPrefix;
    var eventProps; // properties for creating the event, not related to date/time
    var startTime; // a Duration
    var duration;
    var stick;
    if (prefix) {
        prefix += '-';
    }
    eventProps = el.data(prefix + 'event') || null;
    if (eventProps) {
        if (typeof eventProps === 'object') {
            eventProps = $.extend({}, eventProps); // make a copy
        }
        else {
            eventProps = {};
        }
        // pluck special-cased date/time properties
        startTime = eventProps.start;
        if (startTime == null) {
            startTime = eventProps.time;
        } // accept 'time' as well
        duration = eventProps.duration;
        stick = eventProps.stick;
        delete eventProps.start;
        delete eventProps.time;
        delete eventProps.duration;
        delete eventProps.stick;
    }
    // fallback to standalone attribute values for each of the date/time properties
    if (startTime == null) {
        startTime = el.data(prefix + 'start');
    }
    if (startTime == null) {
        startTime = el.data(prefix + 'time');
    } // accept 'time' as well
    if (duration == null) {
        duration = el.data(prefix + 'duration');
    }
    if (stick == null) {
        stick = el.data(prefix + 'stick');
    }
    // massage into correct data types
    startTime = startTime != null ? moment.duration(startTime) : null;
    duration = duration != null ? moment.duration(duration) : null;
    stick = Boolean(stick);
    return { eventProps: eventProps, startTime: startTime, duration: duration, stick: stick };
}


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var EventDefMutation_1 = __webpack_require__(37);
var EventDefDateMutation_1 = __webpack_require__(50);
var HitDragListener_1 = __webpack_require__(23);
var Interaction_1 = __webpack_require__(15);
var EventResizing = /** @class */ (function (_super) {
    tslib_1.__extends(EventResizing, _super);
    /*
    component impements:
      - bindSegHandlerToEl
      - publiclyTrigger
      - diffDates
      - eventRangesToEventFootprints
      - isEventInstanceGroupAllowed
      - getSafeHitFootprint
    */
    function EventResizing(component, eventPointing) {
        var _this = _super.call(this, component) || this;
        _this.isResizing = false;
        _this.eventPointing = eventPointing;
        return _this;
    }
    EventResizing.prototype.end = function () {
        if (this.dragListener) {
            this.dragListener.endInteraction();
        }
    };
    EventResizing.prototype.bindToEl = function (el) {
        var component = this.component;
        component.bindSegHandlerToEl(el, 'mousedown', this.handleMouseDown.bind(this));
        component.bindSegHandlerToEl(el, 'touchstart', this.handleTouchStart.bind(this));
    };
    EventResizing.prototype.handleMouseDown = function (seg, ev) {
        if (this.component.canStartResize(seg, ev)) {
            this.buildDragListener(seg, $(ev.target).is('.fc-start-resizer'))
                .startInteraction(ev, { distance: 5 });
        }
    };
    EventResizing.prototype.handleTouchStart = function (seg, ev) {
        if (this.component.canStartResize(seg, ev)) {
            this.buildDragListener(seg, $(ev.target).is('.fc-start-resizer'))
                .startInteraction(ev);
        }
    };
    // Creates a listener that tracks the user as they resize an event segment.
    // Generic enough to work with any type of Grid.
    EventResizing.prototype.buildDragListener = function (seg, isStart) {
        var _this = this;
        var component = this.component;
        var view = this.view;
        var calendar = view.calendar;
        var eventManager = calendar.eventManager;
        var el = seg.el;
        var eventDef = seg.footprint.eventDef;
        var eventInstance = seg.footprint.eventInstance;
        var isDragging;
        var resizeMutation; // zoned event date properties. falsy if invalid resize
        // Tracks mouse movement over the *grid's* coordinate map
        var dragListener = this.dragListener = new HitDragListener_1.default(component, {
            scroll: this.opt('dragScroll'),
            subjectEl: el,
            interactionStart: function () {
                isDragging = false;
            },
            dragStart: function (ev) {
                isDragging = true;
                // ensure a mouseout on the manipulated event has been reported
                _this.eventPointing.handleMouseout(seg, ev);
                _this.segResizeStart(seg, ev);
            },
            hitOver: function (hit, isOrig, origHit) {
                var isAllowed = true;
                var origHitFootprint = component.getSafeHitFootprint(origHit);
                var hitFootprint = component.getSafeHitFootprint(hit);
                var mutatedEventInstanceGroup;
                if (origHitFootprint && hitFootprint) {
                    resizeMutation = isStart ?
                        _this.computeEventStartResizeMutation(origHitFootprint, hitFootprint, seg.footprint) :
                        _this.computeEventEndResizeMutation(origHitFootprint, hitFootprint, seg.footprint);
                    if (resizeMutation) {
                        mutatedEventInstanceGroup = eventManager.buildMutatedEventInstanceGroup(eventDef.id, resizeMutation);
                        isAllowed = component.isEventInstanceGroupAllowed(mutatedEventInstanceGroup);
                    }
                    else {
                        isAllowed = false;
                    }
                }
                else {
                    isAllowed = false;
                }
                if (!isAllowed) {
                    resizeMutation = null;
                    util_1.disableCursor();
                }
                else if (resizeMutation.isEmpty()) {
                    // no change. (FYI, event dates might have zones)
                    resizeMutation = null;
                }
                if (resizeMutation) {
                    view.hideEventsWithId(seg.footprint.eventDef.id);
                    view.renderEventResize(component.eventRangesToEventFootprints(mutatedEventInstanceGroup.sliceRenderRanges(component.dateProfile.renderUnzonedRange, calendar)), seg);
                }
            },
            hitOut: function () {
                resizeMutation = null;
            },
            hitDone: function () {
                view.unrenderEventResize(seg);
                view.showEventsWithId(seg.footprint.eventDef.id);
                util_1.enableCursor();
            },
            interactionEnd: function (ev) {
                if (isDragging) {
                    _this.segResizeStop(seg, ev);
                }
                if (resizeMutation) {
                    // no need to re-show original, will rerender all anyways. esp important if eventRenderWait
                    view.reportEventResize(eventInstance, resizeMutation, el, ev);
                }
                _this.dragListener = null;
            }
        });
        return dragListener;
    };
    // Called before event segment resizing starts
    EventResizing.prototype.segResizeStart = function (seg, ev) {
        this.isResizing = true;
        this.component.publiclyTrigger('eventResizeStart', {
            context: seg.el[0],
            args: [
                seg.footprint.getEventLegacy(),
                ev,
                {},
                this.view
            ]
        });
    };
    // Called after event segment resizing stops
    EventResizing.prototype.segResizeStop = function (seg, ev) {
        this.isResizing = false;
        this.component.publiclyTrigger('eventResizeStop', {
            context: seg.el[0],
            args: [
                seg.footprint.getEventLegacy(),
                ev,
                {},
                this.view
            ]
        });
    };
    // Returns new date-information for an event segment being resized from its start
    EventResizing.prototype.computeEventStartResizeMutation = function (startFootprint, endFootprint, origEventFootprint) {
        var origRange = origEventFootprint.componentFootprint.unzonedRange;
        var startDelta = this.component.diffDates(endFootprint.unzonedRange.getStart(), startFootprint.unzonedRange.getStart());
        var dateMutation;
        var eventDefMutation;
        if (origRange.getStart().add(startDelta) < origRange.getEnd()) {
            dateMutation = new EventDefDateMutation_1.default();
            dateMutation.setStartDelta(startDelta);
            eventDefMutation = new EventDefMutation_1.default();
            eventDefMutation.setDateMutation(dateMutation);
            return eventDefMutation;
        }
        return false;
    };
    // Returns new date-information for an event segment being resized from its end
    EventResizing.prototype.computeEventEndResizeMutation = function (startFootprint, endFootprint, origEventFootprint) {
        var origRange = origEventFootprint.componentFootprint.unzonedRange;
        var endDelta = this.component.diffDates(endFootprint.unzonedRange.getEnd(), startFootprint.unzonedRange.getEnd());
        var dateMutation;
        var eventDefMutation;
        if (origRange.getEnd().add(endDelta) > origRange.getStart()) {
            dateMutation = new EventDefDateMutation_1.default();
            dateMutation.setEndDelta(endDelta);
            eventDefMutation = new EventDefMutation_1.default();
            eventDefMutation.setDateMutation(dateMutation);
            return eventDefMutation;
        }
        return false;
    };
    return EventResizing;
}(Interaction_1.default));
exports.default = EventResizing;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var EventDefMutation_1 = __webpack_require__(37);
var EventDefDateMutation_1 = __webpack_require__(50);
var DragListener_1 = __webpack_require__(54);
var HitDragListener_1 = __webpack_require__(23);
var MouseFollower_1 = __webpack_require__(244);
var Interaction_1 = __webpack_require__(15);
var EventDragging = /** @class */ (function (_super) {
    tslib_1.__extends(EventDragging, _super);
    /*
    component implements:
      - bindSegHandlerToEl
      - publiclyTrigger
      - diffDates
      - eventRangesToEventFootprints
      - isEventInstanceGroupAllowed
    */
    function EventDragging(component, eventPointing) {
        var _this = _super.call(this, component) || this;
        _this.isDragging = false;
        _this.eventPointing = eventPointing;
        return _this;
    }
    EventDragging.prototype.end = function () {
        if (this.dragListener) {
            this.dragListener.endInteraction();
        }
    };
    EventDragging.prototype.getSelectionDelay = function () {
        var delay = this.opt('eventLongPressDelay');
        if (delay == null) {
            delay = this.opt('longPressDelay'); // fallback
        }
        return delay;
    };
    EventDragging.prototype.bindToEl = function (el) {
        var component = this.component;
        component.bindSegHandlerToEl(el, 'mousedown', this.handleMousedown.bind(this));
        component.bindSegHandlerToEl(el, 'touchstart', this.handleTouchStart.bind(this));
    };
    EventDragging.prototype.handleMousedown = function (seg, ev) {
        if (!this.component.shouldIgnoreMouse() &&
            this.component.canStartDrag(seg, ev)) {
            this.buildDragListener(seg).startInteraction(ev, { distance: 5 });
        }
    };
    EventDragging.prototype.handleTouchStart = function (seg, ev) {
        var component = this.component;
        var settings = {
            delay: this.view.isEventDefSelected(seg.footprint.eventDef) ? // already selected?
                0 : this.getSelectionDelay()
        };
        if (component.canStartDrag(seg, ev)) {
            this.buildDragListener(seg).startInteraction(ev, settings);
        }
        else if (component.canStartSelection(seg, ev)) {
            this.buildSelectListener(seg).startInteraction(ev, settings);
        }
    };
    // seg isn't draggable, but let's use a generic DragListener
    // simply for the delay, so it can be selected.
    // Has side effect of setting/unsetting `dragListener`
    EventDragging.prototype.buildSelectListener = function (seg) {
        var _this = this;
        var view = this.view;
        var eventDef = seg.footprint.eventDef;
        var eventInstance = seg.footprint.eventInstance; // null for inverse-background events
        if (this.dragListener) {
            return this.dragListener;
        }
        var dragListener = this.dragListener = new DragListener_1.default({
            dragStart: function (ev) {
                if (dragListener.isTouch &&
                    !view.isEventDefSelected(eventDef) &&
                    eventInstance) {
                    // if not previously selected, will fire after a delay. then, select the event
                    view.selectEventInstance(eventInstance);
                }
            },
            interactionEnd: function (ev) {
                _this.dragListener = null;
            }
        });
        return dragListener;
    };
    // Builds a listener that will track user-dragging on an event segment.
    // Generic enough to work with any type of Grid.
    // Has side effect of setting/unsetting `dragListener`
    EventDragging.prototype.buildDragListener = function (seg) {
        var _this = this;
        var component = this.component;
        var view = this.view;
        var calendar = view.calendar;
        var eventManager = calendar.eventManager;
        var el = seg.el;
        var eventDef = seg.footprint.eventDef;
        var eventInstance = seg.footprint.eventInstance; // null for inverse-background events
        var isDragging;
        var mouseFollower; // A clone of the original element that will move with the mouse
        var eventDefMutation;
        if (this.dragListener) {
            return this.dragListener;
        }
        // Tracks mouse movement over the *view's* coordinate map. Allows dragging and dropping between subcomponents
        // of the view.
        var dragListener = this.dragListener = new HitDragListener_1.default(view, {
            scroll: this.opt('dragScroll'),
            subjectEl: el,
            subjectCenter: true,
            interactionStart: function (ev) {
                seg.component = component; // for renderDrag
                isDragging = false;
                mouseFollower = new MouseFollower_1.default(seg.el, {
                    additionalClass: 'fc-dragging',
                    parentEl: view.el,
                    opacity: dragListener.isTouch ? null : _this.opt('dragOpacity'),
                    revertDuration: _this.opt('dragRevertDuration'),
                    zIndex: 2 // one above the .fc-view
                });
                mouseFollower.hide(); // don't show until we know this is a real drag
                mouseFollower.start(ev);
            },
            dragStart: function (ev) {
                if (dragListener.isTouch &&
                    !view.isEventDefSelected(eventDef) &&
                    eventInstance) {
                    // if not previously selected, will fire after a delay. then, select the event
                    view.selectEventInstance(eventInstance);
                }
                isDragging = true;
                // ensure a mouseout on the manipulated event has been reported
                _this.eventPointing.handleMouseout(seg, ev);
                _this.segDragStart(seg, ev);
                view.hideEventsWithId(seg.footprint.eventDef.id);
            },
            hitOver: function (hit, isOrig, origHit) {
                var isAllowed = true;
                var origFootprint;
                var footprint;
                var mutatedEventInstanceGroup;
                // starting hit could be forced (DayGrid.limit)
                if (seg.hit) {
                    origHit = seg.hit;
                }
                // hit might not belong to this grid, so query origin grid
                origFootprint = origHit.component.getSafeHitFootprint(origHit);
                footprint = hit.component.getSafeHitFootprint(hit);
                if (origFootprint && footprint) {
                    eventDefMutation = _this.computeEventDropMutation(origFootprint, footprint, eventDef);
                    if (eventDefMutation) {
                        mutatedEventInstanceGroup = eventManager.buildMutatedEventInstanceGroup(eventDef.id, eventDefMutation);
                        isAllowed = component.isEventInstanceGroupAllowed(mutatedEventInstanceGroup);
                    }
                    else {
                        isAllowed = false;
                    }
                }
                else {
                    isAllowed = false;
                }
                if (!isAllowed) {
                    eventDefMutation = null;
                    util_1.disableCursor();
                }
                // if a valid drop location, have the subclass render a visual indication
                if (eventDefMutation &&
                    view.renderDrag(// truthy if rendered something
                    component.eventRangesToEventFootprints(mutatedEventInstanceGroup.sliceRenderRanges(component.dateProfile.renderUnzonedRange, calendar)), seg, dragListener.isTouch)) {
                    mouseFollower.hide(); // if the subclass is already using a mock event "helper", hide our own
                }
                else {
                    mouseFollower.show(); // otherwise, have the helper follow the mouse (no snapping)
                }
                if (isOrig) {
                    // needs to have moved hits to be a valid drop
                    eventDefMutation = null;
                }
            },
            hitOut: function () {
                view.unrenderDrag(seg); // unrender whatever was done in renderDrag
                mouseFollower.show(); // show in case we are moving out of all hits
                eventDefMutation = null;
            },
            hitDone: function () {
                util_1.enableCursor();
            },
            interactionEnd: function (ev) {
                delete seg.component; // prevent side effects
                // do revert animation if hasn't changed. calls a callback when finished (whether animation or not)
                mouseFollower.stop(!eventDefMutation, function () {
                    if (isDragging) {
                        view.unrenderDrag(seg);
                        _this.segDragStop(seg, ev);
                    }
                    view.showEventsWithId(seg.footprint.eventDef.id);
                    if (eventDefMutation) {
                        // no need to re-show original, will rerender all anyways. esp important if eventRenderWait
                        view.reportEventDrop(eventInstance, eventDefMutation, el, ev);
                    }
                });
                _this.dragListener = null;
            }
        });
        return dragListener;
    };
    // Called before event segment dragging starts
    EventDragging.prototype.segDragStart = function (seg, ev) {
        this.isDragging = true;
        this.component.publiclyTrigger('eventDragStart', {
            context: seg.el[0],
            args: [
                seg.footprint.getEventLegacy(),
                ev,
                {},
                this.view
            ]
        });
    };
    // Called after event segment dragging stops
    EventDragging.prototype.segDragStop = function (seg, ev) {
        this.isDragging = false;
        this.component.publiclyTrigger('eventDragStop', {
            context: seg.el[0],
            args: [
                seg.footprint.getEventLegacy(),
                ev,
                {},
                this.view
            ]
        });
    };
    // DOES NOT consider overlap/constraint
    EventDragging.prototype.computeEventDropMutation = function (startFootprint, endFootprint, eventDef) {
        var eventDefMutation = new EventDefMutation_1.default();
        eventDefMutation.setDateMutation(this.computeEventDateMutation(startFootprint, endFootprint));
        return eventDefMutation;
    };
    EventDragging.prototype.computeEventDateMutation = function (startFootprint, endFootprint) {
        var date0 = startFootprint.unzonedRange.getStart();
        var date1 = endFootprint.unzonedRange.getStart();
        var clearEnd = false;
        var forceTimed = false;
        var forceAllDay = false;
        var dateDelta;
        var dateMutation;
        if (startFootprint.isAllDay !== endFootprint.isAllDay) {
            clearEnd = true;
            if (endFootprint.isAllDay) {
                forceAllDay = true;
                date0.stripTime();
            }
            else {
                forceTimed = true;
            }
        }
        dateDelta = this.component.diffDates(date1, date0);
        dateMutation = new EventDefDateMutation_1.default();
        dateMutation.clearEnd = clearEnd;
        dateMutation.forceTimed = forceTimed;
        dateMutation.forceAllDay = forceAllDay;
        dateMutation.setDateDelta(dateDelta);
        return dateMutation;
    };
    return EventDragging;
}(Interaction_1.default));
exports.default = EventDragging;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var HitDragListener_1 = __webpack_require__(23);
var ComponentFootprint_1 = __webpack_require__(12);
var UnzonedRange_1 = __webpack_require__(5);
var Interaction_1 = __webpack_require__(15);
var DateSelecting = /** @class */ (function (_super) {
    tslib_1.__extends(DateSelecting, _super);
    /*
    component must implement:
      - bindDateHandlerToEl
      - getSafeHitFootprint
      - renderHighlight
      - unrenderHighlight
    */
    function DateSelecting(component) {
        var _this = _super.call(this, component) || this;
        _this.dragListener = _this.buildDragListener();
        return _this;
    }
    DateSelecting.prototype.end = function () {
        this.dragListener.endInteraction();
    };
    DateSelecting.prototype.getDelay = function () {
        var delay = this.opt('selectLongPressDelay');
        if (delay == null) {
            delay = this.opt('longPressDelay'); // fallback
        }
        return delay;
    };
    DateSelecting.prototype.bindToEl = function (el) {
        var _this = this;
        var component = this.component;
        var dragListener = this.dragListener;
        component.bindDateHandlerToEl(el, 'mousedown', function (ev) {
            if (_this.opt('selectable') && !component.shouldIgnoreMouse()) {
                dragListener.startInteraction(ev, {
                    distance: _this.opt('selectMinDistance')
                });
            }
        });
        component.bindDateHandlerToEl(el, 'touchstart', function (ev) {
            if (_this.opt('selectable') && !component.shouldIgnoreTouch()) {
                dragListener.startInteraction(ev, {
                    delay: _this.getDelay()
                });
            }
        });
        util_1.preventSelection(el);
    };
    // Creates a listener that tracks the user's drag across day elements, for day selecting.
    DateSelecting.prototype.buildDragListener = function () {
        var _this = this;
        var component = this.component;
        var selectionFootprint; // null if invalid selection
        var dragListener = new HitDragListener_1.default(component, {
            scroll: this.opt('dragScroll'),
            interactionStart: function () {
                selectionFootprint = null;
            },
            dragStart: function (ev) {
                _this.view.unselect(ev); // since we could be rendering a new selection, we want to clear any old one
            },
            hitOver: function (hit, isOrig, origHit) {
                var origHitFootprint;
                var hitFootprint;
                if (origHit) {
                    origHitFootprint = component.getSafeHitFootprint(origHit);
                    hitFootprint = component.getSafeHitFootprint(hit);
                    if (origHitFootprint && hitFootprint) {
                        selectionFootprint = _this.computeSelection(origHitFootprint, hitFootprint);
                    }
                    else {
                        selectionFootprint = null;
                    }
                    if (selectionFootprint) {
                        component.renderSelectionFootprint(selectionFootprint);
                    }
                    else if (selectionFootprint === false) {
                        util_1.disableCursor();
                    }
                }
            },
            hitOut: function () {
                selectionFootprint = null;
                component.unrenderSelection();
            },
            hitDone: function () {
                util_1.enableCursor();
            },
            interactionEnd: function (ev, isCancelled) {
                if (!isCancelled && selectionFootprint) {
                    // the selection will already have been rendered. just report it
                    _this.view.reportSelection(selectionFootprint, ev);
                }
            }
        });
        return dragListener;
    };
    // Given the first and last date-spans of a selection, returns another date-span object.
    // Subclasses can override and provide additional data in the span object. Will be passed to renderSelectionFootprint().
    // Will return false if the selection is invalid and this should be indicated to the user.
    // Will return null/undefined if a selection invalid but no error should be reported.
    DateSelecting.prototype.computeSelection = function (footprint0, footprint1) {
        var wholeFootprint = this.computeSelectionFootprint(footprint0, footprint1);
        if (wholeFootprint && !this.isSelectionFootprintAllowed(wholeFootprint)) {
            return false;
        }
        return wholeFootprint;
    };
    // Given two spans, must return the combination of the two.
    // TODO: do this separation of concerns (combining VS validation) for event dnd/resize too.
    // Assumes both footprints are non-open-ended.
    DateSelecting.prototype.computeSelectionFootprint = function (footprint0, footprint1) {
        var ms = [
            footprint0.unzonedRange.startMs,
            footprint0.unzonedRange.endMs,
            footprint1.unzonedRange.startMs,
            footprint1.unzonedRange.endMs
        ];
        ms.sort(util_1.compareNumbers);
        return new ComponentFootprint_1.default(new UnzonedRange_1.default(ms[0], ms[3]), footprint0.isAllDay);
    };
    DateSelecting.prototype.isSelectionFootprintAllowed = function (componentFootprint) {
        return this.component.dateProfile.validUnzonedRange.containsRange(componentFootprint.unzonedRange) &&
            this.view.calendar.constraints.isSelectionFootprintAllowed(componentFootprint);
    };
    return DateSelecting;
}(Interaction_1.default));
exports.default = DateSelecting;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var moment = __webpack_require__(0);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var Scroller_1 = __webpack_require__(39);
var View_1 = __webpack_require__(41);
var TimeGrid_1 = __webpack_require__(227);
var DayGrid_1 = __webpack_require__(61);
var AGENDA_ALL_DAY_EVENT_LIMIT = 5;
var agendaTimeGridMethods;
var agendaDayGridMethods;
/* An abstract class for all agenda-related views. Displays one more columns with time slots running vertically.
----------------------------------------------------------------------------------------------------------------------*/
// Is a manager for the TimeGrid subcomponent and possibly the DayGrid subcomponent (if allDaySlot is on).
// Responsible for managing width/height.
var AgendaView = /** @class */ (function (_super) {
    tslib_1.__extends(AgendaView, _super);
    function AgendaView(calendar, viewSpec) {
        var _this = _super.call(this, calendar, viewSpec) || this;
        _this.usesMinMaxTime = true; // indicates that minTime/maxTime affects rendering
        _this.timeGrid = _this.instantiateTimeGrid();
        _this.addChild(_this.timeGrid);
        if (_this.opt('allDaySlot')) {
            _this.dayGrid = _this.instantiateDayGrid(); // the all-day subcomponent of this view
            _this.addChild(_this.dayGrid);
        }
        _this.scroller = new Scroller_1.default({
            overflowX: 'hidden',
            overflowY: 'auto'
        });
        return _this;
    }
    // Instantiates the TimeGrid object this view needs. Draws from this.timeGridClass
    AgendaView.prototype.instantiateTimeGrid = function () {
        var timeGrid = new this.timeGridClass(this);
        util_1.copyOwnProps(agendaTimeGridMethods, timeGrid);
        return timeGrid;
    };
    // Instantiates the DayGrid object this view might need. Draws from this.dayGridClass
    AgendaView.prototype.instantiateDayGrid = function () {
        var dayGrid = new this.dayGridClass(this);
        util_1.copyOwnProps(agendaDayGridMethods, dayGrid);
        return dayGrid;
    };
    /* Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    AgendaView.prototype.renderSkeleton = function () {
        var timeGridWrapEl;
        var timeGridEl;
        this.el.addClass('fc-agenda-view').html(this.renderSkeletonHtml());
        this.scroller.render();
        timeGridWrapEl = this.scroller.el.addClass('fc-time-grid-container');
        timeGridEl = $('<div class="fc-time-grid" />').appendTo(timeGridWrapEl);
        this.el.find('.fc-body > tr > td').append(timeGridWrapEl);
        this.timeGrid.headContainerEl = this.el.find('.fc-head-container');
        this.timeGrid.setElement(timeGridEl);
        if (this.dayGrid) {
            this.dayGrid.setElement(this.el.find('.fc-day-grid'));
            // have the day-grid extend it's coordinate area over the <hr> dividing the two grids
            this.dayGrid.bottomCoordPadding = this.dayGrid.el.next('hr').outerHeight();
        }
    };
    AgendaView.prototype.unrenderSkeleton = function () {
        this.timeGrid.removeElement();
        if (this.dayGrid) {
            this.dayGrid.removeElement();
        }
        this.scroller.destroy();
    };
    // Builds the HTML skeleton for the view.
    // The day-grid and time-grid components will render inside containers defined by this HTML.
    AgendaView.prototype.renderSkeletonHtml = function () {
        var theme = this.calendar.theme;
        return '' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            (this.opt('columnHeader') ?
                '<thead class="fc-head">' +
                    '<tr>' +
                    '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                    '</tr>' +
                    '</thead>' :
                '') +
            '<tbody class="fc-body">' +
            '<tr>' +
            '<td class="' + theme.getClass('widgetContent') + '">' +
            (this.dayGrid ?
                '<div class="fc-day-grid"/>' +
                    '<hr class="fc-divider ' + theme.getClass('widgetHeader') + '"/>' :
                '') +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
    };
    // Generates an HTML attribute string for setting the width of the axis, if it is known
    AgendaView.prototype.axisStyleAttr = function () {
        if (this.axisWidth != null) {
            return 'style="width:' + this.axisWidth + 'px"';
        }
        return '';
    };
    /* Now Indicator
    ------------------------------------------------------------------------------------------------------------------*/
    AgendaView.prototype.getNowIndicatorUnit = function () {
        return this.timeGrid.getNowIndicatorUnit();
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    // Adjusts the vertical dimensions of the view to the specified values
    AgendaView.prototype.updateSize = function (totalHeight, isAuto, isResize) {
        var eventLimit;
        var scrollerHeight;
        var scrollbarWidths;
        _super.prototype.updateSize.call(this, totalHeight, isAuto, isResize);
        // make all axis cells line up, and record the width so newly created axis cells will have it
        this.axisWidth = util_1.matchCellWidths(this.el.find('.fc-axis'));
        // hack to give the view some height prior to timeGrid's columns being rendered
        // TODO: separate setting height from scroller VS timeGrid.
        if (!this.timeGrid.colEls) {
            if (!isAuto) {
                scrollerHeight = this.computeScrollerHeight(totalHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            return;
        }
        // set of fake row elements that must compensate when scroller has scrollbars
        var noScrollRowEls = this.el.find('.fc-row:not(.fc-scroller *)');
        // reset all dimensions back to the original state
        this.timeGrid.bottomRuleEl.hide(); // .show() will be called later if this <hr> is necessary
        this.scroller.clear(); // sets height to 'auto' and clears overflow
        util_1.uncompensateScroll(noScrollRowEls);
        // limit number of events in the all-day area
        if (this.dayGrid) {
            this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed
            eventLimit = this.opt('eventLimit');
            if (eventLimit && typeof eventLimit !== 'number') {
                eventLimit = AGENDA_ALL_DAY_EVENT_LIMIT; // make sure "auto" goes to a real number
            }
            if (eventLimit) {
                this.dayGrid.limitRows(eventLimit);
            }
        }
        if (!isAuto) {
            scrollerHeight = this.computeScrollerHeight(totalHeight);
            this.scroller.setHeight(scrollerHeight);
            scrollbarWidths = this.scroller.getScrollbarWidths();
            if (scrollbarWidths.left || scrollbarWidths.right) {
                // make the all-day and header rows lines up
                util_1.compensateScroll(noScrollRowEls, scrollbarWidths);
                // the scrollbar compensation might have changed text flow, which might affect height, so recalculate
                // and reapply the desired height to the scroller.
                scrollerHeight = this.computeScrollerHeight(totalHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            // guarantees the same scrollbar widths
            this.scroller.lockOverflow(scrollbarWidths);
            // if there's any space below the slats, show the horizontal rule.
            // this won't cause any new overflow, because lockOverflow already called.
            if (this.timeGrid.getTotalSlatHeight() < scrollerHeight) {
                this.timeGrid.bottomRuleEl.show();
            }
        }
    };
    // given a desired total height of the view, returns what the height of the scroller should be
    AgendaView.prototype.computeScrollerHeight = function (totalHeight) {
        return totalHeight -
            util_1.subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
    };
    /* Scroll
    ------------------------------------------------------------------------------------------------------------------*/
    // Computes the initial pre-configured scroll state prior to allowing the user to change it
    AgendaView.prototype.computeInitialDateScroll = function () {
        var scrollTime = moment.duration(this.opt('scrollTime'));
        var top = this.timeGrid.computeTimeTop(scrollTime);
        // zoom can give weird floating-point values. rather scroll a little bit further
        top = Math.ceil(top);
        if (top) {
            top++; // to overcome top border that slots beyond the first have. looks better
        }
        return { top: top };
    };
    AgendaView.prototype.queryDateScroll = function () {
        return { top: this.scroller.getScrollTop() };
    };
    AgendaView.prototype.applyDateScroll = function (scroll) {
        if (scroll.top !== undefined) {
            this.scroller.setScrollTop(scroll.top);
        }
    };
    /* Hit Areas
    ------------------------------------------------------------------------------------------------------------------*/
    // forward all hit-related method calls to the grids (dayGrid might not be defined)
    AgendaView.prototype.getHitFootprint = function (hit) {
        // TODO: hit.component is set as a hack to identify where the hit came from
        return hit.component.getHitFootprint(hit);
    };
    AgendaView.prototype.getHitEl = function (hit) {
        // TODO: hit.component is set as a hack to identify where the hit came from
        return hit.component.getHitEl(hit);
    };
    /* Event Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    AgendaView.prototype.executeEventRender = function (eventsPayload) {
        var dayEventsPayload = {};
        var timedEventsPayload = {};
        var id;
        var eventInstanceGroup;
        // separate the events into all-day and timed
        for (id in eventsPayload) {
            eventInstanceGroup = eventsPayload[id];
            if (eventInstanceGroup.getEventDef().isAllDay()) {
                dayEventsPayload[id] = eventInstanceGroup;
            }
            else {
                timedEventsPayload[id] = eventInstanceGroup;
            }
        }
        this.timeGrid.executeEventRender(timedEventsPayload);
        if (this.dayGrid) {
            this.dayGrid.executeEventRender(dayEventsPayload);
        }
    };
    /* Dragging/Resizing Routing
    ------------------------------------------------------------------------------------------------------------------*/
    // A returned value of `true` signals that a mock "helper" event has been rendered.
    AgendaView.prototype.renderDrag = function (eventFootprints, seg, isTouch) {
        var groups = groupEventFootprintsByAllDay(eventFootprints);
        var renderedHelper = false;
        renderedHelper = this.timeGrid.renderDrag(groups.timed, seg, isTouch);
        if (this.dayGrid) {
            renderedHelper = this.dayGrid.renderDrag(groups.allDay, seg, isTouch) || renderedHelper;
        }
        return renderedHelper;
    };
    AgendaView.prototype.renderEventResize = function (eventFootprints, seg, isTouch) {
        var groups = groupEventFootprintsByAllDay(eventFootprints);
        this.timeGrid.renderEventResize(groups.timed, seg, isTouch);
        if (this.dayGrid) {
            this.dayGrid.renderEventResize(groups.allDay, seg, isTouch);
        }
    };
    /* Selection
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of a selection
    AgendaView.prototype.renderSelectionFootprint = function (componentFootprint) {
        if (!componentFootprint.isAllDay) {
            this.timeGrid.renderSelectionFootprint(componentFootprint);
        }
        else if (this.dayGrid) {
            this.dayGrid.renderSelectionFootprint(componentFootprint);
        }
    };
    return AgendaView;
}(View_1.default));
exports.default = AgendaView;
AgendaView.prototype.timeGridClass = TimeGrid_1.default;
AgendaView.prototype.dayGridClass = DayGrid_1.default;
// Will customize the rendering behavior of the AgendaView's timeGrid
agendaTimeGridMethods = {
    // Generates the HTML that will go before the day-of week header cells
    renderHeadIntroHtml: function () {
        var view = this.view;
        var calendar = view.calendar;
        var weekStart = calendar.msToUtcMoment(this.dateProfile.renderUnzonedRange.startMs, true);
        var weekText;
        if (this.opt('weekNumbers')) {
            weekText = weekStart.format(this.opt('smallWeekFormat'));
            return '' +
                '<th class="fc-axis fc-week-number ' + calendar.theme.getClass('widgetHeader') + '" ' + view.axisStyleAttr() + '>' +
                view.buildGotoAnchorHtml(// aside from link, important for matchCellWidths
                { date: weekStart, type: 'week', forceOff: this.colCnt > 1 }, util_1.htmlEscape(weekText) // inner HTML
                ) +
                '</th>';
        }
        else {
            return '<th class="fc-axis ' + calendar.theme.getClass('widgetHeader') + '" ' + view.axisStyleAttr() + '></th>';
        }
    },
    // Generates the HTML that goes before the bg of the TimeGrid slot area. Long vertical column.
    renderBgIntroHtml: function () {
        var view = this.view;
        return '<td class="fc-axis ' + view.calendar.theme.getClass('widgetContent') + '" ' + view.axisStyleAttr() + '></td>';
    },
    // Generates the HTML that goes before all other types of cells.
    // Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
    renderIntroHtml: function () {
        var view = this.view;
        return '<td class="fc-axis" ' + view.axisStyleAttr() + '></td>';
    }
};
// Will customize the rendering behavior of the AgendaView's dayGrid
agendaDayGridMethods = {
    // Generates the HTML that goes before the all-day cells
    renderBgIntroHtml: function () {
        var view = this.view;
        return '' +
            '<td class="fc-axis ' + view.calendar.theme.getClass('widgetContent') + '" ' + view.axisStyleAttr() + '>' +
            '<span>' + // needed for matchCellWidths
            view.getAllDayHtml() +
            '</span>' +
            '</td>';
    },
    // Generates the HTML that goes before all other types of cells.
    // Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
    renderIntroHtml: function () {
        var view = this.view;
        return '<td class="fc-axis" ' + view.axisStyleAttr() + '></td>';
    }
};
function groupEventFootprintsByAllDay(eventFootprints) {
    var allDay = [];
    var timed = [];
    var i;
    for (i = 0; i < eventFootprints.length; i++) {
        if (eventFootprints[i].componentFootprint.isAllDay) {
            allDay.push(eventFootprints[i]);
        }
        else {
            timed.push(eventFootprints[i]);
        }
    }
    return { allDay: allDay, timed: timed };
}


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var InteractiveDateComponent_1 = __webpack_require__(40);
var BusinessHourRenderer_1 = __webpack_require__(56);
var StandardInteractionsMixin_1 = __webpack_require__(60);
var DayTableMixin_1 = __webpack_require__(55);
var CoordCache_1 = __webpack_require__(53);
var UnzonedRange_1 = __webpack_require__(5);
var ComponentFootprint_1 = __webpack_require__(12);
var TimeGridEventRenderer_1 = __webpack_require__(246);
var TimeGridHelperRenderer_1 = __webpack_require__(247);
var TimeGridFillRenderer_1 = __webpack_require__(248);
/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
// We mixin DayTable, even though there is only a single row of days
// potential nice values for the slot-duration and interval-duration
// from largest to smallest
var AGENDA_STOCK_SUB_DURATIONS = [
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { seconds: 30 },
    { seconds: 15 }
];
var TimeGrid = /** @class */ (function (_super) {
    tslib_1.__extends(TimeGrid, _super);
    function TimeGrid(view) {
        var _this = _super.call(this, view) || this;
        _this.processOptions();
        return _this;
    }
    // Slices up the given span (unzoned start/end with other misc data) into an array of segments
    TimeGrid.prototype.componentFootprintToSegs = function (componentFootprint) {
        var segs = this.sliceRangeByTimes(componentFootprint.unzonedRange);
        var i;
        for (i = 0; i < segs.length; i++) {
            if (this.isRTL) {
                segs[i].col = this.daysPerRow - 1 - segs[i].dayIndex;
            }
            else {
                segs[i].col = segs[i].dayIndex;
            }
        }
        return segs;
    };
    /* Date Handling
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.sliceRangeByTimes = function (unzonedRange) {
        var segs = [];
        var segRange;
        var dayIndex;
        for (dayIndex = 0; dayIndex < this.daysPerRow; dayIndex++) {
            segRange = unzonedRange.intersect(this.dayRanges[dayIndex]);
            if (segRange) {
                segs.push({
                    startMs: segRange.startMs,
                    endMs: segRange.endMs,
                    isStart: segRange.isStart,
                    isEnd: segRange.isEnd,
                    dayIndex: dayIndex
                });
            }
        }
        return segs;
    };
    /* Options
    ------------------------------------------------------------------------------------------------------------------*/
    // Parses various options into properties of this object
    TimeGrid.prototype.processOptions = function () {
        var slotDuration = this.opt('slotDuration');
        var snapDuration = this.opt('snapDuration');
        var input;
        slotDuration = moment.duration(slotDuration);
        snapDuration = snapDuration ? moment.duration(snapDuration) : slotDuration;
        this.slotDuration = slotDuration;
        this.snapDuration = snapDuration;
        this.snapsPerSlot = slotDuration / snapDuration; // TODO: ensure an integer multiple?
        // might be an array value (for TimelineView).
        // if so, getting the most granular entry (the last one probably).
        input = this.opt('slotLabelFormat');
        if ($.isArray(input)) {
            input = input[input.length - 1];
        }
        this.labelFormat = input ||
            this.opt('smallTimeFormat'); // the computed default
        input = this.opt('slotLabelInterval');
        this.labelInterval = input ?
            moment.duration(input) :
            this.computeLabelInterval(slotDuration);
    };
    // Computes an automatic value for slotLabelInterval
    TimeGrid.prototype.computeLabelInterval = function (slotDuration) {
        var i;
        var labelInterval;
        var slotsPerLabel;
        // find the smallest stock label interval that results in more than one slots-per-label
        for (i = AGENDA_STOCK_SUB_DURATIONS.length - 1; i >= 0; i--) {
            labelInterval = moment.duration(AGENDA_STOCK_SUB_DURATIONS[i]);
            slotsPerLabel = util_1.divideDurationByDuration(labelInterval, slotDuration);
            if (util_1.isInt(slotsPerLabel) && slotsPerLabel > 1) {
                return labelInterval;
            }
        }
        return moment.duration(slotDuration); // fall back. clone
    };
    /* Date Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.renderDates = function (dateProfile) {
        this.dateProfile = dateProfile;
        this.updateDayTable();
        this.renderSlats();
        this.renderColumns();
    };
    TimeGrid.prototype.unrenderDates = function () {
        // this.unrenderSlats(); // don't need this because repeated .html() calls clear
        this.unrenderColumns();
    };
    TimeGrid.prototype.renderSkeleton = function () {
        var theme = this.view.calendar.theme;
        this.el.html('<div class="fc-bg"></div>' +
            '<div class="fc-slats"></div>' +
            '<hr class="fc-divider ' + theme.getClass('widgetHeader') + '" style="display:none" />');
        this.bottomRuleEl = this.el.find('hr');
    };
    TimeGrid.prototype.renderSlats = function () {
        var theme = this.view.calendar.theme;
        this.slatContainerEl = this.el.find('> .fc-slats')
            .html(// avoids needing ::unrenderSlats()
        '<table class="' + theme.getClass('tableGrid') + '">' +
            this.renderSlatRowHtml() +
            '</table>');
        this.slatEls = this.slatContainerEl.find('tr');
        this.slatCoordCache = new CoordCache_1.default({
            els: this.slatEls,
            isVertical: true
        });
    };
    // Generates the HTML for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
    TimeGrid.prototype.renderSlatRowHtml = function () {
        var view = this.view;
        var calendar = view.calendar;
        var theme = calendar.theme;
        var isRTL = this.isRTL;
        var dateProfile = this.dateProfile;
        var html = '';
        var slotTime = moment.duration(+dateProfile.minTime); // wish there was .clone() for durations
        var slotIterator = moment.duration(0);
        var slotDate; // will be on the view's first day, but we only care about its time
        var isLabeled;
        var axisHtml;
        // Calculate the time for each slot
        while (slotTime < dateProfile.maxTime) {
            slotDate = calendar.msToUtcMoment(dateProfile.renderUnzonedRange.startMs).time(slotTime);
            isLabeled = util_1.isInt(util_1.divideDurationByDuration(slotIterator, this.labelInterval));
            axisHtml =
                '<td class="fc-axis fc-time ' + theme.getClass('widgetContent') + '" ' + view.axisStyleAttr() + '>' +
                    (isLabeled ?
                        '<span>' + // for matchCellWidths
                            util_1.htmlEscape(slotDate.format(this.labelFormat)) +
                            '</span>' :
                        '') +
                    '</td>';
            html +=
                '<tr data-time="' + slotDate.format('HH:mm:ss') + '"' +
                    (isLabeled ? '' : ' class="fc-minor"') +
                    '>' +
                    (!isRTL ? axisHtml : '') +
                    '<td class="' + theme.getClass('widgetContent') + '"/>' +
                    (isRTL ? axisHtml : '') +
                    '</tr>';
            slotTime.add(this.slotDuration);
            slotIterator.add(this.slotDuration);
        }
        return html;
    };
    TimeGrid.prototype.renderColumns = function () {
        var dateProfile = this.dateProfile;
        var theme = this.view.calendar.theme;
        this.dayRanges = this.dayDates.map(function (dayDate) {
            return new UnzonedRange_1.default(dayDate.clone().add(dateProfile.minTime), dayDate.clone().add(dateProfile.maxTime));
        });
        if (this.headContainerEl) {
            this.headContainerEl.html(this.renderHeadHtml());
        }
        this.el.find('> .fc-bg').html('<table class="' + theme.getClass('tableGrid') + '">' +
            this.renderBgTrHtml(0) + // row=0
            '</table>');
        this.colEls = this.el.find('.fc-day, .fc-disabled-day');
        this.colCoordCache = new CoordCache_1.default({
            els: this.colEls,
            isHorizontal: true
        });
        this.renderContentSkeleton();
    };
    TimeGrid.prototype.unrenderColumns = function () {
        this.unrenderContentSkeleton();
    };
    /* Content Skeleton
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders the DOM that the view's content will live in
    TimeGrid.prototype.renderContentSkeleton = function () {
        var cellHtml = '';
        var i;
        var skeletonEl;
        for (i = 0; i < this.colCnt; i++) {
            cellHtml +=
                '<td>' +
                    '<div class="fc-content-col">' +
                    '<div class="fc-event-container fc-helper-container"></div>' +
                    '<div class="fc-event-container"></div>' +
                    '<div class="fc-highlight-container"></div>' +
                    '<div class="fc-bgevent-container"></div>' +
                    '<div class="fc-business-container"></div>' +
                    '</div>' +
                    '</td>';
        }
        skeletonEl = this.contentSkeletonEl = $('<div class="fc-content-skeleton">' +
            '<table>' +
            '<tr>' + cellHtml + '</tr>' +
            '</table>' +
            '</div>');
        this.colContainerEls = skeletonEl.find('.fc-content-col');
        this.helperContainerEls = skeletonEl.find('.fc-helper-container');
        this.fgContainerEls = skeletonEl.find('.fc-event-container:not(.fc-helper-container)');
        this.bgContainerEls = skeletonEl.find('.fc-bgevent-container');
        this.highlightContainerEls = skeletonEl.find('.fc-highlight-container');
        this.businessContainerEls = skeletonEl.find('.fc-business-container');
        this.bookendCells(skeletonEl.find('tr')); // TODO: do this on string level
        this.el.append(skeletonEl);
    };
    TimeGrid.prototype.unrenderContentSkeleton = function () {
        if (this.contentSkeletonEl) {
            this.contentSkeletonEl.remove();
            this.contentSkeletonEl = null;
            this.colContainerEls = null;
            this.helperContainerEls = null;
            this.fgContainerEls = null;
            this.bgContainerEls = null;
            this.highlightContainerEls = null;
            this.businessContainerEls = null;
        }
    };
    // Given a flat array of segments, return an array of sub-arrays, grouped by each segment's col
    TimeGrid.prototype.groupSegsByCol = function (segs) {
        var segsByCol = [];
        var i;
        for (i = 0; i < this.colCnt; i++) {
            segsByCol.push([]);
        }
        for (i = 0; i < segs.length; i++) {
            segsByCol[segs[i].col].push(segs[i]);
        }
        return segsByCol;
    };
    // Given segments grouped by column, insert the segments' elements into a parallel array of container
    // elements, each living within a column.
    TimeGrid.prototype.attachSegsByCol = function (segsByCol, containerEls) {
        var col;
        var segs;
        var i;
        for (col = 0; col < this.colCnt; col++) {
            segs = segsByCol[col];
            for (i = 0; i < segs.length; i++) {
                containerEls.eq(col).append(segs[i].el);
            }
        }
    };
    /* Now Indicator
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.getNowIndicatorUnit = function () {
        return 'minute'; // will refresh on the minute
    };
    TimeGrid.prototype.renderNowIndicator = function (date) {
        // HACK: if date columns not ready for some reason (scheduler)
        if (!this.colContainerEls) {
            return;
        }
        // seg system might be overkill, but it handles scenario where line needs to be rendered
        //  more than once because of columns with the same date (resources columns for example)
        var segs = this.componentFootprintToSegs(new ComponentFootprint_1.default(new UnzonedRange_1.default(date, date.valueOf() + 1), // protect against null range
        false // all-day
        ));
        var top = this.computeDateTop(date, date);
        var nodes = [];
        var i;
        // render lines within the columns
        for (i = 0; i < segs.length; i++) {
            nodes.push($('<div class="fc-now-indicator fc-now-indicator-line"></div>')
                .css('top', top)
                .appendTo(this.colContainerEls.eq(segs[i].col))[0]);
        }
        // render an arrow over the axis
        if (segs.length > 0) {
            nodes.push($('<div class="fc-now-indicator fc-now-indicator-arrow"></div>')
                .css('top', top)
                .appendTo(this.el.find('.fc-content-skeleton'))[0]);
        }
        this.nowIndicatorEls = $(nodes);
    };
    TimeGrid.prototype.unrenderNowIndicator = function () {
        if (this.nowIndicatorEls) {
            this.nowIndicatorEls.remove();
            this.nowIndicatorEls = null;
        }
    };
    /* Coordinates
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.updateSize = function (totalHeight, isAuto, isResize) {
        _super.prototype.updateSize.call(this, totalHeight, isAuto, isResize);
        this.slatCoordCache.build();
        if (isResize) {
            this.updateSegVerticals([].concat(this.eventRenderer.getSegs(), this.businessSegs || []));
        }
    };
    TimeGrid.prototype.getTotalSlatHeight = function () {
        return this.slatContainerEl.outerHeight();
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given date.
    // `ms` can be a millisecond UTC time OR a UTC moment.
    // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
    TimeGrid.prototype.computeDateTop = function (ms, startOfDayDate) {
        return this.computeTimeTop(moment.duration(ms - startOfDayDate.clone().stripTime()));
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
    TimeGrid.prototype.computeTimeTop = function (time) {
        var len = this.slatEls.length;
        var dateProfile = this.dateProfile;
        var slatCoverage = (time - dateProfile.minTime) / this.slotDuration; // floating-point value of # of slots covered
        var slatIndex;
        var slatRemainder;
        // compute a floating-point number for how many slats should be progressed through.
        // from 0 to number of slats (inclusive)
        // constrained because minTime/maxTime might be customized.
        slatCoverage = Math.max(0, slatCoverage);
        slatCoverage = Math.min(len, slatCoverage);
        // an integer index of the furthest whole slat
        // from 0 to number slats (*exclusive*, so len-1)
        slatIndex = Math.floor(slatCoverage);
        slatIndex = Math.min(slatIndex, len - 1);
        // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
        // could be 1.0 if slatCoverage is covering *all* the slots
        slatRemainder = slatCoverage - slatIndex;
        return this.slatCoordCache.getTopPosition(slatIndex) +
            this.slatCoordCache.getHeight(slatIndex) * slatRemainder;
    };
    // Refreshes the CSS top/bottom coordinates for each segment element.
    // Works when called after initial render, after a window resize/zoom for example.
    TimeGrid.prototype.updateSegVerticals = function (segs) {
        this.computeSegVerticals(segs);
        this.assignSegVerticals(segs);
    };
    // For each segment in an array, computes and assigns its top and bottom properties
    TimeGrid.prototype.computeSegVerticals = function (segs) {
        var eventMinHeight = this.opt('agendaEventMinHeight');
        var i;
        var seg;
        var dayDate;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            dayDate = this.dayDates[seg.dayIndex];
            seg.top = this.computeDateTop(seg.startMs, dayDate);
            seg.bottom = Math.max(seg.top + eventMinHeight, this.computeDateTop(seg.endMs, dayDate));
        }
    };
    // Given segments that already have their top/bottom properties computed, applies those values to
    // the segments' elements.
    TimeGrid.prototype.assignSegVerticals = function (segs) {
        var i;
        var seg;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            seg.el.css(this.generateSegVerticalCss(seg));
        }
    };
    // Generates an object with CSS properties for the top/bottom coordinates of a segment element
    TimeGrid.prototype.generateSegVerticalCss = function (seg) {
        return {
            top: seg.top,
            bottom: -seg.bottom // flipped because needs to be space beyond bottom edge of event container
        };
    };
    /* Hit System
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.prepareHits = function () {
        this.colCoordCache.build();
        this.slatCoordCache.build();
    };
    TimeGrid.prototype.releaseHits = function () {
        this.colCoordCache.clear();
        // NOTE: don't clear slatCoordCache because we rely on it for computeTimeTop
    };
    TimeGrid.prototype.queryHit = function (leftOffset, topOffset) {
        var snapsPerSlot = this.snapsPerSlot;
        var colCoordCache = this.colCoordCache;
        var slatCoordCache = this.slatCoordCache;
        if (colCoordCache.isLeftInBounds(leftOffset) && slatCoordCache.isTopInBounds(topOffset)) {
            var colIndex = colCoordCache.getHorizontalIndex(leftOffset);
            var slatIndex = slatCoordCache.getVerticalIndex(topOffset);
            if (colIndex != null && slatIndex != null) {
                var slatTop = slatCoordCache.getTopOffset(slatIndex);
                var slatHeight = slatCoordCache.getHeight(slatIndex);
                var partial = (topOffset - slatTop) / slatHeight; // floating point number between 0 and 1
                var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
                var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
                var snapTop = slatTop + (localSnapIndex / snapsPerSlot) * slatHeight;
                var snapBottom = slatTop + ((localSnapIndex + 1) / snapsPerSlot) * slatHeight;
                return {
                    col: colIndex,
                    snap: snapIndex,
                    component: this,
                    left: colCoordCache.getLeftOffset(colIndex),
                    right: colCoordCache.getRightOffset(colIndex),
                    top: snapTop,
                    bottom: snapBottom
                };
            }
        }
    };
    TimeGrid.prototype.getHitFootprint = function (hit) {
        var start = this.getCellDate(0, hit.col); // row=0
        var time = this.computeSnapTime(hit.snap); // pass in the snap-index
        var end;
        start.time(time);
        end = start.clone().add(this.snapDuration);
        return new ComponentFootprint_1.default(new UnzonedRange_1.default(start, end), false // all-day?
        );
    };
    // Given a row number of the grid, representing a "snap", returns a time (Duration) from its start-of-day
    TimeGrid.prototype.computeSnapTime = function (snapIndex) {
        return moment.duration(this.dateProfile.minTime + this.snapDuration * snapIndex);
    };
    TimeGrid.prototype.getHitEl = function (hit) {
        return this.colEls.eq(hit.col);
    };
    /* Event Drag Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of an event being dragged over the specified date(s).
    // A returned value of `true` signals that a mock "helper" event has been rendered.
    TimeGrid.prototype.renderDrag = function (eventFootprints, seg, isTouch) {
        var i;
        if (seg) {
            if (eventFootprints.length) {
                this.helperRenderer.renderEventDraggingFootprints(eventFootprints, seg, isTouch);
                // signal that a helper has been rendered
                return true;
            }
        }
        else {
            for (i = 0; i < eventFootprints.length; i++) {
                this.renderHighlight(eventFootprints[i].componentFootprint);
            }
        }
    };
    // Unrenders any visual indication of an event being dragged
    TimeGrid.prototype.unrenderDrag = function () {
        this.unrenderHighlight();
        this.helperRenderer.unrender();
    };
    /* Event Resize Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of an event being resized
    TimeGrid.prototype.renderEventResize = function (eventFootprints, seg, isTouch) {
        this.helperRenderer.renderEventResizingFootprints(eventFootprints, seg, isTouch);
    };
    // Unrenders any visual indication of an event being resized
    TimeGrid.prototype.unrenderEventResize = function () {
        this.helperRenderer.unrender();
    };
    /* Selection
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of a selection. Overrides the default, which was to simply render a highlight.
    TimeGrid.prototype.renderSelectionFootprint = function (componentFootprint) {
        if (this.opt('selectHelper')) {
            this.helperRenderer.renderComponentFootprint(componentFootprint);
        }
        else {
            this.renderHighlight(componentFootprint);
        }
    };
    // Unrenders any visual indication of a selection
    TimeGrid.prototype.unrenderSelection = function () {
        this.helperRenderer.unrender();
        this.unrenderHighlight();
    };
    return TimeGrid;
}(InteractiveDateComponent_1.default));
exports.default = TimeGrid;
TimeGrid.prototype.eventRendererClass = TimeGridEventRenderer_1.default;
TimeGrid.prototype.businessHourRendererClass = BusinessHourRenderer_1.default;
TimeGrid.prototype.helperRendererClass = TimeGridHelperRenderer_1.default;
TimeGrid.prototype.fillRendererClass = TimeGridFillRenderer_1.default;
StandardInteractionsMixin_1.default.mixInto(TimeGrid);
DayTableMixin_1.default.mixInto(TimeGrid);


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var UnzonedRange_1 = __webpack_require__(5);
var DateProfileGenerator_1 = __webpack_require__(221);
var BasicViewDateProfileGenerator = /** @class */ (function (_super) {
    tslib_1.__extends(BasicViewDateProfileGenerator, _super);
    function BasicViewDateProfileGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Computes the date range that will be rendered.
    BasicViewDateProfileGenerator.prototype.buildRenderRange = function (currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
        var renderUnzonedRange = _super.prototype.buildRenderRange.call(this, currentUnzonedRange, currentRangeUnit, isRangeAllDay); // an UnzonedRange
        var start = this.msToUtcMoment(renderUnzonedRange.startMs, isRangeAllDay);
        var end = this.msToUtcMoment(renderUnzonedRange.endMs, isRangeAllDay);
        // year and month views should be aligned with weeks. this is already done for week
        if (/^(year|month)$/.test(currentRangeUnit)) {
            start.startOf('week');
            // make end-of-week if not already
            if (end.weekday()) {
                end.add(1, 'week').startOf('week'); // exclusively move backwards
            }
        }
        return new UnzonedRange_1.default(start, end);
    };
    return BasicViewDateProfileGenerator;
}(DateProfileGenerator_1.default));
exports.default = BasicViewDateProfileGenerator;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var BasicView_1 = __webpack_require__(62);
var MonthViewDateProfileGenerator_1 = __webpack_require__(253);
/* A month view with day cells running in rows (one-per-week) and columns
----------------------------------------------------------------------------------------------------------------------*/
var MonthView = /** @class */ (function (_super) {
    tslib_1.__extends(MonthView, _super);
    function MonthView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Overrides the default BasicView behavior to have special multi-week auto-height logic
    MonthView.prototype.setGridHeight = function (height, isAuto) {
        // if auto, make the height of each row the height that it would be if there were 6 weeks
        if (isAuto) {
            height *= this.dayGrid.rowCnt / 6;
        }
        util_1.distributeHeight(this.dayGrid.rowEls, height, !isAuto); // if auto, don't compensate for height-hogging rows
    };
    MonthView.prototype.isDateInOtherMonth = function (date, dateProfile) {
        return date.month() !== moment.utc(dateProfile.currentUnzonedRange.startMs).month(); // TODO: optimize
    };
    return MonthView;
}(BasicView_1.default));
exports.default = MonthView;
MonthView.prototype.dateProfileGeneratorClass = MonthViewDateProfileGenerator_1.default;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var UnzonedRange_1 = __webpack_require__(5);
var View_1 = __webpack_require__(41);
var Scroller_1 = __webpack_require__(39);
var ListEventRenderer_1 = __webpack_require__(254);
var ListEventPointing_1 = __webpack_require__(255);
/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
var ListView = /** @class */ (function (_super) {
    tslib_1.__extends(ListView, _super);
    function ListView(calendar, viewSpec) {
        var _this = _super.call(this, calendar, viewSpec) || this;
        _this.segSelector = '.fc-list-item'; // which elements accept event actions
        _this.scroller = new Scroller_1.default({
            overflowX: 'hidden',
            overflowY: 'auto'
        });
        return _this;
    }
    ListView.prototype.renderSkeleton = function () {
        this.el.addClass('fc-list-view ' +
            this.calendar.theme.getClass('listView'));
        this.scroller.render();
        this.scroller.el.appendTo(this.el);
        this.contentEl = this.scroller.scrollEl; // shortcut
    };
    ListView.prototype.unrenderSkeleton = function () {
        this.scroller.destroy(); // will remove the Grid too
    };
    ListView.prototype.updateSize = function (totalHeight, isAuto, isResize) {
        _super.prototype.updateSize.call(this, totalHeight, isAuto, isResize);
        this.scroller.clear(); // sets height to 'auto' and clears overflow
        if (!isAuto) {
            this.scroller.setHeight(this.computeScrollerHeight(totalHeight));
        }
    };
    ListView.prototype.computeScrollerHeight = function (totalHeight) {
        return totalHeight -
            util_1.subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
    };
    ListView.prototype.renderDates = function (dateProfile) {
        var calendar = this.calendar;
        var dayStart = calendar.msToUtcMoment(dateProfile.renderUnzonedRange.startMs, true);
        var viewEnd = calendar.msToUtcMoment(dateProfile.renderUnzonedRange.endMs, true);
        var dayDates = [];
        var dayRanges = [];
        while (dayStart < viewEnd) {
            dayDates.push(dayStart.clone());
            dayRanges.push(new UnzonedRange_1.default(dayStart, dayStart.clone().add(1, 'day')));
            dayStart.add(1, 'day');
        }
        this.dayDates = dayDates;
        this.dayRanges = dayRanges;
        // all real rendering happens in EventRenderer
    };
    // slices by day
    ListView.prototype.componentFootprintToSegs = function (footprint) {
        var dayRanges = this.dayRanges;
        var dayIndex;
        var segRange;
        var seg;
        var segs = [];
        for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex++) {
            segRange = footprint.unzonedRange.intersect(dayRanges[dayIndex]);
            if (segRange) {
                seg = {
                    startMs: segRange.startMs,
                    endMs: segRange.endMs,
                    isStart: segRange.isStart,
                    isEnd: segRange.isEnd,
                    dayIndex: dayIndex
                };
                segs.push(seg);
                // detect when footprint won't go fully into the next day,
                // and mutate the latest seg to the be the end.
                if (!seg.isEnd && !footprint.isAllDay &&
                    dayIndex + 1 < dayRanges.length &&
                    footprint.unzonedRange.endMs < dayRanges[dayIndex + 1].startMs + this.nextDayThreshold) {
                    seg.endMs = footprint.unzonedRange.endMs;
                    seg.isEnd = true;
                    break;
                }
            }
        }
        return segs;
    };
    ListView.prototype.renderEmptyMessage = function () {
        this.contentEl.html('<div class="fc-list-empty-wrap2">' + // TODO: try less wraps
            '<div class="fc-list-empty-wrap1">' +
            '<div class="fc-list-empty">' +
            util_1.htmlEscape(this.opt('noEventsMessage')) +
            '</div>' +
            '</div>' +
            '</div>');
    };
    // render the event segments in the view
    ListView.prototype.renderSegList = function (allSegs) {
        var segsByDay = this.groupSegsByDay(allSegs); // sparse array
        var dayIndex;
        var daySegs;
        var i;
        var tableEl = $('<table class="fc-list-table ' + this.calendar.theme.getClass('tableList') + '"><tbody/></table>');
        var tbodyEl = tableEl.find('tbody');
        for (dayIndex = 0; dayIndex < segsByDay.length; dayIndex++) {
            daySegs = segsByDay[dayIndex];
            if (daySegs) {
                // append a day header
                tbodyEl.append(this.dayHeaderHtml(this.dayDates[dayIndex]));
                this.eventRenderer.sortEventSegs(daySegs);
                for (i = 0; i < daySegs.length; i++) {
                    tbodyEl.append(daySegs[i].el); // append event row
                }
            }
        }
        this.contentEl.empty().append(tableEl);
    };
    // Returns a sparse array of arrays, segs grouped by their dayIndex
    ListView.prototype.groupSegsByDay = function (segs) {
        var segsByDay = []; // sparse array
        var i;
        var seg;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
                .push(seg);
        }
        return segsByDay;
    };
    // generates the HTML for the day headers that live amongst the event rows
    ListView.prototype.dayHeaderHtml = function (dayDate) {
        var mainFormat = this.opt('listDayFormat');
        var altFormat = this.opt('listDayAltFormat');
        return '<tr class="fc-list-heading" data-date="' + dayDate.format('YYYY-MM-DD') + '">' +
            '<td class="' + (this.calendar.theme.getClass('tableListHeading') ||
            this.calendar.theme.getClass('widgetHeader')) + '" colspan="3">' +
            (mainFormat ?
                this.buildGotoAnchorHtml(dayDate, { 'class': 'fc-list-heading-main' }, util_1.htmlEscape(dayDate.format(mainFormat)) // inner HTML
                ) :
                '') +
            (altFormat ?
                this.buildGotoAnchorHtml(dayDate, { 'class': 'fc-list-heading-alt' }, util_1.htmlEscape(dayDate.format(altFormat)) // inner HTML
                ) :
                '') +
            '</td>' +
            '</tr>';
    };
    return ListView;
}(View_1.default));
exports.default = ListView;
ListView.prototype.eventRendererClass = ListEventRenderer_1.default;
ListView.prototype.eventPointingClass = ListEventPointing_1.default;


/***/ }),
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(3);
var exportHooks = __webpack_require__(16);
var util_1 = __webpack_require__(4);
var Calendar_1 = __webpack_require__(220);
// for intentional side-effects
__webpack_require__(10);
__webpack_require__(47);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(262);
__webpack_require__(263);
$.fullCalendar = exportHooks;
$.fn.fullCalendar = function (options) {
    var args = Array.prototype.slice.call(arguments, 1); // for a possible method call
    var res = this; // what this function will return (this jQuery object by default)
    this.each(function (i, _element) {
        var element = $(_element);
        var calendar = element.data('fullCalendar'); // get the existing calendar object (if any)
        var singleRes; // the returned value of this single method call
        // a method call
        if (typeof options === 'string') {
            if (options === 'getCalendar') {
                if (!i) {
                    res = calendar;
                }
            }
            else if (options === 'destroy') {
                if (calendar) {
                    calendar.destroy();
                    element.removeData('fullCalendar');
                }
            }
            else if (!calendar) {
                util_1.warn('Attempting to call a FullCalendar method on an element with no calendar.');
            }
            else if ($.isFunction(calendar[options])) {
                singleRes = calendar[options].apply(calendar, args);
                if (!i) {
                    res = singleRes; // record the first method call result
                }
                if (options === 'destroy') {
                    element.removeData('fullCalendar');
                }
            }
            else {
                util_1.warn("'" + options + "' is an unknown FullCalendar method.");
            }
        }
        else if (!calendar) {
            calendar = new Calendar_1.default(element, options);
            element.data('fullCalendar', calendar);
            calendar.render();
        }
    });
    return res;
};
module.exports = exportHooks;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Model_1 = __webpack_require__(48);
var Component = /** @class */ (function (_super) {
    tslib_1.__extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component.prototype.setElement = function (el) {
        this.el = el;
        this.bindGlobalHandlers();
        this.renderSkeleton();
        this.set('isInDom', true);
    };
    Component.prototype.removeElement = function () {
        this.unset('isInDom');
        this.unrenderSkeleton();
        this.unbindGlobalHandlers();
        this.el.remove();
        // NOTE: don't null-out this.el in case the View was destroyed within an API callback.
        // We don't null-out the View's other jQuery element references upon destroy,
        //  so we shouldn't kill this.el either.
    };
    Component.prototype.bindGlobalHandlers = function () {
        // subclasses can override
    };
    Component.prototype.unbindGlobalHandlers = function () {
        // subclasses can override
    };
    /*
    NOTE: Can't have a `render` method. Read the deprecation notice in View::executeDateRender
    */
    // Renders the basic structure of the view before any content is rendered
    Component.prototype.renderSkeleton = function () {
        // subclasses should implement
    };
    // Unrenders the basic structure of the view
    Component.prototype.unrenderSkeleton = function () {
        // subclasses should implement
    };
    return Component;
}(Model_1.default));
exports.default = Component;


/***/ }),
/* 238 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var Iterator = /** @class */ (function () {
    function Iterator(items) {
        this.items = items || [];
    }
    /* Calls a method on every item passing the arguments through */
    Iterator.prototype.proxyCall = function (methodName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var results = [];
        this.items.forEach(function (item) {
            results.push(item[methodName].apply(item, args));
        });
        return results;
    };
    return Iterator;
}());
exports.default = Iterator;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
/* Toolbar with buttons and title
----------------------------------------------------------------------------------------------------------------------*/
var Toolbar = /** @class */ (function () {
    function Toolbar(calendar, toolbarOptions) {
        this.el = null; // mirrors local `el`
        this.viewsWithButtons = [];
        this.calendar = calendar;
        this.toolbarOptions = toolbarOptions;
    }
    // method to update toolbar-specific options, not calendar-wide options
    Toolbar.prototype.setToolbarOptions = function (newToolbarOptions) {
        this.toolbarOptions = newToolbarOptions;
    };
    // can be called repeatedly and will rerender
    Toolbar.prototype.render = function () {
        var sections = this.toolbarOptions.layout;
        var el = this.el;
        if (sections) {
            if (!el) {
                el = this.el = $("<div class='fc-toolbar " + this.toolbarOptions.extraClasses + "'/>");
            }
            else {
                el.empty();
            }
            el.append(this.renderSection('left'))
                .append(this.renderSection('right'))
                .append(this.renderSection('center'))
                .append('<div class="fc-clear"/>');
        }
        else {
            this.removeElement();
        }
    };
    Toolbar.prototype.removeElement = function () {
        if (this.el) {
            this.el.remove();
            this.el = null;
        }
    };
    Toolbar.prototype.renderSection = function (position) {
        var _this = this;
        var calendar = this.calendar;
        var theme = calendar.theme;
        var optionsManager = calendar.optionsManager;
        var viewSpecManager = calendar.viewSpecManager;
        var sectionEl = $('<div class="fc-' + position + '"/>');
        var buttonStr = this.toolbarOptions.layout[position];
        var calendarCustomButtons = optionsManager.get('customButtons') || {};
        var calendarButtonTextOverrides = optionsManager.overrides.buttonText || {};
        var calendarButtonText = optionsManager.get('buttonText') || {};
        if (buttonStr) {
            $.each(buttonStr.split(' '), function (i, buttonGroupStr) {
                var groupChildren = $();
                var isOnlyButtons = true;
                var groupEl;
                $.each(buttonGroupStr.split(','), function (j, buttonName) {
                    var customButtonProps;
                    var viewSpec;
                    var buttonClick;
                    var buttonIcon; // only one of these will be set
                    var buttonText; // "
                    var buttonInnerHtml;
                    var buttonClasses;
                    var buttonEl;
                    var buttonAriaAttr;
                    if (buttonName === 'title') {
                        groupChildren = groupChildren.add($('<h2>&nbsp;</h2>')); // we always want it to take up height
                        isOnlyButtons = false;
                    }
                    else {
                        if ((customButtonProps = calendarCustomButtons[buttonName])) {
                            buttonClick = function (ev) {
                                if (customButtonProps.click) {
                                    customButtonProps.click.call(buttonEl[0], ev);
                                }
                            };
                            (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
                                (buttonIcon = theme.getIconClass(buttonName)) ||
                                (buttonText = customButtonProps.text);
                        }
                        else if ((viewSpec = viewSpecManager.getViewSpec(buttonName))) {
                            _this.viewsWithButtons.push(buttonName);
                            buttonClick = function () {
                                calendar.changeView(buttonName);
                            };
                            (buttonText = viewSpec.buttonTextOverride) ||
                                (buttonIcon = theme.getIconClass(buttonName)) ||
                                (buttonText = viewSpec.buttonTextDefault);
                        }
                        else if (calendar[buttonName]) {
                            buttonClick = function () {
                                calendar[buttonName]();
                            };
                            (buttonText = calendarButtonTextOverrides[buttonName]) ||
                                (buttonIcon = theme.getIconClass(buttonName)) ||
                                (buttonText = calendarButtonText[buttonName]);
                            //            ^ everything else is considered default
                        }
                        if (buttonClick) {
                            buttonClasses = [
                                'fc-' + buttonName + '-button',
                                theme.getClass('button'),
                                theme.getClass('stateDefault')
                            ];
                            if (buttonText) {
                                buttonInnerHtml = util_1.htmlEscape(buttonText);
                                buttonAriaAttr = '';
                            }
                            else if (buttonIcon) {
                                buttonInnerHtml = "<span class='" + buttonIcon + "'></span>";
                                buttonAriaAttr = ' aria-label="' + buttonName + '"';
                            }
                            buttonEl = $(// type="button" so that it doesn't submit a form
                            '<button type="button" class="' + buttonClasses.join(' ') + '"' +
                                buttonAriaAttr +
                                '>' + buttonInnerHtml + '</button>')
                                .click(function (ev) {
                                // don't process clicks for disabled buttons
                                if (!buttonEl.hasClass(theme.getClass('stateDisabled'))) {
                                    buttonClick(ev);
                                    // after the click action, if the button becomes the "active" tab, or disabled,
                                    // it should never have a hover class, so remove it now.
                                    if (buttonEl.hasClass(theme.getClass('stateActive')) ||
                                        buttonEl.hasClass(theme.getClass('stateDisabled'))) {
                                        buttonEl.removeClass(theme.getClass('stateHover'));
                                    }
                                }
                            })
                                .mousedown(function () {
                                // the *down* effect (mouse pressed in).
                                // only on buttons that are not the "active" tab, or disabled
                                buttonEl
                                    .not('.' + theme.getClass('stateActive'))
                                    .not('.' + theme.getClass('stateDisabled'))
                                    .addClass(theme.getClass('stateDown'));
                            })
                                .mouseup(function () {
                                // undo the *down* effect
                                buttonEl.removeClass(theme.getClass('stateDown'));
                            })
                                .hover(function () {
                                // the *hover* effect.
                                // only on buttons that are not the "active" tab, or disabled
                                buttonEl
                                    .not('.' + theme.getClass('stateActive'))
                                    .not('.' + theme.getClass('stateDisabled'))
                                    .addClass(theme.getClass('stateHover'));
                            }, function () {
                                // undo the *hover* effect
                                buttonEl
                                    .removeClass(theme.getClass('stateHover'))
                                    .removeClass(theme.getClass('stateDown')); // if mouseleave happens before mouseup
                            });
                            groupChildren = groupChildren.add(buttonEl);
                        }
                    }
                });
                if (isOnlyButtons) {
                    groupChildren
                        .first().addClass(theme.getClass('cornerLeft')).end()
                        .last().addClass(theme.getClass('cornerRight')).end();
                }
                if (groupChildren.length > 1) {
                    groupEl = $('<div/>');
                    if (isOnlyButtons) {
                        groupEl.addClass(theme.getClass('buttonGroup'));
                    }
                    groupEl.append(groupChildren);
                    sectionEl.append(groupEl);
                }
                else {
                    sectionEl.append(groupChildren); // 1 or 0 children
                }
            });
        }
        return sectionEl;
    };
    Toolbar.prototype.updateTitle = function (text) {
        if (this.el) {
            this.el.find('h2').text(text);
        }
    };
    Toolbar.prototype.activateButton = function (buttonName) {
        if (this.el) {
            this.el.find('.fc-' + buttonName + '-button')
                .addClass(this.calendar.theme.getClass('stateActive'));
        }
    };
    Toolbar.prototype.deactivateButton = function (buttonName) {
        if (this.el) {
            this.el.find('.fc-' + buttonName + '-button')
                .removeClass(this.calendar.theme.getClass('stateActive'));
        }
    };
    Toolbar.prototype.disableButton = function (buttonName) {
        if (this.el) {
            this.el.find('.fc-' + buttonName + '-button')
                .prop('disabled', true)
                .addClass(this.calendar.theme.getClass('stateDisabled'));
        }
    };
    Toolbar.prototype.enableButton = function (buttonName) {
        if (this.el) {
            this.el.find('.fc-' + buttonName + '-button')
                .prop('disabled', false)
                .removeClass(this.calendar.theme.getClass('stateDisabled'));
        }
    };
    Toolbar.prototype.getViewsWithButtons = function () {
        return this.viewsWithButtons;
    };
    return Toolbar;
}());
exports.default = Toolbar;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var options_1 = __webpack_require__(32);
var locale_1 = __webpack_require__(31);
var Model_1 = __webpack_require__(48);
var OptionsManager = /** @class */ (function (_super) {
    tslib_1.__extends(OptionsManager, _super);
    function OptionsManager(_calendar, overrides) {
        var _this = _super.call(this) || this;
        _this._calendar = _calendar;
        _this.overrides = $.extend({}, overrides); // make a copy
        _this.dynamicOverrides = {};
        _this.compute();
        return _this;
    }
    OptionsManager.prototype.add = function (newOptionHash) {
        var optionCnt = 0;
        var optionName;
        this.recordOverrides(newOptionHash); // will trigger this model's watchers
        for (optionName in newOptionHash) {
            optionCnt++;
        }
        // special-case handling of single option change.
        // if only one option change, `optionName` will be its name.
        if (optionCnt === 1) {
            if (optionName === 'height' || optionName === 'contentHeight' || optionName === 'aspectRatio') {
                this._calendar.updateViewSize(true); // isResize=true
                return;
            }
            else if (optionName === 'defaultDate') {
                return; // can't change date this way. use gotoDate instead
            }
            else if (optionName === 'businessHours') {
                return; // this model already reacts to this
            }
            else if (/^(event|select)(Overlap|Constraint|Allow)$/.test(optionName)) {
                return; // doesn't affect rendering. only interactions.
            }
            else if (optionName === 'timezone') {
                this._calendar.view.flash('initialEvents');
                return;
            }
        }
        // catch-all. rerender the header and footer and rebuild/rerender the current view
        this._calendar.renderHeader();
        this._calendar.renderFooter();
        // even non-current views will be affected by this option change. do before rerender
        // TODO: detangle
        this._calendar.viewsByType = {};
        this._calendar.reinitView();
    };
    // Computes the flattened options hash for the calendar and assigns to `this.options`.
    // Assumes this.overrides and this.dynamicOverrides have already been initialized.
    OptionsManager.prototype.compute = function () {
        var locale;
        var localeDefaults;
        var isRTL;
        var dirDefaults;
        var rawOptions;
        locale = util_1.firstDefined(// explicit locale option given?
        this.dynamicOverrides.locale, this.overrides.locale);
        localeDefaults = locale_1.localeOptionHash[locale];
        if (!localeDefaults) {
            locale = options_1.globalDefaults.locale;
            localeDefaults = locale_1.localeOptionHash[locale] || {};
        }
        isRTL = util_1.firstDefined(// based on options computed so far, is direction RTL?
        this.dynamicOverrides.isRTL, this.overrides.isRTL, localeDefaults.isRTL, options_1.globalDefaults.isRTL);
        dirDefaults = isRTL ? options_1.rtlDefaults : {};
        this.dirDefaults = dirDefaults;
        this.localeDefaults = localeDefaults;
        rawOptions = options_1.mergeOptions([
            options_1.globalDefaults,
            dirDefaults,
            localeDefaults,
            this.overrides,
            this.dynamicOverrides
        ]);
        locale_1.populateInstanceComputableOptions(rawOptions); // fill in gaps with computed options
        this.reset(rawOptions);
    };
    // stores the new options internally, but does not rerender anything.
    OptionsManager.prototype.recordOverrides = function (newOptionHash) {
        var optionName;
        for (optionName in newOptionHash) {
            this.dynamicOverrides[optionName] = newOptionHash[optionName];
        }
        this._calendar.viewSpecManager.clearCache(); // the dynamic override invalidates the options in this cache, so just clear it
        this.compute(); // this.options needs to be recomputed after the dynamic override
    };
    return OptionsManager;
}(Model_1.default));
exports.default = OptionsManager;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(0);
var $ = __webpack_require__(3);
var ViewRegistry_1 = __webpack_require__(22);
var util_1 = __webpack_require__(4);
var options_1 = __webpack_require__(32);
var locale_1 = __webpack_require__(31);
var ViewSpecManager = /** @class */ (function () {
    function ViewSpecManager(optionsManager, _calendar) {
        this.optionsManager = optionsManager;
        this._calendar = _calendar;
        this.clearCache();
    }
    ViewSpecManager.prototype.clearCache = function () {
        this.viewSpecCache = {};
    };
    // Gets information about how to create a view. Will use a cache.
    ViewSpecManager.prototype.getViewSpec = function (viewType) {
        var cache = this.viewSpecCache;
        return cache[viewType] || (cache[viewType] = this.buildViewSpec(viewType));
    };
    // Given a duration singular unit, like "week" or "day", finds a matching view spec.
    // Preference is given to views that have corresponding buttons.
    ViewSpecManager.prototype.getUnitViewSpec = function (unit) {
        var viewTypes;
        var i;
        var spec;
        if ($.inArray(unit, util_1.unitsDesc) !== -1) {
            // put views that have buttons first. there will be duplicates, but oh well
            viewTypes = this._calendar.header.getViewsWithButtons(); // TODO: include footer as well?
            $.each(ViewRegistry_1.viewHash, function (viewType) {
                viewTypes.push(viewType);
            });
            for (i = 0; i < viewTypes.length; i++) {
                spec = this.getViewSpec(viewTypes[i]);
                if (spec) {
                    if (spec.singleUnit === unit) {
                        return spec;
                    }
                }
            }
        }
    };
    // Builds an object with information on how to create a given view
    ViewSpecManager.prototype.buildViewSpec = function (requestedViewType) {
        var viewOverrides = this.optionsManager.overrides.views || {};
        var specChain = []; // for the view. lowest to highest priority
        var defaultsChain = []; // for the view. lowest to highest priority
        var overridesChain = []; // for the view. lowest to highest priority
        var viewType = requestedViewType;
        var spec; // for the view
        var overrides; // for the view
        var durationInput;
        var duration;
        var unit;
        // iterate from the specific view definition to a more general one until we hit an actual View class
        while (viewType) {
            spec = ViewRegistry_1.viewHash[viewType];
            overrides = viewOverrides[viewType];
            viewType = null; // clear. might repopulate for another iteration
            if (typeof spec === 'function') {
                spec = { 'class': spec };
            }
            if (spec) {
                specChain.unshift(spec);
                defaultsChain.unshift(spec.defaults || {});
                durationInput = durationInput || spec.duration;
                viewType = viewType || spec.type;
            }
            if (overrides) {
                overridesChain.unshift(overrides); // view-specific option hashes have options at zero-level
                durationInput = durationInput || overrides.duration;
                viewType = viewType || overrides.type;
            }
        }
        spec = util_1.mergeProps(specChain);
        spec.type = requestedViewType;
        if (!spec['class']) {
            return false;
        }
        // fall back to top-level `duration` option
        durationInput = durationInput ||
            this.optionsManager.dynamicOverrides.duration ||
            this.optionsManager.overrides.duration;
        if (durationInput) {
            duration = moment.duration(durationInput);
            if (duration.valueOf()) {
                unit = util_1.computeDurationGreatestUnit(duration, durationInput);
                spec.duration = duration;
                spec.durationUnit = unit;
                // view is a single-unit duration, like "week" or "day"
                // incorporate options for this. lowest priority
                if (duration.as(unit) === 1) {
                    spec.singleUnit = unit;
                    overridesChain.unshift(viewOverrides[unit] || {});
                }
            }
        }
        spec.defaults = options_1.mergeOptions(defaultsChain);
        spec.overrides = options_1.mergeOptions(overridesChain);
        this.buildViewSpecOptions(spec);
        this.buildViewSpecButtonText(spec, requestedViewType);
        return spec;
    };
    // Builds and assigns a view spec's options object from its already-assigned defaults and overrides
    ViewSpecManager.prototype.buildViewSpecOptions = function (spec) {
        var optionsManager = this.optionsManager;
        spec.options = options_1.mergeOptions([
            options_1.globalDefaults,
            spec.defaults,
            optionsManager.dirDefaults,
            optionsManager.localeDefaults,
            optionsManager.overrides,
            spec.overrides,
            optionsManager.dynamicOverrides // dynamically set via setter. highest precedence
        ]);
        locale_1.populateInstanceComputableOptions(spec.options);
    };
    // Computes and assigns a view spec's buttonText-related options
    ViewSpecManager.prototype.buildViewSpecButtonText = function (spec, requestedViewType) {
        var optionsManager = this.optionsManager;
        // given an options object with a possible `buttonText` hash, lookup the buttonText for the
        // requested view, falling back to a generic unit entry like "week" or "day"
        function queryButtonText(options) {
            var buttonText = options.buttonText || {};
            return buttonText[requestedViewType] ||
                // view can decide to look up a certain key
                (spec.buttonTextKey ? buttonText[spec.buttonTextKey] : null) ||
                // a key like "month"
                (spec.singleUnit ? buttonText[spec.singleUnit] : null);
        }
        // highest to lowest priority
        spec.buttonTextOverride =
            queryButtonText(optionsManager.dynamicOverrides) ||
                queryButtonText(optionsManager.overrides) || // constructor-specified buttonText lookup hash takes precedence
                spec.overrides.buttonText; // `buttonText` for view-specific options is a string
        // highest to lowest priority. mirrors buildViewSpecOptions
        spec.buttonTextDefault =
            queryButtonText(optionsManager.localeDefaults) ||
                queryButtonText(optionsManager.dirDefaults) ||
                spec.defaults.buttonText || // a single string. from ViewSubclass.defaults
                queryButtonText(options_1.globalDefaults) ||
                (spec.duration ? this._calendar.humanizeDuration(spec.duration) : null) || // like "3 days"
                requestedViewType; // fall back to given view name
    };
    return ViewSpecManager;
}());
exports.default = ViewSpecManager;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var EventPeriod_1 = __webpack_require__(243);
var ArrayEventSource_1 = __webpack_require__(52);
var EventSource_1 = __webpack_require__(6);
var EventSourceParser_1 = __webpack_require__(38);
var SingleEventDef_1 = __webpack_require__(13);
var EventInstanceGroup_1 = __webpack_require__(18);
var EmitterMixin_1 = __webpack_require__(11);
var ListenerMixin_1 = __webpack_require__(7);
var EventManager = /** @class */ (function () {
    function EventManager(calendar) {
        this.calendar = calendar;
        this.stickySource = new ArrayEventSource_1.default(calendar);
        this.otherSources = [];
    }
    EventManager.prototype.requestEvents = function (start, end, timezone, force) {
        if (force ||
            !this.currentPeriod ||
            !this.currentPeriod.isWithinRange(start, end) ||
            timezone !== this.currentPeriod.timezone) {
            this.setPeriod(// will change this.currentPeriod
            new EventPeriod_1.default(start, end, timezone));
        }
        return this.currentPeriod.whenReleased();
    };
    // Source Adding/Removing
    // -----------------------------------------------------------------------------------------------------------------
    EventManager.prototype.addSource = function (eventSource) {
        this.otherSources.push(eventSource);
        if (this.currentPeriod) {
            this.currentPeriod.requestSource(eventSource); // might release
        }
    };
    EventManager.prototype.removeSource = function (doomedSource) {
        util_1.removeExact(this.otherSources, doomedSource);
        if (this.currentPeriod) {
            this.currentPeriod.purgeSource(doomedSource); // might release
        }
    };
    EventManager.prototype.removeAllSources = function () {
        this.otherSources = [];
        if (this.currentPeriod) {
            this.currentPeriod.purgeAllSources(); // might release
        }
    };
    // Source Refetching
    // -----------------------------------------------------------------------------------------------------------------
    EventManager.prototype.refetchSource = function (eventSource) {
        var currentPeriod = this.currentPeriod;
        if (currentPeriod) {
            currentPeriod.freeze();
            currentPeriod.purgeSource(eventSource);
            currentPeriod.requestSource(eventSource);
            currentPeriod.thaw();
        }
    };
    EventManager.prototype.refetchAllSources = function () {
        var currentPeriod = this.currentPeriod;
        if (currentPeriod) {
            currentPeriod.freeze();
            currentPeriod.purgeAllSources();
            currentPeriod.requestSources(this.getSources());
            currentPeriod.thaw();
        }
    };
    // Source Querying
    // -----------------------------------------------------------------------------------------------------------------
    EventManager.prototype.getSources = function () {
        return [this.stickySource].concat(this.otherSources);
    };
    // like querySources, but accepts multple match criteria (like multiple IDs)
    EventManager.prototype.multiQuerySources = function (matchInputs) {
        // coerce into an array
        if (!matchInputs) {
            matchInputs = [];
        }
        else if (!$.isArray(matchInputs)) {
            matchInputs = [matchInputs];
        }
        var matchingSources = [];
        var i;
        // resolve raw inputs to real event source objects
        for (i = 0; i < matchInputs.length; i++) {
            matchingSources.push.apply(// append
            matchingSources, this.querySources(matchInputs[i]));
        }
        return matchingSources;
    };
    // matchInput can either by a real event source object, an ID, or the function/URL for the source.
    // returns an array of matching source objects.
    EventManager.prototype.querySources = function (matchInput) {
        var sources = this.otherSources;
        var i;
        var source;
        // given a proper event source object
        for (i = 0; i < sources.length; i++) {
            source = sources[i];
            if (source === matchInput) {
                return [source];
            }
        }
        // an ID match
        source = this.getSourceById(EventSource_1.default.normalizeId(matchInput));
        if (source) {
            return [source];
        }
        // parse as an event source
        matchInput = EventSourceParser_1.default.parse(matchInput, this.calendar);
        if (matchInput) {
            return $.grep(sources, function (source) {
                return isSourcesEquivalent(matchInput, source);
            });
        }
    };
    /*
    ID assumed to already be normalized
    */
    EventManager.prototype.getSourceById = function (id) {
        return $.grep(this.otherSources, function (source) {
            return source.id && source.id === id;
        })[0];
    };
    // Event-Period
    // -----------------------------------------------------------------------------------------------------------------
    EventManager.prototype.setPeriod = function (eventPeriod) {
        if (this.currentPeriod) {
            this.unbindPeriod(this.currentPeriod);
            this.currentPeriod = null;
        }
        this.currentPeriod = eventPeriod;
        this.bindPeriod(eventPeriod);
        eventPeriod.requestSources(this.getSources());
    };
    EventManager.prototype.bindPeriod = function (eventPeriod) {
        this.listenTo(eventPeriod, 'release', function (eventsPayload) {
            this.trigger('release', eventsPayload);
        });
    };
    EventManager.prototype.unbindPeriod = function (eventPeriod) {
        this.stopListeningTo(eventPeriod);
    };
    // Event Getting/Adding/Removing
    // -----------------------------------------------------------------------------------------------------------------
    EventManager.prototype.getEventDefByUid = function (uid) {
        if (this.currentPeriod) {
            return this.currentPeriod.getEventDefByUid(uid);
        }
    };
    EventManager.prototype.addEventDef = function (eventDef, isSticky) {
        if (isSticky) {
            this.stickySource.addEventDef(eventDef);
        }
        if (this.currentPeriod) {
            this.currentPeriod.addEventDef(eventDef); // might release
        }
    };
    EventManager.prototype.removeEventDefsById = function (eventId) {
        this.getSources().forEach(function (eventSource) {
            eventSource.removeEventDefsById(eventId);
        });
        if (this.currentPeriod) {
            this.currentPeriod.removeEventDefsById(eventId); // might release
        }
    };
    EventManager.prototype.removeAllEventDefs = function () {
        this.getSources().forEach(function (eventSource) {
            eventSource.removeAllEventDefs();
        });
        if (this.currentPeriod) {
            this.currentPeriod.removeAllEventDefs();
        }
    };
    // Event Mutating
    // -----------------------------------------------------------------------------------------------------------------
    /*
    Returns an undo function.
    */
    EventManager.prototype.mutateEventsWithId = function (eventDefId, eventDefMutation) {
        var currentPeriod = this.currentPeriod;
        var eventDefs;
        var undoFuncs = [];
        if (currentPeriod) {
            currentPeriod.freeze();
            eventDefs = currentPeriod.getEventDefsById(eventDefId);
            eventDefs.forEach(function (eventDef) {
                // add/remove esp because id might change
                currentPeriod.removeEventDef(eventDef);
                undoFuncs.push(eventDefMutation.mutateSingle(eventDef));
                currentPeriod.addEventDef(eventDef);
            });
            currentPeriod.thaw();
            return function () {
                currentPeriod.freeze();
                for (var i = 0; i < eventDefs.length; i++) {
                    currentPeriod.removeEventDef(eventDefs[i]);
                    undoFuncs[i]();
                    currentPeriod.addEventDef(eventDefs[i]);
                }
                currentPeriod.thaw();
            };
        }
        return function () { };
    };
    /*
    copies and then mutates
    */
    EventManager.prototype.buildMutatedEventInstanceGroup = function (eventDefId, eventDefMutation) {
        var eventDefs = this.getEventDefsById(eventDefId);
        var i;
        var defCopy;
        var allInstances = [];
        for (i = 0; i < eventDefs.length; i++) {
            defCopy = eventDefs[i].clone();
            if (defCopy instanceof SingleEventDef_1.default) {
                eventDefMutation.mutateSingle(defCopy);
                allInstances.push.apply(allInstances, // append
                defCopy.buildInstances());
            }
        }
        return new EventInstanceGroup_1.default(allInstances);
    };
    // Freezing
    // -----------------------------------------------------------------------------------------------------------------
    EventManager.prototype.freeze = function () {
        if (this.currentPeriod) {
            this.currentPeriod.freeze();
        }
    };
    EventManager.prototype.thaw = function () {
        if (this.currentPeriod) {
            this.currentPeriod.thaw();
        }
    };
    // methods that simply forward to EventPeriod
    EventManager.prototype.getEventDefsById = function (eventDefId) {
        return this.currentPeriod.getEventDefsById(eventDefId);
    };
    EventManager.prototype.getEventInstances = function () {
        return this.currentPeriod.getEventInstances();
    };
    EventManager.prototype.getEventInstancesWithId = function (eventDefId) {
        return this.currentPeriod.getEventInstancesWithId(eventDefId);
    };
    EventManager.prototype.getEventInstancesWithoutId = function (eventDefId) {
        return this.currentPeriod.getEventInstancesWithoutId(eventDefId);
    };
    return EventManager;
}());
exports.default = EventManager;
EmitterMixin_1.default.mixInto(EventManager);
ListenerMixin_1.default.mixInto(EventManager);
function isSourcesEquivalent(source0, source1) {
    return source0.getPrimitive() === source1.getPrimitive();
}


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var Promise_1 = __webpack_require__(20);
var EmitterMixin_1 = __webpack_require__(11);
var UnzonedRange_1 = __webpack_require__(5);
var EventInstanceGroup_1 = __webpack_require__(18);
var EventPeriod = /** @class */ (function () {
    function EventPeriod(start, end, timezone) {
        this.pendingCnt = 0;
        this.freezeDepth = 0;
        this.stuntedReleaseCnt = 0;
        this.releaseCnt = 0;
        this.start = start;
        this.end = end;
        this.timezone = timezone;
        this.unzonedRange = new UnzonedRange_1.default(start.clone().stripZone(), end.clone().stripZone());
        this.requestsByUid = {};
        this.eventDefsByUid = {};
        this.eventDefsById = {};
        this.eventInstanceGroupsById = {};
    }
    EventPeriod.prototype.isWithinRange = function (start, end) {
        // TODO: use a range util function?
        return !start.isBefore(this.start) && !end.isAfter(this.end);
    };
    // Requesting and Purging
    // -----------------------------------------------------------------------------------------------------------------
    EventPeriod.prototype.requestSources = function (sources) {
        this.freeze();
        for (var i = 0; i < sources.length; i++) {
            this.requestSource(sources[i]);
        }
        this.thaw();
    };
    EventPeriod.prototype.requestSource = function (source) {
        var _this = this;
        var request = { source: source, status: 'pending', eventDefs: null };
        this.requestsByUid[source.uid] = request;
        this.pendingCnt += 1;
        source.fetch(this.start, this.end, this.timezone).then(function (eventDefs) {
            if (request.status !== 'cancelled') {
                request.status = 'completed';
                request.eventDefs = eventDefs;
                _this.addEventDefs(eventDefs);
                _this.pendingCnt--;
                _this.tryRelease();
            }
        }, function () {
            if (request.status !== 'cancelled') {
                request.status = 'failed';
                _this.pendingCnt--;
                _this.tryRelease();
            }
        });
    };
    EventPeriod.prototype.purgeSource = function (source) {
        var request = this.requestsByUid[source.uid];
        if (request) {
            delete this.requestsByUid[source.uid];
            if (request.status === 'pending') {
                request.status = 'cancelled';
                this.pendingCnt--;
                this.tryRelease();
            }
            else if (request.status === 'completed') {
                request.eventDefs.forEach(this.removeEventDef.bind(this));
            }
        }
    };
    EventPeriod.prototype.purgeAllSources = function () {
        var requestsByUid = this.requestsByUid;
        var uid;
        var request;
        var completedCnt = 0;
        for (uid in requestsByUid) {
            request = requestsByUid[uid];
            if (request.status === 'pending') {
                request.status = 'cancelled';
            }
            else if (request.status === 'completed') {
                completedCnt++;
            }
        }
        this.requestsByUid = {};
        this.pendingCnt = 0;
        if (completedCnt) {
            this.removeAllEventDefs(); // might release
        }
    };
    // Event Definitions
    // -----------------------------------------------------------------------------------------------------------------
    EventPeriod.prototype.getEventDefByUid = function (eventDefUid) {
        return this.eventDefsByUid[eventDefUid];
    };
    EventPeriod.prototype.getEventDefsById = function (eventDefId) {
        var a = this.eventDefsById[eventDefId];
        if (a) {
            return a.slice(); // clone
        }
        return [];
    };
    EventPeriod.prototype.addEventDefs = function (eventDefs) {
        for (var i = 0; i < eventDefs.length; i++) {
            this.addEventDef(eventDefs[i]);
        }
    };
    EventPeriod.prototype.addEventDef = function (eventDef) {
        var eventDefsById = this.eventDefsById;
        var eventDefId = eventDef.id;
        var eventDefs = eventDefsById[eventDefId] || (eventDefsById[eventDefId] = []);
        var eventInstances = eventDef.buildInstances(this.unzonedRange);
        var i;
        eventDefs.push(eventDef);
        this.eventDefsByUid[eventDef.uid] = eventDef;
        for (i = 0; i < eventInstances.length; i++) {
            this.addEventInstance(eventInstances[i], eventDefId);
        }
    };
    EventPeriod.prototype.removeEventDefsById = function (eventDefId) {
        var _this = this;
        this.getEventDefsById(eventDefId).forEach(function (eventDef) {
            _this.removeEventDef(eventDef);
        });
    };
    EventPeriod.prototype.removeAllEventDefs = function () {
        var isEmpty = $.isEmptyObject(this.eventDefsByUid);
        this.eventDefsByUid = {};
        this.eventDefsById = {};
        this.eventInstanceGroupsById = {};
        if (!isEmpty) {
            this.tryRelease();
        }
    };
    EventPeriod.prototype.removeEventDef = function (eventDef) {
        var eventDefsById = this.eventDefsById;
        var eventDefs = eventDefsById[eventDef.id];
        delete this.eventDefsByUid[eventDef.uid];
        if (eventDefs) {
            util_1.removeExact(eventDefs, eventDef);
            if (!eventDefs.length) {
                delete eventDefsById[eventDef.id];
            }
            this.removeEventInstancesForDef(eventDef);
        }
    };
    // Event Instances
    // -----------------------------------------------------------------------------------------------------------------
    EventPeriod.prototype.getEventInstances = function () {
        var eventInstanceGroupsById = this.eventInstanceGroupsById;
        var eventInstances = [];
        var id;
        for (id in eventInstanceGroupsById) {
            eventInstances.push.apply(eventInstances, // append
            eventInstanceGroupsById[id].eventInstances);
        }
        return eventInstances;
    };
    EventPeriod.prototype.getEventInstancesWithId = function (eventDefId) {
        var eventInstanceGroup = this.eventInstanceGroupsById[eventDefId];
        if (eventInstanceGroup) {
            return eventInstanceGroup.eventInstances.slice(); // clone
        }
        return [];
    };
    EventPeriod.prototype.getEventInstancesWithoutId = function (eventDefId) {
        var eventInstanceGroupsById = this.eventInstanceGroupsById;
        var matchingInstances = [];
        var id;
        for (id in eventInstanceGroupsById) {
            if (id !== eventDefId) {
                matchingInstances.push.apply(matchingInstances, // append
                eventInstanceGroupsById[id].eventInstances);
            }
        }
        return matchingInstances;
    };
    EventPeriod.prototype.addEventInstance = function (eventInstance, eventDefId) {
        var eventInstanceGroupsById = this.eventInstanceGroupsById;
        var eventInstanceGroup = eventInstanceGroupsById[eventDefId] ||
            (eventInstanceGroupsById[eventDefId] = new EventInstanceGroup_1.default());
        eventInstanceGroup.eventInstances.push(eventInstance);
        this.tryRelease();
    };
    EventPeriod.prototype.removeEventInstancesForDef = function (eventDef) {
        var eventInstanceGroupsById = this.eventInstanceGroupsById;
        var eventInstanceGroup = eventInstanceGroupsById[eventDef.id];
        var removeCnt;
        if (eventInstanceGroup) {
            removeCnt = util_1.removeMatching(eventInstanceGroup.eventInstances, function (currentEventInstance) {
                return currentEventInstance.def === eventDef;
            });
            if (!eventInstanceGroup.eventInstances.length) {
                delete eventInstanceGroupsById[eventDef.id];
            }
            if (removeCnt) {
                this.tryRelease();
            }
        }
    };
    // Releasing and Freezing
    // -----------------------------------------------------------------------------------------------------------------
    EventPeriod.prototype.tryRelease = function () {
        if (!this.pendingCnt) {
            if (!this.freezeDepth) {
                this.release();
            }
            else {
                this.stuntedReleaseCnt++;
            }
        }
    };
    EventPeriod.prototype.release = function () {
        this.releaseCnt++;
        this.trigger('release', this.eventInstanceGroupsById);
    };
    EventPeriod.prototype.whenReleased = function () {
        var _this = this;
        if (this.releaseCnt) {
            return Promise_1.default.resolve(this.eventInstanceGroupsById);
        }
        else {
            return Promise_1.default.construct(function (onResolve) {
                _this.one('release', onResolve);
            });
        }
    };
    EventPeriod.prototype.freeze = function () {
        if (!(this.freezeDepth++)) {
            this.stuntedReleaseCnt = 0;
        }
    };
    EventPeriod.prototype.thaw = function () {
        if (!(--this.freezeDepth) && this.stuntedReleaseCnt && !this.pendingCnt) {
            this.release();
        }
    };
    return EventPeriod;
}());
exports.default = EventPeriod;
EmitterMixin_1.default.mixInto(EventPeriod);


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var ListenerMixin_1 = __webpack_require__(7);
/* Creates a clone of an element and lets it track the mouse as it moves
----------------------------------------------------------------------------------------------------------------------*/
var MouseFollower = /** @class */ (function () {
    function MouseFollower(sourceEl, options) {
        this.isFollowing = false;
        this.isHidden = false;
        this.isAnimating = false; // doing the revert animation?
        this.options = options = options || {};
        this.sourceEl = sourceEl;
        this.parentEl = options.parentEl ? $(options.parentEl) : sourceEl.parent(); // default to sourceEl's parent
    }
    // Causes the element to start following the mouse
    MouseFollower.prototype.start = function (ev) {
        if (!this.isFollowing) {
            this.isFollowing = true;
            this.y0 = util_1.getEvY(ev);
            this.x0 = util_1.getEvX(ev);
            this.topDelta = 0;
            this.leftDelta = 0;
            if (!this.isHidden) {
                this.updatePosition();
            }
            if (util_1.getEvIsTouch(ev)) {
                this.listenTo($(document), 'touchmove', this.handleMove);
            }
            else {
                this.listenTo($(document), 'mousemove', this.handleMove);
            }
        }
    };
    // Causes the element to stop following the mouse. If shouldRevert is true, will animate back to original position.
    // `callback` gets invoked when the animation is complete. If no animation, it is invoked immediately.
    MouseFollower.prototype.stop = function (shouldRevert, callback) {
        var _this = this;
        var revertDuration = this.options.revertDuration;
        var complete = function () {
            _this.isAnimating = false;
            _this.removeElement();
            _this.top0 = _this.left0 = null; // reset state for future updatePosition calls
            if (callback) {
                callback();
            }
        };
        if (this.isFollowing && !this.isAnimating) {
            this.isFollowing = false;
            this.stopListeningTo($(document));
            if (shouldRevert && revertDuration && !this.isHidden) {
                this.isAnimating = true;
                this.el.animate({
                    top: this.top0,
                    left: this.left0
                }, {
                    duration: revertDuration,
                    complete: complete
                });
            }
            else {
                complete();
            }
        }
    };
    // Gets the tracking element. Create it if necessary
    MouseFollower.prototype.getEl = function () {
        var el = this.el;
        if (!el) {
            el = this.el = this.sourceEl.clone()
                .addClass(this.options.additionalClass || '')
                .css({
                position: 'absolute',
                visibility: '',
                display: this.isHidden ? 'none' : '',
                margin: 0,
                right: 'auto',
                bottom: 'auto',
                width: this.sourceEl.width(),
                height: this.sourceEl.height(),
                opacity: this.options.opacity || '',
                zIndex: this.options.zIndex
            });
            // we don't want long taps or any mouse interaction causing selection/menus.
            // would use preventSelection(), but that prevents selectstart, causing problems.
            el.addClass('fc-unselectable');
            el.appendTo(this.parentEl);
        }
        return el;
    };
    // Removes the tracking element if it has already been created
    MouseFollower.prototype.removeElement = function () {
        if (this.el) {
            this.el.remove();
            this.el = null;
        }
    };
    // Update the CSS position of the tracking element
    MouseFollower.prototype.updatePosition = function () {
        var sourceOffset;
        var origin;
        this.getEl(); // ensure this.el
        // make sure origin info was computed
        if (this.top0 == null) {
            sourceOffset = this.sourceEl.offset();
            origin = this.el.offsetParent().offset();
            this.top0 = sourceOffset.top - origin.top;
            this.left0 = sourceOffset.left - origin.left;
        }
        this.el.css({
            top: this.top0 + this.topDelta,
            left: this.left0 + this.leftDelta
        });
    };
    // Gets called when the user moves the mouse
    MouseFollower.prototype.handleMove = function (ev) {
        this.topDelta = util_1.getEvY(ev) - this.y0;
        this.leftDelta = util_1.getEvX(ev) - this.x0;
        if (!this.isHidden) {
            this.updatePosition();
        }
    };
    // Temporarily makes the tracking element invisible. Can be called before following starts
    MouseFollower.prototype.hide = function () {
        if (!this.isHidden) {
            this.isHidden = true;
            if (this.el) {
                this.el.hide();
            }
        }
    };
    // Show the tracking element after it has been temporarily hidden
    MouseFollower.prototype.show = function () {
        if (this.isHidden) {
            this.isHidden = false;
            this.updatePosition();
            this.getEl().show();
        }
    };
    return MouseFollower;
}());
exports.default = MouseFollower;
ListenerMixin_1.default.mixInto(MouseFollower);


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var HitDragListener_1 = __webpack_require__(23);
var Interaction_1 = __webpack_require__(15);
var DateClicking = /** @class */ (function (_super) {
    tslib_1.__extends(DateClicking, _super);
    /*
    component must implement:
      - bindDateHandlerToEl
      - getSafeHitFootprint
      - getHitEl
    */
    function DateClicking(component) {
        var _this = _super.call(this, component) || this;
        _this.dragListener = _this.buildDragListener();
        return _this;
    }
    DateClicking.prototype.end = function () {
        this.dragListener.endInteraction();
    };
    DateClicking.prototype.bindToEl = function (el) {
        var component = this.component;
        var dragListener = this.dragListener;
        component.bindDateHandlerToEl(el, 'mousedown', function (ev) {
            if (!component.shouldIgnoreMouse()) {
                dragListener.startInteraction(ev);
            }
        });
        component.bindDateHandlerToEl(el, 'touchstart', function (ev) {
            if (!component.shouldIgnoreTouch()) {
                dragListener.startInteraction(ev);
            }
        });
    };
    // Creates a listener that tracks the user's drag across day elements, for day clicking.
    DateClicking.prototype.buildDragListener = function () {
        var _this = this;
        var component = this.component;
        var dayClickHit; // null if invalid dayClick
        var dragListener = new HitDragListener_1.default(component, {
            scroll: this.opt('dragScroll'),
            interactionStart: function () {
                dayClickHit = dragListener.origHit;
            },
            hitOver: function (hit, isOrig, origHit) {
                // if user dragged to another cell at any point, it can no longer be a dayClick
                if (!isOrig) {
                    dayClickHit = null;
                }
            },
            hitOut: function () {
                dayClickHit = null;
            },
            interactionEnd: function (ev, isCancelled) {
                var componentFootprint;
                if (!isCancelled && dayClickHit) {
                    componentFootprint = component.getSafeHitFootprint(dayClickHit);
                    if (componentFootprint) {
                        _this.view.triggerDayClick(componentFootprint, component.getHitEl(dayClickHit), ev);
                    }
                }
            }
        });
        // because dragListener won't be called with any time delay, "dragging" will begin immediately,
        // which will kill any touchmoving/scrolling. Prevent this.
        dragListener.shouldCancelTouchScroll = false;
        dragListener.scrollAlwaysKills = true;
        return dragListener;
    };
    return DateClicking;
}(Interaction_1.default));
exports.default = DateClicking;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var EventRenderer_1 = __webpack_require__(42);
/*
Only handles foreground segs.
Does not own rendering. Use for low-level util methods by TimeGrid.
*/
var TimeGridEventRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(TimeGridEventRenderer, _super);
    function TimeGridEventRenderer(timeGrid, fillRenderer) {
        var _this = _super.call(this, timeGrid, fillRenderer) || this;
        _this.timeGrid = timeGrid;
        return _this;
    }
    TimeGridEventRenderer.prototype.renderFgSegs = function (segs) {
        this.renderFgSegsIntoContainers(segs, this.timeGrid.fgContainerEls);
    };
    // Given an array of foreground segments, render a DOM element for each, computes position,
    // and attaches to the column inner-container elements.
    TimeGridEventRenderer.prototype.renderFgSegsIntoContainers = function (segs, containerEls) {
        var segsByCol;
        var col;
        segsByCol = this.timeGrid.groupSegsByCol(segs);
        for (col = 0; col < this.timeGrid.colCnt; col++) {
            this.updateFgSegCoords(segsByCol[col]);
        }
        this.timeGrid.attachSegsByCol(segsByCol, containerEls);
    };
    TimeGridEventRenderer.prototype.unrenderFgSegs = function () {
        if (this.fgSegs) {
            this.fgSegs.forEach(function (seg) {
                seg.el.remove();
            });
        }
    };
    // Computes a default event time formatting string if `timeFormat` is not explicitly defined
    TimeGridEventRenderer.prototype.computeEventTimeFormat = function () {
        return this.opt('noMeridiemTimeFormat'); // like "6:30" (no AM/PM)
    };
    // Computes a default `displayEventEnd` value if one is not expliclty defined
    TimeGridEventRenderer.prototype.computeDisplayEventEnd = function () {
        return true;
    };
    // Renders the HTML for a single event segment's default rendering
    TimeGridEventRenderer.prototype.fgSegHtml = function (seg, disableResizing) {
        var view = this.view;
        var calendar = view.calendar;
        var componentFootprint = seg.footprint.componentFootprint;
        var isAllDay = componentFootprint.isAllDay;
        var eventDef = seg.footprint.eventDef;
        var isDraggable = view.isEventDefDraggable(eventDef);
        var isResizableFromStart = !disableResizing && seg.isStart && view.isEventDefResizableFromStart(eventDef);
        var isResizableFromEnd = !disableResizing && seg.isEnd && view.isEventDefResizableFromEnd(eventDef);
        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
        var skinCss = util_1.cssToStr(this.getSkinCss(eventDef));
        var timeText;
        var fullTimeText; // more verbose time text. for the print stylesheet
        var startTimeText; // just the start time text
        classes.unshift('fc-time-grid-event', 'fc-v-event');
        // if the event appears to span more than one day...
        if (view.isMultiDayRange(componentFootprint.unzonedRange)) {
            // Don't display time text on segments that run entirely through a day.
            // That would appear as midnight-midnight and would look dumb.
            // Otherwise, display the time text for the *segment's* times (like 6pm-midnight or midnight-10am)
            if (seg.isStart || seg.isEnd) {
                var zonedStart = calendar.msToMoment(seg.startMs);
                var zonedEnd = calendar.msToMoment(seg.endMs);
                timeText = this._getTimeText(zonedStart, zonedEnd, isAllDay);
                fullTimeText = this._getTimeText(zonedStart, zonedEnd, isAllDay, 'LT');
                startTimeText = this._getTimeText(zonedStart, zonedEnd, isAllDay, null, false); // displayEnd=false
            }
        }
        else {
            // Display the normal time text for the *event's* times
            timeText = this.getTimeText(seg.footprint);
            fullTimeText = this.getTimeText(seg.footprint, 'LT');
            startTimeText = this.getTimeText(seg.footprint, null, false); // displayEnd=false
        }
        return '<a class="' + classes.join(' ') + '"' +
            (eventDef.url ?
                ' href="' + util_1.htmlEscape(eventDef.url) + '"' :
                '') +
            (skinCss ?
                ' style="' + skinCss + '"' :
                '') +
            '>' +
            '<div class="fc-content">' +
            (timeText ?
                '<div class="fc-time"' +
                    ' data-start="' + util_1.htmlEscape(startTimeText) + '"' +
                    ' data-full="' + util_1.htmlEscape(fullTimeText) + '"' +
                    '>' +
                    '<span>' + util_1.htmlEscape(timeText) + '</span>' +
                    '</div>' :
                '') +
            (eventDef.title ?
                '<div class="fc-title">' +
                    util_1.htmlEscape(eventDef.title) +
                    '</div>' :
                '') +
            '</div>' +
            '<div class="fc-bg"/>' +
            /* TODO: write CSS for this
            (isResizableFromStart ?
              '<div class="fc-resizer fc-start-resizer" />' :
              ''
              ) +
            */
            (isResizableFromEnd ?
                '<div class="fc-resizer fc-end-resizer" />' :
                '') +
            '</a>';
    };
    // Given segments that are assumed to all live in the *same column*,
    // compute their verical/horizontal coordinates and assign to their elements.
    TimeGridEventRenderer.prototype.updateFgSegCoords = function (segs) {
        this.timeGrid.computeSegVerticals(segs); // horizontals relies on this
        this.computeFgSegHorizontals(segs); // compute horizontal coordinates, z-index's, and reorder the array
        this.timeGrid.assignSegVerticals(segs);
        this.assignFgSegHorizontals(segs);
    };
    // Given an array of segments that are all in the same column, sets the backwardCoord and forwardCoord on each.
    // NOTE: Also reorders the given array by date!
    TimeGridEventRenderer.prototype.computeFgSegHorizontals = function (segs) {
        var levels;
        var level0;
        var i;
        this.sortEventSegs(segs); // order by certain criteria
        levels = buildSlotSegLevels(segs);
        computeForwardSlotSegs(levels);
        if ((level0 = levels[0])) {
            for (i = 0; i < level0.length; i++) {
                computeSlotSegPressures(level0[i]);
            }
            for (i = 0; i < level0.length; i++) {
                this.computeFgSegForwardBack(level0[i], 0, 0);
            }
        }
    };
    // Calculate seg.forwardCoord and seg.backwardCoord for the segment, where both values range
    // from 0 to 1. If the calendar is left-to-right, the seg.backwardCoord maps to "left" and
    // seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
    //
    // The segment might be part of a "series", which means consecutive segments with the same pressure
    // who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
    // segments behind this one in the current series, and `seriesBackwardCoord` is the starting
    // coordinate of the first segment in the series.
    TimeGridEventRenderer.prototype.computeFgSegForwardBack = function (seg, seriesBackwardPressure, seriesBackwardCoord) {
        var forwardSegs = seg.forwardSegs;
        var i;
        if (seg.forwardCoord === undefined) {
            if (!forwardSegs.length) {
                // if there are no forward segments, this segment should butt up against the edge
                seg.forwardCoord = 1;
            }
            else {
                // sort highest pressure first
                this.sortForwardSegs(forwardSegs);
                // this segment's forwardCoord will be calculated from the backwardCoord of the
                // highest-pressure forward segment.
                this.computeFgSegForwardBack(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
                seg.forwardCoord = forwardSegs[0].backwardCoord;
            }
            // calculate the backwardCoord from the forwardCoord. consider the series
            seg.backwardCoord = seg.forwardCoord -
                (seg.forwardCoord - seriesBackwardCoord) / // available width for series
                    (seriesBackwardPressure + 1); // # of segments in the series
            // use this segment's coordinates to computed the coordinates of the less-pressurized
            // forward segments
            for (i = 0; i < forwardSegs.length; i++) {
                this.computeFgSegForwardBack(forwardSegs[i], 0, seg.forwardCoord);
            }
        }
    };
    TimeGridEventRenderer.prototype.sortForwardSegs = function (forwardSegs) {
        forwardSegs.sort(util_1.proxy(this, 'compareForwardSegs'));
    };
    // A cmp function for determining which forward segment to rely on more when computing coordinates.
    TimeGridEventRenderer.prototype.compareForwardSegs = function (seg1, seg2) {
        // put higher-pressure first
        return seg2.forwardPressure - seg1.forwardPressure ||
            // put segments that are closer to initial edge first (and favor ones with no coords yet)
            (seg1.backwardCoord || 0) - (seg2.backwardCoord || 0) ||
            // do normal sorting...
            this.compareEventSegs(seg1, seg2);
    };
    // Given foreground event segments that have already had their position coordinates computed,
    // assigns position-related CSS values to their elements.
    TimeGridEventRenderer.prototype.assignFgSegHorizontals = function (segs) {
        var i;
        var seg;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            seg.el.css(this.generateFgSegHorizontalCss(seg));
            // if the height is short, add a className for alternate styling
            if (seg.bottom - seg.top < 30) {
                seg.el.addClass('fc-short');
            }
        }
    };
    // Generates an object with CSS properties/values that should be applied to an event segment element.
    // Contains important positioning-related properties that should be applied to any event element, customized or not.
    TimeGridEventRenderer.prototype.generateFgSegHorizontalCss = function (seg) {
        var shouldOverlap = this.opt('slotEventOverlap');
        var backwardCoord = seg.backwardCoord; // the left side if LTR. the right side if RTL. floating-point
        var forwardCoord = seg.forwardCoord; // the right side if LTR. the left side if RTL. floating-point
        var props = this.timeGrid.generateSegVerticalCss(seg); // get top/bottom first
        var isRTL = this.timeGrid.isRTL;
        var left; // amount of space from left edge, a fraction of the total width
        var right; // amount of space from right edge, a fraction of the total width
        if (shouldOverlap) {
            // double the width, but don't go beyond the maximum forward coordinate (1.0)
            forwardCoord = Math.min(1, backwardCoord + (forwardCoord - backwardCoord) * 2);
        }
        if (isRTL) {
            left = 1 - forwardCoord;
            right = backwardCoord;
        }
        else {
            left = backwardCoord;
            right = 1 - forwardCoord;
        }
        props.zIndex = seg.level + 1; // convert from 0-base to 1-based
        props.left = left * 100 + '%';
        props.right = right * 100 + '%';
        if (shouldOverlap && seg.forwardPressure) {
            // add padding to the edge so that forward stacked events don't cover the resizer's icon
            props[isRTL ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
        }
        return props;
    };
    return TimeGridEventRenderer;
}(EventRenderer_1.default));
exports.default = TimeGridEventRenderer;
// Builds an array of segments "levels". The first level will be the leftmost tier of segments if the calendar is
// left-to-right, or the rightmost if the calendar is right-to-left. Assumes the segments are already ordered by date.
function buildSlotSegLevels(segs) {
    var levels = [];
    var i;
    var seg;
    var j;
    for (i = 0; i < segs.length; i++) {
        seg = segs[i];
        // go through all the levels and stop on the first level where there are no collisions
        for (j = 0; j < levels.length; j++) {
            if (!computeSlotSegCollisions(seg, levels[j]).length) {
                break;
            }
        }
        seg.level = j;
        (levels[j] || (levels[j] = [])).push(seg);
    }
    return levels;
}
// For every segment, figure out the other segments that are in subsequent
// levels that also occupy the same vertical space. Accumulate in seg.forwardSegs
function computeForwardSlotSegs(levels) {
    var i;
    var level;
    var j;
    var seg;
    var k;
    for (i = 0; i < levels.length; i++) {
        level = levels[i];
        for (j = 0; j < level.length; j++) {
            seg = level[j];
            seg.forwardSegs = [];
            for (k = i + 1; k < levels.length; k++) {
                computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
            }
        }
    }
}
// Figure out which path forward (via seg.forwardSegs) results in the longest path until
// the furthest edge is reached. The number of segments in this path will be seg.forwardPressure
function computeSlotSegPressures(seg) {
    var forwardSegs = seg.forwardSegs;
    var forwardPressure = 0;
    var i;
    var forwardSeg;
    if (seg.forwardPressure === undefined) {
        for (i = 0; i < forwardSegs.length; i++) {
            forwardSeg = forwardSegs[i];
            // figure out the child's maximum forward path
            computeSlotSegPressures(forwardSeg);
            // either use the existing maximum, or use the child's forward pressure
            // plus one (for the forwardSeg itself)
            forwardPressure = Math.max(forwardPressure, 1 + forwardSeg.forwardPressure);
        }
        seg.forwardPressure = forwardPressure;
    }
}
// Find all the segments in `otherSegs` that vertically collide with `seg`.
// Append into an optionally-supplied `results` array and return.
function computeSlotSegCollisions(seg, otherSegs, results) {
    if (results === void 0) { results = []; }
    for (var i = 0; i < otherSegs.length; i++) {
        if (isSlotSegCollision(seg, otherSegs[i])) {
            results.push(otherSegs[i]);
        }
    }
    return results;
}
// Do these segments occupy the same vertical space?
function isSlotSegCollision(seg1, seg2) {
    return seg1.bottom > seg2.top && seg1.top < seg2.bottom;
}


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var HelperRenderer_1 = __webpack_require__(58);
var TimeGridHelperRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(TimeGridHelperRenderer, _super);
    function TimeGridHelperRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeGridHelperRenderer.prototype.renderSegs = function (segs, sourceSeg) {
        var helperNodes = [];
        var i;
        var seg;
        var sourceEl;
        // TODO: not good to call eventRenderer this way
        this.eventRenderer.renderFgSegsIntoContainers(segs, this.component.helperContainerEls);
        // Try to make the segment that is in the same row as sourceSeg look the same
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            if (sourceSeg && sourceSeg.col === seg.col) {
                sourceEl = sourceSeg.el;
                seg.el.css({
                    left: sourceEl.css('left'),
                    right: sourceEl.css('right'),
                    'margin-left': sourceEl.css('margin-left'),
                    'margin-right': sourceEl.css('margin-right')
                });
            }
            helperNodes.push(seg.el[0]);
        }
        return $(helperNodes); // must return the elements rendered
    };
    return TimeGridHelperRenderer;
}(HelperRenderer_1.default));
exports.default = TimeGridHelperRenderer;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var FillRenderer_1 = __webpack_require__(57);
var TimeGridFillRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(TimeGridFillRenderer, _super);
    function TimeGridFillRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeGridFillRenderer.prototype.attachSegEls = function (type, segs) {
        var timeGrid = this.component;
        var containerEls;
        // TODO: more efficient lookup
        if (type === 'bgEvent') {
            containerEls = timeGrid.bgContainerEls;
        }
        else if (type === 'businessHours') {
            containerEls = timeGrid.businessContainerEls;
        }
        else if (type === 'highlight') {
            containerEls = timeGrid.highlightContainerEls;
        }
        timeGrid.updateSegVerticals(segs);
        timeGrid.attachSegsByCol(timeGrid.groupSegsByCol(segs), containerEls);
        return segs.map(function (seg) {
            return seg.el[0];
        });
    };
    return TimeGridFillRenderer;
}(FillRenderer_1.default));
exports.default = TimeGridFillRenderer;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

/* A rectangular panel that is absolutely positioned over other content
------------------------------------------------------------------------------------------------------------------------
Options:
  - className (string)
  - content (HTML string or jQuery element set)
  - parentEl
  - top
  - left
  - right (the x coord of where the right edge should be. not a "CSS" right)
  - autoHide (boolean)
  - show (callback)
  - hide (callback)
*/
Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var ListenerMixin_1 = __webpack_require__(7);
var Popover = /** @class */ (function () {
    function Popover(options) {
        this.isHidden = true;
        this.margin = 10; // the space required between the popover and the edges of the scroll container
        this.options = options || {};
    }
    // Shows the popover on the specified position. Renders it if not already
    Popover.prototype.show = function () {
        if (this.isHidden) {
            if (!this.el) {
                this.render();
            }
            this.el.show();
            this.position();
            this.isHidden = false;
            this.trigger('show');
        }
    };
    // Hides the popover, through CSS, but does not remove it from the DOM
    Popover.prototype.hide = function () {
        if (!this.isHidden) {
            this.el.hide();
            this.isHidden = true;
            this.trigger('hide');
        }
    };
    // Creates `this.el` and renders content inside of it
    Popover.prototype.render = function () {
        var _this = this;
        var options = this.options;
        this.el = $('<div class="fc-popover"/>')
            .addClass(options.className || '')
            .css({
            // position initially to the top left to avoid creating scrollbars
            top: 0,
            left: 0
        })
            .append(options.content)
            .appendTo(options.parentEl);
        // when a click happens on anything inside with a 'fc-close' className, hide the popover
        this.el.on('click', '.fc-close', function () {
            _this.hide();
        });
        if (options.autoHide) {
            this.listenTo($(document), 'mousedown', this.documentMousedown);
        }
    };
    // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
    Popover.prototype.documentMousedown = function (ev) {
        // only hide the popover if the click happened outside the popover
        if (this.el && !$(ev.target).closest(this.el).length) {
            this.hide();
        }
    };
    // Hides and unregisters any handlers
    Popover.prototype.removeElement = function () {
        this.hide();
        if (this.el) {
            this.el.remove();
            this.el = null;
        }
        this.stopListeningTo($(document), 'mousedown');
    };
    // Positions the popover optimally, using the top/left/right options
    Popover.prototype.position = function () {
        var options = this.options;
        var origin = this.el.offsetParent().offset();
        var width = this.el.outerWidth();
        var height = this.el.outerHeight();
        var windowEl = $(window);
        var viewportEl = util_1.getScrollParent(this.el);
        var viewportTop;
        var viewportLeft;
        var viewportOffset;
        var top; // the "position" (not "offset") values for the popover
        var left; //
        // compute top and left
        top = options.top || 0;
        if (options.left !== undefined) {
            left = options.left;
        }
        else if (options.right !== undefined) {
            left = options.right - width; // derive the left value from the right value
        }
        else {
            left = 0;
        }
        if (viewportEl.is(window) || viewportEl.is(document)) {
            viewportEl = windowEl;
            viewportTop = 0; // the window is always at the top left
            viewportLeft = 0; // (and .offset() won't work if called here)
        }
        else {
            viewportOffset = viewportEl.offset();
            viewportTop = viewportOffset.top;
            viewportLeft = viewportOffset.left;
        }
        // if the window is scrolled, it causes the visible area to be further down
        viewportTop += windowEl.scrollTop();
        viewportLeft += windowEl.scrollLeft();
        // constrain to the view port. if constrained by two edges, give precedence to top/left
        if (options.viewportConstrain !== false) {
            top = Math.min(top, viewportTop + viewportEl.outerHeight() - height - this.margin);
            top = Math.max(top, viewportTop + this.margin);
            left = Math.min(left, viewportLeft + viewportEl.outerWidth() - width - this.margin);
            left = Math.max(left, viewportLeft + this.margin);
        }
        this.el.css({
            top: top - origin.top,
            left: left - origin.left
        });
    };
    // Triggers a callback. Calls a function in the option hash of the same name.
    // Arguments beyond the first `name` are forwarded on.
    // TODO: better code reuse for this. Repeat code
    Popover.prototype.trigger = function (name) {
        if (this.options[name]) {
            this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    };
    return Popover;
}());
exports.default = Popover;
ListenerMixin_1.default.mixInto(Popover);


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var EventRenderer_1 = __webpack_require__(42);
/* Event-rendering methods for the DayGrid class
----------------------------------------------------------------------------------------------------------------------*/
var DayGridEventRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(DayGridEventRenderer, _super);
    function DayGridEventRenderer(dayGrid, fillRenderer) {
        var _this = _super.call(this, dayGrid, fillRenderer) || this;
        _this.dayGrid = dayGrid;
        return _this;
    }
    DayGridEventRenderer.prototype.renderBgRanges = function (eventRanges) {
        // don't render timed background events
        eventRanges = $.grep(eventRanges, function (eventRange) {
            return eventRange.eventDef.isAllDay();
        });
        _super.prototype.renderBgRanges.call(this, eventRanges);
    };
    // Renders the given foreground event segments onto the grid
    DayGridEventRenderer.prototype.renderFgSegs = function (segs) {
        var rowStructs = this.rowStructs = this.renderSegRows(segs);
        // append to each row's content skeleton
        this.dayGrid.rowEls.each(function (i, rowNode) {
            $(rowNode).find('.fc-content-skeleton > table').append(rowStructs[i].tbodyEl);
        });
    };
    // Unrenders all currently rendered foreground event segments
    DayGridEventRenderer.prototype.unrenderFgSegs = function () {
        var rowStructs = this.rowStructs || [];
        var rowStruct;
        while ((rowStruct = rowStructs.pop())) {
            rowStruct.tbodyEl.remove();
        }
        this.rowStructs = null;
    };
    // Uses the given events array to generate <tbody> elements that should be appended to each row's content skeleton.
    // Returns an array of rowStruct objects (see the bottom of `renderSegRow`).
    // PRECONDITION: each segment shoud already have a rendered and assigned `.el`
    DayGridEventRenderer.prototype.renderSegRows = function (segs) {
        var rowStructs = [];
        var segRows;
        var row;
        segRows = this.groupSegRows(segs); // group into nested arrays
        // iterate each row of segment groupings
        for (row = 0; row < segRows.length; row++) {
            rowStructs.push(this.renderSegRow(row, segRows[row]));
        }
        return rowStructs;
    };
    // Given a row # and an array of segments all in the same row, render a <tbody> element, a skeleton that contains
    // the segments. Returns object with a bunch of internal data about how the render was calculated.
    // NOTE: modifies rowSegs
    DayGridEventRenderer.prototype.renderSegRow = function (row, rowSegs) {
        var colCnt = this.dayGrid.colCnt;
        var segLevels = this.buildSegLevels(rowSegs); // group into sub-arrays of levels
        var levelCnt = Math.max(1, segLevels.length); // ensure at least one level
        var tbody = $('<tbody/>');
        var segMatrix = []; // lookup for which segments are rendered into which level+col cells
        var cellMatrix = []; // lookup for all <td> elements of the level+col matrix
        var loneCellMatrix = []; // lookup for <td> elements that only take up a single column
        var i;
        var levelSegs;
        var col;
        var tr;
        var j;
        var seg;
        var td;
        // populates empty cells from the current column (`col`) to `endCol`
        function emptyCellsUntil(endCol) {
            while (col < endCol) {
                // try to grab a cell from the level above and extend its rowspan. otherwise, create a fresh cell
                td = (loneCellMatrix[i - 1] || [])[col];
                if (td) {
                    td.attr('rowspan', parseInt(td.attr('rowspan') || 1, 10) + 1);
                }
                else {
                    td = $('<td/>');
                    tr.append(td);
                }
                cellMatrix[i][col] = td;
                loneCellMatrix[i][col] = td;
                col++;
            }
        }
        for (i = 0; i < levelCnt; i++) {
            levelSegs = segLevels[i];
            col = 0;
            tr = $('<tr/>');
            segMatrix.push([]);
            cellMatrix.push([]);
            loneCellMatrix.push([]);
            // levelCnt might be 1 even though there are no actual levels. protect against this.
            // this single empty row is useful for styling.
            if (levelSegs) {
                for (j = 0; j < levelSegs.length; j++) {
                    seg = levelSegs[j];
                    emptyCellsUntil(seg.leftCol);
                    // create a container that occupies or more columns. append the event element.
                    td = $('<td class="fc-event-container"/>').append(seg.el);
                    if (seg.leftCol !== seg.rightCol) {
                        td.attr('colspan', seg.rightCol - seg.leftCol + 1);
                    }
                    else {
                        loneCellMatrix[i][col] = td;
                    }
                    while (col <= seg.rightCol) {
                        cellMatrix[i][col] = td;
                        segMatrix[i][col] = seg;
                        col++;
                    }
                    tr.append(td);
                }
            }
            emptyCellsUntil(colCnt); // finish off the row
            this.dayGrid.bookendCells(tr);
            tbody.append(tr);
        }
        return {
            row: row,
            tbodyEl: tbody,
            cellMatrix: cellMatrix,
            segMatrix: segMatrix,
            segLevels: segLevels,
            segs: rowSegs
        };
    };
    // Stacks a flat array of segments, which are all assumed to be in the same row, into subarrays of vertical levels.
    // NOTE: modifies segs
    DayGridEventRenderer.prototype.buildSegLevels = function (segs) {
        var levels = [];
        var i;
        var seg;
        var j;
        // Give preference to elements with certain criteria, so they have
        // a chance to be closer to the top.
        this.sortEventSegs(segs);
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            // loop through levels, starting with the topmost, until the segment doesn't collide with other segments
            for (j = 0; j < levels.length; j++) {
                if (!isDaySegCollision(seg, levels[j])) {
                    break;
                }
            }
            // `j` now holds the desired subrow index
            seg.level = j;
            // create new level array if needed and append segment
            (levels[j] || (levels[j] = [])).push(seg);
        }
        // order segments left-to-right. very important if calendar is RTL
        for (j = 0; j < levels.length; j++) {
            levels[j].sort(compareDaySegCols);
        }
        return levels;
    };
    // Given a flat array of segments, return an array of sub-arrays, grouped by each segment's row
    DayGridEventRenderer.prototype.groupSegRows = function (segs) {
        var segRows = [];
        var i;
        for (i = 0; i < this.dayGrid.rowCnt; i++) {
            segRows.push([]);
        }
        for (i = 0; i < segs.length; i++) {
            segRows[segs[i].row].push(segs[i]);
        }
        return segRows;
    };
    // Computes a default event time formatting string if `timeFormat` is not explicitly defined
    DayGridEventRenderer.prototype.computeEventTimeFormat = function () {
        return this.opt('extraSmallTimeFormat'); // like "6p" or "6:30p"
    };
    // Computes a default `displayEventEnd` value if one is not expliclty defined
    DayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
        return this.dayGrid.colCnt === 1; // we'll likely have space if there's only one day
    };
    // Builds the HTML to be used for the default element for an individual segment
    DayGridEventRenderer.prototype.fgSegHtml = function (seg, disableResizing) {
        var view = this.view;
        var eventDef = seg.footprint.eventDef;
        var isAllDay = seg.footprint.componentFootprint.isAllDay;
        var isDraggable = view.isEventDefDraggable(eventDef);
        var isResizableFromStart = !disableResizing && isAllDay &&
            seg.isStart && view.isEventDefResizableFromStart(eventDef);
        var isResizableFromEnd = !disableResizing && isAllDay &&
            seg.isEnd && view.isEventDefResizableFromEnd(eventDef);
        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
        var skinCss = util_1.cssToStr(this.getSkinCss(eventDef));
        var timeHtml = '';
        var timeText;
        var titleHtml;
        classes.unshift('fc-day-grid-event', 'fc-h-event');
        // Only display a timed events time if it is the starting segment
        if (seg.isStart) {
            timeText = this.getTimeText(seg.footprint);
            if (timeText) {
                timeHtml = '<span class="fc-time">' + util_1.htmlEscape(timeText) + '</span>';
            }
        }
        titleHtml =
            '<span class="fc-title">' +
                (util_1.htmlEscape(eventDef.title || '') || '&nbsp;') + // we always want one line of height
                '</span>';
        return '<a class="' + classes.join(' ') + '"' +
            (eventDef.url ?
                ' href="' + util_1.htmlEscape(eventDef.url) + '"' :
                '') +
            (skinCss ?
                ' style="' + skinCss + '"' :
                '') +
            '>' +
            '<div class="fc-content">' +
            (this.dayGrid.isRTL ?
                titleHtml + ' ' + timeHtml : // put a natural space in between
                timeHtml + ' ' + titleHtml //
            ) +
            '</div>' +
            (isResizableFromStart ?
                '<div class="fc-resizer fc-start-resizer" />' :
                '') +
            (isResizableFromEnd ?
                '<div class="fc-resizer fc-end-resizer" />' :
                '') +
            '</a>';
    };
    return DayGridEventRenderer;
}(EventRenderer_1.default));
exports.default = DayGridEventRenderer;
// Computes whether two segments' columns collide. They are assumed to be in the same row.
function isDaySegCollision(seg, otherSegs) {
    var i;
    var otherSeg;
    for (i = 0; i < otherSegs.length; i++) {
        otherSeg = otherSegs[i];
        if (otherSeg.leftCol <= seg.rightCol &&
            otherSeg.rightCol >= seg.leftCol) {
            return true;
        }
    }
    return false;
}
// A cmp function for determining the leftmost event
function compareDaySegCols(a, b) {
    return a.leftCol - b.leftCol;
}


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var HelperRenderer_1 = __webpack_require__(58);
var DayGridHelperRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(DayGridHelperRenderer, _super);
    function DayGridHelperRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Renders a mock "helper" event. `sourceSeg` is the associated internal segment object. It can be null.
    DayGridHelperRenderer.prototype.renderSegs = function (segs, sourceSeg) {
        var helperNodes = [];
        var rowStructs;
        // TODO: not good to call eventRenderer this way
        rowStructs = this.eventRenderer.renderSegRows(segs);
        // inject each new event skeleton into each associated row
        this.component.rowEls.each(function (row, rowNode) {
            var rowEl = $(rowNode); // the .fc-row
            var skeletonEl = $('<div class="fc-helper-skeleton"><table/></div>'); // will be absolutely positioned
            var skeletonTopEl;
            var skeletonTop;
            // If there is an original segment, match the top position. Otherwise, put it at the row's top level
            if (sourceSeg && sourceSeg.row === row) {
                skeletonTop = sourceSeg.el.position().top;
            }
            else {
                skeletonTopEl = rowEl.find('.fc-content-skeleton tbody');
                if (!skeletonTopEl.length) {
                    skeletonTopEl = rowEl.find('.fc-content-skeleton table');
                }
                skeletonTop = skeletonTopEl.position().top;
            }
            skeletonEl.css('top', skeletonTop)
                .find('table')
                .append(rowStructs[row].tbodyEl);
            rowEl.append(skeletonEl);
            helperNodes.push(skeletonEl[0]);
        });
        return $(helperNodes); // must return the elements rendered
    };
    return DayGridHelperRenderer;
}(HelperRenderer_1.default));
exports.default = DayGridHelperRenderer;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var FillRenderer_1 = __webpack_require__(57);
var DayGridFillRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(DayGridFillRenderer, _super);
    function DayGridFillRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fillSegTag = 'td'; // override the default tag name
        return _this;
    }
    DayGridFillRenderer.prototype.attachSegEls = function (type, segs) {
        var nodes = [];
        var i;
        var seg;
        var skeletonEl;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            skeletonEl = this.renderFillRow(type, seg);
            this.component.rowEls.eq(seg.row).append(skeletonEl);
            nodes.push(skeletonEl[0]);
        }
        return nodes;
    };
    // Generates the HTML needed for one row of a fill. Requires the seg's el to be rendered.
    DayGridFillRenderer.prototype.renderFillRow = function (type, seg) {
        var colCnt = this.component.colCnt;
        var startCol = seg.leftCol;
        var endCol = seg.rightCol + 1;
        var className;
        var skeletonEl;
        var trEl;
        if (type === 'businessHours') {
            className = 'bgevent';
        }
        else {
            className = type.toLowerCase();
        }
        skeletonEl = $('<div class="fc-' + className + '-skeleton">' +
            '<table><tr/></table>' +
            '</div>');
        trEl = skeletonEl.find('tr');
        if (startCol > 0) {
            trEl.append('<td colspan="' + startCol + '"/>');
        }
        trEl.append(seg.el.attr('colspan', endCol - startCol));
        if (endCol < colCnt) {
            trEl.append('<td colspan="' + (colCnt - endCol) + '"/>');
        }
        this.component.bookendCells(trEl);
        return skeletonEl;
    };
    return DayGridFillRenderer;
}(FillRenderer_1.default));
exports.default = DayGridFillRenderer;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var BasicViewDateProfileGenerator_1 = __webpack_require__(228);
var UnzonedRange_1 = __webpack_require__(5);
var MonthViewDateProfileGenerator = /** @class */ (function (_super) {
    tslib_1.__extends(MonthViewDateProfileGenerator, _super);
    function MonthViewDateProfileGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Computes the date range that will be rendered.
    MonthViewDateProfileGenerator.prototype.buildRenderRange = function (currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
        var renderUnzonedRange = _super.prototype.buildRenderRange.call(this, currentUnzonedRange, currentRangeUnit, isRangeAllDay);
        var start = this.msToUtcMoment(renderUnzonedRange.startMs, isRangeAllDay);
        var end = this.msToUtcMoment(renderUnzonedRange.endMs, isRangeAllDay);
        var rowCnt;
        // ensure 6 weeks
        if (this.opt('fixedWeekCount')) {
            rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
            end.diff(start, 'weeks', true) // dontRound=true
            );
            end.add(6 - rowCnt, 'weeks');
        }
        return new UnzonedRange_1.default(start, end);
    };
    return MonthViewDateProfileGenerator;
}(BasicViewDateProfileGenerator_1.default));
exports.default = MonthViewDateProfileGenerator;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var EventRenderer_1 = __webpack_require__(42);
var ListEventRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(ListEventRenderer, _super);
    function ListEventRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListEventRenderer.prototype.renderFgSegs = function (segs) {
        if (!segs.length) {
            this.component.renderEmptyMessage();
        }
        else {
            this.component.renderSegList(segs);
        }
    };
    // generates the HTML for a single event row
    ListEventRenderer.prototype.fgSegHtml = function (seg) {
        var view = this.view;
        var calendar = view.calendar;
        var theme = calendar.theme;
        var eventFootprint = seg.footprint;
        var eventDef = eventFootprint.eventDef;
        var componentFootprint = eventFootprint.componentFootprint;
        var url = eventDef.url;
        var classes = ['fc-list-item'].concat(this.getClasses(eventDef));
        var bgColor = this.getBgColor(eventDef);
        var timeHtml;
        if (componentFootprint.isAllDay) {
            timeHtml = view.getAllDayHtml();
        }
        else if (view.isMultiDayRange(componentFootprint.unzonedRange)) {
            if (seg.isStart || seg.isEnd) {
                timeHtml = util_1.htmlEscape(this._getTimeText(calendar.msToMoment(seg.startMs), calendar.msToMoment(seg.endMs), componentFootprint.isAllDay));
            }
            else {
                timeHtml = view.getAllDayHtml();
            }
        }
        else {
            // Display the normal time text for the *event's* times
            timeHtml = util_1.htmlEscape(this.getTimeText(eventFootprint));
        }
        if (url) {
            classes.push('fc-has-url');
        }
        return '<tr class="' + classes.join(' ') + '">' +
            (this.displayEventTime ?
                '<td class="fc-list-item-time ' + theme.getClass('widgetContent') + '">' +
                    (timeHtml || '') +
                    '</td>' :
                '') +
            '<td class="fc-list-item-marker ' + theme.getClass('widgetContent') + '">' +
            '<span class="fc-event-dot"' +
            (bgColor ?
                ' style="background-color:' + bgColor + '"' :
                '') +
            '></span>' +
            '</td>' +
            '<td class="fc-list-item-title ' + theme.getClass('widgetContent') + '">' +
            '<a' + (url ? ' href="' + util_1.htmlEscape(url) + '"' : '') + '>' +
            util_1.htmlEscape(eventDef.title || '') +
            '</a>' +
            '</td>' +
            '</tr>';
    };
    // like "4:00am"
    ListEventRenderer.prototype.computeEventTimeFormat = function () {
        return this.opt('mediumTimeFormat');
    };
    return ListEventRenderer;
}(EventRenderer_1.default));
exports.default = ListEventRenderer;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var EventPointing_1 = __webpack_require__(59);
var ListEventPointing = /** @class */ (function (_super) {
    tslib_1.__extends(ListEventPointing, _super);
    function ListEventPointing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // for events with a url, the whole <tr> should be clickable,
    // but it's impossible to wrap with an <a> tag. simulate this.
    ListEventPointing.prototype.handleClick = function (seg, ev) {
        var url;
        _super.prototype.handleClick.call(this, seg, ev); // might prevent the default action
        // not clicking on or within an <a> with an href
        if (!$(ev.target).closest('a[href]').length) {
            url = seg.footprint.eventDef.url;
            if (url && !ev.isDefaultPrevented()) {
                window.location.href = url; // simulate link click
            }
        }
    };
    return ListEventPointing;
}(EventPointing_1.default));
exports.default = ListEventPointing;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var EventSourceParser_1 = __webpack_require__(38);
var ArrayEventSource_1 = __webpack_require__(52);
var FuncEventSource_1 = __webpack_require__(215);
var JsonFeedEventSource_1 = __webpack_require__(216);
EventSourceParser_1.default.registerClass(ArrayEventSource_1.default);
EventSourceParser_1.default.registerClass(FuncEventSource_1.default);
EventSourceParser_1.default.registerClass(JsonFeedEventSource_1.default);


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var ThemeRegistry_1 = __webpack_require__(51);
var StandardTheme_1 = __webpack_require__(213);
var JqueryUiTheme_1 = __webpack_require__(214);
var Bootstrap3Theme_1 = __webpack_require__(258);
var Bootstrap4Theme_1 = __webpack_require__(259);
ThemeRegistry_1.defineThemeSystem('standard', StandardTheme_1.default);
ThemeRegistry_1.defineThemeSystem('jquery-ui', JqueryUiTheme_1.default);
ThemeRegistry_1.defineThemeSystem('bootstrap3', Bootstrap3Theme_1.default);
ThemeRegistry_1.defineThemeSystem('bootstrap4', Bootstrap4Theme_1.default);


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Theme_1 = __webpack_require__(19);
var Bootstrap3Theme = /** @class */ (function (_super) {
    tslib_1.__extends(Bootstrap3Theme, _super);
    function Bootstrap3Theme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bootstrap3Theme;
}(Theme_1.default));
exports.default = Bootstrap3Theme;
Bootstrap3Theme.prototype.classes = {
    widget: 'fc-bootstrap3',
    tableGrid: 'table-bordered',
    tableList: 'table',
    tableListHeading: 'active',
    buttonGroup: 'btn-group',
    button: 'btn btn-default',
    stateActive: 'active',
    stateDisabled: 'disabled',
    today: 'alert alert-info',
    popover: 'panel panel-default',
    popoverHeader: 'panel-heading',
    popoverContent: 'panel-body',
    // day grid
    // for left/right border color when border is inset from edges (all-day in agenda view)
    // avoid `panel` class b/c don't want margins/radius. only border color.
    headerRow: 'panel-default',
    dayRow: 'panel-default',
    // list view
    listView: 'panel panel-default'
};
Bootstrap3Theme.prototype.baseIconClass = 'glyphicon';
Bootstrap3Theme.prototype.iconClasses = {
    close: 'glyphicon-remove',
    prev: 'glyphicon-chevron-left',
    next: 'glyphicon-chevron-right',
    prevYear: 'glyphicon-backward',
    nextYear: 'glyphicon-forward'
};
Bootstrap3Theme.prototype.iconOverrideOption = 'bootstrapGlyphicons';
Bootstrap3Theme.prototype.iconOverrideCustomButtonOption = 'bootstrapGlyphicon';
Bootstrap3Theme.prototype.iconOverridePrefix = 'glyphicon-';


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Theme_1 = __webpack_require__(19);
var Bootstrap4Theme = /** @class */ (function (_super) {
    tslib_1.__extends(Bootstrap4Theme, _super);
    function Bootstrap4Theme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bootstrap4Theme;
}(Theme_1.default));
exports.default = Bootstrap4Theme;
Bootstrap4Theme.prototype.classes = {
    widget: 'fc-bootstrap4',
    tableGrid: 'table-bordered',
    tableList: 'table',
    tableListHeading: 'table-active',
    buttonGroup: 'btn-group',
    button: 'btn btn-primary',
    stateActive: 'active',
    stateDisabled: 'disabled',
    today: 'alert alert-info',
    popover: 'card card-primary',
    popoverHeader: 'card-header',
    popoverContent: 'card-body',
    // day grid
    // for left/right border color when border is inset from edges (all-day in agenda view)
    // avoid `table` class b/c don't want margins/padding/structure. only border color.
    headerRow: 'table-bordered',
    dayRow: 'table-bordered',
    // list view
    listView: 'card card-primary'
};
Bootstrap4Theme.prototype.baseIconClass = 'fa';
Bootstrap4Theme.prototype.iconClasses = {
    close: 'fa-times',
    prev: 'fa-chevron-left',
    next: 'fa-chevron-right',
    prevYear: 'fa-angle-double-left',
    nextYear: 'fa-angle-double-right'
};
Bootstrap4Theme.prototype.iconOverrideOption = 'bootstrapFontAwesome';
Bootstrap4Theme.prototype.iconOverrideCustomButtonOption = 'bootstrapFontAwesome';
Bootstrap4Theme.prototype.iconOverridePrefix = 'fa-';


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var ViewRegistry_1 = __webpack_require__(22);
var BasicView_1 = __webpack_require__(62);
var MonthView_1 = __webpack_require__(229);
ViewRegistry_1.defineView('basic', {
    'class': BasicView_1.default
});
ViewRegistry_1.defineView('basicDay', {
    type: 'basic',
    duration: { days: 1 }
});
ViewRegistry_1.defineView('basicWeek', {
    type: 'basic',
    duration: { weeks: 1 }
});
ViewRegistry_1.defineView('month', {
    'class': MonthView_1.default,
    duration: { months: 1 },
    defaults: {
        fixedWeekCount: true
    }
});


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var ViewRegistry_1 = __webpack_require__(22);
var AgendaView_1 = __webpack_require__(226);
ViewRegistry_1.defineView('agenda', {
    'class': AgendaView_1.default,
    defaults: {
        allDaySlot: true,
        slotDuration: '00:30:00',
        slotEventOverlap: true // a bad name. confused with overlap/constraint system
    }
});
ViewRegistry_1.defineView('agendaDay', {
    type: 'agenda',
    duration: { days: 1 }
});
ViewRegistry_1.defineView('agendaWeek', {
    type: 'agenda',
    duration: { weeks: 1 }
});


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var ViewRegistry_1 = __webpack_require__(22);
var ListView_1 = __webpack_require__(230);
ViewRegistry_1.defineView('list', {
    'class': ListView_1.default,
    buttonTextKey: 'list',
    defaults: {
        buttonText: 'list',
        listDayFormat: 'LL',
        noEventsMessage: 'No events to display'
    }
});
ViewRegistry_1.defineView('listDay', {
    type: 'list',
    duration: { days: 1 },
    defaults: {
        listDayFormat: 'dddd' // day-of-week is all we need. full date is probably in header
    }
});
ViewRegistry_1.defineView('listWeek', {
    type: 'list',
    duration: { weeks: 1 },
    defaults: {
        listDayFormat: 'dddd',
        listDayAltFormat: 'LL'
    }
});
ViewRegistry_1.defineView('listMonth', {
    type: 'list',
    duration: { month: 1 },
    defaults: {
        listDayAltFormat: 'dddd' // day-of-week is nice-to-have
    }
});
ViewRegistry_1.defineView('listYear', {
    type: 'list',
    duration: { year: 1 },
    defaults: {
        listDayAltFormat: 'dddd' // day-of-week is nice-to-have
    }
});


/***/ }),
/* 263 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ })
/******/ ]);
});
/*!
 * FullCalendar Scheduler v1.9.4
 * Docs & License: https://fullcalendar.io/scheduler/
 * (c) 2018 Adam Shaw
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("fullcalendar"),require("jquery"),require("moment"));else if("function"==typeof define&&define.amd)define(["fullcalendar","jquery","moment"],t);else{var r="object"==typeof exports?t(require("fullcalendar"),require("jquery"),require("moment")):t(e.FullCalendar,e.jQuery,e.moment);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}("undefined"!=typeof self?self:this,function(e,t,r){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=36)}([function(t,r){t.exports=e},function(e,t){var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};t.__extends=function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}},function(e,r){e.exports=t},,,,function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(0),i=function(e){function t(t,r,o){var n=e.call(this,t,r)||this;return n.resourceId=o,n}return o.__extends(t,e),t.prototype.toLegacy=function(t){var r=e.prototype.toLegacy.call(this,t);return r.resourceId=this.resourceId,r},t}(n.ComponentFootprint);t["default"]=i},,,function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2),i=r(0),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.mixInto=function(e){var t=this;i.Mixin.mixInto.call(this,e),["bindBaseRenderHandlers","queryScroll","applyScroll","triggerDayClick","triggerSelect","triggerExternalDrop","handleResourceAdd","handleResourceRemove"].forEach(function(r){e.prototype[r]=t.prototype[r]})},t.prototype.initResourceView=function(){var e=this,t=["hasResources"];this.canHandleSpecificResources||t.push("displayingDates"),this.watch("displayingResources",t,function(){e.requestResourcesRender(e.get("currentResources"))},function(){e.requestResourcesUnrender()}),this.watch("displayingBusinessHours",["businessHourGenerator","displayingResources","displayingDates"],function(t){e.requestBusinessHoursRender(t.businessHourGenerator)},function(){e.requestBusinessHoursUnrender()}),this.watch("displayingEvents",["displayingResources","hasEvents"],function(){e.requestEventsRender(e.get("currentEvents"))},function(){e.requestEventsUnrender()})},t.prototype.bindBaseRenderHandlers=function(){var e=!1,t=!1;this.on("resourcesRendered",function(){e||(e=!0,t&&this.whenSizeUpdated(this.triggerViewRender))}),this.on("datesRendered",function(){t||(t=!0,e&&this.whenSizeUpdated(this.triggerViewRender))}),this.on("before:resourcesUnrendered",function(){e&&(e=!1)}),this.on("before:datesUnrendered",function(){t&&(t=!1,this.triggerViewDestroy())})},t.prototype.queryScroll=function(){var e=i.View.prototype.queryScroll.apply(this,arguments);return this.isResourcesRendered&&n.extend(e,this.queryResourceScroll()),e},t.prototype.applyScroll=function(e){i.View.prototype.applyScroll.apply(this,arguments),this.isResourcesRendered&&this.applyResourceScroll(e)},t.prototype.queryResourceScroll=function(){return{}},t.prototype.applyResourceScroll=function(){},t.prototype.getResourceText=function(e){return this.getResourceTextFunc()(e)},t.prototype.getResourceTextFunc=function(){if(this.resourceTextFunc)return this.resourceTextFunc;var e=this.opt("resourceText");return"function"!=typeof e&&(e=function(e){return e.title||e.id}),this.resourceTextFunc=e,e},t.prototype.handleResourceAdd=function(e){this.requestResourceRender(e)},t.prototype.handleResourceRemove=function(e){this.requestResourceUnrender(e)},t.prototype.requestResourcesRender=function(e){var t=this;this.requestRender(function(){t.executeResourcesRender(e)},"resource","init")},t.prototype.requestResourcesUnrender=function(){var e=this;this.requestRender(function(){e.executeResourcesUnrender()},"resource","destroy")},t.prototype.requestResourceRender=function(e){var t=this;this.requestRender(function(){t.executeResourceRender(e)},"resource","add")},t.prototype.requestResourceUnrender=function(e){var t=this;this.requestRender(function(){t.executeResourceUnrender(e)},"resource","remove")},t.prototype.executeResourcesRender=function(e){this.renderResources(e),this.isResourcesRendered=!0,this.trigger("resourcesRendered")},t.prototype.executeResourcesUnrender=function(){this.trigger("before:resourcesUnrendered"),this.unrenderResources(),this.isResourcesRendered=!1},t.prototype.executeResourceRender=function(e){this.renderResource(e)},t.prototype.executeResourceUnrender=function(e){this.unrenderResource(e)},t.prototype.triggerDayClick=function(e,t,r){var o=this.calendar.footprintToDateProfile(e);this.publiclyTrigger("dayClick",{context:t,args:[o.start,r,this,e.resourceId?this.calendar.resourceManager.getResourceById(e.resourceId):null]})},t.prototype.triggerSelect=function(e,t){var r=this.calendar.footprintToDateProfile(e);this.publiclyTrigger("select",{context:this,args:[r.start,r.end,t,this,e.resourceId?this.calendar.resourceManager.getResourceById(e.resourceId):null]})},t.prototype.triggerExternalDrop=function(e,t,r,o,n){this.publiclyTrigger("drop",{context:r[0],args:[e.dateProfile.start.clone(),o,n,e.getResourceIds()[0],this]}),t&&this.publiclyTrigger("eventReceive",{context:this,args:[e.buildInstance().toLegacy(),this]})},t}(i.Mixin);t["default"]=s,s.prototype.isResourcesRendered=!1},,,,function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2),i=r(0),s=r(21),a=r(6),l=function(e){function t(t){var r=e.call(this,t)||this;return r.isResourceFootprintsEnabled=!0,r}return o.__extends(t,e),t.prototype.renderDates=function(e){this.dateProfile=e},t.prototype.renderResources=function(e){this.registerResources(e),this.renderGrid(),this.headContainerEl&&this.processHeadResourceEls(this.headContainerEl)},t.prototype.getHitFootprint=function(t){var r=e.prototype.getHitFootprint.call(this,t);return new a["default"](r.unzonedRange,r.isAllDay,this.getColResource(t.col).id)},t.prototype.componentFootprintToSegs=function(e){for(var t=this.resourceCnt,r=this.datesAboveResources?this.sliceRangeByDay(e.unzonedRange):this.sliceRangeByRow(e.unzonedRange),o=[],i=0,s=r;i<s.length;i++)for(var l=s[i],c=0;c<t;c++){var u=this.flattenedResources[c];if(!(e instanceof a["default"])||e.resourceId===u.id){var d=n.extend({},l);d.resource=u,this.isRTL?(d.leftCol=this.indicesToCol(c,l.lastRowDayIndex),d.rightCol=this.indicesToCol(c,l.firstRowDayIndex)):(d.leftCol=this.indicesToCol(c,l.firstRowDayIndex),d.rightCol=this.indicesToCol(c,l.lastRowDayIndex)),o.push(d)}}return o},t}(i.DayGrid);t["default"]=l,s["default"].mixInto(l)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2),i=r(15),s=r(0),a=r(24),l=r(25),c=r(16),u=r(26),d=r(17),h=r(28),p=r(29),f=r(40),v=r(41),g=r(42),y=function(e){function t(t,r){var o=e.call(this,t,r)||this;return o.emphasizeWeeks=!1,o.isTimeBodyScrolled=!1,o.slotWidth=o.opt("slotWidth"),o}return o.__extends(t,e),t.prototype.normalizeComponentFootprint=function(e){var t,r,o=e.unzonedRange;if(this.isTimeScale)r=this.normalizeGridDate(o.getStart()),t=this.normalizeGridDate(o.getEnd());else{var n=this.computeDayRange(o);this.largeUnit?(r=n.start.clone().startOf(this.largeUnit),t=n.end.clone().startOf(this.largeUnit),t.isSame(n.end)&&t.isAfter(r)||t.add(this.slotDuration)):(r=n.start,t=n.end)}return new s.ComponentFootprint(new s.UnzonedRange(r,t),(!this.isTimeScale))},t.prototype.componentFootprintToSegs=function(e){var t=e.unzonedRange.getStart(),r=e.unzonedRange.getEnd(),o=this.normalizeComponentFootprint(e),n=[];if(this.computeDateSnapCoverage(t)<this.computeDateSnapCoverage(r)){var i=o.unzonedRange.intersect(this.normalizedUnzonedRange);if(i){var s=i.getStart(),a=i.getEnd();n.push({start:s,end:a,isStart:i.isStart&&this.isValidDate(s),isEnd:i.isEnd&&this.isValidDate(a.clone().subtract(1))})}}return n},t.prototype.normalizeGridDate=function(e){var t=e.clone();return this.calendar.localizeMoment(t),this.isTimeScale?t.hasTime()||t.time(0):(t=t.clone().stripTime(),this.largeUnit&&t.startOf(this.largeUnit)),t},t.prototype.isValidDate=function(e){if(this.isHiddenDay(e))return!1;if(this.isTimeScale){var t=e.time()-this.dateProfile.minTime;return t=(t%864e5+864e5)%864e5,t<this.timeWindowMs}return!0},t.prototype.updateGridDates=function(){for(var e=-1,t=0,r=[],o=[],n=this.normalizedUnzonedStart.clone();n<this.normalizedUnzonedEnd;)this.isValidDate(n)?(e++,r.push(e),o.push(t)):r.push(e+.5),n.add(this.snapDuration),t++;this.snapDiffToIndex=r,this.snapIndexToDiff=o,this.snapCnt=e+1,this.slotCnt=this.snapCnt/this.snapsPerSlot},t.prototype.renderSkeleton=function(){this.el.addClass("fc-timeline"),this.opt("eventOverlap")===!1&&this.el.addClass("fc-no-overlap"),this.el.html(this.renderSkeletonHtml()),this.timeHeadEl=this.el.find("thead .fc-time-area"),this.timeBodyEl=this.el.find("tbody .fc-time-area"),this.timeHeadScroller=new a["default"]({overflowX:"clipped-scroll",overflowY:"hidden"}),this.timeHeadScroller.canvas=new l["default"],this.timeHeadScroller.render(),this.timeHeadScroller.el.appendTo(this.timeHeadEl),this.timeBodyScroller=new a["default"],this.timeBodyScroller.canvas=new l["default"],this.timeBodyScroller.render(),this.timeBodyScroller.el.appendTo(this.timeBodyEl),this.isTimeBodyScrolled=!1,this.timeBodyScroller.on("scroll",s.proxy(this,"handleTimeBodyScrolled")),this.slatContainerEl=n('<div class="fc-slats"/>').appendTo(this.timeBodyScroller.canvas.bgEl),this.segContainerEl=n('<div class="fc-event-container"/>').appendTo(this.timeBodyScroller.canvas.contentEl),this.bgSegContainerEl=this.timeBodyScroller.canvas.bgEl,this.timeBodyBoundCache=new s.CoordCache({els:this.timeBodyScroller.canvas.el,isHorizontal:!0,isVertical:!0}),this.timeScrollJoiner=new c["default"]("horizontal",[this.timeHeadScroller,this.timeBodyScroller]),this.headDateFollower=new u["default"](this.timeHeadScroller,(!0)),this.eventTitleFollower=new u["default"](this.timeBodyScroller),this.eventTitleFollower.minTravel=50,this.isRTL?this.eventTitleFollower.containOnNaturalRight=!0:this.eventTitleFollower.containOnNaturalLeft=!0,e.prototype.renderSkeleton.call(this)},t.prototype.renderSkeletonHtml=function(){var e=this.calendar.theme;return'<table class="'+e.getClass("tableGrid")+'"> <thead class="fc-head"> <tr> <td class="fc-time-area '+e.getClass("widgetHeader")+'"></td> </tr> </thead> <tbody class="fc-body"> <tr> <td class="fc-time-area '+e.getClass("widgetContent")+'"></td> </tr> </tbody> </table>'},t.prototype.unrenderSkeleton=function(){this.handleTimeBodyScrolled(0),e.prototype.unrenderSkeleton.call(this)},t.prototype.renderDates=function(e){g.initScaleProps(this),this.timeWindowMs=e.maxTime-e.minTime,this.normalizedUnzonedStart=this.normalizeGridDate(e.renderUnzonedRange.getStart()),this.normalizedUnzonedEnd=this.normalizeGridDate(e.renderUnzonedRange.getEnd()),this.isTimeScale&&(this.normalizedUnzonedStart.add(e.minTime),this.normalizedUnzonedEnd.subtract(1,"day").add(e.maxTime)),this.normalizedUnzonedRange=new s.UnzonedRange(this.normalizedUnzonedStart,this.normalizedUnzonedEnd);var t=[],r=this.normalizedUnzonedStart.clone();for(this.calendar.localizeMoment(r);r<this.normalizedUnzonedEnd;)this.isValidDate(r)&&t.push(r.clone()),r.add(this.slotDuration);this.slotDates=t,this.updateGridDates();var o=this.renderSlatHtml();this.timeHeadScroller.canvas.contentEl.html(o.headHtml),this.timeHeadColEls=this.timeHeadScroller.canvas.contentEl.find("col"),this.slatContainerEl.html(o.bodyHtml),this.slatColEls=this.slatContainerEl.find("col"),this.slatEls=this.slatContainerEl.find("td"),this.slatCoordCache=new s.CoordCache({els:this.slatEls,isHorizontal:!0}),this.slatInnerCoordCache=new s.CoordCache({els:this.slatEls.find("> div"),isHorizontal:!0,offsetParent:this.timeBodyScroller.canvas.el});for(var n=0;n<this.slotDates.length;n++)r=this.slotDates[n],this.publiclyTrigger("dayRender",{context:this,args:[r,this.slatEls.eq(n),this]});this.headDateFollower&&this.headDateFollower.setSpriteEls(this.timeHeadEl.find("tr:not(:last-child) .fc-cell-text"))},t.prototype.unrenderDates=function(){this.headDateFollower&&this.headDateFollower.clearSprites(),this.timeHeadScroller.canvas.contentEl.empty(),this.slatContainerEl.empty(),this.timeHeadScroller.canvas.clearWidth(),this.timeBodyScroller.canvas.clearWidth()},t.prototype.renderSlatHtml=function(){for(var e,t,r,o,n=this.calendar.theme,i=this.labelInterval,a=this.headerFormats,l=a.map(function(e){return[]}),c=null,u=null,d=this.slotDates,h=[],p=a.map(function(e){return s.queryMostGranularFormatUnit(e)}),f=0,v=d;f<v.length;f++){t=v[f];for(var g=t.week(),y=this.emphasizeWeeks&&null!==u&&u!==g,m=0;m<a.length;m++){o=a[m],r=l[m],c=r[r.length-1];var R=a.length>1&&m<a.length-1,w=null;if(R){var b=t.format(o);c&&c.text===b?c.colspan+=1:w=this.buildCellObject(t,b,p[m])}else if(!c||s.isInt(s.divideRangeByDuration(this.normalizedUnzonedStart,t,i))){var b=t.format(o);w=this.buildCellObject(t,b,p[m])}else c.colspan+=1;w&&(w.weekStart=y,r.push(w))}h.push({weekStart:y}),u=g}var S=i>this.slotDuration,E=1===this.slotDuration.as("days"),C='<table class="'+n.getClass("tableGrid")+'">';C+="<colgroup>";for(var H=0,I=d;H<I.length;H++)t=I[H],C+="<col/>";C+="</colgroup>",C+="<tbody>";for(var T=0;T<l.length;T++){r=l[T];var D=T===l.length-1;C+="<tr"+(S&&D?' class="fc-chrono"':"")+">";for(var x=0,M=r;x<M.length;x++){e=M[x];var z=[n.getClass("widgetHeader")];e.weekStart&&z.push("fc-em-cell"),E&&(z=z.concat(this.getDayClasses(e.date,!0))),C+='<th class="'+z.join(" ")+'" data-date="'+e.date.format()+'"'+(e.colspan>1?' colspan="'+e.colspan+'"':"")+'><div class="fc-cell-content">'+e.spanHtml+"</div></th>"}C+="</tr>"}C+="</tbody></table>";var F='<table class="'+n.getClass("tableGrid")+'">';F+="<colgroup>";for(var _=0,B=h;_<B.length;_++)e=B[_],F+="<col/>";F+="</colgroup>",F+="<tbody><tr>";for(var T=0;T<h.length;T++)e=h[T],t=d[T],F+=this.slatCellHtml(t,e.weekStart);return F+="</tr></tbody></table>",{headHtml:C,bodyHtml:F}},t.prototype.buildCellObject=function(e,t,r){e=e.clone();var o=this.buildGotoAnchorHtml({date:e,type:r,forceOff:!r},{"class":"fc-cell-text"},s.htmlEscape(t));return{text:t,spanHtml:o,date:e,colspan:1}},t.prototype.slatCellHtml=function(e,t){var r,o=this.calendar.theme;return this.isTimeScale?(r=[],r.push(s.isInt(s.divideRangeByDuration(this.normalizedUnzonedStart,e,this.labelInterval))?"fc-major":"fc-minor")):(r=this.getDayClasses(e),r.push("fc-day")),r.unshift(o.getClass("widgetContent")),t&&r.push("fc-em-cell"),'<td class="'+r.join(" ")+'" data-date="'+e.format()+'"><div /></td>'},t.prototype.renderBusinessHours=function(t){if(!this.largeUnit)return e.prototype.renderBusinessHours.call(this,t)},t.prototype.getNowIndicatorUnit=function(){if(this.isTimeScale)return s.computeGreatestUnit(this.slotDuration)},t.prototype.renderNowIndicator=function(e){var t=[];if(e=this.normalizeGridDate(e),this.normalizedUnzonedRange.containsDate(e)){var r=this.dateToCoord(e),o=this.isRTL?{right:-r}:{left:r};t.push(n("<div class='fc-now-indicator fc-now-indicator-arrow'></div>").css(o).appendTo(this.timeHeadScroller.canvas.el)[0]),t.push(n("<div class='fc-now-indicator fc-now-indicator-line'></div>").css(o).appendTo(this.timeBodyScroller.canvas.el)[0])}this.nowIndicatorEls=n(t)},t.prototype.unrenderNowIndicator=function(){this.nowIndicatorEls&&(this.nowIndicatorEls.remove(),this.nowIndicatorEls=null)},t.prototype.updateSize=function(e,t,r){var o,n,i,s;o=t?"auto":e-this.headHeight()-this.queryMiscHeight(),this.timeBodyScroller.setHeight(o);var a=this.timeHeadColEls;if(a){var l=Math.round(this.slotWidth||(this.slotWidth=this.computeSlotWidth()));i=l*this.slotDates.length,n="",s=l;var c=this.timeBodyScroller.getClientWidth();c>i&&(n=c,i="",s=Math.floor(c/this.slotDates.length))}else i="",n="";this.timeHeadScroller.canvas.setWidth(i),this.timeHeadScroller.canvas.setMinWidth(n),this.timeBodyScroller.canvas.setWidth(i),this.timeBodyScroller.canvas.setMinWidth(n),a&&this.timeHeadColEls.slice(0,-1).add(this.slatColEls.slice(0,-1)).css("width",s),this.timeHeadScroller.updateSize(),this.timeBodyScroller.updateSize(),this.timeScrollJoiner.update(),a&&(this.buildCoords(),this.updateSegPositions(),this.updateNowIndicator()),this.headDateFollower&&this.headDateFollower.update(),this.eventTitleFollower&&this.eventTitleFollower.update()},t.prototype.queryMiscHeight=function(){return this.el.outerHeight()-this.timeHeadScroller.el.outerHeight()-this.timeBodyScroller.el.outerHeight()},t.prototype.computeSlotWidth=function(){var e=0,t=this.timeHeadEl.find("tr:last-child th .fc-cell-text");t.each(function(t,r){var o=n(r).outerWidth();return e=Math.max(e,o)});var r=e+1,o=s.divideDurationByDuration(this.labelInterval,this.slotDuration),i=Math.ceil(r/o),a=this.timeHeadColEls.eq(0).css("min-width");return a&&(a=parseInt(a,10),a&&(i=Math.max(i,a))),i},t.prototype.buildCoords=function(){this.timeBodyBoundCache.build(),this.slatCoordCache.build(),this.slatInnerCoordCache.build()},t.prototype.computeDateSnapCoverage=function(e){var t=s.divideRangeByDuration(this.normalizedUnzonedStart,e,this.snapDuration);if(t<0)return 0;if(t>=this.snapDiffToIndex.length)return this.snapCnt;var r=Math.floor(t),o=this.snapDiffToIndex[r];return s.isInt(o)?o+=t-r:o=Math.ceil(o),o},t.prototype.dateToCoord=function(e){var t=this.computeDateSnapCoverage(e),r=t/this.snapsPerSlot,o=Math.floor(r);o=Math.min(o,this.slotCnt-1);var n=r-o,i=this.slatInnerCoordCache;return this.isRTL?i.getRightPosition(o)-i.getWidth(o)*n-this.timeBodyBoundCache.getWidth(0):i.getLeftPosition(o)+i.getWidth(o)*n},t.prototype.rangeToCoords=function(e){return this.isRTL?{right:this.dateToCoord(e.start),left:this.dateToCoord(e.end)}:{left:this.dateToCoord(e.start),right:this.dateToCoord(e.end)}},t.prototype.headHeight=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=this.timeHeadScroller.canvas.contentEl.find("table");return r.height.apply(r,e)},t.prototype.updateSegPositions=function(){for(var e=[].concat(this.getEventSegs(),this.getBusinessHourSegs()),t=0,r=e;t<r.length;t++){var o=r[t],n=this.rangeToCoords(o);o.el.css({left:o.left=n.left,right:-(o.right=n.right)})}},t.prototype.handleTimeBodyScrolled=function(e){e?this.isTimeBodyScrolled||(this.isTimeBodyScrolled=!0,this.el.addClass("fc-scrolled")):this.isTimeBodyScrolled&&(this.isTimeBodyScrolled=!1,this.el.removeClass("fc-scrolled"))},t.prototype.computeInitialDateScroll=function(){var e=this.get("dateProfile").activeUnzonedRange,t=0;if(this.isTimeScale){var r=this.opt("scrollTime");r&&(r=i.duration(r),t=this.dateToCoord(e.getStart().time(r)))}return{left:t}},t.prototype.queryDateScroll=function(){return{left:this.timeBodyScroller.getScrollLeft()}},t.prototype.applyDateScroll=function(e){null!=e.left&&(this.timeHeadScroller.setScrollLeft(e.left),this.timeBodyScroller.setScrollLeft(e.left))},t.prototype.prepareHits=function(){this.buildCoords()},t.prototype.queryHit=function(e,t){var r=this.snapsPerSlot,o=this.slatCoordCache,n=this.timeBodyBoundCache;if(n.isPointInBounds(e,t)){var i=o.getHorizontalIndex(e);if(null!=i){var s=void 0,a=void 0,l=void 0,c=void 0,u=void 0,d=o.getWidth(i);if(this.isRTL){var h=o.getRightOffset(i);a=(h-e)/d,s=Math.floor(a*r),l=i*r+s,u=h-s/r*d,c=u-(s+1)/r*d}else{var p=o.getLeftOffset(i);a=(e-p)/d,s=Math.floor(a*r),l=i*r+s,c=p+s/r*d,u=p+(s+1)/r*d}return{snap:l,component:this,left:c,right:u,top:n.getTopOffset(0),bottom:n.getBottomOffset(0)}}}},t.prototype.getHitFootprint=function(e){return new s.ComponentFootprint(this.getSnapUnzonedRange(e.snap),(!this.isTimeScale))},t.prototype.getHitEl=function(e){return this.getSnapEl(e.snap)},t.prototype.getSnapUnzonedRange=function(e){var t=this.normalizedUnzonedStart.clone();t.add(s.multiplyDuration(this.snapDuration,this.snapIndexToDiff[e]));var r=t.clone().add(this.snapDuration);return new s.UnzonedRange(t,r)},t.prototype.getSnapEl=function(e){return this.slatEls.eq(Math.floor(e/this.snapsPerSlot))},t.prototype.renderEventResize=function(e,t,r){for(var o=0,n=e;o<n.length;o++){var i=n[o];this.renderHighlight(i.componentFootprint)}return this.helperRenderer.renderEventResizingFootprints(e,t,r)},t.prototype.unrenderEventResize=function(){return this.unrenderHighlight(),this.helperRenderer.unrender()},t.prototype.renderDrag=function(e,t,r){if(t)return this.helperRenderer.renderEventDraggingFootprints(e,t,r),!0;for(var o=0,n=e;o<n.length;o++){var i=n[o];this.renderHighlight(i.componentFootprint)}return!1},t.prototype.unrenderDrag=function(){return this.helperRenderer.unrender(),this.unrenderHighlight()},t}(s.View);t["default"]=y,y.prototype.usesMinMaxTime=!0,y.prototype.eventRendererClass=d["default"],y.prototype.fillRendererClass=h["default"],y.prototype.businessHourRendererClass=s.BusinessHourRenderer,y.prototype.helperRendererClass=p["default"],y.prototype.eventDraggingClass=f["default"],y.prototype.eventResizingClass=v["default"],s.StandardInteractionsMixin.mixInto(y)},function(e,t){e.exports=r},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){this.axis=e,this.scrollers=t;for(var r=0,o=this.scrollers;r<o.length;r++){var n=o[r];this.initScroller(n)}}return e.prototype.initScroller=function(e){var t=this;e.scrollEl.on("wheel mousewheel DomMouseScroll MozMousePixelScroll",function(){t.assignMasterScroller(e)}),e.on("scrollStart",function(){t.masterScroller||t.assignMasterScroller(e)}).on("scroll",function(){if(e===t.masterScroller)for(var r=0,o=t.scrollers;r<o.length;r++){var n=o[r];if(n!==e)switch(t.axis){case"horizontal":n.setNativeScrollLeft(e.getNativeScrollLeft());break;case"vertical":n.setScrollTop(e.getScrollTop())}}}).on("scrollEnd",function(){e===t.masterScroller&&t.unassignMasterScroller()})},e.prototype.assignMasterScroller=function(e){this.unassignMasterScroller(),this.masterScroller=e;for(var t=0,r=this.scrollers;t<r.length;t++){var o=r[t];o!==e&&o.disableTouchScroll()}},e.prototype.unassignMasterScroller=function(){if(this.masterScroller){for(var e=0,t=this.scrollers;e<t.length;e++){var r=t[e];r.enableTouchScroll()}this.masterScroller=null}},e.prototype.update=function(){for(var e,t,r,o=this.scrollers.map(function(e){return e.getScrollbarWidths()}),n=0,i=0,s=0,a=0,l=0,c=o;l<c.length;l++)t=c[l],n=Math.max(n,t.left),i=Math.max(i,t.right),s=Math.max(s,t.top),a=Math.max(a,t.bottom);for(r=0;r<this.scrollers.length;r++)e=this.scrollers[r],t=o[r],e.canvas.setGutters("horizontal"===this.axis?{left:n-t.left,right:i-t.right}:{top:s-t.top,bottom:a-t.bottom})},e}();t["default"]=r},function(e,t,r){function o(e){for(var t=0,r=0,o=e;r<o.length;r++){var i=o[r];t=Math.max(t,n(i))}return t}function n(e){return null==e.top&&(e.top=o(e.above)),e.top+e.height}function i(e,t){return e.left<t.right&&e.right>t.left}Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),a=r(0),l=r(27),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.__extends(t,e),t.prototype.computeDisplayEventTime=function(){return!this.view.isTimeScale},t.prototype.computeDisplayEventEnd=function(){return!1},t.prototype.computeEventTimeFormat=function(){return this.view.opt("extraSmallTimeFormat")},t.prototype.renderFgSegs=function(e){for(var t=this.view.eventTitleFollower,r=0,n=e;r<n.length;r++){var i=n[r],s=this.component.rangeToCoords(i);i.el.css({left:i.left=s.left,right:-(i.right=s.right)})}for(var a=0,c=e;a<c.length;a++){var i=c[a];i.el.appendTo(this.component.segContainerEl)}for(var u=0,d=e;u<d.length;u++){var i=d[u];i.height=i.el.outerHeight(!0)}this.buildSegLevels(e),this.component.segContainerHeight=o(e);for(var h=0,p=e;h<p.length;h++){var i=p[h];i.el.css("top",i.top)}this.component.segContainerEl.height(this.component.segContainerHeight);for(var f=0,v=e;f<v.length;f++){var i=v[f],g=i.el.find(".fc-title");g.length&&(i.scrollFollowerSprite=new l["default"](g),t.addSprite(i.scrollFollowerSprite))}},t.prototype.buildSegLevels=function(e){var t=[];this.sortEventSegs(e);for(var r=0,o=e;r<o.length;r++){var n=o[r];n.above=[];for(var s=0;s<t.length;){for(var a=!1,l=0,c=t[s];l<c.length;l++){var u=c[l];i(n,u)&&(n.above.push(u),a=!0)}if(!a)break;s+=1}for((t[s]||(t[s]=[])).push(n),s+=1;s<t.length;){for(var d=0,h=t[s];d<h.length;d++){var p=h[d];i(n,p)&&p.above.push(n)}s+=1}}return t},t.prototype.unrenderFgSegs=function(e){if(this.component.segContainerEl){for(var t=this.view.eventTitleFollower,r=0,o=e;r<o.length;r++){var n=o[r];n.scrollFollowerSprite&&t.removeSprite(n.scrollFollowerSprite)}this.component.segContainerEl.empty(),this.component.segContainerEl.height(""),this.component.segContainerHeight=null}},t.prototype.fgSegHtml=function(e,t){var r=e.footprint.eventDef,o=this.view.isEventDefDraggable(r),n=e.isStart&&this.view.isEventDefResizableFromStart(r),i=e.isEnd&&this.view.isEventDefResizableFromEnd(r),s=this.getSegClasses(e,o,n||i);s.unshift("fc-timeline-event","fc-h-event");var l=this.getTimeText(e.footprint);return'<a class="'+s.join(" ")+'" style="'+a.cssToStr(this.getSkinCss(e.footprint.eventDef))+'"'+(r.url?' href="'+a.htmlEscape(r.url)+'"':"")+'><div class="fc-content">'+(l?'<span class="fc-time">'+a.htmlEscape(l)+"</span>":"")+'<span class="fc-title">'+(r.title?a.htmlEscape(r.title):"&nbsp;")+'</span></div><div class="fc-bg" />'+(n?'<div class="fc-resizer fc-start-resizer"></div>':"")+(i?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},t}(a.EventRenderer);t["default"]=c},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2),i=r(0),s=r(44),a=function(e){function t(t){var r=e.call(this,t)||this;return r.children=[],r.depth=0,r.trHash={},r.trs=n(),r.isExpanded=r.view.opt("resourcesInitiallyExpanded"),r}return o.__extends(t,e),t.prototype.addChildRowNode=function(e,t){e.removeFromParentAndDom();var r=this.children;null!=t?r.splice(t,0,e):(t=r.length,r.push(e)),e.prevSibling=t>0?r[t-1]:null,t<r.length-1&&(r[t+1].prevSibling=e),e.parent=this,e.depth=this.depth+(this.hasOwnRow?1:0),this.descendantAdded(e)},t.prototype.removeChild=function(e){var t,r=this.children,o=!1;for(t=0;t<r.length;t++){var n=r[t];if(n===e){o=!0;break}}return!!o&&(t<r.length-1&&(r[t+1].prevSibling=e.prevSibling),r.splice(t,1),e.parent=null,e.prevSibling=null,this.descendantRemoved(e),e)},t.prototype.removeChildren=function(){for(var e=0,t=this.children;e<t.length;e++){var r=t[e];this.descendantRemoved(r)}this.children=[]},t.prototype.removeFromParentAndDom=function(){this.parent&&this.parent.removeChild(this),this.get("isInDom")&&this.removeElement()},t.prototype.getLastChild=function(){var e=this.children;return e[e.length-1]},t.prototype.getPrevRowInDom=function(){for(var e=this;e;){if(e.prevSibling){var t=void 0;for(e=e.prevSibling;t=e.getLastChild();)e=t}else e=e.parent;if(e&&e.get("isInDom")&&e.hasOwnRow)return e}return null},t.prototype.getLeadingRow=function(){return this.hasOwnRow?this:this.isExpanded&&this.children.length?this.children[0].getLeadingRow():void 0},t.prototype.getRows=function(e){void 0===e&&(e=[]),this.hasOwnRow&&e.push(this);for(var t=0,r=this.children;t<r.length;t++){var o=r[t];o.getRows(e)}return e},t.prototype.getNodes=function(e){void 0===e&&(e=[]),e.push(this);for(var t=0,r=this.children;t<r.length;t++){var o=r[t];o.getNodes(e)}return e},t.prototype.getDescendants=function(){for(var e=[],t=0,r=this.children;t<r.length;t++){var o=r[t];o.getNodes(e)}return e},t.prototype.show=function(){this.get("isInDom")||this.renderSkeleton()},t.prototype.hide=function(){this.get("isInDom")&&this.removeElement()},t.prototype.renderSkeleton=function(){this.trHash={};var e=[];if(this.hasOwnRow){var t=this.getPrevRowInDom();for(var r in this.view.tbodyHash){var o=this.view.tbodyHash[r],s=n("<tr/>");this.trHash[r]=s,e.push(s[0]);var a="render"+i.capitaliseFirstLetter(r)+"Skeleton";this[a]&&this[a](s),t?t.trHash[r].after(s):o.prepend(s)}this.trs=n(e).on("click",".fc-expander",i.proxy(this,"toggleExpanded")),this.thisRowShown()}if(this.set("isInDom",!0),this.isExpanded)for(var l=0,c=this.children;l<c.length;l++){var u=c[l];u.renderSkeleton()}},t.prototype.removeElement=function(){for(var e in this.trHash){var t=this.trHash[e],r="unrender"+i.capitaliseFirstLetter(e)+"Skeleton";this[r]&&this[r](t)}this.unset("isInDom"),this.thisRowHidden(),this.trHash={},this.trs.remove(),this.trs=n();for(var o=0,s=this.children;o<s.length;o++){var a=s[o];a.get("isInDom")&&a.removeElement()}},t.prototype.getTr=function(e){return this.trHash[e]},t.prototype.expand=function(){if(!this.isExpanded){this.isExpanded=!0,this.indicateExpanded();for(var e=0,t=this.children;e<t.length;e++){var r=t[e];r.show()}this.view.calendar.updateViewSize(),this.animateExpand()}},t.prototype.collapse=function(){if(this.isExpanded){this.isExpanded=!1,this.indicateCollapsed();for(var e=0,t=this.children;e<t.length;e++){var r=t[e];r.hide()}this.view.calendar.updateViewSize()}},t.prototype.toggleExpanded=function(){this.isExpanded?this.collapse():this.expand()},t.prototype.indicateExpanded=function(){this.trs.find(".fc-expander .fc-icon").removeClass(this.getCollapsedIcon()).addClass(this.getExpandedIcon())},t.prototype.indicateCollapsed=function(){this.trs.find(".fc-expander .fc-icon").removeClass(this.getExpandedIcon()).addClass(this.getCollapsedIcon())},t.prototype.indicateExpandingEnabled=function(){this.trs.find(".fc-expander-space").addClass("fc-expander"),this.isExpanded?this.indicateExpanded():this.indicateCollapsed()},t.prototype.indicateExpandingDisabled=function(){this.trs.find(".fc-expander-space").removeClass("fc-expander").find(".fc-icon").removeClass(this.getExpandedIcon()).removeClass(this.getCollapsedIcon())},t.prototype.updateExpandingEnabled=function(){this.hasOwnRow&&this.children.length?this.indicateExpandingEnabled():this.indicateExpandingDisabled()},t.prototype.getExpandedIcon=function(){return"fc-icon-down-triangle"},t.prototype.getCollapsedIcon=function(){var e=this.view.isRTL?"left":"right";return"fc-icon-"+e+"-triangle"},t.prototype.animateExpand=function(){var e=this.children[0],t=e&&e.getLeadingRow(),r=t&&t.trs;r&&(r.addClass("fc-collapsed"),setTimeout(function(){r.addClass("fc-transitioning"),r.removeClass("fc-collapsed")}),r.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){r.removeClass("fc-transitioning")}))},t.prototype.getMaxTrInnerHeight=function(){var e=0;return n.each(this.trHash,function(t,r){var o=s.getOwnCells(r).find("> div:not(.fc-cell-content):first");e=Math.max(o.height(),e)}),e},t.prototype.setTrInnerHeight=function(e){n.each(this.trHash,function(t,r){s.getOwnCells(r).find("> div:not(.fc-cell-content):first").height(e)})},t.prototype.descendantAdded=function(e){this.get("isInDom")&&this.hasOwnRow&&1===this.children.length&&this.indicateExpandingEnabled(),(this.parent||this.view).descendantAdded(e)},t.prototype.descendantRemoved=function(e){this.get("isInDom")&&this.hasOwnRow&&0===this.children.length&&this.indicateExpandingDisabled(),(this.parent||this.view).descendantRemoved(e)},t.prototype.thisRowShown=function(){(this.parent||this.view).descendantShown(this)},t.prototype.thisRowHidden=function(){(this.parent||this.view).descendantHidden(this)},t.prototype.descendantShown=function(e){(this.parent||this.view).descendantShown(e)},t.prototype.descendantHidden=function(e){(this.parent||this.view).descendantHidden(e)},t}(i.DateComponent);t["default"]=a,a.prototype.hasOwnRow=!1},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.extractIds=function(t,r){var o=r.opt("eventResourceField")||"resourceId",n=[];if(t.resourceIds)for(var i=0,s=t.resourceIds;i<s.length;i++){
var a=s[i];n.push(e.normalizeId(a))}return null!=t[o]&&n.push(e.normalizeId(t[o])),n},e.normalizeId=function(e){return String(e)},e}();t["default"]=r},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(0),i=r(9),s=r(13),a=r(38),l=function(e){function t(t,r){var o=e.call(this,t,r)||this;return o.initResourceView(),o}return o.__extends(t,e),t}(n.AgendaView);t["default"]=l,l.prototype.timeGridClass=a["default"],l.prototype.dayGridClass=s["default"],i["default"].mixInto(l)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2),i=r(0),s=r(6),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.mixInto=function(e){var t=this;i.Mixin.mixInto.call(this,e),["updateDayTableCols","computeColCnt","getColDayIndex","renderHeadTrHtml","renderBgCellsHtml","renderBusinessHours","allowCrossResource"].forEach(function(r){e.prototype[r]=t.prototype[r]})},t.prototype.registerResources=function(e){this.flattenedResources=this.flattenResources(e),this.resourceCnt=this.flattenedResources.length,this.updateDayTable()},t.prototype.flattenResources=function(e){var t,r=this.opt("resourceOrder");if(r){var o=i.parseFieldSpecs(r);t=function(e,t){return i.compareByFieldSpecs(e,t,o)}}else t=null;var n=[];return this.accumulateResources(e,t,n),n},t.prototype.accumulateResources=function(e,t,r){var o;t?(o=e.slice(0),o.sort(t)):o=e;for(var n=0,i=o;n<i.length;n++){var s=i[n];r.push(s),this.accumulateResources(s.children,t,r)}},t.prototype.updateDayTableCols=function(){this.datesAboveResources=this.opt("groupByDateAndResource"),i.DayTableMixin.prototype.updateDayTableCols.call(this)},t.prototype.computeColCnt=function(){return this.resourceCnt*this.daysPerRow},t.prototype.getColDayIndex=function(e){return this.isRTL&&(e=this.colCnt-1-e),this.datesAboveResources?Math.floor(e/(this.resourceCnt||1)):e%this.daysPerRow},t.prototype.getColResource=function(e){return this.flattenedResources[this.getColResourceIndex(e)]},t.prototype.getColResourceIndex=function(e){return this.isRTL&&(e=this.colCnt-1-e),this.datesAboveResources?e%(this.resourceCnt||1):Math.floor(e/this.daysPerRow)},t.prototype.indicesToCol=function(e,t){var r=this.datesAboveResources?t*(this.resourceCnt||1)+e:e*this.daysPerRow+t;return this.isRTL&&(r=this.colCnt-1-r),r},t.prototype.renderHeadTrHtml=function(){return this.daysPerRow>1?this.datesAboveResources?this.renderHeadDateAndResourceHtml():this.renderHeadResourceAndDateHtml():this.renderHeadResourceHtml()},t.prototype.renderHeadResourceHtml=function(){var e=this,t=this.flattenedResources.map(function(t){return e.renderHeadResourceCellHtml(t)});return t.length||t.push("<td>&nbsp;</td>"),this.wrapTr(t,"renderHeadIntroHtml")},t.prototype.renderHeadResourceAndDateHtml=function(){for(var e=[],t=[],r=this.daysPerRow,o=0,n=this.flattenedResources;o<n.length;o++){var i=n[o];e.push(this.renderHeadResourceCellHtml(i,null,this.daysPerRow));for(var s=0;s<r;s++){var a=this.dayDates[s].clone();t.push(this.renderHeadResourceDateCellHtml(a,i))}}return e.length||e.push("<td>&nbsp;</td>"),t.length||t.push("<td>&nbsp;</td>"),this.wrapTr(e,"renderHeadIntroHtml")+this.wrapTr(t,"renderHeadIntroHtml")},t.prototype.renderHeadDateAndResourceHtml=function(){for(var e=[],t=[],r=this.daysPerRow,o=0;o<r;o++){var n=this.dayDates[o].clone();e.push(this.renderHeadDateCellHtml(n,this.resourceCnt));for(var i=0,s=this.flattenedResources;i<s.length;i++){var a=s[i];t.push(this.renderHeadResourceCellHtml(a,n))}}return e.length||e.push("<td>&nbsp;</td>"),t.length||t.push("<td>&nbsp;</td>"),this.wrapTr(e,"renderHeadIntroHtml")+this.wrapTr(t,"renderHeadIntroHtml")},t.prototype.renderHeadResourceCellHtml=function(e,t,r){return void 0===r&&(r=1),'<th class="fc-resource-cell" data-resource-id="'+e.id+'"'+(t?' data-date="'+t.format("YYYY-MM-DD")+'"':"")+(r>1?' colspan="'+r+'"':"")+">"+i.htmlEscape(this.view.getResourceText(e))+"</th>"},t.prototype.renderHeadResourceDateCellHtml=function(e,t,r){return void 0===r&&(r=1),this.renderHeadDateCellHtml(e,r,'data-resource-id="'+t.id+'"')},t.prototype.processHeadResourceEls=function(e){var t=this;e.find(".fc-resource-cell").each(function(e,r){var o;o=t.datesAboveResources?t.getColResource(e):t.flattenedResources[t.isRTL?t.flattenedResources.length-1-e:e],t.publiclyTrigger("resourceRender",{context:o,args:[o,n(r),n(),t.view]})})},t.prototype.renderBgCellsHtml=function(e){for(var t=[],r=this.colCnt,o=0;o<r;o++){var n=this.getCellDate(e,o),i=this.getColResource(o);t.push(this.renderResourceBgCellHtml(n,i))}return t.length||t.push("<td>&nbsp;</td>"),t.join("")},t.prototype.renderResourceBgCellHtml=function(e,t){return this.renderBgCellHtml(e,'data-resource-id="'+t.id+'"')},t.prototype.wrapTr=function(e,t){return this.isRTL?(e.reverse(),"<tr>"+e.join("")+this[t]()+"</tr>"):"<tr>"+this[t]()+e.join("")+"</tr>"},t.prototype.renderBusinessHours=function(e){for(var t=this.hasAllDayBusinessHours,r=this.dateProfile.activeUnzonedRange,o=[],n=0,a=this.flattenedResources;n<a.length;n++){var l=a[n],c=(l.businessHourGenerator||e).buildEventInstanceGroup(t,r);if(c)for(var u=0,d=c.sliceRenderRanges(r);u<d.length;u++){var h=d[u];o.push(new i.EventFootprint(new s["default"](h.unzonedRange,t,l.id),h.eventDef,h.eventInstance))}}return this.businessHourRenderer.renderEventFootprints(o)},t}(i.Mixin);t["default"]=a,a.prototype.resourceCnt=0,a.prototype.datesAboveResources=!1,a.prototype.allowCrossResource=!1},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(0),i=r(9),s=r(13),a=function(e){function t(t,r){var o=e.call(this,t,r)||this;return o.initResourceView(),o}return o.__extends(t,e),t}(n.BasicView);t["default"]=a,a.prototype.dayGridClass=s["default"],i["default"].mixInto(a)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(0),i=r(9),s=r(13),a=function(e){function t(t,r){var o=e.call(this,t,r)||this;return o.initResourceView(),o}return o.__extends(t,e),t}(n.MonthView);t["default"]=a,a.prototype.dayGridClass=s["default"],i["default"].mixInto(a)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2),i=r(0),s=r(39),a=function(e){function t(t){var r=e.call(this,t)||this;return r.isHScrollbarsClipped=!1,r.isVScrollbarsClipped=!1,"clipped-scroll"===r.overflowX&&(r.overflowX="scroll",r.isHScrollbarsClipped=!0),"clipped-scroll"===r.overflowY&&(r.overflowY="scroll",r.isVScrollbarsClipped=!0),r}return o.__extends(t,e),t.prototype.renderEl=function(){var t=e.prototype.renderEl.call(this);return n('<div class="fc-scroller-clip" />').append(t)},t.prototype.updateSize=function(){var e=this.scrollEl,t=i.getScrollbarWidths(e),r={marginLeft:0,marginRight:0,marginTop:0,marginBottom:0};return this.isHScrollbarsClipped&&(r.marginTop=-t.top,r.marginBottom=-t.bottom),this.isVScrollbarsClipped&&(r.marginLeft=-t.left,r.marginRight=-t.right),e.css(r),e.toggleClass("fc-no-scrollbars",(this.isHScrollbarsClipped||"hidden"===this.overflowX)&&(this.isVScrollbarsClipped||"hidden"===this.overflowY)&&!(t.top||t.bottom||t.left||t.right))},t.prototype.getScrollbarWidths=function(){var e=i.getScrollbarWidths(this.scrollEl);return this.isHScrollbarsClipped&&(e.top=0,e.bottom=0),this.isVScrollbarsClipped&&(e.left=0,e.right=0),e},t}(s["default"]);t["default"]=a},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),n=function(){function e(){this.gutters={}}return e.prototype.render=function(){this.el=o('<div class="fc-scroller-canvas"> <div class="fc-content"></div> <div class="fc-bg"></div> </div>'),this.contentEl=this.el.find(".fc-content"),this.bgEl=this.el.find(".fc-bg")},e.prototype.setGutters=function(e){e?o.extend(this.gutters,e):this.gutters={},this.updateSize()},e.prototype.setWidth=function(e){this.width=e,this.updateSize()},e.prototype.setMinWidth=function(e){this.minWidth=e,this.updateSize()},e.prototype.clearWidth=function(){this.width=null,this.minWidth=null,this.updateSize()},e.prototype.updateSize=function(){var e=this.gutters;this.el.toggleClass("fc-gutter-left",Boolean(e.left)).toggleClass("fc-gutter-right",Boolean(e.right)).toggleClass("fc-gutter-top",Boolean(e.top)).toggleClass("fc-gutter-bottom",Boolean(e.bottom)).css({paddingLeft:e.left||"",paddingRight:e.right||"",paddingTop:e.top||"",paddingBottom:e.bottom||"",width:null!=this.width?this.width+(e.left||0)+(e.right||0):"",minWidth:null!=this.minWidth?this.minWidth+(e.left||0)+(e.right||0):""}),this.bgEl.css({left:e.left||"",right:e.right||"",top:e.top||"",bottom:e.bottom||""})},e}();t["default"]=n},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),n=r(0),i=r(27),s=function(){function e(e,t){void 0===t&&(t=!1);var r=this;this.isHFollowing=!0,this.isVFollowing=!1,this.allowPointerEvents=!1,this.containOnNaturalLeft=!1,this.containOnNaturalRight=!1,this.minTravel=0,this.allowPointerEvents=t,this.scroller=e,this.spritesById={},e.on("scroll",function(){e.isTouchedEver?(r.isTouch=!0,r.isForcedRelative=!0):(r.isTouch=!1,r.handleScroll())}),e.on("scrollEnd",function(){r.handleScroll()})}return e.prototype.setSpriteEls=function(e){var t=this;this.clearSprites(),e.each(function(e,r){t.addSprite(new i["default"](o(r)))})},e.prototype.clearSprites=function(){this.iterSprites(function(e){return e.clear()}),this.spritesById={}},e.prototype.addSprite=function(e){e.follower=this,this.spritesById[e.id]=e},e.prototype.removeSprite=function(e){e.clear(),delete this.spritesById[e.id]},e.prototype.handleScroll=function(){this.updateViewport(),this.updatePositions()},e.prototype.cacheDimensions=function(){this.updateViewport(),this.scrollbarWidths=this.scroller.getScrollbarWidths(),this.contentOffset=this.scroller.canvas.el.offset(),this.iterSprites(function(e){return e.cacheDimensions()})},e.prototype.updateViewport=function(){var e=this.scroller,t=e.getScrollFromLeft(),r=e.getScrollTop();return this.viewportRect={left:t,right:t+e.getClientWidth(),top:r,bottom:r+e.getClientHeight()}},e.prototype.forceRelative=function(){this.isForcedRelative||(this.isForcedRelative=!0,this.iterSprites(function(e){if(e.doAbsolute)return e.assignPosition()}))},e.prototype.clearForce=function(){this.isForcedRelative&&!this.isTouch&&(this.isForcedRelative=!1,this.iterSprites(function(e){return e.assignPosition()}))},e.prototype.update=function(){this.cacheDimensions(),this.updatePositions()},e.prototype.updatePositions=function(){this.iterSprites(function(e){return e.updatePosition()})},e.prototype.getContentRect=function(e){return n.getContentRect(e,this.contentOffset)},e.prototype.getBoundingRect=function(e){return n.getOuterRect(e,this.contentOffset)},e.prototype.iterSprites=function(e){for(var t in this.spritesById){var r=this.spritesById[t];e(r,t)}},e}();t["default"]=s},function(e,t,r){function o(e){return{left:e.left,right:e.right,top:e.top,bottom:e.bottom}}function n(e){return e.right-e.left}function i(e){return e.bottom-e.top}function s(e,t){return a(e,t)&&l(e,t)}function a(e,t){return t.left>=e.left&&t.right<=e.right}function l(e,t){return t.top>=e.top&&t.bottom<=e.bottom}function c(e,t){return e.left<t.left?(e.right=t.left+n(e),e.left=t.left,!0):e.right>t.right&&(e.left=t.right-n(e),e.right=t.right,!0)}function u(e,t){return e.top<t.top?(e.bottom=t.top+i(e),e.top=t.top,!0):e.bottom>t.bottom&&(e.top=t.bottom-i(e),e.bottom=t.bottom,!0)}function d(e,t){return{left:Math.min(e.left,t.left),right:Math.max(e.right,t.right),top:Math.min(e.top,t.top),bottom:Math.max(e.bottom,t.bottom)}}Object.defineProperty(t,"__esModule",{value:!0});var h=r(0),p=function(){function e(t){this.isEnabled=!0,this.isHFollowing=!1,this.isVFollowing=!1,this.doAbsolute=!1,this.isAbsolute=!1,this.isCentered=!1,this.isBlock=!1,this.el=t,this.id=String(e.uid++),this.isBlock="block"===this.el.css("display"),"relative"!==this.el.css("position")&&this.el.css("position","relative")}return e.prototype.disable=function(){this.isEnabled&&(this.isEnabled=!1,this.resetPosition(),this.unabsolutize())},e.prototype.enable=function(){this.isEnabled||(this.isEnabled=!0,this.assignPosition())},e.prototype.clear=function(){this.disable(),this.follower=null,this.absoluteEl=null},e.prototype.cacheDimensions=function(){var e=!1,t=!1,r=!1;this.naturalWidth=this.el.width(),this.resetPosition();var o=this.follower,s=this.naturalRect=o.getBoundingRect(this.el),a=this.el.parent();this.parentRect=o.getBoundingRect(a);var l=this.containerRect=d(o.getContentRect(a),s),c=o.minTravel;o.containOnNaturalLeft&&(l.left=s.left),o.containOnNaturalRight&&(l.right=s.right),o.isHFollowing&&n(l)-n(s)>=c&&(r="center"===this.el.css("text-align"),e=!0),o.isVFollowing&&i(l)-i(s)>=c&&(t=!0),this.isHFollowing=e,this.isVFollowing=t,this.isCentered=r},e.prototype.updatePosition=function(){this.computePosition(),this.assignPosition()},e.prototype.resetPosition=function(){this.el.css({top:"",left:""})},e.prototype.computePosition=function(){var e=this.follower.viewportRect,t=this.parentRect,r=this.containerRect,i=h.intersectRects(e,t),a=null,l=!1;if(i){a=o(this.naturalRect);var d=h.intersectRects(a,t);if(this.isCentered&&!s(e,t)||d&&!s(e,d)){if(l=!0,this.isHFollowing){if(this.isCentered){var p=n(a);a.left=(i.left+i.right)/2-p/2,a.right=a.left+p}else c(a,e)||(l=!1);c(a,r)&&(l=!1)}this.isVFollowing&&(u(a,e)||(l=!1),u(a,r)&&(l=!1)),s(e,a)||(l=!1)}}this.rect=a,this.doAbsolute=l},e.prototype.assignPosition=function(){if(this.isEnabled)if(this.rect)if(this.doAbsolute&&!this.follower.isForcedRelative)this.absolutize(),this.absoluteEl.css({top:this.rect.top-this.follower.viewportRect.top+this.follower.scrollbarWidths.top,left:this.rect.left-this.follower.viewportRect.left+this.follower.scrollbarWidths.left,width:this.isBlock?this.naturalWidth:""});else{var e=this.rect.top-this.naturalRect.top,t=this.rect.left-this.naturalRect.left;this.unabsolutize(),this.el.toggleClass("fc-following",Boolean(e||t)).css({top:e,left:t})}else this.unabsolutize()},e.prototype.absolutize=function(){this.isAbsolute||(this.absoluteEl||(this.absoluteEl=this.buildAbsoluteEl()),this.absoluteEl.appendTo(this.follower.scroller.el),this.el.css("visibility","hidden"),this.isAbsolute=!0)},e.prototype.unabsolutize=function(){this.isAbsolute&&(this.absoluteEl.detach(),this.el.css("visibility",""),this.isAbsolute=!1)},e.prototype.buildAbsoluteEl=function(){var e=this.el.clone().addClass("fc-following");return e.css({position:"absolute","z-index":1e3,"font-weight":this.el.css("font-weight"),"font-size":this.el.css("font-size"),"font-family":this.el.css("font-family"),"text-decoration":this.el.css("text-decoration"),color:this.el.css("color"),"padding-top":this.el.css("padding-top"),"padding-bottom":this.el.css("padding-bottom"),"padding-left":this.el.css("padding-left"),"padding-right":this.el.css("padding-right")}),this.follower.allowPointerEvents||e.css("pointer-events","none"),e},e.uid=0,e}();t["default"]=p},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2),i=r(0),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.attachSegEls=function(e,t){if(t.length){var r=void 0;r="businessHours"===e?"bgevent":e.toLowerCase();for(var o=n('<div class="fc-'+r+'-container" />').appendTo(this.component.bgSegContainerEl),i=0,s=t;i<s.length;i++){var a=s[i],l=this.component.rangeToCoords(a);a.el.css({left:a.left=l.left,right:-(a.right=l.right)}),a.el.appendTo(o)}return o}},t}(i.FillRenderer);t["default"]=s},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2),i=r(0),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.renderSegs=function(e,t){for(var r=[],o=0,i=e;o<i.length;o++){var s=i[o],a=this.component.rangeToCoords(s);s.el.css({left:s.left=a.left,right:-(s.right=a.right)}),t&&t.resourceId===(null!=this.component.resource?this.component.resource.id:void 0)?s.el.css("top",t.el.css("top")):s.el.css("top",0)}var l=n('<div class="fc-event-container fc-helper-container"/>').appendTo(this.component.innerEl);r.push(l[0]);for(var c=0,u=e;c<u.length;c++){var s=u[c];l.append(s.el)}return n(r)},t}(i.HelperRenderer);t["default"]=s},function(e,t,r){function o(e){for(var t={},r=0,o=e;r<o.length;r++){var n=o[r];(t[n.componentFootprint.resourceId]||(t[n.componentFootprint.resourceId]=[])).push(n)}return t}function n(e){for(;e;){if(!e.isExpanded)return!1;e=e.parent}return!0}Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(2),a=r(0),l=r(16),c=r(6),u=r(9),d=r(14),h=r(43),p=r(45),f=r(18),v=r(46),g=r(47),y=r(31),m=r(33),R=function(e){function t(t,r){var o=e.call(this,t,r)||this;return o.canHandleSpecificResources=!0,o.isResourceFootprintsEnabled=!0,o.nestingCnt=0,o.indiBizCnt=0,o.isIndiBizRendered=!1,o.isGenericBizRendered=!1,o.initResourceView(),o.processResourceOptions(),o.spreadsheet=new h["default"](o),o.rowHierarchy=new f["default"](o),o.rowHierarchy.isExpanded=!0,o.resourceRowHash={},o}return i.__extends(t,e),t.prototype.processResourceOptions=function(){var e=this.opt("resourceColumns")||[],t=this.opt("resourceLabelText"),r="Resources",o=null;e.length?o=t:e.push({labelText:t||r,text:this.getResourceTextFunc()});for(var n=[],i=[],s=[],l=!1,c=!1,u=0,d=e;u<d.length;u++){var h=d[u];h.group?i.push(h):n.push(h)}if(n[0].isMain=!0,i.length)s=i,l=!0;else{var p=this.opt("resourceGroupField");p&&(c=!0,s.push({field:p,text:this.opt("resourceGroupText"),render:this.opt("resourceGroupRender")}))}for(var f=a.parseFieldSpecs(this.opt("resourceOrder")),v=[],g=0,y=f;g<y.length;g++){for(var m=y[g],R=!1,w=0,b=s;w<b.length;w++){var S=b[w];if(S.field===m.field){S.order=m.order,R=!0;break}}R||v.push(m)}this.superHeaderText=o,this.isVGrouping=l,this.isHGrouping=c,this.groupSpecs=s,this.colSpecs=i.concat(n),this.orderSpecs=v},t.prototype.renderSkeleton=function(){e.prototype.renderSkeleton.call(this);var t=this.calendar.theme;this.spreadsheet.el=this.el.find("tbody .fc-resource-area"),this.spreadsheet.headEl=this.el.find("thead .fc-resource-area"),this.spreadsheet.renderSkeleton(),this.segContainerEl.remove(),this.segContainerEl=null;var r=s('<div class="fc-rows"> <table class="'+t.getClass("tableGrid")+'"> <tbody/> </table> </div>').appendTo(this.timeBodyScroller.canvas.contentEl);this.timeBodyTbodyEl=r.find("tbody"),this.tbodyHash={spreadsheet:this.spreadsheet.tbodyEl,event:this.timeBodyTbodyEl},this.resourceScrollJoiner=new l["default"]("vertical",[this.spreadsheet.bodyScroller,this.timeBodyScroller]),this.initDividerMoving()},t.prototype.renderSkeletonHtml=function(){var e=this.calendar.theme;return'<table class="'+e.getClass("tableGrid")+'"> <thead class="fc-head"> <tr> <td class="fc-resource-area '+e.getClass("widgetHeader")+'"></td> <td class="fc-divider fc-col-resizer '+e.getClass("widgetHeader")+'"></td> <td class="fc-time-area '+e.getClass("widgetHeader")+'"></td> </tr> </thead> <tbody class="fc-body"> <tr> <td class="fc-resource-area '+e.getClass("widgetContent")+'"></td> <td class="fc-divider fc-col-resizer '+e.getClass("widgetHeader")+'"></td> <td class="fc-time-area '+e.getClass("widgetContent")+'"></td> </tr> </tbody> </table>'},t.prototype.initDividerMoving=function(){var e=this,t=this.opt("resourceAreaWidth");this.dividerEls=this.el.find(".fc-divider"),this.dividerWidth=null!=t?t:this.spreadsheet.tableWidth,null!=this.dividerWidth&&this.positionDivider(this.dividerWidth),this.dividerEls.on("mousedown",function(t){e.dividerMousedown(t)})},t.prototype.dividerMousedown=function(e){var t=this,r=this.opt("isRTL"),o=30,n=this.el.width()-30,i=this.getNaturalDividerWidth(),s=new a.DragListener({dragStart:function(){t.dividerEls.addClass("fc-active")},drag:function(e,s){var a;a=r?i-e:i+e,a=Math.max(a,o),a=Math.min(a,n),t.dividerWidth=a,t.positionDivider(a),t.calendar.updateViewSize()},dragEnd:function(){t.dividerEls.removeClass("fc-active")}});s.startInteraction(e)},t.prototype.getNaturalDividerWidth=function(){return this.el.find(".fc-resource-area").width()},t.prototype.positionDivider=function(e){this.el.find(".fc-resource-area").css("width",e)},t.prototype.updateSize=function(t,r,o){var n;this.rowsNeedingHeightSync?(this.syncRowHeights(this.rowsNeedingHeightSync),this.rowsNeedingHeightSync=null):this.syncRowHeights();var i=this.syncHeadHeights();n=r?"auto":t-i-this.queryMiscHeight(),this.timeBodyScroller.setHeight(n),this.spreadsheet.bodyScroller.setHeight(n),this.spreadsheet.updateSize(),e.prototype.updateSize.call(this,t,r,o),this.resourceScrollJoiner.update()},t.prototype.queryMiscHeight=function(){return this.el.outerHeight()-Math.max(this.spreadsheet.headScroller.el.outerHeight(),this.timeHeadScroller.el.outerHeight())-Math.max(this.spreadsheet.bodyScroller.el.outerHeight(),this.timeBodyScroller.el.outerHeight())},t.prototype.syncHeadHeights=function(){this.spreadsheet.headHeight("auto"),this.headHeight("auto");var e=Math.max(this.spreadsheet.headHeight(),this.headHeight());return this.spreadsheet.headHeight(e),this.headHeight(e),e},t.prototype.queryResourceScroll=function(){for(var e={},t=this.timeBodyScroller.scrollEl.offset().top,r=0,o=this.getVisibleRows();r<o.length;r++){var n=o[r];if(n.resource){var i=n.getTr("event"),s=i.offset().top+i.outerHeight();if(s>t){e.resourceId=n.resource.id,e.bottom=s-t;break}}}return e},t.prototype.applyResourceScroll=function(e){if(e.resourceId){var t=this.getResourceRow(e.resourceId);if(t){var r=t.getTr("event");if(r){var o=this.timeBodyScroller.canvas.el.offset().top,n=r.offset().top+r.outerHeight(),i=n-e.bottom-o;this.timeBodyScroller.setScrollTop(i),this.spreadsheet.bodyScroller.setScrollTop(i)}}}},t.prototype.scrollToResource=function(e){var t=this.getResourceRow(e.id);if(t){var r=t.getTr("event");if(r){var o=this.timeBodyScroller.canvas.el.offset().top,n=r.offset().top-o;this.timeBodyScroller.setScrollTop(n),this.spreadsheet.bodyScroller.setScrollTop(n)}}},t.prototype.prepareHits=function(){var t=[];e.prototype.prepareHits.call(this),this.eventRows=this.getEventRows(),this.eventRows.forEach(function(e){e.get("isInDom")&&t.push(e)});var r=t.map(function(e){return e.getTr("event")[0]});this.shownEventRows=t,this.rowCoordCache=new a.CoordCache({els:r,isVertical:!0}),this.rowCoordCache.build()},t.prototype.releaseHits=function(){e.prototype.releaseHits.call(this),this.eventRows=null,this.shownEventRows=null,this.rowCoordCache.clear()},t.prototype.queryHit=function(t,r){var o=e.prototype.queryHit.call(this,t,r);if(o){var n=this.rowCoordCache.getVerticalIndex(r);if(null!=n)return{resourceId:this.shownEventRows[n].resource.id,snap:o.snap,component:this,left:o.left,right:o.right,top:this.rowCoordCache.getTopOffset(n),bottom:this.rowCoordCache.getBottomOffset(n)}}},t.prototype.getHitFootprint=function(t){var r=e.prototype.getHitFootprint.call(this,t);return new c["default"](r.unzonedRange,r.isAllDay,t.resourceId)},t.prototype.getHitEl=function(e){return this.getSnapEl(e.snap)},t.prototype.renderResources=function(e){for(var t=0,r=e;t<r.length;t++){var o=r[t];this.renderResource(o)}},t.prototype.unrenderResources=function(){this.rowHierarchy.removeElement(),this.rowHierarchy.removeChildren();for(var e in this.resourceRowHash)this.removeChild(this.resourceRowHash[e]);this.resourceRowHash={}},t.prototype.renderResource=function(e){this.insertResource(e)},t.prototype.unrenderResource=function(e){this.removeResource(e)},t.prototype.executeEventRender=function(e){var t,r={},o={};for(var n in e){var i=e[n],s=i.getEventDef(),a=s.getResourceIds();if(a.length)for(var l=0,c=a;l<c.length;l++){t=c[l];var u=r[t]||(r[t]={});u[n]=i}else s.hasBgRendering()&&(o[n]=i)}this.eventRenderer.render(o);for(t in r){var d=r[t],h=this.getResourceRow(t);h&&h.executeEventRender(d)}},t.prototype.renderBusinessHours=function(e){if(this.genericBiz=e,this.isIndiBizRendered=!1,this.isGenericBizRendered=!1,this.indiBizCnt){this.isIndiBizRendered=!0;for(var t=0,r=this.getEventRows();t<r.length;t++){var o=r[t];o.renderBusinessHours(o.resource.businessHourGenerator||e)}}else this.isGenericBizRendered=!0,this.businessHourRenderer.render(e)},t.prototype.updateIndiBiz=function(){(this.indiBizCnt&&this.isGenericBizRendered||!this.indiBizCnt&&this.isIndiBizRendered)&&(this.unrenderBusinessHours(),this.renderBusinessHours(this.genericBiz))},t.prototype.insertResource=function(e,t){var r=!t,o=new v["default"](this,e);t||(e.parent?t=this.getResourceRow(e.parent.id):e.parentId&&(t=this.getResourceRow(e.parentId))),t?this.insertRowAsChild(o,t):this.insertRow(o),this.addChild(o),this.resourceRowHash[e.id]=o,e.businessHourGenerator&&(this.indiBizCnt++,this.isIndiBizRendered&&(o.businessHourGenerator=e.businessHourGenerator),this.updateIndiBiz());for(var i=0,s=e.children;i<s.length;i++){var a=s[i];this.insertResource(a,o)}return r&&n(o.parent)&&o.renderSkeleton(),o},t.prototype.removeResource=function(e){var t=this.resourceRowHash[e.id];return t&&(delete this.resourceRowHash[e.id],this.removeChild(t),t.removeFromParentAndDom(),e.businessHourGenerator&&(this.indiBizCnt--,this.updateIndiBiz())),t},t.prototype.insertRow=function(e,t,r){if(void 0===t&&(t=this.rowHierarchy),void 0===r&&(r=this.groupSpecs),r.length){var o=this.ensureResourceGroup(e,t,r[0]);o instanceof g["default"]?this.insertRowAsChild(e,o):this.insertRow(e,o,r.slice(1))}else this.insertRowAsChild(e,t)},t.prototype.insertRowAsChild=function(e,t){return t.addChildRowNode(e,this.computeChildRowPosition(e,t))},t.prototype.computeChildRowPosition=function(e,t){if(this.orderSpecs.length)for(var r=0;r<t.children.length;r++){var o=t.children[r],n=this.compareResources(o.resource||{},e.resource||{});if(n>0)return r}return null},t.prototype.compareResources=function(e,t){return a.compareByFieldSpecs(e,t,this.orderSpecs)},t.prototype.ensureResourceGroup=function(e,t,r){var o,n,i=(e.resource||{})[r.field],s=null;if(r.order)for(o=0;o<t.children.length;o++){n=t.children[o];var l=a.flexibleCompare(n.groupValue,i)*r.order;if(0===l){s=n;break}if(l>0)break}else for(o=0;o<t.children.length;o++)if(n=t.children[o],n.groupValue===i){s=n;break}return s||(s=this.isVGrouping?new y["default"](this,r,i):new g["default"](this,r,i),t.addChildRowNode(s,o),s.renderSkeleton()),s},t.prototype.descendantAdded=function(e){var t=this.isNesting,r=Boolean(this.nestingCnt+=e.depth?1:0);t!==r&&(this.el.toggleClass("fc-nested",r).toggleClass("fc-flat",!r),this.isNesting=r)},t.prototype.descendantRemoved=function(e){var t=this.isNesting,r=Boolean(this.nestingCnt-=e.depth?1:0);t!==r&&(this.el.toggleClass("fc-nested",r).toggleClass("fc-flat",!r),this.isNesting=r)},t.prototype.descendantShown=function(e){(this.rowsNeedingHeightSync||(this.rowsNeedingHeightSync=[])).push(e)},t.prototype.descendantHidden=function(e){this.rowsNeedingHeightSync||(this.rowsNeedingHeightSync=[])},t.prototype.syncRowHeights=function(e,t){void 0===e&&(e=this.getVisibleRows()),void 0===t&&(t=!1);for(var r=0,o=e;r<o.length;r++){var n=o[r];n.setTrInnerHeight("")}for(var i=e.map(function(e){var r=e.getMaxTrInnerHeight();return t&&(r+=r%2),r}),s=0;s<e.length;s++){var n=e[s];n.setTrInnerHeight(i[s])}if(!t){var a=this.spreadsheet.tbodyEl.height(),l=this.timeBodyTbodyEl.height();Math.abs(a-l)>1&&this.syncRowHeights(e,!0)}},t.prototype.getVisibleRows=function(){for(var e=[],t=0,r=this.rowHierarchy.getRows();t<r.length;t++){var o=r[t];o.get("isInDom")&&e.push(o)}return e},t.prototype.getEventRows=function(){return this.rowHierarchy.getRows().filter(function(e){return e instanceof m["default"]})},t.prototype.getResourceRow=function(e){return this.resourceRowHash[e]},t.prototype.renderSelectionFootprint=function(t){if(!t.resourceId)return e.prototype.renderSelectionFootprint.call(this,t);var r=this.getResourceRow(t.resourceId);return r?r.renderSelectionFootprint(t):void 0},t.prototype.renderEventResize=function(e,t,r){var n=o(e);for(var i in n){var s=n[i],a=this.getResourceRow(i);a.helperRenderer.renderEventDraggingFootprints(s,t,r);for(var l=0,c=s;l<c.length;l++){var u=c[l];a.renderHighlight(u.componentFootprint)}}},t.prototype.unrenderEventResize=function(){for(var e=0,t=this.getEventRows();e<t.length;e++){var r=t[e];r.helperRenderer.unrender(),r.unrenderHighlight()}},t.prototype.renderDrag=function(e,t,r){var n,i,s,a=o(e);if(t){for(i in a)n=a[i],s=this.getResourceRow(i),s.helperRenderer.renderEventDraggingFootprints(n,t,r);return!0}for(i in a){n=a[i];for(var l=0,c=n;l<c.length;l++){var u=c[l];s=this.getResourceRow(i),s.renderHighlight(u.componentFootprint)}}return!1},t.prototype.unrenderDrag=function(){for(var e=0,t=this.getEventRows();e<t.length;e++){var r=t[e];r.helperRenderer.unrender(),r.unrenderHighlight()}},t}(d["default"]);t["default"]=R,R.prototype.eventRendererClass=p["default"],u["default"].mixInto(R)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2),i=r(32),s=function(e){function t(t,r,o){var n=e.call(this,t,r,o)||this;return n.rowspan=0,n}return o.__extends(t,e),t.prototype.renderRowspan=function(){var e,t=this.view.calendar.theme;this.rowspan?(this.groupTd||(this.groupTd=n('<td class="'+t.getClass("widgetContent")+'"/>').append(this.renderGroupContentEl())),this.groupTd.attr("rowspan",this.rowspan),e=this.getLeadingRow().getTr("spreadsheet"),e!==this.leadingTr&&(e&&e.prepend(this.groupTd),this.leadingTr=e)):(this.groupTd&&(this.groupTd.remove(),this.groupTd=null),this.leadingTr=null)},t.prototype.descendantShown=function(t){this.rowspan+=1,this.renderRowspan(),e.prototype.descendantShown.call(this,t)},t.prototype.descendantHidden=function(t){this.rowspan-=1,this.renderRowspan(),e.prototype.descendantHidden.call(this,t)},t}(i["default"]);t["default"]=s},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2),i=r(18),s=function(e){function t(t,r,o){var n=e.call(this,t)||this;return n.groupSpec=r,n.groupValue=o,n}return o.__extends(t,e),t.prototype.descendantRemoved=function(t){e.prototype.descendantRemoved.call(this,t),this.children.length||this.removeFromParentAndDom()},t.prototype.renderGroupContentEl=function(){var e=n('<div class="fc-cell-content" />').append(this.renderGroupTextEl()),t=this.groupSpec.render;return"function"==typeof t&&(e=t(e,this.groupValue)||e),e},t.prototype.renderGroupTextEl=function(){var e=this.groupValue||"",t=this.groupSpec.text;return"function"==typeof t&&(e=t(e)||e),n('<span class="fc-cell-text" />').text(e)},t}(i["default"]);t["default"]=s},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(0),i=r(18),s=r(28),a=r(17),l=r(29),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.renderEventSkeleton=function(e){var t=this.view.calendar.theme;e.html('<td class="'+t.getClass("widgetContent")+'"> <div> <div class="fc-event-container" /> </div> </td>'),this.segContainerEl=e.find(".fc-event-container"),this.innerEl=this.bgSegContainerEl=e.find("td > div")},t.prototype.rangeToCoords=function(e){return this.view.rangeToCoords(e)},t.prototype.componentFootprintToSegs=function(e){return this.view.componentFootprintToSegs(e)},t}(i["default"]);t["default"]=c,c.prototype.fillRendererClass=s["default"],c.prototype.eventRendererClass=a["default"],c.prototype.helperRendererClass=l["default"],c.prototype.businessHourRendererClass=n.BusinessHourRenderer,c.prototype.hasOwnRow=!0},,,function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0);r(37),r(48),r(50),r(51),r(53),r(54),r(55),r(56),r(57),r(58),r(59),r(60),r(61),r(62),r(63),r(64),r(65),r(66),r(67),r(68);var n="1.9.4";if(o.schedulerVersion=n,12!==o.internalApiVersion)throw new Error("v"+n+" of FullCalendar Scheduler is incompatible with v"+o.version+" of the core.\nPlease see http://fullcalendar.io/support/ for more information.")},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r(20),i=r(22),s=r(23),a=r(14),l=r(30);o.ResourceAgendaView=n["default"],o.ResourceBasicView=i["default"],o.ResourceMonthView=s["default"],o.TimelineView=a["default"],o.ResourceTimelineView=l["default"]},function(e,t,r){Object.defineProperty(t,"__esModule",{
value:!0});var o=r(1),n=r(2),i=r(0),s=r(21),a=r(6),l=function(e){function t(t){var r=e.call(this,t)||this;return r.isResourceFootprintsEnabled=!0,r}return o.__extends(t,e),t.prototype.renderDates=function(e){this.dateProfile=e,this.renderSlats()},t.prototype.renderResources=function(e){this.registerResources(e),this.renderColumns(),this.headContainerEl&&this.processHeadResourceEls(this.headContainerEl)},t.prototype.getHitFootprint=function(t){var r=e.prototype.getHitFootprint.call(this,t);return new a["default"](r.unzonedRange,r.isAllDay,this.getColResource(t.col).id)},t.prototype.componentFootprintToSegs=function(e){for(var t=this.resourceCnt,r=this.sliceRangeByTimes(e.unzonedRange),o=[],i=0,s=r;i<s.length;i++)for(var l=s[i],c=0;c<t;c++){var u=this.flattenedResources[c];if(!(e instanceof a["default"])||e.resourceId===u.id){var d=n.extend({},l);d.resource=u,d.col=this.indicesToCol(c,l.dayIndex),o.push(d)}}return o},t}(i.TimeGrid);t["default"]=l,s["default"].mixInto(l)},function(e,t,r){function o(){var e=i('<div style=" position: absolute; top: -1000px; width: 1px; height: 1px; overflow: scroll; direction: rtl; font-size: 100px; ">A</div>').appendTo("body"),t=e[0],r=function(){return t.scrollLeft>0?"positive":(t.scrollLeft=1,t.scrollLeft>0?"reverse":"negative")}();return e.remove(),r}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=r(2),s=r(0),a=null,l=function(e){function t(t){var r=e.call(this,t)||this;return r.isScrolling=!1,r.isTouching=!1,r.isTouchedEver=!1,r.isMoving=!1,r.isTouchScrollEnabled=!0,r.requestMovingEnd=s.debounce(r.reportMovingEnd,500),r}return n.__extends(t,e),t.prototype.render=function(){e.prototype.render.call(this),this.canvas&&(this.canvas.render(),this.canvas.el.appendTo(this.scrollEl)),this.bindHandlers()},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.unbindHandlers()},t.prototype.disableTouchScroll=function(){this.isTouchScrollEnabled=!1,this.bindPreventTouchScroll()},t.prototype.enableTouchScroll=function(){this.isTouchScrollEnabled=!0,this.isTouching||this.unbindPreventTouchScroll()},t.prototype.bindPreventTouchScroll=function(){this.preventTouchScrollHandler||this.scrollEl.on("touchmove",this.preventTouchScrollHandler=s.preventDefault)},t.prototype.unbindPreventTouchScroll=function(){this.preventTouchScrollHandler&&(this.scrollEl.off("touchmove",this.preventTouchScrollHandler),this.preventTouchScrollHandler=null)},t.prototype.bindHandlers=function(){return this.listenTo(this.scrollEl,{scroll:this.reportScroll,touchstart:this.reportTouchStart,touchend:this.reportTouchEnd})},t.prototype.unbindHandlers=function(){return this.stopListeningTo(this.scrollEl)},t.prototype.reportScroll=function(){this.isScrolling||this.reportScrollStart(),this.trigger("scroll"),this.isMoving=!0,this.requestMovingEnd()},t.prototype.reportScrollStart=function(){this.isScrolling||(this.isScrolling=!0,this.trigger("scrollStart",this.isTouching))},t.prototype.reportMovingEnd=function(){this.isMoving=!1,this.isTouching||this.reportScrollEnd()},t.prototype.reportScrollEnd=function(){this.isScrolling&&(this.trigger("scrollEnd"),this.isScrolling=!1)},t.prototype.reportTouchStart=function(){this.isTouching=!0,this.isTouchedEver=!0},t.prototype.reportTouchEnd=function(){this.isTouching&&(this.isTouching=!1,this.isTouchScrollEnabled&&this.unbindPreventTouchScroll(),this.isMoving||this.reportScrollEnd())},t.prototype.getScrollLeft=function(){var e=this.scrollEl.css("direction"),t=this.scrollEl[0],r=t.scrollLeft;if("rtl"===e)switch(a){case"positive":r=r+t.clientWidth-t.scrollWidth;break;case"reverse":r=-r}return r},t.prototype.setScrollLeft=function(e){var t=this.scrollEl.css("direction"),r=this.scrollEl[0];if("rtl"===t)switch(a){case"positive":e=e-r.clientWidth+r.scrollWidth;break;case"reverse":e=-e}r.scrollLeft=e},t.prototype.getScrollFromLeft=function(){var e=this.scrollEl.css("direction"),t=this.scrollEl[0],r=t.scrollLeft;if("rtl"===e)switch(a){case"negative":r=r-t.clientWidth+t.scrollWidth;break;case"reverse":r=-r-t.clientWidth+t.scrollWidth}return r},t.prototype.getNativeScrollLeft=function(){return this.scrollEl[0].scrollLeft},t.prototype.setNativeScrollLeft=function(e){this.scrollEl[0].scrollLeft=e},t}(s.Scroller);t["default"]=l,s.EmitterMixin.mixInto(l),s.ListenerMixin.mixInto(l),i(function(){a=o()})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.segDragStart=function(t,r){e.prototype.segDragStart.call(this,t,r),this.component.eventTitleFollower&&this.component.eventTitleFollower.forceRelative()},t.prototype.segDragStop=function(t,r){e.prototype.segDragStop.call(this,t,r),this.component.eventTitleFollower&&this.component.eventTitleFollower.clearForce()},t}(n.EventDragging);t["default"]=i},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.segResizeStart=function(t,r){if(e.prototype.segResizeStart.call(this,t,r),this.component.eventTitleFollower)return this.component.eventTitleFollower.forceRelative()},t.prototype.segResizeStop=function(t,r){if(e.prototype.segResizeStop.call(this,t,r),this.component.eventTitleFollower)return this.component.eventTitleFollower.clearForce()},t}(n.EventResizing);t["default"]=i},function(e,t,r){function o(e){e.labelInterval=n(e,"slotLabelInterval"),e.slotDuration=n(e,"slotDuration"),i(e),s(e),a(e);var t=e.opt("slotLabelFormat"),r=c.type(t);e.headerFormats="array"===r?t:"string"===r?[t]:l(e),e.isTimeScale=d.durationHasTime(e.slotDuration);var o=null;if(!e.isTimeScale){var h=d.computeGreatestUnit(e.slotDuration);/year|month|week/.test(h)&&(o=h)}e.largeUnit=o,e.emphasizeWeeks=1===e.slotDuration.as("days")&&e.currentRangeAs("weeks")>=2&&!e.opt("businessHours");var p=e.opt("snapDuration");e.snapDuration=p?u.duration(p):e.slotDuration,e.snapsPerSlot=d.divideDurationByDuration(e.slotDuration,e.snapDuration)}function n(e,t){var r=e.opt(t);if(null!=r){var o=u.duration(r);if(+o)return o}}function i(e){var t=e.dateProfile.currentUnzonedRange;if(e.labelInterval){var r=d.divideRangeByDuration(t.getStart(),t.getEnd(),e.labelInterval);r>d.MAX_TIMELINE_SLOTS&&(d.warn("slotLabelInterval results in too many cells"),e.labelInterval=null)}if(e.slotDuration){var o=d.divideRangeByDuration(t.getStart(),t.getEnd(),e.slotDuration);o>d.MAX_TIMELINE_SLOTS&&(d.warn("slotDuration results in too many cells"),e.slotDuration=null)}if(e.labelInterval&&e.slotDuration){var n=d.divideDurationByDuration(e.labelInterval,e.slotDuration);if(!d.isInt(n)||n<1)return d.warn("slotLabelInterval must be a multiple of slotDuration"),e.slotDuration=null}}function s(e){var t=e.dateProfile.currentUnzonedRange,r=e.labelInterval;if(!r){var o=void 0;if(e.slotDuration){for(var n=0,i=v;n<i.length;n++){o=i[n];var s=u.duration(o),a=d.divideDurationByDuration(s,e.slotDuration);if(d.isInt(a)&&a<=p){r=s;break}}r||(r=e.slotDuration)}else for(var l=0,c=v;l<c.length;l++){o=c[l],r=u.duration(o);var f=d.divideRangeByDuration(t.getStart(),t.getEnd(),r);if(f>=h)break}e.labelInterval=r}return r}function a(e){var t=e.dateProfile.currentUnzonedRange,r=e.slotDuration;if(!r){for(var o=s(e),n=0,i=v;n<i.length;n++){var a=i[n],l=u.duration(a),c=d.divideDurationByDuration(o,l);if(d.isInt(c)&&c>1&&c<=p){r=l;break}}if(r){var h=d.divideRangeByDuration(t.getStart(),t.getEnd(),r);h>f&&(r=null)}r||(r=o),e.slotDuration=r}return r}function l(e){var t,r,o=e.labelInterval,n=d.computeGreatestUnit(o),i=e.opt("weekNumbers"),s=t=r=null;switch("week"!==n||i||(n="day"),n){case"year":s="YYYY";break;case"month":e.currentRangeAs("years")>1&&(s="YYYY"),t="MMM";break;case"week":e.currentRangeAs("years")>1&&(s="YYYY"),t=e.opt("shortWeekFormat");break;case"day":e.currentRangeAs("years")>1?s=e.opt("monthYearFormat"):e.currentRangeAs("months")>1&&(s="MMMM"),i&&(t=e.opt("weekFormat")),r="dd D";break;case"hour":i&&(s=e.opt("weekFormat")),e.currentRangeAs("days")>1&&(t=e.opt("dayOfMonthFormat")),r=e.opt("smallTimeFormat");break;case"minute":o.asMinutes()/60>=p?(s=e.opt("hourFormat"),t="[:]mm"):s=e.opt("mediumTimeFormat");break;case"second":o.asSeconds()/60>=p?(s="LT",t="[:]ss"):s="LTS";break;case"millisecond":s="LTS",t="[.]SSS"}return[].concat(s||[],t||[],r||[])}Object.defineProperty(t,"__esModule",{value:!0});var c=r(2),u=r(15),d=r(0),h=18,p=6,f=200;d.MAX_TIMELINE_SLOTS=1e3;var v=[{years:1},{months:1},{days:1},{hours:1},{minutes:30},{minutes:15},{minutes:10},{minutes:5},{minutes:1},{seconds:30},{seconds:15},{seconds:10},{seconds:5},{seconds:1},{milliseconds:500},{milliseconds:100},{milliseconds:10},{milliseconds:1}];t.initScaleProps=o},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),n=r(0),i=r(24),s=r(25),a=r(16),l=r(26),c=r(31),u=30,d=function(){function e(e){this.colGroupHtml="",this.view=e,this.isRTL=this.view.opt("isRTL"),this.givenColWidths=this.colWidths=this.view.colSpecs.map(function(e){return e.width})}return e.prototype.renderSkeleton=function(){var e=this.view.calendar.theme;this.headScroller=new i["default"]({overflowX:"clipped-scroll",overflowY:"hidden"}),this.headScroller.canvas=new s["default"],this.headScroller.render(),this.headScroller.canvas.contentEl.html(this.renderHeadHtml()),this.headEl.append(this.headScroller.el),this.bodyScroller=new i["default"]({overflowY:"clipped-scroll"}),this.bodyScroller.canvas=new s["default"],this.bodyScroller.render(),this.bodyScroller.canvas.contentEl.html('<div class="fc-rows"> <table class="'+e.getClass("tableGrid")+'">'+this.colGroupHtml+"<tbody/> </table> </div>"),this.tbodyEl=this.bodyScroller.canvas.contentEl.find("tbody"),this.el.append(this.bodyScroller.el),this.scrollJoiner=new a["default"]("horizontal",[this.headScroller,this.bodyScroller]),this.headTable=this.headEl.find("table"),this.headColEls=this.headEl.find("col"),this.headCellEls=this.headScroller.canvas.contentEl.find("tr:last-child th"),this.bodyColEls=this.el.find("col"),this.bodyTable=this.el.find("table"),this.colMinWidths=this.computeColMinWidths(),this.applyColWidths(),this.initColResizing()},e.prototype.renderHeadHtml=function(){for(var e=this.view.calendar.theme,t=this.view.colSpecs,r='<table class="'+e.getClass("tableGrid")+'">',o="<colgroup>",i=0,s=t;i<s.length;i++){var a=s[i];o+=a.isMain?'<col class="fc-main-col"/>':"<col/>"}o+="</colgroup>",this.colGroupHtml=o,r+=o,r+="<tbody>",this.view.superHeaderText&&(r+='<tr class="fc-super"><th class="'+e.getClass("widgetHeader")+'" colspan="'+t.length+'"><div class="fc-cell-content"><span class="fc-cell-text">'+n.htmlEscape(this.view.superHeaderText)+"</span></div></th></tr>"),r+="<tr>";for(var l=0;l<t.length;l++){var a=t[l],c=l===t.length-1;r+='<th class="'+e.getClass("widgetHeader")+'"><div><div class="fc-cell-content">'+(a.isMain?'<span class="fc-expander-space"><span class="fc-icon"></span></span>':"")+'<span class="fc-cell-text">'+n.htmlEscape(a.labelText||"")+"</span></div>"+(c?"":'<div class="fc-col-resizer"></div>')+"</div></th>"}return r+="</tr>",r+="</tbody></table>"},e.prototype.initColResizing=function(){var e=this;this.headEl.find("th .fc-col-resizer").each(function(t,r){r=o(r),r.on("mousedown",function(o){e.colResizeMousedown(t,o,r)})})},e.prototype.colResizeMousedown=function(e,t,r){var o=this,i=this.colWidths=this.queryColWidths();i.pop(),i.push(null);var s=i[e],a=Math.min(this.colMinWidths[e],u),l=new n.DragListener({dragStart:function(){r.addClass("fc-active")},drag:function(t,r){var n=s+(o.isRTL?-t:t);n=Math.max(n,a),i[e]=n,o.applyColWidths()},dragEnd:function(){r.removeClass("fc-active")}});l.startInteraction(t)},e.prototype.applyColWidths=function(){for(var e,t,r,o=this.colMinWidths,n=this.colWidths,i=!0,s=!1,a=0,l=0,c=n;l<c.length;l++)r=c[l],"number"==typeof r?a+=r:(i=!1,r&&(s=!0));var u=s&&!this.view.isHGrouping?"auto":"",d=n.map(function(e){return null!=e?e:u}),h=0;for(t=0;t<d.length;t++)e=d[t],h+="number"==typeof e?e:o[t];for(t=0;t<d.length;t++)e=d[t],this.headColEls.eq(t).css("width",e),this.bodyColEls.eq(t).css("width",e);this.headScroller.canvas.setMinWidth(h),this.bodyScroller.canvas.setMinWidth(h),this.tableMinWidth=h,this.tableWidth=i?a:void 0},e.prototype.computeColMinWidths=function(){var e=this;return this.givenColWidths.map(function(t,r){return"number"==typeof t?t:parseInt(e.headColEls.eq(r).css("min-width"),10)||u})},e.prototype.queryColWidths=function(){return this.headCellEls.map(function(e,t){return o(t).outerWidth()}).get()},e.prototype.updateSize=function(){this.headScroller.updateSize(),this.bodyScroller.updateSize(),this.scrollJoiner.update(),this.updateCellFollower()},e.prototype.headHeight=function(){var e=this.headScroller.canvas.contentEl.find("table");return e.height.apply(e,arguments)},e.prototype.updateCellFollower=function(){this.cellFollower&&this.cellFollower.clearSprites(),this.cellFollower=new l["default"](this.bodyScroller,(!0)),this.cellFollower.isHFollowing=!1,this.cellFollower.isVFollowing=!0;for(var e=[],t=0,r=this.view.rowHierarchy.getNodes();t<r.length;t++){var n=r[t];if(n instanceof c["default"]&&n.groupTd){var i=n.groupTd.find(".fc-cell-content");i.length&&e.push(i[0])}}this.cellFollower.setSpriteEls(o(e)),this.cellFollower.update()},e}();t["default"]=d},function(e,t){function r(e){return e.find("> td").filter(function(e,t){return t.rowSpan<=1})}Object.defineProperty(t,"__esModule",{value:!0}),t.getOwnCells=r},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(17),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.renderFgRanges=function(e){},t.prototype.unrenderFgRanges=function(){},t}(n["default"]);t["default"]=i},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2),i=r(0),s=r(33),a=function(e){function t(t,r){var o=e.call(this,t)||this;return o.resource=r,o.eventRenderer.designatedResource=o.resource,o}return o.__extends(t,e),t.prototype.renderSkeleton=function(){e.prototype.renderSkeleton.call(this),this.updateExpandingEnabled(),this.eventsPayload&&s["default"].prototype.executeEventRender.call(this,this.eventsPayload),this.businessHourGenerator&&this.view.dateProfile&&s["default"].prototype.renderBusinessHours.call(this,this.businessHourGenerator),this.view.publiclyTrigger("resourceRender",{context:this.resource,args:[this.resource,this.getTr("spreadsheet").find("> td"),this.getTr("event").find("> td"),this.view]})},t.prototype.removeElement=function(){e.prototype.removeElement.call(this),this.eventsPayload&&s["default"].prototype.executeEventUnrender.call(this,this.eventsPayload),this.businessHourGenerator&&s["default"].prototype.unrenderBusinessHours.call(this,this.businessHourGenerator)},t.prototype.renderEventSkeleton=function(t){e.prototype.renderEventSkeleton.call(this,t),t.attr("data-resource-id",this.resource.id)},t.prototype.executeEventRender=function(t){this.eventsPayload=t,this.get("isInDom")&&e.prototype.executeEventRender.call(this,this.eventsPayload)},t.prototype.executeEventUnrender=function(){e.prototype.executeEventUnrender.call(this),this.eventsPayload=null},t.prototype.renderBusinessHours=function(t){this.businessHourGenerator=t,this.get("isInDom")&&e.prototype.renderBusinessHours.call(this,this.businessHourGenerator)},t.prototype.unrenderBusinessHours=function(){e.prototype.unrenderBusinessHours.call(this),this.businessHourGenerator=null},t.prototype.renderSpreadsheetSkeleton=function(e){for(var t=this.view.calendar.theme,r=this.resource,o=0,s=this.view.colSpecs;o<s.length;o++){var a=s[o];if(!a.group){var l=a.field?r[a.field]||null:r,c="function"==typeof a.text?a.text(r,l):l,u=n('<div class="fc-cell-content">'+(a.isMain?this.renderGutterHtml():"")+'<span class="fc-cell-text">'+(c?i.htmlEscape(c):"&nbsp;")+"</span></div>");"function"==typeof a.render&&(u=a.render(r,u,l)||u);var d=n('<td class="'+t.getClass("widgetContent")+'"/>').append(u);a.isMain&&d.wrapInner("<div/>"),e.append(d)}}e.attr("data-resource-id",r.id)},t.prototype.renderGutterHtml=function(){for(var e="",t=this.depth,r=0;r<t;r++)e+='<span class="fc-icon"/>';return e+='<span class="fc-expander-space"><span class="fc-icon"></span></span>'},t}(s["default"]);t["default"]=a},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2),i=r(32),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.renderSkeleton=function(){e.prototype.renderSkeleton.call(this),this.updateExpandingEnabled()},t.prototype.renderSpreadsheetSkeleton=function(e){var t=this.renderGroupContentEl();return t.prepend('<span class="fc-expander"><span class="fc-icon"></span></span>'),n('<td class="fc-divider" />').attr("colspan",this.view.colSpecs.length).append(n("<div/>").append(t)).appendTo(e)},t.prototype.renderEventSkeleton=function(e){return e.append('<td class="fc-divider"> <div/> </td>')},t}(i["default"]);t["default"]=s,s.prototype.hasOwnRow=!0},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),n=r(0),i=r(19),s=r(49),a=r(6),l={constructed:n.Calendar.prototype.constructed,buildSelectFootprint:n.Calendar.prototype.buildSelectFootprint};n.Calendar.defaults.refetchResourcesOnNavigate=!1,n.Calendar.defaults.filterResourcesWithEvents=!1,n.Calendar.prototype.resourceManager=null,n.Calendar.prototype.constructed=function(){l.constructed.apply(this,arguments),this.resourceManager=new s["default"](this)},n.Calendar.prototype.instantiateView=function(e){var t=this.viewSpecManager.getViewSpec(e),r=t["class"];return this.opt("resources")&&t.options.resources!==!1&&(t.queryResourceClass?r=t.queryResourceClass(t)||r:t.resourceClass&&(r=t.resourceClass)),new r(this,t)},n.Calendar.prototype.getResources=function(){return Array.prototype.slice.call(this.resourceManager.topLevelResources)},n.Calendar.prototype.addResource=function(e,t){var r=this;void 0===t&&(t=!1),this.resourceManager.addResource(e).then(function(e){if(t&&r.view.scrollToResource)return r.view.scrollToResource(e)})},n.Calendar.prototype.removeResource=function(e){return this.resourceManager.removeResource(e)},n.Calendar.prototype.refetchResources=function(){this.resourceManager.clear(),this.view.flash("initialResources")},n.Calendar.prototype.rerenderResources=function(){this.resourceManager.resetCurrentResources()},n.Calendar.prototype.buildSelectFootprint=function(e,t,r){var o=l.buildSelectFootprint.apply(this,arguments);return r?new a["default"](o.unzonedRange,o.isAllDay,r):o},n.Calendar.prototype.getResourceById=function(e){return this.resourceManager.getResourceById(e)},n.Calendar.prototype.getEventResourceId=function(e){return this.getEventResourceIds(e)[0]},n.Calendar.prototype.getEventResourceIds=function(e){var t=this.eventManager.getEventDefByUid(e._id);return t?t.getResourceIds():[]},n.Calendar.prototype.setEventResourceId=function(e,t){this.setEventResourceIds(e,t?[t]:[])},n.Calendar.prototype.setEventResourceIds=function(e,t){var r=this.eventManager.getEventDefByUid(e._id);r&&(r.resourceIds=t.map(function(e){return i["default"].normalizeId(e)}))},n.Calendar.prototype.getResourceEvents=function(e){var t=this,r="object"==typeof e?e:this.getResourceById(e);return r?this.clientEvents(function(e){return o.inArray(r.id,t.getEventResourceIds(e))!==-1}):[]},n.Calendar.prototype.getEventResource=function(e){return this.getEventResources(e)[0]},n.Calendar.prototype.getEventResources=function(e){var t="object"==typeof e?e:this.clientEvents(e)[0],r=[];if(t)for(var o=0,n=this.getEventResourceIds(t);o<n.length;o++){var i=n[o],s=this.getResourceById(i);s&&r.push(s)}return r}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2),i=r(0),s=function(e){function t(t){var r=e.call(this)||this;return r.fetchId=0,r.calendar=t,r.initializeCache(),r}return o.__extends(t,e),t.prototype.getResources=function(e,t){var r=!e&&!this.currentStart||e&&this.currentStart&&e.isSame(this.currentStart)&&t.isSame(this.currentEnd);return this.fetching&&r?this.fetching:this.fetchResources(e,t)},t.prototype.fetchResources=function(e,t){var r=this,o=this.fetchId+=1;return this.fetching=i.Promise.construct(function(n,i){r.fetchResourceInputs(function(e){return o===r.fetchId?(r.setResources(e),n(r.topLevelResources)):i()},e,t)})},t.prototype.fetchResourceInputs=function(e,r,o){var i=this,s=this.calendar,a=s.opt("resources"),l=s.opt("timezone");switch("string"===n.type(a)&&(a={url:a}),n.type(a)){case"function":this.calendar.pushLoading(),a(function(t){i.calendar.popLoading(),e(t)},r,o,s.opt("timezone"));break;case"object":s.pushLoading();var c={};r&&o&&(c[s.opt("startParam")]=r.format(),c[s.opt("endParam")]=o.format(),l&&"local"!==l&&(c[s.opt("timezoneParam")]=l)),n.ajax(n.extend({data:c},t.ajaxDefaults,a)).then(function(t){s.popLoading(),e(t)});break;case"array":e(a);break;default:e([])}},t.prototype.getResourceById=function(e){return this.resourcesById[e]},t.prototype.getFlatResources=function(){var e=[];for(var t in this.resourcesById)e.push(this.resourcesById[t]);return e},t.prototype.initializeCache=function(){this.topLevelResources=[],this.resourcesById={}},t.prototype.setResources=function(e){var t,r=this,o=Boolean(this.topLevelResources);this.initializeCache();for(var n=e.map(function(e){return r.buildResource(e)}),i=[],s=0,a=n;s<a.length;s++)t=a[s],this.addResourceToIndex(t)&&i.push(t);for(var l=0,c=i;l<c.length;l++)t=c[l],this.addResourceToTree(t);o?this.trigger("reset",this.topLevelResources):this.trigger("set",this.topLevelResources),this.calendar.publiclyTrigger("resourcesSet",[this.topLevelResources])},t.prototype.resetCurrentResources=function(){this.topLevelResources&&this.trigger("reset",this.topLevelResources)},t.prototype.clear=function(){this.topLevelResources=null,this.fetching=null},t.prototype.addResource=function(e){var t=this;return this.fetching?this.fetching.then(function(){var r=t.buildResource(e);return!!t.addResourceToIndex(r)&&(t.addResourceToTree(r),t.trigger("add",r,t.topLevelResources),r)}):i.Promise.reject()},t.prototype.addResourceToIndex=function(e){if(this.resourcesById[e.id])return!1;this.resourcesById[e.id]=e;for(var t=0,r=e.children;t<r.length;t++){var o=r[t];this.addResourceToIndex(o)}return!0},t.prototype.addResourceToTree=function(e){if(!e.parent){var t=void 0,r=String(null!=e.parentId?e.parentId:"");if(r){var o=this.resourcesById[r];if(!o)return!1;e.parent=o,t=o.children}else t=this.topLevelResources;t.push(e)}return!0},t.prototype.removeResource=function(e){var t=this,r="object"==typeof e?e.id:e;return this.fetching?this.fetching.then(function(){var e=t.removeResourceFromIndex(r);return e&&(t.removeResourceFromTree(e),t.trigger("remove",e,t.topLevelResources)),e}):i.Promise.reject()},t.prototype.removeResourceFromIndex=function(e){var t=this.resourcesById[e];if(t){delete this.resourcesById[e];for(var r=0,o=t.children;r<o.length;r++){var n=o[r];this.removeResourceFromIndex(n.id)}return t}return!1},t.prototype.removeResourceFromTree=function(e,t){void 0===t&&(t=this.topLevelResources);for(var r=0;r<t.length;r++){var o=t[r];if(o===e)return e.parent=null,t.splice(r,1),!0;if(this.removeResourceFromTree(e,o.children))return!0}return!1},t.prototype.buildResource=function(e){var r=this,o=n.extend({},e),s=e.eventClassName;return o.id=String(null!=e.id?e.id:"_fc"+t.resourceGuid++),o.eventClassName=function(){switch(n.type(s)){case"string":return s.split(/\s+/);case"array":return s;default:return[]}}(),e.businessHours&&(o.businessHourGenerator=new i.BusinessHourGenerator(e.businessHours,this.calendar)),o.children=(e.children||[]).map(function(e){var t=r.buildResource(e);return t.parent=o,t}),o},t.resourceGuid=1,t.ajaxDefaults={dataType:"json",cache:!1},t}(i.Class);t["default"]=s,i.EmitterMixin.mixInto(s)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),n=r(0),i=r(19),s=r(6),a={getPeerEventInstances:n.Constraints.prototype.getPeerEventInstances,isFootprintAllowed:n.Constraints.prototype.isFootprintAllowed,buildCurrentBusinessFootprints:n.Constraints.prototype.buildCurrentBusinessFootprints,footprintContainsFootprint:n.Constraints.prototype.footprintContainsFootprint,footprintsIntersect:n.Constraints.prototype.footprintsIntersect,eventRangeToEventFootprints:n.Constraints.prototype.eventRangeToEventFootprints,parseFootprints:n.Constraints.prototype.parseFootprints};n.Constraints.prototype.getPeerEventInstances=function(e){var t=e.getResourceIds(),r=a.getPeerEventInstances.apply(this,arguments);return t.length?r.filter(function(e){if(!e.def.resourceIds.length)return!0;for(var r=0,o=t;r<o.length;r++){var n=o[r];if(e.def.hasResourceId(n))return!0}return!1}):r},n.Constraints.prototype.isFootprintAllowed=function(e,t,r,n,l){if("object"==typeof r){var c=i["default"].extractIds(r,this);if(c.length&&(!(e instanceof s["default"])||o.inArray(e.resourceId,c)===-1))return!1}return a.isFootprintAllowed.apply(this,arguments)},n.Constraints.prototype.buildCurrentBusinessFootprints=function(e){for(var t=this._calendar.resourceManager.getFlatResources(),r=!1,o=0,n=t;o<n.length;o++){var i=n[o];i.businessHourGenerator&&(r=!0)}if(r){for(var l=this._calendar.view,c=l.get("businessHourGenerator"),u=l.dateProfile.activeUnzonedRange,d=[],h=0,p=t;h<p.length;h++){var i=p[h],f=i.businessHourGenerator||c,v=f.buildEventInstanceGroup(e,u);if(v)for(var g=0,y=v.getAllEventRanges();g<y.length;g++){var m=y[g];d.push(new s["default"](m.unzonedRange,e,i.id))}}return d}return a.buildCurrentBusinessFootprints.apply(this,arguments)},n.Constraints.prototype.footprintContainsFootprint=function(e,t){return(!(e instanceof s["default"])||t instanceof s["default"]&&t.resourceId===e.resourceId)&&a.footprintContainsFootprint.apply(this,arguments)},n.Constraints.prototype.footprintsIntersect=function(e,t){return!(e instanceof s["default"]&&t instanceof s["default"]&&e.resourceId!==t.resourceId)&&a.footprintsIntersect.apply(this,arguments)},n.Constraints.prototype.eventRangeToEventFootprints=function(e){var t=e.eventDef,r=t.getResourceIds();return r.length?r.map(function(r){return new n.EventFootprint(new s["default"](e.unzonedRange,t.isAllDay(),r),t,e.eventInstance)}):a.eventRangeToEventFootprints.apply(this,arguments)},n.Constraints.prototype.parseFootprints=function(e){var t=a.parseFootprints.apply(this,arguments),r=e.resourceIds||[];if(e.resourceId&&(r=[e.resourceId].concat(r)),r.length){for(var o=[],n=0,i=r;n<i.length;n++)for(var l=i[n],c=0,u=t;c<u.length;c++){var d=u[c];o.push(new s["default"](d.unzonedRange,d.isAllDay,l))}return o}return t}},function(e,t,r){function o(e,t){for(var r=[],n=0,i=e;n<i.length;n++){var s=i[n];if(s.children.length){var a=o(s.children,t);if(a.length||t[s.id]){var l=Object.create(s);l.children=a,r.push(l)}}else t[s.id]&&r.push(s)}return r}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i=r(52),s={setElement:n.View.prototype.setElement,removeElement:n.View.prototype.removeElement,triggerViewRender:n.View.prototype.triggerViewRender};n.View.prototype.canHandleSpecificResources=!1,n.View.prototype.setElement=function(){s.setElement.apply(this,arguments),this.watchResources()},n.View.prototype.removeElement=function(){this.unwatchResources(),s.removeElement.apply(this,arguments)},n.View.prototype.triggerViewRender=function(){i.processLicenseKey(this.opt("schedulerLicenseKey"),this.el),s.triggerViewRender.apply(this,arguments)},n.View.prototype.watchResources=function(){var e=this,t=[],r=["initialResources"];this.opt("refetchResourcesOnNavigate")&&t.push("dateProfile"),this.opt("filterResourcesWithEvents")&&r.push("currentEvents"),this.watch("initialResources",t,function(t){return e.getInitialResources(t.dateProfile)}),this.watch("bindingResources",r,function(t){e.bindResourceChanges(t.currentEvents),e.setResources(t.initialResources,t.currentEvents)},function(){e.unbindResourceChanges(),e.unsetResources()})},n.View.prototype.unwatchResources=function(){this.unwatch("initialResources"),this.unwatch("bindingResources")},n.View.prototype.getInitialResources=function(e){var t=this.calendar;return e?t.resourceManager.getResources(t.msToMoment(e.activeUnzonedRange.startMs,e.isRangeAllDay),t.msToMoment(e.activeUnzonedRange.endMs,e.isRangeAllDay)):t.resourceManager.getResources()},n.View.prototype.bindResourceChanges=function(e){var t=this;this.listenTo(this.calendar.resourceManager,{set:function(r){t.setResources(r,e)},unset:function(){t.unsetResources()},reset:function(r){t.resetResources(r,e)},add:function(r,o){t.addResource(r,o,e)},remove:function(r,o){t.removeResource(r,o,e)}})},n.View.prototype.unbindResourceChanges=function(){this.stopListeningTo(this.calendar.resourceManager)},n.View.watch("displayingEvents",["displayingDates","hasEvents","currentResources"],function(e){this.requestEventsRender(this.get("currentEvents"))},function(){this.requestEventsUnrender()}),n.View.prototype.setResources=function(e,t){t&&(e=this.filterResourcesWithEvents(e,t)),this.set("currentResources",e),this.set("hasResources",!0)},n.View.prototype.unsetResources=function(){this.unset("currentResources"),this.unset("hasResources")},n.View.prototype.resetResources=function(e,t){this.startBatchRender(),this.unsetResources(),this.setResources(e,t),this.stopBatchRender()},n.View.prototype.addResource=function(e,t,r){if(!this.canHandleSpecificResources)return void this.resetResources(t,r);if(r){var o=this.filterResourcesWithEvents([e],r);o.length||(e=null)}e&&(this.set("currentResources",t),this.handleResourceAdd(e))},n.View.prototype.removeResource=function(e,t,r){return this.canHandleSpecificResources?(this.set("currentResources",t),void this.handleResourceRemove(e)):void this.resetResources(t,r)},n.View.prototype.handleResourceAdd=function(e){},n.View.prototype.handleResourceRemove=function(e){},n.View.prototype.filterResourcesWithEvents=function(e,t){for(var r=this.eventsPayloadToRanges(t),n={},i=0,s=r;i<s.length;i++)for(var a=s[i],l=0,c=a.eventDef.getResourceIds();l<c.length;l++){var u=c[l];n[u]=!0}return o(e,n)},n.View.prototype.eventsPayloadToRanges=function(e){var t=this._getDateProfile(),r=[];for(var o in e){var n=e[o],i=n.sliceRenderRanges(t.activeUnzonedRange);r.push.apply(r,i||[])}return r}},function(e,t,r){function o(e,t){if(!i(window.location.href)&&!n(e)&&!a(t))return s('<a href="'+p+'"></a>',t)}function n(e){if(l.inArray(e,f)!==-1)return!0;var t=(e||"").match(/^(\d+)\-fcs\-(\d+)$/);if(t&&10===t[1].length){var r=c.utc(1e3*parseInt(t[2],10)),o=c.utc(u.mockSchedulerReleaseDate||d);if(o.isValid()){var n=o.clone().subtract(h);if(r.isAfter(n))return!0}}return!1}function i(e){return/\w+\:\/\/fullcalendar\.io\/|\/demos\/[\w-]+\.html$/.test(e)}function s(e,t){return t.append(l('<div class="fc-license-message" />').html(e))}function a(e){return e.find(".fc-license-message").length>=1}Object.defineProperty(t,"__esModule",{value:!0});var l=r(2),c=r(15),u=r(0),d="2018-03-27",h={years:1,weeks:1},p="http://fullcalendar.io/scheduler/license/",f=["GPL-My-Project-Is-Open-Source","CC-Attribution-NonCommercial-NoDerivatives"];t.processLicenseKey=o,t.isValidKey=n,t.isImmuneUrl=i,t.renderingWarningInContainer=s,t.detectWarningInContainer=a},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r(6),i={eventRangeToEventFootprints:o.DateComponent.prototype.eventRangeToEventFootprints};o.DateComponent.prototype.isResourceFootprintsEnabled=!1,o.DateComponent.prototype.eventRangeToEventFootprints=function(e){if(this.isResourceFootprintsEnabled){var t=e.eventDef,r=t.getResourceIds();return r.length?r.map(function(r){return new o.EventFootprint(new n["default"](e.unzonedRange,t.isAllDay(),r),t,e.eventInstance)}):t.hasBgRendering()?i.eventRangeToEventFootprints.apply(this,arguments):[]}return i.eventRangeToEventFootprints.apply(this,arguments)},o.DateComponent.prototype.renderResources=function(e){this.callChildren("renderResources",arguments)},o.DateComponent.prototype.unrenderResources=function(){
this.callChildren("unrenderResources",arguments)},o.DateComponent.prototype.renderResource=function(e){this.callChildren("renderResource",arguments)},o.DateComponent.prototype.unrenderResource=function(e){this.callChildren("unrenderResource",arguments)}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n={isEventDefDraggable:o.InteractiveDateComponent.prototype.isEventDefDraggable};o.InteractiveDateComponent.prototype.allowCrossResource=!0,o.InteractiveDateComponent.prototype.isEventDefDraggable=function(e){return this.isEventDefResourceEditable(e)||n.isEventDefDraggable.call(this,e)},o.InteractiveDateComponent.prototype.isEventDefResourceEditable=function(e){var t=e.resourceEditable;return null==t&&(t=(e.source||{}).resourceEditable,null==t&&(t=this.opt("eventResourceEditable"),null==t&&(t=this.isEventDefGenerallyEditable(e)))),t}},function(e,t,r){function o(e,t){return e.view.calendar.resourceManager.getResourceById(t)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i={getFallbackStylingObjs:n.EventRenderer.prototype.getFallbackStylingObjs};n.EventRenderer.prototype.designatedResource=null,n.EventRenderer.prototype.currentResource=null,n.EventRenderer.prototype.beforeFgSegHtml=function(e){var t=e.footprint.componentFootprint.resourceId;this.designatedResource?this.currentResource=this.designatedResource:t?this.currentResource=o(this,t):this.currentResource=null},n.EventRenderer.prototype.getFallbackStylingObjs=function(e){var t=i.getFallbackStylingObjs.apply(this,arguments);if(this.currentResource)t.unshift(this.currentResource);else{for(var r=[],n=0,s=e.getResourceIds();n<s.length;n++){var a=s[n],l=o(this,a);l&&r.push(l)}t=r.concat(t)}return t}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r(6),i={computeSelectionFootprint:o.DateSelecting.prototype.computeSelectionFootprint};o.DateSelecting.prototype.computeSelectionFootprint=function(e,t){if(e.resourceId&&t.resourceId&&e.resourceId!==t.resourceId&&!this.component.allowCrossResource)return null;var r=i.computeSelectionFootprint.apply(this,arguments);return e.resourceId&&(r=new n["default"](r.unzonedRange,r.isAllDay,e.resourceId)),r}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n={computeEventDropMutation:o.EventDragging.prototype.computeEventDropMutation};o.EventDragging.prototype.computeEventDropMutation=function(e,t,r){var i=this.component.isEventDefStartEditable(r);if(e.resourceId&&t.resourceId&&e.resourceId!==t.resourceId&&this.component.isEventDefResourceEditable(r)){var s=new o.EventDefMutation;return s.oldResourceId=e.resourceId,s.newResourceId=t.resourceId,i&&s.setDateMutation(this.computeEventDateMutation(e,t)),s}if(i)return n.computeEventDropMutation.apply(this,arguments)}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n={computeEventStartResizeMutation:o.EventResizing.prototype.computeEventStartResizeMutation,computeEventEndResizeMutation:o.EventResizing.prototype.computeEventEndResizeMutation};o.EventResizing.prototype.computeEventStartResizeMutation=function(e,t,r){return e.resourceId&&t.resourceId&&e.resourceId!==t.resourceId&&!this.component.allowCrossResource?null:n.computeEventStartResizeMutation.apply(this,arguments)},o.EventResizing.prototype.computeEventEndResizeMutation=function(e,t,r){return e.resourceId&&t.resourceId&&e.resourceId!==t.resourceId&&!this.component.allowCrossResource?null:n.computeEventEndResizeMutation.apply(this,arguments)}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n={computeExternalDrop:o.ExternalDropping.prototype.computeExternalDrop};o.ExternalDropping.prototype.computeExternalDrop=function(e,t){var r=n.computeExternalDrop.apply(this,arguments);return e.resourceId&&r.addResourceId(e.resourceId),r}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0);o.EventSource.prototype.standardPropMap.resourceEditable=!0},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),n=r(0),i=r(19),s={applyMiscProps:n.EventDef.prototype.applyMiscProps,clone:n.EventDef.prototype.clone,toLegacy:n.EventDef.prototype.toLegacy};n.EventDef.defineStandardProps({resourceEditable:!0}),n.EventDef.prototype.resourceIds=null,n.EventDef.prototype.resourceEditable=null,n.EventDef.prototype.applyMiscProps=function(e){e=o.extend({},e),this.resourceIds=i["default"].extractIds(e,this.source.calendar),delete e.resourceId,delete e.resourceIds,s.applyMiscProps.apply(this,arguments)},n.EventDef.prototype.hasResourceId=function(e){return o.inArray(e,this.resourceIds)!==-1},n.EventDef.prototype.removeResourceId=function(e){n.removeExact(this.resourceIds,e)},n.EventDef.prototype.addResourceId=function(e){this.hasResourceId(e)||this.resourceIds.push(e)},n.EventDef.prototype.getResourceIds=function(){return this.resourceIds?this.resourceIds.slice():[]},n.EventDef.prototype.clone=function(){var e=s.clone.apply(this,arguments);return e.resourceIds=this.getResourceIds(),e},n.EventDef.prototype.toLegacy=function(){var e=s.toLegacy.apply(this,arguments),t=this.getResourceIds();return e.resourceId=1===t.length?t[0]:null,e.resourceIds=t.length>1?t:null,null!=this.resourceEditable&&(e.resourceEditable=this.resourceEditable),e}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=o.EventDefMutation.prototype.mutateSingle;o.EventDefMutation.prototype.oldResourceId=null,o.EventDefMutation.prototype.newResourceId=null,o.EventDefMutation.prototype.mutateSingle=function(e){var t=n.apply(this,arguments),r=null;return this.oldResourceId&&e.hasResourceId(this.oldResourceId)&&(r=e.getResourceIds(),e.removeResourceId(this.oldResourceId),e.addResourceId(this.newResourceId)),function(){t(),r&&(e.resourceIds=r)}}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r(14);o.defineView("timeline",{"class":n["default"],defaults:{eventResizableFromStart:!0}}),o.defineView("timelineDay",{type:"timeline",duration:{days:1}}),o.defineView("timelineWeek",{type:"timeline",duration:{weeks:1}}),o.defineView("timelineMonth",{type:"timeline",duration:{months:1}}),o.defineView("timelineYear",{type:"timeline",duration:{years:1}})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r(30);o.getViewConfig("timeline").resourceClass=n["default"],o.Calendar.defaults.resourcesInitiallyExpanded=!0},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r(22),i=r(23);o.getViewConfig("basic").queryResourceClass=function(e){var t=e.options.groupByResource||e.options.groupByDateAndResource,r=!1;if(null!=t?r=t:e.duration&&(r=1===e.duration.as("days")),r)return n["default"]},o.getViewConfig("month").queryResourceClass=function(e){if(e.options.groupByResource||e.options.groupByDateAndResource)return i["default"]}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r(20);o.getViewConfig("agenda").queryResourceClass=function(e){var t=e.options.groupByResource||e.options.groupByDateAndResource,r=!1;if(null!=t?r=t:e.duration&&(r=1===e.duration.as("days")),r)return n["default"]}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}])});
/*!
 * Bootstrap v4.1.0 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,c){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function h(r){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},e=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=s[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}e=e&&e.hasOwnProperty("default")?e.default:e,c=c&&c.hasOwnProperty("default")?c.default:c;var r,n,s,a,l,u,f,d,_,g,m,p,v,E,y,T,C,I,A,D,b,S,w,N,O,k,P,L,j,R,H,W,M,x,U,K,F,V,Q,B,Y,G,q,z,X,J,Z,$,tt,et,nt,it,rt,st,ot,at,lt,ht,ct,ut,ft,dt,_t,gt,mt,pt,vt,Et,yt,Tt,Ct,It,At,Dt,bt,St,wt,Nt,Ot,kt,Pt,Lt,jt,Rt,Ht,Wt,Mt,xt,Ut,Kt,Ft,Vt,Qt,Bt,Yt,Gt,qt,zt,Xt,Jt,Zt,$t,te,ee,ne,ie,re,se,oe,ae,le,he,ce,ue,fe,de,_e,ge,me,pe,ve,Ee,ye,Te,Ce,Ie,Ae,De,be,Se,we,Ne,Oe,ke,Pe,Le,je,Re,He,We,Me,xe,Ue,Ke,Fe,Ve,Qe,Be,Ye,Ge,qe,ze,Xe,Je,Ze,$e,tn,en,nn,rn,sn,on,an,ln,hn,cn,un,fn,dn,_n,gn,mn,pn,vn,En,yn,Tn,Cn=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return 0<i(document).find(e).length?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],s=e[i],o=s&&l.isElement(s)?"element":(a=s,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(o))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+o+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e),In=(n="alert",a="."+(s="bs.alert"),l=(r=e).fn[n],u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",_="show",g=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,s),this._element=null},t._getRootElement=function(t){var e=Cn.getSelectorFromElement(t),n=!1;return e&&(n=r(e)[0]),n||(n=r(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(u.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(_),r(e).hasClass(d)){var t=Cn.getTransitionDurationFromElement(e);r(e).one(Cn.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(s);e||(e=new i(this),t.data(s,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},o(i,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),i}(),r(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),r.fn[n]=g._jQueryInterface,r.fn[n].Constructor=g,r.fn[n].noConflict=function(){return r.fn[n]=l,g._jQueryInterface},g),An=(p="button",E="."+(v="bs.button"),y=".data-api",T=(m=e).fn[p],C="active",I="btn",D='[data-toggle^="button"]',b='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+y,FOCUS_BLUR_DATA_API:(A="focus")+E+y+" blur"+E+y},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(b)[0];if(n){var i=m(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&m(this._element).hasClass(C))t=!1;else{var r=m(n).find(w)[0];r&&m(r).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!m(this._element).hasClass(C),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!m(this._element).hasClass(C)),t&&m(this._element).toggleClass(C)},t.dispose=function(){m.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(v);t||(t=new n(this),m(this).data(v,t)),"toggle"===e&&t[e]()})},o(n,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),n}(),m(document).on(O.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;m(e).hasClass(I)||(e=m(e).closest(N)),k._jQueryInterface.call(m(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,D,function(t){var e=m(t.target).closest(N)[0];m(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),m.fn[p]=k._jQueryInterface,m.fn[p].Constructor=k,m.fn[p].noConflict=function(){return m.fn[p]=T,k._jQueryInterface},k),Dn=(L="carousel",R="."+(j="bs.carousel"),H=".data-api",W=(P=e).fn[L],M={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},x={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},U="next",K="prev",F="left",V="right",Q={SLIDE:"slide"+R,SLID:"slid"+R,KEYDOWN:"keydown"+R,MOUSEENTER:"mouseenter"+R,MOUSELEAVE:"mouseleave"+R,TOUCHEND:"touchend"+R,LOAD_DATA_API:"load"+R+H,CLICK_DATA_API:"click"+R+H},B="carousel",Y="active",G="slide",q="carousel-item-right",z="carousel-item-left",X="carousel-item-next",J="carousel-item-prev",Z={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},$=function(){function s(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=P(t)[0],this._indicatorsElement=P(this._element).find(Z.INDICATORS)[0],this._addEventListeners()}var t=s.prototype;return t.next=function(){this._isSliding||this._slide(U)},t.nextWhenVisible=function(){!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(K)},t.pause=function(t){t||(this._isPaused=!0),P(this._element).find(Z.NEXT_PREV)[0]&&(Cn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=P(this._element).find(Z.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?U:K;this._slide(i,this._items[t])}},t.dispose=function(){P(this._element).off(R),P.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=h({},M,t),Cn.typeCheckConfig(L,t,x),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&P(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=P.makeArray(P(t).parent().find(Z.ITEM)),this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===U,i=t===K,r=this._getItemIndex(e),s=this._items.length-1;if((i&&0===r||n&&r===s)&&!this._config.wrap)return e;var o=(r+(t===K?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),r=P.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return P(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&P(e).addClass(Y)}},t._slide=function(t,e){var n,i,r,s=this,o=P(this._element).find(Z.ACTIVE_ITEM)[0],a=this._getItemIndex(o),l=e||o&&this._getItemByDirection(t,o),h=this._getItemIndex(l),c=Boolean(this._interval);if(t===U?(n=z,i=X,r=F):(n=q,i=J,r=V),l&&P(l).hasClass(Y))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&o&&l){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(l);var u=P.Event(Q.SLID,{relatedTarget:l,direction:r,from:a,to:h});if(P(this._element).hasClass(G)){P(l).addClass(i),Cn.reflow(l),P(o).addClass(n),P(l).addClass(n);var f=Cn.getTransitionDurationFromElement(o);P(o).one(Cn.TRANSITION_END,function(){P(l).removeClass(n+" "+i).addClass(Y),P(o).removeClass(Y+" "+i+" "+n),s._isSliding=!1,setTimeout(function(){return P(s._element).trigger(u)},0)}).emulateTransitionEnd(f)}else P(o).removeClass(Y),P(l).addClass(Y),this._isSliding=!1,P(this._element).trigger(u);c&&this.cycle()}},s._jQueryInterface=function(i){return this.each(function(){var t=P(this).data(j),e=h({},M,P(this).data());"object"==typeof i&&(e=h({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new s(this,e),P(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},s._dataApiClickHandler=function(t){var e=Cn.getSelectorFromElement(this);if(e){var n=P(e)[0];if(n&&P(n).hasClass(B)){var i=h({},P(n).data(),P(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),s._jQueryInterface.call(P(n),i),r&&P(n).data(j).to(r),t.preventDefault()}}},o(s,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return M}}]),s}(),P(document).on(Q.CLICK_DATA_API,Z.DATA_SLIDE,$._dataApiClickHandler),P(window).on(Q.LOAD_DATA_API,function(){P(Z.DATA_RIDE).each(function(){var t=P(this);$._jQueryInterface.call(t,t.data())})}),P.fn[L]=$._jQueryInterface,P.fn[L].Constructor=$,P.fn[L].noConflict=function(){return P.fn[L]=W,$._jQueryInterface},$),bn=(et="collapse",it="."+(nt="bs.collapse"),rt=(tt=e).fn[et],st={toggle:!0,parent:""},ot={toggle:"boolean",parent:"(string|element)"},at={SHOW:"show"+it,SHOWN:"shown"+it,HIDE:"hide"+it,HIDDEN:"hidden"+it,CLICK_DATA_API:"click"+it+".data-api"},lt="show",ht="collapse",ct="collapsing",ut="collapsed",ft="width",dt="height",_t={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},gt=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=tt.makeArray(tt('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=tt(_t.DATA_TOGGLE),i=0;i<n.length;i++){var r=n[i],s=Cn.getSelectorFromElement(r);null!==s&&0<tt(s).filter(t).length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){tt(this._element).hasClass(lt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!tt(this._element).hasClass(lt)&&(this._parent&&0===(t=tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(e=tt(t).not(this._selector).data(nt))&&e._isTransitioning))){var i=tt.Event(at.SHOW);if(tt(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(tt(t).not(this._selector),"hide"),e||tt(t).data(nt,null));var r=this._getDimension();tt(this._element).removeClass(ht).addClass(ct),(this._element.style[r]=0)<this._triggerArray.length&&tt(this._triggerArray).removeClass(ut).attr("aria-expanded",!0),this.setTransitioning(!0);var s="scroll"+(r[0].toUpperCase()+r.slice(1)),o=Cn.getTransitionDurationFromElement(this._element);tt(this._element).one(Cn.TRANSITION_END,function(){tt(n._element).removeClass(ct).addClass(ht).addClass(lt),n._element.style[r]="",n.setTransitioning(!1),tt(n._element).trigger(at.SHOWN)}).emulateTransitionEnd(o),this._element.style[r]=this._element[s]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&tt(this._element).hasClass(lt)){var e=tt.Event(at.HIDE);if(tt(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Cn.reflow(this._element),tt(this._element).addClass(ct).removeClass(ht).removeClass(lt),0<this._triggerArray.length)for(var i=0;i<this._triggerArray.length;i++){var r=this._triggerArray[i],s=Cn.getSelectorFromElement(r);if(null!==s)tt(s).hasClass(lt)||tt(r).addClass(ut).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var o=Cn.getTransitionDurationFromElement(this._element);tt(this._element).one(Cn.TRANSITION_END,function(){t.setTransitioning(!1),tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN)}).emulateTransitionEnd(o)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){tt.removeData(this._element,nt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=h({},st,t)).toggle=Boolean(t.toggle),Cn.typeCheckConfig(et,t,ot),t},t._getDimension=function(){return tt(this._element).hasClass(ft)?ft:dt},t._getParent=function(){var n=this,t=null;Cn.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=tt(this._config.parent)[0];var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return tt(t).find(e).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=tt(t).hasClass(lt);0<e.length&&tt(e).toggleClass(ut,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=Cn.getSelectorFromElement(t);return e?tt(e)[0]:null},a._jQueryInterface=function(i){return this.each(function(){var t=tt(this),e=t.data(nt),n=h({},st,t.data(),"object"==typeof i&&i);if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(nt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return st}}]),a}(),tt(document).on(at.CLICK_DATA_API,_t.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=tt(this),e=Cn.getSelectorFromElement(this);tt(e).each(function(){var t=tt(this),e=t.data(nt)?"toggle":n.data();gt._jQueryInterface.call(t,e)})}),tt.fn[et]=gt._jQueryInterface,tt.fn[et].Constructor=gt,tt.fn[et].noConflict=function(){return tt.fn[et]=rt,gt._jQueryInterface},gt),Sn=(pt="dropdown",Et="."+(vt="bs.dropdown"),yt=".data-api",Tt=(mt=e).fn[pt],Ct=new RegExp("38|40|27"),It={HIDE:"hide"+Et,HIDDEN:"hidden"+Et,SHOW:"show"+Et,SHOWN:"shown"+Et,CLICK:"click"+Et,CLICK_DATA_API:"click"+Et+yt,KEYDOWN_DATA_API:"keydown"+Et+yt,KEYUP_DATA_API:"keyup"+Et+yt},At="disabled",Dt="show",bt="dropup",St="dropright",wt="dropleft",Nt="dropdown-menu-right",Ot="position-static",kt='[data-toggle="dropdown"]',Pt=".dropdown form",Lt=".dropdown-menu",jt=".navbar-nav",Rt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ht="top-start",Wt="top-end",Mt="bottom-start",xt="bottom-end",Ut="right-start",Kt="left-start",Ft={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Vt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Qt=function(){function l(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=l.prototype;return t.toggle=function(){if(!this._element.disabled&&!mt(this._element).hasClass(At)){var t=l._getParentFromElement(this._element),e=mt(this._menu).hasClass(Dt);if(l._clearMenus(),!e){var n={relatedTarget:this._element},i=mt.Event(It.SHOW,n);if(mt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof c)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:Cn.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&mt(t).addClass(Ot),this._popper=new c(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===mt(t).closest(jt).length&&mt(document.body).children().on("mouseover",null,mt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),mt(this._menu).toggleClass(Dt),mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN,n))}}}},t.dispose=function(){mt.removeData(this._element,vt),mt(this._element).off(Et),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;mt(this._element).on(It.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=h({},this.constructor.Default,mt(this._element).data(),t),Cn.typeCheckConfig(pt,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element);this._menu=mt(t).find(Lt)[0]}return this._menu},t._getPlacement=function(){var t=mt(this._element).parent(),e=Mt;return t.hasClass(bt)?(e=Ht,mt(this._menu).hasClass(Nt)&&(e=Wt)):t.hasClass(St)?e=Ut:t.hasClass(wt)?e=Kt:mt(this._menu).hasClass(Nt)&&(e=xt),e},t._detectNavbar=function(){return 0<mt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=h({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},l._jQueryInterface=function(e){return this.each(function(){var t=mt(this).data(vt);if(t||(t=new l(this,"object"==typeof e?e:null),mt(this).data(vt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=mt.makeArray(mt(kt)),n=0;n<e.length;n++){var i=l._getParentFromElement(e[n]),r=mt(e[n]).data(vt),s={relatedTarget:e[n]};if(r){var o=r._menu;if(mt(i).hasClass(Dt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&mt.contains(i,t.target))){var a=mt.Event(It.HIDE,s);mt(i).trigger(a),a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&mt(document.body).children().off("mouseover",null,mt.noop),e[n].setAttribute("aria-expanded","false"),mt(o).removeClass(Dt),mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN,s)))}}}},l._getParentFromElement=function(t){var e,n=Cn.getSelectorFromElement(t);return n&&(e=mt(n)[0]),e||t.parentNode},l._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||mt(t.target).closest(Lt).length)):Ct.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!mt(this).hasClass(At))){var e=l._getParentFromElement(this),n=mt(e).hasClass(Dt);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=mt(e).find(Rt).get();if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var s=mt(e).find(kt)[0];mt(s).trigger("focus")}mt(this).trigger("click")}}},o(l,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return Ft}},{key:"DefaultType",get:function(){return Vt}}]),l}(),mt(document).on(It.KEYDOWN_DATA_API,kt,Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API,Lt,Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API+" "+It.KEYUP_DATA_API,Qt._clearMenus).on(It.CLICK_DATA_API,kt,function(t){t.preventDefault(),t.stopPropagation(),Qt._jQueryInterface.call(mt(this),"toggle")}).on(It.CLICK_DATA_API,Pt,function(t){t.stopPropagation()}),mt.fn[pt]=Qt._jQueryInterface,mt.fn[pt].Constructor=Qt,mt.fn[pt].noConflict=function(){return mt.fn[pt]=Tt,Qt._jQueryInterface},Qt),wn=(Yt="modal",qt="."+(Gt="bs.modal"),zt=(Bt=e).fn[Yt],Xt={backdrop:!0,keyboard:!0,focus:!0,show:!0},Jt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Zt={HIDE:"hide"+qt,HIDDEN:"hidden"+qt,SHOW:"show"+qt,SHOWN:"shown"+qt,FOCUSIN:"focusin"+qt,RESIZE:"resize"+qt,CLICK_DISMISS:"click.dismiss"+qt,KEYDOWN_DISMISS:"keydown.dismiss"+qt,MOUSEUP_DISMISS:"mouseup.dismiss"+qt,MOUSEDOWN_DISMISS:"mousedown.dismiss"+qt,CLICK_DATA_API:"click"+qt+".data-api"},$t="modal-scrollbar-measure",te="modal-backdrop",ee="modal-open",ne="fade",ie="show",re={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},se=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=Bt(t).find(re.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){Bt(this._element).hasClass(ne)&&(this._isTransitioning=!0);var n=Bt.Event(Zt.SHOW,{relatedTarget:t});Bt(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),Bt(document.body).addClass(ee),this._setEscapeEvent(),this._setResizeEvent(),Bt(this._element).on(Zt.CLICK_DISMISS,re.DATA_DISMISS,function(t){return e.hide(t)}),Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS,function(){Bt(e._element).one(Zt.MOUSEUP_DISMISS,function(t){Bt(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=Bt.Event(Zt.HIDE);if(Bt(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=Bt(this._element).hasClass(ne);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),Bt(document).off(Zt.FOCUSIN),Bt(this._element).removeClass(ie),Bt(this._element).off(Zt.CLICK_DISMISS),Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS),i){var r=Cn.getTransitionDurationFromElement(this._element);Bt(this._element).one(Cn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){Bt.removeData(this._element,Gt),Bt(window,document,this._element,this._backdrop).off(qt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=h({},Xt,t),Cn.typeCheckConfig(Yt,t,Jt),t},t._showElement=function(t){var e=this,n=Bt(this._element).hasClass(ne);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Cn.reflow(this._element),Bt(this._element).addClass(ie),this._config.focus&&this._enforceFocus();var i=Bt.Event(Zt.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,Bt(e._element).trigger(i)};if(n){var s=Cn.getTransitionDurationFromElement(this._element);Bt(this._dialog).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r()},t._enforceFocus=function(){var e=this;Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===Bt(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?Bt(this._element).on(Zt.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||Bt(this._element).off(Zt.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?Bt(window).on(Zt.RESIZE,function(t){return e.handleUpdate(t)}):Bt(window).off(Zt.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){Bt(document.body).removeClass(ee),t._resetAdjustments(),t._resetScrollbar(),Bt(t._element).trigger(Zt.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(Bt(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=Bt(this._element).hasClass(ne)?ne:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=te,n&&Bt(this._backdrop).addClass(n),Bt(this._backdrop).appendTo(document.body),Bt(this._element).on(Zt.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&Cn.reflow(this._backdrop),Bt(this._backdrop).addClass(ie),!t)return;if(!n)return void t();var i=Cn.getTransitionDurationFromElement(this._backdrop);Bt(this._backdrop).one(Cn.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){Bt(this._backdrop).removeClass(ie);var r=function(){e._removeBackdrop(),t&&t()};if(Bt(this._element).hasClass(ne)){var s=Cn.getTransitionDurationFromElement(this._backdrop);Bt(this._backdrop).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){Bt(re.FIXED_CONTENT).each(function(t,e){var n=Bt(e)[0].style.paddingRight,i=Bt(e).css("padding-right");Bt(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),Bt(re.STICKY_CONTENT).each(function(t,e){var n=Bt(e)[0].style.marginRight,i=Bt(e).css("margin-right");Bt(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")}),Bt(re.NAVBAR_TOGGLER).each(function(t,e){var n=Bt(e)[0].style.marginRight,i=Bt(e).css("margin-right");Bt(e).data("margin-right",n).css("margin-right",parseFloat(i)+r._scrollbarWidth+"px")});var t=document.body.style.paddingRight,e=Bt(document.body).css("padding-right");Bt(document.body).data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){Bt(re.FIXED_CONTENT).each(function(t,e){var n=Bt(e).data("padding-right");"undefined"!=typeof n&&Bt(e).css("padding-right",n).removeData("padding-right")}),Bt(re.STICKY_CONTENT+", "+re.NAVBAR_TOGGLER).each(function(t,e){var n=Bt(e).data("margin-right");"undefined"!=typeof n&&Bt(e).css("margin-right",n).removeData("margin-right")});var t=Bt(document.body).data("padding-right");"undefined"!=typeof t&&Bt(document.body).css("padding-right",t).removeData("padding-right")},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=$t,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=Bt(this).data(Gt),e=h({},r.Default,Bt(this).data(),"object"==typeof n&&n);if(t||(t=new r(this,e),Bt(this).data(Gt,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},o(r,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return Xt}}]),r}(),Bt(document).on(Zt.CLICK_DATA_API,re.DATA_TOGGLE,function(t){var e,n=this,i=Cn.getSelectorFromElement(this);i&&(e=Bt(i)[0]);var r=Bt(e).data(Gt)?"toggle":h({},Bt(e).data(),Bt(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=Bt(e).one(Zt.SHOW,function(t){t.isDefaultPrevented()||s.one(Zt.HIDDEN,function(){Bt(n).is(":visible")&&n.focus()})});se._jQueryInterface.call(Bt(e),r,this)}),Bt.fn[Yt]=se._jQueryInterface,Bt.fn[Yt].Constructor=se,Bt.fn[Yt].noConflict=function(){return Bt.fn[Yt]=zt,se._jQueryInterface},se),Nn=(ae="tooltip",he="."+(le="bs.tooltip"),ce=(oe=e).fn[ae],ue="bs-tooltip",fe=new RegExp("(^|\\s)"+ue+"\\S+","g"),ge={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(_e={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(de={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},pe="out",ve={HIDE:"hide"+he,HIDDEN:"hidden"+he,SHOW:(me="show")+he,SHOWN:"shown"+he,INSERTED:"inserted"+he,CLICK:"click"+he,FOCUSIN:"focusin"+he,FOCUSOUT:"focusout"+he,MOUSEENTER:"mouseenter"+he,MOUSELEAVE:"mouseleave"+he},Ee="fade",ye="show",Te=".tooltip-inner",Ce=".arrow",Ie="hover",Ae="focus",De="click",be="manual",Se=function(){function i(t,e){if("undefined"==typeof c)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=oe(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(oe(this.getTipElement()).hasClass(ye))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),oe.removeData(this.element,this.constructor.DATA_KEY),oe(this.element).off(this.constructor.EVENT_KEY),oe(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&oe(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===oe(this.element).css("display"))throw new Error("Please use show on visible elements");var t=oe.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){oe(this.element).trigger(t);var n=oe.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=Cn.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&oe(i).addClass(Ee);var s="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,o=this._getAttachment(s);this.addAttachmentClass(o);var a=!1===this.config.container?document.body:oe(this.config.container);oe(i).data(this.constructor.DATA_KEY,this),oe.contains(this.element.ownerDocument.documentElement,this.tip)||oe(i).appendTo(a),oe(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new c(this.element,i,{placement:o,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Ce},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),oe(i).addClass(ye),"ontouchstart"in document.documentElement&&oe(document.body).children().on("mouseover",null,oe.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,oe(e.element).trigger(e.constructor.Event.SHOWN),t===pe&&e._leave(null,e)};if(oe(this.tip).hasClass(Ee)){var h=Cn.getTransitionDurationFromElement(this.tip);oe(this.tip).one(Cn.TRANSITION_END,l).emulateTransitionEnd(h)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=oe.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==me&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),oe(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(oe(this.element).trigger(i),!i.isDefaultPrevented()){if(oe(n).removeClass(ye),"ontouchstart"in document.documentElement&&oe(document.body).children().off("mouseover",null,oe.noop),this._activeTrigger[De]=!1,this._activeTrigger[Ae]=!1,this._activeTrigger[Ie]=!1,oe(this.tip).hasClass(Ee)){var s=Cn.getTransitionDurationFromElement(n);oe(n).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){oe(this.getTipElement()).addClass(ue+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||oe(this.config.template)[0],this.tip},t.setContent=function(){var t=oe(this.getTipElement());this.setElementContent(t.find(Te),this.getTitle()),t.removeClass(Ee+" "+ye)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?oe(e).parent().is(t)||t.empty().append(e):t.text(oe(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return _e[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)oe(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==be){var e=t===Ie?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Ie?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;oe(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}oe(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=h({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||oe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Ae:Ie]=!0),oe(e.getTipElement()).hasClass(ye)||e._hoverState===me?e._hoverState=me:(clearTimeout(e._timeout),e._hoverState=me,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===me&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||oe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Ae:Ie]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=pe,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===pe&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=h({},this.constructor.Default,oe(this.element).data(),t)).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),Cn.typeCheckConfig(ae,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=oe(this.getTipElement()),e=t.attr("class").match(fe);null!==e&&0<e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(oe(t).removeClass(Ee),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=oe(this).data(le),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),oe(this).data(le,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return ge}},{key:"NAME",get:function(){return ae}},{key:"DATA_KEY",get:function(){return le}},{key:"Event",get:function(){return ve}},{key:"EVENT_KEY",get:function(){return he}},{key:"DefaultType",get:function(){return de}}]),i}(),oe.fn[ae]=Se._jQueryInterface,oe.fn[ae].Constructor=Se,oe.fn[ae].noConflict=function(){return oe.fn[ae]=ce,Se._jQueryInterface},Se),On=(Ne="popover",ke="."+(Oe="bs.popover"),Pe=(we=e).fn[Ne],Le="bs-popover",je=new RegExp("(^|\\s)"+Le+"\\S+","g"),Re=h({},Nn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),He=h({},Nn.DefaultType,{content:"(string|element|function)"}),We="fade",xe=".popover-header",Ue=".popover-body",Ke={HIDE:"hide"+ke,HIDDEN:"hidden"+ke,SHOW:(Me="show")+ke,SHOWN:"shown"+ke,INSERTED:"inserted"+ke,CLICK:"click"+ke,FOCUSIN:"focusin"+ke,FOCUSOUT:"focusout"+ke,MOUSEENTER:"mouseenter"+ke,MOUSELEAVE:"mouseleave"+ke},Fe=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){we(this.getTipElement()).addClass(Le+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||we(this.config.template)[0],this.tip},r.setContent=function(){var t=we(this.getTipElement());this.setElementContent(t.find(xe),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Ue),e),t.removeClass(We+" "+Me)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=we(this.getTipElement()),e=t.attr("class").match(je);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=we(this).data(Oe),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),we(this).data(Oe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return Re}},{key:"NAME",get:function(){return Ne}},{key:"DATA_KEY",get:function(){return Oe}},{key:"Event",get:function(){return Ke}},{key:"EVENT_KEY",get:function(){return ke}},{key:"DefaultType",get:function(){return He}}]),i}(Nn),we.fn[Ne]=Fe._jQueryInterface,we.fn[Ne].Constructor=Fe,we.fn[Ne].noConflict=function(){return we.fn[Ne]=Pe,Fe._jQueryInterface},Fe),kn=(Qe="scrollspy",Ye="."+(Be="bs.scrollspy"),Ge=(Ve=e).fn[Qe],qe={offset:10,method:"auto",target:""},ze={offset:"number",method:"string",target:"(string|element)"},Xe={ACTIVATE:"activate"+Ye,SCROLL:"scroll"+Ye,LOAD_DATA_API:"load"+Ye+".data-api"},Je="dropdown-item",Ze="active",$e={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},tn="offset",en="position",nn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+$e.NAV_LINKS+","+this._config.target+" "+$e.LIST_ITEMS+","+this._config.target+" "+$e.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Ve(this._scrollElement).on(Xe.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?tn:en,r="auto"===this._config.method?t:this._config.method,s=r===en?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Ve.makeArray(Ve(this._selector)).map(function(t){var e,n=Cn.getSelectorFromElement(t);if(n&&(e=Ve(n)[0]),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[Ve(e)[r]().top+s,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){Ve.removeData(this._element,Be),Ve(this._scrollElement).off(Ye),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=h({},qe,t)).target){var e=Ve(t.target).attr("id");e||(e=Cn.getUID(Qe),Ve(t.target).attr("id",e)),t.target="#"+e}return Cn.typeCheckConfig(Qe,t,ze),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=Ve(t.join(","));n.hasClass(Je)?(n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze),n.addClass(Ze)):(n.addClass(Ze),n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS+", "+$e.LIST_ITEMS).addClass(Ze),n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)),Ve(this._scrollElement).trigger(Xe.ACTIVATE,{relatedTarget:e})},t._clear=function(){Ve(this._selector).filter($e.ACTIVE).removeClass(Ze)},n._jQueryInterface=function(e){return this.each(function(){var t=Ve(this).data(Be);if(t||(t=new n(this,"object"==typeof e&&e),Ve(this).data(Be,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},o(n,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return qe}}]),n}(),Ve(window).on(Xe.LOAD_DATA_API,function(){for(var t=Ve.makeArray(Ve($e.DATA_SPY)),e=t.length;e--;){var n=Ve(t[e]);nn._jQueryInterface.call(n,n.data())}}),Ve.fn[Qe]=nn._jQueryInterface,Ve.fn[Qe].Constructor=nn,Ve.fn[Qe].noConflict=function(){return Ve.fn[Qe]=Ge,nn._jQueryInterface},nn),Pn=(on="."+(sn="bs.tab"),an=(rn=e).fn.tab,ln={HIDE:"hide"+on,HIDDEN:"hidden"+on,SHOW:"show"+on,SHOWN:"shown"+on,CLICK_DATA_API:"click"+on+".data-api"},hn="dropdown-menu",cn="active",un="disabled",fn="fade",dn="show",_n=".dropdown",gn=".nav, .list-group",mn=".active",pn="> li > .active",vn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',En=".dropdown-toggle",yn="> .dropdown-menu .active",Tn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&rn(this._element).hasClass(cn)||rn(this._element).hasClass(un))){var t,i,e=rn(this._element).closest(gn)[0],r=Cn.getSelectorFromElement(this._element);if(e){var s="UL"===e.nodeName?pn:mn;i=(i=rn.makeArray(rn(e).find(s)))[i.length-1]}var o=rn.Event(ln.HIDE,{relatedTarget:this._element}),a=rn.Event(ln.SHOW,{relatedTarget:i});if(i&&rn(i).trigger(o),rn(this._element).trigger(a),!a.isDefaultPrevented()&&!o.isDefaultPrevented()){r&&(t=rn(r)[0]),this._activate(this._element,e);var l=function(){var t=rn.Event(ln.HIDDEN,{relatedTarget:n._element}),e=rn.Event(ln.SHOWN,{relatedTarget:i});rn(i).trigger(t),rn(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){rn.removeData(this._element,sn),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?rn(e).find(pn):rn(e).children(mn))[0],s=n&&r&&rn(r).hasClass(fn),o=function(){return i._transitionComplete(t,r,n)};if(r&&s){var a=Cn.getTransitionDurationFromElement(r);rn(r).one(Cn.TRANSITION_END,o).emulateTransitionEnd(a)}else o()},t._transitionComplete=function(t,e,n){if(e){rn(e).removeClass(dn+" "+cn);var i=rn(e.parentNode).find(yn)[0];i&&rn(i).removeClass(cn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(rn(t).addClass(cn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Cn.reflow(t),rn(t).addClass(dn),t.parentNode&&rn(t.parentNode).hasClass(hn)){var r=rn(t).closest(_n)[0];r&&rn(r).find(En).addClass(cn),t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=rn(this),e=t.data(sn);if(e||(e=new i(this),t.data(sn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),i}(),rn(document).on(ln.CLICK_DATA_API,vn,function(t){t.preventDefault(),Tn._jQueryInterface.call(rn(this),"show")}),rn.fn.tab=Tn._jQueryInterface,rn.fn.tab.Constructor=Tn,rn.fn.tab.noConflict=function(){return rn.fn.tab=an,Tn._jQueryInterface},Tn);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=Cn,t.Alert=In,t.Button=An,t.Carousel=Dn,t.Collapse=bn,t.Dropdown=Sn,t.Modal=wn,t.Popover=On,t.Scrollspy=kn,t.Tab=Pn,t.Tooltip=Nn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";var q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},M=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},t="SweetAlert2:",A=function(e){console.warn(t+" "+e)},H=function(e){console.error(t+" "+e)},n=[],l=function(e){-1===n.indexOf(e)&&(n.push(e),A(e))},I=function(e){return"function"==typeof e?e():e},R=function(e){return"object"===(void 0===e?"undefined":q(e))&&"function"==typeof e.then},e=Object.freeze({cancel:"cancel",backdrop:"overlay",close:"close",esc:"esc",timer:"timer"}),c=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},D=c(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","icon-text","image","input","has-input","file","range","select","radio","checkbox","textarea","inputerror","validationerror","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen"]),E=c(["success","warning","info","question","error"]),d={previousBodyPadding:null},p=function(e,t){return!!e.classList&&e.classList.contains(t)},N=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},f=function(e,t,n){e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},W=function(e,t){f(e,t,!0)},P=function(e,t){f(e,t,!1)},z=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(p(e.childNodes[n],t))return e.childNodes[n]},U=function(e){e.style.opacity="",e.style.display=e.id===D.content?"block":"flex"},F=function(e){e.style.opacity="",e.style.display="none"},S=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},K=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},O=function(e,t){e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(t)},L=function(){return document.body.querySelector("."+D.container)},m=function(e){var t=L();return t?t.querySelector("."+e):null},Z=function(){return m(D.popup)},Q=function(){return Z().querySelectorAll("."+D.icon)},Y=function(){return m(D.title)},$=function(){return m(D.content)},J=function(){return m(D.image)},X=function(){return m(D.progresssteps)},G=function(){return m(D.confirm)},ee=function(){return m(D.cancel)},te=function(){return m(D.actions)},ne=function(){return m(D.footer)},oe=function(){return m(D.close)},re=function(){var e=Array.prototype.slice.call(Z().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),(t=parseInt(t.getAttribute("tabindex")))<e?1:e<t?-1:0}),t=Array.prototype.slice.call(Z().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]'));return function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t))},h=function(){return!document.body.classList.contains(D["toast-shown"])},g=function(){return document.body.classList.contains(D["toast-shown"])},v=function(){return"undefined"==typeof window||"undefined"==typeof document},y=('\n <div aria-labelledby="'+D.title+'" aria-describedby="'+D.content+'" class="'+D.popup+'" tabindex="-1">\n   <div class="'+D.header+'">\n     <ul class="'+D.progresssteps+'"></ul>\n     <div class="'+D.icon+" "+E.error+'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="'+D.icon+" "+E.question+'">\n       <span class="'+D["icon-text"]+'">?</span>\n      </div>\n     <div class="'+D.icon+" "+E.warning+'">\n       <span class="'+D["icon-text"]+'">!</span>\n      </div>\n     <div class="'+D.icon+" "+E.info+'">\n       <span class="'+D["icon-text"]+'">i</span>\n      </div>\n     <div class="'+D.icon+" "+E.success+'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="'+D.image+'" />\n     <h2 class="'+D.title+'" id="'+D.title+'"></h2>\n     <button type="button" class="'+D.close+'">×</button>\n   </div>\n   <div class="'+D.content+'">\n     <div id="'+D.content+'"></div>\n     <input class="'+D.input+'" />\n     <input type="file" class="'+D.file+'" />\n     <div class="'+D.range+'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="'+D.select+'"></select>\n     <div class="'+D.radio+'"></div>\n     <label for="'+D.checkbox+'" class="'+D.checkbox+'">\n       <input type="checkbox" />\n     </label>\n     <textarea class="'+D.textarea+'"></textarea>\n     <div class="'+D.validationerror+'" id="'+D.validationerror+'"></div>\n   </div>\n   <div class="'+D.actions+'">\n     <button type="button" class="'+D.confirm+'">OK</button>\n     <button type="button" class="'+D.cancel+'">Cancel</button>\n   </div>\n   <div class="'+D.footer+'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),ie=function(e){var t=L();if(t&&(t.parentNode.removeChild(t),P([document.documentElement,document.body],[D["no-backdrop"],D["has-input"],D["toast-shown"]])),!v()){var n=document.createElement("div");n.className=D.container,n.innerHTML=y,("string"==typeof e.target?document.querySelector(e.target):e.target).appendChild(n);var o=Z(),r=$(),i=z(r,D.input),a=z(r,D.file),s=r.querySelector("."+D.range+" input"),u=r.querySelector("."+D.range+" output"),l=z(r,D.select),c=r.querySelector("."+D.checkbox+" input"),d=z(r,D.textarea);o.setAttribute("role",e.toast?"alert":"dialog"),o.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||o.setAttribute("aria-modal","true");var p=void 0,f=function(e){Be.isVisible()&&p!==e.target.value&&Be.resetValidationError(),p=e.target.value};return i.oninput=f,a.onchange=f,l.onchange=f,c.onchange=f,d.oninput=f,s.oninput=function(e){f(e),u.value=s.value},s.onchange=function(e){f(e),s.nextSibling.value=s.value},o}H("SweetAlert2 requires document to initialize")},ae=function(e,t){if(!e)return F(t);if("object"===(void 0===e?"undefined":q(e)))if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0));else e&&(t.innerHTML=e);U(t)},b=function(){if(v())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),w=function(){null===d.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(d.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=d.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px")},se={},C=function(e,n){var o=L(),t=Z();if(t){null!==e&&"function"==typeof e&&e(t),P(t,D.show),W(t,D.hide);var r=function(){var e,t;g()||(e=window.scrollX,t=window.scrollY,se.restoreFocusTimeout=setTimeout(function(){se.previousActiveElement&&se.previousActiveElement.focus&&(se.previousActiveElement.focus(),se.previousActiveElement=null)},100),void 0!==e&&void 0!==t&&window.scrollTo(e,t),se.keydownTarget.removeEventListener("keydown",se.keydownHandler,{capture:se.keydownListenerCapture}),se.keydownHandlerAdded=!1),o.parentNode&&o.parentNode.removeChild(o),P([document.documentElement,document.body],[D.shown,D["height-auto"],D["no-backdrop"],D["has-input"],D["toast-shown"]]),h()&&(null!==d.previousBodyPadding&&(document.body.style.paddingRight=d.previousBodyPadding,d.previousBodyPadding=null),function(){if(p(document.body,D.iosfix)){var e=parseInt(document.body.style.top,10);P(document.body,D.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}()),null!==n&&"function"==typeof n&&setTimeout(function(){n()})};b&&!p(t,D.noanimation)?t.addEventListener(b,function e(){t.removeEventListener(b,e),p(t,D.hide)&&r()}):r()}};function k(e){var t=function e(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];if(!(this instanceof e))return new(Function.prototype.bind.apply(e,[null].concat(n)));Object.getPrototypeOf(e).apply(this,n)};return t.prototype=r(Object.create(e.prototype),{constructor:t}),"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}var x={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,useRejections:!1,expectRejections:!1},B=["useRejections","expectRejections"],T=function(e){return x.hasOwnProperty(e)||"extraParams"===e},j=function(e){return-1!==B.indexOf(e)},ue=function(e){for(var t in e)T(t)||A('Unknown parameter "'+t+'"'),j(t)&&l('The parameter "'+t+'" is deprecated and will be removed in the next major release.')},_='"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',V={};var le=[],ce=function(){var e=Z();e||Be(""),e=Z();var t=te(),n=G(),o=ee();U(t),U(n),W([e,t],D.loading),n.disabled=!0,o.disabled=!0,e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},de=Object.freeze({isValidParameter:T,isDeprecatedParameter:j,argsToParams:function(n){var o={};switch(q(n[0])){case"string":["title","html","type"].forEach(function(e,t){switch(q(n[t])){case"string":o[e]=n[t];break;case"undefined":break;default:H("Unexpected type of "+e+'! Expected "string", got '+q(n[t]))}});break;case"object":r(o,n[0]);break;default:return H('Unexpected type of argument! Expected "string" or "object", got '+q(n[0])),!1}return o},adaptInputValidator:function(n){return function(e,t){return n.call(this,e,t).then(function(){},function(e){return e})}},close:C,closePopup:C,closeModal:C,closeToast:C,isVisible:function(){return!!Z()},clickConfirm:function(){return G().click()},clickCancel:function(){return ee().click()},getPopup:Z,getTitle:Y,getContent:$,getImage:J,getButtonsWrapper:function(){return l("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"),m(D.actions)},getActions:te,getConfirmButton:G,getCancelButton:ee,getFooter:ne,isLoading:function(){return Z().hasAttribute("data-loading")},fire:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return new(Function.prototype.bind.apply(this,[null].concat(t)))},mixin:function(n){return k(function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),o(t,[{key:"_main",value:function(e){return i(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_main",this).call(this,r({},n,e))}}]),t}(this))},queue:function(e){var i=this;le=e;var a=function(){le=[],document.body.removeAttribute("data-swal2-queue-step")},s=[];return new Promise(function(r,e){!function t(n,o){n<le.length?(document.body.setAttribute("data-swal2-queue-step",n),i(le[n]).then(function(e){void 0!==e.value?(s.push(e.value),t(n+1,o)):(a(),r({dismiss:e.dismiss}))})):(a(),r({value:s}))}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(e,t){return t&&t<le.length?le.splice(t,0,e):le.push(e)},deleteQueueStep:function(e){void 0!==le[e]&&le.splice(e,1)},showLoading:ce,enableLoading:ce,getTimerLeft:function(){return se.timeout&&se.timeout.getTimerLeft()}}),pe="function"==typeof Symbol?Symbol:function(){var t=0;function e(e){return"__"+e+"_"+Math.floor(1e9*Math.random())+"_"+ ++t+"__"}return e.iterator=e("Symbol.iterator"),e}(),fe="function"==typeof WeakMap?WeakMap:function(n,o,t){function e(){o(this,n,{value:pe("WeakMap")})}return e.prototype={delete:function(e){delete e[this[n]]},get:function(e){return e[this[n]]},has:function(e){return t.call(e,this[n])},set:function(e,t){o(e,this[n],{configurable:!0,value:t})}},e}(pe("WeakMap"),Object.defineProperty,{}.hasOwnProperty),me={promise:new fe,innerParams:new fe,domCache:new fe};function he(){var e=me.innerParams.get(this),t=me.domCache.get(this);e.showConfirmButton||(F(t.confirmButton),e.showCancelButton||F(t.actions)),P([t.popup,t.actions],D.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1}var ge=function e(t,n){var o,r,i;s(this,e);var a=n;this.start=function(){i=!0,r=new Date,o=setTimeout(t,a)},this.stop=function(){i=!1,clearTimeout(o),a-=new Date-r},this.getTimerLeft=function(){return i&&(this.stop(),this.start()),a},this.getStateRunning=function(){return i},this.start()},ve={email:function(e,t){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid email address")},url:function(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid URL")}};var ye=function(e){var t=L(),n=Z();null!==e.onBeforeOpen&&"function"==typeof e.onBeforeOpen&&e.onBeforeOpen(n),e.animation?(W(n,D.show),W(t,D.fade),P(n,D.hide)):P(n,D.fade),U(n),t.style.overflowY="hidden",b&&!p(n,D.noanimation)?n.addEventListener(b,function e(){n.removeEventListener(b,e),t.style.overflowY="auto"}):t.style.overflowY="auto",W([document.documentElement,document.body,t],D.shown),e.heightAuto&&e.backdrop&&!e.toast&&W([document.documentElement,document.body],D["height-auto"]),h()&&(w(),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!p(document.body,D.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",W(document.body,D.iosfix)}}()),g()||se.previousActiveElement||(se.previousActiveElement=document.activeElement),null!==e.onOpen&&"function"==typeof e.onOpen&&setTimeout(function(){e.onOpen(n)})};var be=Object.freeze({hideLoading:he,disableLoading:he,getInput:function(e){var t=me.innerParams.get(this),n=me.domCache.get(this);if(!(e=e||t.input))return null;switch(e){case"select":case"textarea":case"file":return z(n.content,D[e]);case"checkbox":return n.popup.querySelector("."+D.checkbox+" input");case"radio":return n.popup.querySelector("."+D.radio+" input:checked")||n.popup.querySelector("."+D.radio+" input:first-child");case"range":return n.popup.querySelector("."+D.range+" input");default:return z(n.content,D.input)}},enableButtons:function(){var e=me.domCache.get(this);e.confirmButton.disabled=!1,e.cancelButton.disabled=!1},disableButtons:function(){var e=me.domCache.get(this);e.confirmButton.disabled=!0,e.cancelButton.disabled=!0},enableConfirmButton:function(){me.domCache.get(this).confirmButton.disabled=!1},disableConfirmButton:function(){me.domCache.get(this).confirmButton.disabled=!0},enableInput:function(){var e=this.getInput();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},disableInput:function(){var e=this.getInput();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},showValidationError:function(e){var t=me.domCache.get(this);t.validationError.innerHTML=e;var n=window.getComputedStyle(t.popup);t.validationError.style.marginLeft="-"+n.getPropertyValue("padding-left"),t.validationError.style.marginRight="-"+n.getPropertyValue("padding-right"),U(t.validationError);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",D.validationerror),N(o),W(o,D.inputerror))},resetValidationError:function(){var e=me.domCache.get(this);e.validationError&&F(e.validationError);var t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),P(t,D.inputerror))},_main:function(e){var T=this;ue(e);var j=r({},x,e);!function(r){r.inputValidator||Object.keys(ve).forEach(function(e){r.input===e&&(r.inputValidator=r.expectRejections?ve[e]:Be.adaptInputValidator(ve[e]))}),(!r.target||"string"==typeof r.target&&!document.querySelector(r.target)||"string"!=typeof r.target&&!r.target.appendChild)&&(A('Target parameter is not valid, defaulting to "body"'),r.target="body");var e=void 0,t=Z(),n="string"==typeof r.target?document.querySelector(r.target):r.target;e=t&&n&&t.parentNode!==n.parentNode?ie(r):t||ie(r),r.width&&(e.style.width="number"==typeof r.width?r.width+"px":r.width),r.padding&&(e.style.padding="number"==typeof r.padding?r.padding+"px":r.padding),r.background&&(e.style.background=r.background);for(var o=window.getComputedStyle(e).getPropertyValue("background-color"),i=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),a=0;a<i.length;a++)i[a].style.backgroundColor=o;var s=L(),u=Y(),l=$().querySelector("#"+D.content),c=te(),d=G(),p=ee(),f=oe(),m=ne();if(r.titleText?u.innerText=r.titleText:r.title&&(u.innerHTML=r.title.split("\n").join("<br />")),"string"==typeof r.backdrop?L().style.background=r.backdrop:r.backdrop||W([document.documentElement,document.body],D["no-backdrop"]),r.html?ae(r.html,l):r.text?(l.textContent=r.text,U(l)):F(l),r.position in D?W(s,D[r.position]):(A('The "position" parameter is not valid, defaulting to "center"'),W(s,D.center)),r.grow&&"string"==typeof r.grow){var h="grow-"+r.grow;h in D&&W(s,D[h])}"function"==typeof r.animation&&(r.animation=r.animation.call()),r.showCloseButton?(f.setAttribute("aria-label",r.closeButtonAriaLabel),U(f)):F(f),e.className=D.popup,r.toast?(W([document.documentElement,document.body],D["toast-shown"]),W(e,D.toast)):W(e,D.modal),r.customClass&&W(e,r.customClass);var g=X(),v=parseInt(null===r.currentProgressStep?Be.getQueueStep():r.currentProgressStep,10);r.progressSteps&&r.progressSteps.length?(U(g),S(g),v>=r.progressSteps.length&&A("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.progressSteps.forEach(function(e,t){var n=document.createElement("li");if(W(n,D.progresscircle),n.innerHTML=e,t===v&&W(n,D.activeprogressstep),g.appendChild(n),t!==r.progressSteps.length-1){var o=document.createElement("li");W(o,D.progressline),r.progressStepsDistance&&(o.style.width=r.progressStepsDistance),g.appendChild(o)}})):F(g);for(var y=Q(),b=0;b<y.length;b++)F(y[b]);if(r.type){var w=!1;for(var C in E)if(r.type===C){w=!0;break}if(!w)return H("Unknown alert type: "+r.type);var k=e.querySelector("."+D.icon+"."+E[r.type]);U(k),r.animation&&W(k,"swal2-animate-"+r.type+"-icon")}var x=J();if(r.imageUrl?(x.setAttribute("src",r.imageUrl),x.setAttribute("alt",r.imageAlt),U(x),r.imageWidth?x.setAttribute("width",r.imageWidth):x.removeAttribute("width"),r.imageHeight?x.setAttribute("height",r.imageHeight):x.removeAttribute("height"),x.className=D.image,r.imageClass&&W(x,r.imageClass)):F(x),r.showCancelButton?p.style.display="inline-block":F(p),r.showConfirmButton?O(d,"display"):F(d),r.showConfirmButton||r.showCancelButton?U(c):F(c),d.innerHTML=r.confirmButtonText,p.innerHTML=r.cancelButtonText,d.setAttribute("aria-label",r.confirmButtonAriaLabel),p.setAttribute("aria-label",r.cancelButtonAriaLabel),d.className=D.confirm,W(d,r.confirmButtonClass),p.className=D.cancel,W(p,r.cancelButtonClass),r.buttonsStyling){W([d,p],D.styled),r.confirmButtonColor&&(d.style.backgroundColor=r.confirmButtonColor),r.cancelButtonColor&&(p.style.backgroundColor=r.cancelButtonColor);var B=window.getComputedStyle(d).getPropertyValue("background-color");d.style.borderLeftColor=B,d.style.borderRightColor=B}else P([d,p],D.styled),d.style.backgroundColor=d.style.borderLeftColor=d.style.borderRightColor="",p.style.backgroundColor=p.style.borderLeftColor=p.style.borderRightColor="";ae(r.footer,m),!0===r.animation?P(e,D.noanimation):W(e,D.noanimation),r.showLoaderOnConfirm&&!r.preConfirm&&A("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")}(j),Object.freeze(j),me.innerParams.set(this,j),se.timeout&&(se.timeout.stop(),delete se.timeout),clearTimeout(se.restoreFocusTimeout);var _={popup:Z(),container:L(),content:$(),actions:te(),confirmButton:G(),cancelButton:ee(),closeButton:oe(),validationError:m(D.validationerror),progressSteps:X()};me.domCache.set(this,_);var V=this.constructor;return new Promise(function(t,n){var o=function(e){V.closePopup(j.onClose,j.onAfterClose),j.useRejections?t(e):t({value:e})},l=function(e){V.closePopup(j.onClose,j.onAfterClose),j.useRejections?n(e):t({dismiss:e})},c=function(e){V.closePopup(j.onClose,j.onAfterClose),n(e)};j.timer&&(se.timeout=new ge(function(){l("timer"),delete se.timeout},j.timer)),j.input&&setTimeout(function(){var e=T.getInput();e&&N(e)},0);for(var d=function(t){if(j.showLoaderOnConfirm&&V.showLoading(),j.preConfirm){T.resetValidationError();var e=Promise.resolve().then(function(){return j.preConfirm(t,j.extraParams)});j.expectRejections?e.then(function(e){return o(e||t)},function(e){T.hideLoading(),e&&T.showValidationError(e)}):e.then(function(e){K(_.validationError)||!1===e?T.hideLoading():o(e||t)},function(e){return c(e)})}else o(t)},e=function(e){var t=e||window.event,n=t.target||t.srcElement,o=_.confirmButton,r=_.cancelButton,i=o&&(o===n||o.contains(n)),a=r&&(r===n||r.contains(n));switch(t.type){case"click":if(i&&V.isVisible())if(T.disableButtons(),j.input){var s=function(){var e=T.getInput();if(!e)return null;switch(j.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return j.inputAutoTrim?e.value.trim():e.value}}();if(j.inputValidator){T.disableInput();var u=Promise.resolve().then(function(){return j.inputValidator(s,j.extraParams)});j.expectRejections?u.then(function(){T.enableButtons(),T.enableInput(),d(s)},function(e){T.enableButtons(),T.enableInput(),e&&T.showValidationError(e)}):u.then(function(e){T.enableButtons(),T.enableInput(),e?T.showValidationError(e):d(s)},function(e){return c(e)})}else d(s)}else d(!0);else a&&V.isVisible()&&(T.disableButtons(),l(V.DismissReason.cancel))}},r=_.popup.querySelectorAll("button"),i=0;i<r.length;i++)r[i].onclick=e,r[i].onmouseover=e,r[i].onmouseout=e,r[i].onmousedown=e;if(_.closeButton.onclick=function(){l(V.DismissReason.close)},j.toast)_.popup.onclick=function(e){j.showConfirmButton||j.showCancelButton||j.showCloseButton||j.input||(V.closePopup(j.onClose,j.onAfterClose),l(V.DismissReason.close))};else{var a=!1;_.popup.onmousedown=function(){_.container.onmouseup=function(e){_.container.onmouseup=void 0,e.target===_.container&&(a=!0)}},_.container.onmousedown=function(){_.popup.onmouseup=function(e){_.popup.onmouseup=void 0,(e.target===_.popup||_.popup.contains(e.target))&&(a=!0)}},_.container.onclick=function(e){a?a=!1:e.target===_.container&&I(j.allowOutsideClick)&&l(V.DismissReason.backdrop)}}j.reverseButtons?_.confirmButton.parentNode.insertBefore(_.cancelButton,_.confirmButton):_.confirmButton.parentNode.insertBefore(_.confirmButton,_.cancelButton);var s=function(e,t){for(var n=re(j.focusCancel),o=0;o<n.length;o++){(e+=t)===n.length?e=0:-1===e&&(e=n.length-1);var r=n[e];if(K(r))return r.focus()}_.popup.focus()};se.keydownHandlerAdded&&(se.keydownTarget.removeEventListener("keydown",se.keydownHandler,{capture:se.keydownListenerCapture}),se.keydownHandlerAdded=!1),j.toast||(se.keydownHandler=function(e){return function(e,t){if(t.stopKeydownPropagation&&e.stopPropagation(),"Enter"!==e.key||e.isComposing)if("Tab"===e.key){for(var n=e.target||e.srcElement,o=re(t.focusCancel),r=-1,i=0;i<o.length;i++)if(n===o[i]){r=i;break}e.shiftKey?s(r,-1):s(r,1),e.stopPropagation(),e.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(e.key)?document.activeElement===_.confirmButton&&K(_.cancelButton)?_.cancelButton.focus():document.activeElement===_.cancelButton&&K(_.confirmButton)&&_.confirmButton.focus():"Escape"!==e.key&&"Esc"!==e.key||!0!==I(t.allowEscapeKey)||l(V.DismissReason.esc);else if(e.target&&T.getInput()&&e.target.outerHTML===T.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(t.input))return;V.clickConfirm(),e.preventDefault()}}(e,j)},se.keydownTarget=j.keydownListenerCapture?window:_.popup,se.keydownListenerCapture=j.keydownListenerCapture,se.keydownTarget.addEventListener("keydown",se.keydownHandler,{capture:se.keydownListenerCapture}),se.keydownHandlerAdded=!0),T.enableButtons(),T.hideLoading(),T.resetValidationError(),j.input&&W(document.body,D["has-input"]);for(var u=["input","file","range","select","radio","checkbox","textarea"],p=void 0,f=0;f<u.length;f++){var m=D[u[f]],h=z(_.content,m);if(p=T.getInput(u[f])){for(var g in p.attributes)if(p.attributes.hasOwnProperty(g)){var v=p.attributes[g].name;"type"!==v&&"value"!==v&&p.removeAttribute(v)}for(var y in j.inputAttributes)p.setAttribute(y,j.inputAttributes[y])}h.className=m,j.inputClass&&W(h,j.inputClass),F(h)}var b=void 0;switch(j.input){case"text":case"email":case"password":case"number":case"tel":case"url":(p=z(_.content,D.input)).value=j.inputValue,p.placeholder=j.inputPlaceholder,p.type=j.input,U(p);break;case"file":(p=z(_.content,D.file)).placeholder=j.inputPlaceholder,p.type=j.input,U(p);break;case"range":var w=z(_.content,D.range),C=w.querySelector("input"),k=w.querySelector("output");C.value=j.inputValue,C.type=j.input,k.value=j.inputValue,U(w);break;case"select":var x=z(_.content,D.select);if(x.innerHTML="",j.inputPlaceholder){var B=document.createElement("option");B.innerHTML=j.inputPlaceholder,B.value="",B.disabled=!0,B.selected=!0,x.appendChild(B)}b=function(e){e.forEach(function(e){var t=M(e,2),n=t[0],o=t[1],r=document.createElement("option");r.value=n,r.innerHTML=o,j.inputValue.toString()===n.toString()&&(r.selected=!0),x.appendChild(r)}),U(x),x.focus()};break;case"radio":var A=z(_.content,D.radio);A.innerHTML="",b=function(e){e.forEach(function(e){var t=M(e,2),n=t[0],o=t[1],r=document.createElement("input"),i=document.createElement("label");r.type="radio",r.name=D.radio,r.value=n,j.inputValue.toString()===n.toString()&&(r.checked=!0),i.innerHTML=o,i.insertBefore(r,i.firstChild),A.appendChild(i)}),U(A);var t=A.querySelectorAll("input");t.length&&t[0].focus()};break;case"checkbox":var E=z(_.content,D.checkbox),P=T.getInput("checkbox");P.type="checkbox",P.value=1,P.id=D.checkbox,P.checked=Boolean(j.inputValue);var S=E.getElementsByTagName("span");S.length&&E.removeChild(S[0]),(S=document.createElement("span")).innerHTML=j.inputPlaceholder,E.appendChild(S),U(E);break;case"textarea":var O=z(_.content,D.textarea);O.value=j.inputValue,O.placeholder=j.inputPlaceholder,U(O);break;case null:break;default:H('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'+j.input+'"')}if("select"===j.input||"radio"===j.input){var L=function(e){return b((t=e,n=[],"undefined"!=typeof Map&&t instanceof Map?t.forEach(function(e,t){n.push([t,e])}):Object.keys(t).forEach(function(e){n.push([e,t[e]])}),n));var t,n};R(j.inputOptions)?(V.showLoading(),j.inputOptions.then(function(e){T.hideLoading(),L(e)})):"object"===q(j.inputOptions)?L(j.inputOptions):H("Unexpected type of inputOptions! Expected object, Map or Promise, got "+q(j.inputOptions))}else-1!==["text","email","number","tel","textarea"].indexOf(j.input)&&R(j.inputValue)&&(V.showLoading(),F(p),j.inputValue.then(function(e){p.value="number"===j.input?parseFloat(e)||0:e+"",U(p),T.hideLoading()}).catch(function(e){H("Error in inputValue promise: "+e),p.value="",U(p),T.hideLoading()}));ye(j),j.toast||(I(j.allowEnterKey)?j.focusCancel&&K(_.cancelButton)?_.cancelButton.focus():j.focusConfirm&&K(_.confirmButton)?_.confirmButton.focus():s(-1,1):document.activeElement&&document.activeElement.blur()),_.container.scrollTop=0})}}),we=void 0;function Ce(){if("undefined"!=typeof window){"undefined"==typeof Promise&&H("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===t[0])return H("SweetAlert2 expects at least 1 attribute!"),!1;we=this;var o=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0}});var r=this._main(this.params);me.promise.set(this,r)}}Ce.prototype.then=function(e,t){return me.promise.get(this).then(e,t)},Ce.prototype.catch=function(e){return me.promise.get(this).catch(e)},Ce.prototype.finally=function(e){return me.promise.get(this).finally(e)},r(Ce.prototype,be),r(Ce,de),Object.keys(be).forEach(function(t){Ce[t]=function(){var e;if(we)return(e=we)[t].apply(e,arguments)}}),Ce.DismissReason=e,Ce.noop=function(){},Ce.version="7.24.4";var ke,xe,Be=k((ke=Ce,xe=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,ke),o(t,[{key:"_main",value:function(e){return i(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_main",this).call(this,r({},V,e))}}],[{key:"setDefaults",value:function(t){if(l(_),!t||"object"!==(void 0===t?"undefined":q(t)))throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");ue(t),Object.keys(t).forEach(function(e){ke.isValidParameter(e)&&(V[e]=t[e])})}},{key:"resetDefaults",value:function(){l(_),V={}}}]),t}(),"undefined"!=typeof window&&"object"===q(window._swalDefaults)&&xe.setDefaults(window._swalDefaults),xe));return Be.default=Be}),"undefined"!=typeof window&&window.Sweetalert2&&(window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown.swal2-has-input>.swal2-container>.swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-shown.swal2-has-input>.swal2-container>.swal2-toast .swal2-actions{flex:1;align-self:stretch;justify-content:flex-end;height:2.2em}body.swal2-toast-shown.swal2-has-input>.swal2-container>.swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-shown.swal2-has-input>.swal2-container>.swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-shown.swal2-has-input>.swal2-container>.swal2-toast .swal2-validationerror{font-size:1em}body.swal2-toast-shown>.swal2-container{position:fixed;background-color:transparent}body.swal2-toast-shown>.swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown>.swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown>.swal2-container.swal2-top-end,body.swal2-toast-shown>.swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown>.swal2-container.swal2-top-left,body.swal2-toast-shown>.swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown>.swal2-container.swal2-center-left,body.swal2-toast-shown>.swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown>.swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown>.swal2-container.swal2-center-end,body.swal2-toast-shown>.swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown>.swal2-container.swal2-bottom-left,body.swal2-toast-shown>.swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown>.swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown>.swal2-container.swal2-bottom-end,body.swal2-toast-shown>.swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-close{position:initial}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{align-items:center;justify-content:center;margin:1.25em auto 0}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-images:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-images:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:0 .3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding-top:1em;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-images{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:.75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validationerror{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validationerror::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}[dir=rtl] .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}");