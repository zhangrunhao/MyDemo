import React from 'react'

class Element extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

export default Element