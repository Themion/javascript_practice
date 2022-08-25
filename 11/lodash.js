const _ = require('lodash')

const obj1 = { foo: { bar: 'baz' } }
const obj2 = _.cloneDeep(obj1)

console.log(obj1 === obj2)
console.log(obj1.foo.bar === obj2.foo.bar)
