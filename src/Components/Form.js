import React from "react";
import { GlobalContext } from "../Hooks/GlobalContext";
import styles from "./Forms.module.css";
import PersonalInfo from "./FormSteps/PersonalInfo";
import PlanSelection from "./FormSteps/PlanSelection";
import AddOns from "./FormSteps/AddOns";
import Summary from "./FormSteps/Summary";
import ThankYouPage from "./FormSteps/ThankYouPage";

const Form = () => {
  const { step } = React.useContext(GlobalContext);

  switch (step) {
    case 1:
      return (
        <section className={`${styles.formWrapper} `}>
          <PersonalInfo />
        </section>
      );

    case 2:
      return (
        <section className={`${styles.formWrapper} `}>
          <PlanSelection />
        </section>
      );

    case 3:
      return (
        <section className={`${styles.formWrapper} `}>
          <AddOns />
        </section>
      );

    case 4:
      return (
        <section className={`${styles.formWrapper} `}>
          <Summary />
        </section>
      );

    case 5:
      return (
        <section className={`${styles.formWrapper} `}>
          <ThankYouPage />
        </section>
      );

    default:
      break;
  }
};

export default Form;
