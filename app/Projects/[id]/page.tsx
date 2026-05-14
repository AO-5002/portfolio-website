"use client";
import { project_data, TCorrespondingInfo } from "../data";
import { use } from "react";
import Image from "next/image";

function SidePanel({ id }: { id: string }) {
  const project = project_data.find((p) => p.id === id);
  const outlines = project?.details?.outlines;

  return (
    <div className="fixed right-4.25 top-14.25 w-25.25">
      <div className="flex flex-col items-end justify-center gap-2.25">
        {outlines?.map((outline, i) => (
          <p className="caption truncate w-full text-right" key={i}>
            {outline}
          </p>
        ))}
      </div>
    </div>
  );
}

function ProjectOutlineContent({
  content,
  images,
  timestamp,
}: TCorrespondingInfo) {
  return (
    <div className="w-full flex flex-col gap-3.25">
      <div className="w-full flex flex-col gap-3.25">
        {images &&
          images.map(() => {
            return <></>;
          })}
        <p className="caption text-foreground/40">{timestamp}</p>
      </div>

      <p className="base">{content}</p>
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
        {project?.details?.info.map((item, i) => (
          <ProjectOutlineContent key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
