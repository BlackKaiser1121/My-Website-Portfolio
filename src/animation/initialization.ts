import { ensureGsapPlugins } from "./gsap";
import type { MotionPreferenceController } from "./reduced-motion";

const INTRO_STORAGE_KEY = "portfolio-v2-intro-complete";

interface InitializationOptions {
  preference: MotionPreferenceController;
}

function storageHasCompleted(): boolean {
  try {
    return window.sessionStorage.getItem(INTRO_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function markStorageComplete(): void {
  try {
    window.sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
  } catch {
    // Session storage can be unavailable in hardened browsing modes.
  }
}

function setIntroState(
  root: HTMLElement,
  sequence: HTMLElement,
  state: "active" | "complete" | "skipped"
): void {
  root.dataset.introSequence = state;
  sequence.dataset.initState = state;
  sequence.hidden = state !== "active";
}

export function initInitializationSequence({ preference }: InitializationOptions): () => void {
  const sequence = document.querySelector<HTMLElement>("[data-init-sequence]");
  const root = document.documentElement;

  if (!sequence) {
    root.dataset.introSequence = "unavailable";
    return () => undefined;
  }

  const skip = sequence.querySelector<HTMLButtonElement>("[data-init-skip]");

  if (preference.isReduced()) {
    setIntroState(root, sequence, "skipped");
    return () => undefined;
  }

  if (storageHasCompleted()) {
    setIntroState(root, sequence, "complete");
    return () => undefined;
  }

  const { gsap } = ensureGsapPlugins();
  const steps = Array.from(sequence.querySelectorAll<HTMLElement>("[data-init-step]"));
  const complete = (): void => {
    const skipHadFocus = document.activeElement === skip;
    markStorageComplete();
    setIntroState(root, sequence, "complete");
    if (skipHadFocus) {
      document.querySelector<HTMLElement>("#main")?.focus({ preventScroll: true });
    }
  };
  const timeline = gsap.timeline({
    defaults: { duration: 0.22, ease: "power2.out" }
  });
  const skipIntro = (): void => {
    timeline.progress(1).kill();
    complete();
  };
  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === "Escape" && sequence.dataset.initState === "active") {
      skipIntro();
    }
  };

  setIntroState(root, sequence, "active");

  timeline.fromTo(steps, { x: -6 }, { x: 0, stagger: 0.14 }, 0.08).add(complete, 1.32);

  skip?.addEventListener("click", skipIntro);
  window.addEventListener("keydown", onKeyDown);

  return () => {
    skip?.removeEventListener("click", skipIntro);
    window.removeEventListener("keydown", onKeyDown);
    timeline.kill();
    if (sequence.dataset.initState === "active") {
      complete();
    }
  };
}
