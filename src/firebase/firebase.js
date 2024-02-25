import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDBmdZ1A9AZPtXJBo4nZ_RLVg-E3SB1sZM",
//   authDomain: "randomnumbers-bde3c.firebaseapp.com",
//   projectId: "randomnumbers-bde3c",
//   storageBucket: "randomnumbers-bde3c.appspot.com",
//   messagingSenderId: "698095017798",
//   appId: "1:698095017798:web:8797d7f74e2305553ecf47",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCVBvOdQDvSLXGu3kFQj3xb-B0YSONJfeA",
  authDomain: "randomnumber-ee2ac.firebaseapp.com",
  projectId: "randomnumber-ee2ac",
  storageBucket: "randomnumber-ee2ac.appspot.com",
  messagingSenderId: "1031419518159",
  appId: "1:1031419518159:web:8fd34e60310aee41b5abba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const GoogleProvider = new GoogleAuthProvider();
