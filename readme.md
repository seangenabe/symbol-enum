# SymbolEnum

Enum with symbols.

## API

### `#constructor(...keys)`
````javascript
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

## Versions

`symbol-enum@latest` (v2) - ES5-compatible version, as long the global Symbol exists.
`symbol-enum@next` (v3) - ES6-compatible version.

## License

MIT
