const person = {
    name: 'name',
    address: { city: 'city' }
}

Object.freeze(person)
console.log(Object.isFrozen(person))
console.log(Object.isFrozen(person.address))

person.address.city = 'cityChanged'
console.log(person)

function deepFreeze(obj) {
    if (typeof obj !== 'object') return
    Object.freeze(obj)
    Object.keys(obj).forEach(key => deepFreeze(obj[key]))
}

deepFreeze(person)
console.log(Object.isFrozen(person))
console.log(Object.isFrozen(person.address))

person.address.city = 'cityChangedAgain'
console.log(person)
