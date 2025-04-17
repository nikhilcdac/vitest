import React, { useState } from "react";
// Import the entire JSON data (as a default export) from the file
import data2 from "./Data2.json"; // This JSON data will be used for the accordion content

const Faq = () => {
 
  const [dataState, setDataState] = useState(data2);


  const toggleAccordion = (sectionId, index) => {
    
    setDataState((prevData) =>
      prevData.map((section) => {
        // If the section ID matches the one that was clicked
        if (section.id === sectionId) {
          return {
           
            ...section,
            content: section.content.map((item, idx) => {
              // If this item is the one that was clicked, toggle its state
              if (idx === index) {
                return { ...item, toggle: !item.toggle }; 
              }
              // If it's not the clicked item, set its toggle state to false (collapse it)
              return { ...item, toggle: false };
            }),
          };
        }
       
        return section;
      })
    );
  };

  return (
    // Container for the entire accordion component
    <div className="container mt-10  mx-auto p-5 bg-white dark:bg-gray-900 rounded-lg">
      
      {dataState.map((item) => (
        <div key={item.id} className="mb-6">
          {/* Section title */}
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            {item.title}
          </h2>

          {/* Accordion content container */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
            {/* Iterate through each question-answer pair in the content of the section */}
            {item.content.map((qa, index) => (
              <div
                key={qa.question} // Use question text as the key (better than using index)
                className="border-b last:border-none border-gray-200 dark:border-gray-700"
              >
                {/* Button to toggle the accordion content */}
                <button
                  className="flex justify-between items-center w-full p-4 text-gray-800 dark:text-gray-200 text-left font-medium bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                  onClick={() => toggleAccordion(item.id, index)} // Trigger toggleAccordion when clicked
                >
                  {/* Display the question text */}
                  {qa.question}
                 
                  <svg
                    className={`w-4 h-4 transition-transform ${qa.toggle ? "rotate-180" : ""}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                   
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>

                {/* Accordion content (answer section) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    qa.toggle ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0"
                  }`}
                >
                  {/* Display the answer text */}
                  {qa.answer.map((text, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-300">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
