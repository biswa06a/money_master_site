function loadLeaderboard() {
  const users = [
    { name: "Riya", coins: 400000000 },
    { name: "Rahul", coins: 380000000 },
    { name: "Amit", coins: 350000000 },
    { name: "Sneha", coins: 320000000 },
    { name: "Deepak", coins: 300000000 },
    { name: "Neha", coins: 280000000 },
    { name: "Arjun", coins: 250000000 },
    { name: "Kriti", coins: 220000000 },
    { name: "Vikram", coins: 200000000 },
    { name: "Simran", coins: 180000000 }
  ];

  const list = document.getElementById("leaderList");
  list.innerHTML = "";

  users.forEach((user, index) => {
    const inr = (user.coins / 1000).toFixed(0);
    const rank = index + 1;

    const card = document.createElement("div");
    card.className = "leader-card";

    card.innerHTML = `
      <div style="display:flex; align-items:center; gap:12px;">
        <img src="assets/icon_leaderboard.png" alt="avatar" style="width:50px; height:50px; border-radius:50%; box-shadow:0 0 6px #00f5a0;" />
        <div style="text-align:left;">
          <span class="rank">#${rank} - ${user.name}</span>
          <span>Coins: ${user.coins.toLocaleString()}</span>
          <span>Withdrawn: ₹${inr}</span>
        </div>
      </div>
    `;

    list.appendChild(card);
  });
}
