import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// 🔥 Cấu hình Firebase project: luu-submitexam-a05-vl-12
const firebaseConfig = {
  apiKey: "AIzaSyBKIwyzW6Yu9HRfslh1qIztql7CqSkFvKo",
  authDomain: "luu-submitexam-a05-vl-12.firebaseapp.com",
  databaseURL: "https://luu-submitexam-a05-vl-12-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "luu-submitexam-a05-vl-12",
  storageBucket: "luu-submitexam-a05-vl-12.firebasestorage.app",
  messagingSenderId: "499179183740",
  appId: "1:499179183740:web:c85a952b1713277c14b3f9",
  measurementId: "G-32S8C8SYDY"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, set, serverTimestamp };
