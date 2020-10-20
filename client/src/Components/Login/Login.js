import React from 'react';

// IMPORT ASSETS
import Logo from './g1114.png';

// IMPORT MUI COMPONENTS
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

import {
  StyledLogin,
  StyledLoginDialog,
  StyledLoginImgDiv,
  StyledLoginInput,
  StyledLoginClosing,
  StyledLoginButton,
  StyledLoginTitle
} from './Login.styled';

const Login = ({ isLoginOpen, handleCloseLogin, responsive }) => {

  const handleChangeEmail = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  };

  return (
      <StyledLoginDialog open={isLoginOpen} onClose={handleCloseLogin} fullWidth={false} fullScreen={responsive} >
        <StyledLogin>
          <StyledLoginClosing>
            <IconButton onClick={handleCloseLogin}>
              <CloseIcon />
            </IconButton>
          </StyledLoginClosing>
          <StyledLoginTitle>
            <a href=""><h2>Connexion</h2></a>
            <a href=""><h2>Inscription</h2></a>
          </StyledLoginTitle>
          <StyledLoginImgDiv>
            <img src={Logo} alt="Logo Local Drive"/>
          </StyledLoginImgDiv>
          <h1>Local Drive</h1>
            <StyledLoginInput id="standard-basic" label="Adresse mail" required={true}  onChange={handleChangeEmail} />
            <StyledLoginInput id="standard-basic" label="Mot de passe" required={true} type='password'  />
          <StyledLoginButton>
            Se connecter
          </StyledLoginButton>
        </StyledLogin>
      </StyledLoginDialog>
  );
};

export default Login;