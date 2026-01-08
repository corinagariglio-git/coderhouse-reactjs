import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg8RZqk8yxZbdzuOiL26-B8Ct5Wo4ShCA",
  authDomain: "lilafit-react.firebaseapp.com",
  projectId: "lilafit-react",
  storageBucket: "lilafit-react.firebasestorage.app",
  messagingSenderId: "249410034998",
  appId: "1:249410034998:web:925cadc27a47e20081a797",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
