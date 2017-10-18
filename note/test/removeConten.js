// let arr = [1, 2, 3, 2, 3, 4, 4, 4, 5, 6, 7, 5]
let arr = ['a', 'a', null, NaN, NaN, null]

let res = new Set(arr)

console.log([...res]) // [ 'a', null, NaN ]