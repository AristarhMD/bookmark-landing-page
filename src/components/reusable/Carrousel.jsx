import { useState } from "react";
import { Button } from "./Btns.jsx";
import { carrouselData } from "../../data.js";

import tab1 from "../../assets/images/illustration-features-tab-1.svg";
import tab2 from "../../assets/images/illustration-features-tab-2.svg";
import tab3 from "../../assets/images/illustration-features-tab-3.svg";

export function Carrousel() {
  const [activeSlide, setActiveSlide] = useState(6);

  const handeleChangeSlide = (id) => {
    setActiveSlide(id);
  };

  return (
    <div>
      <ul className="carrouselList">
        {carrouselData.map((carrousel) => (
          <li key={`${carrousel.id}list`}>
            <button
              onClick={() => handeleChangeSlide(carrousel.id)}
              className={
                activeSlide === carrousel.id
                  ? "actCarrSlide"
                  : "notActCarrSlide"
              }
            >
              {carrousel.name}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <article className="flex flex-col xl:flex-row gap-12 md:gap-18 xl:gap-0 items-center mb-32 xl:mb-20 overflow-hidden ">
          <div className="relative after:hero-bg h-70.5 md:h-119.5 xl:basis-[57.65%]  flex items-center justify-center md:items-start xl:justify-center ">
            <img
              src={tab1}
              alt={`Image for ${carrouselData[0].name} tab`}
              className="w-[82.93%] md:w-134"
            />
          </div>
          <div className="flex flex-col items-center xl:items-start gap-6 w-[84%] max-w-136 ">
            <h1 className="hero-header">{carrouselData[0].header}</h1>
            <p className="section-paragraph xl:text-left">
              {carrouselData[0].text}
            </p>
            <Button type="primary" addStyle="carrBtn">
              More Info
            </Button>
          </div>
        </article>
        <article></article>
        <article></article>
      </div>
    </div>
  );
}
