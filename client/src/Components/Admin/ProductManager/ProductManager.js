import React, { useEffect } from 'react';

// IMPORT STYLED COMPONENTS
import { StyledProductManager } from './ProductManager.styled';

// IMPORT EXTERNAL COMPONENTS
import ProductCard from '../ProductCard/ProductCard';

const ProductManager = ({ fetchStoreProducts, products }) => {
  useEffect(() => {
    fetchStoreProducts();
  },[]);

  console.log(products)

  return (
    <StyledProductManager>
      {products && products.map(product => (
        <ProductCard product={product} />
      ))}
    </StyledProductManager>
  );
};

export default ProductManager;