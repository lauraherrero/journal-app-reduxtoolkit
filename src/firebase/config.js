import { getAuth }  from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0wyvh3SbRoqqYbJNrHPUGIFrm9DU0Xvo",
  authDomain: "react-curso-fernandoherr-21d0d.firebaseapp.com",
  projectId: "react-curso-fernandoherr-21d0d",
  storageBucket: "react-curso-fernandoherr-21d0d.appspot.com",
  messagingSenderId: "196786250910",
  appId: "1:196786250910:web:6ea67885a43b6a59ab878f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );