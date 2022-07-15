import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import * as S from "./Pages/StylesApp";
import Saneamento from "./Pages/Saneamento";
import Moradia from "./Pages/Moradia";
import Devverde from "./Pages/Devverde";
import Coleta from "./Pages/Coleta";

const GlobalStyle = createGlobalStyle`
*{
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`;
const Navegação = styled(Link)`
  color: #000000;
  text-decoration: none;
  background-color: #ffffff;
  padding: 0.7vh;
  border-radius: 50px;
  transition: all 0.9s;
  &:hover {
    transform: scale(1.3);
    font-weight: bold;
  }
`;

export default function App() {
  return (
    <S.Container>
      <S.BoxDialogo>
        <h1>Problemas e soluções na Mare</h1>
        <S.P>
          A Maré é uma favela localizada na zona norte do Rio de janeiro, com
          aproximadamente 130 mil moradores, tem mais habitantes do que 93% das
          cidades Brasileiras. A 20 minutos do centro, rodeada pelas três
          principais vias expressas, ao lado do Aeroporto internacional e de uma
          das maiores e melhores faculdades da América Latina, ainda assim, uma
          série de problemas e o descaso do poder público, causam o baixo IDH da favela, aqui serão
          desenvolvidas algumas soluçôes para a favela.
        </S.P>
      </S.BoxDialogo>
      <Router>
        <GlobalStyle />
        <nav>
          <S.Ul>
            <S.Azul>
              <Navegação to="/Saneamento">Saneamento</Navegação>
            </S.Azul>
            <S.Amarelo>
              <Navegação to="/Moradia">Moradia</Navegação>
            </S.Amarelo>
            <S.Verde>
              <Navegação to="/Devverde">Arborização</Navegação>
            </S.Verde>
            <S.Laranja>
              <Navegação to="/Coleta">Coleta de Lixo</Navegação>
            </S.Laranja>
          </S.Ul>
        </nav>
        <Routes>
          <Route path="/Saneamento" element={<Saneamento />} />
          <Route path="/Moradia" element={<Moradia />} />
          <Route path="/Devverde" element={<Devverde />} />
          <Route path="/Coleta" element={<Coleta />} />
        </Routes>
      </Router>
    </S.Container>
  );
}
