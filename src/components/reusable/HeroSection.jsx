import heroImg from "../../assets/images/illustration-hero.svg";

import { Button } from "./Btns.jsx";

export function HeroSection({ sectionData }) {
  const { header, paragraph } = { ...sectionData };
  return (
    <section className="flex flex-col xl:flex-row-reverse xl:ml-[11.45%] gap-12 md:gap-18 xl:gap-0 items-center mb-32 xl:mb-20 overflow-hidden">
      <div className="relative after:hero-bg h-75 md:h-121.5 xl:basis-[57.65%]  flex items-center md:items-start xl:justify-center ">
        <img src={heroImg} alt="HeroImg" />
      </div>
      <div className="flex flex-col items-center xl:items-start gap-6 w-[84%] max-w-136 ">
        <h1 className="hero-header">{header}</h1>
        <p className="section-paragraph xl:text-left">{paragraph}</p>
        <div className="flex gap-4 w-full max-w-85.75">
          <Button type="primary">Get it on Chrome</Button>
          <Button>Get it on Firefox</Button>
        </div>
      </div>
    </section>
  );
}
