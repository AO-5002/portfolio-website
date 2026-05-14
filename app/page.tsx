import Bio from "./Bio/bio";
import Projects from "./projects/Projects";
import Socials from "./Socials/Socials";
import { ReactNode } from "react";

function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-full flex flex-col items-start justify-start gap-5.5">
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen dark:bg-background">
      <main className="w-max-w-full my-5.5 mx-[49.5px] gap-3.25">
        <div className="w-150 h-full flex flex-col items-start justify-start gap-11.75">
          <SectionWrapper>
            <Bio />
          </SectionWrapper>
          <SectionWrapper>
            <Projects />
          </SectionWrapper>
          <SectionWrapper>
            <Socials />
          </SectionWrapper>
        </div>
      </main>
    </div>
  );
}
