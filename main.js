var code = {}

const tsubame = function (x, y) {
  const [tx1, ty1] = [x / 1024 - 0.8, y / 1024 - 0.2]
  const [tx2, ty2] = [x / 1024 - 0.95, y / 1024 - 0.2]
  const r1 = Math.atan2(ty1, tx1)
  const l1 = Math.sqrt(tx1 * tx1 + ty1 * ty1)
  const r2 = Math.atan2(ty2, tx2)
  const l2 = Math.sqrt(tx2 * tx2 + ty2 * ty2)
  if ((l1 > 0.07 && l1 < 0.08 && r1 > -Math.PI / 2 && r1 < 0) ||
  (l2 > 0.07 && l2 < 0.08 && r2 > -Math.PI && r2 < -Math.PI / 2))
    return 1

  return 0
}
code.red = function (x, y) {
  const [dx, dy] = [2 * x / 1024 - 1, 2 * y / 1024 - 1]
  const r = -(Math.atan2(dy, dx))
  const l = Math.sqrt(dx * dx + dy * dy)

  const background = Math.sin(r)
  const sun = (l > 0.3 ? 0 : 1)

  const tbm = tsubame(x, y)
  if (l < 0.3) {
    return (0.2 * background + 0.8 * sun) * 255
  } else {
    return (tbm === 1 ? tbm : background) * 255
  }
}

code.blue = function (x, y) {
  const [dx, dy] = [2 * x / 1024 - 1, 2 * y / 1024 - 1]
  const l = Math.sqrt(dx * dx + dy * dy)
  const background = Math.cos((Math.ceil(l) - l) * 3)
  const sun = (l > 0.3 ? 0 : 0.3)
  const tbm = tsubame(x, y)
  if (l < 0.3) {
    return (0.2 * background + 0.8 * sun) * 255
  } else {
    return (tbm === 1 ? tbm : background) * 255
  }
}

code.green = function (x, y) {
  const [dx, dy] = [2 * x / 1024 - 1, 2 * y / 1024 - 1]
  const background = Math.cos(dx + 1 - dy)
  const tbm = tsubame(x, y)
  return (tbm === 1 ? tbm : background) * 255
}

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let size = 1024
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
    ctx.fillStyle = 'rgb(' + code.red(x, y) + ',' + code.green(x, y) + ',' + code.blue(x, y) + ')'
    ctx.fillRect(x, y, 1, 1)
  }
}
