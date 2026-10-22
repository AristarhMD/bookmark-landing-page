import { useState } from "react";
import { Button } from "./Btns.jsx";
import { carrouselData } from "../../data.jsx";

import tab6 from "../../assets/images/illustration-features-tab-1.svg";
import tab7 from "../../assets/images/illustration-features-tab-2.svg";
import tab8 from "../../assets/images/illustration-features-tab-3.svg";

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
      <div className="flex overflow-hidden mt-8">
        {carrouselData.map((carrousel) => (
          <article
            key={`${carrousel.id}slide`}
            className={`carrousel-article ${carrousel.id === activeSlide ? "" : "carrousel-not-active"}`}
          >
            <div className="carrousel-img">
              <img
                src={
                  carrousel.id === 6 ? tab6 : carrousel.id === 7 ? tab7 : tab8
                }
                alt={`Image for ${carrousel.name} tab`}
                className="w-[82.93%] md:w-134"
              />
            </div>
            <div className="carrousel-text">
              <h1 className="carrousel-header">{carrousel.header}</h1>
              <p className="section-paragraph xl:text-left">{carrousel.text}</p>
              <Button type="primary" addStyle="carrBtn">
                More Info
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
