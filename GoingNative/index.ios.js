import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class GoingNative extends Component {
  render() {
    return (
      <View>
        <Text style={redStyle}>{"\n"}Hello world!</Text>
        <Text style={redStyle}>Hey there</Text>
        <Text style={redStyle}>Its a great day</Text>
        <Text style={redStyle}>truly great</Text>
      </View>
    );
  }
}

const redStyle = {
  color: 'red'
}


AppRegistry.registerComponent('GoingNative', () => GoingNative);
