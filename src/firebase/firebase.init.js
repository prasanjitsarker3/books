// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGjUjSFgs9ID6bj0169o9pMZS6UqTDPhQ",
    authDomain: "books-47f10.firebaseapp.com",
    projectId: "books-47f10",
    storageBucket: "books-47f10.appspot.com",
    messagingSenderId: "397521085675",
    appId: "1:397521085675:web:8cc2e56db0b35ef6b54aae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;