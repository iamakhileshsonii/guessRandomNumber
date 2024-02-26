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

// soniakhileshbnb@gmail.com
// const firebaseConfig = {
//   apiKey: "AIzaSyCVBvOdQDvSLXGu3kFQj3xb-B0YSONJfeA",
//   authDomain: "randomnumber-ee2ac.firebaseapp.com",
//   projectId: "randomnumber-ee2ac",
//   storageBucket: "randomnumber-ee2ac.appspot.com",
//   messagingSenderId: "1031419518159",
//   appId: "1:1031419518159:web:8fd34e60310aee41b5abba",
// };

// thisisakhileshsoni@gmail.com
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDqBwP7qsJnnPQR1vigGmX731fmR7PoYWQ",
//   authDomain: "akhileshprojects-4f896.firebaseapp.com",
//   projectId: "akhileshprojects-4f896",
//   storageBucket: "akhileshprojects-4f896.appspot.com",
//   messagingSenderId: "241191603108",
//   appId: "1:241191603108:web:93089bbb3fa50f3031cf31",
// };

// HAPUD
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvNgj2sBSkkvvdvwkvDABXysk9LOo7zbA",
  authDomain: "hapurkhabar-17b53.firebaseapp.com",
  projectId: "hapurkhabar-17b53",
  storageBucket: "hapurkhabar-17b53.appspot.com",
  messagingSenderId: "713820298370",
  appId: "1:713820298370:web:030949bd587f2129d8e89b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const GoogleProvider = new GoogleAuthProvider();
