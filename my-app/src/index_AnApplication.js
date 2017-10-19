import React, {Component} from 'react'
import ReactDom from 'react-dom'

import registerServerWorker from './registerServiceWorker'

class TodoApp extends Component {
  constructor(props) {
    super(props)
    // 也就是这个组件的一些数据
    this.state = {
      items: [],
      text: ''
    }
    // 获取一个方法, 这个方法是实例上的方法, this指针, 指向当前this 这应该也是一个数据, 能够在state上面取到的
    this.handleChange = this
      .handleChange
      .bind(this)
    this.handleSubmit = this
      .handleSubmit
      .bind(this)
  }

  render() {
    return (
      <div>
        <h3>Todo</h3>
        <TodoList items={this.state.items}></TodoList>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text}/>
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    )
  }

  handleChange(event) {
    // 如果输入框中的内容改变了, 就改变我们text状态..
    this.setState({text: event.target.value});
  }

  // 提交事件时候, 我们需要处理的事件
  handleSubmit(event) {
    // 取消提交的默认事件
    event.preventDefault()
    if (!this.state.text.length) {
      return;
    }
    // 创建一个新的元素.
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    // 箭头函数直接返回一个对象, 需要加() 修改state, 也就是我们的数据
    this.setState((preState) => ({
      // items添加一个
      items: preState
        .items
        .concat(newItem),
      // 把内容情况
      text: ''
    }))
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this
          .props
          .items
          .map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
      </ul>
    )
  }
}

ReactDom.render(
  <TodoApp/>, document.getElementById('root'))

registerServerWorker()