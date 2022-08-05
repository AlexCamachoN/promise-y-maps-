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
  apiKey: "AIzaSyCPYtMcWk3QUr4mV9CzXQ2FXyfpkuM44yY",
authDomain: "galeriacamacho-c62b5.firebaseapp.com",
 projectId: "galeriacamacho-c62b5",
 storageBucket: "galeriacamacho-c62b5.appspot.com",
 messagingSenderId: "406034317179",
appId: "1:406034317179:web:3516e14e7ac4de9b5887de"
  //   apiKey: "AIzaSyDXkpPFak8jsjA2UjEQTk1PxFY5081VsWU",
  // authDomain: "galeria-a7e15.firebaseapp.com",
  // projectId: "galeria-a7e15",
  // storageBucket: "galeria-a7e15.appspot.com",
  // messagingSenderId: "874966744029",
  // appId: "1:874966744029:web:7653a45442f00b0a931434"
});

export function getFirebaseApp(){
  return app
}

export function getFirestore(){
  return firebase.firestore(app)
}
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCPYtMcWk3QUr4mV9CzXQ2FXyfpkuM44yY",
//   authDomain: "galeriacamacho-c62b5.firebaseapp.com",
//   projectId: "galeriacamacho-c62b5",
//   storageBucket: "galeriacamacho-c62b5.appspot.com",
//   messagingSenderId: "406034317179",
//   appId: "1:406034317179:web:3516e14e7ac4de9b5887de"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);