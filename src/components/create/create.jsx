import React from 'react';
import Button from 'react-bootstrap/Button';


const Create = props => {
  const [newProduct, setNewProduct] = React.useState(
    {
    id: Math.floor(Math.random() * Math.floor(100000)),
    name: props.name,
    EAN: props.EAN,
    type: props.type,
    weight: props.weight,
    color: props.color,
    active: props.active
    
  }
 
  );
 
  const onChange = event => {
    setNewProduct(event.target.value);
  
  }


  return (
    <div>
      {/* {props ? <Redirect to='/products' /> : null} */}
      <form onChange={onChange}> 
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' value={props.name} />
        <label htmlFor='name'>EAN</label>
        <input type='text' name='EAN' value={props.EAN}  />
        <label htmlFor='name'>Type</label>
        <input type='text' name='type' value={props.type}/>
        <label htmlFor='name'>Weight</label>
        <input type='text' name='weight' value={props.weight} />
        <label htmlFor='name'>Color</label>
        <input type='text' name='color' value={props.color}/>
        <div className='form-group form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            name='active'
            value={props.active}
          />
          <label className='form-check-label' htmlFor='active'>
            Active
          </label>
        </div>
        <Button type='submit' className='btn btn-info mb-1' >
          <span>Save</span>
        </Button>
        <Button className='btn btn-info mb-1' onClick={props.history.goBack}>
          <span>Cancel</span>
        </Button>
      </form>
    </div>
  );
};

export default Create;
