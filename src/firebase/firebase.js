
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCs8EE1zBCEEXPwoFPJmFxvh9kn7AjzLfg",
    authDomain: "react-users-1dfbb.firebaseapp.com",
    projectId: "react-users-1dfbb",
    storageBucket: "react-users-1dfbb.appspot.com",
    messagingSenderId: "114497622126",
    appId: "1:114497622126:web:69a833b273b28ba851d67f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;