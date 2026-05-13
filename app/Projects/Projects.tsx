"use client";
import { Grid3X3, ChevronLeft, ChevronRight } from "lucide-react";
import { project_data, Project } from "./data";
import SectionWrapper from "../General/SectionWrapper";
import Image from "next/image";
import { useState } from "react";

function ProjectBox({ project }: { project: Project }) {
  const MULTIPLIER = 4;
  return (
    <div className="flex flex-col items-start justify-start gap-3.25 w-full shrink-0">
      <div className="w-full flex flex-row items-center justify-start gap-3 text-foreground">
        {project.tools.map((tool) => (
          <p className="text-small" key={tool}>
            {tool}
          </p>
        ))}
      </div>
      {project.thumbnail_url ? (
        <Image
          src={project.thumbnail_url}
          alt={project.project_name}
          width={150 * MULTIPLIER}
          height={87.5 * MULTIPLIER}
          className="rounded-lg w-full h-auto"
        />
      ) : (
        <div className="w-full h-87.5 bg-foreground/80 rounded-lg" />
      )}
    </div>
  );
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeft = () =>
    setCurrentIndex((i) => (i - 1 + project_data.length) % project_data.length);

  const moveRight = () => setCurrentIndex((i) => (i + 1) % project_data.length);

  return (
    <SectionWrapper>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex justify-between items-center">
          <p className="label font-semibold">Projects</p>
          <Grid3X3 size={17} />
        </div>

        <div className="relative flex items-center">
          <button
            onClick={moveLeft}
            className="absolute left-0 -translate-x-full z-10 p-1 text-foreground/50 hover:text-foreground transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-400 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {project_data.map((project) => (
                <div key={project.id} className="w-full shrink-0 px-1">
                  <ProjectBox project={project} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={moveRight}
            className="absolute right-0 translate-x-full z-10 p-1 text-foreground/50 hover:text-foreground transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5">
          {project_data.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                i === currentIndex ? "bg-foreground" : "bg-foreground/25"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
