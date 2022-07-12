import React from "react";
import * as S from "./Style";
import Banner from "./Assets/MoradiaBanner.jpg";

export default function Moradia() {
  return (
    <S.Container>
      <S.Banner src={Banner} alt="" />
      <S.Titulo></S.Titulo>
      <S.SubTitulo></S.SubTitulo>
      <S.Paragrafos>1.1-</S.Paragrafos>
      <S.Paragrafos>1.2-</S.Paragrafos>
      <S.Paragrafos>1.3-</S.Paragrafos>
      <S.Paragrafos>1.4-</S.Paragrafos>
    </S.Container>
  );
}