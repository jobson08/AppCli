
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStackNavigator} from 'react-navigation'

import InicialScreen from './src/Screens/InicialScreen'
import LoginScreen from './src/Screens/LoginScreen'
import CadastroCliScreen from './src/Screens/CadastroCliScreen'
import HomeScreen from './src/Screens/HomeScreen'
import SelectProdutoScreen from './src/Screens/SelectProdutoScreen'
import SelectFornecedorScreen from './src/Screens/SelectFornecedorScreen'

export default class App extends Component {
  render() {
    return (
      <SelectFornecedorScreen  />
    );
  }
}
const DrawerNav = createStackNavigator({
//Inicial: InicialScreen,

Login: LoginScreen,

CadastrCli: CadastroCliScreen,

Home: HomeScreen,

SelectProduto: SelectProdutoScreen,

SelectFornecedor: SelectFornecedorScreen,

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
