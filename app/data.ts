const nav_data = ["Bio", "Projects", "Socials"];

interface IBio {
  description: string;
  image_url: string;
}

const bio_data: IBio = {
  description: `Hello, my name is Andres Ortiz Osorio, and I'm from Austin, TX.
\nI am currently a Junior at The University of Texas at Dallas studying 
Computer Science. In my spare time, I enjoy learning and building 
stuff.`,
  image_url: "/kato.jpg",
};

export { nav_data, bio_data };
