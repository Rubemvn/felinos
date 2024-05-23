"use client"
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import theme from '@/styles/theme'
import MemberButton from '../MemberButton/MemberButton'


export const Container = styled.header` 
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  
  `

export const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 158rem;
  `

export const Logo = styled(Image)`
  height: 10rem;
  width: auto;
  padding: 1rem 0;
  `

export const List = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
gap: 5.2rem;
li {
  list-style: none;
  font-size: 2rem;
}

@media ${({ theme }) => theme.device.laptop} {
  display: ${({ display }) => display ? "flex" : ("none")};
}
`

export const LinkBar = styled(Link)`
color: ${(props) => props.theme.colors.primary};
text-decoration: none;
display: flex;
font-weight: 700;


@media ${({ theme }) => theme.device.laptop} {
}
`

export const MenuHamburger = styled.div`
display: none;
align-items: center;

.line1{
  width: 100%;
}
.line2{
  width: 80%;
}
.line3{
  width: 80%;
}
.line1, .line2, .line3{
  height: .6rem;
  border-radius: .5rem;
  background-color: ${({ theme }) => theme.colors.primary};
}

@media ${({ theme }) => theme.device.laptop} {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 6rem;
  height: 5rem;
}
`
