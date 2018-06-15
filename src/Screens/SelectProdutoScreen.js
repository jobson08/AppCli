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

import { Card, CardItem, Container, Content, Left, Right, Body, Button, Icon, CheckBox } from 'native-base';

export default class SelectProdutoScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>

        <ScrollView>
          <Content style={styles.styleContent}>
    <Card>
      <CardItem>
      <View>
        <Image style={styles.imagens} source={require("../img/botijao-kg.jpg")}/>
      </View>
      </CardItem>
      <CardItem>
                <Left>
                <Text style={styles.nomeProduto}>Selecione um produto</Text>
            <CheckBox checked={false} />
                </Left>

    </CardItem>
  </Card>

  <Card>
    <CardItem>
    <View>
      <Image style={styles.imagens} source={require("../img/agua-g.jpg")}/>
    </View>
    </CardItem>
    <CardItem>

      <Left>
        <Text style={styles.nomeProduto}>Selecione um produto</Text>
        <CheckBox checked={true} />
      </Left>

  </CardItem>
  </Card>
  <TouchableOpacity
          style={styles.button}
          onPress={()=> this.props.navigation.navigate('Pedidos')}>
          <Text style={styles.buttonText}> Finalizar Pedido </Text>
  </TouchableOpacity>
    </Content>

    </ScrollView>
        </Container>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.Sinza,
    },
    styleContent:{
      marginTop: 10,
      marginLeft: 15,
      marginRight: 15
    },
  imagens:{
    height: 150,
    width: 300,
    flex: 1
  },
  nomeProduto:{
  fontSize: 16,
  fontWeight: 'bold'
  },
  textValor:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#c4402f'
  },
  descricaoProduto:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#c4402f'
  },
  button: {
    height: 50,
    backgroundColor: Colors.BtnVerde,
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.Branco,
    flexDirection: 'row',
  },
  buttonText: {
    color: Colors.Branco,
    fontSize: 25,
    fontWeight: 'bold',
  },

  });
