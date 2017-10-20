
import React, {Component} from 'react'

import './test.css'
// function formatName(user) {
//   return user.firestName + ' ' + user.lastName
// }

// const user = {
//   firestName: 'zhang',
//   lastName: 'rh',
//   avatarUrl: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1759972132,4039059816&fm=202&src=762&mola=new&crop=v1'
// }

// const element = (
//   <h1>
//     Hello {formatName(user)}
//   </h1>
// )

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)} !</h1>
//   }
//   return <h1>Hello, kkkkkkk</h1>
// }

// const element = (
//   <div
//     tabIndex="0"
//   >
//   </div>
// )
 
const element = (
  <h1 className="greeting">
    Hello world
  </h1>
)


class IntroducingJSX extends Component {
  render() {
    return (element)
  }
}

export default IntroducingJSX
