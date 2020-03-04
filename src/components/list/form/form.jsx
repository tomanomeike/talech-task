import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './form.css';

const Form = props => {
  const [title, setTitle] = React.useState(props.defaultValue);

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const onSubmit = () => {
    if (!title) {
      return;
    }

    setTitle('');
    props.onSubmit(title);
  };

  return (
    <div className='form'>
      {!!props.title && <h2>{props.title}</h2>}
      <input
        type='text'
        placeholder='Title'
        onChange={handleChange}
        value={title}
      />
      <Button onClick={onSubmit}>{props.buttonLabel}</Button>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  defaultValue: PropTypes.string
};

Form.defaultProps = {
  buttonLabel: 'Add',
  defaultValue: ''
};

export default Form;
