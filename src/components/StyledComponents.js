import styled from "styled-components";
import { Link } from "react-router-dom";

/* Header */
export const Header = styled.header`
  width: 100%;
  padding: 20px;
  background-color: blue;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: white;

  h1 {
    color: white;
  }
`;

export const Main = styled.main`
  width: 100%;
  padding: 50px;
  background-color: lightblue;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    border: 2px solid black;
    border-radius: 5px;
    margin-top: 20px;
    padding: 5px;
    width: fit-content;
    background: white;
    color: #4f46e5;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ButtonLink = styled(Link)`
    border: 2px solid black;
    border-radius: 5px;
    margin-top: 20px;
    padding: 5px;
    width: fit-content;
    background: white;
    color: #4f46e5;
    text-decoration: none;
    font-weight: bold;
    display: block;

  &:hover {
    text-decoration: underline;
  }
`;

/* GlobalStyle */
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }

  h1, h2, h3 {
    font-weight: bold;
    color: #222;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
