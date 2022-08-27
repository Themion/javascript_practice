let a = 'global'

const foo = () => {
    let a = 'local'
    console.log(a)
}

foo()
console.log(a)
