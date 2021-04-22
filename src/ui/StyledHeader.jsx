import styled from "styled-components";
import defaultImg from "../assets/images/room-1.jpeg";


const StyledHeader = styled.header`
  min-height: 60vh;
  /* background: url(${defaultImg}); */
  background: url(${props => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHeader;
