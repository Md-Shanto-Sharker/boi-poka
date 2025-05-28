import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ ho }) => {
  // const book = use(bookPromise)
  // console.log(book);

  const { bookName, author, image, rating ,category} = ho;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm border p-5">
        <figure className="p-5 bg-gray-200">
          <img className="w-[200px] h-[200px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="">{category}</div>
            <div className="">{rating}</div>
            <FaStarHalfAlt></FaStarHalfAlt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
