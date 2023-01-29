import React from "react";

import { GlobalContext } from "../Hooks/GlobalContext";
import styles from "./SidebarItem.module.css";

const SidebarItem = ({ index, stepInfo }) => {
  const { step } = React.useContext(GlobalContext);

  function active(step, index) {
    if (step === index) return true;
  }
  const isActive = active(step, index);

  return (
    <div className={styles.itemWrapper}>
      <span
        className={
          !isActive ? styles.index : `${styles.index} ${styles.active}`
        }
      >
        {index}
      </span>
      <div className={styles.stepWrapper}>
        <span>Step {index}</span>
        <span>{stepInfo}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
