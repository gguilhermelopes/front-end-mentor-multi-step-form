import React from "react";
import FormHeader from "./FormHeader";
import styles from "./PersonalInfo.module.css";
import Input from "../../Helpers/Input";
import Button from "../../Helpers/Button";
import useForm from "../../Hooks/useForm";
import { GlobalContext } from "../../Hooks/GlobalContext";

const PersonalInfo = () => {
  const name = useForm("");
  const email = useForm("email");
  const phone = useForm("phone");
  const { step, setStep, info, setInfo } = React.useContext(GlobalContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (name.validate() && email.validate() && phone.validate()) {
      setStep(step + 1);
      setInfo({
        ...info,
        name: name.value,
        email: email.value,
        phone: phone.value,
      });
    }
  }

  return (
    <>
      <FormHeader
        title="Personal Info"
        info="Please provide your name, email address, and phone number."
      />
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          id="name"
          label="Name"
          placeholder="e.g. Martin Scorsese"
          {...name}
        />
        <Input
          type="email"
          id="email"
          label="Email Address"
          placeholder="e.g. scorsesemarty@lorem.com"
          {...email}
        />
        <Input
          type="number"
          id="phone"
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          {...phone}
        />
        <div className={styles.flexParent}>
          <Button id="next" buttonInfo="Next Step" />
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
