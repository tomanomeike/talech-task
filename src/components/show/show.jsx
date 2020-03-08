import React from 'react';
import {  useParams } from "react-router-dom";
import useProducts from '../../storage/use-products';




const Show = () => {
  const { id } = useParams();
  // React.useEffect(() => {
  //   const productList = JSON.parse(localStorage.getItem("products"));
  //   const product = productList.filter(product => product.id === Number(id));
  //   setProduct(product[0]);
  // }, [id]);

 

const [product, setProduct] = React.useState({})
const {  getProductById } = useProducts();

React.useEffect(() => {
    setProduct(getProductById(id))
}, [id])

  return (
    <div>
         <h1 className="my-3">{product.name}</h1>
          <p>EAN: {product.EAN}</p>
          <p>Type: {product.type}</p>
          <p>Weight: {product.weight}</p>
          <p>Color: {product.color}</p>
         
    </div>
  );
};

export default Show;
