import { Carrousel } from "./Carrousel";
import { Download } from "./Download";

export function Section({ sectionData }) {
  const { id, header, paragraph } = { ...sectionData };
  let sectionContext;

  if (id === 2) {
    sectionContext = <Carrousel />;
  } else if (id === 3) {
    sectionContext = <Download />;
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
