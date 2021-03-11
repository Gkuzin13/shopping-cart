import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ basketItems }) => {
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
          <li>
            <NavLink to='/cart'>
              Basket{' '}
              <strong style={{ color: 'green' }}>{`(${basketItems})`}</strong>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
