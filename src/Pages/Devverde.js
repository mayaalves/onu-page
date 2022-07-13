import React,{ useState } from "react";
import * as S from "./Style";
import Banner from "./Assets/DevverdeBanner.jpg";
import Mata from "./Assets/ParqueEcologico.jpg"
import Antiga from "./Assets/ParqueInicio.jpg"

export default function Devverde() {

  const [ modal, setModal ] = useState(false)
  const handleChange = () => {
    setModal(!modal)
  }

  const SaibaMais = () =>{
    return(
      <S.ModalBox>
      <h1>Informações sobre o Parque Ecologico da Maré.</h1>
      <S.BoxP>
        <S.BoxImg>
      <S.ModalImg src={Mata} alt="" />
      <S.ModalImg src={Antiga} alt="" />
      </S.BoxImg>
      <S.P>Em meio ao grande deserto do verde se encontra o Parque Ecológico. Também conhecido na favela como “Mata” conserva diversas espécies numa área equivalente a 10 campos de futebol.
Relatos de moradores é que o Parque existe desde sempre, mas tudo indica que em 2002 foi implantado um "horto escola".
Isto podia significa mais atenção à área, o que não aconteceu e hoje, Parque hoje vive em total abandono.
No local, além de brinquedos existe um anfiteatro em péssimo estado de conservação.
Andando pelo Parque não se ver qualquer vestígio do poder público, até as lixeiras são improvisadas.
</S.P>
      </S.BoxP>
      <h6>Noticias e Informações sobre o parque <S.AVerde href="https://mareonline.com.br/tag/parque-ecologico-da-mare/" target="_blank" >Fonte</S.AVerde></h6>
      </S.ModalBox>
    )
  }

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
      <S.BVerde onClick={() =>{handleChange()}}>{modal ? 'Sair' : 'Saiba mais'  }</S.BVerde>{modal && SaibaMais()}
      <S.Paragrafos>1.2-</S.Paragrafos>
      <S.Paragrafos>1.3-</S.Paragrafos>
      <S.Paragrafos>1.4-</S.Paragrafos>
    </S.Container>
  );
}