import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyCjCijoeH95IsnkBrzrqTL2_LzHQGU10w4",
  authDomain: "clone-aa9ec.firebaseapp.com",
  databaseURL: "https://clone-aa9ec.firebaseio.com",
  projectId: "clone-aa9ec",
  storageBucket: "clone-aa9ec.appspot.com",
  messagingSenderId: "1008334433204",
  appId: "1:1008334433204:web:c141b3b2b5135e66cf20e1",
  measurementId: "G-HTZ2NEPM9R"
};



const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebaseapp.firestore()

const auth= firebase.auth();



export {db , auth};