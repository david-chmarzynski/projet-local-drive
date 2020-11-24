import React from 'react';
import { useState } from 'react';

// IMPORT STYLED COMPONENTS
import { StyledAdminMenu, StyledAdminMenuTitle, StyledAdminMenuButton } from './AdminMenu.styled';

// IMPORT MUI COMPONENTS
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#244958",
    color: "white",
    fontWeight: 600,
  },
  titles: {
    fontWeight: 600,
    textTransform: "uppercase",
  },
  details: {
    width: "100%",
    display: "block",
    fontSize: "1.5vw",
  },
  arrow: {
    color: "white",
  },
  div: {
    padding: ".7rem"
  },
  mainTitle: {
    paddingLeft: "1rem"
  },
  button: {
    height: "50px",
    width: "50px"
  }
}));

const AdminMenu = () => {
  // ADMIN MENU STATE (OPEN/CLOSE)
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const classes = useStyles();
  return (
    <>
    <StyledAdminMenuButton open={open}>
      <IconButton className={classes.button} onClick={toggleMenu}>
        <MenuIcon />
      </IconButton>
    </StyledAdminMenuButton>
    {open && (
    <StyledAdminMenu>
      <StyledAdminMenuTitle className={classes.mainTitle}>Menu</StyledAdminMenuTitle>
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.arrow} />}
          aria-controls="panel-produits"
          id="panel-produits"
        >
          <Typography className={classes.titles}>Produits</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.div}>Ajouter un produit</div>
          <div className={classes.div}>Modifier un produit</div>
          <div className={classes.div}>Supprimer un produit</div>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.arrow} />}
          aria-controls="panel-magasin"
          id="panel-magasin"
        >
          <Typography className={classes.titles}>Magasin</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.div}>Mes informations</div>
          <div className={classes.div}>Faire une demande</div>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.arrow} />}
          aria-controls="panel-promotions"
          id="panel-promotions"
        >
          <Typography className={classes.titles}>Promotions</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.div}>Ajouter une promotion</div>
          <div className={classes.div}>Modifier une promotion</div>
          <div className={classes.div}>Supprimer une promotion</div>
        </AccordionDetails>
      </Accordion>
    </StyledAdminMenu>
    )}
    </>
  );
};

export default AdminMenu;