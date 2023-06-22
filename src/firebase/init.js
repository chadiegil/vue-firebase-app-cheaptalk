import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDEvhHSl_ncvF13SFpP9xV2aLU1nIoXnzg",
  authDomain: "vue-cheaptalk-2.firebaseapp.com",
  projectId: "vue-cheaptalk-2",
  storageBucket: "vue-cheaptalk-2.appspot.com",
  messagingSenderId: "335972458365",
  appId: "1:335972458365:web:c187d96498ca0f7edd7614",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db, app };
