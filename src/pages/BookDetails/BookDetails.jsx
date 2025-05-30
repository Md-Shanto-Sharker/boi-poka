import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { image, bookName } = singleBook || {};

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };

  return (
    <div className="border-2 w-2/3 mx-auto ">
      <img className="w-48" src={image} alt="" />
      <h5>{bookName}</h5>
      <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent">
        Mark as Read
      </button>
      <button className="btn btn-info m-2">Add To WishList</button>
    </div>
  );
};

export default BookDetails;
