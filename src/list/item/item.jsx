import React from 'react';
import PropTypes from 'prop-types';
import Form from './../form/form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './item.css';

const Item = React.memo(props => {
  const [editing, setEditing] = React.useState(false);

  const className = props.checked ? 'item active' : 'item';

  const onClickList = () => {
    props.toggleList(props.id);
  };

  const onClickDelete = () => {
    if (window.confirm('Are you sure?')) {
      props.deleteList(props.id);
    }
  };

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const submitEdit = title => {
    toggleEdit();
    props.updateList(props.id, title);
  };

  const renderContent = () => {
    if (editing) {
      return (
        <React.Fragment>
          <div className='content'>
            <Form
              onSubmit={submitEdit}
              defaultValue={props.title}
              buttonLabel='Save'
            />
          </div>
          <div className='actions'>
            <Button onClick={toggleEdit}>Cancel edit</Button>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <tr className='content'>
          <td>{props.title}</td>
          <td>{props.ean}</td>
          <td>{props.type}</td>
          <td>{props.weight}</td>
          <td>{props.color}</td>
          <td>
            {' '}
            <input
              onChange={onClickList}
              type='checkbox'
              checked={props.checked}
            />
          </td>

          <td className='actions'>
            <Link to={`/products/${props.id}`}>
              <Button variant='secondary'>View</Button>
            </Link>
            <Button onClick={toggleEdit}>Edit</Button>
            <Button variant='danger' onClick={onClickDelete}>
              Delete
            </Button>
          </td>
        </tr>
      </React.Fragment>
    );
  };

  return <div className={className}>{renderContent()}</div>;
});

Item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  toggleList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  updateList: PropTypes.func.isRequired
};

export default Item;
