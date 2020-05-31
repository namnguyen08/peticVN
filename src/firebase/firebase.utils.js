import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBvfzsbknZnKfaloZa6n0uUmLkzZqOXELk",
  authDomain: "clothings-a876d.firebaseapp.com",
  databaseURL: "https://clothings-a876d.firebaseio.com",
  projectId: "clothings-a876d",
  storageBucket: "clothings-a876d.appspot.com",
  messagingSenderId: "248834885538",
  appId: "1:248834885538:web:693b09de03bc3166a3d4fb",
  measurementId: "G-SMYH14LQNF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;