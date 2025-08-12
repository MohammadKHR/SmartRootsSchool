import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB11osPtCgnfUOvAAM_I__uxZQMnF28MRc",
  authDomain: "smartschoolsystem-54dd9.firebaseapp.com",
  projectId: "smartschoolsystem-54dd9",
  storageBucket: "smartschoolsystem-54dd9.firebasestorage.app",
  messagingSenderId: "44767299836",
  appId: "1:44767299836:web:2a35c23a7a235f7676ef79",
  measurementId: "G-W3XM94J4JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
export default app;

