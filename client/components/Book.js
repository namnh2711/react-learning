import React from 'react';

const Book = props => (
  <div>
    <h2>{props.title}</h2>
    <h2>{props.author}</h2>
    <h2>{props.price}</h2>
  </div>

);

export default Book;
