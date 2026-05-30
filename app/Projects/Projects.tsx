"use client";
import { Grid3X3, ChevronLeft, ChevronRight } from "lucide-react";
import { project_data, IProject } from "./data";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

function EmptyBox() {
  return (
    <div className="w-full aspect-video bg-foreground/10 rounded-lg flex justify-center items-center">
      <p className="base">No Image</p>
    </div>
  );
}

function ProjectBox({ project }: { project: IProject }) {
  const [isHovering, setHovering] = useState<boolean>(false);
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
      <motion.div
        className="w-full relative"
        onMouseEnter={() => setHovering(() => true)}
        onMouseLeave={() => setHovering(() => false)}
      >
        {project.thumbnail_url ? (
          <>
            <Image
              src={project.thumbnail_url}
              alt={project.project_name}
              width={150 * MULTIPLIER}
              height={87.5 * MULTIPLIER}
              className="rounded-lg w-full aspect-video object-cover"
            />
          </>
        ) : (
          <>
            <EmptyBox />
          </>
        )}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              className="w-full h-full absolute bottom-0 right-0 p-3.25 rounded-lg backdrop-blur-sm bg-background/40 flex flex-col justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              transition={{ duration: 0.2, ease: "easeIn" }}
            >
              <motion.div
                className="flex flex-row justify-between items-center w-full"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2, ease: "easeInOut", delay: 0.05 }}
              >
                <div className="w-full">
                  <p className="base font-bold">{project.project_name}</p>
                </div>
                <div className="w-full flex flex-row justify-end items-center gap-3.25 small">
                  <Link href={`/projects/${project.id}`} className="underline">
                    Details
                  </Link>
                  {project.github_url && (
                    <Link
                      href={project.github_url}
                      target="_blank"
                      className="underline"
                    >
                      Github
                    </Link>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeft = () =>
    setCurrentIndex((i) => (i - 1 + project_data.length) % project_data.length);

  const moveRight = () => setCurrentIndex((i) => (i + 1) % project_data.length);

  return (
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
  );
}
