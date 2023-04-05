// import 'macro-css';
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { cardList } from "./utils/constants";

function App() {
  return (
    <main className="wrapper clear">
      <Drawer />     
      <Header />
 
      <section className="content p-40">
        <div className="d-flex align-center justify-between flex-wrap mb-40">
          <h1 className="ml-10">Все кроссовки</h1>
          <div className="search-block d-flex">
              <img src="/images/search.svg" alt="search" />
              <input placeholder="Поиск..."></input>
          </div>
        </div>        

        <div className="d-flex flex-wrap">
          {cardList.map((item, index) => (<Card title={item.title} price={item.price} imageUrl={item.imageUrl} id={index} key={index}/>))}
        </div>       

      </section>
    </main>
  );
}

export default App;
