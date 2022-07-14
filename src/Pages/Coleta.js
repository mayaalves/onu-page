import React, { useState } from "react";
import * as S from "./Style";
import Banner from "./Assets/ColetaBanner.jpg";
import Lixão from "./Assets/Lixão.jpg"
import Moto from "./Assets/Moto.jpg"

export default function Coleta() {

  const [ modal, setModal ] = useState(false)
  const handleChange = () => {
    setModal(!modal)
  }

  const SaibaMais = () =>{
    return(
      <S.BoxColeta>
      <h1>Informações sobre coleta e despejo de lixo na Maré</h1>
      <S.BoxP>
        <S.BoxImg>
      <S.ModalImg src={Lixão} alt="" />
      <S.ModalImg src={Moto} alt="" />
      </S.BoxImg>
      <S.P>A Maré enfrenta um cenário parecido com milhares de bairros brasileiros. Segundo o Sistema Nacional de Informações sobre Saneamento (SNIS), em 2019, em apenas 38,7% dos municípios do país é realizada a coleta seletiva. O Instituto de Pesquisa Econômica Aplicada (IPEA) aponta que os catadores são responsáveis por aproximadamente 90% dos materiais que são realmente reciclados no Brasil. Na Maré, a maioria dos catadores de recicláveis trabalha de forma individual, não em cooperativa. Eles fazem o garimpo desse material e vendem para os chamados ferro-velhos. Latinhas, por exemplo, são consideradas mais valiosas e chegam a custar R$4 reais por quilo. Já materiais como papel, plástico duro e papelão, por serem mais fáceis de garimpar, são comprados por um preço menor.</S.P>
      </S.BoxP>
      <h6>Dados e Informações sobre lixo <S.AVerde href="https://datalabe.org/no-role-do-lixo-na-mare-todo-mundo-e-protagonista/" target="blank_"></S.AVerde>Fonte</h6>
      </S.BoxColeta>
    )
  }

  return (
    <S.Container>
      <S.Banner src={Banner} alt="" />
      <S.BoxBotão>
      <S.BColeta onClick={() =>{handleChange()}}>{modal ? 'Sair' : 'Saiba mais'  }</S.BColeta>{modal && SaibaMais()}
        </S.BoxBotão>
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