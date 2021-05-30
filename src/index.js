import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
//creating book object
const firstBook = {
  image:
    "https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg",
  title: "Atomic Habits: Easy & Proven Way",
  author: "James Clear"
};

const secondBook = {
  image:
    "https://images-na.ssl-images-amazon.com/images/I/91g%2BaK0nCnL._AC_UL200_SR200,200_.jpg",
  title: "The Four Winds: A Novel",
  author: "Kristin Hannah"
};

//This is main fucntion generally called App() Where all other microcomponent will placed
function BookList() {
  return (
    <section className="booklist">
      <Book
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        image={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  // console.log(props);
  return (
    <article className="book">
      <img src={props.image} alt={props.title} />
      <h4>{props.title}</h4>
      <h5>{props.author}</h5>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
