const tryCatch = (f) => {
    try { f(2, 5) }
    catch(e) { console.log(`${e.name}: ${e.message}`) }
}

tryCatch(() => { console.log(add) })
tryCatch(() => { console.log(sub) })

tryCatch(() => { console.log(add(2, 5)) })
tryCatch(() => { console.log(sub(2, 5)) })

// 함수 선언문 사용 시 런타임 이전에 V8 엔진에서 먼저 실행됨
// 따라서 런타임 시에는 선언 이전에 실행이 가능함
function add(a, b) { return a + b }
// var 역시 호이스팅 되지만 실제로 값이 할당되는 건 런타임일 때이므로
// 선언 이전에는 함수로 활용할 수 없다.
var sub = function(a, b) { return a - b }
