const { tryCatch } = require('../tryCatch')

const person = { name: 'name' }
console.log(Object.isExtensible(person))
Object.preventExtensions(person)
console.log(Object.isExtensible(person))

// 속성 추가 불가능
person.age = 20
console.log(person)

// 속성 변경 가능
person.name = 'name2'
console.log(person)

// 속성 삭제 가능
delete person.name
console.log(person)

// 속성 재정의 불가능
tryCatch(() => {
    Object.defineProperty(person, 'age', { value: 20 })
    console.log(person)
})
