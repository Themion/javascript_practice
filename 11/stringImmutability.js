let str = 'string'
str[0] = 'S'
console.log(str)
console.log(str.replace(/^([.]{0})./, '$1S'))