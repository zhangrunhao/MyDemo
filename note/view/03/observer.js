let obj = {name: 'zhang'}
observer(obj)
obj.name = 'li' // 监听成功: zhang--->li


function observer(obj) {
  if (!obj || typeof obj !== 'object') { // 看看有没有obj, 或者类型是否为对象, 如果是的话, 继续递归下去
    return
  }
  // 取出所有的属性进行遍历操作
  Object.keys(obj).forEach((key) => {
    // 监听每个属性
    defineReactive(obj, key, obj[key])
  })
}


function defineReactive(obj, key, val) {
  // 实例化一个对象, 把所有依赖这个属性对象的订阅者, 都放到这个对象下面的数组中
  let dep = new Dep
  
  // 监听子属性
  observer(val)
  // 为每个属性设置`setter`和`getter`
  Object.defineProperty(obj, key, {
    enumerable: true, // 可枚举
    configurable: false, //不能再修改或者删除
    get: function () { // 获取值的时候, 返回的val, 虽然并没有更改key对应的值, 但是通过get方法, 进行了更改
      return val
    },
    set: function (newVal) {
      console.log('监听成功: ' + val + `--->` + newVal)
      val = newVal // set方法, 来更改整个属性的值

      // 通知所有的订阅者, 每一个依赖这个属性的订阅者执行更新函数
      dep.notify()
    }
  })
}

// 构造函数, 有一个控制所有的订阅者, 有一个数组用来收集订阅者
function Dep() {
  this.subs = []
}

// 维护构造函数原型上的方法
// 多添加一个依赖这个属性的订阅者
Dep.prototype.addSub = function (sub) {
  this.subs.push(sub)
}

// 发布更新
Dep.prototype.notify = function () {
  // 遍历数组中的每一个订阅者, 均执行更新
  this.subs.forEach((sub) => {
    sub.update()
  })
}
