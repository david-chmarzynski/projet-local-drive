import React, { useState } from 'react';

// IMPORT STYLED COMPONENTS
import { StyledProductAdd } from './ProductAdd.styled';

// IMPORT MUI COMPONENTS
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

// USE STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

// PRODUCT FIELDS
const fields = [
  "Nom",
  "Description",
  "Prix",
  "Stock",
  "Image",
  "Catégorie"
];

const options = [
  "/Kg",
  "/1",
  "/2",
  "/4",
  "/6",
  "/12",
  "/L"
];


const ProductAdd = () => {
  const classes = useStyles();
  const [currency, setCurrency] = useState("");
  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value)
  };
  return (
    <StyledProductAdd>
      {fields.map(field => (
        <TextField required id={field} label={field} defaultValue="" />
      ))}
      <TextField
          id="standard-select-currency"
          select
          label="Unité de vente"
          value={currency}
          onChange={handleChangeCurrency}
          helperText="Veuillez sélectionner une unité"
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
    </StyledProductAdd>
  );
};

export default ProductAdd;