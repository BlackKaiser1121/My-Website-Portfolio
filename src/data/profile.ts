export interface ProfileLink {
  label: string;
  href: string;
  kind: "email" | "phone";
  isPublic: boolean;
  isVerified: boolean;
}

export interface Profile {
  name: string;
  currentHeadline: string;
  currentPositioning: string;
  about: string;
  email: string;
  phone: string;
  opportunityStatement: string;
  missingContent: readonly string[];
  links: readonly ProfileLink[];
}

export const profile: Profile = {
  name: "Jared Baquirin",
  currentHeadline: "Aspiring Game Developer & AI Enthusiast",
  currentPositioning:
    "Computer Science undergrad specialized in Web Development and Software Development.",
  about:
    "I'm a third-year Computer Science student passionate about software development, game development, and artificial intelligence. I enjoy building practical applications that solve real-world problems and continuously expanding my technical skills through hands-on projects.",
  email: "jaredfahad@gmail.com",
  phone: "+63 9055460641",
  opportunityStatement:
    "I'm currently looking for opportunities for software/game/web development internships.",
  missingContent: ["resume-file", "social-links", "project-screenshots"],
  links: [
    {
      label: "Send Email",
      href: "mailto:jaredfahad@gmail.com",
      kind: "email",
      isPublic: true,
      isVerified: true
    },
    {
      label: "Call",
      href: "tel:+639055460641",
      kind: "phone",
      isPublic: true,
      isVerified: true
    }
  ]
};
