"use client";
import { project_data, TCorrespondingInfo } from "../data";
import { use, useEffect, useState } from "react";
import Image from "next/image";

function SidePanel({ id }: { id: string }) {
  const project = project_data.find((p) => p.id === id);
  const outlines = project?.details?.outlines;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!outlines) return;
    const observers: IntersectionObserver[] = [];

    outlines.forEach((_, i) => {
      const el = document.getElementById(`section-${i}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { rootMargin: "-40% 0px -40% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [outlines]);

  return (
    <div className="fixed right-4.25 top-14.25 w-25.25">
      <div className="flex flex-col items-end justify-center gap-2.25">
        {outlines?.map((outline, i) => (
          <p
            key={i}
            className={`caption truncate w-full text-right transition-colors duration-200 ${
              i === activeIndex ? "text-foreground" : "text-foreground/30"
            }`}
          >
            {outline}
          </p>
        ))}
      </div>
    </div>
  );
}

function ProjectOutlineContent({
  headline,
  content,
  images,
  timestamp,
}: TCorrespondingInfo) {
  return (
    <div className="w-full flex flex-col items-center gap-7.25">
      <div className="w-full flex flex-col items-start gap-3.25">
        {images?.map((_, i) => (
          <div key={i} />
        ))}
        <p className="caption text-foreground/40">{timestamp}</p>
      </div>
      <div className="w-full flex flex-col gap-3">
        <h1 className="font-bold">{headline}</h1>
        {content.split("\n\n").map((paragraph, i) => (
          <p key={i} className="base">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = project_data.find((p) => p.id === id);

  return (
    <div className="w-full px-49.5 relative">
      <SidePanel id={id} />
      <div className="flex-1 flex flex-col items-start justify-center gap-3.25">
        {project?.thumbnail_url && (
          <div className="relative w-full h-112.5">
            <Image
              src={project.thumbnail_url}
              className="object-cover rounded-lg"
              alt={project.project_name ?? ""}
              fill
            />
          </div>
        )}
        {project?.contributers && (
          <div className="w-full flex flex-row gap-3.25 items-center">
            <p className="caption text-foreground/80">
              {project.contributers.map((c) => c.name).join(" · ")}
            </p>
          </div>
        )}

        {project?.details?.info.map((item, i) => (
          <div id={`section-${i}`} key={i} className="w-full">
            <ProjectOutlineContent {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
