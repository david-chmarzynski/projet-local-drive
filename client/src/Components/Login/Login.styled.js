import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

export const StyledLogin = styled.div`

  width: 100%;
  height: 100%;
  padding-bottom: 4rem;
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

  .MuiTextField-root {
    margin-bottom: 3rem;
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

export const StyledLoginClosing = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  button {
    color: white;
  }
`;

export const StyledLoginTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  a{
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    font-size: 1.2vw;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  a:nth-child(1) {
    text-decoration: ${props => props.display === "signin" ? "underline" : "none"};
  }

  a:nth-child(2) {
    text-decoration: ${props => props.display === "signup" ? "underline" : "none"};
  }

  @media (max-width: 768px) {
    a {
      font-size: 4vw;
    }
  }

  @media (min-width: 766px) and (max-width: 1025px) {
    a {
      font-size: 3vw;
    }
  }
`;

export const StyledLoginImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const StyledLoginDialog = styled(Dialog)`

`;

export const StyledLoginInput = styled(TextField)`
  width: 70%;
  text-transform: uppercase;
  font-size: 12px;

  /* Soulignement Before & After */
  .MuiInput-underline:before {
    border-color: white;
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid white;
  }

  .MuiInput-underline:hover {
    border-color: yellow;
  }

  .MuiFormLabel-root {
    color: white;
    font-weight: 700;
  }

  .MuiFormLabel-root.Mui-focused {
    color: white;
  }

  .MuiInputBase-root {
    color: white;
  }
`;
export const StyledLoginButton = styled.button`
  width: 70%;
  height: 48px;
  text-transform: uppercase;
  color: white;
  font-weight: 900;
  border: none;
  border-radius: 5px;
  background: rgb(90,204,193);
  background: -moz-linear-gradient(262deg, rgba(90,204,193,1) 0%, rgba(11,191,214,1) 100%);
  background: -webkit-linear-gradient(262deg, rgba(90,204,193,1) 0%, rgba(11,191,214,1) 100%);
  background: linear-gradient(262deg, rgba(90,204,193,1) 0%, rgba(11,191,214,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5accc1",endColorstr="#0bbfd6",GradientType=1);

  :focus {
    outline: white auto 1px;
  }
`;

export const StyledLoginForm = styled.form`
  text-align: center;
`;

export const StyledLoginCheckBox = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-weight: 600;
  text-transform: uppercase;

  .MuiCheckbox-root	{
    color: white;
  }

  .MuiTooltip-popper {
    margin-top: -2rem;
  }
`;

export const StyledCheckBox = styled(Checkbox)`
  
`;