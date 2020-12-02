import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// IMPORT STYLED COMPONENTS
import { StyledAdminNav } from './AdminNav.styled';

// IMPORT MUI COMPONENTS
import MenuIcon from '@material-ui/icons/Menu';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// MAKE CLASSES
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  first: {
    marginTop: "1rem"
  },
  deployed: {
    width: "15%",
    animation: "deployAdminMenu .5s",
    boxShadow: "8px 0px 5px -6px rgba(0,0,0,0.75)"
  },
  undeployed: {
    animation: "undeployAdminMenu .5s"
  },
  deployedIcon: {
    animation: "deployRotateIcon .5s forwards",
    fontSize: "2rem"
  },
  undeployedIcon: {
    animation: "undeployRotateIcon .5s forwards",
    fontSize: "2rem"
  },
  buttons: {
    width: "100%",
    color: "white",
    fontWeight: "800",
    marginTop: "1rem",
    background: "rgb(31,45,68)"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  links: {
    textDecoration: "none",
    width: "100%"
  }
}));

const AdminNav = () => {
  // ICON CLICK STATE
  const [open, setOpen] = useState(false);
  // ICON CLICK TOGGLE
  const handleToggle = () => {
    setOpen(!open);
  };
  //USE CLASSES
  const classes = useStyles();

  return (
    <StyledAdminNav  className={open ? classes.deployed : classes.undeployed}>
      <MenuIcon onClick={handleToggle}  className={open ? classes.deployedIcon : classes.undeployedIcon } />
      {open && (
        <>
         <Link to="/admin/produits"><Accordion className={classes.first}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-products"
            id="panel-products"
          >
           <Typography className={classes.heading}>Produits</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.container}>
              <Link to="/admin/produits/add" className={classes.links}><Button variant="contained" className={classes.buttons}>AJOUTER</Button></Link> 
              <Link to="/admin/produits/delete" className={classes.links}><Button variant="contained" className={classes.buttons}>SUPPRIMER</Button></Link>
              <Link to="/admin/produits/update" className={classes.links}><Button variant="contained" className={classes.buttons}>MODIFIER</Button></Link>
            </div>
          </AccordionDetails>
        </Accordion></Link>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-boutique"
            id="panel-boutique"
          >
            <Typography className={classes.heading}>Boutique</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.container}>
            <Button variant="contained" className={classes.buttons}>CONSULTER</Button>
            <Button variant="contained" className={classes.buttons}>MODIFIER</Button>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-promo"
            id="panel-promo"
          >
            <Typography className={classes.heading}>Promotions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.container}>
            <Button variant="contained" className={classes.buttons}>AJOUTER</Button>
            <Button variant="contained" className={classes.buttons}>SUPPRIMER</Button>
            <Button variant="contained" className={classes.buttons}>MODIFIER</Button>
            </div>
          </AccordionDetails>
        </Accordion>
        </>
      )}
    </StyledAdminNav>
  );
};

export default AdminNav;