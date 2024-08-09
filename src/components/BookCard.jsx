import React from "react";
import { Link } from "react-router-dom";

function BookCard(props){
    const book = props.book
    return(
       <article>
            <Link to={`/books/${book.Id}`}>
            <img src={book.image} alt="" />
            </Link>
            <h2 className="pt-5 text-xl font-bold">{book.title}</h2>
            <span className="text-xl">{book.author}</span>
       </article>
    );

}

export default BookCard;