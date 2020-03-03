import React from 'react';
import ProductDetail from './productDetail'

const ProductDetailPage = ({ match }) => {
  const {
    params: { item_id },
  } = match;

  
  return (
    <div>
      Product details page ID <strong>{item_id}</strong>
      <ProductDetail/>
    </div>
  );
};

export default ProductDetailPage;
