import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAPDWFqE03omYqvdUdkRh1Ne1gG3PMidas",
  authDomain: "react-firebase-demo-37735.firebaseapp.com",
  databaseURL: "https://react-firebase-demo-37735.firebaseio.com",
  projectId: "react-firebase-demo-37735",
  storageBucket: "react-firebase-demo-37735.appspot.com",
  messagingSenderId: "923137438320",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {auth};
