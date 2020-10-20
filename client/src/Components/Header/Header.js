import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// IMPORT ASSETS
import Logo from './g1114.png';

// IMPORT MUI COMPONENTS
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

// IMPORT STYLED COMPONENTS
import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderIcons,
  StyledSearchBar,
  StyledHeaderIconsLeft,
  StyledHeaderIconsRight
} from './Header.styled';

// IMPORT COMPONENTS
import Login from '../Login/Login';

const Header = ({ responsive }) => {
  // USE STATE
  const [isLoginOpen, setLoginOpen] = useState(false);

  // HANDLE LOGIN
  const handleCloseLogin = () => {
    setLoginOpen(false);
  };

  const handleOpenLogin = () => {
    setLoginOpen(true);
  };

  return (
    <StyledHeader>
      <Link to='/'>
        <StyledHeaderLogo>
          <img src={Logo} alt="Logo Local Drive"/>
        </StyledHeaderLogo>
      </Link>
      <StyledHeaderIcons>
        <StyledHeaderIconsLeft>
          <StyledSearchBar label="Rechercher votre ville" />
          <SearchIcon fontSize="large" />
        </StyledHeaderIconsLeft>
        <StyledHeaderIconsRight>
          <PersonIcon fontSize="large" onClick={handleOpenLogin}/>
            <Login isLoginOpen={isLoginOpen} handleCloseLogin={handleCloseLogin} responsive={responsive} />
          <ShoppingBasketIcon fontSize="large" />
        </StyledHeaderIconsRight>  
      </StyledHeaderIcons>
    </StyledHeader>
  );
};

export default Header;