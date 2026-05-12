import { ReactNode } from "react";

export default function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-full flex flex-col items-start justify-start gap-5.5">
      {children}
    </section>
  );
}
