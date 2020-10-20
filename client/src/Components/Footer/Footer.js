import React from 'react';

// IMPORT ASSETS
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

// IMPORT STYLED COMPONENTS
import {
  StyledFooter,
  StyledFooterLinks,
  StyledFooterCopyright,
  StyledFooterSocial
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterLinks>
        <a href="#">Mentions Légales</a>
        <a href="#">A propos</a>
      </StyledFooterLinks>
      <StyledFooterCopyright>
        <p>Tous droits réservés © Local Drive - 2020</p>
      </StyledFooterCopyright>
      <StyledFooterSocial>
        <a href="#"><FacebookIcon /></a>
        <a href="#"><GitHubIcon /></a>
      </StyledFooterSocial>
    </StyledFooter>
  );
};

export default Footer;