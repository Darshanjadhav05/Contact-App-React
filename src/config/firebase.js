// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgqhlnNDy4MLnsDc9slxMEcl5cX_JJPqE",
  authDomain: "vite-contact-c6227.firebaseapp.com",
  projectId: "vite-contact-c6227",
  storageBucket: "vite-contact-c6227.appspot.com",
  messagingSenderId: "764381870110",
  appId: "1:764381870110:web:c5c14a4c0770a60131560f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)