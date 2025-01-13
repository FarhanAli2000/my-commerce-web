import { useState } from "react";
import { useContext as useReactContext, createContext } from "react";
import React from "react";

export const MyContext = createContext();



export const MyProvider = ({ children }) => {
    const [cartApi, setCartApi] = useState([])




  return <MyContext.Provider value={{setCartApi,  cartApi  }}>
    {children}
  </MyContext.Provider>;
};

export const useMyContext = () => {
  const context = useReactContext(MyContext);

  if (!context) {
    throw new Error("Please provide the wrapper for the context.");
  }

  return context;
};
