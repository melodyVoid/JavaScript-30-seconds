// 1.arrayGcd 求数组的最大公约数
const arrayGcd = arr => {
  const gcd = (x, y) => !y ? x : gcd(y, x % y)
  return arr.reduce((a, b) => gcd(a, b))
}

console.log(arrayGcd([4, 2, 8])) // 2

// 2.array.Lcm 求数组的最小公倍数
const arrayLcm = arr => {
  const gcd = (x, y) => !y ? x : gcd(y, x % y)
  const lcm = (x, y) => (x * y) / gcd(x, y)
  return arr.reduce((a, b) => lcm(a, b))
}

console.log(arrayLcm([4, 2, 8])) // 8

// 3.arrayMax 求数组中的最大值
const arrayMax = arr => Math.max(...arr)
console.log(arrayMax([4, 2, 8])) // 8

// 4.arrayMin 求数组中的最小值
const arrayMin = arr => Math.min(...arr)
console.log(arrayMin([4, 2, 8])) // 2

// 5.chunk 按照给定的size将一个数组切分成含有size个数的更小数组块的数组。
const chunk = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size)}, (v, i) => {
    return arr.slice(i * size, i * size + size)
  })
}

const chunk2 = (arr, size) => Array.from({length: Math.ceil(arr.length / size)}, (v, i) => arr.slice(i * size, i * size + size))

console.log(chunk2([1, 2, 3, 4, 5], 2))

// 6.compact 去除数组中的 falsey 元素
const compact = arr => arr.filter(Boolean)
console.log(compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]))

// 7.countOccurrences 统计一个元素在一个数组中出现的次数
const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a, 0)
console.log(countOccurrences([1,1,2,1,2,3], 1))  // 3