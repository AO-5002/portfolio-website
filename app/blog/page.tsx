"use client";
import { BookOpen } from "lucide-react";
import { blog_data, IBlog } from "./data";
import Image from "next/image";

import Link from "next/link";

function EmptyBox() {
  return (
    <div className="w-full aspect-video bg-foreground/10 rounded-lg flex justify-center items-center">
      <p className="base">No Image</p>
    </div>
  );
}

function BlogBox({ blog }: { blog: IBlog }) {
  return (
    <Link href={`/blog/${blog.id}`} className="group flex flex-col gap-4 w-full cursor-pointer">
      <div className="w-full aspect-[21/9] relative rounded-xl overflow-hidden bg-foreground/5">
        {blog.thumbnail_url ? (
          <Image
            src={blog.thumbnail_url}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <EmptyBox />
        )}
      </div>
      <div className="flex flex-col gap-2.5 px-1">
        <div className="flex flex-row items-center gap-3">
          {blog.tags.map((tag) => (
            <span key={tag} className="text-small text-foreground/50">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
            {blog.title}
          </h2>
          <div className="flex flex-row items-center gap-2 text-sm text-foreground/60 font-medium">
            {blog.author && (
              <p>{blog.author.name}</p>
            )}
            {blog.author && blog.date && <span>·</span>}
            {blog.date && (
              <p>{blog.date}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center min-h-screen dark:bg-background">
      <main className="w-max-w-full my-5.5 mx-[49.5px] gap-3.25 flex flex-col items-center">
        <div className="w-150 h-full flex flex-col items-start justify-start gap-11.75">
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex justify-between items-center pb-2 border-b border-foreground/10">
              <p className="text-2xl font-bold tracking-tight text-foreground">Posts</p>
              <BookOpen size={20} className="text-foreground/80" />
            </div>

            <div className="flex flex-col gap-10 w-full mt-4">
              {blog_data.map((blog) => (
                <div key={blog.id} className="w-full">
                  <BlogBox blog={blog} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
