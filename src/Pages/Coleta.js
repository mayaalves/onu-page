import React from "react";
import * as S from "./Style";
import Banner from "./Assets/ColetaBanner.jpg";

export default function Coleta() {
  return (
    <S.Container>
      <S.Banner src={Banner} alt="" />
      <S.Titulo>
        Problema antigo, as soluções não são simples e envolvem vontade de poder
        publico e população.{" "}
      </S.Titulo>
      <S.SubTitulo>
        A coleta de lixo sempre foi um grande problema na Maré. Questões como o
        crescimento desordenado, a geografia e a violência, impedem que empresas
        de coleta seletiva atuem na area, até mesmo a conlurb(empresa publica de
        limpeza urbana) tem dificuldade de atuar plenamente na localidade. Com
        isso em mente, a de se entender, que as soluções não são simples.
      </S.SubTitulo>
      <S.Paragrafos>
        1.1- Uso de tecnologia pra mapear o tipo de lixo produzido por moradores
        e comerciantes da Maré, e assim criar soluções para reciclagem
        inteligente de materiais
      </S.Paragrafos>
      <S.Paragrafos>
        1.2-Campanhas de educação pra minimizar a produção de lixo, também para
        a importancia da coleta seletiva e da reciclagem de materiais.
      </S.Paragrafos>
      <S.Paragrafos>
        1.3-Financiamento publico para uso e instalação de trituradores de
        organicos nas pias de cozinha, redirecionando pra um container que
        produzirá abudo, e que será recolhido pela prefeitura.
      </S.Paragrafos>
      <S.Paragrafos>
        1.4-Criação e capacitação de coletivos de coleta seletiva, formados por
        modadores da própria Maré, de forma a aumentar a renda que circula na
        própria favela e também a educação de direcionamento do lixo.
      </S.Paragrafos>
    </S.Container>
  );
}