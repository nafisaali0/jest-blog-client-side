import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHLoTS80tsFSvbGHZBGSS7hKPElkQ-amU",
  authDomain: "blog-client-side.firebaseapp.com",
  projectId: "blog-client-side",
  storageBucket: "blog-client-side.appspot.com",
  messagingSenderId: "632601333520",
  appId: "1:632601333520:web:fc8183b34a312922dd1f95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth