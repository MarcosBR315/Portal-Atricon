import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: white; /*branco alternativo: #f9f9f9*/
    color: #333;
    line-height: 1.5;
  }

  h1, h2, h3 {
    font-weight: bold;
    color: #222;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 120px;
  padding: 0 20px;
  background-color: #2fa3d9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  h1 {
    color: white;
    font-size: 30px;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
  }

  .logoHorizontal {
    height: 80px;
    object-fit: contain;
    position: absolute;
    left: 20px;
  }

  @media (max-width: 768px) {
    height: 100px;

    h1 {
      font-size: 24px;
    }
    .logoHorizontal {
      height: 60px;
      left: 10px;
    }
  }

  @media (max-width: 600px) {
    justify-content: space-between;
    padding: 0 12px;

    h1 {
      position: static;
      left: auto;
      transform: none;
      text-align: left;
      margin: 0;
      font-size: 22px;
    }

    .logoHorizontal {
      position: static; /* participa do fluxo/flex */
      height: 60px;
      /* se precisar garantir que fique sempre à esquerda:
         order: -1;
      */
    }
  }

  @media (max-width: 480px) {
    height: 80px;

    h1 {
      font-size: 20px;
    }
    .logoHorizontal {
      height: 50px;
      left: 5px;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background-color: white;

  .buttonsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  

  @media (max-width: 768px) {
    padding: 40px 15px;

    a {
      font-size: 1rem;
      padding: 12px 30px;
    }
  }

  @media (max-width: 480px) {
    padding: 30px 10px;

    a {
      font-size: 0.9rem;
      padding: 10px 25px;
    }
`;

export const A = styled.a`
  background: none;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border: 2px solid;
  border-radius: 8px;
  padding: 10px;

  img {
    width: 150px;
    margin: 10px;
  }

  &:hover {
    background: #f1f1f1;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const ButtonLink = styled(Link)`
  border-radius: 8px;
  margin-top: 20px;
  padding: 14px 35px;
  width: fit-content;
  background-color: #4f46e5;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  display: block;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #3730a3;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 30px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 10px 25px;
  }
`;
