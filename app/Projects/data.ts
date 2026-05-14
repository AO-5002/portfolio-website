type TCorrespondingInfo = {
  content: string;
  images?: string[];
  timestamp?: string;
};

interface IProjectDetails {
  outlines: string[];
  info: TCorrespondingInfo[];
}

interface IProject {
  id: string;
  project_name: string;
  tools: string[];
  github_url?: string;
  thumbnail_url?: string;
  details?: IProjectDetails;
}

const data: IProject[] = [
  {
    id: "1",
    project_name: "Tunetrend",
    tools: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "TS/JS",
      "Python",
      // "Numpy",
      // "Pandas",
      // "Scikit-learn",
      // "XGBoost",
      // "Flask",
      // "Three.js Fiber",
    ],
  },
  {
    id: "2",
    project_name: "Racket Parser",
    tools: ["Python", "Racket"],
    thumbnail_url: "/kato.jpg",
    details: {
      outlines: [
        "About",
        "Breakdown",
        "Lexical Analyzer",
        "Parser",
        "Parse Trees",
        "Conclusion",
      ],
      info: [
        {
          content:
            "For this project, I wanted to translate what I've done on paper onto code for my CS4337 class. ",
          timestamp: "01-22-2005",
        },
      ],
    },
  },
];

export {
  data as project_data,
  type IProject,
  type IProjectDetails,
  type TCorrespondingInfo,
};
