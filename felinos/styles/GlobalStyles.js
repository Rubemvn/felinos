"use client";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'); */

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
  font-family: 'Montserrat';
}

*, button, input {
  border: 1;
  outline: 0;
  font-family: 'Montserrat';
}

button {
  cursor: pointer;
}


`;
