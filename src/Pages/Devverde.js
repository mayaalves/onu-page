import React from "react";
import * as S from "./Style";
import Banner from "./Assets/DevverdeBanner.jpg";

export default function Devverde() {
  return (
    <S.Container>
      <S.Banner src={Banner} alt="" />
      <S.Titulo>
        A falta de espaços verdes é um problema recorrente em todas as
        metrôpoles Brasileiras, ao resolve-lo, solucionamos também uma série de
        outros problemas
      </S.Titulo>
      <S.SubTitulo>
        O constante crescimento desordenado da Maré, um local de mata atlântica
        nativa, fez com que toda a aréa tivesse poucas ou nenhuma árvore,{" "}
      </S.SubTitulo>
      <S.Paragrafos>
        1.1- Programas de ampliação e preversação da mata nativa do Parque
        ecologico da Vila do Pinheiro(Mata dos macacos).
      </S.Paragrafos>
      <S.Paragrafos>1.2-</S.Paragrafos>
      <S.Paragrafos>1.3-</S.Paragrafos>
      <S.Paragrafos>1.4-</S.Paragrafos>
    </S.Container>
  );
}