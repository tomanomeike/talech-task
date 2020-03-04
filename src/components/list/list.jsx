import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from './item/item';
import Form from '../list/form/form';
import TableRow from 'react-bootstrap/Table';
import TableHead from 'react-bootstrap/Table';

// import "./List-app.css";

const inititalList = [
  {
    id: 1,
    title: 'Pasta',
    ean: new Date().getTime(),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 2,
    title: 'Potatoes',
    ean: new Date().getTime(),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 3,
    title: 'Meat',
    ean: new Date().getTime(),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 4,
    title: 'Oil',
    ean: new Date().getTime(),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 5,
    title: 'Fish',
    ean: new Date().getTime(),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 6,
    title: 'Milk',
    ean: new Date().getTime(),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 7,
    title: 'Butter',
    ean: new Date().getTime(),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 8,
    title: 'Eggs',
    ean: new Date().getTime(),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 9,
    title: 'Legumes',
    ean: new Date().getTime(),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 10,
    title: 'Yogurt',
    ean: new Date().getTime(),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  }
];

const List = props => {
  const [lists, setLists] = React.useState(inititalList);
  const [store, setStore] = React.useState([inititalList]);

  const handleListChange = updatedLists => {
    setStore([...store, updatedLists]);
    setLists(updatedLists);
  };

  const toggleList = id => {
    const updatedLists = lists.map(list => ({
      ...list,
      checked: id === list.id ? !list.checked : list.checked
    }));

    handleListChange(updatedLists);
  };

  const addList = title => {
    handleListChange([
      ...lists,
      { id: new Date().getTime(), title, checked: false }
    ]);
  };

  const deleteList = id => {
    handleListChange(lists.filter(list => list.id !== id));
  };

  const updateList = (id, title) => {
    handleListChange(
      lists.map(list => ({
        ...list,
        title: list.id === id ? title : list.title
      }))
    );
  };

  const undo = () => {
    const storeCopy = [...store];

    storeCopy.pop();

    setLists(storeCopy[storeCopy.length - 1]);
    setStore([...storeCopy]);
  };

  return (
    <div className='list-app'>
      <h1>{props.title}</h1>

      <TableHead>
        <TableRow>
          <th>Name</th>
          <th>EAN</th>
          <th>Type</th>
          <th>Weight</th>
          <th>Color</th>
          <th>Active</th>
        </TableRow>
      </TableHead>

      {lists.map(list => (
        <TableRow>
          <Item
            key={list.id}
            id={list.id}
            title={list.title}
            ean={list.ean}
            type={list.type}
            weight={list.weight}
            color={list.color}
            checked={list.checked}
            toggleList={toggleList}
            deleteList={deleteList}
            updateList={updateList}
          />
        </TableRow>
      ))}

      <Link to='/products/create'>Create new</Link>
      {/* <ul>
                {lists.map((item) => (
                    <li key={item.id}>
                        <Link to={`/products/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul> */}
      <Form onSubmit={addList} title='Add new List' />
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string
};

List.defaultProps = {
  title: 'My first List app'
};

export default List;
