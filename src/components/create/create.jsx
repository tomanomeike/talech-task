import React from 'react';
import Form from '../list/form/form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Create = props => {
  const createNew = props => {
    props.create({ id: new Date().getTime() });
  };

  return (
    <div>
      <Form />
      {/* <button onClick={createNew}>Create</button>
            <div>
                <button onClick={props.history.goBack}>
                    Go back
                </button>
            </div> */}
      {/* <Form onSubmit={createNew} title='Add new List' /> */}
      <div>
        {/* <Button disabled={store.length <= 1} onClick={undo}>
          Undo
        </Button> */}
      </div>
    </div>
  );
};

export default Create;
