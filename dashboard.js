// dashboard.js

// Firebase Login Protection
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

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

// Redirect if not logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    initDashboard(); // start dashboard only when user is authenticated
  }
});

// Your existing functions (no changes)

function initDashboard() {
  // Optional: preload something or fetch user data later
}

function playClickSound() {
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch(() => {});
}

function goTo(page) {
  playClickSound();
  window.location.href = page;
}

function goBack() {
  playClickSound();
  window.location.href = "tap.html";
}

function logoutUser() {
  playClickSound();
  localStorage.clear();
  alert("You have been logged out.");
  window.location.href = "index.html";
}
