// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGhdXWUTpDXLn1VlAGY8pb0MY3_ouFQg0",
  authDomain: "react-email-form.firebaseapp.com",
  projectId: "react-email-form",
  storageBucket: "react-email-form.appspot.com",
  messagingSenderId: "712662766416",
  appId: "1:712662766416:web:bebf6d7193dc6de588d255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;