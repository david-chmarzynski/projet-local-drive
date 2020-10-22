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
  email,
  password,
  passwordVerfiy,
  isShop,
  // FUNCTIONS STORE IMPORT
  handleChangeStoreEmail,
  handleChangeStorePassword,
  handleChangeStorePasswordVerify,
  handleChangeStoreIsShop,
  handleStoreSubmitSignup
}) => {
  console.log(isShop)
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
  const handleChangeEmail = (e) => {
    let email = e.target.value;
    handleChangeStoreEmail(email);
  };

  const handleChangePassword = (e) => {
    let password = e.target.value;
    handleChangeStorePassword(password);
  };

  const handleChangePasswordRepeat = (e) => {
    let passwordVerify = e.target.value;
    handleChangeStorePasswordVerify(passwordVerify);
  };

  const handleChangeIsShop = () => {
    handleChangeStoreIsShop();
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    handleStoreSubmitSignup();
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
            <a href="" onClick={handleSetDisplaySignin}><h2>Connexion</h2></a>
            <a href="" onClick={handleSetDisplaySignup}><h2>Inscription</h2></a>
          </StyledLoginTitle>
          <StyledLoginImgDiv>
            <img src={Logo} alt="Logo Local Drive"/>
          </StyledLoginImgDiv>
          <h1>Local Drive</h1>
          {/* {display === "signin" && (
            <form action="">
              <StyledLoginInput id="standard-basic email" label="Adresse mail" required={true} type="email" />
              <StyledLoginInput id="standard-basic password" label="Mot de passe" required={true} type='password'/>
              <StyledLoginButton type="submit" onSubmit={handleSubmitSignin}>
                Se connecter
              </StyledLoginButton>
            </form>
          )} */}
          {display === "signup" && (
            <StyledLoginForm onSubmit={handleSubmitSignup}>
              <StyledLoginInput id="standard-basic email" label="Adresse mail" required={true} type="email" onChange={handleChangeEmail} />
              <StyledLoginInput id="standard-basic password" label="Mot de passe" required={true} type='password' onChange={handleChangePassword}/>
              <StyledLoginInput id="standard-basic password2" label="Mot de passe" required={true} type='password' onChange={handleChangePasswordRepeat}/>
              <StyledLoginCheckBox>
              <p>Je suis producteur</p>
              <Tooltip title="Ne cochez que si vous disposez d'un code d'invitation">
                <StyledCheckBox onChange={handleChangeIsShop} checked={isShop}/>
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