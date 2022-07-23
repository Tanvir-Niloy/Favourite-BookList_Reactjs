import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("Appcontext must be within appContextProvider!");
  }

  return context;
};

const AppContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (book) => {

     const oldFavourite = [...favourites];
     const newFavourite = oldFavourite.concat(book);
     setFavourites(newFavourite)
  };
  const removeFromFavourites = (id) => {

      const oldFavourite = [...favourites];
     const newFavourite = oldFavourite.filter((book)=>book.id !== id);
     setFavourites(newFavourite)
  };

  return (
    <AppContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
