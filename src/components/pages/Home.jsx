import cn from 'classnames'

export function Home({searchValue, Card, setChosedItems, setFavoriteItems, getChosedItemsFromServer, handleInputChange, setSearchValue, items}) {
    return (

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
                  id={index}
                  setChosedItems={setChosedItems}
                  setFavoriteItems={setFavoriteItems}
                  refreshFunc={getChosedItemsFromServer}
                />
                ))
          }
        </div>           
      </section>        
    )
}