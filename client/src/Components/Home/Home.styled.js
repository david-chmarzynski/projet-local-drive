import styled from 'styled-components';
import BckImg from "./background-image.jpg";

export const StyledHome = styled.div`
  width: 100%;
  height: 92vh;
  background-image: url(${BckImg});
  background-position: bottom;
  background-size: cover;
`;

export const StyledHomeTitle = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 5.3rem;
  text-align: center;
  font-size: 12vw;
  font-weight: 700;
  text-transform: uppercase;
`;