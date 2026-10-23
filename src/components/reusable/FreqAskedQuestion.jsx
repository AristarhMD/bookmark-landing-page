import { useState } from "react";
import { accordionData } from "../../data.jsx";
import { Button } from "./Btns.jsx";

export function FreqAskedQuestion() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleOpenQuestion = (id) => {
    if (id === activeQuestion) {
      setActiveQuestion(0);
      return;
    }
    setActiveQuestion(id);
  };
  return (
    <div className="border-t border-blue-950/15 mt-14 mb-32 md:mb-39.5 xl:mb-44.25 flex flex-col items-center mx-auto w-[84%] max-w-135.5">
      {accordionData.map((faq) => (
        <article key={faq.id} className="accordion-container ">
          <div
            className="accordion-header-container group"
            onClick={() => handleOpenQuestion(faq.id)}
          >
            <p className="accordion-header">{faq.header}</p>
            <button
              className={`group arrow ${activeQuestion === faq.id ? "active-arrow" : ""}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path
                  className="faq-arrow"
                  fill="none"
                  strokeWidth="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </button>
          </div>
          <div
            className={`faq-text-wrapper ${activeQuestion === faq.id ? "show" : ""}`}
          >
            <div className="faq-text-inner">
              <p className={`faq-text`}>{faq.text}</p>
            </div>
          </div>
        </article>
      ))}
      <Button type="primary" addStyle="faq-btn">
        More Info
      </Button>
    </div>
  );
}
