import SectionWrapper from "../General/SectionWrapper";
import { social_data, Social } from "./data";

function Socials() {
  return (
    <SectionWrapper>
      <p className="label font-semibold">Contact</p>
      <div className="flex flex-col gap-2 text-small pb-4">
        {social_data.map((social: Social) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={social.label}
            href={social.link ?? ""}
          >
            {social.label}
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Socials;
