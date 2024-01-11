import {getApp, getApps , initializeApp} from "firebase/app"
import { Firestore, getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhaQUvos4-pZxDlzf3blTD6MKPjvv5-4g",
    authDomain: "chatgpt-clone-38fda.firebaseapp.com",
    projectId: "chatgpt-clone-38fda",
    storageBucket: "chatgpt-clone-38fda.appspot.com",
    messagingSenderId: "425133470093",
    appId: "1:425133470093:web:bf24008cfaef00e17acdc4"
  };
  
  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};