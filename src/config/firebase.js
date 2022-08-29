// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCGZJRgvvv4J-VUp8NTj7rfzhm5MpSHPHk",
  authDomain: "hotel-booking-bb1ce.firebaseapp.com",
  projectId: "hotel-booking-bb1ce",
  storageBucket: "hotel-booking-bb1ce.appspot.com",
  messagingSenderId: "642064984379",
  appId: "1:642064984379:web:a9ae124ece51bfcd3b2f1e",
  measurementId: "G-4M21KW83ZP"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBx7YViqL4ibYJ6vojKflfrtF05KIrMUoI",
//   authDomain: "practicing-app-f51b6.firebaseapp.com",
//   projectId: "practicing-app-f51b6",
//   storageBucket: "practicing-app-f51b6.appspot.com",
//   messagingSenderId: "1031014316698",
//   appId: "1:1031014316698:web:31e109559e97b4ecff3d23",
//   measurementId: "G-E5CVNH9TKL"
// };




// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const db = getFirestore (app);

// const analytics = getAnalytics(app);

// export {auth, db}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {auth,db}