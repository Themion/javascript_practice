var x = 1
if (true) {
    // 호이스팅되어 전역 변수로 취급 -> 기존에 선언된 var를 덮어씌움
    var x = 10
}
console.log(x)

function foo() {
    var x = 100
    bar()
}

function bar() {
    // 스코프, 즉 렉시컬 스코프에서 bar의 x는 foo의 x가 아니므로 10이 출력됨
    console.log(x)
}

foo()
bar()
