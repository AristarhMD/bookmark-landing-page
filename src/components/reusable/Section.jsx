import { Carrousel } from "./Carrousel";
import { Download } from "./Download";
import { FreqAskedQuestion } from "./FreqAskedQuestion";
import { CallToAction } from "./CallToAction";

export function Section({ sectionData }) {
  const { id, header, paragraph } = { ...sectionData };
  let sectionContext;

  switch (id) {
    case 2:
      sectionContext = <Carrousel />;
      break;
    case 3:
      sectionContext = <Download />;
      break;
    case 4:
      sectionContext = <FreqAskedQuestion />;
      break;
    case 5:
      sectionContext = <CallToAction />;
  }

  return (
    <section
      className={`${id === 5 ? "flex flex-col gap-8 bg-blue-600 py-9.5 md:py-14" : ""}`}
    >
      <div
        className={`mx-auto w-[84%] max-w-135.5 ${id === 5 ? "cta-inner-text" : ""}`}
      >
        <h2 className={` ${id === 5 ? "cta-header" : "section-header"}`}>
          {header}
        </h2>
        <p className={` ${id === 5 ? "cta-text" : "section-paragraph"}`}>
          {paragraph}
        </p>
      </div>
      {sectionContext}
    </section>
  );
}
