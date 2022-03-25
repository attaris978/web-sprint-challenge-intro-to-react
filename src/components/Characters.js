import Character from "./Character";
import styled from "styled-components";

const CharDiv = styled.div`
  margin: auto;
  display: flex;
  overflow:hidden;
  border-radius: 3px;
  flex-flow: column nowrap;
  color: lemonchiffon;
  width: 60vw;
  background-color: rgba(10, 10, 10, 0.6);
  animation-duration: 3s;
  animation-name: fadein;
  @keyframes fadein {
    from {
        width:0;
        margin-left:0;
      background-color: rgba(10,10,10,0);
    }
    to {
        width:60vw;
        margin-left:20vw;
      background-color: rgba(10, 10, 10, 0.6);
    }
  }
`;
const Characters = (props) => {
  const { characters } = props;
  return (
    <CharDiv>
      {characters &&
        characters.map((char,ind) => {
          return <Character name={char.name} key={char.name} birth={char.birth_year} />;
        })}
    </CharDiv>
  );
};
export default Characters;
