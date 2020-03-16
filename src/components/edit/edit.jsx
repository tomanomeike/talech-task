import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Edit = props => {
  const { id } = useParams();
  const [newProduct, setNewProduct] = React.useState(false);
  const [inputValue, setInputValue] = React.useState({
    name: '',
    EAN: '',
    type: '',
    weight: '',
    color: '',
    active: ''
  });

  React.useEffect(() => {
    const productList = JSON.parse(localStorage.getItem('products'));
    const oneProduct = productList.filter(product => product.id === Number(id));
    setInputValue(oneProduct[0]);
  }, [id]);

  const onSubmit = e => {
    e.preventDefault();
    const productList = JSON.parse(localStorage.getItem('products'));
    const products = productList.filter(product => product.id !== Number(id));

    const editedProduct = {
      id,
      ...inputValue
    };

    const editedProductList = [editedProduct, ...products];
    localStorage.setItem('products', JSON.stringify(editedProductList));
    setNewProduct(true);
  };

  const onChange = e => {
    if (e.currentTarget.type === 'checkbox') {
      setInputValue({
        ...inputValue,
        [e.currentTarget.name]: e.currentTarget.checked
      });
    } else
      setInputValue({
        ...inputValue,
        [e.currentTarget.name]: e.currentTarget.value
      });
  };

  return (
    <>
      {newProduct ? <Redirect to='/products' /> : null}
      <h1>Edit a product</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          onChange={onChange}
          value={inputValue.name}
        />
        <label htmlFor='name'>EAN</label>
        <input
          type='text'
          name='EAN'
          onChange={onChange}
          value={inputValue.EAN}
        />
        <label htmlFor='name'>Type</label>
        <input
          type='text'
          name='type'
          onChange={onChange}
          value={inputValue.type}
        />
        <label htmlFor='name'>Weight</label>
        <input
          type='text'
          name='weight'
          onChange={onChange}
          value={inputValue.weight}
        />
        <label htmlFor='name'>Color</label>
        <input
          type='text'
          name='color'
          onChange={onChange}
          value={inputValue.color}
        />
        <div className='form-group form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            name='active'
            onChange={onChange}
          />
          <label className='form-check-label' htmlFor='active'>
            Active
          </label>
        </div>

        <Button type='submit' className='btn btn-info'>
          <span>Save</span>
        </Button>

        <Button className='btn btn-info mb-1' onClick={props.history.goBack}>
          <span>Cancel</span>
        </Button>
      </form>
    </>
  );
};
export default Edit;
