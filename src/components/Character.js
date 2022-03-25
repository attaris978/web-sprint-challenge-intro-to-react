// Write your Character component here
import styled from "styled-components";

const Char = styled.p`
  animation-duration: 3s;
  animation-name: slideinright;
  @keyframes slideinright {
    from {
      margin-left: 100%;
      width: 300%;
    }
    to {
      margin-left: 0%;
      width: 100%;
    }
  }
  &:hover {
    color: red;
    /* animation-duration:2s;
    animation-name:fadetored;
    @keyframes fadetored {
        from{
            color:white;
        }
        50%{
            color:darkred;
        }
        to{
            color:white;
        }
    } */
  }
`;
const Character = (props) => {
  const { name } = props;
  return <Char>{name}</Char>;
};

export default Character;
