
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCf-r5kVM7BwBYRGjLroZ2N93UbC_IfYlY",
  authDomain: "g3-links-19617.firebaseapp.com",
  projectId: "g3-links-19617",
  storageBucket: "g3-links-19617.firebasestorage.app",
  messagingSenderId: "407623885241",
  appId: "1:407623885241:web:bc5890bfa9b76b53d8d668",
  measurementId: "G-6PX2YT3WCQ"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }