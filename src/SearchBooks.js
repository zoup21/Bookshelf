import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MoveBook from "./MoveBook";
import * as BooksAPI from "./BooksAPI"


 


const SearchBooks = () => {

    const [searchedBooks , setSearchedBooks] = useState([])
    const [ , setMyBooks] = useState([])
    const [shelfBooks , setShelfBooks] = useState([])
    const [mapIdBooks , setIdBooks] = useState(new Map())
    const [searchText , setSearchText] = useState('')




    const refreshPage = () => {
        return false
    }

    const getAllBooks = useCallback(() => {
       BooksAPI.getAll().then(data => {
        setMyBooks(data)
      setIdBooks(searchIdBooks(data))
      })
      
    }, [])


    useEffect(() => {
      let isActive = true
      if(searchText){
        BooksAPI.search(searchText).then(data => {
          if( data && !data.error){
            if(isActive){
            setSearchedBooks(data)}
        }else{
            setSearchedBooks([])
        }
        })
        return () => {
          isActive = false;
          setSearchedBooks([])
        }
      }
    } , [searchText])




    useEffect(() => {
      getAllBooks()
    } , [getAllBooks])

    const searchIdBooks = (books) => {
      const map = new Map();
      books.map(book => map.set(book.id , book))
      return map
    }

    useEffect(() => {
        const combinedBooks = searchedBooks.map(book =>{
          if (mapIdBooks.has(book.id)){
            return mapIdBooks.get(book.id)
          }else{
            return book
          }
        })
        setShelfBooks(combinedBooks)
    } , [searchedBooks , mapIdBooks])


    return (
        <>
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
                to={"/"}
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={(event) => setSearchText(event.target.value)}
                value = {searchText}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            { shelfBooks.map((book) =>
            (
            <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:   `url(${book.imageLinks?.thumbnail})`,
                  }}
                ></div>
                <MoveBook book={book} refresh={refreshPage} />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book?.authors}</div>
            </div>
          </li>) )} 
            </ol>
          </div>
        </div>
        </>
    )

}



export default SearchBooks;