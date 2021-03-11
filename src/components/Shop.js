import React from 'react';
import { useState } from 'react';
import './Shop.css';
import Data from './Data';

const Shop = ({ addItemToBasket }) => {
  const [itemId, setItemId] = useState('');

  return (
    <div className='shop-content'>
      <h2 className='shop-heading'>Our Smoothies</h2>
      <h3 className='shop-heading'>
        Made from <span style={{ color: 'green' }}> Organic</span> Fruits and
        Vegetables
      </h3>

      <div className='shop-items-ctn'>
        {Data.map((item) => {
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
                  <div>
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
