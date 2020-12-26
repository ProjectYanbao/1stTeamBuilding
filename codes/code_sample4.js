var code = {}

const img = "https://i0.hdslb.com/bfs/space/75371cf863114641c9837776a5e97a0677a86254.png"
var render = false

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
  return Max; 
}
code.red = func
code.blue = func
code.green = func

code.author = {
  id: '御坂穗乃果',
  githubId: 'y2361547758',
  description: '正常?样例4：直接写入外部图片'
}