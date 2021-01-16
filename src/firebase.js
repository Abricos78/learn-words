import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxmKztq56AtXs-urc6dVS1G5SFFscRdy0",
    authDomain: "learn-words-deaab.firebaseapp.com",
    databaseURL: "https://learn-words-deaab-default-rtdb.firebaseio.com",
    projectId: "learn-words-deaab",
    storageBucket: "learn-words-deaab.appspot.com",
    messagingSenderId: "740458601220",
    appId: "1:740458601220:web:2bc8d35812d625f38a4e51",
    measurementId: "G-XRWP42E15F"
  };


class Firebase {
    constructor() {
    	firebase.initializeApp(firebaseConfig)
		this.auth = firebase.auth()
		this.database = firebase.database()

		this.userUid = null
	}

	setUserUid = uid => this.userUid = uid
	
	signWithEmail = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

	getUserWords = () => this.database.ref(`/cards/${this.userUid}`)

	registerUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

  setUserWords = words => this.database.ref(`/cards/${this.userUid}`).set(words)
  
  signOut = () => this.auth.signOut()
}

export default Firebase








