import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrfV2rZDBw7BAn5lm5Jnkdt58jvG4iWxA",
  authDomain: "twitter-clone-a9675.firebaseapp.com",
  projectId: "twitter-clone-a9675",
  storageBucket: "twitter-clone-a9675.appspot.com",
  messagingSenderId: "87380947184",
  appId: "1:87380947184:web:9c4531720310cf87f0d235",
  measurementId: "G-ZRLJZ1FHTN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default db;
