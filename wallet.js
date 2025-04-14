// Firebase imports
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Firebase services
const auth = getAuth();
const db = getFirestore();

// Load wallet info
function loadWallet() {
  // Play load sound
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch(() => {});

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Logged-in user — fetch from Firestore
      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          const coins = parseInt(data.coins) || 0;
          updateWalletDisplay(coins);
        } else {
          updateWalletDisplay(0); // No data yet
        }
      } catch (err) {
        console.error("Error fetching wallet:", err);
        updateWalletDisplay(0);
      }
    } else {
      // Guest user — fetch from localStorage
      const coins = parseInt(localStorage.getItem("coins")) || 0;
      updateWalletDisplay(coins);
    }
  });
}

function updateWalletDisplay(coins) {
  const rupees = (coins / 1000).toFixed(2);
  document.getElementById("coinDisplay").textContent = coins;
  document.getElementById("inrValue").textContent = rupees;
}
