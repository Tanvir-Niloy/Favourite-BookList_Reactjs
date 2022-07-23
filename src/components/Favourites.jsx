import React from 'react'
import {useAppContext} from '../context/appContext';


const Favourites = () => {

  const {favourites, addToFavourites, removeFromFavourites } = useAppContext()

  const favouritesChecker = (id) => {
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
  };


  return (
    <div className='favourites'>
      {favourites.length > 0 ? (
        favourites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div>
              {favouritesChecker(book.id) ? (
                <button onClick={() => removeFromFavourites(book.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addToFavourites(book)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1 style={{margin:'auto'}}>You don't have any favorite books yet!</h1>
      )}
    </div>
  )
}

export default Favourites