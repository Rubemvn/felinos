import Link from "next/link";
import styled, { keyframes } from "styled-components";

export const Container = styled.section`
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;

background-image: url("/images/images/bg-member.png");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-clip: border-box;
padding: 3rem 0;
gap: 3rem;

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
`

export const Content = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 2rem;
width: 80%;
height: 100%;

`

export const Plan = styled.div`
display: flex;
position: relative;
justify-content: start;
align-items: center;
padding: 1.5rem;
border-radius: 1rem;
overflow: hidden;
height: 100%;
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
        
h3{
  font-size: 5rem;
  margin-bottom: 1rem;
}

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
list-style: none;

li{
  font-size: 2.6rem;
  font-weight: 500;
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
width: calc(100% - 4rem);
margin: 2rem 0;
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
position: absolute;
bottom: 0;
left: 0;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${(props) => (props.setColor === "black") ?
    props.theme.colors.black01 :
    (props.setColor === "platinum" ? props.theme.colors.platinum03 :
      props.theme.colors.white)};
    
img{
  margin-top: -4rem;
}

h4{
  font-size: 6rem;
}

p{
  line-height: 1rem;
  font-size: 3rem;
  font-weight: 600;
  font-style: italic;
  width: 100%;
  text-align: end;
  margin-right: 10rem;
}

`