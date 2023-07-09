import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Cores from "./components/Cores";
import Footer from "./components/Footer";

function App() {
  const cores = [
    {
      nome: "Azul",
      corPrimaria: "#C7E1EE",
      corSecundaria: "#50C3ED",
    },
    {
      nome: "Vermelho",
      corPrimaria: "#C98264",
      corSecundaria: "#DB232F",
    },
    {
      nome: "Verde",
      corPrimaria: "#B1BEB6",
      corSecundaria: "#224738",
    },
    {
      nome: "Preto",
      corPrimaria: "#978B89",
      corSecundaria: "#060403",
    },
    {
      nome: "Branco",
      corPrimaria: "#EDDDE7",
      corSecundaria: "#F9EDC7",
    },
    {
      nome: "Azul-Vermelho",
      corPrimaria: "#50C3ED",
      corSecundaria: "#DB232F",
    },
    {
      nome: "Azul-Verde",
      corPrimaria: "#224738",
      corSecundaria: "#50C3ED",
    },
    {
      nome: "Azul-Preto",
      corPrimaria: "#50C3ED",
      corSecundaria: "#060403",
    },
    {
      nome: "Azul-Branco",
      corPrimaria: "#F9EDC7",
      corSecundaria: "#50C3ED",
    },
    {
      nome: "Vermelho-Verde",
      corPrimaria: "#224738",
      corSecundaria: "#DB232F",
    },
    {
      nome: "Vermelho-Preto",
      corPrimaria: "#DB232F",
      corSecundaria: "#060403",
    },
    {
      nome: "Vermelho-Branco",
      corPrimaria: "#F9EDC7",
      corSecundaria: "#DB232F",
    },
    {
      nome: "Verde-Preto",
      corPrimaria: "#224738",
      corSecundaria: "#060403",
    },
    {
      nome: "Verde-Branco",
      corPrimaria: "#F9EDC7",
      corSecundaria: "#224738",
    },
    {
      nome: "Preto-Branco",
      corPrimaria: "#F9EDC7",
      corSecundaria: "#060403",
    },
    {
      nome:"Três cores",
      corPrimaria:"#F9EDC7",
      corSecundaria:"#4e40b3"
    },
    {
      nome:"Quatro cores",
      corPrimaria:"#060403",
      corSecundaria:"#836048"
    },
    {
      nome:"Cinco cores",
      corPrimaria:"#F9EDC7",
      corSecundaria:"#C98264"
    },
  ];

  const [decks, setDecks] = useState([]);

  const aoNovoDeckAdiocionado = (deck) => {
    console.log(deck);
    setDecks([...decks, deck]);
  };


  return (
    <div className="App">
      <Banner />
      <Formulario cores={cores.map(cor => cor.nome)} aoDeckCadastrado={(deck) => aoNovoDeckAdiocionado(deck)} />

      {cores.map(cor => <Cores 
      key={cor.nome} 
      nome={cor.nome} 
      formato={cor.formato}
      corPrimaria={cor.corPrimaria} 
      corSecundaria={cor.corSecundaria}
      decks = {decks.filter(deck => deck.cor === cor.nome)} />)}
      <Footer />
    </div>
  );
}

export default App;
