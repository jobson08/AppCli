/* @flow */
import { createStackNavigator} from 'react-navigation'

import InicialScreen from '../Screens/InicialScreen'
import LoginScreen from '../Screens/LoginScreen'
import CadastroCliScreen from '../Screens/CadastroCliScreen'
import HomeScreen from '../Screens/HomeScreen'
import SelectProdutoScreen from '../Screens/SelectProdutoScreen'
import SelectFornecedorScreen from '../Screens/SelectFornecedorScreen'
import FinalizarPedScreen from '../Screens/FinalizarPedScreen'
import TabDebitoScreen from '../Screens/TabDebitoScreen'


const StackNav = createStackNavigator({
//Inicial: InicialScreen,

Login: LoginScreen,

CadastrCli: CadastroCliScreen,

Home: HomeScreen,

SelectProduto: SelectProdutoScreen,

SelectFornecedor: SelectFornecedorScreen,

finalizarPed: FinalizarPedScreen,
});

export default StackNav;
