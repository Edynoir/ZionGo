import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBU6alnTXTPNC6lPRaRbHc1Hfw1obb49tI",
    authDomain: "ziongo.firebaseapp.com",
    projectId: "ziongo",
    storageBucket: "ziongo.firebasestorage.app",
    messagingSenderId: "307023261082",
    appId: "1:307023261082:web:70e2ebea3e5bdbe6109e23",
    measurementId: "G-3X6Y0GZ3YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
