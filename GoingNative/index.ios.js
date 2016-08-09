import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class GoingNative extends Component {
  render() {
    return (
      <Text style={redStyle}>{"\n"}Hello world!</Text>
    );
  }
}

const redStyle = {
  color: 'red'
}


AppRegistry.registerComponent('GoingNative', () => GoingNative);
