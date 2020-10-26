import React, { useState } from 'react';

// IMPORT ASSETS
import Logo from './g1114.png';

// IMPORT MUI COMPONENTS
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

// IMPORT STYLED COMPONENTS
import {
  StyledLogin,
  StyledLoginDialog,
  StyledLoginImgDiv,
  StyledLoginInput,
  StyledLoginClosing,
  StyledLoginButton,
  StyledLoginTitle,
  StyledLoginCheckBox,
  StyledCheckBox,
  StyledLoginForm
} from './Login.styled';

const Login = ({
  isLoginOpen, // FROM HEADER
  handleCloseLogin, // FROM HEADER
  responsive, // FROM APP & HEADER (USEWINDOWSIZES)
  // STATE STORE IMPORT
  isShop,
  // FUNCTIONS STORE IMPORT SIGNUP
  handleChangeStoreEmailSignup,
  handleChangeStorePasswordSignup,
  handleChangeStorePasswordVerifySignup,
  handleChangeStoreIsShopSignup,
  handleStoreSubmitSignup,

  // FUNCTION STORE IMPORT SIGNIN
  handleChangeStoreEmailSignin,
  handleChangeStorePasswordSignin,
  handleStoreSubmitSignin
}) => {
  // USING STATE DISPLAY (SIGNIN || SIGNUP)
  const [display, setDisplay] = useState('signin');

  // HANDLE SET DISPLAY SIGNIN
  const handleSetDisplaySignin = (e) => {
    e.preventDefault();
    setDisplay('signin');
  };

  // HANDLE SET DISPLAY SIGNUP
  const handleSetDisplaySignup = (e) => {
    e.preventDefault();
    setDisplay('signup');
  };

  // STORE STATE SIGNUP FORM
  const handleChangeEmailSignup = (e) => {
    let email = e.target.value;
    handleChangeStoreEmailSignup(email);
  };

  const handleChangePasswordSignup = (e) => {
    let password = e.target.value;
    handleChangeStorePasswordSignup(password);
  };

  const handleChangePasswordRepeatSignup = (e) => {
    let passwordVerify = e.target.value;
    handleChangeStorePasswordVerifySignup(passwordVerify);
  };

  const handleChangeIsShopSignup = () => {
    handleChangeStoreIsShopSignup();
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    handleStoreSubmitSignup();
  };

  // STORE STATE SIGNIN FORM
  const handleChangeEmailSignin = (e) => {
    let email = e.target.value;
    handleChangeStoreEmailSignin(email);
  };

  const handleChangePasswordSignin = (e) => {
    let password = e.target.value;
    handleChangeStorePasswordSignin(password);
  };

  const handleSubmitSignin = (e) => {
    e.preventDefault();
    handleStoreSubmitSignin();
  };

  return (
      <StyledLoginDialog open={isLoginOpen} onClose={handleCloseLogin} fullWidth={false} fullScreen={responsive} >
        <StyledLogin>
          <StyledLoginClosing>
            <IconButton onClick={handleCloseLogin}>
              <CloseIcon />
            </IconButton>
          </StyledLoginClosing>
          <StyledLoginTitle display={display}>
            <a onClick={handleSetDisplaySignin}><h2>Connexion</h2></a>
            <a onClick={handleSetDisplaySignup}><h2>Inscription</h2></a>
          </StyledLoginTitle>
          <StyledLoginImgDiv>
            <img src={Logo} alt="Logo Local Drive"/>
          </StyledLoginImgDiv>
          <h1>Local Drive</h1>
          {/* SIGNIN DISPLAY */}
          {display === "signin" && (
            <StyledLoginForm onSubmit={handleSubmitSignin}>
              <StyledLoginInput id="standard-basic email" label="Adresse mail" required={true} type="email" onChange={handleChangeEmailSignin} />
              <StyledLoginInput id="standard-basic password" label="Mot de passe" required={true} type='password' onChange={handleChangePasswordSignin}/>
              <StyledLoginButton type="submit">
                Se connecter
              </StyledLoginButton>
            </StyledLoginForm>
          )}
          {/* SIGNUP DISPLAY */}
          {display === "signup" && (
            <StyledLoginForm onSubmit={handleSubmitSignup}>
              <StyledLoginInput id="standard-basic email" label="Adresse mail" required={true} type="email" onChange={handleChangeEmailSignup} />
              <StyledLoginInput id="standard-basic password" label="Mot de passe" required={true} type='password' onChange={handleChangePasswordSignup}/>
              <StyledLoginInput id="standard-basic password2" label="Mot de passe" required={true} type='password' onChange={handleChangePasswordRepeatSignup}/>
              <StyledLoginCheckBox>
              <p>Je suis producteur</p>
              <Tooltip title="Ne cochez que si vous disposez d'un code d'invitation">
                <StyledCheckBox onChange={handleChangeIsShopSignup} checked={isShop}/>
              </Tooltip>
              </StyledLoginCheckBox>
              <StyledLoginButton type="submit">
                S'inscrire
              </StyledLoginButton>
            </StyledLoginForm>
          )}
        </StyledLogin>
      </StyledLoginDialog>
  );
};

export default Login;