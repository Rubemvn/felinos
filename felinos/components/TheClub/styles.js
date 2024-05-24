import Image from "next/image"
import styled from "styled-components"

export const Container = styled.section`
width: 100%;
height: 100vh;

background-color: ${({ theme }) => theme.colors.primary};
background-image: url("/images/images/bg-tclub.png");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-clip: border-box;

gap: 2rem;
padding: 2rem 0;
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
@media ${({ theme }) => theme.device.laptopL} {
  height: auto;
  min-height: 100vh;

}
`
export const Title = styled.h2`
text-align: center;
font-size: 9rem;
font-weight: 500;
color: ${(props) => props.theme.colors.white};

b{
  font-weight: 800;
}

@media (max-width: 1610px) {
  font-size: 8rem;
  
}
  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 7rem;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 5.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 4rem; 
  }
  @media (max-width: 600px) {
    font-size: 3rem; 
  }
`
export const Content = styled.div`
display:grid;
width:80%;
grid-template-columns: 1fr 1fr;
border-radius: 1.5rem;
overflow: hidden;
-webkit-box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.1);
-moz-box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.1);
box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.1);

@media (max-width: 1610px) {
  width:90%;
}
@media ${({ theme }) => theme.device.laptopL} {
  height: auto;
}
@media ${({ theme }) => theme.device.tablet} {
  grid-template-columns: auto;
  grid-template-rows: auto auto;
}
`

export const TextContent = styled.div`
background-color: ${(props) => props.theme.colors.secondary};
padding: 2.5rem;
p {
  font-size: 2.8rem;
  font-weight: 500;
  text-align: justify;
  color: ${(props) => props.theme.colors.white};
}

-webkit-box-shadow: 0px 10px 15px 5px rgba(0,0,0,0.15);
-moz-box-shadow: 0px 10px 15px 5px rgba(0,0,0,0.15);
box-shadow: 0px 10px 15px 5px rgba(0,0,0,0.15);

@media ${({ theme }) => theme.device.laptopL} {
  p{
    font-size: 2.4rem;
  }
}
@media ${({ theme }) => theme.device.laptop} {
  p{
    font-size: 2rem;
  }
}
@media ${({ theme }) => theme.device.tablet} {
  padding: 1.5rem;
  p{
    font-size: 1.8rem;
  }
  
  -webkit-box-shadow: 0px 10px 15px 10px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 10px 15px 10px rgba(0,0,0,0.15);
  box-shadow: 0px 10px 15px 10px rgba(0,0,0,0.15);
}
@media (max-width: 600px) {
  p{
    font-size: 1.6rem;
  }
}
@media ${({ theme }) => theme.device.mobileM} {
  p{
    font-size: 1.4rem;
  }
}
`

export const FeedbacksContent = styled.div`
padding: 2.5rem;
display: flex;
justify-content: start;
align-items: center;
gap: 2rem;
flex-direction: column;
background-color: ${(props) => props.theme.colors.white};

@media ${({ theme }) => theme.device.tablet} {
  padding: 1.5rem;
}
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
  padding:1.5rem;
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

@media ${({ theme }) => theme.device.laptopL} {
  .title p{
    font-size:2.4rem ;
  }
  .title small{
    font-size:1.6rem ;
  }
  .feedbackText p{
    font-size: 1.8rem;
  }
}
@media ${({ theme }) => theme.device.laptop} {
  .title p{
    font-size:2rem ;
  }
  .title small{
    font-size:1.2rem ;
  }
  .feedbackText p{
    font-size: 1.4rem;
  }
}
@media ${({ theme }) => theme.device.tablet} {
  .feedbackText{
    padding: 1rem;


  }
}

@media ${({ theme }) => theme.device.mobileL} {
  .title p{
    font-size:1.8rem ;
  }
  .feedbackText p{
    font-size: 1.3rem;
  }
}
@media ${({ theme }) => theme.device.mobileM} {
  .title p{
    font-size:1.6rem ;
  }
  .title small{
    font-size:1rem ;
  }
  .feedbackText p{
    font-size: 1.2rem;
  }
}
`

export const Profile = styled(Image)`
width: 5.1rem;
height: auto;
@media ${({ theme }) => theme.device.laptopL} {
  width: 4.5rem;
}
@media ${({ theme }) => theme.device.laptop} {
  width: 4rem;
}
@media ${({ theme }) => theme.device.tablet} {
  width: 3.5rem;
}
`

