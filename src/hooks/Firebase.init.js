import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase.config';



const initializeFirebaseApp = () => {
    return initializeApp(firebaseConfig);
}

export default initializeFirebaseApp;