import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const db = getFirestore();
const auth = getAuth();

// Auth check to prevent direct access
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

window.loadWithdrawPage = function () {
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch(() => {});

  const coins = parseInt(localStorage.getItem("coins")) || 0;
  const inr = (coins / 1000).toFixed(2);

  document.getElementById("coinDisplay").textContent = coins;
  document.getElementById("inrValue").textContent = inr;
};

window.submitWithdrawal = async function () {
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch(() => {});

  const coins = parseInt(localStorage.getItem("coins")) || 0;
  const email = localStorage.getItem("userEmail") || "";
  const name = localStorage.getItem("userName") || "";
  const uid = localStorage.getItem("userUID") || "";
  const upi = document.getElementById("upiInput").value.trim();
  const mode = localStorage.getItem("mode");

  if (mode === "guest") {
    alert("Please log in to withdraw coins.");
    return;
  }

  if (!upi) {
    alert("Please enter your UPI or Paytm ID.");
    return;
  }

  if (coins < 200000) {
    alert("You need at least 200,000 coins to withdraw.");
    return;
  }

  try {
    // Optional: Disable button to prevent double submission
    const btn = document.querySelector("button");
    btn.disabled = true;
    btn.textContent = "Processing...";

    await addDoc(collection(db, "withdrawals"), {
      uid: uid,
      name: name,
      email: email,
      coins: coins,
      upi: upi,
      amount: (coins / 1000).toFixed(2),
      status: "Pending",
      created: serverTimestamp()
    });

    alert("Withdrawal request submitted successfully!");
    localStorage.setItem("coins", 0);
    document.getElementById("coinDisplay").textContent = "0";
    document.getElementById("inrValue").textContent = "0.00";
    document.getElementById("upiInput").value = "";

    btn.disabled = false;
    btn.textContent = "Request Withdrawal";
  } catch (error) {
    console.error("Withdrawal error:", error);
    alert("Something went wrong. Try again later.");
  }
};
