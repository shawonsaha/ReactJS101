import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const books = [
  {
    id: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg",
    title: "Atomic Habits: Easy & Proven Way",
    author: "James Clear"
  },
  {
    id: 2,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91g%2BaK0nCnL._AC_UL200_SR200,200_.jpg",
    title: "The Four Winds: A Novel",
    author: "Kristin Hannah"
  },
  {
    id: 3,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/713XUMrojkL._AC_UL200_SR200,200_.jpg",
    title: "What Happened to You?: Conversations on Trauma",
    author: "Oprah Winfrey"
  }
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

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

ReactDOM.render(<BookList />, document.getElementById("root"));
