const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Ensure buttons are absolutely positioned in CSS for left/top to work

noBtn.addEventListener("mouseenter", () => {
  const yesRect = yesBtn.getBoundingClientRect();
  const noRect = noBtn.getBoundingClientRect();

  yesBtn.style.left = `${noRect.left - yesBtn.offsetParent.getBoundingClientRect().left}px`;
  yesBtn.style.top = `${noRect.top - yesBtn.offsetParent.getBoundingClientRect().top}px`;

  noBtn.style.left = `${yesRect.left - noBtn.offsetParent.getBoundingClientRect().left}px`;
  noBtn.style.top = `${yesRect.top - noBtn.offsetParent.getBoundingClientRect().top}px`;
});