/* @flow */

import React, { Component } from 'react';
import {
  View,
   Text,
   StyleSheet,
   TouchableOpacity,
} from 'react-native';
import Colors from '../styles/Colors';
import { Container, Content, Header, Left, Right, Icon} from 'native-base';

export default class HomeScreen extends Component {
  static navigationOptions={
  header:null
}
  render() {
    return (
      <View style ={styles.container}>

         <View style ={styles.quadroLogin}>

          <View style={styles.topoPainel}>
          <TouchableOpacity  style={styles.btnPedidos}
          onPress={()=> this.props.navigation.navigate('SelecionarPedido')}>

             <Text style={styles.textTopoPainel}>Faça seu Pedido </Text>

             <Icon
                 name='cart'
                 style={{fontSize:30, color: Colors.Branco, marginRight:20}} />

                 <Icon
                     name='arrow-forward'
                     style={{fontSize:30, color: Colors.Branco }} />

             </TouchableOpacity>
           </View>

         </View>
     </View>

       );
     }
   }

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: Colors.AzulPrimary,
       alignItems: 'center',
       justifyContent: 'center',
     },
   tituloHeader:{
     color: 'white',
     fontSize: 20,
     textAlign: 'center',
     fontWeight: 'bold',
   },
     quadroLogin: {
   width: 350,
   height: 500,
   backgroundColor: 'rgba(0,0,0,0.4)',
   borderWidth: 1,
   borderColor: 'steelblue',
   },

   topoPainel: {
   width: 350,
   height: 40,
   backgroundColor:  'rgba(0,0,10,0.2)',
   flexDirection: 'row',
   paddingHorizontal:70,
   alignItems: "center",
   justifyContent: 'space-between'
   },

   textTopoPainel: {
   color: '#ffffff',
   textAlign: 'center',
   fontSize: 22,
   fontWeight: 'bold',
   },

   textoTela: {
   color: '#ffffff',
   textAlign: 'center',
   fontSize:20,
   fontWeight: 'bold',
   marginBottom: 10,
   },
   btnPedidos:{
     flexDirection: 'row',
   },

   });
