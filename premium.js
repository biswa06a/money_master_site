// premium.js

// Firebase Login Protection
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDo6BwWCRTexL_-lUwgy41FYB3zpJKRiWU",
  authDomain: "money-master-89c02.firebaseapp.com",
  projectId: "money-master-89c02",
  storageBucket: "money-master-89c02.appspot.com",
  messagingSenderId: "226410161274",
  appId: "1:226410161274:web:62793ff8d39e0d642707c3",
  measurementId: "G-62K0SFSZK4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check login
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// Back navigation with sound
window.goBack = function () {
  const s = new Audio("assets/sound.mp3");
  s.play();
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 200); // small delay to allow sound play
};
