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
      <S.SubTitulo>A Maré que iniciou seu crescimento em sub-moradias em cima de palafitas sofre ainda hoje os reflexos disso. </S.SubTitulo>
      <S.Paragrafos>1.1-</S.Paragrafos>
      <S.Paragrafos>1.2-</S.Paragrafos>
      <S.Paragrafos>1.3-</S.Paragrafos>
      <S.Paragrafos>1.4-</S.Paragrafos>
    </S.Container>
  );
}