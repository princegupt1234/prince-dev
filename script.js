const menuButton = document.getElementById("mobileMenuBtn");
const drawer = document.getElementById("mobileDrawer");
const overlay = document.getElementById("mobileOverlay");
const closeButton = document.getElementById("drawerClose");

function setMenuOpen(isOpen) {
  drawer.classList.toggle("open", isOpen);
  overlay.classList.toggle("open", isOpen);
  drawer.setAttribute("aria-hidden", String(!isOpen));
  drawer.inert = !isOpen;
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);

  if (isOpen) {
    closeButton.focus();
  } else {
    menuButton.focus();
  }
}

drawer.inert = true;
menuButton.addEventListener("click", () => setMenuOpen(true));
closeButton.addEventListener("click", () => setMenuOpen(false));
overlay.addEventListener("click", () => setMenuOpen(false));
drawer.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && drawer.classList.contains("open")) {
    setMenuOpen(false);
  }
});

const mobileThemeToggle = document.getElementById("mobileThemeToggle");
const themeToggles = [document.getElementById("themeToggle"), mobileThemeToggle];
themeToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    themeToggles.forEach((button) => {
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
      button.querySelector("i").className = isDark ? "bi bi-sun" : "bi bi-moon-stars";
    });
  });
});

const sectionLinks = document.querySelectorAll(".sidebar-nav .nav-item");
const trackedSections = Array.from(sectionLinks)
  .map((link) => document.getElementById(link.dataset.section))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const activeSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        const isActive = link.dataset.section === entry.target.id;
        link.classList.toggle("active", isActive);
        if (isActive) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  trackedSections.forEach((section) => activeSectionObserver.observe(section));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".section-block").forEach((section) => {
    section.classList.add("reveal");
    revealObserver.observe(section);
  });
} else {
  document.querySelectorAll(".section-block").forEach((section) => {
    section.classList.add("visible");
  });
}

document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

const heroCommandText = document.getElementById("heroCommandText");
const heroRoleText = document.getElementById("heroRoleText");
if (heroCommandText && heroRoleText) {
  const terminalEntries = [
    { command: "whoami", output: "Prince Gupt" },
    { command: "cat stack.txt", output: "Java · Spring Boot · MySQL" },
    { command: "java -version", output: 'java version "25.0.4.1"' },
    { command: "ls projects/", output: "Viastastore  RouteX  Portfolio" },
    { command: "cat status.txt", output: "Open to SDE roles" },
  ];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let entryIndex = 0;
  let characterIndex = 0;
  let isDeleting = false;
  let animationTimer;

  const typeOutput = () => {
    const output = terminalEntries[entryIndex].output;
    characterIndex += isDeleting ? -1 : 1;
    heroRoleText.textContent = output.slice(0, characterIndex);

    let delay = isDeleting ? 45 : 85;
    if (!isDeleting && characterIndex === output.length) {
      isDeleting = true;
      delay = 1500;
    } else if (isDeleting && characterIndex === 0) {
      isDeleting = false;
      entryIndex = (entryIndex + 1) % terminalEntries.length;
      heroCommandText.textContent = terminalEntries[entryIndex].command;
      delay = 250;
    }

    animationTimer = window.setTimeout(typeOutput, delay);
  };

  const syncRoleAnimation = () => {
    window.clearTimeout(animationTimer);
    if (reducedMotion.matches) {
      heroCommandText.textContent = terminalEntries[0].command;
      heroRoleText.textContent = terminalEntries[0].output;
      return;
    }

    entryIndex = 0;
    characterIndex = 0;
    isDeleting = false;
    heroCommandText.textContent = terminalEntries[0].command;
    heroRoleText.textContent = "";
    animationTimer = window.setTimeout(typeOutput, 250);
  };

  syncRoleAnimation();
  reducedMotion.addEventListener("change", syncRoleAnimation);
}

document.querySelectorAll(".project-preview-image").forEach((image) => {
  image.addEventListener("error", () => image.remove(), { once: true });
});

document.querySelectorAll("[data-certificate-image]").forEach((image) => {
  const certificateMedia = image.parentElement;
  const showCertificate = () => certificateMedia.classList.add("has-image");

  image.addEventListener("load", showCertificate, { once: true });
  image.addEventListener("error", () => image.remove(), { once: true });
  if (image.complete) {
    if (image.naturalWidth > 0) showCertificate();
    else image.remove();
  }
});

const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const submitButton = contactForm.querySelector('button[type="submit"]');
const contactReturn = new URL(window.location.href);
const contactSent = contactReturn.searchParams.get("contact") === "sent";

if (contactSent) {
  formSuccess.textContent = "Thanks! Your message has been sent.";
  formSuccess.classList.add("show");
  contactReturn.searchParams.delete("contact");
  history.replaceState(null, "", `${contactReturn.pathname}${contactReturn.search}${contactReturn.hash}`);
}

if (window.location.protocol === "http:" || window.location.protocol === "https:") {
  contactReturn.searchParams.set("contact", "sent");
  contactReturn.hash = "contact";
  document.getElementById("cf-next").value = contactReturn.href;
}

contactForm.addEventListener("submit", (event) => {
  formSuccess.classList.remove("show");

  if (!contactForm.reportValidity()) {
    event.preventDefault();
    return;
  }

  const subjectInput = document.getElementById("cf-subject");
  subjectInput.value = `Portfolio contact: ${subjectInput.value.trim()}`;

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  formSuccess.textContent = "Sending your message...";
  formSuccess.classList.add("show");
});
