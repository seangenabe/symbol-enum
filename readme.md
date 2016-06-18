# SymbolEnum

Enum with symbols.

[![npm](https://img.shields.io/npm/v/symbol-enum.svg?style=flat-square)](https://www.npmjs.com/package/symbol-enum)
[![Build Status](https://img.shields.io/travis/seangenabe/symbol-enum/master.svg?style=flat-square)](https://travis-ci.org/seangenabe/symbol-enum)
[![Coverage Status](https://img.shields.io/coveralls/seangenabe/symbol-enum/master.svg?style=flat-square)](https://coveralls.io/github/seangenabe/symbol-enum?branch=master)
[![Dependency Status](https://img.shields.io/david/seangenabe/symbol-enum.svg?style=flat-square)](https://david-dm.org/seangenabe/symbol-enum)
[![devDependency Status](https://img.shields.io/david/dev/seangenabe/symbol-enum.svg?style=flat-square)](https://david-dm.org/seangenabe/symbol-enum#info=devDependencies)
[![node](https://img.shields.io/node/v/symbol-enum.svg?style=flat-square)](https://nodejs.org/en/download/)

## Usage

```javascript
const SymbolEnum = require('symbol-enum')
```

### `#constructor(...keys)`

Creates a new Enum with the specified keys.

````javascript
const MyEnum = new SymbolEnum('a', 'b', 'c')
````

### `#[`*key*`]`

Retrieves the symbol corresponding to the key.

````javascript
const val = MyEnum.a
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

### `#[SymbolEnum.has](key)`

Returns whether the enum contains the specified key.

```javascript
MyEnum[SymbolEnum.has]('b') // true
```

### `#[SymbolEnum.hasValue](value)`

Returns whether the enum contains the specified value.

```javascript
MyEnum[Symbol.hasValue](MyEnum.c) // true
```

### `#[SymbolEnum.size]`

Returns the number of keys passed to the constructor.

### 'Underscore'd properties

For your convenience, the following properties are also available directly on the object itself, but only if you don't specify `keys` and `values` as a member of the enum itself.

* `#[SymbolEnum.keys]` as `keys`
* `#[SymbolEnum.values]` as `values`
* `#[SymbolEnum.has]` as `has`
* `#[SymbolEnum.hasValue]` as `hasValue`

If you do, underscores will be prepended to the property name until it becomes available. For example, if you added both `keys` and `_keys` in the Enum, `#[SymbolEnum.keys]` will also be available at `#__keys`.

### Extends from null

`SymbolEnum` extends from null and does not have any string prototype methods so we have a clean slate. This means we don't inherit from `Object` and have any of its properties.

#### Exception: `#constructor`

Since we're using classes here, that means [`constructor`][Object.prototype.constructor] will still be defined by default. No worries, if you specify `constructor` as a key, it will be overridden.

## License

MIT

[Object.prototype.constructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
