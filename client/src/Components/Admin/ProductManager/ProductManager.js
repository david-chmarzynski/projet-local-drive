import React, { useEffect } from 'react';

// IMPORT STYLED COMPONENTS
import { StyledProductManager } from './ProductManager.styled';

// IMPORT EXTERNAL COMPONENTS
import ProductCard from '../ProductCard/ProductCard';

const ProductManager = ({ fetchStoreProducts, products }) => {

  useEffect(() => {
    fetchStoreProducts()
  },[]);

  return (
    <StyledProductManager>
      {products !== null && products.map(product => (
        <ProductCard product={product} />
      ))}
    </StyledProductManager>
  );
};

export default ProductManager;