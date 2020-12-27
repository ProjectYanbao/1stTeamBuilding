var code = {}

var render = false
function init() {
  var i = document.createElement('iframe');
  i.src = "https://player.bilibili.com/player.html?aid=798165853&bvid=BV1My4y1D7e9&cid=266664612&page=1";
  i.border="0";
  i.frameborder="no";
  i.framespacing="0";
  i.allowfullscreen="true";
  i.style = "position:absolute; top:0; left:0; width:100%; height:100%;";
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
  description: '搞事样例5：插入iframe(视频)'
}