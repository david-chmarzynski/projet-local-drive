import React from 'react';

// IMPORT STYLED COMPONENTS
import { StyledProductManager } from './ProductManager.styled';

// IMPORT EXTERNAL COMPONENTS
import ProductCard from '../ProductCard/ProductCard';

const products = [{
  _id: "123",
  image: "https://static.750g.com/images/600-400/904b854c2b532fb76170e9a8908a2c50/270077.jpg",
  name: "Chorizo",
  description: "Voici un bon chorizo, tout droit venu d'Espagne !",
  date_created: "01/12/2020"
},
{
  _id: "1298",
  image: "https://static.750g.com/images/600-400/904b854c2b532fb76170e9a8908a2c50/270077.jpg",
  name: "Viande de boeuf",
  description: "Boeufs élevés en plein air, Label Rouge",
  date_created: "21/12/2020"
}
]

const ProductManager = () => {

  return (
    <StyledProductManager>
      {products.map(product => (
        <ProductCard product={product} />
      ))}
    </StyledProductManager>
  );
};

export default ProductManager;