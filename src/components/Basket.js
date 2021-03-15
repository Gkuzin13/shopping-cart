import { v4 as uuid } from 'uuid';
import './Basket.css';
import { Link } from 'react-router-dom';

const Basket = ({
  basketItems,
  removeItem,
  handleInputChange,
  incrementQuantity,
  decrementQuantity,
}) => {
  const totalAmount = basketItems
    .map((item) => parseInt(item.price * item.quantity))
    .reduce(function (num1, num2) {
      return num1 + num2;
    }, 0);

  console.log(basketItems);

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
            basketItems.map((item, index) => {
              return (
                <div className='basket-item' key={uuid()}>
                  <div className='basket-item-img-ctn'>
                    <img src={item.img} alt={item.altName} />
                  </div>
                  <div className='basket-item-details'>
                    <h2>{item.name}</h2>
                    <p>
                      <strong>Ingredients:</strong> {item.ingredients}
                    </p>
                    <p>
                      <strong>Price:</strong> {item.price}$
                    </p>
                    <div className='quantity-ctn'>
                      <button
                        type='button'
                        className='quantity-btn'
                        onClick={() => decrementQuantity(index)}
                      >
                        <i className='fas fa-minus'></i>
                      </button>
                      <input
                        type='number'
                        value={item.quantity}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                      <button
                        type='button'
                        className='quantity-btn'
                        onClick={() => incrementQuantity(index)}
                      >
                        <i className='fas fa-plus'></i>
                      </button>
                    </div>
                    <button
                      type='button'
                      className='basket-remove-btn'
                      onClick={() => removeItem(item)}
                    >
                      Delete
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
