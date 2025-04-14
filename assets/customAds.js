// assets/customAds.js

(function(){
  const script = document.createElement('script');
  script.src = "https://www.profitableratecpm.com/ibu3q4xj87?key=15bf92f761739f1b94851ca0199f3b33";
  script.async = true;

  // Inject the ad only on certain pages if needed
  if (window.location.href.includes("tap.html") || window.location.href.includes("index.html")) {
    document.body.appendChild(script);
  }
})();
