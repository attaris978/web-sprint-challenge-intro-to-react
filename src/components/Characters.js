import Character from "./Character";
import styled from "styled-components";

const CharDiv = styled.div`
    color:  lemonchiffon;
    `
const Characters = (props) => {
    const {characters} = props;
    return (
        <CharDiv>
            {characters && characters.map(char => {
                return (
                    <Character name={char.name} key={props.name}/>
                )
            }) }
            </CharDiv>
        

    )
}
export default Characters;