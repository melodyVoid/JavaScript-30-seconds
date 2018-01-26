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

## 6. compact 移除掉数组里`falsey`的元素。

```js
const compact = arr => arr.filter(Boolean)
console.log(compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]))
// [ 1, 2, 3, 'a', 's', 34 ]
```

## 7. countOccunrrences 统计一个元素在一个数组中出现的次数

```js
const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a, 0)
console.log(countOccurrences([1,1,2,1,2,3], 1))  // 3
```

统计一个元素在一个数组中出现的次数。

使用`Array.reduce()`在遍历过程中如果指定元素在数组中出现，则增加它的次数值，默认次数为0。

三元运算符`(v === value ? a + 1 : a + 0)`遍历过程中判断遍历数组值`v`是否严格等于指定值`value`，是，次数`a+1`；否，`a+0`。

最后的一个逗号后面的0，是这个初始值，即`a=0`，这个懂`reduce`方法都知道，特别指出是，因为这个函数一定会有返回值，如果指定元素没有在数组中出现一次，返回值是`0`，所以必须得初始化为`0`。

