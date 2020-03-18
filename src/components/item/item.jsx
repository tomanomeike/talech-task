import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import useProducts from '../../storage/use-products';
import './item.css';

const Item = props => {
  const { getProducts, deleteProduct, updateProductStatus } = useProducts();
  const [products, setProducts] = React.useState(getProducts());

  const onDeleteProduct = id => {
    if (window.confirm('Are you sure?')) {
      deleteProduct(id);
    }
    setProducts(getProducts);
  };

  const onUpdateProductStatus = id => {
    updateProductStatus(id);
    setProducts(getProducts);
  };
  return (
    <React.Fragment>
      <tr
        className={props.product.checked ? 'product disabled' : 'product'}
        key={props.product.id}
      >
        <td>{props.product.name}</td>
        <td>{props.product.EAN}</td>
        <td>{props.product.type}</td>
        <td>{props.product.weight}</td>
        <td>{props.product.color}</td>
        <td>
          <input
            className='form-check-input'
            type='checkbox'
            name='active'
            onClick={() => onUpdateProductStatus(props.product.id)}
          />
        </td>
        <td>
          {' '}
          <Link to={`/products/${props.product.id}`}>
            <Button className=' btn btn-secondary' disabled={false}>
              VIEW
            </Button>
          </Link>{' '}
          <Link to={`/products/${props.product.id}/edit`}>
            <Button className='btn btn-primary' disabled={false}>
              EDIT
            </Button>
          </Link>{' '}
          <Button
            onClick={() => onDeleteProduct(props.product.id)}
            className='btn btn-danger'
            disabled={false}
          >
            DELETE
          </Button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Item;
