## 概述

### 作用
* 正常使用AJAX会需要考虑跨域问题, CORS是一套解决跨域的解决方案.

### 原理
* CORS定义一种跨域访问的机制, 可以让AJAX实现跨域.
* CORS允许一个域上的网络应用向另一个域提交AJAX请求.
* 实现此功能, 只需要服务器发送一个响应标头即可.

### 兼容性
* IE 8+
* 其他没啥问题
* ![CORS跨域兼容性](http://images.cnitblog.com/blog/159097/201401/06082033-9233ced009a644f9af909baca57a72b7.png)

## 启用

### 在请求目标的地址添加一个标头, 允许来自于某个地址, 例如`http://www.test.com` 的访问请求.
```php
// PHP代码
header("Acess-Control-Allow-Origin: http://www.test.com")
```

### 可以允许目标地址来自所有地址的请求
```php
// PHP代码
header("Acess-Control-Allow-Origin: *")
```

### 设置header后, 一个支持跨域的POST请求的server就完成了.

## 总结

### 安全问题
* CORS提供了一种跨域请求方案, 但没有为安全方位提供足够的保障机制
* 如需要信息的绝对安全, 不要依赖CORS中的权限限制, 应该使用更多其他的措施来保障. 例如OAuth2

### 使用场景
* 在移动端的支持到位.
* jsonp是get形式, 信息量有限, 信息量较大的时候用CORS.

## H5 API
> H5实现跨域: `postMessage()`

### 发送信息
* `otherWindow.postMessage(message, transferOrigin, [transfer])`
* otherWindow: 其他窗口的一个引用. iframe的contentWindow属性, window.open返回一个窗口对象, 或者是命名过数值索引的windows.frames
* message将要发送到其他window的数据. 会被序列化.
* trangetOrigin, 可以指定哪些窗口需要接受消息.
* tranfer: 可选. 是一串和message同时传递的Transferable对象, 这些对象的素所有权将被转义给消息的接收方, 而发送一方将不再保有所有权.

### 接受信息

```js
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  // For Chrome, the origin property is in the event.originalEvent
  // object.
  var origin = event.origin || event.originalEvent.origin; 
  if (origin !== "http://example.org:8080")
    return;

  // ... 
}
```
