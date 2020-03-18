import React from 'react';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
import useProducts from '../../storage/use-products';
import { Link, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './create.css'

const Create = (product) => {
  const { addProduct } = useProducts();
  // const { id } = useParams();
  const [toProduct, setToProduct] = React.useState(false);

  
  React.useEffect(() => {
    setToProduct(addProduct(product));
  }, [product]);

  const onCubmit = (props) => {
    if (!!toProduct) {
      setToProduct('');
        props.onSubmit(toProduct);
    } else {
        window.alert('Enter name');
    }
}

  const onSubmit = e => {
    e.preventDefault();
    
    const products = JSON.parse(localStorage.getItem('products') || '[]');

    const data = {
      id: Math.floor(Math.random() * Math.floor(100000)),
      name: e.target.name.value,
      EAN: e.target.EAN.value,
      type: e.target.type.value,
      weight: e.target.weight.value,
      color: e.target.color.value,
      active: e.target.active.checked
    };

    products.unshift(data);
    // addProduct(product);
    localStorage.setItem('products', JSON.stringify(products));
    setToProduct(true);
  };

  return (
    <div className='create'>
      {toProduct ? <Redirect to='/products' /> : null}
      <h1>Create new product</h1>
      <Form onSubmit={onSubmit}>
        <Form.Label htmlFor='name'>Name</Form.Label>
        <Form.Control type='text' name='name' />
        <Form.Label htmlFor='name'>EAN</Form.Label>
        <Form.Control type='text' name='EAN' />
        <Form.Label htmlFor='name'>Type</Form.Label>
        <Form.Control type='text' name='type' />
        <Form.Label htmlFor='name'>Weight</Form.Label>
        <Form.Control type='text' name='weight' />
        <Form.Label htmlFor='name'>Color</Form.Label>
        <Form.Control type='text' name='color' />
        <div className='form-group form-check'>
          <input type='checkbox' className='form-check-input' name='active' />
          <Form.Label className='form-check-label' htmlFor='active'>
            Active
          </Form.Label>
        </div>
        <Button onClick={onCubmit} type='submit' className='btn btn-default mr-1 '>
          <span>Save</span>
        </Button>
        <Button 
        onClick={product.history.goBack}
         className='btn btn-danger'>
          <span>Cancel</span>
        </Button>
      </Form>
    </div>
  );
};

export default Create;
