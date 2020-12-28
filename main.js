if (typeof code === 'undefined') {
  var code = {}

  code.red = function (x, y) {
    return 0;
  }

  code.blue = function (x, y) {
    return 0;
  }

  code.green = function (x, y) {
    return 0;
  }
}

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let size = 1024
for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
    ctx.fillStyle = 'rgb(' + code.red(x, y) + ',' + code.green(x, y) + ',' + code.blue(x, y) + ')'
    ctx.fillRect(x, y, 1, 1)
  }
}
