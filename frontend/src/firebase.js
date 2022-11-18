// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBusq2u9Wki2e3CY9QtgnerALD43LoMjNY",
    authDomain: "images-f7401.firebaseapp.com",
    projectId: "images-f7401",
    storageBucket: "images-f7401.appspot.com",
    messagingSenderId: "764306486829",
    appId: "1:764306486829:web:b26735042cb801ddc02aa4",
    measurementId: "G-HLE0QMQ7ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;