# SymbolEnum

Enum with symbols.

[![Build Status](https://travis-ci.org/seangenabe/symbol-enum.svg?branch=master)](https://travis-ci.org/seangenabe/symbol-enum)
[![Dependency Status](https://david-dm.org/seangenabe/symbol-enum.svg)](https://david-dm.org/seangenabe/symbol-enum)
[![devDependency Status](https://david-dm.org/seangenabe/symbol-enum/dev-status.svg)](https://david-dm.org/seangenabe/symbol-enum#info=devDependencies)

## API

### `#constructor(...keys)`
````javascript
var Enum = require('symbol-enum')
var MyEnum = new Enum('a', 'b', 'c')
````

Creates a new Enum with the specified keys.

### `#{key}`
````javascript
var val = MyEnum.a // Symbol(a)
````

Retrieves the symbol corresponding to the key.

### `#{symbol}`
````javascript
MyEnum[val] // 'a'
````

Retrieves the key corresponding to the symbol.

## License

MIT
