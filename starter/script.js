const copyBtn = document.getElementById("copyEmail");
const copyMsg = document.getElementById("copyMsg");

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();

  navigator.clipboard.writeText("viktordjordjevic350@gmail.com")
    .then(() => {
      copyMsg.classList.add("show");

      setTimeout(() => {
        copyMsg.classList.remove("show");
      }, 2000);
    })
    .catch(() => {
      alert("Ne mogu da kopiram email 😕");
    });
});
