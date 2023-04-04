// import 'macro-css';

function App() {
  return (
    <main className="wrapper clear pos-r ">

      <div className='overlay'>
        <div className='drawer'>
          <h2 className='m-20'>Корзина
            <img src='/images/button_remove.svg' alt='remove button' className='cartItem-button_remove'></img>
          </h2>        

          <div className='items d-flex flex-column flex pr-10'>

            <div className='cartItem d-flex align-center mb-20'>
              <div className='cartItemImage' style={{backgroundImage: 'url(/images/sneakers/1.svg)'}}></div>
              {/* <img src="/images/sneakers/1.svg" alt='picture' width={70} height={70} className='mr-20'></img> */}
              <div className='mr-20 d-flex flex-wrap'>
                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img src='/images/button_remove.svg' alt='remove button' className='cartItem-button_remove mr-10'></img>
            </div>

            <div className='cartItem d-flex align-center mb-20'>
              <div className='cartItemImage' style={{backgroundImage: 'url(/images/sneakers/1.svg)'}}></div>
              {/* <img src="/images/sneakers/1.svg" alt='picture' width={70} height={70} className='mr-20'></img> */}
              <div className='mr-20 d-flex flex-wrap'>
                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img src='/images/button_remove.svg' alt='remove button' className='cartItem-button_remove mr-10'></img>
            </div>   

             <div className='cartItem d-flex align-center mb-20'>
              <div className='cartItemImage' style={{backgroundImage: 'url(/images/sneakers/1.svg)'}}></div>
              {/* <img src="/images/sneakers/1.svg" alt='picture' width={70} height={70} className='mr-20'></img> */}
              <div className='mr-20 d-flex flex-wrap'>
                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img src='/images/button_remove.svg' alt='remove button' className='cartItem-button_remove mr-10'></img>
            </div> 

             <div className='cartItem d-flex align-center mb-20'>
              <div className='cartItemImage' style={{backgroundImage: 'url(/images/sneakers/1.svg)'}}></div>
              {/* <img src="/images/sneakers/1.svg" alt='picture' width={70} height={70} className='mr-20'></img> */}
              <div className='mr-20 d-flex flex-wrap'>
                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img src='/images/button_remove.svg' alt='remove button' className='cartItem-button_remove mr-10'></img>
            </div> 

             <div className='cartItem d-flex align-center mb-20'>
              <div className='cartItemImage' style={{backgroundImage: 'url(/images/sneakers/1.svg)'}}></div>
              {/* <img src="/images/sneakers/1.svg" alt='picture' width={70} height={70} className='mr-20'></img> */}
              <div className='mr-20 d-flex flex-wrap'>
                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img src='/images/button_remove.svg' alt='remove button' className='cartItem-button_remove mr-10'></img>
            </div> 

             <div className='cartItem d-flex align-center mb-20'>
              <div className='cartItemImage' style={{backgroundImage: 'url(/images/sneakers/1.svg)'}}></div>
              {/* <img src="/images/sneakers/1.svg" alt='picture' width={70} height={70} className='mr-20'></img> */}
              <div className='mr-20 d-flex flex-wrap'>
                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img src='/images/button_remove.svg' alt='remove button' className='cartItem-button_remove mr-10'></img>
            </div> 

             <div className='cartItem d-flex align-center mb-20'>
              <div className='cartItemImage' style={{backgroundImage: 'url(/images/sneakers/1.svg)'}}></div>
              {/* <img src="/images/sneakers/1.svg" alt='picture' width={70} height={70} className='mr-20'></img> */}
              <div className='mr-20 d-flex flex-wrap'>
                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img src='/images/button_remove.svg' alt='remove button' className='cartItem-button_remove mr-10'></img>
            </div>         

          </div>

         


          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1 074 руб.</b>
              </li>
            </ul>
            <button className='greenButton'>Оформить заказ
              <img src='/images/arrow.svg' alt='arrow'></img>
            </button>
          </div>

        </div>
      </div>




      <header className='d-flex justify-between align-center p-40 flex-wrap'>
        <div className="d-flex align-center">
          <img src='/images/logo.svg' alt='logo picture' width={40} height={40}/>
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5"> Магазин лучших кроссовок</p>
          </div>
        </div>        
        <ul className="d-flex">
          <li className="mr-30">
            <img src='/images/basket.svg' alt='basket picture' width={18} height={18} />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src='/images/profile_icon.svg' alt='profile picture' width={18} height={18} />
          </li>
        </ul>
      </header>
 
      <section className="content p-40">

        <div className="d-flex align-center justify-between flex-wrap mb-40">
          <h1 className="ml-10">Все кроссовки</h1>
          <div className="search-block d-flex">
              <img src="/images/search.svg" alt="search" />
              <input placeholder="Поиск..."></input>
          </div>
        </div>
        

        <div className="d-flex flex-wrap">

          <div className="card">
            <button className="like-button">
                <img src="/images/heart-icon.svg" alt="heart icon" width={32} height={32}></img>
            </button>
            <img src="/images/sneakers/1.svg" alt="picture" width={133} height={112}></img>              
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>            
              <button className="add-button">
                <img src="/images/button_plus.svg" alt="add-button picture"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <button className="like-button">
              <img src="/images/heart-icon.svg" alt="heart icon" width={32} height={32}></img>
            </button>
            <img src="/images/sneakers/2.svg" alt="picture" width={133} height={112}></img>
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>            
              <button className="add-button">
                <img src="/images/button_plus.svg" alt="add-button picture"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <button className="like-button">
              <img src="/images/heart-icon.svg" alt="heart icon" width={32} height={32}></img>
            </button>
            <img src="/images/sneakers/3.svg" alt="picture" width={133} height={112}></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>            
              <button className="add-button">
                <img src="/images/button_plus.svg" alt="add-button picture"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <button className="like-button">
              <img src="/images/heart-icon.svg" alt="heart icon" width={32} height={32}></img>
            </button>
            <img src="/images/sneakers/4.svg" alt="picture" width={133} height={112}></img>
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>            
              <button className="add-button">
                <img src="/images/button_plus.svg" alt="add-button picture"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <button className="like-button">
              <img src="/images/heart-icon.svg" alt="heart icon" width={32} height={32}></img>
            </button>
            <img src="/images/sneakers/5.svg" alt="picture" width={133} height={112}></img>
            <h5>Мужские Кроссовки Under Armour Curry 8</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>9 999 руб.</b>
              </div>            
              <button className="add-button">
                <img src="/images/button_plus.svg" alt="add-button picture"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <button className="like-button">
              <img src="/images/heart-icon.svg" alt="heart icon" width={32} height={32}></img>
            </button>
            <img src="/images/sneakers/6.svg" alt="" width={133} height={112}></img>
            <h5>Мужские Кроссовки Nike Kyrie 7</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>6 999 руб.</b>
              </div>            
              <button className="add-button">
                <img src="/images/button_plus.svg" alt="add-button picture"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <button className="like-button">
              <img src="/images/heart-icon.svg" alt="heart icon" width={32} height={32}></img>
            </button>
            <img src="/images/sneakers/7.svg" alt="picture" width={133} height={112}></img>
            <h5>Мужские Кроссовки Jordan Air Jordan 11</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>            
              <button className="add-button">
                <img src="/images/button_plus.svg" alt="add-button picture"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <button className="like-button">
              <img src="/images/heart-icon.svg" alt="heart icon" width={32} height={32}></img>
            </button>
            <img src="/images/sneakers/8.svg" alt="picture" width={133} height={112}></img>
            <h5>Мужские Кроссовки Nike LeBron XVIII</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>10 499 руб.</b>
              </div>            
              <button className="add-button">
                <img src="/images/button_plus.svg" alt="add-button picture"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <button className="like-button">
              <img src="/images/heart-icon.svg" alt="heart icon" width={32} height={32}></img>
            </button>
            <img src="/images/sneakers/9.svg" alt="picture" width={133} height={112}></img>
            <h5>Мужские Кроссовки Nike Lebron XVIII Low</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>7 999 руб.</b>
              </div>            
              <button className="add-button">
                <img src="/images/button_plus.svg" alt="add-button picture"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <button className="like-button">
              <img src="/images/heart-icon.svg" alt="heart icon" width={32} height={32}></img>
            </button>
            <img src="/images/sneakers/10.svg" alt="picture" width={133} height={112}></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>            
              <button className="add-button">
                <img src="/images/button_plus.svg" alt="add-button picture"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <button className="like-button">
              <img src="/images/heart-icon.svg" alt="heart icon" width={32} height={32}></img>
            </button>
            <img src="/images/sneakers/11.svg" alt="picture" width={133} height={112}></img>
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>11 999 руб.</b>
              </div>            
              <button className="add-button">
                <img src="/images/button_plus.svg" alt="add-button picture"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <button className="like-button">
              <img src="/images/heart-icon.svg" alt="heart icon" width={32} height={32}></img>
            </button>
            <img src="/images/sneakers/12.svg" alt="picture" width={133} height={112}></img>
            <h5>Мужские Кроссовки Nike Kyrie Flytrap IV</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>15 999 руб.</b>
              </div>            
              <button className="add-button">
                <img src="/images/button_plus.svg" alt="add-button picture"></img>
              </button>
            </div>
          </div>

        
      </div>       

      </section>
    </main>
  );
}

export default App;
