import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProducts from '../../storage/use-products';
import Button from 'react-bootstrap/Button';
import './show.css';

const Show = (props) => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const { getProductById } = useProducts();

  React.useEffect(() => {
    setProduct(getProductById(id));
  }, [id]);

  return (
    <div className={product.price === 0 ? 'item highlighted' : 'item'}>
      <h3>{product.name}</h3>
      <p>EAN: {product.EAN}</p>
      <p>Type: {product.type}</p>
      <p>Weight: {product.weight}</p>
      <p>Color: {product.color}</p>
      <p>quantity: {product.quantity}</p>
      <p>price: {product.price}</p>

      <Link className='btn btn-primary mr-2' to={`/products/${id}/edit`}>
        Edit product
      </Link>
      <Link className='btn btn-info mr-2' to={`/products/${id}/priceHistory`}>
       Price history
      </Link>
      <Link className='btn btn-info mr-2' to={`/products/${id}/quantityHistory`}>
      Quantity History
      </Link>

      <Button className='btn btn-danger' onClick={props.history.goBack}>
        <span>Cancel</span>
      </Button>
    </div>
  );
};

export default Show;
