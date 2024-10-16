
import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: import.meta.env.VITE_FIREBASE_API,

  authDomain: "skope-e10a0.firebaseapp.com",

  projectId: "skope-e10a0",

  storageBucket: "skope-e10a0.appspot.com",

  messagingSenderId: "1031800855969",

  appId: "1:1031800855969:web:88873f2b1cb8a106a8ffe0"

};

const app = initializeApp(firebaseConfig);