import React from 'react'
import firstCar from '../../assets/first-car.png'
import secondCar from '../../assets/second-car.png'
import divisionBar from '../../assets/bar.svg'
import { Warning } from '../../styles/globalStyles'
import {
  Container,
  Banner,
  ScrollBannerContainer,
  ScrollBannerPoint,
  RightArrow,
  GoNextArrow,
  WhatsappIcon,
  Icon,
  AdvertsingContainer,
  Advertsing,
  ProductName,
  MainButton,
  Img,
} from './styles'

export const Main = () => {
  return (
    <Container>
      <Banner>
        <ScrollBannerContainer>
          <ScrollBannerPoint isActive></ScrollBannerPoint>
          <ScrollBannerPoint></ScrollBannerPoint>
          <ScrollBannerPoint></ScrollBannerPoint>
          <ScrollBannerPoint></ScrollBannerPoint>
          <RightArrow></RightArrow>
        </ScrollBannerContainer>
      </Banner>
      <AdvertsingContainer>
        <Advertsing>
          <Warning>Novo</Warning>
          <Img src={secondCar} alt="Carro" />
          <ProductName>CRONOS</ProductName>
          <p className="product-value">A partir de R$169.990</p>
          <MainButton>
            <GoNextArrow />
            Saiba mais
          </MainButton>
        </Advertsing>
        <Advertsing>
          <Warning isNew>Novo</Warning>
          <Img src={firstCar} alt="Carro" />
          <ProductName>CRONOS</ProductName>
          <p className="product-value">A partir de R$169.990</p>
          <MainButton>
            <GoNextArrow />
            Saiba mais
          </MainButton>
        </Advertsing>
      </AdvertsingContainer>
      <Icon>
        <WhatsappIcon />
      </Icon>
      <Img isBar src={divisionBar} alt="Barra" />
      <MainButton moreProducts> VER TODOS OS MODELOS</MainButton>
    </Container>
  )
}
