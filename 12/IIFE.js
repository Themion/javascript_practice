const { tryCatch } = require('../tryCatch')

const sum1 = (function add(a, b) { return a + b })(1, 2)
console.log(sum1)

const sum2 = function add2(a, b) { return a + b }(3, 4)
console.log(sum2)

tryCatch(() => console.log(add))
tryCatch(() => console.log(add2))
