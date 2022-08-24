const isFalsy = val => !val
const isTruthy = val => !isFalsy(val)

console.log(`'':            ${isTruthy('')}`)
console.log(`'str':         ${isTruthy('str')}\n`)

console.log(`0:             ${isTruthy(0)}`)
console.log(`1:             ${isTruthy(1)}`)
console.log(`-1:            ${isTruthy(-1)}`)
console.log(`NaN:           ${isTruthy(NaN)}\n`)

console.log(`null:          ${isTruthy(null)}`)
console.log(`undefined:     ${isTruthy(undefined)}`)
console.log(`{}:            ${isTruthy({})}`)
console.log(`[]:            ${isTruthy([])}`)
