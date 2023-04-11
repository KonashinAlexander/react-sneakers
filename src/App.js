import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import cn from 'classnames';
import { API_URL, GET_CONFIG } from "./components/api";
import { Home } from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";

function App() {

  const [showDrawer, setShowDrawer] = useState(false);
  const [items, setItems] = useState([]);
  const [chosedItems, setChosedItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  const getItemsFromServer = () => {
  fetch(`${API_URL}/items`, GET_CONFIG)
  .then(res => {if (res.ok) {return res.json()}})   
  .then(data => setItems(data))
  .catch(error => {console.log(error)}) 
  };

  const getChosedItemsFromServer = () => {
  fetch(`${API_URL}/chosedItems`, GET_CONFIG)
  .then(res => {if (res.ok) {return res.json()}})  
  .then(data => setChosedItems(data)) 
  .catch(error => {console.log(error)}) 
  };

  useEffect(()=>{
    getItemsFromServer()
    getChosedItemsFromServer()    
  },[]);

  useEffect(()=>{    
    const total = chosedItems.map(item=>parseInt(item.price)).reduce((sum, current)=>{return sum + current},0)
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
                              setFavoriteItems={setFavoriteItems}
                              totalPrice={totalPrice}
                              amount={amount}
                              refreshFunc={getChosedItemsFromServer}
                      />
      }
      <Header setShowDrawer={setShowDrawer} totalPrice={totalPrice}/>

      <Routes>
        <Route path='/' element={<Home searchValue={searchValue} 
                                        Card={Card} 
                                        setChosedItems={setChosedItems} 
                                        setFavoriteItems={setFavoriteItems}
                                        getChosedItemsFromServer={getChosedItemsFromServer}
                                        handleInputChange={handleInputChange} 
                                        setSearchValue={setSearchValue}
                                        chosedItems={chosedItems} 
                                        items={items}  />}/>
                                        
        <Route path='/favorites' element={<Favorites favoriteItems={favoriteItems} 
                                                      searchValue={searchValue}  
                                                      Card={Card} 
                                                      setChosedItems={setChosedItems} 
                                                      setFavoriteItems={setFavoriteItems} 
                                                      getChosedItemsFromServer={getChosedItemsFromServer} />}/>

      </Routes>     
 
    </main>
  );
}

export default App;

