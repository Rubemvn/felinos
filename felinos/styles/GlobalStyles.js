"use client";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
  size: 62.5%;
  scroll-behavior: smooth;
}

html, body, :root{
  height: 100%;
}

body{
  scroll-behavior: smooth;
  width: 100%;
  height: 100vh;
}

*, button, input {
  border: 1;
  outline: 0;
  font-family: 'Montserrat', 'Roboto';
}

button {
  cursor: pointer;
}


`;
