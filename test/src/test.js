'use strict'

let Enum = require('../..')
let chai = require('chai')
let {expect} = chai

chai.use(function(_chai, utils) {
  let {Assertion} = _chai
  utils.addProperty(Assertion.prototype, 'iterator', function() {
    let obj = this._obj
    new Assertion(obj.next).a('function')
    let iteratorFunc = obj[Symbol.iterator]
    new Assertion(iteratorFunc).a('function')
    new Assertion(iteratorFunc.bind(obj)()).equals(obj)
  })
})

describe('runtime', function() {

  it('should define Symbol', function() {
    expect(Symbol).to.be.a('function')
  })

  it('should define Symbol and have proper typeof', function() {
    expect(Symbol()).to.be.a('symbol')
  })

})

describe('SymbolEnum', function() {

  var TestEnum = new Enum('a', 'b')

  it('should be able to retrieve the values using the key and vice-versa', function() {
    expect(TestEnum[TestEnum.a]).to.equal('a')
    expect(TestEnum[TestEnum.b]).to.equal('b')
  })

  it('should be able to be used as an object key', function() {
    var obj = {}
    obj[TestEnum.a] = 4
    expect(obj[TestEnum.a]).to.equal(4)
  })

  it('should have Symbol values', function() {
    expect(TestEnum.a).to.be.a('symbol')
  })

  it('should enumerate keys', function() {
    expect(Enum.keys).to.be.a('symbol')
    let iterator = TestEnum[Enum.keys]()
    expect(iterator).to.be.an.iterator
    let keys = Array.from(iterator)
    expect(keys).to.have.length(2)
    expect(keys).to.have.members(['a', 'b'])
  })

  it('should enumerable values', function() {
    expect(Enum.values).to.be.a('symbol')
    var iterator = TestEnum[Enum.values]()
    expect(iterator).to.be.an.iterator
    var values = Array.from(iterator)
    expect(values).to.have.length(2)
    expect(values).to.have.members([TestEnum.a, TestEnum.b])
  })

  it('should enumerate entries', function() {
    var iterator = TestEnum[Symbol.iterator]()
    expect(iterator).to.be.an.iterator
    var values = Array.from(iterator)
    expect(values).to.deep.have.members([
      ['a', TestEnum.a],
      ['b', TestEnum.b]
    ])
  })

  it('should have the correct size', function() {
    expect(Enum.size).to.be.a('symbol')
    expect(TestEnum[Enum.size]).to.equal(2)
  })

  it('should have `keys` and `values` properties available', function() {
    expect(TestEnum.keys()).to.be.an.iterator
    expect(TestEnum.values()).to.be.an.iterator
    expect(Array.from(TestEnum.keys())).to.have.members(Array.from(TestEnum[Enum.keys]()))
    expect(Array.from(TestEnum.values())).to.have.members(Array.from(TestEnum[Enum.values]()))
  })

  it('should underscore provided keys', function() {
    var AEnum = new Enum('keys', 'foo')
    expect(AEnum.keys).to.be.a('symbol')
    expect(AEnum._keys).to.be.a('function')
    expect(AEnum._keys()).to.be.an.iterator
    var BEnum = new Enum('_values', 'values')
    expect(BEnum.values).to.be.a('symbol')
    expect(BEnum._values).to.be.a('symbol')
    expect(BEnum.__values).to.be.a('function')
    expect(BEnum.__values()).to.be.an.iterator
    var CEnum = new Enum('size')
    expect(CEnum.size).to.be.a('symbol')
    expect(CEnum._size).to.equal(1)
  })

  it('should not leak non-keys to Object.keys', function() {
    expect(Object.keys(TestEnum)).to.have.members(['a', 'b'])
  })

  it('should not have prototype methods from Object.prototype', function() {
    for (let property of Object.getOwnPropertyNames(Object.prototype)) {
      if (property === 'constructor') continue;
      expect(TestEnum[property]).to.be.undefined
    }
  })

  it('should override constructor when provided', function() {
    var CEnum = new Enum('constructor', 'baz')
    expect(CEnum.constructor).to.be.a('symbol')
    expect(CEnum[CEnum.constructor]).to.equal('constructor')
  })

  it('should be frozen', function() {
    for (let property of ['a', 'b', 'keys', 'values', Enum.keys, Enum.values, Enum.size, Symbol.iterator]) {
      try { TestEnum[property] = 7 } catch (err) {}
      expect(TestEnum[property]).to.not.equal(7)
    }
  })
})
