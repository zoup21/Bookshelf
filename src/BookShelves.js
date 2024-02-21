import React from "react";
import BookDetails from "./BookDetails";


const shelves = [{ id: "1", shelfName: "currentlyReading", shelfDisplayName: "Currently Reading" }, 
{id: "2", shelfName: "wantToRead", shelfDisplayName: "Want To Read"} , 
{ id: "3", shelfName: "read", shelfDisplayName: "Read" }]



const BookShelves = (props) => {
 

    const refreshPage =() => {
        props.refresh();
    }


  return (
    <>
      <div className="bookshelf">
        {shelves.map((s) => (
          <div key={s.id}>
            <h2 className="bookshelf-title">{s.shelfDisplayName}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
              {props.books.filter((f) => f.shelf === s.shelfName).map((book) => ( 
                   <BookDetails key={book.id} book={book} refresh={refreshPage}/>
              ))}
              </ol>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookShelves;
