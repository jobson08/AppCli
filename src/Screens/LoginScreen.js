/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions={
  header:null
}
  render() {
    return (
      <View style={styles.container}>
        <Text>LoginScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
