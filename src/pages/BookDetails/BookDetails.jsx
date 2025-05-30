import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook;

  return (
    <div className="border-2 w-2/3 mx-auto ">
      <img className="w-48" src={image} alt="" />
      <h5>{bookName}</h5>
      <button class="btn btn-accent">Read</button>
      <button class="btn btn-info m-2">WishList</button>
    </div>
  );
};

export default BookDetails;
