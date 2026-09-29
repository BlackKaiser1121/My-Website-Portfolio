import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginsRegistered = false;

export function ensureGsapPlugins(): { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger } {
  if (!pluginsRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    pluginsRegistered = true;
  }

  return { gsap, ScrollTrigger };
}
