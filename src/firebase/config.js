
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBMMpTaITWmTw8_OAgeQG1LQVRxRFjLxL4",
  authDomain: "klsynth.firebaseapp.com",
  projectId: "klsynth",
  storageBucket: "klsynth.appspot.com",
  messagingSenderId: "1090358350908",
  appId: "1:1090358350908:web:85cc769b54869de2cc9f39"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}