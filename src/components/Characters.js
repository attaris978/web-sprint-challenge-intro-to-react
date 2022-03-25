import Character from "./Character";
import styled from "styled-components";

const CharDiv = styled.div`
  margin: auto;
  display: flex;
  border-radius:3px;
  flex-flow: column nowrap;
  color: lemonchiffon;
  width: 60vw;
  background-color: rgba(10, 10, 10, .6);
`;
const Characters = (props) => {
  const { characters } = props;
  return (
    <CharDiv>
      {characters &&
        characters.map((char) => {
          return <Character name={char.name} key={props.name} />;
        })}
    </CharDiv>
  );
};
export default Characters;
