import { useState } from "react";
import { Button } from "./Btns";

export function CallToAction() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (regex.test(answer) === true) {
      setError(null);
      setAnswer("");
      return;
    } else {
      if (answer.length === 0) {
        setError("Whoops, this field should be filed");
      } else {
        setError("Whoops, make sure it’s an email");
      }
      return;
    }
  };

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <form
      className="mx-auto w-[84%] max-w-110.5 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4"
      onSubmit={handleSubmit}
      noValidate={true}
    >
      <div className="bg-red-400 rounded-[5px]">
        <div className="relative">
          <input
            className={`cta-input ${error ? "error-input" : ""}`}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            onChange={(e) => handleInputChange(e)}
            value={answer}
          />
          <span className={`error-input-icon ${error ? "show" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <g fill="none" fillRule="evenodd">
                <circle cx="10" cy="10" r="10" fill="#FA5959" />
                <g fill="#FFF" transform="translate(9 5)">
                  <rect width="2" height="7" rx="1" />
                  <rect width="2" height="2" y="8" rx="1" />
                </g>
              </g>
            </svg>
          </span>
        </div>
        <p className={`${error ? "error-text" : ""}`}>{error}</p>
      </div>
      <Button type="primary" addStyle="contact-btn">
        Contact Us
      </Button>
    </form>
  );
}
