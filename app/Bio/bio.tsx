import Image from "next/image";
import SectionWrapper from "../General/SectionWrapper";

export default function Bio() {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-start justify-center gap-3.25">
        <Image
          src="/kato.jpg"
          className="object-cover rounded-lg"
          alt="Bio Image"
          width={600}
          height={350}
        />
        <p className="w-full base">
          My name is Andres Ortiz Osorio, and I’m from Austin, TX. <br /> <br />{" "}
          I am currently a Junior at The University of Texas at Dallas studying
          Computer Science. In my free time, I enjoy learning and building
          stuff, with a strong interest in UI/UX and ML/AI.
        </p>
      </div>
    </SectionWrapper>
  );
}
