const { tryCatch } = require('../tryCatch')

// 함수 식별자는 해당 함수 내부에서만 사용 가능
// 실제로 함수를 사용할 때 사용하는 식별자는
// 자바스크립트가 암묵적으로 생성한 식별자를 활용함

// 함수 선언문으로 함수를 생성
// 함수 식별자를 자바스크립트가 암묵적으로 foo로 지정
function foo() { console.log('foo') }
// 함수 표현식으로 함수를 생성
// 좌변이 존재하지 않으므로 함수를 호출할 식별자가 지정되지 않음
(function bar() { console.log('bar') })

// 함수 생성 시 실제로 작동하는 원리
let baz = function baaz() { console.log('baz') }

tryCatch(() => foo())
tryCatch(() => bar())
tryCatch(() => baz())
tryCatch(() => baaz())
