
const noBtn = document.getElementById("no");
const msg = document.getElementById("message");

const phrases = [
  "T’es sûre ? ",
  "Réfléchis encore ",
  "Allez dis oui ",
  "Dernière chance ",
  "Impossible wsh !"
];

noBtn.addEventListener("touchstart", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * 120;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  msg.textContent = phrases[Math.floor(Math.random() * phrases.length)];
});

document.getElementById("yes").addEventListener("click", () => {
  document.body.innerHTML = "<h1>Yesssssss! 💘😍</h1>";
});
