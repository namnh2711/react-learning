import React from 'react';

import Book from './Book';

const BookList = props => (
  <div>
    {props.books.map(book => <Book key={book.id} {...book} />)}
  </div>
);

export default BookList;
