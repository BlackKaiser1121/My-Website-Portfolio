import { ensureGsapPlugins } from "./gsap";
import { motionDurations, motionEase, motionSelectors } from "./motion-config";
import type { MotionPreferenceController } from "./reduced-motion";

type MotionRoot = Document | HTMLElement;
type MotionCleanup = () => void;

interface MotionRevealOptions {
  root?: MotionRoot;
  preference: MotionPreferenceController;
}

function selectAll(root: MotionRoot, selector: string): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(selector));
}

function unique(elements: readonly HTMLElement[]): HTMLElement[] {
  return [...new Set(elements)];
}

function initHeroMotion(root: MotionRoot): void {
  const { gsap } = ensureGsapPlugins();
  const hero = root.querySelector<HTMLElement>(motionSelectors.hero);

  if (!hero) {
    return;
  }

  const items = selectAll(hero, motionSelectors.heroItem);
  const visual = hero.querySelector<HTMLElement>(motionSelectors.heroVisual);
  const timeline = gsap.timeline({
    defaults: {
      duration: motionDurations.cinematic,
      ease: motionEase.emphasized
    }
  });

  if (items.length > 0) {
    timeline.fromTo(
      items,
      { opacity: 0.42, y: 14 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.055,
        clearProps: "opacity,transform"
      }
    );
  }

  if (visual) {
    timeline.fromTo(
      visual,
      { opacity: 0.7, y: 10, scale: 0.985 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        clearProps: "opacity,transform"
      },
      items.length > 0 ? "<0.08" : 0
    );
  }
}

function initCaseStudyHeroMotion(root: MotionRoot): void {
  const { gsap } = ensureGsapPlugins();
  const hero = root.querySelector<HTMLElement>(motionSelectors.caseStudyHero);

  if (!hero) {
    return;
  }

  const content = hero.querySelector<HTMLElement>(motionSelectors.caseStudyContent);
  const visual = hero.querySelector<HTMLElement>(motionSelectors.caseStudyVisual);
  const targets = unique(
    [content, visual].filter((target): target is HTMLElement => Boolean(target))
  );

  if (targets.length === 0) {
    return;
  }

  gsap.fromTo(
    targets,
    { opacity: 0.78, y: 12 },
    {
      opacity: 1,
      y: 0,
      duration: motionDurations.reveal,
      ease: motionEase.emphasized,
      stagger: 0.08,
      clearProps: "opacity,transform"
    }
  );
}

function initScrollReveals(root: MotionRoot): void {
  const { gsap } = ensureGsapPlugins();
  const targets = unique([
    ...selectAll(root, motionSelectors.section),
    ...selectAll(root, motionSelectors.projectPreview),
    ...selectAll(root, motionSelectors.caseStudySection),
    ...selectAll(root, motionSelectors.caseStudySupport)
  ]).filter((element) => !element.closest(motionSelectors.hero));

  targets.forEach((target, index) => {
    gsap.fromTo(
      target,
      { opacity: 0.72, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: motionDurations.reveal,
        ease: motionEase.emphasized,
        clearProps: "opacity,transform",
        scrollTrigger: {
          id: `portfolio-reveal-${index}`,
          trigger: target,
          start: "top 88%",
          once: true
        }
      }
    );
  });
}

function initProjectPreviewMotion(root: MotionRoot): void {
  const { gsap } = ensureGsapPlugins();
  const previews = selectAll(root, motionSelectors.projectPreview);

  previews.forEach((preview, index) => {
    const visual = preview.querySelector<HTMLElement>(motionSelectors.projectVisual);
    const technologies = selectAll(preview, motionSelectors.projectTech);

    if (visual) {
      gsap.fromTo(
        visual,
        { clipPath: "inset(5% 0% 0% 0%)", opacity: 0.88 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: motionDurations.reveal,
          ease: motionEase.standard,
          clearProps: "clip-path,opacity",
          scrollTrigger: {
            id: `portfolio-project-visual-${index}`,
            trigger: preview,
            start: "top 82%",
            once: true
          }
        }
      );
    }

    if (technologies.length > 0) {
      gsap.fromTo(
        technologies,
        { opacity: 0.68, y: 6 },
        {
          opacity: 1,
          y: 0,
          duration: motionDurations.standard,
          ease: motionEase.standard,
          stagger: 0.035,
          clearProps: "opacity,transform",
          scrollTrigger: {
            id: `portfolio-project-tech-${index}`,
            trigger: preview,
            start: "top 78%",
            once: true
          }
        }
      );
    }
  });
}

