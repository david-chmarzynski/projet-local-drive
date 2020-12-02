import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// IMPORT STYLED COMPONENTS
import { StyledProductAdd, StyledProductAddForm, StyledProductAddButton } from './ProductAdd.styled';

// IMPORT CONSTS
import { options, categories } from './ProductAdd.const';

// IMPORT MUI COMPONENTS
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { makeStyles } from '@material-ui/core/styles';

// USE STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    }
  },
}));


const ProductAdd = ({
  handleStoreChangeName,
  handleStoreChangeDescription,
  handleStoreChangePrice,
  handleStoreChangeStock,
  handleStoreChangeImage,
  handleStoreChangeCategory,
  handleStoreChangeUnit,
  handleStoreSubmitProduct,
  // VALUES
  unit,
  category
}) => {
  const classes = useStyles();
  // HANDLE CHANGE STORE METHODS
  const handleChangeName = (e) => {
    const name = e.target.value;
    handleStoreChangeName(name);
  };

  const handleChangeDescription = (e) => {
    const description = e.target.value;
    handleStoreChangeDescription(description);
  };

  const handleChangePrice = (e) => {
    const price = parseInt(e.target.value);
    handleStoreChangePrice(price);
  };

  const handleChangeStock = (e) => {
    const stock = parseInt(e.target.value);
    handleStoreChangeStock(stock);
  };

  const handleChangeImage = (e) => {
    const image = e.target.value;
    handleStoreChangeImage(image);
  };

  const handleChangeCategory = (e) => {
    const category = e.target.value;
    handleStoreChangeCategory(category);
  };

  const handleChangeUnit = (e) => {
    const unit = parseInt(e.target.value);
    handleStoreChangeUnit(unit);
  };

  const redirectAdmin = () => {
    document.location.href="http://localhost:4000/admin/produits"
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    await handleStoreSubmitProduct();
    redirectAdmin();
  };

  return (
    <StyledProductAdd>
      <StyledProductAddForm onSubmit={handleSubmitProduct}>
          <TextField required id="name" label="Nom du produit" defaultValue="" onChange={handleChangeName}/>
          <TextField required id="description" label="Description" defaultValue="" onChange={handleChangeDescription}/>
          <TextField required id="price" label="Prix" defaultValue="" onChange={handleChangePrice}/>
          <TextField required id="stock" label="Stock" defaultValue="" onChange={handleChangeStock}/>
          <TextField required id="image" label="Image" defaultValue="" onChange={handleChangeImage}/>
          <TextField
            id="standard-select-currency"
            select
            label="Catégorie"
            value={category}
            onChange={handleChangeCategory}
            helperText="Veuillez sélectionner une catégorie"
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.unit}
              </MenuItem>
            ))}
          </TextField>
          <TextField
              id="standard-select-currency"
              select
              label="Unité de vente"
              value={unit}
              onChange={handleChangeUnit}
              helperText="Veuillez sélectionner une unité"
            >
              {options.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.unit}
                </MenuItem>
              ))}
            </TextField>
            <StyledProductAddButton>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<SaveAltIcon />}
                    type="submit"
                  >
                Ajouter
              </Button>
        </StyledProductAddButton>
      </StyledProductAddForm>
    </StyledProductAdd>
  );
};

export default ProductAdd;