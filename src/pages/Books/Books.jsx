import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";
import { data } from "react-router";

const Books = ({ home }) => {
  const [allBooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch(
  //       "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setAllBooks(data));
  //   }, []);

  const bookPromise = fetch(
    "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
  ).then((res) => res.json());

  return (
    <div>
      <h1 className="text-3xl text-center p-6">Books</h1>

      <Suspense fallback={<p>Books are loading</p>}>
       <div className="grid grid-cols-3 gap-20">
         {home.map((ho) => (
          <Book key={ho.bookId} ho={ho}></Book>
        ))}
       </div>
        {/* <Book bookPromise={bookPromise}></Book> */}
      </Suspense>
    </div>
  );
};

export default Books;
