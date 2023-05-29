import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwvoGVU-QIQeWtUMGAsr2_Krb1Gxc1oo8",
  authDomain: "mini-capstone-firebase-d7d40.firebaseapp.com",
  projectId: "mini-capstone-firebase-d7d40",
  storageBucket: "mini-capstone-firebase-d7d40.appspot.com",
  messagingSenderId: "125752017597",
  appId: "1:125752017597:web:ae1ac14df0c7782ac36dd4",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db, app };
