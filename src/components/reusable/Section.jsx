import { Carrousel } from "./Carrousel";
import { Download } from "./Download";
import { FreqAskedQuestion } from "./FreqAskedQuestion";

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
  }

  return (
    <section>
      <div className="mx-auto w-[84%] max-w-135.5">
        <h2 className="section-header">{header}</h2>
        <p className="section-paragraph">{paragraph}</p>
      </div>
      {sectionContext}
    </section>
  );
}
