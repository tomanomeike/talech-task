import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Item from '../item/item';
import useProducts from '../../storage/use-products';
import './list.css';

const List = () => {
  const { getProducts, deleteProduct, updateProductStatus } = useProducts();
  const [products, setProducts] = React.useState(getProducts());

  const onDeleteProduct = id => {
    if (window.confirm('Are you sure?')) {
      deleteProduct(id);
      setProducts(getProducts);
    }
  };

  const onUpdateProductStatus = id => {
    updateProductStatus(id);
    setProducts(getProducts);
  };

  return (
    <React.Fragment>
      <div className='container'>
        <Link className='btn btn-info m-3' to={`/products/create`}>
          Create new
        </Link>
        {products.length !==0 ? (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>EAN</th>
                <th>Type</th>
                <th>Weight</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map(product => (
                <Item
                  key={product.id}
                  product={product}
                  onDeleteProduct={onDeleteProduct}
                  onUpdateProductStatus={onUpdateProductStatus}
                />
              ))}
            </tbody>
          </Table>
        ) : (
          <h3>Nothing to show</h3>
        )}
      </div>
    </React.Fragment>
  );
};
export default List;
