import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvpl-t9V1tN5HD53RphiR1hflRGJbjkN8",
    authDomain: "management-c318c.firebaseapp.com",
    projectId: "management-c318c",
    storageBucket: "management-c318c.appspot.com",
    messagingSenderId: "141954288739",
    appId: "1:141954288739:web:11fde7c0aa6ee65f70bc56"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;