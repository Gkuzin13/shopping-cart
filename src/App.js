import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Home from './components/Home';
import Basket from './components/Basket';

const App = () => {
  const [basketItems, setBasketItems] = useState([]);

  const incrementQuantity = (index) => {
    const newItems = [...basketItems];

    newItems[index].quantity++;

    setBasketItems(newItems);
  };

  const decrementQuantity = (index) => {
    const newItems = [...basketItems];

    newItems[index].quantity--;

    setBasketItems(newItems);
  };

  const addItemToBasket = (selectedItem) => {
    // Adds quantity to matched item if it isn't in the basket
    const newItems = basketItems.map((items) => {
      const itemsCopy = { ...items };

      if (itemsCopy.id === selectedItem.id) {
        itemsCopy.quantity++;
      }

      return itemsCopy;
    });

    // If item isn't in the basket, adds the selected item
    if (
      !newItems.some((item) => {
        return item.id === selectedItem.id;
      })
    ) {
      setBasketItems((oldItems) => [...oldItems, selectedItem]);
    } else {
      setBasketItems(newItems);
    }

    console.log(basketItems);
  };

  const removeItemFromBasket = (selectedItem) => {
    const newItems = [...basketItems].filter(
      (items) => items.id !== selectedItem.id
    );

    setBasketItems(newItems);

    if (newItems.length === 0) {
      setBasketItems(newItems);
    }
  };

  const handleInputChange = (index, e) => {
    const newItems = [...basketItems];

    newItems[index].quantity = e.target.value;

    setBasketItems(newItems);
  };

  return (
    <Router basename='/'>
      <Navbar basketItems={basketItems} />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/shop'
          render={() => <Shop addItemToBasket={addItemToBasket} />}
        />
        <Route
          path='/cart'
          render={() => (
            <Basket
              basketItems={basketItems}
              removeItem={removeItemFromBasket}
              handleInputChange={handleInputChange}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
