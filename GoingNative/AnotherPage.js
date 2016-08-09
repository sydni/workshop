import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, NavigatorIOS } from 'react-native';


class AnotherPage extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.text}>
          This is some filler text to tell you that youve
          navigated to another page.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: 'green',
    fontSize: 40,
  },
});


export default AnotherPage
