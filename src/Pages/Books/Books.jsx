import React, { useEffect, useState } from "react";


const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("/public/bookVibe.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  console.log(allBooks);
  return (
    <div>
      <h1>Hello ami books</h1>
    </div>
  );
};

export default Books;
