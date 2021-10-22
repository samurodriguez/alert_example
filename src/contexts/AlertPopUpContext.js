import { createContext, useContext, useState } from "react";

export const AlertPopUpContext = createContext();

export const CustomAlertPopUpContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({ msg: "", status: "" });

  return (
    <AlertPopUpContext.Provider value={[alert, setAlert]}>
      {children}
    </AlertPopUpContext.Provider>
  );
};

export const useAlertPopUp = () => {
  return useContext(AlertPopUpContext);
};
