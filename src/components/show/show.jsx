import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProducts from '../../storage/use-products';
import Button from 'react-bootstrap/Button';
import './show.css';

const Show = props => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const { getProductById } = useProducts();
  const className = props.checked ? 'item active' : 'item';

  React.useEffect(() => {
    setProduct(getProductById(id));
  }, [id]);

  return (
    <div className={className}>
      <h3>{product.name}</h3>
      <p>EAN: {product.EAN}</p>
      <p>Type: {product.type}</p>
      <p>Weight: {product.weight}</p>
      <p>Color: {product.color}</p>
 
      <Link className='btn btn-primary mr-2' to={`/products/${id}/edit`}>
        Edit product
      </Link>
      <Button className='btn btn-danger' onClick={props.history.goBack}>
        <span>Cancel</span>
      </Button>
    </div>
  );
};

export default Show;
