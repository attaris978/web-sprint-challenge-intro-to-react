import Character from "./Character";
const Characters = (props) => {
    const {characters} = props;
    return (
        <div>
            {characters && characters.map(char => {
                return (
                    <Character name={char.name} key={props.name}/>
                )
            }) }
            </div>
        

    )
}
export default Characters;