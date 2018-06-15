Array.prototype.fakeReduce = function (fn, base) {
  if (typeof fn !== 'function') {
    throw new TypeError('arguments[0] is not a funciton')
  }
  // this 指向原数组
  // 拷贝数据, 更改指针方向
  var arr = this.concat()
  // 处理默认值, arr就是我们要处理的叠加参数数组
  if (typeof base !== 'undefined') {
    arr.unshift(base)
  }
  while (arr.length > 1) { // 因为是需要前一项, 向后一项, 叠加, 所以需要两个元素以上
    var index = this.length - arr.length + 1
    var result = fn.call(null, arr[0], arr[1], index, this)
    arr.splice(0, 2, result) // 使用splice直接替换
  }
  return result
}

var arr = [1, 2, 3, 4, 5]
var res = arr.fakeReduce((pre, cur, index, arr) => {
  return pre + cur
}, 0)
console.log(res)