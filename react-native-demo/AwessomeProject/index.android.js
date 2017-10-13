// State(状态)
import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';

// class 的构造函数必须通过 new 进行调用.
class Blink extends Component {
  // 属性
  // 其中的this就是代表创建的对象
  // 其实这也是挂载到这个构造对象的prototype上面了.
  // prototype对象的constructor本身就指向这个类, 也就是这个构造函数本身.
  // 通过new命令的时候, 自动调用这个方法.
  // 一个类肯定会有一个这个方法, 如果没有的话, 会被默认为空
  // 默认返回this, 可以进行制定.
  constructor(props) { // 现在就可以理解了, 这里传入的props, 就是调用这个组件的时候, 传入的props
    // 定义一个静态属性, 单是不明白这个props是干嘛的.

    // 好像静态方法, 可以从super这个对象上调用.
    // 如果我们这样写的话, props就变成了静态属性了.
    super(props);

    // 定义这个类的静态属性
    this.state = {
      showText: true
    };

    // // 规定时间段内对showText状态做一次取反操作
    // setInterval(() => {
    //   // setState用来更改状态
    //   this.setState(previousState => {
    //     return {
    //       showText: !previousState
    //     };
    //   });
    // }, 1000);

    setInterval(() => {
      this.setState((flag) => {
        console.log(flag)
        return {
          showText: !flag
        }
      });
    }, 1000)

  }

  // 这是一个构造函数的方法
  render() {
    // 根据当前的showText的值决定是否显示text的内容
    let display = this.state.showText ? this.props.text : ' ';
    // let display = this.props.text;

    return (
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink'/>
        <Blink text='Yes blinking is so great'/>
        <Blink text='Why did they ever take this out of HTML'/>
        <Blink text='Look at me look at me'/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwessomeProject', () => BlinkApp)


// Props(属性)
// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }

// class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name="zhang"/>
//         <Greeting name="li"/>
//         <Greeting name="liang"/>
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('AwessomeProject', () => LotsOfGreetings)

// // 创建引入组件
// import React, {Component} from 'react';
// import {AppRegistry, Image} from 'react-native';

// class Bananas extends Component {
//   render () {
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