import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const StyledHeader = styled.div`
    max-width: 100%;
    height: 8vh;
    display: flex;
    padding: .5em;
    align-items: center;
    justify-content: space-between;
    background-color: #244958;
    -webkit-box-shadow: 0px 2px 8px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 8px -2px rgba(0,0,0,0.75);
    box-shadow: 0px 2px 8px -2px rgba(0,0,0,0.75);
`;

export const StyledHeaderLogo = styled.div`
  img {
    height: 64px;
    width: 48px;
    margin-top: .2em;
    cursor: pointer;
    }

  @media (max-width: 900px) {
    img  {
        height: 54px;
        width: 42px;
    }
  }
`;

export const StyledHeaderIcons = styled.div`
    min-width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    svg {
      transition: .3s;
      color: white;
      cursor: pointer;
      color: white;
    }
    svg:hover {
      transition: .3s;
      transform: scale(1.1);
    }
`;

export const StyledHeaderIconsLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  svg {
    margin-bottom: -1rem;
  }
`;

export const StyledHeaderIconsRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  svg {
    margin-bottom: -1rem;
  }
  svg:nth-child(1) {
    margin-right: .6rem;
    margin-left: .4rem;
  }
`;

export const StyledSearchBar = styled(TextField)`
  width: 80%;
  label {
    color: white;
  }
  label.Mui-focused {
    color: white;
  }
  .MuiInputBase-input {
    color: white;
  }

  .MuiInput-underline:before {
    border-bottom: 2px solid #FA7504;
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid white;
  }
`;