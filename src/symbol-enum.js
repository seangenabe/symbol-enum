'use strict'

var k = Symbol('keys'),
  v = Symbol('values'),
  size = Symbol('size'),
  priv = Symbol('private')

class SymbolEnum extends null {

  constructor(...keys) {
    super()

    hiddenSet(this, priv, {})
    var pairs = []
    this[priv].pairs = pairs
    this[priv].keys = keys
    for (var key of keys) {
      var sym = Symbol(key)

      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: false,
        value: sym
      })

      hiddenSet(this, sym, key)

      pairs.push([key, sym])
    }

    hiddenSet(this, underscoreProperty(this, 'keys'), function getKeys() {
      return this[k]()
    })

    hiddenSet(this, underscoreProperty(this, 'values'), function getValues() {
      return this[v]()
    })

    Object.defineProperty(this, underscoreProperty(this, 'size'), {
      enumerable: false,
      configurable: false,
      get: function getSize() {
        return this[size]
      }
    })

    Object.freeze(this)
  }

  *[k]() {
    for (let pair of this[priv].pairs) yield pair[0]
  }

  *[v]() {
    for (let pair of this[priv].pairs) yield pair[1]
  }

  get [size]() {
    return this[priv].pairs.length
  }

  [Symbol.iterator]() {
    return Array.prototype[Symbol.iterator].call(this[priv].pairs)
  }

  static get keys() {
    return k
  }

  static get values() {
    return v
  }

  static get size() {
    return size
  }

  static get SymbolEnum() {
    return SymbolEnum
  }
}

module.exports = SymbolEnum

function hiddenSet(obj, name, value) {
  Object.defineProperty(obj, name, {
    enumerable: false,
    configurable: false,
    value
  })
}

function underscoreProperty(obj, name) {
  for (; Object.prototype.hasOwnProperty.call(obj, name); name = '_' + name) {}
  return name
}
