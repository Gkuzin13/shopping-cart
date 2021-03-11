import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Home from './components/Home';
import Basket from './components/Basket';
import { v4 as uuid } from 'uuid';

const App = () => {
  const [basketItems, setBasketItems] = useState([]);

  const addItemToBasket = (item) => {
    // Gives Item new ID so each new item
    // in the basket will have unique one.
    const newItem = {
      ...item,
      id: uuid(),
    };
    setBasketItems((oldItems) => oldItems.concat(newItem));
    console.log(newItem);
  };

  const removeItemFromBasket = (item) => {
    const newItems = basketItems.filter((items) => items.id !== item.id);
    setBasketItems(newItems);
    console.log(basketItems);
  };

  return (
    <Router>
      <Navbar basketItems={basketItems.length} />

      <Switch>
        <Route path='/' exact component={Home} />
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
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
