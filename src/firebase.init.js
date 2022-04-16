// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXW0qzRQmbzuuxUDEn3KbcBxibdEV6D5Y",
    authDomain: "services-provider-1c929.firebaseapp.com",
    projectId: "services-provider-1c929",
    storageBucket: "services-provider-1c929.appspot.com",
    messagingSenderId: "626596970517",
    appId: "1:626596970517:web:9c73e0fd5db8763faa0e1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;