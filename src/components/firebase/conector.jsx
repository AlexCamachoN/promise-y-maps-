// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//const firebaseConfig={} se reeemplaza:
//const app= initializeApp({})
const app = firebase.initializeApp( {
    apiKey: "AIzaSyDXkpPFak8jsjA2UjEQTk1PxFY5081VsWU",
  authDomain: "galeria-a7e15.firebaseapp.com",
  projectId: "galeria-a7e15",
  storageBucket: "galeria-a7e15.appspot.com",
  messagingSenderId: "874966744029",
  appId: "1:874966744029:web:7653a45442f00b0a931434"
});


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export function getFirebaseApp(){
  return app
}

export function getFirestore(){
  return firebase.firestore(app)
}