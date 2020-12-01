import styled from 'styled-components';


export const StyledAdminNav = styled.div`
    
    width: 15%;
    min-height: 92vh;

    /* svg {
      width: 100%;
      margin: auto;
      margin-top: 1rem;
      cursor: pointer;

      .deployed {
        animation: deployRotateIcon .5s forwards;
      }

      .undeployed {
        animation: undeployRotateIcon .5s forwards;  
      }
    } */

    .undeployed {
        animation: undeployAdminMenu .5s;
    }

    .accordion {
      margin-top: 4rem;
    }

  // KEYFRAMES
  @keyframes deployAdminMenu {
      0% {
          width: 5%;
      }
      100% {
          width: 15%;
      }
  }

  @keyframes undeployAdminMenu {
      0% {
          width: 15%;
      }
      100% {
          width: 5%;
      }
  }

  @keyframes deployRotateIcon {
      0% {
          transform: rotate(0deg);
          margin-left: 0;
      }
      100% {
          transform: rotate(180deg);
          margin-left: 80%;
      }
  }

  @keyframes undeployRotateIcon {
      0% {
          transform: rotate(0deg);
          margin-left: 35%;
      }
      100% {
          transform: rotate(-180deg);
          margin-left: 0;
      }
  }
`;