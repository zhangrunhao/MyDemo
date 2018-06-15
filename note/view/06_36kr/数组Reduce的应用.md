# 数组Reduce的应用

> [参考](https://segmentfault.com/a/1190000010731933)

## 简单应用

```js
var arr = [1,2,3,4,5]

var sum = arr.reduce(function (prev, cur, index, arr) {
  console.log(prev, cur, index)
  return prev + cur
})

console.log(sum)
```

## 第一层

### for

```js
var result = [
  {
      subject: 'math',
      score: 88
  },
  {
      subject: 'chinese',
      score: 95
  },
  {
      subject: 'english',
      score: 80
  }
];

var sum = 0
for (var i =0; i< result.length; i++) {
  sum += result[i].score
}
console.log(sum)
```

### reduce

```js
var sum = result.reduce((pre, cur, index, arr) => {
  // if (typeof pre === 'object') { // 如果没有默认值, 需要设置这个判断 , 来排除第一项
  //   pre = pre.score
  // }
  return cur.score + pre
} ,0)
console.log(sum)
```

### 加个权重

```js
var dis = {
  math: 0.5,
  chinese: 0.3,
  english: 0.2
}

var sum = 0
// for (var i =0; i< result.length; i++) {
//   sum += result[i].score
// }

var sum = result.reduce((pre, cur, index, arr) => {
  // if (typeof pre === 'object') { // 如果没有默认值, 需要设置这个判断 , 来排除第一项
  //   pre = pre.score
  // }
  return cur.score * dis[cur.subject] + pre
} ,0)
console.log(sum)
```

## 一串字符串中字母出现的次数

```js
var arrString = 'aaabbsssbdd'

var res = arrString.split('').reduce(function (res, cur, index, arr) {
  res[cur] ? ++res[cur] : res[cur] = 1
  return res
}, {})

console.log(res)
```