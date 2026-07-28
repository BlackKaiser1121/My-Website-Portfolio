const nav = document.querySelector<HTMLElement>("[data-site-nav]");

if (nav) {
  const toggle = nav.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const menu = nav.querySelector<HTMLElement>("[data-nav-menu]");

  if (toggle && menu) {
    document.documentElement.classList.add("js");

    const setOpen = (isOpen: boolean, restoreFocus = false): void => {
      nav.dataset.navState = isOpen ? "open" : "closed";
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");

      if (!isOpen && restoreFocus) {
        toggle.focus();
      }
    };

    const focusAnchorTarget = (hash: string): void => {
      const id = decodeURIComponent(hash.replace("#", ""));
      const target = id ? document.getElementById(id) : null;

      if (target) {
        target.focus({ preventScroll: true });
      }
    };

    setOpen(false);

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false, true);
      }
    });

    menu.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        setOpen(false);

        window.requestAnimationFrame(() => {
          focusAnchorTarget(link.hash);
        });
      });
    });
  }
}
