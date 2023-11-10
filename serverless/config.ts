import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "pecacm-com.firebaseapp.com",
    projectId: "pecacm-com",
    storageBucket: "pecacm-com.appspot.com",
    messagingSenderId: "479744916902",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: "G-5647L00T6L",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
let analytics;
if (app.name && typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

const storage = getStorage(app);

export { storage };
