import Image from "next/image";
import { Grid3X3 } from "lucide-react";
import { ReactNode } from "react";

function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-full flex flex-col items-start justify-start gap-3.25">
      {children}
    </section>
  );
}

function Bio() {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-start justify-center gap-3.25">
        {/* Bio Image */}
        <div className="w-150 h-87.5 bg-foreground rounded-lg"></div>
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

function Projects() {
  return (
    <SectionWrapper>
      <div className="w-full flex justify-between items-center">
        <p className="label font-semibold">Projects</p>
        <Grid3X3 size={17} />
      </div>
      <div className="w-150 h-87.5 bg-foreground rounded-lg"></div>
      <div className="w-full flex flex-row items-center justify-start gap-3 text-foreground">
        <p className="text-caption">Python</p>
        <p className="text-caption">TS</p>
      </div>
    </SectionWrapper>
  );
}

function Navbar() {
  return (
    <nav className="w-full sticky top-0 h-11 flex items-center justify-between">
      <div className="w-full flex flex-row items-center justify-end gap-5.5 mx-49.5">
        <p className="base underline">Bio</p>
        <p className="base">Projects</p>
        <p className="base">Socials</p>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen dark:bg-background">
      <Navbar />
      <main className="w-max-w-full my-5.5 mx-[49.5px] gap-3.25">
        <div className="w-150 h-full flex flex-col items-start justify-start gap-11.75">
          <Bio />
          <Projects />
          <Projects />
        </div>
      </main>
    </div>
  );
}
