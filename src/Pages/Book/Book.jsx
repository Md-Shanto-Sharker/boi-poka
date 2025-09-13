// import React, { use } from 'react';

import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ singleBook }) => {
  // const book = use(bookPromise);
  // console.log(book);

  const {bookname,author,image,rating,category} = singleBook
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm border p-5">
        <figure className="p-3 bg-gray-200 w-2/3 mx-auto">
          <img className="w-[50%] h-40"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
