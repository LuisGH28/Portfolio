(function () {
  const qs = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  async function loadJSON(path) {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) throw new Error(`No se pudo cargar ${path}`);
    return res.json();
  }

  function applyTheme(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
    qsa(".theme-btn").forEach((b) =>
      b.setAttribute("aria-pressed", b.getAttribute("data-theme") === theme)
    );
  }

  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(localStorage.getItem("theme") || systemTheme);

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (t?.classList?.contains("theme-btn")) {
      const mode = t.getAttribute("data-theme");
      localStorage.setItem("theme", mode);
      applyTheme(mode);
    }
  });

  const menuBtn = qs("#menuBtn");
  const mobileNav = qs("#mobileNav");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });
  }

  let dict = {};
  async function setLang(lang) {
    try {
      dict = await loadJSON(`./js/i18n/${lang}.json`);
    } catch {
      dict = await loadJSON(`./js/i18n/es.json`);
      lang = "es";
    }

    document.documentElement.lang = lang;

    qsa("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.innerHTML = dict[key];
    });

    qsa("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    qsa("[data-i18n-value]").forEach((el) => {
      const key = el.getAttribute("data-i18n-value");
      if (dict[key]) el.value = dict[key];
    });

    qsa("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (dict[key]) el.setAttribute("title", dict[key]);
    });

    qsa(".lang-btn").forEach((btn) =>
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang)
    );

    localStorage.setItem("lang", lang);

    const cvLinks = document.querySelectorAll(
      'a[data-i18n="nav.downloadCV"], header a[href$=".pdf"]'
    );
    cvLinks.forEach((link) => {
      if (lang === "en") {
        link.setAttribute("href", "./public/Cv_GHLA_EN.pdf");
      } else {
        link.setAttribute("href", "./public/Cv_GHLA.pdf");
      }
    });

    await renderProjects();
    setupProjectHover();
  }

  async function renderProjects() {
    const wrap = document.querySelector("#projectsCarousel");
    if (!wrap) return;

    try {
      const lang = document.documentElement.lang || localStorage.getItem("lang") || "es";
      const projects = await loadJSON(`./js/data/projects.${lang}.json`);

      const repoLabel = (dict && dict["buttons.repo"]) || "Repo";
      const demoLabel = (dict && dict["buttons.demo"]) || "Demo";
      const downloadLabel = (dict && dict["buttons.download"]) || "Download";
      const documentationLabel = (dict && dict["buttons.documentation"] || "Documentation")

      wrap.innerHTML = projects
        .map((p) => {
          const tags = (p.tags || [])
            .map((t) => `<span class="text-xs px-2 py-0.5 rounded-lg border">${t}</span>`)
            .join("");

          const repoBtn = p.links?.repo
            ? `<a href="${p.links.repo}" target="_blank" rel="noreferrer"
                 class="px-3 py-1.5 rounded-lg border border-slate-300 hover:border-slate-400
                        dark:border-slate-600 dark:hover:border-slate-500">
                 ${repoLabel}
               </a>`
            : "";

          const demoBtn = p.links?.demo
            ? `<a href="${p.links.demo}" target="_blank" rel="noreferrer"
                 class="px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-700">
                 ${demoLabel}
               </a>`
            : "";

          const downloadBtn = p.links?.download
            ? `<a href="${p.links.download}" target="_blank" rel="noreferrer"
                 class="px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-700">
                 ${downloadLabel}
               </a>`
            : "";

            const documentationBtn = p.links?.documentation
            ? `<a href="${p.links.documentation}" target="_blank" rel="noreferrer"
                 class="px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-700">
                 ${documentationLabel}
               </a>`
            : "";

          return `
            <article class="project-card min-w-[80%] sm:min-w-[40%] lg:min-w-[33%]
                           snap-start bg-white dark:bg-slate-800
                           border border-slate-200 dark:border-slate-700
                           rounded-xl shadow-soft overflow-hidden
                           transition-all duration-200 will-change-transform">
              <img src="${p.image}" alt="${
            p.title ?? ""
          }" class="h-40 w-full object-cover" loading="lazy">
              <div class="p-4">
                <h3 class="font-semibold text-lg text-slate-900 dark:text-white">${
                  p.title ?? ""
                }</h3>
                <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">${p.summary ?? ""}</p>

                ${tags ? `<div class="mt-2 flex flex-wrap gap-2">${tags}</div>` : ""}

                ${
                  repoBtn || demoBtn || downloadBtn || documentationBtn
                    ? `<div class="mt-4 flex gap-3 text-sm">${repoBtn}${demoBtn}${downloadBtn}${documentationBtn}</div>`
                    : ""
                }
              </div>
            </article>`;
        })
        .join("");
    } catch (e) {
      console.warn("No se cargó el archivo de proyectos", e);
    }
  }

  function setupCarousel() {
    const carousel = qs("#projectsCarousel");
    const prev = qs(".carousel-prev");
    const next = qs(".carousel-next");
    const dots = qs("#carouselDots");
    if (!carousel) return;

    const getCardWidth = () => {
      const card = carousel.querySelector("article");
      return card ? card.getBoundingClientRect().width + 24 : 300;
    };

    if (prev) {
      prev.addEventListener("click", () =>
        carousel.scrollBy({ left: -getCardWidth(), behavior: "smooth" })
      );
    }
    if (next) {
      next.addEventListener("click", () =>
        carousel.scrollBy({ left: getCardWidth(), behavior: "smooth" })
      );
    }

    function buildDots() {
      if (!dots) return;
      dots.innerHTML = "";
      const slides = carousel.querySelectorAll("article");
      slides.forEach((_, i) => {
        const b = document.createElement("button");
        b.className = "h-2.5 w-2.5 rounded-full bg-slate-400 aria-[current=true]:bg-brand-600";
        b.addEventListener("click", () => {
          carousel.scrollTo({ left: i * getCardWidth(), behavior: "smooth" });
        });
        dots.appendChild(b);
      });
    }

    new MutationObserver(buildDots).observe(carousel, { childList: true });
    buildDots();
  }

  function setupProjectHover() {
    const carousel = document.querySelector("#projectsCarousel");
    if (!carousel) return;

    const cards = Array.from(carousel.querySelectorAll(".project-card"));

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        carousel.classList.add("is-hovering");
        card.classList.add("is-hovered");
      });

      card.addEventListener("mouseleave", () => {
        card.classList.remove("is-hovered");
        const anyHovered = cards.some((c) => c.matches(":hover"));
        if (!anyHovered) carousel.classList.remove("is-hovering");
      });
    });

    carousel.addEventListener("mouseleave", () => {
      carousel.classList.remove("is-hovering");
      cards.forEach((c) => c.classList.remove("is-hovered"));
    });

    cards.forEach((card) => {
      card.addEventListener(
        "touchstart",
        () => {
          carousel.classList.add("is-hovering");
          cards.forEach((c) => c.classList.remove("is-hovered"));
          card.classList.add("is-hovered");
        },
        { passive: true }
      );
    });
  }

  const yearEl = qs("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const lang = localStorage.getItem("lang") || "es";
  setLang(lang);

  qsa(".lang-btn").forEach((b) =>
    b.addEventListener("click", () => setLang(b.getAttribute("data-lang")))
  );

  renderProjects().then(() => {
    setupCarousel();
    setupProjectHover();
  });
})();
