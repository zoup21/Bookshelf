import React from "react";
import * as BooksAPI from "./BooksAPI";



const MoveBook = (props) => {
  // const getAllBooks = async () => {
  //     const res = await BooksAPI.getAll();
  //     setAllBooks(res)
  //   };

  const ChangeShelf =  (event) => {
    props.refresh()
    return BooksAPI.update(props.book, event.target.value);
    
  };





  return (
    <>
      <div className="book-shelf-changer">
        <select onChange={ChangeShelf} defaultValue={props.book.shelf ? props.book.shelf : "none"}>
          <option  value=''  disabled>
            Move to...
          </option>
          <option  value="currentlyReading" className="fas fa-check" style={props.book.shelf === 'currentlyReading' ? {color:'green'} : {color:''}}>{props.book.shelf === 'currentlyReading' ? `\u2713  Currently Reading`  : "Currenty Reading" } </option>
          <option value="wantToRead" style={props.book.shelf === 'wantToRead' ? {color:'green'} : {color:''}}>{props.book.shelf === 'wantToRead' ? `\u2713  Want to read`  : "Want to read" } </option>
          <option value="read" style={props.book.shelf === 'read' ? {color:'green'} : {color:''}}>{props.book.shelf === 'read' ? `\u2713  Read`  : "Read" } </option>
          <option value="none">{props.book.shelf === 'none' || !props.book.shelf ? `\u2713  None`  : "None" } </option>
        </select>
      </div>
    </>
  );
};

export default MoveBook;
