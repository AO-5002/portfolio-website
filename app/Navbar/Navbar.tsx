// app/components/Navbar.tsx
"use client";
import { usePathname, useRouter } from "next/navigation";
import { nav_data } from "../data";
import { project_data } from "../projects/data";
import { blog_data } from "../blog/data";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);
  const isProjectPage = segments[0] === "projects" && segments[1];
  const projectId = segments[1];
  const projectName = project_data.find(
    (p) => p.id === projectId,
  )?.project_name;

  const isBlogPage = segments[0] === "blog" && segments[1];
  const blogId = segments[1];
  const blogTitle = blog_data.find(
    (b) => b.id === blogId,
  )?.title;

  return (
    <nav className="w-full sticky top-0 h-11.5 flex items-center justify-between backdrop-blur-lg bg-background/70 z-50">
      {(isProjectPage || isBlogPage) && (
        <div className="w-full flex flex-row items-center gap-2 mx-49.5">
          <button
            onClick={() => router.push(isBlogPage ? "/blog" : "/")}
            className="base text-foreground/50 hover:text-foreground transition-colors"
          >
            ...
          </button>
          <p className="base">/</p>
          <p className="base truncate max-w-sm"> {isBlogPage ? blogTitle : projectName}</p>
        </div>
      )}
      <div className="w-full flex flex-row items-center justify-end gap-5.5 mx-49.5">
        {nav_data.map((item, i) => {
          const isActive = item === "Blog" ? pathname.startsWith("/blog") : pathname === "/";
          return (
            <Link 
              key={i} 
              href={item === "Blog" ? "/blog" : `/#${item.toLowerCase()}`} 
              className={`base relative pb-1 transition-colors ${isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground/80"}`}
            >
              {item}
              {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-foreground rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
