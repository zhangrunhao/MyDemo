
import React, {Component} from 'react'

function formatName(user) {
  return user.firestName + ' ' + user.lastName
}

const user = {
  firestName: 'zhang',
  lastName: 'rh'
}

// const element = (
//   <h1>
//     Hello {formatName(user)}
//   </h1>
// )

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)} !</h1>
  }
  return <h1>Hello, kkkkkkk</h1>
}


class IntroducingJSX extends Component {
  render() {
    return (getGreeting())
  }
}

export default IntroducingJSX
