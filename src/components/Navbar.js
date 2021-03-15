import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ basketItems }) => {
  const totalItems = [...basketItems]
    .map((items) => items.quantity)
    .reduce((num1, num2) => {
      return num1 + num2;
    }, 0);

  return (
    <div>
      <nav>
        <NavLink to='/'>
          <div className='logo'>
            <i className='fas fa-seedling'></i>
            <h1>Tari</h1>
          </div>
        </NavLink>

        <ul className='nav-items-ctn'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/shop'>Market</NavLink>
          </li>
          <li className='nav-basket-ctn'>
            <NavLink to='/cart'>Basket </NavLink>
            <span className='nav-item-count'>
              {basketItems.length === 0 ? 0 : totalItems}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
