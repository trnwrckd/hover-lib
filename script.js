const btnBg = document.querySelectorAll("[data-btn]");
btnBg.forEach((btn) => {
  const props = btn.getAttribute("data-btn").split(" ");
  const effect = btn.getAttribute("data-hover").split(" ");
  const [hoverEffect, bg, font] = effect;
  btn.style.background = props[0];
  btn.style.color = props[1];

  btn.classList.add(hoverEffect);
  btn.style.setProperty("--bg", bg);
  btn.style.setProperty("--color", font);
});
