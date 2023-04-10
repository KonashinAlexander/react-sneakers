import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Header({setShowDrawer, totalPrice}) {  
    return (
        <header className='d-flex justify-between align-center p-40 flex-wrap'>
          <Link to='/'>
            <div className="d-flex align-center">
            <img src='/images/logo.svg' alt='logo picture' width={40} height={40}/>
            <div>
              <h3 className="text-uppercase">React sneakers</h3>
              <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
            </div>    
          </Link>

          <ul className="d-flex cu-p">
            <li className="mr-30" onClick={()=>{setShowDrawer(true)}}>
              <img src='/images/basket.svg' alt='basket picture' width={18} height={18}/>
              <span>{totalPrice.toFixed(2)} руб.</span>
            </li>
            <li className="mr-30">
              <Link to='/favorites'><img src='/images/favorite.svg' alt='favorite picture' width={18} height={18} /></Link>
            </li>
            <li>
              <img src='/images/profile_icon.svg' alt='profile picture' width={18} height={18} />
            </li>
          </ul>
        </header>
    )
}

Header.propTypes = {
  setShowDrawer: PropTypes.func, 
  totalPrice: PropTypes.number, 
}


export default Header;