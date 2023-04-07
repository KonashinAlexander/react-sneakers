// import 'macro-css';
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import cn from 'classnames';
import { API_URL, GET_CONFIG } from "./components/api";



function App() {

  const [showDrawer, setShowDrawer] = useState(false)
  const [items, setItems] = useState([])
  const [chosedItems, setChosedItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [searchValue, setSearchValue] = useState('')

  const getItemsFromServer = () => {
    fetch(`${API_URL}/items`, GET_CONFIG)
    .then(res => {if (res.ok) {return res.json()}})   
    .then(data => setItems(data))
    .catch(error => {console.log(error)}) 
  }

   const getChosedItemsFromServer = () => {
    fetch(`${API_URL}/chosedItems`, GET_CONFIG)
    .then(res => {if (res.ok) {return res.json()}})  
    .then(data => setChosedItems(data)) 
    .catch(error => {console.log(error)}) 
  }

  useEffect(()=>{
    getItemsFromServer()
    getChosedItemsFromServer()    
  },[])

  useEffect(()=>{    
    const total = chosedItems.map(item=>parseInt(item.price)).reduce((sum, current)=>{return sum + current},0)
    const amount = chosedItems.length
    setTotalPrice(total)
  }, [chosedItems])

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }
  
  const amount = chosedItems.length
  
  return (
    <main className="wrapper clear">
      {showDrawer && <Drawer setShowDrawer={setShowDrawer} 
                              chosedItems={chosedItems} 
                              setChosedItems={setChosedItems} 
                              totalPrice={totalPrice}
                              amount={amount}
                              refreshFunc={getChosedItemsFromServer}
                      />
      }
      <Header setShowDrawer={setShowDrawer} totalPrice={totalPrice}/>
 
      <section className="content p-40">
        <div className="d-flex align-center justify-between flex-wrap mb-40">
          <h1 className="ml-10">Все кроссовки</h1>
          <div className="search-block d-flex">
              <img src="/images/search.svg" alt="search" />
              <input type='text' onChange={handleInputChange} value={searchValue} placeholder="Поиск..."></input>
              {searchValue && <img onClick={()=>setSearchValue('')} 
                                    src='/images/button_remove.svg' 
                                    alt='remove button' 
                                    className={cn('mr-10')}
                              />}
          </div>
        </div>        

        <div className="d-flex flex-wrap">
          {items
              .filter(item=> item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item, index) => (
                <Card 
                  title={item.title} 
                  price={item.price} 
                  imageUrl={item.imageUrl}
                  key={index+item.price}
                  setChosedItems={setChosedItems}
                  refreshFunc={getChosedItemsFromServer}
                />
                ))
          }
        </div>       

      </section>
    </main>
  );
}

export default App;

