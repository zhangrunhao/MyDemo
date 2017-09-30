// 初始化图片, 并将参数传入 import React, {Component} from 'react'; import {AppRegistry,
// Image} from 'react-native' // 其实myApp是一个构造函数, 我们直接在注册时候, 返回这个构造函数 class
// myImageApp extends Component {   render() {     let pic = {       uri:
// 'http://img1.imgtn.bdimg.com/it/u=2530029311,2910169656&fm=27&gp=0.jpg'     }
//     return (<Image source={pic} style={{       width: 193,       height: 110
//    }}/>)   } } // 注册组件 AppRegistry.registerComponent('AwessomeProject', () =>
// myImageApp)

import React, { Component } from 'react'; 
import { AppRegistry,Image,Text } from 'react-native'; 
// console.ignoredYellowBox = ['Remote debugger']
class Bananas extends Component {   
  render() {
    return (
      <Image 
        source={{uri: 'https://img6.bdstatic.com/img/image/public/yuanjihuasy.png'}} 
        style={{width: 400, height: 400}}
        // onLoadStart={() => {console.log('loadStart')}}
        // onLoad={() => {console.log('load')}}
        // onLoadEnd={() => {console.log('LoadEnd')}}
        onError={(err) => {console.log(err)}}
      />
      // <Image source={require('./images/03.jpg')}/>
      // <Text>这里是显示一段文本</Text>
    );
  }
}
AppRegistry.registerComponent('AwessomeProject', () => Bananas);



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