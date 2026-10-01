import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// 🔥 Cấu hình Firebase project: de-1-toan-11-luong
const firebaseConfig = {
  apiKey: "AIzaSyAR85Kn7-4X2UFsRZdnYUI7AAV3exM-n4I",
  authDomain: "de-1-toan-11-luong.firebaseapp.com",
  databaseURL: "https://de-1-toan-11-luong-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "de-1-toan-11-luong",
  storageBucket: "de-1-toan-11-luong.firebasestorage.app",
  messagingSenderId: "328212820320",
  appId: "1:328212820320:web:35fa8c665e25332e942e05",
  measurementId: "G-Q0RLM1HHL6"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, set, serverTimestamp };
