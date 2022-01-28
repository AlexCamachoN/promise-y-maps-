import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCHTQf9dNKkY4TUrzx7pOlPXUtQieqAn2E",
  authDomain: "ardent-anthem-332402.firebaseapp.com",
  projectId: "ardent-anthem-332402",
  storageBucket: "ardent-anthem-332402.appspot.com",
  messagingSenderId: "74817346797",
  appId: "1:74817346797:web:1d7165c81217dd492300e4",
  measurementId: "G-6BDQWLPM6C"
    
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
  return firebase.firestore(app)
}