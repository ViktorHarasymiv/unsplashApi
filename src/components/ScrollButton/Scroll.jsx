import React, { useEffect } from "react";

import css from "./Scroll.module.css";

import { GoArrowUp } from "react-icons/go";

function Scroll() {
  // Scroll setup
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    return null;
  };

  return (
    <div onClick={scroll} className={css.scroll_tile}>
      <GoArrowUp style={{ fontSize: "18px" }} />
    </div>
  );
}

export default Scroll;
