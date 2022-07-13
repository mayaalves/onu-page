import styled from "styled-components";

export const Container = styled.section`
  height: 180vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const Banner = styled.img`
  height: 60vh;
`;
export const Titulo = styled.h2`
  width: 120vh;
  text-indent: 4vh;
  height: 14vh;
`;
export const SubTitulo = styled.h3`
  width: 120vh;
  text-indent: 4vh;
  height: 23.5vh;
`;
export const Paragrafos = styled.p`
  width: 120vh;
  height: 12.5vh;
`;
export const BSaneamento = styled.button`
background-color: #47658f;
color: #FFFFFF;
cursor: pointer;
border: none;
width: 12vh;
height: 2.7vh;
`
//Styled Modal

export const BoxModal = styled.section`
position: absolute;
background-color: #47658f;
color: white;
width: 140vh;
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`
export const BoxP = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 130vh;
`
export const BoxImg = styled.div`
height: 65vh;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const ModalImg = styled.img`
width: 60vh;
height: 30vh;
`
export const P = styled.p`
width: 60vh;
text-indent: 4vh;
`
export const A = styled.a`
color: #FFFFFF;
font-size: 2vh;
font-weight: bold;
font-style: italic;
`