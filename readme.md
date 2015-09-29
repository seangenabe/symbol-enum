# SymbolEnum

Enum with symbols.

[![Build Status](https://travis-ci.org/seangenabe/symbol-enum.svg?branch=master)](https://travis-ci.org/seangenabe/symbol-enum)
[![Dependency Status](https://david-dm.org/seangenabe/symbol-enum.svg)](https://david-dm.org/seangenabe/symbol-enum)
[![devDependency Status](https://david-dm.org/seangenabe/symbol-enum/dev-status.svg)](https://david-dm.org/seangenabe/symbol-enum#info=devDependencies)

## API

```javascript
var Enum = require('symbol-enum')
```

### `#constructor(...keys)`

Creates a new Enum with the specified keys.

````javascript
var MyEnum = new Enum('a', 'b', 'c')
````

### `#[key]`

Retrieves the symbol corresponding to the key.

````javascript
var val = MyEnum.a
val // Symbol(a)
````

### `#[symbol]`

Retrieves the key corresponding to the symbol.

````javascript
MyEnum[val] // "a"
````

### `#[Enum.keys]()`

Returns an iterator that can be used to iterate through the keys.

```javascript
Array.from(MyEnum[Enum.keys]) // "[ a, b, c ]"
```

### `#[Enum.values]()`

Returns an iterator that can be used to iterate through the values.

```javascript
Array.from(MyEnum[Enum.values]) // "[ Symbol(a), Symbol(b), Symbol(c) ]"
```

### `#[Enum.size]`

Returns the number of keys passed to the constructor.

### `Enum.keys`
### `Enum.values`

Symbols that enable above functionality. Also available using `import {keys, values} from 'symbol-enum'`.

### 'Underscore'd properties

For your convenience, `#[Enum.keys]` and `#[Enum.values]` are also available directly on the object itself as `#keys` and `#values` but only if you don't specify `keys` and `values` as a member of the enum itself. If you do, underscores will be prepended to the property name until it becomes available. For example, if you added both `keys` and `_keys` in the Enum, `#[Enum.keys]` will also be available at `#__keys`.

### Extends from null

`SymbolEnum` initially extends from null and does not have any string prototype methods so we have a clean slate.

#### Exception: `#constructor`

Since we're using classes here, `constructor` will be defined by default. No worries, if you specify `constructor` as a key, it will be overridden.

## License

MIT
