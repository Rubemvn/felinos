import styled from "styled-components";

export const Container = styled.div`
position:fixed;
bottom: 5rem;
right: 3rem;
display: flex;
flex-direction: column-reverse;
gap: 3rem;

`
export const ButtonMixer = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
border: none;
padding: 2rem;
font-size:4rem;
color: ${props => props.theme.colors.white};
background-color: ${props => props.theme.colors.primary};

`
export const ButtonPlay = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius: 1rem;
border: none;
padding: 1.5rem;
font-size: 2rem;
color: ${props => props.theme.colors.white};
background-color: ${props => props.theme.colors.primary};

`
export const SkipAndBack = styled.div`
display: flex;
justify-content: space-between;

`
export const ButtonSkip = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 1rem;
padding: 1rem;
font-size:1.7rem;
color: ${props => props.theme.colors.white};
background-color: ${props => props.theme.colors.primary};

`
export const ButtonBack = styled.button`
border: none;
display: flex;
justify-content: center;
align-items: center;
border-radius: 1rem;
padding: 1rem;
font-size:1.7rem;
color: ${props => props.theme.colors.white};
background-color: ${props => props.theme.colors.primary};

`
