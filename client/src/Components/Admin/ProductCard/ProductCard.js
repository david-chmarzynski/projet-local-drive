import React from 'react';

// IMPORT STYLED COMPONENTS
import {  } from './ProductCard.styled';

// IMPORT MUI COMPONENTS
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// MUI USE STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    height: 380,
    marginLeft: "1rem"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ProductCard = ({ product, deleteProduct, axiosCallDeleteProduct }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDeleteProduct = (e) => {
    const productId = e.target.value;
    deleteProduct(productId);
    axiosCallDeleteProduct();
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label={product._id} className={classes.avatar}>
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.name}
        subheader={product.date_created}
      />
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Supprimer" value={product._id} onClick={handleDeleteProduct}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Modifier">
          <UpdateIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;