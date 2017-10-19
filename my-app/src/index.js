import React from 'react'
import ReactDOM from 'react-dom'
import Remarkable from 'remarkable'

import registerServerWorker from './registerServiceWorker'

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props)
    // 好像所有的方法都要经过这个处理, 才能调用到. 我记得也不是啊..
    this.handleChange = this
      .handleChange
      .bind(this)
    this.state = {
      value: 'Type some *markdown* here!'
    }
  }

  // 输入框内容改变
  handleChange(event) {
    // 改变文本内容
    this.setState({value: event.target.value})
  }

  // 内容经过md语法处理, 传入字符串, 返回html文本
  getRawMarkup() {
    // 处理字符串, 用md语法进行处理, 变为html格式
    const md = new Remarkable()
    return {
      __html: md.render(this.state.value)
    }
  }

  render() {
    return (
      <div>
        <h3>输入内容</h3>
        <textarea onChange={this.handleChange} defaultValue={this.state.value}/>
        <h3>输出内容</h3>
        <div className="content" dangerouslySetInnerHTML={this.getRawMarkup()}></div>
      </div>
    )
  }
}

ReactDOM.render(
  <MarkdownEditor/>, document.getElementById('root'))

registerServerWorker()