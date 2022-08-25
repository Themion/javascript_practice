const obj1 = { foo: { bar: 'baz' } }
const obj2 = { ...obj1 }

obj1.foo.bar = 'baaz'
console.log(obj2.foo.bar)
