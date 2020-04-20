import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './item.css';

const Item = props => {
  const onDeleteProduct = () => {
    props.onDeleteProduct(props.product.id);
  };

  const onUpdateProductStatus = () => {
    props.onUpdateProductStatus(props.product.id);
  };
  // console.log(props.product.checked);
  return (
    <React.Fragment>
      <tr
        className={
          props.product.checked ? 'product disabled': 'product' 
          && props.product.price === 0 ? 'item highlighted': 'item '
        }
        key={props.product.id}
      >
        <td>{props.product.name}</td>
        <td>{props.product.EAN}</td>
        <td>{props.product.type}</td>
        <td>{props.product.weight}</td>
        <td>{props.product.color}</td>
        <td>{props.product.quantity}</td>
        <td>{props.product.price}</td>
        <td>
          <input
            className='form-check-input'
            type='checkbox'
            name='active'
            onClick={onUpdateProductStatus}
          />
        </td>
        <td>
          {' '}
          <Link to={`/products/${props.product.id}`}>
            <Button
              className=' btn btn-secondary'
              disabled={props.product.checked ? 'disabled' : null}
            >
              VIEW
            </Button>
          </Link>{' '}
          <Link to={`/products/${props.product.id}/edit`}>
            <Button
              className='btn btn-primary'
              disabled={props.product.checked ? 'disabled' : null}
            >
              EDIT
            </Button>
          </Link>{' '}
          <Button
            onClick={onDeleteProduct}
            className='btn btn-danger'
            disabled={props.product.checked ? 'disabled' : null}
          >
            DELETE
          </Button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Item;
