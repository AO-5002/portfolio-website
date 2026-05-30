type TCorrespondingInfo = {
  headline?: string;
  content: string;
  images?: string[];
  timestamp?: string;
};

type TContributerDetails = {
  name: string;
  contribution_description?: string;
  github_url?: string;
  linkedin_url?: string;
  email?: string;
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
  contributers?: TContributerDetails[];
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
    project_name: "Noir - Codebase Visualizer",
    tools: ["Next.js", "FastAPI", "TS/JS", "Python"],
    contributers: [
      {
        name: "Sreehari",
        linkedin_url: "https://www.linkedin.com/in/sreehari-mr/",
      },
      {
        name: "Marc",
        linkedin_url: "https://www.linkedin.com/in/sreehari-mr/",
        github_url: "https://www.github.com/sreehari-mr/",
        email: "[EMAIL_ADDRESS]",
      },
    ],
    thumbnail_url: "/kato.jpg",

    details: {
      outlines: ["About", "Comparison Analysis", "Prototype"],
      info: [
        {
          headline: "About",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.\n\nCurabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, est arcu blandit enim, at egestas mauris enim nec mi. Proin congue leo at mi fringilla, nec sodales risus facilisis.",
          timestamp: "01-22-2005",

        },
        {
          headline: "Comparison Analysis",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.\n\nCurabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, est arcu blandit enim, at egestas mauris enim nec mi. Proin congue leo at mi fringilla, nec sodales risus facilisis.",
          images: ["/kato.jpg", "/kato.jpg"],
        },
        {
          headline: "Prototype",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.\n\nCurabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, est arcu blandit enim, at egestas mauris enim nec mi. Proin congue leo at mi fringilla, nec sodales risus facilisis.",
          images: ["/kato.jpg", "/kato.jpg", "/kato.jpg"],
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.\n\nCurabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, est arcu blandit enim, at egestas mauris enim nec mi. Proin congue leo at mi fringilla, nec sodales risus facilisis.",
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
  type TContributerDetails,
};
