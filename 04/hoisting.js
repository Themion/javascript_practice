try { console.log('var: ' + varVariable) } catch (e) { console.error(e.message) }
try { console.log('let: ' + letVariable) } catch (e) { console.error(e.message) }
try { console.log('const: ' + constVariable) } catch (e) { console.error(e.message) }

var varVariable = 1
let letVariable = 2
const constVariable = 3

console.log('var: ' + varVariable)
console.log('let: ' + letVariable)
console.log('const: ' + constVariable)
