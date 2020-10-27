import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

export const StyledMenu = styled.div`
  width: 100%;
  height: 100%;
  /* padding-bottom: .5rem; */
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  background: rgb(31,45,68);
  background: -moz-linear-gradient(264deg, rgba(31,45,68,1) 0%, rgba(58,74,100,1) 100%);
  background: -webkit-linear-gradient(264deg, rgba(31,45,68,1) 0%, rgba(58,74,100,1) 100%);
  background: linear-gradient(264deg, rgba(31,45,68,1) 0%, rgba(58,74,100,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1f2d44",endColorstr="#3a4a64",GradientType=1);

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border-bottom: 1px solid white;
    -webkit-text-fill-color: white;
    transition: background-color 5000s ease-in-out 0s;
  }

  img {
    height: 77px;
    width: 60px;
  }

  h1 {
    text-align: center;
    color: #FFFFFF;
    text-transform: uppercase;
    margin-bottom: 3rem;
    margin-block-start: 0;
  }
`;

export const StyledDialogMenu = styled(Dialog)`
  .MuiDialog-paperWidthSm {
    width: 30%;
  }
`;

export const StyledMenuClosing = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  button {
    color: white;
  }
`;

export const StyledMenuTitle = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  font-size: 1.2vw;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (max-width: 768px) {
    h2 {
      font-size: 4vw;
    }
  }

  @media (min-width: 766px) and (max-width: 1025px) {
    h2 {
      font-size: 3vw;
    }
  }
`;

export const StyledMenuImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const StyledMenuTiles = styled.div`
  width: 100%;
  height: auto;

  .menu-tile {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-top: 1px solid #046E8F;
    cursor: pointer;
    text-align: center;
  }

  h3 {
    width: 100%;
    text-transform: uppercase;
    color: white;
    display: inline;
    transition: .3s;
  }


  .menu-tile:hover {
    box-shadow: 0px 0px 6px 0px rgba(44,87,132,1);
  }

  .logout:hover {
    h3 {
      color: red;
      transition: .3s;
    }
  }
`;