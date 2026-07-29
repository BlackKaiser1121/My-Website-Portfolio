import { capabilityGroups } from "./capabilities";

export interface SkillGroup {
  title: string;
  items: readonly string[];
}

export const skillGroups: readonly SkillGroup[] = capabilityGroups.map((group) => ({
  title: group.title,
  items: group.items.map((item) => item.label)
}));
