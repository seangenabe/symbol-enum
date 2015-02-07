
var assert = require('assert')
var Enum = require('../')

describe('SymbolEnum', function() {

  var TestEnum = new Enum('a', 'b')

  it('should be able to retrieve the values using the key and vice-versa', function() {
    assert(TestEnum[TestEnum.a] === 'a')
    assert(TestEnum[TestEnum.b] === 'b')
  })

  it('should be able to be used as an object key', function() {
    var obj = {}
    obj[TestEnum.a] = 4
    assert(obj[TestEnum.a] === 4)
  })

  it('should have Symbol values', function() {
    assert(typeof TestEnum.a === 'symbol')
  })
})
