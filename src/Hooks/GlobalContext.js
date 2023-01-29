import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [step, setStep] = React.useState(1);
  return (
    <GlobalContext.Provider value={{ step, setStep }}>
      {children}
    </GlobalContext.Provider>
  );
};
