import React, { useState, useRef, useEffect } from "react";

import Chevron from "./dropdownToggle";
import "./accordion.css";
import {
  AccordionSection,
  AccordionText,
  AccordionTitle,
  AccordionUI,
} from "./Accordion.style";

function Accordion(props) {
  const { chevronText = "View Pages" } = props;

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [textHelp, setTextHelp] = useState(chevronText);

  const content = useRef(null);

  useEffect(() => {
    if (setActive == "active") {
      setTextHelp("Close");
    } else {
      setTextHelp(chevronText);
    }
  }, [setActive]);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <AccordionSection>
      <AccordionUI
        tag={"button"}
        className={`accordion ${setActive}`}
        onClick={toggleAccordion}
      >
        <AccordionTitle>{props.title}</AccordionTitle>
        <Chevron
          className={`${setRotate}`}
          width={10}
          fill={"#777"}
          textHelp={textHelp}
        />
      </AccordionUI>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <AccordionText>{props.content}</AccordionText>
      </div>
    </AccordionSection>
  );
}

export default Accordion;
