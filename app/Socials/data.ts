interface Social {
  label: string;
  link?: string;
}

const social_data: Social[] = [
  { label: "Email", link: "mailto:ao2005ortiz@gmail.com" },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/andres-ortiz-758117247/",
  },
  { label: "GitHub", link: "https://github.com/AO-5002" },
];

export { social_data, type Social };
