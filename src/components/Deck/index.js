//Colaborador


import React from "react";
import "./Deck.css";

const Deck = ({nome, formato, imagem, cor,corDeFundo}) => {
  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
        <img src={imagem} alt={nome} />
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{formato}</h5>
        <h5>{cor}</h5>
      </div>
    </div>
  );
};

export default Deck;
