import React from 'react';
import localStorageClient from '../storage/client';

const useProducts = () => {
  return {
    getProducts: () => {
      return localStorageClient.getData('products');
    },
    addProduct: product => {
      const products = localStorageClient.getData('products');

      localStorageClient.setData('products', [...products, product]);
    },
    deleteProduct: id => {
      const products = localStorageClient.getData('products');

      localStorageClient.setData(
        'products',
        products.filter(product => product.id !== id)
      );
    },
    showProduct: id=> {
        const products = localStorageClient.getData('products');
        localStorageClient.setData('products',  products.filter(product => product.id === Number(id)));
        
    }
  };
};

export default useProducts;
