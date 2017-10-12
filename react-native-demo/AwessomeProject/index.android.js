// 创建引入组件
import React, {Component} from 'react';
import {AppRegistry, Image} from 'react-native';

class Bananas extends Component {
  render () {
    let pic = {
      uri: 'https://img6.bdstatic.com/img/image/public/yuanjihuasy.png'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}

AppRegistry.registerComponent('AwessomeProject', () => Bananas);



// import React, { Component } from 'react';
// import { AppRegistry, Image } from 'react-native';

// class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://img6.bdstatic.com/img/image/public/yuanjihuasy.png'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}} />
//     );
//   }
// }

// AppRegistry.registerComponent('AwessomeProject', () => Bananas);



// // 初始化一段文本内容
// import React, {Component} from 'react';
// import {AppRegistry, Text} from 'react-native'
// // 编写一个组件, 这是我们一个根节点 class myApp extends Component
// class myApp extends Component{
//   // 这是唯一必须的, 必须有一个用于渲染结构的JSX语句
//   render() {
//     return (
//       <Text>这是一段显示文本</Text>
//     );
//   }
// }
// // app注册这个组件, 一般在一个应用里面只调用一次 使用`AppReaistry`进行注册操作
// AppRegistry.registerComponent('AwessomeProject', () => myApp)