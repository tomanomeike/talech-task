import React from 'react';

const ProductDetail = ({ item}) => {
  const createDescMarkup = description => {
    return { __html: description };
  };
  return (
    <div>
      <h3>
        <strong>Title:</strong>
      </h3>
      {/* <div dangerouslySetInnerHTML={createDescMarkup(item.description)} /> */}
    </div>
  );
};

export default ProductDetail;
