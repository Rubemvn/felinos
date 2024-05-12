"use client"
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'


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
`

export const LinkBar = styled(Link)`
color: ${(props) => props.theme.colors.primary};
text-decoration: none;
display: flex;
font-weight: 700;
`
