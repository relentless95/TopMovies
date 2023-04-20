import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    // scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    // scrolls to particular coordinates in the document
    window.scrollTo({
      top: 0,
      behavior: "smooth", // behavior auto can also be used here
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div
      className="scroll-button"
    >
      <FontAwesomeIcon
        icon={faSquareCaretUp}
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
      
    </div>
  );
};

export default ScrollButton;
