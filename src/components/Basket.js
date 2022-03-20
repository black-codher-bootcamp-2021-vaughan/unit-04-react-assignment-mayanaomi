import React  from 'react';
import Product from './Product';
import BasketTotal from './BasketTotal';
import BasketCount from './BasketCount';

const Basket = ({basket,basketCount,basketTotal,...props}) => {
  const { BasketItems} = props;
  return (
    <div>
        <h1>Basket</h1>
        <BasketCount basketCount={basketCount}/>
          <div>
             {BasketItems.length === 0 && <div>No items here</div>}
             </div>
        <BasketTotal basketTotal={basketTotal}/>
    </div>
  );
}


export default Basket;