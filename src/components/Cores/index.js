//Time
import React from "react";
import "./Cores.css";
import Deck from "../Deck";

const Cores = (props) => {
  return (
    props.decks.length > 0 && (
      <section
        className="time"
        style={{
          background: props.corSecundaria,
        }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

        <div className="colaboradores">
          {props.decks.map((deck) => (
            <Deck
              key={deck.nome}
              nome={deck.nome}
              formato={deck.formato}
              cor={deck.cor}
              imagem={deck.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Cores;
