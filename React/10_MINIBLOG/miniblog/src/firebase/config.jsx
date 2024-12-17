import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCsyyqytraHR41dDKY1MlHjnsolLXrRVbU",
  authDomain: "miniblog-bb42f.firebaseapp.com",
  projectId: "miniblog-bb42f",
  storageBucket: "miniblog-bb42f.firebasestorage.app",
  messagingSenderId: "513337800879",
  appId: "1:513337800879:web:ac158d654f252640127c5a"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };