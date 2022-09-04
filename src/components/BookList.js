import React from 'react';
import '../sample.css';
import books from '../components/books.js';
import Book from '../Book';

function BookList() {
  return (
    <section className='booklist'>
      {/* First method pass the object as a props to the child component */}
      {books.map(book => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

export default BookList;
