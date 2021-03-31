import styled from 'styled-components'
import { Telephone } from '@styled-icons/foundation/Telephone'
import { Whatsapp } from '@styled-icons/fa-brands/Whatsapp'
import { Menu } from '@styled-icons/heroicons-outline/Menu'
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline'
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--secundary-color);
  position: absolute;
  z-index: 1000;
  @media screen and (min-width: 768px) {
    position: absolute;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  background-color: #18131f;
  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
    position: relative;
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-around;
  }
  z-index: 1000;
`

export const WhatsappIcon = styled(Whatsapp)`
  color: var(--primary-color);
  width: 1.5rem;
  height: 1.5rem;
`

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${({ whatsapp }) =>
    whatsapp ? 'var(--fifth-color)' : 'var(--fourth-color)'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`
export const TelphoneIcon = styled(Telephone)`
  color: var(--primary-color);
  width: 1.5rem;
  height: 1.5rem;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`
export const MenuIcon = styled(Menu)`
  color: var(--primary-color);
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`
export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 21rem;
  }
  @media screen and (min-width: 1024px) {
    width: 10rem;
  }
`
export const SubMenuTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--fourth-color);
  padding: 0.35rem;
  box-shadow: 0px 2px 4px #00000026;
`
export const MenuTitle = styled.p`
  font-weight: 500;
  font-family: 'Noto Sans HK', sans-serif;
  font-size: 1rem;
  padding: 2px;
`
export const PrincipalMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  @media screen and (min-width: 768px) {
    background: var(--eighth-color);
    flex-direction: column;
    width: 21rem;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    background: transparent;
  }
`
export const ArrowUp = styled(ArrowIosUpwardOutline)`
  color: var(--primary-color);
  width: 1.5rem;
  height: 1.5rem;
`
export const ArrowDown = styled(ArrowIosDownwardOutline)`
  color: var(--primary-color);
  width: 1.5rem;
  height: 1.5rem;
`
export const MenuList = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 1rem;
  background: var(--eighth-color);
  @media screen and (min-width: 768px) {
    display: ${({ submenu, isOpen }) => {
      if (submenu && !isOpen) {
        return 'none'
      } else {
        return 'flex'
      }
    }};
    padding: 0 0.3rem;
    background: transparent;
    flex-direction: column;
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    display: ${({ submenu, isOpen }) => {
      if (submenu && !isOpen) {
        return 'none'
      } else {
        return 'flex'
      }
    }};
    padding: 0;
    background: transparent;
    flex-direction: ${({ submenu }) => (submenu ? 'column' : 'row')};
    width: 100%;
  }
`
export const MenuOptionList = styled.li`
  padding: ${({ submenu }) => (submenu ? '0.5rem 1rem ' : '0.5rem 0')};
  margin: ${({ submenu }) => (submenu ? '0 0 0.1rem 0.1rem' : '0.1rem 0')};
  border-bottom: 2px solid var(--ninth-color);
  background-color: var(--eighth-color);
  width: 20rem;

  font-size: 1rem;
  @media screen and (min-width: 1024px) {
    margin: 0;
    padding: 0.5rem;
    width: ${({ submenu }) => (submenu ? '8.5rem' : '100%')};
  }
`
