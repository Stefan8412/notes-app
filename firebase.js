// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeyIDYY75xGQHgu4rC3INNWYL6p4q8E08",
  authDomain: "react-notes-4ca2f.firebaseapp.com",
  projectId: "react-notes-4ca2f",
  storageBucket: "react-notes-4ca2f.appspot.com",
  messagingSenderId: "129571932033",
  appId: "1:129571932033:web:01d216705534e0bd8b8a80",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
