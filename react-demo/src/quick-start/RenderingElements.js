import React from 'react'

const element = (
  <div>
    <h1>Hello World</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
)

class RenderigingElements extends React.Component {
  render() {
    return (element)
  }
}

export default RenderigingElements