
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
import FinalizarPedScreen from './src/Screens/FinalizarPedScreen'
import TabDebitoScreen from './src/Screens/TabDebitoScreen'
export default class App extends Component {
  render() {
    return (
      <FinalizarPedScreen />
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

finalizarPed: FinalizarPedScreen,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
