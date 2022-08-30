const person = {}

Object.defineProperty(person, 'firstName', {
    value: 'first',
    writable: true,
    enumerable: true,
    configurable: true
})

Object.defineProperty(person, 'lastName', {
    value: 'last'
})

console.log('firstName: ', Object.getOwnPropertyDescriptor(person, 'firstName'))
console.log('lastName: ', Object.getOwnPropertyDescriptor(person, 'lastName'))

// enumerable이 false인 key값은 등장하지 않음
console.log(Object.keys(person))

// writable이 false인 값은 바꿀 수 없음
person.lastName = 'test'
console.log('lastName: ', Object.getOwnPropertyDescriptor(person, 'lastName'))

// configurable이 false인 값은 삭제할 수 없음
delete person.lastName
console.log('lastName: ', Object.getOwnPropertyDescriptor(person, 'lastName'))

Object.defineProperty(person, 'fullName', {
    get() { return `${this.firstName} ${this.lastName}` },
    set(name) { [this.firstName, this.lastName] = name.split(' ') },
    enumerable: true,
    configurable: true
})
console.log('fullName: ', Object.getOwnPropertyDescriptor(person, 'fullName'))

person.fullName = 'pseudo name'
console.log(person)
console.log(person.lastName)
