import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import './index.css';

// import App from './App';

// 渲染服务..
import registerServiceWorker from './registerServiceWorker';

// 组件, 定时器
class Timer extends Component {
  constructor() {
    // 继承的话, 需要执行一遍父类构造函数
    // 把props传入的目的是, 本来父类上面有个props, 
    // 我们需要根据现在构造函数的子组件修改父组件的props.
    // 令人费解的是, 为什么不传也行
    super()
    this.state = { seconds: 0 }
  }

  tick() {
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1
    }))
  }

  // 组件实例化完成, 可以操作DOM元素了.
  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick()
    }, 1000)
  }

  // 组件被清理..
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        seconds: {this.state.seconds}
        <br />
        this is a {this.props.name}
      </div>
    )
  }
}

ReactDOM.render(
  <Timer name="zhang"/>,
  document.getElementById('root')
)

registerServiceWorker();
