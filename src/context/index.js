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

  const login = (user) => {
    setState({
      ...state,
      user,
    });
  };

  const logout = () => {
    setState({
      ...state,
      user: {},
    });
  };

  return (
    <ContextApi.Provider value={{ state, changeState, login, logout }}>
      {children}
    </ContextApi.Provider>
  );
};
