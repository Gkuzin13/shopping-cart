import React from 'react';
import { useState } from 'react';
import './Shop.css';
import Data from './Data';

const Shop = ({ addItemToBasket }) => {
  const [itemId, setItemId] = useState('');
  const smoothies = [...Data];
  console.log();
  return (
    <div className='shop-content'>
      <h2 className='shop-heading'>Our smoothies</h2>
      <h3 className='shop-heading'>
        Made from <span style={{ color: 'green' }}> organic</span> fruits and
        vegetables
      </h3>

      <div className='shop-items-ctn'>
        {[...smoothies].map((item) => {
          return (
            <div
              key={item.id}
              id={item.id}
              className='item-container'
              onMouseEnter={(e) => setItemId(e.currentTarget.id)}
              onMouseLeave={() => setItemId('')}
            >
              <div className='shop-item'>
                <img
                  src={item.img}
                  style={
                    item.id === itemId ? { transform: 'scale(1.025)' } : null
                  }
                  className='shop-item-img'
                  alt={item.altName}
                />
                <div
                  className={
                    item.id === itemId
                      ? 'shop-item-options show'
                      : 'shop-item-options'
                  }
                  id={item.id}
                >
                  <div className='item-desc'>
                    <h3>Ingredients: </h3>
                    <p>{item.ingredients}</p>
                  </div>

                  <button
                    className='shop-add-item'
                    onClick={() => addItemToBasket(item)}
                  >
                    Add To Basket
                  </button>
                </div>
              </div>
              <div className='item-info-ctn'>
                <h4>{item.price}$</h4>
                <h4 className='shop-item-title'>{item.name}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
