import React from "react";

const Book = ({ image, title, author }) => {
  console.log(image, title, author);
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <h5>{author}</h5>
    </article>
  );
};

export default Book;
