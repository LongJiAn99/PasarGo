import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyDzMTte3agfDwS5POaSOfMFNjlabgfdxcw",
  authDomain: "pasargo-faf3a.firebaseapp.com",
  databaseURL: "https://pasargo-faf3a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pasargo-faf3a",
  storageBucket: "pasargo-faf3a.appspot.com",
  messagingSenderId: "920278672871",
  appId: "1:920278672871:web:06ce3ad49b28519ebb0942",
  measurementId: "G-79JYSER1B2"
};

const app = firebase.initializeApp(firebaseConfig);

export var provider = new firebase.auth.GoogleAuthProvider();

export const auth = app.auth()

export const storage = firebase.storage();

export default app

