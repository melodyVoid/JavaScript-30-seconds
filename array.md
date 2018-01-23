# 数组

## 1. arrayGcd 计算最大公约数

```js
const arrayGcd = arr => {
  const gcd = (x, y) => !y ? x : gcd(y, x % y)
  return arr.reduce((a, b) => gcd(a, b))
}
```

欧几里得算法，辗转求余。

## 2. arrayLcm 计算最小公倍数

```js
const arrayLcm = arr => {
  const gcd = (x, y) => !y ? x : gcd(y, x % y)
  const lcm = (x, y) => (x * y) / gcd(x, y)
  return arr.reduce((a, b) => lcm(a, b))
}
```

`lcm`算法用到了前面的`gcd`算法，关键点是两个数的最大公约数和最小公倍数的乘积正好就是这两个数的乘积。

## 3. arrayMax 计算数组的最大值

```js
const arrayMax = arr => Math.max(...arr)
```

## 4. arrayMin 计算数组的最小值

```js
const arrayMin = arr => Math.min(...arr)
```

## 5. chunk 按照给定的`size`将一个数组切分成含有`size`个数的更小数组块的数组。

```js
const chunk = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size)}, (v, i) => {
    return arr.slice(i * size, i * size + size)
  })
}
```

使用`Array.from()`生产新的符合定义的数组。使用`slice()`来截取指定`size`个元素组成新的数组块。如果原数组长度不能被`size`整除，最后的剩余的那些元素将归属于最后一个块。