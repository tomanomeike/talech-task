import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProducts from '../../storage/use-products';
import Button from 'react-bootstrap/Button';

const Show = (props) => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const { getProductById } = useProducts();
  

  React.useEffect(() => {
    setProduct(getProductById(id));
  }, [id]);

  // React.useEffect(() => {
  //   const productList = JSON.parse(localStorage.getItem('products'));
  //   const product = productList.filter(product => product.id === Number(id));
  //   setProduct(product[0]);
  // }, [id]);

  return (
    <div>
      <div>{product.name}</div>
      <p>EAN: {product.EAN}</p>
      <p>Type: {product.type}</p>
      <p>Weight: {product.weight}</p>
      <p>Color: {product.color}</p>

      <Link className='btn btn-info' to={`/products/${id}/edit`}>
        Edit product
      </Link>
      <Button className='btn btn-info mb-1' onClick={props.history.goBack}>
          <span>Cancel</span>
        </Button>
    </div>
  );
};

export default Show;
