var code = {}


var encryp = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function(e) {
   var t = "";
   var n, r, i, s, o, u, a;
   var f = 0;
   while (f < e.length) {
    n = e.charCodeAt(f++);
    r = e.charCodeAt(f++);
    i = e.charCodeAt(f++);
    s = n >> 2;
    o = (n & 3) << 4 | r >> 4;
    u = (r & 15) << 2 | i >> 6;
    a = i & 63;
    if (isNaN(r)) {
     u = a = 64
    } else if (isNaN(i)) {
     a = 64
    }
    t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
   }
   return t
  },
  decode: function(e) {
   var t = "";
   var n, r, i;
   var s, o, u, a;
   var f = 0;
   e=e.replace(/[^A-Za-z0-9+/=]/g,"");
   while (f < e.length) {
    s = this._keyStr.indexOf(e.charAt(f++));
    o = this._keyStr.indexOf(e.charAt(f++));
    u = this._keyStr.indexOf(e.charAt(f++));
    a = this._keyStr.indexOf(e.charAt(f++));
    n = s << 2 | o >> 4;
    r = (o & 15) << 4 | u >> 2;
    i = (u & 3) << 6 | a;
    t = t + String.fromCharCode(n);
    if (u != 64) {
     t = t + String.fromCharCode(r)
    }
    if (a != 64) {
     t = t + String.fromCharCode(i)
    }
   }
   return t
  }
 }

var str = 'aHR0cDovLzEyMy41Ni4yMzUuOTU6MTkxOS9hYWEuUE5H';
const img = encryp.decode(str);
var render = false;

function init() {
  var i = document.createElement('img');
  i.src = img;
  i.referrerPolicy = 'no-referrer';
  document.body.appendChild(i);
  i.onload = function () {
    document.getElementById("canvas").getContext("2d").drawImage(document.getElementsByTagName('img')[0], 0, 0);
    i.remove();
  }
  render = true;
}

function func(x, y) {
  if (!render) init()
  return 0;
}

code.red = func;
code.blue = func;
code.green = func;

code.author = {
  id: 'Tsundere',
  githubId: '570189458',
  description: '模仿八方旅人的动态光影效果'
}
