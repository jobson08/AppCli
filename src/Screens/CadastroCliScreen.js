/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  alert
} from 'react-native';
import { createStackNavigator} from 'react-navigation'
import firebase from "firebase";

import Colors from '../styles/Colors';

import { Container, Content, Header, Left, Right, Icon, Body, Title } from 'native-base';

export default class CadastroCliScreen extends Component {
  static navigationOptions={
  header:null
}

constructor(props){
  super(props);

  this.state={
    email:'',
    password:'',
    isLoading: false,
    message: ''
  }
}

cadastroUser(){
  this.setState({ isLoading:true, message: ''});
  const { email, password } = this.state
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(user =>{
     this.setState({message: 'Sucesso'});
   })

  .catch(error =>{
    this.setState({ message: this.getMessageErro(error.code) });
    //console.log('Usuario na encontrado', error);
  })
  .then(() => this.setState({ isLoading:false }));
}

renderMessage(){
  const { message } = this.state;
    if(!message)
    return null;

  return (
    <View>
        <Text style={{color: '#0000ff', fontSize:30, }}>{message}</Text>
    </View>
  );
}
renderButton(){
  if ( this.isLoading )
    return < ActivityIndicator />;
  return(
    <TouchableOpacity
            style={styles.button}
          onPress={() => this.cadastroUser()}>
            <Text style={styles.buttonText}> Salvar</Text>
    </TouchableOpacity>
  )
}
  render() {
    return (
      <Container >
      <Header style ={styles.headerStyle}>
      <Right>
        <Icon arrow-back name='arrow-back'
        onPress={()=> this.props.navigation.navigate('Login')}
        style={{color: 'white', fontSize:30, }}
       />
       <Body>
         <Title>Registro</Title>
       </Body>
      </Right>

    </Header>
<View style={styles.container}>

      <View style ={styles.quadroLogin}>

          <View style={styles.topoPainel}>
              <Text style={styles.textTopoPainel}>Fornecedor</Text>
          </View>

             <Text style={styles.textoTela}>Cadastre com seu email</Text>

              <TextInput
               style={styles.input} underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="E-mail"
                onChangeText={email => this.setState({ email })}
             />

             <TextInput
               style={styles.input}
               placeholder="Senha"
               secureTextEntry
                onChangeText={password => this.setState({ password })}
              />

        <TouchableOpacity
            style={styles.buttonEsq}
            onPress={this.btnEsqSenha}>
            <Text style={styles.buttonTextEsq}> Esqueceu sua Senha ? </Text>
        </TouchableOpacity>

  { this.renderButton()}
{ this.renderMessage()}
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
    headerStyle: {
      borderBottomColor: '#757575',
    },

  quadroLogin: {
  width: 300,
  height: 400,
  backgroundColor: 'rgba(0,0,0,0.4)',
  borderWidth: 1,
  borderColor: 'steelblue',
  },
  topoPainel: {
  width: 300,
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

  input: {
  height: 45,
  backgroundColor: '#ffffff',
  alignSelf: 'stretch',
  borderColor: 'steelblue',
  borderWidth: 1,
  paddingHorizontal: 20,
  marginBottom:5,
  borderRadius: 20,
  marginTop: 5,
  },

  buttonEsq: {
  alignItems: 'center'
  },

  buttonTextEsq: {
  color: '#ffffff',
  fontSize: 15,
  fontWeight: 'bold',
  },
  button: {
    height: 45,
    backgroundColor: Colors.BtnVerde,
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.Branco,
  },

  buttonText: {
    color: Colors.Branco,
    fontSize: 25,
    fontWeight: 'bold',
  },
  });
