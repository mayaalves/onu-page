import React, { useState } from "react";
import * as S from "./Style";
import Banner from "./Assets/SaneamentoBanner.jpg";
import Mapa from "./Assets/MapaRios.jpg"
import Rios from "./Assets/Rios.jpg" 

export default function Saneamento() {

  const [ modal, setModal ] = useState(false)
  const handleChange = () => {
    setModal(!modal)
  }

  const SaibaMais = () =>{
    return(
      <S.BoxModal>
      <h1>Informações sobre os Rios da Região central da favela da Maré</h1>
      <S.BoxP>
        <S.BoxImg>
      <S.ModalImg src={Mapa} alt="" />
      <S.ModalImg src={Rios} alt="" />
      </S.BoxImg>
      <S.P>Na Vila do Pinheiro e Vila do João é onde fica a sub-bacia do Canal do Cunha (que é basicamente a junção dos rios Jacaré, Faria e Timbó). A partir da linha amarela em direção ao Parque União, é a sub-bacia do Rio Ramos. E depois do Parque União é a sub-bacia do Rio Irajá.
Todos os rios que vão aparecer ali nessas sub-bacias são afluentes desses rios principais, que podem ter nomes locais ou não. No caso do Pinheiro por exemplo, falamos do próprio Canal do Cunha. No caso da Baixa do Sapateiro e da Nova Holanda, precisariamos saber se são canais que mantiveram o nome das sub-bacias ou não.</S.P>
      </S.BoxP>
      <h6>Manual dos Rios da Cidade do RJ <S.A href="http://www.rio.rj.gov.br/dlstatic/10112/12762726/4321903/Arte_Livro_Rios_do_Rio_28x28CM_Fechado_Final_Atualizado_Abr_2021_final.pdf" target="_blank">Fonte</S.A></h6>
      </S.BoxModal>
    )
  }

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
      <S.BSaneamento onClick={() =>{handleChange()}}>{modal ? 'Sair' : 'Saiba mais'  }</S.BSaneamento>{modal && SaibaMais()}
      <S.Paragrafos>
        1.3- Criação de um aplicativo para denuncia e informações sobre os rios,
        esgoto e saneamento, assim como para mapeamento de novas construções{" "}
      </S.Paragrafos>
      <S.Paragrafos>1.4- Universalizar o acesso aos banheiros com sistema de água e esgoto totalmente completos e funcionais e a produtos de higiene pessoal, especialmente mulheres em situação de vunerabilidade.</S.Paragrafos>
    </S.Container>
  );
}