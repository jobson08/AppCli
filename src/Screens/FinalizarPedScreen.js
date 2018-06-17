/* @flow */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Colors from '../styles/Colors';

import { Card, Header, CardItem, Container, Content, Left, Right, Body, Button, Icon, Title, Tab, Tabs, TabHeading} from 'native-base';

import TabDinheiroScreen from './TabDinheiroScreen';
import TabDebitoScreen from './TabDebitoScreen';
import TabCreditoScreen from './TabCreditoScreen';

export default class FinalizarPedScreen extends Component {
  static navigationOptions={
  header:null
}
  render() {
    return (
      <Container>
      <Header style ={styles.headerStyle}>
      <Right>
        <Icon arrow-back name='arrow-back'
        onPress={()=> this.props.navigation.navigate('SelectProduto')}
        style={{color: 'white', fontSize:30}}
       />
       <Body>
         <Title>Forma de Pagamento</Title>
       </Body>
      </Right>
    </Header>

      <View style ={styles.container}>
<ScrollView>

      <View>
          <Tabs style={{marginTop: 20}}>
            <Tab heading={ <TabHeading><Icon name="cash"/><Text style={styles.Texticone}>Dinheiro</Text></TabHeading>}>
              <TabDinheiroScreen />
            </Tab>

            <Tab heading={ <TabHeading><Icon name="card"/><Text style={styles.Texticone}>Credito</Text></TabHeading>}>
              <TabCreditoScreen/>
            </Tab>

            <Tab heading={ <TabHeading><Icon name="card"/><Text style={styles.Texticone}>Debito</Text></TabHeading>}>
              <TabDebitoScreen/>
            </Tab>

          </Tabs>

      </View>

      </ScrollView>
  </View>
  </Container>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    height: 400,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderColor: 'steelblue',
    marginTop: 20,
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
    fontSize:20,
    fontWeight: 'bold',
    },

    textoTela: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize:10,
    fontWeight: 'bold',
    marginBottom: 10,
    },
    btnPedidos:{
    flexDirection: 'row',
    },
  Texticone: {
      color: 'white',
      left: 5,
    }

    });
