const sidebar = document.querySelector("[data-sidebar]");
const overlay = document.querySelector("[data-overlay]");
const openButton = document.querySelector("[data-open-menu]");
const closeButton = document.querySelector("[data-close-menu]");

function openMenu() {
  sidebar?.classList.add("open");
  overlay?.classList.add("show");
  openButton?.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  sidebar?.classList.remove("open");
  overlay?.classList.remove("show");
  openButton?.setAttribute("aria-expanded", "false");
}

openButton?.addEventListener("click", openMenu);
closeButton?.addEventListener("click", closeMenu);
overlay?.addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.querySelectorAll("[data-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;
    document.querySelectorAll("[data-tab]").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll("[data-panel]").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`[data-panel="${target}"]`)?.classList.add("active");
  });
});

document.querySelectorAll("[data-comment-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = form.querySelector(".form-note");
    form.reset();
    if (note) {
      note.textContent = "Grazie! Abbiamo salvato il tuo consiglio per questa guida.";
    }
  });
});
