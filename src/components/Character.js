// Write your Character component here
import styled from 'styled-components';

const Char = styled.p`
&:hover {
    color:red;
}`;
const Character = (props) => {
    const {name} = props;
    return (
        <Char>{name}</Char>
    )
}

export default Character;