function initArchitectureMotion(root: MotionRoot): void {
  const { gsap } = ensureGsapPlugins();
  const diagrams = selectAll(root, motionSelectors.architecture);

  diagrams.forEach((diagram, index) => {
    const nodes = selectAll(diagram, motionSelectors.architectureNode);

    if (nodes.length === 0) {
      return;
    }

    gsap.fromTo(
      nodes,
      { opacity: 0.72, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: motionDurations.reveal,
        ease: motionEase.emphasized,
        stagger: 0.08,
        clearProps: "opacity,transform",
        scrollTrigger: {
          id: `portfolio-architecture-${index}`,
          trigger: diagram,
          start: "top 82%",
          once: true
        }
      }
    );
  });
}

function initPlanetMotion(root: MotionRoot): MotionCleanup {
  const { gsap, ScrollTrigger } = ensureGsapPlugins();
  const planet = root.querySelector<HTMLElement>(motionSelectors.planet);

  if (!planet || typeof window === "undefined") {
    return () => undefined;
  }

  const finePointer =
    window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(hover: none)").matches;
  const shiftX = gsap.quickTo(planet, "--planet-shift-x", {
    duration: motionDurations.standard,
    ease: motionEase.standard
  });
  const shiftY = gsap.quickTo(planet, "--planet-shift-y", {
    duration: motionDurations.standard,
    ease: motionEase.standard
  });
  const tiltX = gsap.quickTo(planet, "--planet-tilt-x", {
    duration: motionDurations.standard,
    ease: motionEase.standard
  });
  const tiltY = gsap.quickTo(planet, "--planet-tilt-y", {
    duration: motionDurations.standard,
    ease: motionEase.standard
  });
  const glow = gsap.quickTo(planet, "--planet-glow-strength", {
    duration: motionDurations.standard,
    ease: motionEase.standard
  });
  const resetPlanet = (): void => {
    shiftX(0);
    shiftY(0);
    tiltX(0);
    tiltY(0);
    glow(0.08);
  };
  const onPointerMove = (event: PointerEvent): void => {
    const bounds = planet.getBoundingClientRect();
    const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;

    shiftX(Number((normalizedX * 9).toFixed(2)));
    shiftY(Number((normalizedY * 7).toFixed(2)));
    tiltX(Number((-normalizedY * 3).toFixed(2)));
    tiltY(Number((normalizedX * 3).toFixed(2)));
    glow(Number((0.08 + Math.abs(normalizedX) * 0.05).toFixed(3)));
  };
  const hero = planet.closest<HTMLElement>(motionSelectors.hero) ?? planet;
  const observer = new IntersectionObserver(
    ([entry]) => {
      planet.dataset.motionPlanetState = entry?.isIntersecting ? "running" : "paused";
      ScrollTrigger.refresh();
    },
    { threshold: 0.04 }
  );

  planet.dataset.motionPlanetState = "running";
  observer.observe(hero);

  if (finePointer) {
    hero.addEventListener("pointermove", onPointerMove, { passive: true });
    hero.addEventListener("pointerleave", resetPlanet);
  }

  return () => {
    observer.disconnect();
    hero.removeEventListener("pointermove", onPointerMove);
    hero.removeEventListener("pointerleave", resetPlanet);
    planet.dataset.motionPlanetState = "running";
    resetPlanet();
  };
}

export function initMotionReveals({
  root = document,
  preference
}: MotionRevealOptions): MotionCleanup {
  const { gsap, ScrollTrigger } = ensureGsapPlugins();

  if (preference.isReduced()) {
    return () => undefined;
  }

  const scope = root instanceof Document ? document.documentElement : root;
  const cleanups: MotionCleanup[] = [];
  const context = gsap.context(() => {
    initHeroMotion(root);
    initCaseStudyHeroMotion(root);
    initScrollReveals(root);
    initProjectPreviewMotion(root);
    initArchitectureMotion(root);
    cleanups.push(initPlanetMotion(root));
  }, scope);
  const refresh = (): void => ScrollTrigger.refresh();

  if (document.readyState === "complete") {
    window.requestAnimationFrame(refresh);
  } else {
    window.addEventListener("load", refresh, { once: true });
  }

  return () => {
    window.removeEventListener("load", refresh);
    for (const cleanup of cleanups) {
      cleanup();
    }
    context.revert();
  };
}
