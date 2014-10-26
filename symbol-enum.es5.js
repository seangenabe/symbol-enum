"use strict";
var SymbolEnum = function SymbolEnum() {
  for (var keys = [],
      $__3 = 0; $__3 < arguments.length; $__3++)
    keys[$__3] = arguments[$__3];
  for (var $__1 = keys[Symbol.iterator](),
      $__2; !($__2 = $__1.next()).done; ) {
    var key = $__2.value;
    {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: false,
        value: Symbol()
      });
    }
  }
  Object.freeze(this);
};
($traceurRuntime.createClass)(SymbolEnum, {}, {});
module.exports = SymbolEnum;

//# sourceMappingURL=symbol-enum.es5.map
