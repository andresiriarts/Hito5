
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;
  const token = true;

  return (
    <div className="menu">
      <ul className="cont-menu">
      Pizzería Mamma Mia!
        <li className="list"><Link to='/'>🍕 Home </Link></li>
        
        {token ? (
          <>
            <li className="list"><Link to='/profile'>🔓 Profile</Link></li>
            <li className="list"><Link to='/'>🔒 Logout</Link></li>
          </>
        ) : (
          <>
            <li className="list"><Link to='/login'>🔐 Login</Link></li>
            <li className="list"><Link to='/register'>🔐 Register</Link></li>
          </>
        )}
      </ul>
      <p className="total"><Link to='/cart'>🛒 Total:</Link> ${total.toLocaleString("es-CL")}</p>
    </div>
  );
};

export default Navbar;
