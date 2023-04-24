// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQICleMETe2qN_7sWLZj7IYSGG0NXXZWE",
  authDomain: "kasirbengkel-3e1bb.firebaseapp.com",
  projectId: "kasirbengkel-3e1bb",
  storageBucket: "kasirbengkel-3e1bb.appspot.com",
  messagingSenderId: "591049587193",
  appId: "1:591049587193:web:25159e7d545965944f2528",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export { FirebaseApp };
