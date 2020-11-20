import React from "react";
import Card from "./Card";
import "./List.css";

function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card) => (
          <Card title={card.title} key={card.id} content={card.content} />
        ))}
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
