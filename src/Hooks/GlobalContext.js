import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [step, setStep] = React.useState(2);
  const [data, setData] = React.useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    planSelection: {
      plan: "",
      duration: "monthly",
    },
  });
  return (
    <GlobalContext.Provider value={{ step, setStep, data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};
