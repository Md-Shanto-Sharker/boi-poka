import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ ho }) => {
  // const book = use(bookPromise)
  // console.log(book);

  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
bookId,
  } = ho;
  return (
    <Link to={`/bookDetails/${
bookId}`}>
      <div>
        <div className="card bg-base-100  shadow-2xl border p-5">
          <figure className="p-5 bg-gray-200">
            <img className="w-[200px] h-[200px]" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-center gap-10">
              {tags.map((tag) => (
                <button>{tag}</button>
              ))}
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">{yearOfPublishing}</div>
            </h2>
            <p>
              <p>Book by : {publisher}</p>
              <div className="border-t-1 border-dashed"></div>
            </p>
            <div className="card-actions justify-end">
              <div className="">{category}</div>
              <div className="">{rating}</div>
              <FaStarHalfAlt></FaStarHalfAlt>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
