// Write your Character component here
import styled from "styled-components";
import Info from "./Info";

const Char = styled.div`
display:flex;
justify-content:center;
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
`;
const Character = (props) => {
  const { name, birth } = props;
  return (
    <Char>
      <Info name={name} birth={birth}/>
    </Char>
  );
};

export default Character;
