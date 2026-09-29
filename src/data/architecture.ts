import type { ArchitecturePreview } from "../types/portfolio";

export const architecturePreview: ArchitecturePreview = {
  projectSlug: "fahad",
  title: "On-device verification flow",
  summary:
    "FAHAD is the most accurately documented architecture for this phase: a mobile app that keeps static-image verification on device and stores history locally.",
  textAlternative:
    "The FAHAD flow starts with the Flutter mobile interface, passes a selected static image into an on-device TensorFlow Lite Vision Transformer workflow, returns a real, uncertain, or manipulated classification, and stores history locally with encryption.",
  nodes: [
    {
      label: "Flutter mobile interface",
      detail: "User selects a static image for verification."
    },
    {
      label: "On-device model layer",
      detail: "TensorFlow Lite and Vision Transformer workflow runs locally."
    },
    {
      label: "Classification output",
      detail: "Result is presented as real, uncertain, or manipulated."
    },
    {
      label: "Local encrypted history",
      detail: "Verification history stays on the device."
    }
  ]
};
