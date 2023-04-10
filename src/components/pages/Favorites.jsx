export default function Favorites({favoriteItems, searchValue, Card, setChosedItems, setFavoriteItems, getChosedItemsFromServer}) {
    return (
        <div>            
              <div className="d-flex flex-wrap">
                {favoriteItems
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
        </div>  
    )
}