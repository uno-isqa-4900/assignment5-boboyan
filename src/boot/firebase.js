import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB1jLoQ9OYa2qxOK26cvDESm4h7l1550nw",
  authDomain: "quitter2-48fed.firebaseapp.com",
  projectId: "quitter2-48fed",
  storageBucket: "quitter2-48fed.appspot.com",
  messagingSenderId: "1053661908601",
  appId: "1:1053661908601:web:b714a6b43f896874b20ea8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db
