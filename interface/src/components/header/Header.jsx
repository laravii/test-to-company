import React, { useState } from 'react'
import dealerLogo from '../../assets/dealer-logo.svg'
import fiatLogo from '../../assets/fiat-logo.svg'
import {
  HeaderContainer,
  Container,
  IconContainer,
  Icon,
  TelphoneIcon,
  WhatsappIcon,
  MenuIcon,
  ArrowUp,
  ArrowDown,
  MenuContainer,
  MenuTitle,
  SubMenu,
  PrincipalMenu,
  SubMenuTitleBox,
  MenuList,
  MenuOptionList,
} from './styles.js'

export const Header = () => {
  const [showPrincipalMenu, setShowPrincipalMenu] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)
  const submenuOptions = ['Quem Somos', 'Fale Conosco', 'Endereços']
  const menuOptions = [
    'Novos',
    'Ofertas',
    'Seminovos',
    'Consórcio',
    'Vendas direta',
    'Lifestyle',
    'Pós-vendas',
  ]
  return (
    <HeaderContainer>
      <Container>
        <MenuIcon
          onClick={() =>
            showPrincipalMenu
              ? setShowPrincipalMenu(false)
              : setShowPrincipalMenu(true)
          }
        />
        <img src={dealerLogo} alt="Logo Dealer" />
        <IconContainer>
          <Icon>
            <TelphoneIcon />
          </Icon>
          <Icon whatsapp>
            <WhatsappIcon />
          </Icon>
        </IconContainer>
        <img src={fiatLogo} alt="Logo Fiat" />
      </Container>
      <PrincipalMenu isOpen={showPrincipalMenu}>
        <SubMenu
          onClick={() =>
            showSubMenu ? setShowSubMenu(false) : setShowSubMenu(true)
          }
        >
          <SubMenuTitleBox>
            <MenuTitle>Institucional</MenuTitle>
            {showSubMenu ? <ArrowUp /> : <ArrowDown />}
          </SubMenuTitleBox>
          <MenuList isOpen={showSubMenu} submenu>
            {submenuOptions.map((option, index) => {
              return (
                <>
                  <MenuOptionList submenu key={index}>
                    {option}
                  </MenuOptionList>
                </>
              )
            })}
          </MenuList>
        </SubMenu>
        <MenuList isOpen>
          {menuOptions.map((option, index) => {
            return <MenuOptionList key={index}>{option}</MenuOptionList>
          })}
        </MenuList>
      </PrincipalMenu>
    </HeaderContainer>
  )
}
