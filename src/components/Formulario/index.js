import "./Formulario.css";
import CampoTexto from "../CampoTexto/index";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao/index";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [lista, setLista] = useState("");
  const [formato, setFormato] = useState("Commander");
  const [cor, setCor] = useState("Azul");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoDeckCadastrado({
      nome,
      imagem,
      lista,
      formato,
      cor,
    })
    setNome('')
    setFormato('')
    setImagem('')
    setLista('')
    setCor('')
  };


  const formatos = ["Commander", "Standard", "Modern"];
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <CampoTexto
          obrigatorio={true}
          label="Nome do Player"
          placeholder="Digite seu Nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem do Comandante"
          placeholder="Link da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Link da Lista"
          placeholder="Lista do Deck"
          valor={lista}
          aoAlterado={(valor) => setLista(valor)}
        />
        <ListaSuspensa
          label="Formato"
          itens={formatos}
          valor={formato}
          aoAlterado={(valor) => setFormato(valor)}
        />

        <ListaSuspensa
          label="Cor do Deck"
          itens={props.cores}
          valor={cor}
          aoAlterado={(valor) => setCor(valor)}
        />
        <Botao> Criar Card </Botao>
      </form>
    </section>
  );
};

export default Formulario;
