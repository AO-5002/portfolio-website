// app/components/Navbar.tsx
"use client";
import { usePathname, useRouter } from "next/navigation";
import { nav_data } from "../data";
import { project_data } from "../projects/data";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);
  const isProjectPage = segments[0] === "projects" && segments[1];
  const projectId = segments[1];
  const projectName = project_data.find(
    (p) => p.id === projectId,
  )?.project_name;

  return (
    <nav className="w-full sticky top-0 h-11.5 flex items-center justify-between backdrop-blur-lg bg-background/70 z-50">
      {isProjectPage && (
        <div className="w-full flex flex-row items-center gap-2 mx-49.5">
          <button
            onClick={() => router.push("/")}
            className="base text-foreground/50"
          >
            ...
          </button>
          <p className="base">/</p>
          <p className="base"> {projectName}</p>
        </div>
      )}
      <div className="w-full flex flex-row items-center justify-end gap-5.5 mx-49.5">
        {nav_data.map((item, i) => (
          <p key={i} className="base">
            {item}
          </p>
        ))}
      </div>
    </nav>
  );
}
