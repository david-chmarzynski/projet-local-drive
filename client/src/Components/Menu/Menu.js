import React from 'react';
import axios from 'axios';

// IMPORT ASSETS
import Logo from './g1114.png';

// IMPORT MUI COMPONENTS
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

// IMPORT STYLED COMPONENTS
import { StyledMenu, StyledDialogMenu, StyledMenuClosing, StyledMenuTitle, StyledMenuImgDiv, StyledMenuTiles } from './Menu.styled';

const Menu = ({
  isLoginOpen,
  handleCloseLogin,
  responsive,
  handleStoreSubmitLogout
}) => {
  // LOGOUT FUNCTION
  const handleLogout = () => {
    handleStoreSubmitLogout();
  };

  return (
    <StyledDialogMenu open={isLoginOpen} onClose={handleCloseLogin} fullWidth={false} fullScreen={responsive}>
      <StyledMenu>
        <StyledMenuClosing>
          <IconButton onClick={handleCloseLogin}>
            <CloseIcon />
          </IconButton>
        </StyledMenuClosing>
        <StyledMenuTitle>
          Bienvenue
        </StyledMenuTitle>
        <StyledMenuImgDiv>
            <img src={Logo} alt="Logo Local Drive"/>
          </StyledMenuImgDiv>
          <h1>Local Drive</h1>
          <StyledMenuTiles>
            <div className="menu-tile">
              <h3>Mes commandes</h3>
            </div>
            <div className="menu-tile">
              <h3>Mes informations</h3>
            </div>
            <div className="menu-tile logout" onClick={handleLogout}>
              <h3>Déconnexion</h3>
            </div>
          </StyledMenuTiles>
      </StyledMenu>
    </StyledDialogMenu>
  );
};

export default Menu;