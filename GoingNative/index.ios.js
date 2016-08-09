import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, NavigatorIOS } from 'react-native';

class GoingNative extends Component {
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
}

class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.red}>{"\n"}Hello world!</Text>
        <Text style={styles.bigblue}>Hey there</Text>
        <Text style={[styles.bigblue, styles.red]}>Its a great day</Text>
        <Text style={[styles.red, styles.bigblue]}>truly great</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});


AppRegistry.registerComponent('GoingNative', () => GoingNative);
