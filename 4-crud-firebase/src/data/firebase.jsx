import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASAlbHdA6WTEx_DNzDhvrkRLahEc6JvO0",
  authDomain: "fir-crud-f7e57.firebaseapp.com",
  projectId: "fir-crud-f7e57",
  storageBucket: "fir-crud-f7e57.appspot.com",
  messagingSenderId: "54700634912",
  appId: "1:54700634912:web:14013f15fe47f46c5c5d45"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db};