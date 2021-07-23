import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXCl1hmkusEXOnX0wp29AvCpdRQ3jr7OM",
  authDomain: "whatsapp-clone-d1d6e.firebaseapp.com",
  projectId: "whatsapp-clone-d1d6e",
  storageBucket: "whatsapp-clone-d1d6e.appspot.com",
  messagingSenderId: "405083680113",
  appId: "1:405083680113:web:a77497d6ffe35fc1999ad0",
  measurementId: "G-85V7Q0RS38",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
