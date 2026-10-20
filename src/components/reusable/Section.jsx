import { Carrousel } from "./Carrousel";

export function Section({ sectionData }) {
  const { id, header, paragraph } = { ...sectionData };
  let sectionContext;

  if (id === 2) {
    sectionContext = <Carrousel />;
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
