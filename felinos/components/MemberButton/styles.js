import Image from 'next/image'
import styled from 'styled-components'


export const IconMember = styled(Image)`
z-index: 3;
width: 3.2rem;
height: auto;

`

export const Button = styled.button`
font-family: 'Montserrat';
position: relative;
font-size: 2rem;
font-weight: 700;
color: ${(props) => props.theme.colors.secondary};
border-radius: 1rem;
border: solid .3rem ${(props) => props.theme.colors.secondary};
width: 21.5rem;
height: 4.1rem;
display: flex;
justify-content: center;
align-items: center;
gap: 1.3rem;
background: none;

.bgButton{
  display: flex;
  height: 100%;
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  transition: all .5s ease;
}

transition: all .5s ease;

p{

  transition: all .15s ease;
}


&:hover{
  p{
    color: ${(props) => props.theme.colors.primary};
    z-index: 2;
  }
  
  .bgButton{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
    z-index: 1;
  }

}

`
