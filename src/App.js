import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

export default App;
