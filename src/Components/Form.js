import React from "react";
import { GlobalContext } from "../Hooks/GlobalContext";
import styles from "./Forms.module.css";
import PersonalInfo from "./FormSteps/PersonalInfo";
import PlanSelection from "./FormSteps/PlanSelection";
import AddOns from "./FormSteps/AddOns";
import Summary from "./FormSteps/Summary";

const Form = () => {
  const { step } = React.useContext(GlobalContext);

  switch (step) {
    case 1:
      return (
        <section className={`${styles.formWrapper} animaLeft`}>
          <PersonalInfo />
        </section>
      );

    case 2:
      return (
        <section className={`${styles.formWrapper} animaLeft`}>
          <PlanSelection />
        </section>
      );

    case 3:
      return (
        <section className={`${styles.formWrapper} animaLeft`}>
          <AddOns />
        </section>
      );

    case 4:
      return (
        <section className={`${styles.formWrapper} animaLeft`}>
          <Summary />
        </section>
      );

    default:
      break;
  }
};

export default Form;
