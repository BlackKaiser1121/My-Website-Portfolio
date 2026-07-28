export interface SkillGroup {
  title: string;
  items: readonly string[];
}

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Languages",
    items: ["HTML5", "CSS3", "JS", "PHP", "Dart", "Python", "C#"]
  },
  {
    title: "Game Development",
    items: ["Unity", "2D/3D game development", "Gameplay scripting"]
  },
  {
    title: "AI / Machine Learning",
    items: ["TensorFlow Lite", "Vision Transformers (ViT)", "LLM API integration (Qwen AI)"]
  }
];
