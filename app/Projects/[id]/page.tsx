"use client";
import { project_data, TCorrespondingInfo, TContributerDetails } from "../data";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Mail, User } from "lucide-react";

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
            className={`caption truncate w-full text-right transition-colors duration-200 ${i === activeIndex ? "text-foreground" : "text-foreground/30"
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
  sectionIndex,
  setSelectedImage,
}: TCorrespondingInfo & {
  sectionIndex: number;
  setSelectedImage: (data: { url: string; layoutId: string } | null) => void;
}) {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="w-full flex flex-col gap-5">
        {(headline || timestamp) && (
          <div className="w-full flex flex-row items-baseline justify-between gap-4">
            {headline && <h2 className="text-2xl font-semibold tracking-tight text-foreground">{headline}</h2>}
            {timestamp && <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 shrink-0">{timestamp}</p>}
          </div>
        )}

        {images && images.length > 0 && (
          <div className="w-full my-4">
            {images.length === 1 && (
              <motion.div
                layoutId={`sec-${sectionIndex}-img-0`}
                onClick={() =>
                  setSelectedImage({
                    url: images[0],
                    layoutId: `sec-${sectionIndex}-img-0`,
                  })
                }
                className="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer shadow-sm"
              >
                <Image
                  src={images[0]}
                  alt="Project Image"
                  fill
                  sizes="(max-width: 1200px) 100vw, 50vw"
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </motion.div>
            )}
            {images.length === 2 && (
              <div className="grid grid-cols-2 gap-4 w-full aspect-[21/9]">
                <motion.div
                  layoutId={`sec-${sectionIndex}-img-0`}
                  onClick={() =>
                    setSelectedImage({
                      url: images[0],
                      layoutId: `sec-${sectionIndex}-img-0`,
                    })
                  }
                  className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer shadow-sm"
                >
                  <Image
                    src={images[0]}
                    alt="Project Image 1"
                    fill
                    sizes="(max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </motion.div>
                <motion.div
                  layoutId={`sec-${sectionIndex}-img-1`}
                  onClick={() =>
                    setSelectedImage({
                      url: images[1],
                      layoutId: `sec-${sectionIndex}-img-1`,
                    })
                  }
                  className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer shadow-sm"
                >
                  <Image
                    src={images[1]}
                    alt="Project Image 2"
                    fill
                    sizes="(max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </motion.div>
              </div>
            )}
            {images.length >= 3 && (
              <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-[500px]">
                <motion.div
                  layoutId={`sec-${sectionIndex}-img-0`}
                  onClick={() =>
                    setSelectedImage({
                      url: images[0],
                      layoutId: `sec-${sectionIndex}-img-0`,
                    })
                  }
                  className="relative w-full h-full row-span-2 rounded-xl overflow-hidden cursor-pointer shadow-sm"
                >
                  <Image
                    src={images[0]}
                    alt="Project Image 1"
                    fill
                    sizes="(max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </motion.div>
                <motion.div
                  layoutId={`sec-${sectionIndex}-img-1`}
                  onClick={() =>
                    setSelectedImage({
                      url: images[1],
                      layoutId: `sec-${sectionIndex}-img-1`,
                    })
                  }
                  className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer shadow-sm"
                >
                  <Image
                    src={images[1]}
                    alt="Project Image 2"
                    fill
                    sizes="(max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </motion.div>
                <motion.div
                  layoutId={`sec-${sectionIndex}-img-2`}
                  onClick={() =>
                    setSelectedImage({
                      url: images[2],
                      layoutId: `sec-${sectionIndex}-img-2`,
                    })
                  }
                  className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer shadow-sm"
                >
                  <Image
                    src={images[2]}
                    alt="Project Image 3"
                    fill
                    sizes="(max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </motion.div>
              </div>
            )}
          </div>
        )}

        {content.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-[17px] text-foreground/80 leading-relaxed font-normal">
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
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    layoutId: string;
  } | null>(null);
  const [selectedContributor, setSelectedContributor] = useState<TContributerDetails | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setSelectedContributor(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="w-full px-49.5 relative pb-32 pt-10">
        <SidePanel id={id} />
        <div className="flex-1 flex flex-col items-start justify-center">

          {/* Hero Section */}
          <div className="w-full flex flex-col gap-8 mb-24">
            <div className="w-full flex flex-col gap-3">
              {project?.project_name && (
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  {project.project_name}
                </h1>
              )}

              {project?.contributers && (
                <div className="w-full flex flex-row items-center gap-1.5 flex-wrap">
                  <p className="caption text-foreground/80 flex items-center gap-1.5">
                    {project.contributers.map((c, i) => (
                      <span key={i} className="flex items-center gap-1.5">
                        <button
                          onClick={() => setSelectedContributor(c)}
                          className="hover:text-foreground transition-colors outline-none cursor-pointer border-b border-transparent hover:border-foreground/30 pb-0.5"
                        >
                          {c.name}
                        </button>
                        {i < project.contributers!.length - 1 && <span>·</span>}
                      </span>
                    ))}
                  </p>
                </div>
              )}
            </div>

            {project?.thumbnail_url && (
              <motion.div
                layoutId="hero-thumbnail"
                onClick={() =>
                  setSelectedImage({
                    url: project.thumbnail_url!,
                    layoutId: "hero-thumbnail",
                  })
                }
                className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden cursor-pointer shadow-md"
              >
                <Image
                  src={project.thumbnail_url}
                  className="object-cover transition-transform hover:scale-105 duration-700"
                  alt={project.project_name ?? "Hero Thumbnail"}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 75vw"
                />
              </motion.div>
            )}
          </div>

          {/* Body Sections */}
          <div className="w-full flex flex-col gap-20">
            {project?.details?.info.map((item, i) => (
              <div id={`section-${i}`} key={i} className="w-full">
                <ProjectOutlineContent
                  {...item}
                  sectionIndex={i}
                  setSelectedImage={setSelectedImage}
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 sm:p-10 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={selectedImage.layoutId}
              className="relative w-full max-w-7xl max-h-[90vh] aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.url}
                alt="Closeup Modal Image"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedContributor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/50 backdrop-blur-sm p-4 cursor-pointer"
            onClick={() => setSelectedContributor(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-sm bg-background border border-foreground/10 rounded-2xl p-6 shadow-2xl cursor-default flex flex-col gap-3.25"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-5.25">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-2">
                  <User className="w-6 h-6 text-foreground/60" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">{selectedContributor.name}</h3>
                {selectedContributor.contribution_description && (
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {selectedContributor.contribution_description}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2.5">
                {selectedContributor.github_url && (
                  <a href={selectedContributor.github_url} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3.5 rounded-xl border border-foreground/10 hover:bg-foreground/5 transition-colors text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    GitHub
                  </a>
                )}
                {selectedContributor.linkedin_url && (
                  <a href={selectedContributor.linkedin_url} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3.5 rounded-xl border border-foreground/10 hover:bg-foreground/5 transition-colors text-sm font-medium ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    LinkedIn
                  </a>
                )}
                {selectedContributor.email && (
                  <a href={`mailto:${selectedContributor.email}`} className="flex items-center gap-3 p-3.5 rounded-xl border border-foreground/10 hover:bg-foreground/5 transition-colors text-sm font-medium">
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                )}

                {/* Fallback if no links provided */}
                {!selectedContributor.github_url && !selectedContributor.linkedin_url && !selectedContributor.email && (
                  <p className="text-xs text-foreground/40 italic">No contact information provided.</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
