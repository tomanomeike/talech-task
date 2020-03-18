import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import useProducts from '../../storage/use-products';
import './list.css';

const List = props => {
  const { getProducts, deleteProduct, updateProductStatus } = useProducts();
  const [products, setProducts] = React.useState(getProducts());
  const className = props.checked ? 'product active' : 'product';

  const onDeleteProduct = id => {
    if (window.confirm('Are you sure?')) {
      deleteProduct(id);
    }
    setProducts(getProducts);
  };


  const onUpdateProductStatus = id => {
    updateProductStatus(id);
    setProducts(getProducts);
  }

  return (
    <React.Fragment>
      <div className='container'>
        <Link className='btn btn-info m-3' to={`/products/create`}>
          Create new
        </Link>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>EAN</th>
              <th>Type</th>
              <th>Weight</th>
              <th>Color</th>
              <th>Active</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map(product => (
              <tr className={className} key={product.id}>
                <td className={className}>{product.name}</td>
                <td>{product.EAN}</td>
                <td>{product.type}</td>
                <td>{product.weight}</td>
                <td >{product.color}</td>
                <td>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='active'                    
                    onClick={() => onUpdateProductStatus(product.id)}

                  />
                </td>
                <td>
                  {' '}
                  <Link
                    className=' btn btn-secondary'
                    to={`/products/${product.id}`}
                  >
                    VIEW
                  </Link>{' '}
                  <Link 
                    className='btn btn-primary'
                    to={`/products/${product.id}/edit`}
                  >
                    EDIT
                  </Link>{' '}
                  <Button
                    onClick={() => onDeleteProduct(product.id)}
                    className='btn btn-danger'
                  >
                    DELETE
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
};
export default List;
