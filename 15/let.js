const { tryCatch } = require('../tryCatch')

let foo
// 값 할당 이전에는 undefined로 초기화됨
console.log(foo)
foo = 123
console.log(foo)
// 에러 발생
// let foo = 456

{
    // 같은 스코프 내에선 선언 이전에 해당 let 변수에 접근할 수 없음
    tryCatch(() => console.log(foo))
    let foo = 456 
    let bar = 789
}

console.log(foo)
tryCatch(() => console.log(bar))
