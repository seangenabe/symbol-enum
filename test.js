var Enum = require('./')

var TestEnum = new Enum('a', 'b')

var obj = {}

obj[TestEnum.a] = 4

if (obj[TestEnum.a] != 4) throw new Error()
console.log(typeof(TestEnum.a))