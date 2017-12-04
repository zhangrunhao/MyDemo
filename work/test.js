var arr = [1, 2, 3, 4]

function myAjax(param) {
  setTimeout(() => {
    new Promise((reslove, reject) => {
      reslove(param)
    })
  }, 0)
}

arr.forEach((item) => {
  myAjax(item).then((res) => {
    console.log(res)
  })
})