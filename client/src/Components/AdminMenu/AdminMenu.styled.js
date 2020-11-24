import styled from 'styled-components';

export const StyledAdminMenu = styled.div`
  width: 30%;
  height: 100%;
  margin-right: 1rem;
  background-color: #244958;

`;

export const StyledAdminMenuTitle = styled.h2`
  color: white;
  font-weight: 600;
  text-transform: uppercase;
`;

export const StyledAdminMenuButton = styled.div`
  position: absolute;
  left: ${props => props.open ? "25%" : ".5rem"};
  top: 10vh;
  transition: .3s;

  button {
    color: ${props => props.open ? "white" : "black"}
  }
`;