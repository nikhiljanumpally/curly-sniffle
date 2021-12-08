import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyBds04oKrnZ1gCEPRwTLS3bkEmORuaxpn0",
  authDomain: "minimini-67480.firebaseapp.com",
  projectId: "minimini-67480",
  storageBucket: "minimini-67480.appspot.com",
  messagingSenderId: "911439925818",
  appId: "1:911439925818:web:7fb51908e2e048914d9b03"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };