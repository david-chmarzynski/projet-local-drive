import React from 'react';

// IMPORT STYLED COMPONENTS
import {  } from './Product.styled';

// IMPORT MUI COMPONENT
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


// DEFINING MUI STYLE
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 330,
    height: 442,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  bottom: {
    width: '100%',
  }
}));


const Product = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Homemade_Paella_with_lots_of_seafood.jpg/1200px-Homemade_Paella_with_lots_of_seafood.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <BottomNavigation className={classes.bottom}>
          <BottomNavigationAction label="Modifier" icon={<SettingsIcon />} />
          <BottomNavigationAction label="Supprimer" icon={<DeleteIcon />} />
        </BottomNavigation>
      </CardActions>
    </Card>
  );
};

export default Product;