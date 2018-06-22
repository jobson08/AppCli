//@flow
import * as firebase from "firebase";

const config = {
   apiKey: "AIzaSyAQR69RijiwipS4cb3rpnRfuOKALqplX9w",
   authDomain: "appgas-8c83e.firebaseapp.com",
   databaseURL: "https://appgas-8c83e.firebaseio.com",
   projectId: "appgas-8c83e",
   storageBucket: "appgas-8c83e.appspot.com",
   messagingSenderId: "122522277646"
 };

export default class Firebase {
  static auth;

  static init(){
    firebase.initializeApp(config);
  }

}
