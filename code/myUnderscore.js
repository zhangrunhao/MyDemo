(function () { // 立即执行函数
  // 首先是建立一个根对象
  // 在浏览器中就是 window或者 self对象, 
  // 在node中就是global对象
  // 在一些实质的机器中, 就是this, 所以不懂什么意思
  // 如果没有任何对象, 那就是一个空对象了
  var root = 
  typeof self == 'object' && self.self === self && self ||
  typeof global == 'object' && global.global === global && global ||
  this ||
  {};

  // 预先保存下`_`可能变化的值
  var previousUnderscore = root._;

  // 保存各个构造函数的原型
  var ArrayProto = Array.prototype,
  ObjProto = Object.prototype;
  // Symbol是ES6的第一种基本类型
  // 拥有独一无二的属性值
  var SymbolProto = typeof Symbol !== 'undeifned' ? Symbol.prototype : null


  // 把原型上的一些方法拿了下来
  // 向数组的最后添加一个元素
  var  push = ArrayProto.push,
  // 从数组中返回指定的元素, 参数是从哪个索引到哪个索引的位置, 如果是负数的话, 就是从后面开始截取
  //这个返回的是一个新数组, 原来的数组不变, 如果想要改变原来的数组的话, 就把调用splice, 就会从原来的数组中截取下来, 形成一个新数组
  slice = ArrayProto.slice,
  // 两个数组拼接取来
  concat = ArrayProto.concat,
  // 变成字符串的方法
  toString = ObjProto.toString,
  // 判断是不是在自己的对象下面, 返回的时候一个布尔类型, 如果是通过该 __proto__找到的, 就返回一个false
  hasOwnProperty = Object.hasOwnProperty;


  // 所有ES5中, 我们在这里公告, 所有我们想要用到的方法
  var nativeIsArray = Array.isArray,
  // 知道所有的属性名
  nativeKeys = Object.keys,
  // create用来创建一个对象, 并且, 这个对象可以指定原型链的指向
  nativeCreate = Object.create;

  // 创建一个空对象, 用来支持原型链的调用, 个人理解
  var Ctor = function () {};


  // 在Undersocre对象下面, 我们用到的地方, 创建一个安全的参考
  // _这个东西, 本来就是一个函数
  // instaceof 就是运算符, 就是前面的这个对象, 一直通过 __proto__ 看看能不能找到后面这个对象的 prototype
  var _ = function (obj) {
    // 如果传入的这个对象是一个_的实例对象 那么就返回这个对象
    if (obj instanceof _) return obj;
    // 如果obj不是_的实例对象, 并且 this也不是_实例的话, 就将obj变成一个_对象
    if (!(this instanceof _)) return new _(obj);
    // 在new的时候, 会把return都忽略掉, 直接进行this的赋值
    // 这个时候, 就能执行到最后一行了
    this._wrapped = obj;
  };


  // 判断这种默认的情况是不是在node环境中
  // 或者是在其他的环境中或者是一种老的require的加载方式
  if (typeof exports !== 'undefined') {// 只有node对象中才有这个exports对象, 这是一种模块加载机制
    if (typeof module !== 'undefined' && module.exports) {// 再次判断是不是node环境
      exprots = module.exports = _;
    }
    exports._ = _; //这应该是require的一种方式
  } else {//这就是在浏览器环境中了
    root._ = _;
  }

  // 添加当前的一个版本
  _.VERSION = '1.8.3'

  // 这个再underscore中是一个基础函数
  // 用来优化JS的执行效率
  // 传入的参数, 分别是: 函数, 然后调用这个函数的, 文本内容, 然后是参数的个数
  var optimizeCb = function (func, context, argCount) {
    // void 0 的意思就是undefiend
    // void是一个函数, 无论什么时候, 返回值都是undefiend
    if (context === void 0) return func; // 如果没有传入谁调用的func, 那么直接把这个func返回出去就好了.

    // 接下来根据参数的个数进行运算
    switch (argCount) {
      case 1:
        return function (value) {
          return func.call(context, value);
        };
      case null:
      case 3:
        return function (value, index, collection) {
          return func.call(context, value, index, collection);
        };
      case 4:
        return function (accumulator, value, index, collection) {
          return func.call(context, accumulator, value, index, collection);
        };
    }

    // 参数是一个数组的时候
    return function () {
      return func.apply(context, arguments)
    }
  }


})()