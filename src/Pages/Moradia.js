import React, { useState } from "react";
import * as S from "./Style";
import Banner from "./Assets/MoradiaBanner.jpg";
import Palafita from "./Assets/Palafitas.jpg"
import Timbau from "./Assets/Timbau.jpg"

export default function Moradia() {

  const [ modal, setModal ] = useState(false)
  const handleChange = () => {
    setModal(!modal)
  }

  const SaibaMais = () =>{
    return(
      <S.MoradiaBox>
      <h1>Informações sobre condições de Moradia da Maré</h1>
      <S.BoxP>
        <S.BoxImg>
      <S.ModalImg src={Palafita} alt="" />
      <S.ModalImg src={Timbau} alt="" />
      </S.BoxImg>
      <S.P>Com cerca de 130 mil habitantes, a Maré é um dos nove bairros mais populosos do município, com um contingente de moradores próximo ao de Copacabana e da Barra da Tijuca, e com quase o dobro de habitantes dos bairros da Rocinha e do Alemão. Por muitos anos, (pelo menos três décadas) as palafitas foram um tipo de moradia comum na Baixa do Sapateiro, este tipo de moradia que consistia em casas de madeiras construídas sobre o mangue, surgiram mais expressivamente a partir de 1940, porám a partir do início da década de 1980, esse tipo de habitação começou a ser erradicado. Grandes áreas foram aterradas e conjuntos habitacionais foram construídos na região para reassentar as famílias que viviam em palafitas ou em “áreas de risco”. Dando lugar a conjuntos habitacionais e construções de alvenaria.</S.P>
      </S.BoxP>
      <h6>Fotos e fatos da Maré<a href="http://www.multirio.rj.gov.br/index.php/reportagens/3086-mare-uma-cidade-dentro-do-rio-de-janeiro" target="blank_"> Fonte</a></h6>
      </S.MoradiaBox>
    )
  }

  return (
    <S.Container>
      <S.Banner src={Banner} alt="" />
      <S.BoxBotão>
      <S.BMoradia onClick={() =>{handleChange()}}>{modal ? 'Sair' : 'Saiba mais'  }</S.BMoradia>{modal && SaibaMais()}
      </S.BoxBotão>
      <S.Titulo>As sub-moradias são ainda uma realidade muito comum na Maré, ordenar o crescimente, transformaria toda a realidade da área. </S.Titulo>
      <S.SubTitulo>A Maré, que iniciou seu crescimento em sub-moradias em cima de palafitas, sobre o mangue, as margens da baia de guanabara, sofre ainda hoje os reflexos disso, que são visiveis e palpaveis na maneira com a população vive e mora. </S.SubTitulo>
      <S.Paragrafos>1.1- Mapeamento de Informações de moradia e da população para alinhamento das necessidades das famílias com os espacos oferecidos. </S.Paragrafos>
      <S.Paragrafos>1.2- Criação de nucleos onde estudantes e profissionais de arquitetura e enguenharia possam ajudar os moradores em reformas de suas casas. </S.Paragrafos>
      <S.Paragrafos>1.3- incentivo ao crescimento horizontal ordenado, ao oferecimento de valores justos e alinhados as necessidades e demandas da população. </S.Paragrafos>
      <S.Paragrafos>1.4- Construção de um amplo esquema de drenagem das casas e quintais que mitigue os grandres problemas de umidade, muito comum na grande maioria das casas, por ser uma area de aterramento. </S.Paragrafos>
    </S.Container>
  );
}