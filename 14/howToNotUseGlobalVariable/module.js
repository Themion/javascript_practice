const counter = (function() {
    var num = 0
    return {
        increase: function() { return ++num },
        decrease: function() { return +--num }
    }
})()

console.log(counter.num)

console.log(counter.increase())
console.log(counter.increase())
console.log(counter.decrease())
console.log(counter.decrease())
