var arr = [2, 1, 3, 2.5, 5, 4]


    var res = quickSort(arr)
    console.log(res)

    function quickSort(arr, left, right) {
      var len = arr.length
      var partitionIndex // 划分索引

      left = typeof left != 'number' ? 0 : left
      right = typeof right != 'number' ? len - 1 : right

      if (left < right) {
        partitionIndex = partition(arr, left, right)
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
      }

      return arr
    }

    // 划分函数: 分区操作
    function partition(arr, left, right) {
      var pivot = left // 设定基准值(pivot)
      var index = pivot + 1
      for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
          swap(arr, i, index)
          index++
        }
      }
      swap(arr, pivot, index - 1);
      return index - 1
    }

    // 交换函数
    function swap(arr, i, j) {
      var temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
    }