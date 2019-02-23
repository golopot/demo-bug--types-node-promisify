const { promisify } = require('util')

const f = promisify((a, callback) => {})
const g = promisify((a, b, callback) => {})

f(1)
g(1,2)