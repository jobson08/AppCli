/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Colors from '../styles/Colors';
import {Header,Container,Left, Right, Body, Icon, Title, Tab, Tabs, TabHeading} from 'native-base';

export default class TabDinheiroScreen extends Component {
  render() {
    return (
      <Container >
        <View style={styles.container}>

            <View style ={styles.quadroLogin}>

                <View style={styles.topoPainel}>
                    <Text style={styles.textTopoPainel}>Dinheiro</Text>
            </View>
                <Text style={styles.textDados}>Confirme seus dados</Text>

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
        marginTop: 10,
      borderRadius: 20,

        },
        topoPainel: {
        width: 310,
        height: 40,
        backgroundColor:  'rgba(0,0,10,0.2)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

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
        textDados: {
        color: 'blue',
        textAlign: 'center',
        fontSize:15,
        marginBottom: 10,
        },
        });
