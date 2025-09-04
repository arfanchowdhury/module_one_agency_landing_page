import { useState } from "react";
export function FAQItem({ id, initIsActive, question, answer }) {
  // console.log({ id, initIsActive, question, answer });
  const [isActive, setIsActive] = useState(initIsActive);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <h3 id={`accordion-flush-heading-${id}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          data-accordion-target={`#accordion-flush-body-${id}`}
          aria-expanded={isActive}
          aria-controls={`accordion-flush-body-${id}`}
          onClick={toggleAccordion}
        >
          <span>{question}</span>
          <svg
            data-accordion-icon=""
            className={`w-6 h-6 shrink-0 ${
              isActive ? "rotate-0" : "rotate-180"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h3>
      <div
        id={`accordion-flush-body-${id}`}
        className={isActive ? "" : "hidden"}
        aria-labelledby={`#accordion-flush-heading-${id}`}
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          {answer}
        </div>
      </div>
    </>
  );
}
