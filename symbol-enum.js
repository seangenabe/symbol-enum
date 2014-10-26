
class SymbolEnum {

  constructor(...keys) {
    for (let key of keys) {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: false,
        value: Symbol()
      })
    }
    Object.freeze(this)
  }

}

module.exports = SymbolEnum
