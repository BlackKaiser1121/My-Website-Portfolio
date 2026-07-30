export type MotionPreference = "full" | "reduced";

export interface MotionPreferenceController {
  current: () => MotionPreference;
  isReduced: () => boolean;
  onChange: (callback: (preference: MotionPreference) => void) => () => void;
  destroy: () => void;
}

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

export function createMotionPreference(): MotionPreferenceController {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return {
      current: () => "reduced",
      isReduced: () => true,
      onChange: () => () => undefined,
      destroy: () => undefined
    };
  }

  const mediaQuery = window.matchMedia(reducedMotionQuery);
  const listeners = new Set<(preference: MotionPreference) => void>();
  const current = (): MotionPreference => (mediaQuery.matches ? "reduced" : "full");
  const notify = (): void => {
    const preference = current();

    for (const listener of listeners) {
      listener(preference);
    }
  };

  mediaQuery.addEventListener("change", notify);

  return {
    current,
    isReduced: () => mediaQuery.matches,
    onChange: (callback) => {
      listeners.add(callback);

      return () => {
        listeners.delete(callback);
      };
    },
    destroy: () => {
      listeners.clear();
      mediaQuery.removeEventListener("change", notify);
    }
  };
}
