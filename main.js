var code = {}

code.red = function (x, y) {
  const [dx, dy] = [2 * x / 1024 - 1, 2 * y / 1024 - 1]
  const r = Math.abs(Math.atan2(dy, dx))
  return Math.sin(r) * 255
}

code.blue = function (x, y) {
  const [dx, dy] = [2 * x / 1024 - 1, 2 * y / 1024 - 1]
  const l = Math.sqrt(dx * dx + dy * dy)
  return Math.cos((Math.ceil(l) - l) * 3) * 255
}

code.green = function (x, y) {
  const [dx, dy] = [2 * x / 1024 - 1, 2 * y / 1024 - 1]
  return Math.cos(dx + 1 - dy) * 255
}

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let size = 1024
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

// 1024*1024循环 性能爆炸
// function step(timestamp) { 
for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
    ctx.fillStyle = 'rgb(' + code.red(x, y) + ',' + code.green(x, y) + ',' + code.blue(x, y) + ')'
    ctx.fillRect(x, y, 1, 1)
  }
}
  // setTimeout(() => {
  //   requestAnimationFrame(step);
  // }, 16)
// }
// requestAnimationFrame(step);

