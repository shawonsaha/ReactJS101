import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

//This is main fucntion generally called App()
//Where all other microcomponent will placed
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg"
        alt="Atomic Habits"
      />
      <h4>Atomic Habits: Easy & Proven Way</h4>
      <h5>Shawon Saha</h5>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
