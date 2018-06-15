/* @flow */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Colors from '../styles/Colors';

import { Card, CardItem, Container, Content, Left, Right, Body, Button, Icon, CheckBox } from 'native-base';

export default class SelectFornecedorScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}/>
      </View>
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
