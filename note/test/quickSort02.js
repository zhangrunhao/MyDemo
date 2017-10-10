var arr = [2, 1, 3, 2.5, 5, 4]



var quickSort = function (arr) {
  // 检查数组元素的个数, 如果小于等于1 就返回
  if (arr.length <= 1) {
    return arr
  }
  // 选择基准, 并将其与原数组分离, 再定义两个数组进去, 用来存放一左一右的两个子集
  var pivotIndex = Math.floor(arr.length / 2)
  // 按照基准截取出来, 和原数组分离
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = []
  var right = []

  // 开始遍历数组, 小于基准的元素放到左边的子集, 大于基准的元素放到右边子集
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  // 使用递归不断重复这个过程即可得到排序后的数组
  return quickSort(left).concat([pivot], quickSort(right))
}

var res = quickSort(arr)
console.log(res)