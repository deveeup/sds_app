import { useContext } from 'react';
import { ContextApi } from '../context';

export const EN = {
  routes: {
    home: 'Home',
    validation: 'Validation',
    profile: 'Profile',
    petValidation: 'Pet Validation',
    language: 'Language',
  },
  home: {
    title: 'Home'
  },
  validation: {
    title: 'Validation',
  }
};

export const ES = {
  routes: {
    home: 'Inicio',
    validation: 'Validación',
    profile: 'Perfil',
    petValidation: 'Verificación de mascota',
    language: 'Idioma',
  },
  home: {
    title: 'Inicio',
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

