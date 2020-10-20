import styled from 'styled-components';

export const StyledFooter = styled.div`
    height: 20vh;
    max-width: 100%;
    background-color: #244958;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    font-size: 1.5vw;

    @media (max-width: 767px) {
      font-size: 4vw;
    }
`;

export const StyledFooterLinks = styled.div`
  display: flex;
    flex-direction: column;
    
    & > a {
        color: orange;
    }
`;

export const StyledFooterCopyright = styled.div`
  p {
    color: orange;
  }
`;

export const StyledFooterSocial = styled.div`
  a {
    color: white;
    margin: .2rem;
  }
`;