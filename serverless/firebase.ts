// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBGMiQSTJCxi5i_gDdaoHfWtAI-cRVQw_g",
    authDomain: "acm-website-a1c98.firebaseapp.com",
    projectId: "acm-website-a1c98",
    storageBucket: "acm-website-a1c98.appspot.com",
    messagingSenderId: "608034507253",
    appId: "1:608034507253:web:0a3656b861ba389acff8bc",
    measurementId: "G-XWMHFSP6MV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {analytics, auth, db}