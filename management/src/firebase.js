import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDmMrCGyzkLL_a_dy2gYPkfm5y_tK_SQSs",
    authDomain: "management-8c164.firebaseapp.com",
    projectId: "management-8c164",
    storageBucket: "management-8c164.appspot.com",
    messagingSenderId: "341699713666",
    appId: "1:341699713666:web:07ec8f7067be44326e329b"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;