const { tryCatch } = require('../tryCatch')

tryCatch(() => { console.log('var: ' + varVariable) })
tryCatch(() => { console.log('let: ' + letVariable) })
tryCatch(() => { console.log('const: ' + constVariable) })

var varVariable = 1
let letVariable = 2
const constVariable = 3

console.log('var: ' + varVariable)
console.log('let: ' + letVariable)
console.log('const: ' + constVariable)
