import styled from "styled-components";

const InfoP = styled.p`
display:flex;
justify-content:space-between;
width:60%;
  &:hover {
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: 2s;
    animation-name: fadetored;

    @keyframes fadetored {
      from {
        color: white;
      }
      to {
        color: darkred;
      }
    }
  }
`;
const Info = (props) => {
  const { name, birth } = props;
  return (
    <>
      <InfoP>
        <span>{name} </span>
        <span> {birth}</span>
      </InfoP>
    </>
  );
};
export default Info;
