import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs,addDoc } from "firebase/firestore";
// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyAIQKvv5OCQ6XJfhYBX5TvcYptStSCmWm8",
  authDomain: "reactcounterpro.firebaseapp.com",
  projectId: "reactcounterpro",
  storageBucket: "reactcounterpro.appspot.com", // Fixed incorrect storage domain
  messagingSenderId: "999368971587",
  appId: "1:999368971587:web:2f02e67fb38a671b370bf6",
  measurementId: "G-91TDVKTGDM"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Get Firebase Auth instance
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Function to sign in with Google
export const googleSignInService = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("User signed in:", user);
    return user;
  } catch (error) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};

// Function to sign out
export const logOutService = async () => {
  try {
    await signOut(auth);
    console.log("User signed out.");
  } catch (error) {
    console.error("Error signing out:", error.message);
    throw error;
  }
};

// Function to listen to auth state changes
export const listenToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { app, auth ,db, collection, getDocs, addDoc};
