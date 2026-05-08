import Image from "next/image";
import { Grid3X3 } from "lucide-react";

function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-zinc-800 text-white">
      <h1 className="text-lg font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Projects() {
  return (
    <section className="w-full h-full">
      <div className="w-full flex justify-between">
        <p className="">Projects</p>
        <Grid3X3 size={17} />
      </div>

      <p className="text-caption">Here are some of my projects...</p>
    </section>
  );
}

function Socials() {
  return (
    <section id="socials" className="py-12">
      <h2 className="text-2xl font-bold mb-4">Socials</h2>
      <p>Here are my social media links...</p>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start bg-zinc-50 font-inter dark:bg-background">
      <main className="w-max-w-full my-5.5 mx-[49.5px] gap-3.25">
        <div className="w-150 h-full flex flex-col items-start justify-start gap-[11.75px] border border-green-500">
          <Projects />
          <Socials />
        </div>
      </main>
    </div>
  );
}
