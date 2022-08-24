foo: {
    console.log('start foo')
    break foo
    console.log('done foo')
}

doubleLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j === 3) break doubleLoop
        console.log(`i: ${i}, j: ${j}`)
    }
}

console.log('Done!')
