import React from "react";
import FormHeader from "./FormHeader";
import styles from "./AddOns.module.css";
import Checkbox from "../../Helpers/Checkbox";
import { GlobalContext } from "../../Hooks/GlobalContext";
import Button from "../../Helpers/Button";

const AddOns = () => {
  const { addOns, setAddOns, step, setStep } = React.useContext(GlobalContext);
  const options = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      pricePerMonth: "+1$/mo",
      pricePerYear: "+10$/yr",
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      pricePerMonth: "+2$/mo",
      pricePerYear: "+20$/yr",
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      pricePerMonth: "+2$/mo",
      pricePerYear: "+20$/yr",
    },
  ];
  return (
    <>
      <FormHeader
        title="Pick add-ons"
        info="Add-ons help enhance your gaming experience."
      />
      <Checkbox options={options} value={addOns} setValue={setAddOns} />
      <div className={styles.flexParent}>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={() => setStep(step - 1)}
            id="back"
            buttonInfo="Go Back"
          />
          <Button
            onClick={() => {
              setStep(step + 1);
            }}
            id="next"
            buttonInfo="Next Step"
          />
        </div>
      </div>
    </>
  );
};

export default AddOns;
