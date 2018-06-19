

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

const fornecedor=[
  {
    key: 1,
    nome: 'Gás Rapido',
    image:'https://noticiasconcursos.com.br/wp-content/uploads/2015/02/Liquigas2.jpg',
  },
  {
    key: 2,
    nome: 'Gás e água',
    image:'http://hotelcastel.com.br/wp-content/uploads/cliente-nacionalgas.png',
  }
]

import Colors from '../styles/Colors';

import { Card, Header, CardItem, Container, Content, Left, Right, Title, Body, Button, Icon, CheckBox } from 'native-base';

export default class SelectFornecedorScreen extends Component {
  static navigationOptions={
  header:null
}
  _renderItem(item){
    return(

      <Image style={{width: 100, height: 50}} source={{uri: item.image}}/>
    )
  }
  render() {
    return (
      <Container style={styles.container}>

      <Header style ={styles.headerStyle}>
      <Right>
        <Icon arrow-back name='arrow-back'
        onPress={()=> this.props.navigation.navigate('SelectProduto')}
        style={{color: 'white', fontSize:30}}
       />
       <Body>
         <Title>Fornecedores</Title>
       </Body>
      </Right>

    </Header>
<TouchableOpacity onPress={()=> this.props.navigation.navigate('finalizarPed')}>
      <FlatList
      renderItem={({item}) => this._renderItem(item)}
      data={fornecedor}
        />
</TouchableOpacity>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
