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

    getProductById: id => {
      const products = localStorageClient.getData('products');

      return products.find(product => product.id === Number(id));
    },
    updateProductStatus: id => {
      const products = localStorageClient.getData('products');
      localStorageClient.setData(
        'products',
        (products.map((product) => ({
          ...product,
          checked: product.id === id ? !product.checked : product.checked,
      })))
      )
    }
  };
};

export default useProducts;
