# SymbolEnum

Enum with symbols.

[![npm](https://img.shields.io/npm/v/symbol-enum.svg?style=flat-square)](https://www.npmjs.com/package/symbol-enum)
[![Build Status](https://img.shields.io/travis/seangenabe/symbol-enum/master.svg?style=flat-square)](https://travis-ci.org/seangenabe/symbol-enum)
[![Dependency Status](https://img.shields.io/david/seangenabe/symbol-enum.svg?style=flat-square)](https://david-dm.org/seangenabe/symbol-enum)
[![devDependency Status](https://img.shields.io/david/dev/seangenabe/symbol-enum.svg?style=flat-square)](https://david-dm.org/seangenabe/symbol-enum#info=devDependencies)

## Usage

```javascript
var SymbolEnum = require('symbol-enum')
```

### `#constructor(...keys)`

Creates a new Enum with the specified keys.

````javascript
var MyEnum = new SymbolEnum('a', 'b', 'c')
````

### `#[`*key*`]`

Retrieves the symbol corresponding to the key.

````javascript
var val = MyEnum.a
val // Symbol(a)
````

### `#[`*symbol*`]`

Retrieves the key corresponding to the symbol.

````javascript
MyEnum[val] // "a"
````

### `#[SymbolEnum.keys]()`

Returns an iterator that can be used to iterate through the keys.

```javascript
Array.from(MyEnum[SymbolEnum.keys]) // "[ a, b, c ]"
```

### `#[SymbolEnum.values]()`

Returns an iterator that can be used to iterate through the values.

```javascript
Array.from(MyEnum[SymbolEnum.values]) // "[ Symbol(a), Symbol(b), Symbol(c) ]"
```

### `#[SymbolEnum.size]`

Returns the number of keys passed to the constructor.

### 'Underscore'd properties

For your convenience, `#[SymbolEnum.keys]` and `#[SymbolEnum.values]` are also available directly on the object itself as `#keys` and `#values` but only if you don't specify `keys` and `values` as a member of the enum itself. If you do, underscores will be prepended to the property name until it becomes available. For example, if you added both `keys` and `_keys` in the Enum, `#[SymbolEnum.keys]` will also be available at `#__keys`.

### Extends from null

`SymbolEnum` extends from null and does not have any string prototype methods so we have a clean slate. This means we don't inherit from `Object` and have any of its properties.

#### Exception: `#constructor`

Since we're using classes here, that means `[constructor][Object.prototype.constructor]` will still be defined by default. No worries, if you specify `constructor` as a key, it will be overridden.

## License

MIT

[Object.prototype.constructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
