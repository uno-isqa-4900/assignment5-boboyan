import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAj74ET8KHFJRXANo2MBi6G_N00uX6RBJE",
  authDomain: "testa5-b584d.firebaseapp.com",
  projectId: "testa5-b584d",
  storageBucket: "testa5-b584d.appspot.com",
  messagingSenderId: "660924497570",
  appId: "1:660924497570:web:007e034f8fdd15d50d61fb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db
