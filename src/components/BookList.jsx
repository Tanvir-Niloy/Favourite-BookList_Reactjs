import { useState, useEffect, useContext } from "react";
import { API_URL } from "../Api";
import axios from "axios";
import {useAppContext} from '../context/appContext';
import {useNavigate} from 'react-router-dom';

const BookList = () => {

  const navigate = useNavigate()
  const [books, setBooks] = useState([]);

  const {favourites, addToFavourites, removeFromFavourites } = useAppContext()

  const favouritesChecker = (id) => {
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img src={book.image_url} alt={book.title} onClick={()=>navigate(`/books/${book.id}`)}/>
          </div>
          <h5>Written By {book.authors}</h5>
          <div>
          {favouritesChecker(book.id) ? (
              <button onClick={() => removeFromFavourites(book.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button onClick={() => addToFavourites(book)}>
                Add to Favorites
              </button>
            )}          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
