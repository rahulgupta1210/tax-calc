// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAOSOI_0lThcFWUrndY06OACmRsgUPBVK4",
//   authDomain: "selfca-5efd1.firebaseapp.com",
//   projectId: "selfca-5efd1",
//   storageBucket: "selfca-5efd1.firebasestorage.app",
//   messagingSenderId: "726454229706",
//   appId: "1:726454229706:web:8f48d3c69c26345d353233",
//   measurementId: "G-J333TQBZQ2"

// };

const firebaseConfig = {
  apiKey: "AIzaSyDDG2sOICTfPCx57IL3TCE4c_1IJfrqYHU",
  authDomain: "netflixclone-61b36.firebaseapp.com",
  projectId: "netflixclone-61b36",
  storageBucket: "netflixclone-61b36.firebasestorage.app",
  messagingSenderId: "582202912274",
  appId: "1:582202912274:web:1a5de78875b310e159b2cb",
  measurementId: "G-50HGQCF24R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();