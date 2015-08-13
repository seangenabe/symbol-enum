'use strict'

var _Symbol = require('babel-runtime/core-js/symbol')['default'];

export default class SymbolEnum {

  constructor(...keys) {
    for (var key of keys) {
      var sym = _Symbol(key)

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
