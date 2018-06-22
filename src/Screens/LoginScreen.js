/* @flow */

import React, { Component } from 'react';
import {
View,
Text,
StyleSheet,
TextInput,
TouchableOpacity,
ActivityIndicator,
Alert
} from 'react-native';
import { createStackNavigator} from 'react-navigation'

import firebase from "firebase";

import { Container, Header, Button, Icon, right, Fab } from 'native-base';
import Colors from '../styles/Colors';

export default class LoginScreen extends Component {
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
componentDidMount(){
  const config = {
     apiKey: "AIzaSyAQR69RijiwipS4cb3rpnRfuOKALqplX9w",
     authDomain: "appgas-8c83e.firebaseapp.com",
     databaseURL: "https://appgas-8c83e.firebaseio.com",
     projectId: "appgas-8c83e",
     storageBucket: "appgas-8c83e.appspot.com",
     messagingSenderId: "122522277646"
   };
   firebase.initializeApp(config);
}

loginUser(){
  this.setState({ isLoading:true, message: ''});
  const { email, password } = this.state
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user =>{
     this.props.navigation.navigate('Home');
   })

  .catch(error =>{
    if (error.code === 'auth/user-not-found'){
      Alert.alert('Email invalido')
    }
  //  this.setState({ message: this.getMessageErro(error.code) });
    //console.log('Usuario na encontrado', error);
  })
  .then(() => this.setState({ isLoading:false }));
}

getMessageErro(errorCode){
  switch (errorCode) {
    case 'auth/user-not-found':
      return 'Email invalido';
    case 'auth/wrong-password':
      return 'Senha incorreta';
    default:
      return 'Error desconhecido';
  }
}

renderButton(){
  if ( this.isLoading )
    return < ActivityIndicator />;
  return(
  <TouchableOpacity
          style={styles.button}
            onPress={() => this.loginUser()}>
          <Text style={styles.buttonText}> Entrar </Text>
  </TouchableOpacity>
  )
}

renderMessage(){
  const { message } = this.state;
    if(!message)
    return null;

  return (
    <View>
        <Text>{message}</Text>
    </View>
  );
}


  render() {
    return (
      <Container style={styles.container}>
      <View style ={styles.quadroLogin}>

      <View style={styles.topoPainel}>
          <Text style={styles.textTopoPainel}>Bom dia</Text>
      </View>

         <Text style={styles.textoTela}>Entre com o seu Login</Text>

          <TextInput
           style={styles.input} underlineColorAndroid='rgba(0,0,0,0)'
           placeholder="E-mail"
           //onChangeText={value => this.onChangeHandeler('email', value)}
           onChangeText={email => this.setState({ email })}
         />

         <TextInput
           style={styles.input}
           placeholder="Senha"
           secureTextEntry
           //onChangeText={value => this.onChangeHandeler('password', value)}
            onChangeText={password => this.setState({ password })}
            />

    <TouchableOpacity
        style={styles.buttonEsq}
        onPress={() => this.loginUser()} >
        <Text style={styles.buttonTextEsq}> Esqueceu sua Senha ? </Text>
    </TouchableOpacity>


          { this.renderButton()}
          { this.renderMessage()}

          <TouchableOpacity
             style={styles.buttonfacebook}
                 onPress={this.onPress}>
                    <Text style={styles.buttonText}> Facebook </Text>
          </TouchableOpacity>

          <TouchableOpacity
             style={styles.buttonGmail}
               onPress={this.onPress}>
               <Text style={styles.buttonText}> Gmail </Text>
          </TouchableOpacity>

     <View style={styles.nextBtn}>
      <Text style={styles.TextnextBtn}>Faça seu registro </Text>

  </View>
<View>


    <Button rounded infor style={{left:240}}

    onPress={() => this.props.navigation.navigate('CadastrCli')}>
      <Icon name="add"/>
    </Button>


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

quadroLogin: {
width: 300,
height: 460,
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
fontSize:20,
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
flexDirection: 'row',
},

buttonText: {
color: Colors.Branco,
fontSize: 25,
fontWeight: 'bold',
},

buttonfacebook: {
height: 45,
backgroundColor: Colors.btnFacebook,
alignSelf: 'stretch',
marginTop: 10,
justifyContent: 'center',
alignItems: 'center',
borderRadius: 20,
borderWidth: 1,
borderColor: Colors.Branco,
flexDirection: 'row',
},

buttonGmail: {
height: 45,
backgroundColor: '#F44336',
alignSelf: 'stretch',
marginTop: 10,
justifyContent: 'center',
alignItems: 'center',
borderRadius: 20,
borderWidth: 1,
borderColor: Colors.Branco,
flexDirection: 'row',
},
nextBtn:{
alignItems: 'flex-end',
right: 10,

},

TextnextBtn:{
color: '#fff',
fontSize: 20,
fontWeight: 'bold',
}
});
