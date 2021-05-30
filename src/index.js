import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const title = "Atomic Habits: Easy & Proven Way";
const author = "James Clear";
const image =
  "https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg";
//This is main fucntion generally called App() Where all other microcomponent will placed
function BookList() {
  return (
    <section className="booklist">
      <Book haha="kire" />
      <Book job="devoloper" />
      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <h5>{author}</h5>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
