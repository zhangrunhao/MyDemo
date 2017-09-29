import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native'

class myApp extends Component {
  render () {
    return (
      <Text>这是一段显示文本</Text>
    );
  }
}
AppRegistry.registerComponent('AwessomeProject', () => myApp)