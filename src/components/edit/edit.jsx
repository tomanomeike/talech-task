import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useProducts from '../../storage/use-products';
import './edit.css';

const Edit = (props) => {
  const { id } = useParams();
  const [newProduct, setNewProduct] = React.useState(false);
  const [inputValue, setInputValue] = React.useState({
    name: '',
    EAN: '',
    type: '',
    weight: '',
    color: '',
    quantity: '',
    price: '',
    active: '',
  });
  const { getProductById } = useProducts();
  React.useEffect(() => {
    setInputValue(getProductById(id));
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    const productList = JSON.parse(localStorage.getItem('products'));
    const products = productList.filter((product) => product.id !== Number(id));
    const priceHistoryLength= productList.map((product)=>(product.priceHistory.length));
  
    const editedProduct = {
      id,
      ...inputValue,
      priceHistory: [...inputValue.priceHistory, inputValue.price],
      quantityHistory: [...inputValue.quantityHistory, inputValue.quantity]
    };

    // if (priceHasChanged) {
    //   // add to array new price

      // if (priceHistory.length > 5) {
      //   priceHistory.pop();
      // }
      //  array is larger than X, remove last item from array
    // }

    if (inputValue.priceHistory[0]===inputValue.priceHistory[4]){
      inputValue.priceHistory.push();
      if(priceHistoryLength>5){
        inputValue.priceHistory.shift()
     
      }
    }
    console.log(inputValue.priceHistory)


    const editedProductList = [editedProduct, ...products];
    localStorage.setItem('products', JSON.stringify(editedProductList));
    setNewProduct(true);
  };

  const onChange = (e) => {
    if (e.currentTarget.type === 'checkbox') {
      setInputValue({
        ...inputValue,
        [e.currentTarget.name]: e.currentTarget.checked,
      });
    } else
      setInputValue({
        ...inputValue,
        [e.currentTarget.name]: e.currentTarget.value,
      });
  };

  return (
    <div className='edit'>
      {newProduct ? <Redirect to='/products' /> : null}
      <h1>Edit a product</h1>
      <Form onSubmit={onSubmit}>
        <Form.Label htmlFor='name'>Name</Form.Label>
        <Form.Control
          type='text'
          name='name'
          onChange={onChange}
          value={inputValue.name}
        />
        <Form.Label htmlFor='name'>EAN</Form.Label>
        <Form.Control
          type='text'
          name='EAN'
          onChange={onChange}
          value={inputValue.EAN}
        />
        <Form.Label htmlFor='name'>Type</Form.Label>
        <Form.Control
          type='text'
          name='type'
          onChange={onChange}
          value={inputValue.type}
        />
        <Form.Label htmlFor='name'>Weight</Form.Label>
        <Form.Control
          type='text'
          name='weight'
          onChange={onChange}
          value={inputValue.weight}
        />
        <Form.Label htmlFor='name'>Color</Form.Label>
        <Form.Control
          type='text'
          name='color'
          onChange={onChange}
          value={inputValue.color}
        />
        <Form.Label htmlFor='name'>Quantity</Form.Label>
        <Form.Control
          type='text'
          name='quantity'
          onChange={onChange}
          value={inputValue.quantity}
        />
        <Form.Label htmlFor='name'>Price</Form.Label>
        <Form.Control
          type='text'
          name='price'
          onChange={onChange}
          value={inputValue.price}
        />
        <div className='form-group form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            name='active'
            onChange={onChange}
          />
          <Form.Label className='form-check-label' htmlFor='active'>
            Active
          </Form.Label>
        </div>

        <Button type='submit' className='btn btn-primary mr-2'>
          <span>Save</span>
        </Button>

        <Button className='btn btn-danger' onClick={props.history.goBack}>
          <span>Cancel</span>
        </Button>
      </Form>
    </div>
  );
};
export default Edit;
