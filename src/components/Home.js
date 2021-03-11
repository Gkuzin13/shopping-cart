import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div className='flatlay-img-main'>
        <di className='home-heading'>
          <h1>
            Live Well<span style={{ fontWeight: '100' }}> Your Way</span>
          </h1>
        </di>
      </div>
      <div className='bar'></div>
      <div className='home-info'>
        <h1 style={{ paddingBottom: '1rem' }}>Delicious Smoothies</h1>
        <h2>
          Made From <span style={{ color: 'green' }}>Organic</span> Fruits and
          Vegetables
        </h2>
        <Link to='/shop'>
          <button className='home-order-btn'>Order Now!</button>
        </Link>
        <div className=''></div>
      </div>

      <footer>
        <div>
          <h3>Contact</h3>
          <p className='footer-info-ctn'>
            <div className='info-item'>
              <i class='fas fa-home'></i>
              &nbsp;&nbsp;Rothschild Boulvard 18, Tel Aviv
            </div>
            <div className='info-item'>
              <i class='fas fa-phone'></i>
              &nbsp;&nbsp;03-6549836
            </div>
            <div className='info-item'>
              <i class='fas fa-envelope'></i>
              &nbsp;&nbsp;feedback@tari.com
            </div>
          </p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div className='footer-social-ctn'>
            <i class='fab fa-facebook-square'></i>
            <i class='fab fa-instagram-square'></i>
            <i class='fab fa-youtube-square'></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
