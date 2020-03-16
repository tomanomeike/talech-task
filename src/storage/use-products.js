
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
    // getProductById: id => {
    //   const productList = JSON.parse(localStorage.getItem('products'));
    //   return productList.filter(product => product.id === Number(id));
    // }
    getProductById: id => {
      const products = localStorageClient.getData('products');
     localStorageClient.setData(
        'products',
        products.filter(product => product.id === Number(id))
      );
     

      // return products.filter(product => product.id === Number(id));
    }
  };
};

export default useProducts;

// React.useEffect(() => {
//   const productList = JSON.parse(localStorage.getItem('products'));
//   const product = productList.filter(product => product.id === Number(id));
//   setProduct(product[0]);
// }, [id]);
