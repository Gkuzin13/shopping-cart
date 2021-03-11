import { v4 as uuid } from 'uuid';
import './Basket.css';
import { Link } from 'react-router-dom';

const Basket = ({ basketItems, removeItem }) => {
  const totalAmount = basketItems
    .map((item) => parseInt(item.price))
    .reduce(function (num1, num2) {
      return num1 + num2;
    }, 0);

  return (
    <div className='basket-ctn'>
      <h2 className='basket-heading'>
        {basketItems.length === 0 ? 'Your Basket is empty...' : 'Your Basket'}
      </h2>

      <h3
        className='basket-heading'
        style={
          basketItems.length === 0 ? { display: 'block' } : { display: 'none' }
        }
      >
        <Link to='/shop'>
          Go to <span style={{ color: 'green' }}>Market</span>
        </Link>
      </h3>

      <div
        className='basket-content-ctn'
        style={
          basketItems.length === 0 ? { display: 'none' } : { display: 'grid' }
        }
      >
        <div className='basket-items-ctn'>
          {basketItems.length === 0 ? (
            <div>Basket is empty</div>
          ) : (
            basketItems.map((item) => {
              return (
                <div className='basket-item' key={uuid()}>
                  <div className='basket-item-img-ctn'>
                    <img src={item.img} alt={item.altName} />
                  </div>
                  <div className='basket-item-details'>
                    <h2>{item.name}</h2>
                    <p>Ingredients: {item.ingredients}</p>
                    <p>Price: {item.price}$</p>
                    <div>
                      <label>Quantity: </label>
                      <input type='number' style={{ width: '3rem' }} />
                    </div>
                    <button
                      className='basket-remove-btn'
                      onClick={() => removeItem(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className='checkout-ctn'>
          <h1>Total: {totalAmount}$</h1>
          <button>
            Checkout <i className='fas fa-check'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
