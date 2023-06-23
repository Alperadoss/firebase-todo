// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWfGN9LFgKkX5qdivh9MABEKv6YRCBmQg",
  authDomain: "todo-app-8c7af.firebaseapp.com",
  projectId: "todo-app-8c7af",
  storageBucket: "todo-app-8c7af.appspot.com",
  messagingSenderId: "608841941604",
  appId: "1:608841941604:web:643402efad7588e5b11571",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
