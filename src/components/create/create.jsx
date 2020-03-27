import React from 'react';
import Button from 'react-bootstrap/Button';
import useProducts from '../../storage/use-products';
import Form from 'react-bootstrap/Form';
import './create.css';

const Create = props => {
  const { addProduct } = useProducts();

  const onSubmit = e => {
    e.preventDefault();

    const data = {
      id: Math.floor(Math.random() * Math.floor(100000)),
      name: e.target.name.value,
      EAN: e.target.EAN.value,
      type: e.target.type.value,
      weight: e.target.weight.value,
      color: e.target.color.value,
      active: e.target.active.checked
    };

    addProduct(data);
    props.history.push('/products');
  };

  return (
    <div className='create'>
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
        <Button type='submit' className='btn btn-default mr-1 '>
          <span>Save</span>
        </Button>
        <Button onClick={props.history.goBack} className='btn btn-danger'>
          <span>Cancel</span>
        </Button>
      </Form>
    </div>
  );
};

export default Create;
