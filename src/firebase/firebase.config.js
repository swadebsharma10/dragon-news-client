
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCezzYL3EIrVWEge7hQ_qCrX-FjGAfCNM8",
  authDomain: "dragon-news-authenticati-ecaa9.firebaseapp.com",
  projectId: "dragon-news-authenticati-ecaa9",
  storageBucket: "dragon-news-authenticati-ecaa9.appspot.com",
  messagingSenderId: "646168555565",
  appId: "1:646168555565:web:66430f083a9c8a88b648a4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;