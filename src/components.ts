import styled, { createGlobalStyle } from "styled-components";
import { palette } from "./colours";

const { primary, white, accent, secondary } = palette;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 18px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${primary};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  h1 {
    font-size: 1.728rem;
    margin: 0;
    color: ${white};
    font-weight: 700;
  }

  h3 {
    font-size: 1.2rem;
    margin:0;
    font-weight: 300;
    color: ${secondary};
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  padding: 3rem 0 5rem;
  h3 {
    margin-bottom: 1rem;
  }
  h1 {
    margin-bottom: 3rem;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  h3 {
    margin-bottom: 1rem;
    font-weight: 500;
    color: ${white};
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const ArrivalsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
`;

export const Card = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  color: ${white};
  background-color: ${accent};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  .arrivalInfo {
    display: flex;
    flex-flow: column nowrap;
    font-weight: 300;
    gap: 0.5rem;
    .trainLine {
      font-size: 0.833rem;
    }
  }
`;
