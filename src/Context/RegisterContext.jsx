import { createContext, useState } from "react";

export let RegisterContext = createContext(null);

export let RegisterProvider = ({ children }) => {
  let storage = localStorage.getItem('token');
  let initialLoginState = storage !== null ? storage : false;
  let [Login, SetLogin] = useState(initialLoginState);

  console.log(Login);

  return (
    <RegisterContext.Provider value={{ Login, SetLogin }}>
      {children}
    </RegisterContext.Provider>
  );
};
