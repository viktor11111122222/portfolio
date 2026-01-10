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


// buttons linking to git / code

  document.getElementById("Code-MareljBtn").addEventListener("click", function () {
    window.location.href = "https://github.com/viktor11111122222/ordinacija-marelj";
  });

    document.getElementById("Code-ItsMomsWorldBtn").addEventListener("click", function () {
    window.location.href = "https://github.com/viktor11111122222/It-s-moms-world";
  });

      document.getElementById("Code-PotfolioBtn").addEventListener("click", function () {
    window.location.href = "https://github.com/viktor11111122222/portfolio";
  });

  // button linking to web

        document.getElementById("MareljBtn").addEventListener("click", function () {
    window.location.href = "https://github.com/viktor11111122222/ordinacija-marelj";
  });

        document.getElementById("ItsMomsWorldBtn").addEventListener("click", function () {
    window.location.href = "https://itsamomsworld.rs";
  });

        document.getElementById("PortfolioBtn").addEventListener("click", function () {
    window.location.href = "https://github.com/viktor11111122222/portfolio";
  });

  // btn scroll

  document.getElementById("goDown").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });


  // expanding footer

const toggleBtn = document.getElementById("footerToggle");
const expand = document.querySelector(".footer-expand");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const opened = expand.classList.toggle("open");
  toggleBtn.classList.toggle("active", opened);
  toggleBtn.textContent = opened ? "Zatvori poruku" : "Pošalji poruku";

  if (opened) {
    setTimeout(() => {
      expand.querySelector("input").focus();
    }, 300);
  }
});



// js za sladje email-a preko emailjs

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('service_ygfujvc', 'template_301bchb', this)
    .then(function() {
        showToast('Poruka uspešno poslata!'); // zeleno obaveštenje
        form.reset();
        // zatvori footer
        document.querySelector(".footer-expand").classList.remove("open");
        document.getElementById("footerToggle").textContent = "Pošalji poruku";
        document.getElementById("footerToggle").classList.remove("active");
    }, function(error) {
        console.log('EmailJS error:', error);
        showToast('Došlo je do greške, pokušajte ponovo.', true); // crveno
    });
});


// toast

function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = isError ? "show error" : "show";

  // sakrij posle 3 sekunde
  setTimeout(() => {
    toast.className = "";
  }, 3000);
}
