import React from 'react';
// import Form from '../list/form/form';
import Button from 'react-bootstrap/Button';
import { Link, Redirect } from 'react-router-dom';

const Create = () => {
  const [toProduct, setToProduct] = React.useState(false);

  const InsertItem = e => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem('store') || '[]');
    const data = {
      id: new Date().getTime() + 1,
      name: toProduct.name,
      EAN: toProduct.EAN,
      type: toProduct.type,
      weight: toProduct.weight,
      color: toProduct.color,
      active: toProduct.active
    };
    products.unshift(data);
    localStorage.setToProduct('store', JSON.stringify(products));
    setToProduct(true);
  };

  const onChange = e => {
    e.persist();

    setToProduct({
      ...toProduct,
      [e.target.name]: e.target.value,
      [e.target.EAN]: e.target.value,
      [e.target.type]: e.target.value,
      [e.target.weight]: e.target.value,
      [e.target.color]: e.target.value,
      [e.target.active]: e.target.checked,
  
    });
  };

  return (
    <div>
      {toProduct ? <Redirect to='/products' /> : null}
      <form onSubmit={InsertItem}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          // id='name'
          // placeholder='name'
          // value={item.name}
          // onChange={onChange}
        />
        <label htmlFor='name'>EAN</label>
        <input
          type='text'
          name='EAN'
          // id='EAN'
          // placeholder='EAN'
          // value={item.Ean}
          // onChange={onChange}
        />
        <label htmlFor='name'>Type</label>
        <input
          type='text'
          name='type'
          // id='Type'
          // // placeholder='Type'
          // value={toProduct.Type}
          // onChange={onChange}
        />
        <label htmlFor='name'>Weight</label>
        <input
          type='text'
          name='weight'
          // id='Weight'
          // placeholder='Weight'
          // value={item.Weight}
          // onChange={onChange}
        />
        <label htmlFor='name'>Color</label>
        <input
          type='text'
          name='color'
          // id='Color'
          // placeholder='Color'
          // value={item.Color}
          // onChange={onChange}
        />
        <div className='form-group form-check'>
          <input type='checkbox' className='form-check-input' name='active' />
          <label className='form-check-label' htmlFor='active'>
            Active
          </label>
        </div>
        <Button type='submit' className='btn btn-info mb-1' block>
          <span>Save</span>
        </Button>
        <Button className='btn btn-info mb-1' block>
          <span>Cancel</span>
        </Button>
      </form>
    </div>
  );
};

export default Create;


  
