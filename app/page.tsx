import Bio from "./Bio/bio";
import Projects from "./Projects/Projects";
import Socials from "./Socials/Socials";

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
          <Socials />
        </div>
      </main>
    </div>
  );
}
