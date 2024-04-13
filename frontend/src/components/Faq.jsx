import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
} from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";
import Number from "./Number";
import "../css/faq.css";

// eslint-disable-next-line react/prop-types
export default function Faq({ question, children, num, open }) {
  const [isOpen, setIsOpen] = useState(open);
  function showAnswer() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="faqq">
      <div className="quess">
        <div className="numm"><Number number={num} /></div>
        <div className="ques">{question}</div>
        <div className="arrow" onClick={showAnswer}>
          {!isOpen ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </div>
      </div>
      {isOpen && <div className="ans">{children}</div>}
    </div>
  );
}
