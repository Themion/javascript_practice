const { tryCatch } = require('../../tryCatch');

(function() {
    // 모든 코드를 즉시 실행 함수 안에 넣어 지역 변수를 전역 변수처럼 활용
    var foo = 10
    console.log(foo)
})()

tryCatch(() => console.log(foo))
