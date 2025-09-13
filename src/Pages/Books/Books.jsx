import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //   fetch("/public/bookVibe.json")
  //     .then((res) => res.json())
  //     .then((data) => setAllBooks(data));
  // }, []);

  // const bookPromise = fetch('/public/bookVibe.json').then(res=>res.json())

  console.log(allBooks);
  return (
    <div>
      <h1 className="text-3xl text-center p-6">Hello ami books</h1>
      <div>
        <Suspense fallback={<span>Loading.....</span>}>
          <div className="grid grid-cols-3 gap-20 ">

            {data.map((singleBook) => (
            <Book singleBook={singleBook} key={singleBook.bookId}></Book>
          ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
