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

code.author = {
  id: 'gonlyk',
  githubId: 'your github gonlyk',
  description: '燕宝 燕宝 撒鼻息'
}
