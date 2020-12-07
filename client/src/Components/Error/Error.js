import React from 'react';
import { Link } from 'react-router-dom';

// IMPORT STYLED COMPONENTS
import { StyledError } from './Error.styled';

const Error = () => {
  return (
    <StyledError>
      <p>Désolé, mais vous ne pouvez pas aller par là</p>
      <Link to="/">Retourner à l'accueil</Link>
    </StyledError>
  );
};

export default Error;