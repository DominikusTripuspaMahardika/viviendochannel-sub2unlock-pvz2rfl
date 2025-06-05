const btnSubscribe = document.getElementById("btnSubscribe");
const btnBell = document.getElementById("btnBell");
const btnLike = document.getElementById("btnLike");
const btnComment = document.getElementById("btnComment");
const btnInstagram = document.getElementById("btnInstagram");
const btnTelegram = document.getElementById("btnTelegram");
const progressBar = document.getElementById("progressBar");
const btnUnlock = document.getElementById("btnUnlock");
const countdown = document.getElementById("countdown");
const toast = document.getElementById("toast");

let clicked = { 
  youtube: false, 
  bell: false,
  like: false,
  comment: false, 
  instagram: false, 
  telegram: false 
};

function updateUnlockButton() {
  const total = Object.keys(clicked).length;
  const completed = Object.values(clicked).filter(Boolean).length;
  const percent = (completed / total) * 100;
  progressBar.style.width = `${percent}%`;
  if (completed === total) {
    btnUnlock.disabled = false;
    btnUnlock.classList.add("active");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.style.opacity = "1";
  setTimeout(() => { toast.style.opacity = "0"; }, 3000);
}

// Event Handlers
btnSubscribe.addEventListener("click", () => {
  window.open("https://www.youtube.com/@ViVienDoChannel", "_blank");
  btnSubscribe.classList.add("subscribed");
  btnSubscribe.disabled = true;
  clicked.youtube = true;
  updateUnlockButton();
  showToast("Thanks for subscribing!");
});
btnBell.addEventListener("click", () => {
  window.open("https://www.youtube.com/@ViVienDoChannel", "_blank");
  btnBell.classList.add("subscribed");
  btnBell.disabled = true;
  clicked.bell = true;
  updateUnlockButton();
  showToast("Thanks for turning on notifications!");
});
btnLike.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=wj7nErSgLfk", "_blank");
  btnLike.classList.add("subscribed");
  btnLike.disabled = true;
  clicked.like = true;
  updateUnlockButton();
  showToast("Thanks for liking the video!");
});
btnComment.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=uPThTZeSLCc&lc=1", "_blank");
  btnComment.classList.add("subscribed");
  btnComment.disabled = true;
  clicked.comment = true;
  updateUnlockButton();
  showToast("We appreciate your comment!");
});
btnInstagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/viviendochannel", "_blank");
  btnInstagram.classList.add("subscribed");
  btnInstagram.disabled = true;
  clicked.instagram = true;
  updateUnlockButton();
  showToast("Thanks for following!");
});
btnTelegram.addEventListener("click", () => {
  window.open("https://t.me/viviendochannel", "_blank");
  btnTelegram.classList.add("subscribed");
  btnTelegram.disabled = true;
  clicked.telegram = true;
  updateUnlockButton();
  showToast("Thanks for joining Telegram!");
});

// Unlock logic
btnUnlock.addEventListener("click", () => {
  if (btnUnlock.disabled) return;
  let timeLeft = 15;
  btnUnlock.textContent = `Please wait, Unlock In ${timeLeft} second...`;
  btnUnlock.disabled = true;
  btnUnlock.classList.remove("active");

  const countdownInterval = setInterval(() => {
    timeLeft--;
    btnUnlock.textContent = `Please wait, Unlock In ${timeLeft} second...`;
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      btnUnlock.textContent = "✔ Success! Redirecting...";
      showToast("✔ Success! Redirecting...");
      setTimeout(() => {
        window.location.href = "https://www.mediafire.com/file/wmn690cmtwy07um/PlantsVsZombies2Reflourished-By-ViVienDoChannel.zip/file";
      }, 1000);
    }
  }, 1000);
});

// Navbar menu toggle
const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.getElementById("navbarMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  navbarMenu.classList.toggle("active");
});
document.querySelectorAll(".navbar-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});