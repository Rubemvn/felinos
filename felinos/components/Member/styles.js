import Link from "next/link";
import styled, { keyframes } from "styled-components";

export const Container = styled.section`
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;
min-height: 100vh;

background-image: url("/images/images/bg-member.png");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-clip: border-box;
padding: 1rem 0;
gap: 1rem;
`

export const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 3rem;

img{
  width: 10rem;
  height: auto;
}

h2{
  font-size: 6.4rem;
  background: #060C7D;
  background: linear-gradient(to right, #060C7D 0%, #1917C8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 650px){
  h2{
    font-size: 5rem;
  }
  img{
    width: 8rem;
  }
}
@media screen and (${({ theme }) => theme.device.mobileL}){
  h2{
    font-size: 4rem;
  }
  img{
    width: 7rem;
  }
}
    
`

export const Content = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 2rem;
width: 90%;
height: 100%;

@media screen and (max-width: 1300px){
  width: 70%;
  grid-template-columns: repeat(2, 2fr);
}
@media screen and (${({ theme }) => theme.device.laptop}){
  width: 85%;
}
@media screen and (${({ theme }) => theme.device.tablet}){
  width: 90%;
}
@media screen and (max-width: 650px){
  width: 80%;
  grid-template-columns: repeat(1, 4fr);
}
@media screen and (${({ theme }) => theme.device.mobileL}){
  width: 90%;
}

`

export const Plan = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 1rem;
overflow: hidden;
min-height: 65.5rem;
flex-direction: column;
background-color: ${(props) => (props.setPlan === "gold") ?
    props.theme.colors.gold01 :
    (props.setPlan === "gold+" ? props.theme.colors.goldPlus01 :
      (props.setPlan === "platinum" ? props.theme.colors.platinum01 :
        props.theme.colors.black))};
color:${(props) => (props.setPlan === "gold") ?
    props.theme.colors.gold02 :
    (props.setPlan === "gold+" ? props.theme.colors.goldPlus02 :
      (props.setPlan === "platinum" ? props.theme.colors.platinum02 :
        props.theme.colors.white))};
        

-webkit-box-shadow: 0px 15px 15px 5px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 15px 15px 5px rgba(0,0,0,0.25);
box-shadow: 0px 15px 15px 5px rgba(0,0,0,0.25);

`

export const List = styled.ul`
text-align: start;
display: flex;
flex-direction: column;
width: 100%;
padding: 0 1rem;
padding: 1.5rem 2rem;
list-style: none;

h3{
  font-size: 5rem;
  margin-bottom: 1rem;
  text-align: center;
}

li{
  font-size: 2.6rem;
  font-weight: 500;
}

@media screen and (${({ theme }) => theme.device.laptopL} ){
  h3{
    font-size: 4rem;
  }
  li{
    font-size: 2rem;
  }
}

@media screen and (max-width: 1300px){
  h3{
    font-size: 4.5rem;
  }
  li{
    font-size: 2.3rem;
  }
}
@media screen and (${({ theme }) => theme.device.mobileL}){
  li{
    font-size: 2rem;
  }
  
}
`

export const toSwing = keyframes`
25%{
      transform: rotate(1deg);
  }
  50%{
      transform: rotate(0deg);
  }
  75%{
      transform: rotate(-1deg);
  }
  100%{
      transform: rotate(0deg);
  }
`

export const ButtonSign = styled(Link)`
background-color: ${(props) => (props.setColor === "gold") ?
    props.theme.colors.gold02 :
    (props.setColor === "gold+" ? props.theme.colors.goldPlus02 :
      (props.setColor === "platinum" ? props.theme.colors.platinum01 :
        props.theme.colors.black))};
color: ${(props) => (props.setColor === "platinum" ?
    props.theme.colors.platinum02 : props.theme.colors.white)};
font-size: 3rem;
font-weight: 600;
border: none;
border-radius: .7rem;
height: 6rem;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
text-decoration: none;

transition: scale 0.2s ease;

	&:hover {
		animation: ${toSwing} 0.3s linear infinite;
	}

	&:hover {
		scale: 1.05;
	}

`

export const Price = styled.div`
width: 100%;
padding: 1.5rem;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3rem;
background-color: ${(props) => (props.setColor === "black") ?
    props.theme.colors.black01 :
    (props.setColor === "platinum" ? props.theme.colors.platinum03 :
      props.theme.colors.white)};
    
img{
  margin-top: -5rem;
  height: 8rem;
  width: auto;
}

h4{
  font-size: 5rem;
}

p{
  font-size: 3rem;
  font-weight: 600;
  font-style: italic;
  text-align: right;
  width: 100%;
  margin-top: -1rem;
  margin-bottom: 1rem;
}

@media screen and (${({ theme }) => theme.device.laptopL} ){
  h4{
    font-size: 4rem;
  }
  p{
    font-size: 2.4rem;
  }
  img{
    height: 7rem;
    width: auto;
  }
}
@media screen and (max-width: 1300px){
  h4{
    font-size: 4.5rem;
  }
}

`