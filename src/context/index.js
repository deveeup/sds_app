import React, { createContext, useState } from "react";

export const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    spanish: false,
    user: {},
  });

  const changeState = (newState) => {
    setState({
      ...state,
      ...newState,
    });
  };

  return (
    <ContextApi.Provider value={{ state, changeState }}>
      {children}
    </ContextApi.Provider>
  );
};
