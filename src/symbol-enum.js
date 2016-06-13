'use strict'

var k = Symbol('keys'),
  v = Symbol('values'),
  size = Symbol('size'),
  has = Symbol('has'),
  hasValue = Symbol('hasValue'),
  priv = Symbol('private')

class SymbolEnum extends null {

  constructor(...keys) {
    super()

    hiddenSet(this, priv, {})
    var pairs = []
    this[priv].pairs = pairs
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

    hiddenSet(this, underscoreProperty(this, 'keys'), SymbolEnum.prototype[k])

    hiddenSet(this, underscoreProperty(this, 'values'), SymbolEnum.prototype[v])

    hiddenSet(this, underscoreProperty(this, 'has'), SymbolEnum.prototype[has])

    hiddenSet(
      this,
      underscoreProperty(this, 'hasValue'),
      SymbolEnum.prototype[hasValue]
    )

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

  [has](key) {
    return typeof this[key] === 'symbol'
  }

  [hasValue](value) {
    return typeof this[value] === 'string'
  }

  [Symbol.iterator]() {
    return this[priv].pairs[Symbol.iterator]()
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

  static get has() {
    return has
  }

  static get hasValue() {
    return hasValue
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
