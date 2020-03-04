import React from 'react';

import Item from '../list/item/item';

const Show = ({ match }) => {
  const [item, setItem] = React.useState(null);
  const {
    params: { id }
  } = match;

  return (
    <div>
      Product details page ID <strong>{id}</strong>
    </div>
  );
};

export default Show;
