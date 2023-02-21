import { Resume } from "@/types";

const RESUME: Resume = {
  experiences: [
    {
      roles: ["Front-end Developer"],
      skills: ["React", "Next.js"],
    },
    {
      roles: ["Back-end Developer"],
      skills: ["Java", "Python"],
    },
  ],
  companies: [
    {
      name: "Name",
      roles: ["Front-end Development"],
    },
  ],
  projects: [
    {
      name: "An Awesome Project",
      company: "Company Name",
      url: "https://www.google.com",
      roles: ["Front-end Development"],
      skills: ["VanillaJS", "VueJS", "Express", "i18n"],
      descriptions: [
        "This is an awesome project.",
        "I'm really feel proud with this project.",
      ],
    },
    {
      name: "A Shameful Project",
    },
  ],
  personals: [
    {
      name: "An Awesome Project",
      company: "Company Name",
      url: "https://www.google.com",
      roles: ["Front-end Development"],
      skills: ["VanillaJS", "VueJS", "Express", "i18n"],
      descriptions: [
        "This is an awesome project.",
        "I'm really feel proud with this project.",
      ],
    },
  ],
};

export default RESUME;
