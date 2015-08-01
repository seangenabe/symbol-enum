'use strict'

class SymbolEnum {

  constructor(...keys) {
    for (var key of keys) {
      var sym = Symbol(key)

      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: false,
        value: sym
      })

      Object.defineProperty(this, sym, {
        enumerable: false,
        configurable: false,
        value: key
      })
    }
    Object.freeze(this)
  }

}

module.exports = SymbolEnum
