import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCxUAN3HuPvh7HR4eUV_P8VkhNbwxwJ8-o",
    authDomain: "crwn-db-8e39d.firebaseapp.com",
    projectId: "crwn-db-8e39d",
    storageBucket: "crwn-db-8e39d.appspot.com",
    messagingSenderId: "321029923430",
    appId: "1:321029923430:web:a5ce9dfd97c3548418c3a7",
    measurementId: "G-BGC7D7WN9G"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
