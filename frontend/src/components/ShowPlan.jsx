import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
} from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";


const ShowPlan = () => {
    const [isOpen, setIsOpen] = useState(open);
    function showAnswer() {
    setIsOpen((prev) => !prev);
    }
  return (
    <div onClick={showAnswer}>
    {!isOpen ? (
      <FontAwesomeIcon icon={faChevronDown} />
    ) : (
      <FontAwesomeIcon icon={faChevronUp} />
    )}
  </div>
  )
}

export default ShowPlan