"use client";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/montserrat.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/montserrat.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/montserrat.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/montserrat.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/montserrat.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/montserrat.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/montserrat-italic.ttf') format('truetype');
  font-weight: 400;
  font-style: italic;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/montserrat-italic.ttf') format('truetype');
  font-weight: 500;
  font-style: italic;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/montserrat-italic.ttf') format('truetype');
  font-weight: 600;
  font-style: italic;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/montserrat-italic.ttf') format('truetype');
  font-weight: 700;
  font-style: italic;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/montserrat-italic.ttf') format('truetype');
  font-weight: 800;
  font-style: italic;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/montserrat-italic.ttf') format('truetype');
  font-weight: 900;
  font-style: italic;
}



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
