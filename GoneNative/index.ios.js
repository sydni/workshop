import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, NavigatorIOS,  TouchableHighlight } from 'react-native';
import AnotherPage from './AnotherPage.js';


class GoneNative extends Component {

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: HelloWorld,
          title: 'Some hello world messages',
        }}
        style={styles.mainContainer}
      />
    );
  }

  _onForward() {
    this.props.navigator.push({
      title: 'Here you have another page',
      component: AnotherPage
    });
  }
}

class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.red}>{"\n"}Hello world!</Text>
        <Text style={styles.bigblue}>Hey there</Text>
        <Text style={[styles.bigblue, styles.red]}>Its a great day</Text>
        <Text style={[styles.red, styles.bigblue]}>truly great</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text style={styles.bigClear}>Tap me to load the next page</Text>
        </TouchableHighlight>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});



AppRegistry.registerComponent('GoneNative', () => GoneNative);
