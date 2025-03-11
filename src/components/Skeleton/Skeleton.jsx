import React from "react";

import css from "./Style.module.css";

const Skeleton = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <li className={css.skeleton_box}></li>
      ))}
    </>
  );
};

export default Skeleton;
