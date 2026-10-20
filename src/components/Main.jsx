import { HeroSection } from "./reusable/HeroSection.jsx";
import { Section } from "./reusable/Section.jsx";
import { sectionData } from "../data.js";

export function Main() {
  return (
    <main className="mt-8.75 md:mt-20 xl:mt-28.5 ">
      {sectionData.map((section) =>
        section.id === 1 ? (
          <HeroSection key={section.id} sectionData={section} />
        ) : (
          <Section key={section.id} sectionData={section} />
        ),
      )}
    </main>
  );
}
