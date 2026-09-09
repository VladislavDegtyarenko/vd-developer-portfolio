export type SkillGroup = {
  label: string;
  value: string;
};

export type Project = {
  label: string;
  text: string;
};

export type ExperienceRole = {
  company: string;
  title: string;
  dates: string;
  bullets?: string[];
  projects?: Project[];
  summary?: string;
  technologies?: string;
};

export type CvContent = {
  variant: string;
  pdfFilename: `${string}.pdf`;
  eyebrow: string;
  summary: string;
  skills: SkillGroup[];
  experience: ExperienceRole[];
  footer: {
    skills: string;
    availability: string;
  };
};
