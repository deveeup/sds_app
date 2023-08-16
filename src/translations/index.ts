import { useContext } from 'react';
import { ContextApi } from '../context';

export const EN = {
  home: {
    title: 'Home'
  },
  validation: {
    title: 'Validation'
  }
};

export const ES = {
  home: {
    title: 'Inicio'
  },
  validation: {
    title: 'Validación',
  },
};



export const getTranslations = () => {
  const {
    state: { spanish },
  } = useContext(ContextApi);
  return spanish ? ES : EN;
};

