import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, Redirect } from 'react-router-dom';

const Create = (props) => {
  // const [newProduct, setNewProduct] = React.useState(
  //   {
  //   id: Math.floor(Math.random() * Math.floor(100000)),
  //   name: props.name,
  //   EAN: props.EAN,
  //   type: props.type,
  //   weight: props.weight,
  //   color: props.color,
  //   active: props.active

  // }

  // );

  // const onChange = event => {
  //   setNewProduct(event.target.value);

  // }
  const [toProduct, setToProduct] = React.useState(false);

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
    localStorage.setItem('products', JSON.stringify(products));
    setToProduct(true);
  };

  return (
    <div>
      {toProduct ? <Redirect to='/products' /> : null}
      <h1>Create</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' />
        <label htmlFor='name'>EAN</label>
        <input type='text' name='EAN' />
        <label htmlFor='name'>Type</label>
        <input type='text' name='type' />
        <label htmlFor='name'>Weight</label>
        <input type='text' name='weight' />
        <label htmlFor='name'>Color</label>
        <input type='text' name='color' />
        <div className='form-group form-check'>
          <input type='checkbox' className='form-check-input' name='active' />
          <label className='form-check-label' htmlFor='active'>
            Active
          </label>
        </div>
        <Button type='submit' className='btn btn-info mb-1'>
          <span>Save</span>
        </Button>
        <Button onClick={props.history.goBack} className='btn btn-info mb-1'>
          <span>Cancel</span>
        </Button>
      </form>
    </div>
  );
};

export default Create;
