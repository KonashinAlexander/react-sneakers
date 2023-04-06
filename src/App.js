// import 'macro-css';
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [showDrawer, setShowDrawer] = useState(false)
  const [items, setItems] = useState([])
  const [chosedItems, setChosedItems] = useState([])

  useEffect(()=>{
    fetch('https://642e5d0b8ca0fe3352cde4c6.mockapi.io/items', 
  {
    method: 'GET',
    headers: {'content-type':'application/json'},
  })
  .then(res => {if (res.ok) {return res.json()}})
  .then(data => setItems(data))
  .catch(error => {console.log(error)})
},[])
  
  return (
    <main className="wrapper clear">
      {showDrawer && <Drawer setShowDrawer={setShowDrawer} chosedItems={chosedItems}/>}
      <Header setShowDrawer={setShowDrawer}/>
 
      <section className="content p-40">
        <div className="d-flex align-center justify-between flex-wrap mb-40">
          <h1 className="ml-10">Все кроссовки</h1>
          <div className="search-block d-flex">
              <img src="/images/search.svg" alt="search" />
              <input placeholder="Поиск..."></input>
          </div>
        </div>        

        <div className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Card 
              title={item.title} 
              price={item.price} 
              imageUrl={item.imageUrl} 
              id={index} 
              key={index}
              setChosedItems={setChosedItems}
            />
            ))
          }
        </div>       

      </section>
    </main>
  );
}

export default App;

