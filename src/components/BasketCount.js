import React from 'react';

const BasketCount = (props) => {

  return (
    <div>
      {props.basketCount} item{props.basketCount!==1?"s":""}
    </div>
  );
}

export default BasketCount;