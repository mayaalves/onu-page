import styled from "styled-components";
import Arvores from "./Assets/BotãoArvores.png";
import Casinha from "./Assets/BotãoCasinha.png";
import Esgoto from "./Assets/BotãoEsgoto.png";
import Lixeira from "./Assets/BotãoLixeira.png";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const BoxDialogo = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const P = styled.p`
  width: 120vh;
  text-indent: 4vh;
`;
export const Ul = styled.ul`
  height: 30;
  display: flex;
  flex-direction: row;
`;
export const Verde = styled.li`
  width: 26vh;
  height: 20vh;
  background-image: url(${Arvores});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  background-color: #2dcb13;
  margin: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const Amarelo = styled.li`
  width: 26vh;
  height: 20vh;
  background-image: url(${Casinha});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  background-color: #fae30d;
  margin: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const Azul = styled.li`
  width: 26vh;
  height: 20vh;
  background-color: #47658f;
  background-image: url(${Esgoto});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  margin: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const Laranja = styled.li`
  width: 26vh;
  height: 20vh;
  background-color: #f6701c;
  background-image: url(${Lixeira});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  margin: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;