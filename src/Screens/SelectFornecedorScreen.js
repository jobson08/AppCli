/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class SelectFornecedorScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> SelectFornecedorScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
