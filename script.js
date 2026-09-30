// Aktuelles Jahr im Footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Navigation: Hintergrund beim Scrollen
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobiles Menü
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
if (toggle && links) {
  const setMenu = (open) => {
    links.classList.toggle("is-open", open);
    nav.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  };
  toggle.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
}

// Elemente beim Scrollen einblenden
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// Zähler-Animation in der Hero-Sektion
const counters = document.querySelectorAll("[data-count]");
const animateCount = (el) => {
  const target = Number(el.dataset.count);
  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
counters.forEach(animateCount);

// Kontaktformular: Prüfen und per E-Mail-Programm versenden
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const CONTACT_EMAIL = "kontakt@example.com"; // <- hier deine E-Mail-Adresse eintragen

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll("[required]").forEach((field) => {
      const ok = field.value.trim() !== "" && field.checkValidity();
      field.classList.toggle("is-invalid", !ok);
      if (!ok) valid = false;
    });

    if (!valid) {
      status.textContent = "Bitte fülle alle Felder korrekt aus.";
      status.className = "form__status err";
      return;
    }

    const data = new FormData(form);
    const subject = `Anfrage von ${data.get("name")} (${data.get("paket")})`;
    const body = `Name: ${data.get("name")}\nE-Mail: ${data.get("email")}\nPaket: ${data.get("paket")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    status.textContent = "Danke! Dein E-Mail-Programm öffnet sich gleich.";
    status.className = "form__status ok";
    form.reset();
  });
}
