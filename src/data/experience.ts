export interface EducationEntry {
  label: string;
  summary: string;
  isVerified: boolean;
}

export interface AvailabilityEntry {
  label: string;
  summary: string;
  isVerified: boolean;
}

export const education: EducationEntry = {
  label: "Computer Science undergraduate",
  summary:
    "Third-year Computer Science student with current portfolio content focused on web development, software development, game development, and artificial intelligence.",
  isVerified: true
};

export const availability: AvailabilityEntry = {
  label: "Employment & Internship Inquiries",
  summary: "Currently looking for software, game, and web development internship opportunities.",
  isVerified: true
};
