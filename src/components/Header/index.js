function Header({setShowDrawer, totalPrice}) {  
    return (
        <header className='d-flex justify-between align-center p-40 flex-wrap'>
        <div className="d-flex align-center">
          <img src='/images/logo.svg' alt='logo picture' width={40} height={40}/>
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5"> Магазин лучших кроссовок</p>
          </div>
        </div>        
        <ul className="d-flex cu-p" onClick={()=>{setShowDrawer(true)}}>
          <li className="mr-30">
            <img src='/images/basket.svg' alt='basket picture' width={18} height={18} />
            <span>{totalPrice} руб.</span>
          </li>
          <li>
            <img src='/images/profile_icon.svg' alt='profile picture' width={18} height={18} />
          </li>
        </ul>
      </header>
    )
}

export default Header;