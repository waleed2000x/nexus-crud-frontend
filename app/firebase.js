import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAFpg0jL5XYVUEHVwXy7mhYPas-G1s2UZo",
  authDomain: "next-crud-8ada7.firebaseapp.com",
  projectId: "next-crud-8ada7",
  storageBucket: "next-crud-8ada7.appspot.com",
  messagingSenderId: "428565976891",
  appId: "1:428565976891:web:8ed562aa5f5ac190dc891e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
