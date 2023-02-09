import React from 'react';
import { Link } from "react-router-dom";

const BookList = () => {
  return (
    <>
      <h1>BookList</h1>
      <ul>
        <Link to="/books/1">Book 1</Link>
        <br />
        <Link to="/books/2">Book 2</Link>
        <br />
        <Link to="/books/new">NewBook 2</Link>       
      </ul>      
    </>
  )
};

export default BookList