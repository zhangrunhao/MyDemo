# JavaScript中简单排序总结

## 冒泡排序
> * 经典排序算法, 双重for循环
* **在第二个for循环的时候, `j < arr.len -1 -i` , 这一步的优化很重要**
```js
    function bullSort(arr) {
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) { // 相邻元素两两对比
            var temp = arr[j + 1] // 相邻元素交换位置
            arr[j + 1] = arr[j]
            arr[j] = temp
          }
        }
      }
      return arr
    }
```

## 选择排序
> * 每一次找到一个最小的数, 并放到最前面, 
> * 下一次再找到的时候, 就忽略前面已经找好的数.
```js
    function SelectSort(arr) {
      var len = arr.length
      var minIndex
      var temp
      for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) { 
          if (arr[j] < arr[minIndex]) { // 从每一个元素中找到最小的那个
            minIndex = j // 保存最小索引
          }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
      }
      return arr
    }
```

## 插入排序
> 一旦发现不合适就不断的向前查找是关键
```js
    function insertionSort(arr) {
      var len = arr.length
      var preIndex
      var current
      for (var i = 1; i < len; i++) {
        preIndex = i - 1
        current = arr[i]
        // 发现某个数值前面的数大于了当前的数, 就一直向前查找, 如果不是合适的位置, 就以此把前面数向后传递
        // 一直找到合适的位置, 将我们找到的最小变量赋值
        while (preIndex >= 0 && arr[preIndex] > current) {
          arr[preIndex + 1] = arr[preIndex]
          preIndex--
        }
        arr[preIndex + 1] = current
      }
      return arr
    }
```