const { tryCatch } = require('../tryCatch')

function foo() {
    console.log(x)
    var x = 10
    return x
}

foo()
tryCatch(() => console.log(x))
