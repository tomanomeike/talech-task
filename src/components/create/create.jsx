import React from 'react';
import Button from 'react-bootstrap/Button';
import useProducts from '../../storage/use-products';
import Form from 'react-bootstrap/Form';
import './create.css';

const Create = props => {
  const { addProduct } = useProducts();
  const [errors, setErrors] = React.useState(null);

  const onSubmit = e => {
    e.preventDefault();

    const errors ={};
    const name = e.target.name.value;
    const EAN = e.target.EAN.value;
    const type = e.target.type.value;
    const weight = e.target.weight.value;
    const color = e.target.color.value;
    const active =  e.target.active.checked;

    if (name === undefined || name=== null || name=== ''){
      errors.name ="*Name is required"
    }
   if (EAN === undefined || EAN=== null || EAN=== ''){
      errors.EAN ="*EAN is required"
    }
    if (type === undefined || type=== null || type=== ''){
      errors.type ="*Type is required"
    }
    if (weight === undefined || weight=== null || weight=== ''){
      errors.weight ="*Weight is required"
    }
    if (color === undefined || color=== null || color=== ''){
      errors.color ="*Color is required"
    }
   




    if (Object.keys(errors).length){
      setErrors(errors);
      return;
    } else{
      setErrors(null);
    }
    

    const data = {
      id: Math.floor(Math.random() * Math.floor(100000)),
      name,
      EAN,
      type,
      weight,
      color,
      active
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
        <div>{errors && errors.name && <span>{errors.name}</span>}</div>
        <Form.Label htmlFor='name'>EAN</Form.Label>
        <Form.Control type='text' name='EAN' />
        <div>{errors && errors.EAN && <span>{errors.EAN}</span>}</div>
        <Form.Label htmlFor='name'>Type</Form.Label>
        <Form.Control type='text' name='type' />
        <div>{errors && errors.type && <span>{errors.type}</span>}</div>
        <Form.Label htmlFor='name'>Weight</Form.Label>
        <Form.Control type='text' name='weight' />
        <div>{errors && errors.weight && <span>{errors.weight}</span>}</div>
        <Form.Label htmlFor='name'>Color</Form.Label>
        <Form.Control type='text' name='color' />
        <div>{errors && errors.color && <span>{errors.color}</span>}</div>
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
