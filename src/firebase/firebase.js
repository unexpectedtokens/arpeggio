import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyCBvCAS7mwfziaUP4VZx00O1zzULEjPYyk",
  authDomain: "arpeggio-d960c.firebaseapp.com",
  databaseURL: "https://arpeggio-d960c.firebaseio.com",
  projectId: "arpeggio-d960c",
  storageBucket: "arpeggio-d960c.appspot.com",
  messagingSenderId: "905279186619",
  appId: "1:905279186619:web:ce51ab0389420e5c676b9e",
  measurementId: "G-GCVC9TL4SF",
}

let instance
export default () => {
  if (typeof window !== "undefined") {
    if (instance) return instance
    instance = firebase.initializeApp(config)
    return instance
  }

  return null
}
