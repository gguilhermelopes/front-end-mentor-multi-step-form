import React from "react";
import styles from "./Button.module.css";

const Button = ({ buttonInfo }) => {
  return <button className={styles.button}>{buttonInfo}</button>;
};

export default Button;
