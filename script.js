// Aktuelles Jahr im Footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Navigation: heller Hintergrund nach dem Hero-Bild
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > window.innerHeight * 0.6);
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
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// Größenauswahl
const selected = { w: null, l: null };
const sizesBox = document.querySelector(".sizes");
document.querySelectorAll(".sizes__options").forEach((group) => {
  const key = group.dataset.size;
  const label = document.getElementById(key + "Label");
  group.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    group.querySelectorAll("button").forEach((b) => b.classList.toggle("is-active", b === btn));
    group.classList.add("has-choice");
    selected[key] = btn.textContent;
    if (label) label.textContent = btn.textContent;
    if (selected.w && selected.l) {
      sizesBox.classList.remove("is-missing");
      document.getElementById("orderHint").textContent = "";
    }
  });
});

// Bestellung per E-Mail (bis ein Shop-System angebunden ist)
const ORDER_EMAIL = "kontakt@example.com"; // <- hier deine E-Mail-Adresse eintragen
const orderBtn = document.getElementById("orderBtn");
const hint = document.getElementById("orderHint");
if (orderBtn) {
  orderBtn.addEventListener("click", () => {
    if (!selected.w || !selected.l) {
      sizesBox.classList.add("is-missing");
      hint.textContent = "Bitte wähle Weite und Länge.";
      return;
    }
    sizesBox.classList.remove("is-missing");
    hint.textContent = "";
    const subject = `Bestellung moc Modell 01 – W${selected.w} / L${selected.l}`;
    const body = [
      "Hallo moc,",
      "",
      "ich möchte folgende Jeans bestellen:",
      `Modell 01 – Weite ${selected.w}, Länge ${selected.l} – 180 €`,
      "",
      "Name:",
      "Lieferadresse:",
      "",
    ].join("\n");
    window.location.href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
