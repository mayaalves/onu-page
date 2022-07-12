import React from "react";
import * as S from "./Style";
import Banner from "./Assets/SaneamentoBanner.jpg";

export default function Saneamento() {
  return (
    <S.Container>
      <S.Banner src={Banner} alt="" />
      <S.Titulo>
        Uma questão para todas as nações sub-desenvolvidas. Suas soluções estão
        diretamente ligadas ao desenvolvimento social.
      </S.Titulo>
      <S.SubTitulo>
        Segundo a OMS cada 1 dolar investido em saneamento básico, economiza-se
        4,3 dólares em saúde global. As soluções não são simples e envolvem
        diversos niveís de infra-estrutura, aqui vão algumas soluções de pequeno
        e medio prazo.
      </S.SubTitulo>
      <S.Paragrafos>
        1.1- Amplas e diversificadas campanhas de educação que envolvam toda a
        população da Maré para importancia da preservação e limpeza dos rios{" "}
      </S.Paragrafos>
      <S.Paragrafos>
        1.2- Dragagem e limpeza dos diversos rios da região. Redirecionar todo o
        esgoto da região pra uma estação de tratamento, parando assim com o
        despejo nos rios.
      </S.Paragrafos>
      <S.Paragrafos>
        1.3- Criação de um aplicativo para denuncia e informações sobre os rios,
        esgoto e saneamento, assim como para mapeamento de novas construções{" "}
      </S.Paragrafos>
      <S.Paragrafos>1.4-</S.Paragrafos>
    </S.Container>
  );
}