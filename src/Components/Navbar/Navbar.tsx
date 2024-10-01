import './Navbar.css';
import logo from '../../assets/logo.png';
import cart_logo from '../../assets/cart-icon.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu, setmenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='logo' />
        <p>Mart</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => { setmenu("shop") }}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>

        <li onClick={() => { setmenu("men") }}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu === "men" ? <hr /> : <></>}</li>

        <li onClick={() => { setmenu("women") }}><Link style={{textDecoration:'none'}} to="womens">Women</Link>{menu === "women" ? <hr /> : <></>}</li>

        <li onClick={() => { setmenu("kids") }}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
        
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        
        <Link to='/cart'><img src={cart_logo} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>


  )
}

export default Navbar;
