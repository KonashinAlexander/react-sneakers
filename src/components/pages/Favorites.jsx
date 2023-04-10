export default function Favorites({favoriteItems, searchValue, Card, setChosedItems, setFavoriteItems, getChosedItemsFromServer}) {
    return (
        <div className="content p-40"> 
          <h1 className="ml-10">Избранное</h1>           
          <div className="d-flex flex-wrap">
            {favoriteItems
                // .filter(item=> item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((item, index) => (
                  <Card 
                    key={index+item.price}
                    id={index}
                    setChosedItems={setChosedItems}
                    setFavoriteItems={setFavoriteItems}
                    refreshFunc={getChosedItemsFromServer}
                    favorited={true}
                    {...item}
                  />
                  ))
            }
          </div>  
        </div>  
    )
}