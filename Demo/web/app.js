const slides = [...document.querySelectorAll(".slide")];
const nav = document.getElementById("nav");
const bar = document.getElementById("bar");
const counter = document.getElementById("counter");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

let index = 0;
let lastGroup = "";

slides.forEach((slide, i) => {
  const group = slide.dataset.group;
  if (group && group !== lastGroup) {
    const label = document.createElement("div");
    label.className = "section-label";
    label.textContent = group;
    nav.appendChild(label);
    lastGroup = group;
  }

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = slide.dataset.title || `Slide ${i + 1}`;
  button.addEventListener("click", () => go(i));
  nav.appendChild(button);
});

function go(i) {
  index = Math.max(0, Math.min(slides.length - 1, i));
  slides.forEach((slide, n) => slide.classList.toggle("active", n === index));
  [...nav.querySelectorAll("button")].forEach((button, n) => {
    button.classList.toggle("active", n === index);
    if (n === index) button.scrollIntoView({ block: "nearest" });
  });
  bar.style.width = `${((index + 1) / slides.length) * 100}%`;
  counter.textContent = `${index + 1} / ${slides.length}`;
  prev.disabled = index === 0;
  next.disabled = index === slides.length - 1;
  history.replaceState(null, "", `#${index + 1}`);
}

prev.addEventListener("click", () => go(index - 1));
next.addEventListener("click", () => go(index + 1));

document.addEventListener("keydown", (event) => {
  if (lightbox.classList.contains("open") && event.key === "Escape") {
    lightbox.classList.remove("open");
    return;
  }
  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    go(index + 1);
  }
  if (event.key === "ArrowLeft") go(index - 1);
  if (event.key === "Home") go(0);
  if (event.key === "End") go(slides.length - 1);
});

document.querySelectorAll(".mockup-frame img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("open");
  });
});

lightbox.addEventListener("click", () => lightbox.classList.remove("open"));

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => go(Number(button.dataset.go)));
});

window.addEventListener("hashchange", () => {
  const next = Number((location.hash || "#1").slice(1)) - 1;
  if (Number.isFinite(next) && next !== index) go(next);
});

const fromHash = Number((location.hash || "#1").slice(1)) - 1;
go(Number.isFinite(fromHash) ? fromHash : 0);
