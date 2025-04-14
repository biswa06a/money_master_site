window.loadTasksPage = function () {
  const coins = parseInt(localStorage.getItem("coins")) || 0;
  document.getElementById("coinDisplay").textContent = coins;
};

window.watchAdAndReward = function () {
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch(() => {});

  let coins = parseInt(localStorage.getItem("coins")) || 0;
  coins += 500;

  localStorage.setItem("coins", coins);
  document.getElementById("coinDisplay").textContent = coins;

  alert("Ad watched! You earned 500 coins.");
};
