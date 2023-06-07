import {initializeApp} from "firebase/app";

// Here is where you put your credentials :P 
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};



const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;