import React from 'react';

const Product = (props) => {
  const { trackName, trackPrice, borderColour } = props;
  console.log("This is your song title",trackName);
  return (
  <div style={{border: '10px solid ${borderColour}'}}>
    <p>{trackName}</p>
    <p>{trackPrice}</p>
  </div>
  );
};

export default Product;
