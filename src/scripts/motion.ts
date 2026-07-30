import { createMotionPreference } from "../animation/reduced-motion";
import { initMotionReveals } from "../animation/reveal";

declare global {
  interface Window {
    __portfolioMotionCleanup?: () => void;
  }
}

function setReducedMotionState(root: HTMLElement): void {
  root.dataset.motionPreference = "reduced";
  root.dataset.motion = "ready";
}

function setFullMotionState(root: HTMLElement): void {
  root.dataset.motionPreference = "full";
  root.dataset.motion = "ready";
}

export function initPortfolioMotion(): () => void {
  const root = document.documentElement;
  const preference = createMotionPreference();
  let revealCleanup = (): void => undefined;

  window.__portfolioMotionCleanup?.();

  const applyPreference = (): void => {
    revealCleanup();
    revealCleanup = (): void => undefined;

    if (preference.isReduced()) {
      setReducedMotionState(root);
      return;
    }

    setFullMotionState(root);
    revealCleanup = initMotionReveals({ preference });
  };
  const unsubscribe = preference.onChange(applyPreference);
  const cleanup = (): void => {
    revealCleanup();
    unsubscribe();
    preference.destroy();
    delete root.dataset.motion;
    delete root.dataset.motionPreference;
    delete window.__portfolioMotionCleanup;
  };

  applyPreference();
  window.__portfolioMotionCleanup = cleanup;

  return cleanup;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initPortfolioMotion(), { once: true });
} else {
  initPortfolioMotion();
}
