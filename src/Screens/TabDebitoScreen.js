/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Colors from '../styles/Colors';
import { Card, Header, CardItem, Container, Content, Left, Right, Body, Button, Icon, Title, Tab, Tabs, TabHeading} from 'native-base';
import TabDinheiroScreen from './TabDinheiroScreen';
import TabCreditoScreen from './TabCreditoScreen';

export default class TabDebitoScreen extends Component {
  render() {
    return (
<Container >
  <View style={styles.container}>

      <View style ={styles.quadroLogin}>

          <View style={styles.topoPainel}>
              <Text style={styles.textTopoPainel}>Debito</Text>
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
      backgroundColor: Colors.Branco,
      alignItems: 'center',

    },

  quadroLogin: {
  width: 310,
  height: 400,
  backgroundColor: 'rgba(0,0,0,0.2)',
  marginTop: 10
  },
  topoPainel: {
  width: 310,
  height: 40,
  backgroundColor:  'rgba(0,0,10,0.2)',
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

  });
