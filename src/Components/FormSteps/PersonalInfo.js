import React from "react";
import FormHeader from "./FormHeader";
import styles from "./PersonalInfo.module.css";
import Input from "../../Helpers/Input";
import Button from "../../Helpers/Button";
import useForm from "../../Hooks/useForm";

const PersonalInfo = () => {
  const name = useForm("");
  const email = useForm("email");
  const phone = useForm("phone");

  return (
    <>
      <FormHeader
        title="Personal Info"
        info="Please provide your name, email address, and phone number."
      />
      <form
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
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
        <Button id="next" buttonInfo="Next Step" />
      </form>
    </>
  );
};

export default PersonalInfo;
