
function SymbolEnum() {
  Array.prototype.forEach.call(arguments, (function(key) {
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
  }).bind(this))
  Object.freeze(this)
}

module.exports = SymbolEnum
