interface Project_Details {
  outlines: string[];
  corresponding_info: string[];
  corresponding_images: string[];
}

interface Project {
  id: string;
  project_name: string;
  tools: string[];
  github_url?: string;
  thumbnail_url?: string;
  details?: Project_Details;
}

const data: Project[] = [
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
    project_name: "Project 2",
    tools: ["Tool A", "Tool B", "Tool C"],
  },
];

export { data as project_data, type Project };
