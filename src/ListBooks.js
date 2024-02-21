import React , {useEffect} from "react";
import BookShelves from "./BookShelves";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI"

const ListBooks = () => {

    
    const [allbooks, setAllBooks] = useState([])
    const [refreshBooks , setRefreshBooks] = useState(true)

    const getAllBooks = async () => {
        const res = await BooksAPI.getAll();
        setAllBooks(res)
      };



      const refreshPage = () => {
        setTimeout(() => setRefreshBooks(!refreshBooks), 1000)
      }


    
      useEffect(() => {
        getAllBooks();
      }, [refreshBooks]);



  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelves  books ={allbooks} refresh={refreshPage}/>
            
          </div>
        </div>
        <div className="open-search">
          <Link 
            to={"/search"}
          >
            Add a book</Link>
        </div>
      </div>
    </>
  );
};

export default ListBooks;
