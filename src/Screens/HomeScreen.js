/* @flow */

import React, { Component } from 'react';
import {
  View,
   Text,
   StyleSheet,
   TouchableOpacity,
} from 'react-native';
import Colors from '../styles/Colors';
import { Container, Content, Header, Left, Right, Icon,Title, Body} from 'native-base';

export default class HomeScreen extends Component {
  static navigationOptions={
  header:null
}
  render() {
    return (
      <Container>
      <Header style ={styles.headerStyle}>
      <Right>
        <Icon arrow-back name='menu'
        onPress={()=> this.props.navigation.navigate('Login')}
        style={{color: 'white', fontSize:30}}
       />
       <Body>
         <Title>Home</Title>
       </Body>
      </Right>
    </Header>
      <View style ={styles.container}>

         <View style ={styles.quadroLogin}>

          <View style={styles.topoPainel}>
          <TouchableOpacity  style={styles.btnPedidos}
          onPress={()=> this.props.navigation.navigate('SelectProduto')}>

             <Text style={styles.textTopoPainel}>Faça seu Pedido </Text>

             <Icon
                 name='cart'
                 style={{fontSize:30, color: Colors.Branco, marginRight:5}} />

                 <Icon
                     name='arrow-forward'
                     style={{fontSize:30, color: Colors.Branco }} />

             </TouchableOpacity>
           </View>

         </View>
     </View>
     </Container>

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
   width: 310,
   height: 500,
   backgroundColor: 'rgba(0,0,0,0.4)',
   borderWidth: 1,
   borderColor: 'steelblue',
   },

   topoPainel: {
   width: 310,
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
