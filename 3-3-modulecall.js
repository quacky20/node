const names = require('./3-2-modulenames')
console.log(names)
const sayHi = require('./3-1-modules')
const data = require('./3-4-altnaming')

sayHi('Arman')
sayHi(names.name1)
sayHi(names.name2)

console.log(data)