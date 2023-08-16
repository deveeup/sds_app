import React, { createContext, useState } from 'react';
import { EN } from '../translations';

export const ContextApi = createContext();


export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    spanish: false,
    translations: EN,
  });

  const changeState = newState => {
    setState({
      ...state,
      ...newState
    });
  };

  return (
    <ContextApi.Provider value={{ state, changeState }}>
      {children}
    </ContextApi.Provider>
  );
};

