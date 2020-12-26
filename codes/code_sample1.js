var code = {}
const Max = 255;
const Min = 0;
const width = 1024;
const heigh = 1024;
function func(x, y) {
  x = x / width * 3 - 1.5;
  y = 1.5 - y / heigh * 3;
  var a = x**2 + y**2 - 1;
  return a**3 - x**2 * y**3 <= 0 ? Min : Max; 
}
code.red = function () { return Max; }
code.blue = func
code.green = func

code.author = {
  id: '御坂穗乃果',
  githubId: 'y2361547758',
  description: '正常样例1：复刻史塔克的专楼投稿'
}