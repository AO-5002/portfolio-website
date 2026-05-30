interface IBlog {
  id: string;
  title: string;
  tags: string[];
  date: string;
  thumbnail_url?: string;
  author: {
    name: string;
    twitter_url?: string;
    avatar_url?: string;
  };
  details: {
    outlines: string[];
    info: TCorrespondingInfo[];
  };
}

type TCorrespondingInfo = {
  headline?: string;
  content: string;
  timestamp?: string;
  images?: string[];
};

const data: IBlog[] = [
  {
    id: "1",
    title: "The Future of AI Agents in UI Engineering",
    tags: ["Thoughts", "AI", "Design"],
    date: "May 20, 2026",
    thumbnail_url: "/kato.jpg",
    author: {
      name: "Sreehari",
      twitter_url: "https://twitter.com/",
    },
    details: {
      outlines: ["Introduction", "The Shift", "Conclusion"],
      info: [
        {
          headline: "Introduction",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
          timestamp: "05-20-2026",
          images: ["/kato.jpg"]
        },
        {
          headline: "The Shift",
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
          images: ["/kato.jpg", "/kato.jpg"]
        },
        {
          headline: "Conclusion",
          content: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, est arcu blandit enim, at egestas mauris enim nec mi. Proin congue leo at mi fringilla, nec sodales risus facilisis.",
        }
      ]
    }
  },
  {
    id: "2",
    title: "The Future of AI Agents in UI Engineering",
    tags: ["Thoughts", "AI", "Design"],
    date: "May 20, 2026",
    thumbnail_url: "/kato.jpg",
    author: {
      name: "Sreehari",
      twitter_url: "https://twitter.com/",
    },
    details: {
      outlines: ["Introduction", "The Shift", "Conclusion"],
      info: [
        {
          headline: "Introduction",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
          timestamp: "05-20-2026",
          images: ["/kato.jpg"]
        },
        {
          headline: "The Shift",
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
          images: ["/kato.jpg", "/kato.jpg"]
        },
        {
          headline: "Conclusion",
          content: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, est arcu blandit enim, at egestas mauris enim nec mi. Proin congue leo at mi fringilla, nec sodales risus facilisis.",
        }
      ]
    }
  }
];

export {
  data as blog_data,
  type IBlog,
  type TCorrespondingInfo
};
