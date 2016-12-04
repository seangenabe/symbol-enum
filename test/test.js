const t = require('ava')
const isIterator = require('@f/is-iterator')
const Enum = require('..')

const TestEnum = new Enum('a', 'b')

t('constructor should retrieve values using the key and vice-versa', t => {
  t.true(TestEnum[TestEnum.a] === 'a')
  t.true(TestEnum[TestEnum.b] === 'b')
})

t('constructor', t => {
  t.true(typeof TestEnum.a === 'symbol', "should have Symbol values")
  t.throws(() => Enum('c', 'd'), TypeError, "should throw when called as func")
  t.false(
    TestEnum instanceof Object,
    "should not inherit from Object.prototype"
  )
})

t("should enumerate keys", t => {
  let iterator = TestEnum[Enum.keys]()
  t.truthy(isIterator(iterator))
  t.deepEqual(new Set(iterator), new Set(['b', 'a']))
})

t("should enumerate values", t => {
  let iterator = TestEnum[Enum.values]()
  t.truthy(isIterator(iterator))
  t.deepEqual(new Set(iterator), new Set([TestEnum.b, TestEnum.a]))
})

t('size', t => {
  t.truthy(TestEnum[Enum.size] === 2, 'size')
})

t('has', t => {
  t.truthy(TestEnum[Enum.has]('a') === true)
  t.truthy(TestEnum[Enum.has]('c') === false)
  t.truthy(TestEnum[Enum.has](TestEnum.a) === false)
})

t('hasValue', t => {
  t.truthy(TestEnum[Enum.hasValue](TestEnum.b) === true)
  t.truthy(TestEnum[Enum.hasValue]('b') === false)
})

t('Symbol.iterator', t => {
  let iterator = TestEnum[Symbol.iterator]()
  t.deepEqual(new Set(iterator), new Set([['a', TestEnum.a], ['b', TestEnum.b]]))
})

t('underscored properties', t => {
  t.is(TestEnum.keys, TestEnum[Enum.keys])
  t.is(TestEnum.values, TestEnum[Enum.values])
  t.is(TestEnum.size, TestEnum[Enum.size])
  t.is(TestEnum.has, TestEnum[Enum.has])
  t.is(TestEnum.hasValue, TestEnum[Enum.hasValue])
  let TestEnum1 = new Enum('keys')
  t.is(TestEnum1._keys, TestEnum[Enum.keys])
  let TestEnum2 = new Enum('keys', '_keys')
  t.is(TestEnum2.__keys, TestEnum[Enum.keys])
})
