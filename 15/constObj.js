const { tryCatch } = require("../tryCatch")

const obj = { name: 'Lee' }
console.log(obj.name)

// const 객체의 경우 값을 변경할 수 있음
obj.name = 'Kim'
console.log(obj.name)

// 값 변경을 막기 위해선 Object.freeze 사용
Object.freeze(obj)
obj.name = 'Choi'
console.log(obj.name)
