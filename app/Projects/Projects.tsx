"use client";

import { Grid3X3 } from "lucide-react";
import { project_data, Project } from "./data";
import SectionWrapper from "../General/SectionWrapper";
import Image from "next/image";
import { useState } from "react";

function ProjectBox({ project }: { project: Project }) {
  return (
    <div className="flex flex-col items-start justify-start gap-3.25">
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
          width={150 * 4}
          height={87.5 * 4}
          className="rounded-lg"
        />
      ) : (
        <div className="w-150 h-87.5 bg-foreground/80 rounded-lg"></div>
      )}
    </div>
  );
}

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <SectionWrapper>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex justify-between items-center">
          <p className="label font-semibold">Projects</p>
          <Grid3X3 size={17} />
        </div>
        <div className="flex flex-row gap-4 relative">
          <ProjectBox
            key={project_data[currentIndex].id}
            project={project_data[currentIndex]}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
