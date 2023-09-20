import { useContext } from "react";
import { ContextApi } from "../context";

export const EN = {
  routes: {
    home: "Home",
    language: "Language",
    pdf: "PDF",
    petValidation: "Pet Validation",
    profile: "Profile",
    validation: "Validation",
  },
  home: {
    title: "Home",
  },
  language: {
    change: "Change to",
    description: "Your language selected is",
  },
  validation: {
    age: "Age",
    animalType: "Animal Type",
    birthdate: "Birthdate",
    breed: "Breed",
    certificate: "Certificate",
    expirationDate: "N/A",
    id: "ID",
    image: "Image",
    license: "License",
    microchip: "Microchip",
    name: "Name",
    owner: "Owner",
    password: "Password",
    registerDate: "Register Date",
    registerState: "Register State",
    species: "Species",
    title: "Validation",
    weight: "Weight",
  },
  profile: {
    inputCertification: "Certification number",
    inputPassword: "Password",
    loginButton: "Sign In",
    placeholderPassword: "Your password",
    title: "Profile",
  },
};

export const ES = {
  routes: {
    home: "Inicio",
    language: "Idioma",
    pdf: "PDF",
    petValidation: "Verificación de mascota",
    profile: "Perfil",
    validation: "Validación",
  },
  home: {
    title: "Inicio",
  },
  language: {
    change: "Cambiar a",
    description: "Su idioma seleccionado es",
  },
  validation: {
    age: "Edad",
    animalType: "Tipo de animal",
    birthdate: "Fecha de nacimiento",
    breed: "Raza",
    certificate: "Certificado",
    expirationDate: "N/A",
    id: "Código",
    image: "Imagen",
    license: "Carnet",
    microchip: "Microchip",
    name: "Nombre",
    owner: "Dueño",
    password: "Contraseña",
    registerDate: "Fecha de registro",
    registerState: "Estado de registro",
    species: "Especie",
    title: "Validación",
    weight: "Peso",
  },
  profile: {
    inputCertification: "Número de certificado",
    inputPassword: "Contraseña",
    loginButton: "Iniciar sesión",
    placeholderPassword: "Tu contraseña",
    title: "Perfil",
  },
};

export const getTranslations = () => {
  const {
    state: { spanish },
  } = useContext(ContextApi);
  return spanish ? ES : EN;
};
