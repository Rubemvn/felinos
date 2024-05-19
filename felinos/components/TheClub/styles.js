import Image from "next/image"
import styled from "styled-components"

export const Container = styled.section`
width: 100%;
height: 100vh;

background-image: url("/images/images/bg-tclub.png");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-clip: border-box;

display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
`
export const Title = styled.h2`
text-align: center;
font-size: 9rem;
font-weight: 500;
color: ${(props) => props.theme.colors.white};

b{
  font-weight: 800;
}
`
export const Content = styled.div`
display:grid;
width:130rem;
grid-template-columns: repeat(2, 1fr);
border-radius: 1.5rem;
overflow: hidden;
`

export const TextContent = styled.div`
background-color: ${(props) => props.theme.colors.secondary};
padding: 2.5rem;
p {
  font-size: 2.8rem;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
}
`

export const FeedbacksContent = styled.div`
padding: 2.5rem;
display: flex;
justify-content: start;
align-items: center;
gap: 2rem;
flex-direction: column;
background-color: ${(props) => props.theme.colors.white}
`
export const Feedback = styled.div`
display: flex;
flex-direction: column;
gap: .8rem;


.title{
  display: flex;
  align-items: center;
  gap: .8rem;
  
}
.title p{
  font-size:2.6rem ;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  
}

.title small{
  font-size:2rem ;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
}

.feedbackText{
  display: flex;
  color: ${(props) => props.theme.colors.white};
  padding:2rem;
  border-radius: 1rem;

  -webkit-box-shadow: 0px 10px 15px 5px rgba(0,0,0,0.15);
-moz-box-shadow: 0px 10px 15px 5px rgba(0,0,0,0.15);
box-shadow: 0px 10px 15px 5px rgba(0,0,0,0.15);
}

.feedbackText p{
  font-size: 2rem;
  font-weight: 500;
}

.one{
  background-color: ${(props) => props.theme.colors.tertiary};
}
.two{
  background-color: ${(props) => props.theme.colors.secondary};
}
.three{
  background-color: ${(props) => props.theme.colors.primary};
}

`

export const Profile = styled(Image)`
width: 5.1rem;
height: 5.1rem;

`

