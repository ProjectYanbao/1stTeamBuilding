var code = {}

var render = false
function init() {
  var i = document.createElement('video');
  i.controls = "controls";
  i.loop = "loop";
  i.autoplay = "autoplay";
  i.src = "./assets/loop.mp4";
  i.referrerPolicy = 'no-referrer';
  i.style = "position:absolute; top:0; left:0; width: 100%;";
  document.body.appendChild(i);
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
  description: '搞事样例6：插入video视频'
}