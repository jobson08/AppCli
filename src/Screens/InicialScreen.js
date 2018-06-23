/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default class InicialScreen extends Component {
  static navigationOptions={
  header:null
}

componentDidMount(){
  setTimeout(() =>{
    this.props.navigation.navigate('Login')
  },1000)
}
  render() {
    return (
      <View style={styles.container}>

          <Image style={styles.styleLogo} source={require("../img/Logo-gas.png")} />


      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#80deea',
padding: 20,
  },

styleLogo:{
width: 300,
 height: 300,

  },
});
