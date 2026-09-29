const revealSelectors = [
  ".ispace-about__heading h2",
  ".ispace-about__copy p",
  ".ispace-about__meta span",

  ".ispace-logistics__heading h2",
  ".ispace-logistics__heading p",

  ".india-exports__heading h2",
  ".india-exports__heading p",

  ".ispace-reach__content h2",
  ".ispace-reach__content p",
  ".reach-locations span",

  ".ispace-quote__heading h2",
  ".ispace-quote__heading p",

  ".quote-form label",
  ".quote-form button",
];

function prepareElements() {
  const elements = [];

  revealSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (element.dataset.ispacePolished) return;

      element.dataset.ispacePolished = "true";
      element.classList.add("ispace-polish-reveal");

      const index = elements.length % 7;

      element.style.setProperty(
        "--reveal-index",
        index
      );

      elements.push(element);
    });
  });

  return elements;
}

function revealElements() {
  const elements = prepareElements();

  if (!elements.length) return;

  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {
    elements.forEach((element) => {
      element.classList.add("ispace-polish-visible");
    });

    return;
  }

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      element.classList.add("ispace-polish-visible");
    });

    return;
  }

  const observer =
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(
            "ispace-polish-visible"
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

function start() {
  /*
    Give React one paint to finish mounting.
    This prevents reveal calculations from happening
    while the page is still being constructed.
  */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      revealElements();
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    start,
    { once: true }
  );
} else {
  start();
}

export {};
