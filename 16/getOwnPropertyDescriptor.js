const person = {name: 'Lee'}
console.log(Object.getOwnPropertyDescriptor(person, 'name'))
console.log(Object.getOwnPropertyDescriptors(person), '\n')

person.age = 20
console.log(Object.getOwnPropertyDescriptors(person))

console.log('---------------------')

console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'))
console.log(Object.getOwnPropertyDescriptor(function() {}, 'prototype'))
