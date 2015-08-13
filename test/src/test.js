'use strict'

var assert = require('assert')
var Enum = require('../..')

var _typeof = require('babel-runtime/helpers/typeof')['default'];
var _Symbol = require('babel-runtime/core-js/symbol')['default'];

describe('runtime', function() {

  it('should define Symbol', function() {
    assert(_Symbol !== undefined)
  })

  it('should define Symbol and have proper typeof', function() {
    assert(_typeof(_Symbol()) === 'symbol')
  })

})

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
    assert(_typeof(TestEnum.a) === 'symbol')
  })
})
