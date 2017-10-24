# ES6中的Rest参数和默认参数

## Rest参数

### 一个例子
* 编写一个函数, 用来判断, 某个字符串中, 是否其他的字符串, 如果有则返回true, 所有的都不含有, 返回false
* containsAll("banana", "b", "nan") 将返回true，containsAll("banana", "c", "nan") 将返回 false。
```js
  var res = containsAll("banana", "a", "nan")
  console.log(res)

  function containsAll(haystack) {
    for (var i = 1; i < arguments.length; i++) {
      var needle = arguments[i];
      if (haystack.indexOf(needle) === -1) {
        return false
      }
    }
    return true
  }
```

### 使用rest参数实现
```js
  function containsAll(haystack, ...needles) { 
    for (var needle of needles) {
      if (haystack.indexOf(needle) === -1) {
        return false
      }
    }
    return true
  }
```
* ...表示了needles是一个rest对象, 剩余的所有实参都放到needles这个参数中
* 只能将函数的最后一个参数作为Rest参数
* Rest参数之前的参数正常填充, 如果不够的话, Rest参数是一个[] 
**绝对不会是undefiend**

## 参数的默认值

### 可以直接在参数后面命名赋值默认值
```js
  function testFunc(one="aaa", two="bbb") {
    return `this is a ${one} and ${two}`
  }
  console.log(testFunc())
```

### 参数的默认值从左向右计算, 意味着, 后面的默认值可以调用前面的已经填充玩的参数
```js
  function testFunc(one="aaa", two=(one === "aaa" ? "yes" : "no")) {
    return `this is a ${one} and ${two}`
  }
  console.log(testFunc())
```

### 传递undeifend, 等同于没有传递改参数
```js
  // 两周情况是完全相同的
  function func(a=11, b) {
    // ...
  }
  function func(a=11, b=undefined) {
    // ...
  }
```

## 兼容性
* 属于ES6语法, 使用babel进行压缩处理即可.
* 改天还应该写写关于处理ES6的兼容性的方法.

## 感谢作者
> 这是自己看到了不会的, 然后从这篇文章中学习了. 再次感谢作者的分享.
> 对了我是在伯乐在线上看到的这篇转载的文章
* 原文出处: [Jason Orendorff]("https://hacks.mozilla.org/2015/05/es6-in-depth-rest-parameters-and-defaults/")
* 译文出处: [bubkoo的博客（@问崖的崖）   ]("http://bubkoo.com/2015/06/27/es6-in-depth-rest-parameters-and-defaults/")
