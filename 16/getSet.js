const person = {
    firstName: 'first',
    lastName: 'last',

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ')
    }
}

console.log(person.firstName + ' ' + person.lastName)
console.log(person.fullName)

person.fullName = 'pseudo name'
console.log(person)
console.log(person.fullName)

console.log(Object.getOwnPropertyDescriptor(person, 'firstName'))
console.log(Object.getOwnPropertyDescriptor(person, 'fullName'))
