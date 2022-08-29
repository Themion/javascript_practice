const { tryCatch } = require('../tryCatch')

// const 선언 시 초기화 필수
// const foo

{
    // const는 호이스팅 되지 않음
    tryCatch(() => console.log(foo))
    const foo = 1
    console.log(foo)
    // const는 재할당되지 않음
    tryCatch(() => { foo = 2 })
}

tryCatch(() => console.log(foo))
