import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div className='flatlay-img-main'>
        <div className='home-heading'>
          <h1>
            Live Well<span style={{ fontWeight: '100' }}> Your Way</span>
          </h1>
        </div>
      </div>
      <div className='bar'></div>
      <div className='home-info'>
        <h2 style={{ paddingBottom: '1rem' }}>Delicious smoothies</h2>
        <h2>
          Made from <span style={{ color: 'green' }}>organic</span> fruits and
          vegetables
        </h2>
        <Link to='/shop'>
          <button className='home-order-btn'>Go To Market</button>
        </Link>
        <div className=''></div>
      </div>

      <div className='border' />

      <footer>
        <div>
          <h3>Contact</h3>
          <div className='footer-info-ctn'>
            <div className='info-item'>
              <i className='fas fa-home'></i>
              &nbsp;&nbsp;Rothschild Boulvard 18, Tel Aviv
            </div>
            <div className='info-item'>
              <i className='fas fa-phone'></i>
              &nbsp;&nbsp;03-6549836
            </div>
            <div className='info-item'>
              <i className='fas fa-envelope'></i>
              &nbsp;&nbsp;feedback@tari.com
            </div>
          </div>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div className='footer-social-ctn'>
            <i className='fab fa-facebook-square'></i>
            <i className='fab fa-instagram-square'></i>
            <i className='fab fa-youtube-square'></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
