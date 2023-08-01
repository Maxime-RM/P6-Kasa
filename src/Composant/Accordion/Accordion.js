import React, { useState } from "react";
import "./Accordion.css";
import vectorActiveImage from "../../assets/Vector-up.png";
import vectorInactiveImage from "../../assets/Vector-down.png";

const Accordion = ({ items }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleAccordionItemToggle = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          className={`accordion-item ${activeIndexes.includes(index) ? "active" : ""}`}
          key={index}
        >
          <div
            className="accordion-title"
            onClick={() => handleAccordionItemToggle(index)}
          >
            {item.title}
            {activeIndexes.includes(index) ? (
              <img src={vectorActiveImage} alt="Active" />
            ) : (
              <img src={vectorInactiveImage} alt="Inactive" />
            )}
          </div>

          {activeIndexes.includes(index) && (
            <ul className="accordion-content">
              {item.content.map((content, i) => (
                <li key={i}>{content}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
