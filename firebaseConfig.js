import { initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAk9h5YfC4GNvlp89tRm420KsxT-_UNKeI",
    authDomain: "projecttest-a5919.firebaseapp.com",
    projectId: "projecttest-a5919",
    storageBucket: "projecttest-a5919.appspot.com",
    messagingSenderId: "948304583890",
    appId: "1:948304583890:web:ae7505dd39ff08be11e10b"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { db }
