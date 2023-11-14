import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import  { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAUZjN16kPWTSOYTeyTxWX4QgFrW_kORuA",
  authDomain: "gs-test-384123.firebaseapp.com",
  projectId: "gs-test-384123",
  storageBucket: "gs-test-384123.appspot.com",
  messagingSenderId: "949845395948",
  appId: "1:949845395948:web:1dd473e0e991addfc0d8c9"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// IOS: 949845395948-u26e7l73mm921p3kqk088brjmnressn6.apps.googleusercontent.com
// Android: 949845395948-2tnlagaoo85996r2n2j6k0adep5ji1nf.apps.googleusercontent.com