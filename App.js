
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
//inicia o farebase

//fim da constate do farebase

import StackNav from './src/Navigates/StackNav'

export default class App extends Component {
    render() {
    return (
      <StackNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
