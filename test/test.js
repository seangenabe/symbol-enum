'use strict'

const tap = require('tap')
const isIterator = require('@f/is-iterator')
const isEqual = require('lodash.isequal')
const Enum = require('..')

const TestEnum = new Enum('a', 'b')

tap.test('constructor', t => {

  tap.test("retrieve values using the key and vice-versa", t => {
    t.ok(TestEnum[TestEnum.a] === 'a')
    t.ok(TestEnum[TestEnum.b] === 'b')
    t.end()
  })

  t.ok(typeof TestEnum.a === 'symbol', "should have Symbol values")

  t.end()
})

tap.test("should enumerate keys", t => {
  let iterator = TestEnum[Enum.keys]()
  t.ok(isIterator(iterator))
  t.ok(isEqual(new Set(iterator), new Set(['b', 'a'])))
  t.end()
})

tap.test("should enumerate values", t => {
  let iterator = TestEnum[Enum.values]()
  t.ok(isIterator(iterator))
  t.ok(isEqual(new Set(iterator), new Set([TestEnum.b, TestEnum.a])))
  t.end()
})

tap.test('size', t => {
  t.ok(TestEnum[Enum.size] === 2, 'size')
  t.end()
})

tap.test('has', t => {
  t.ok(TestEnum[Enum.has]('a') === true)
  t.ok(TestEnum[Enum.has]('c') === false)
  t.ok(TestEnum[Enum.has](TestEnum.a) === false)
  t.end()
})

tap.test('hasValue', t => {
  t.ok(TestEnum[Enum.hasValue](TestEnum.b) === true)
  t.ok(TestEnum[Enum.hasValue]('b') === false)
  t.end()
})

tap.test('Symbol.iterator', t => {
  let iterator = TestEnum[Symbol.iterator]()
  t.ok(isEqual(new Set(iterator), new Set([['a', TestEnum.a], ['b', TestEnum.b]])))
  t.end()
})

tap.test('underscored properties', t => {
  t.ok(TestEnum.keys === TestEnum[Enum.keys])
  t.ok(TestEnum.values === TestEnum[Enum.values])
  t.ok(TestEnum.size === TestEnum[Enum.size])
  t.ok(TestEnum.has === TestEnum[Enum.has])
  t.ok(TestEnum.hasValue === TestEnum[Enum.hasValue])
  let TestEnum1 = new Enum('keys')
  t.ok(TestEnum1._keys === TestEnum[Enum.keys])
  let TestEnum2 = new Enum('keys', '_keys')
  t.ok(TestEnum2.__keys === TestEnum[Enum.keys])
  t.end()
})
