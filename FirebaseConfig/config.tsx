import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn6vZDZHelzqoI5aO5GUT-YvWuMtd8py0",
  authDomain: "compass-app-4d764.firebaseapp.com",
  projectId: "compass-app-4d764",
  storageBucket: "compass-app-4d764.appspot.com",
  messagingSenderId: "185744054725",
  appId: "1:185744054725:web:aea704a967ff22e89f53ac",
  measurementId: "G-Z46PYMCH4N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);