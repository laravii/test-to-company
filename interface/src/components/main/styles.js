import styled from 'styled-components'
import BannerImg from '../../assets/banner.png'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'
import { Whatsapp } from '@styled-icons/fa-brands/Whatsapp'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  width: 100%;
`
export const Banner = styled.div`
  margin: 0;
  padding: 0;
  height: 50vh;
  width: 19rem;
  background-image: url(${BannerImg});
  background-size: cover;
  background-position: center;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  color: var(--primary-color);
  transition: 0.5s;
  margin-top: 2rem;
  @media screen and (min-width: 768px) {
    width: 80%;
    height: 80vh;
    margin-top: 5rem;
  }
  @media screen and (min-width: 1024px) {
    width: 45%;
    height: 80vh;
  }
`

export const ScrollBannerContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ScrollBannerPoint = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${({ isActive }) =>
    isActive ? 'var(--primary-color)' : 'transparent'};
  border: 2px solid var(--primary-color);
  z-index: 5;
  margin: 10px;
`
export const RightArrow = styled(ArrowRight)`
  width: 1rem;
  height: 1rem;
  color: var(--primary-color);
`
export const GoNextArrow = styled(ArrowIosForwardOutline)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--fourth-color);
`
export const WhatsappIcon = styled(Whatsapp)`
  color: var(--primary-color);
  width: 2rem;
  height: 2rem;
  z-index: 50;
`

export const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: var(--fifth-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  top: 65%;
  left: 80%;
  position: fixed;
  @media screen and (min-width: 768px) {
    top: 80%;
    left: 90%;
  }
`
export const AdvertsingContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0.658rem;
  gap: 1rem;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`
export const Advertsing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--second-color);
  .product-value {
    font-size: 0.7rem;
    font-family: 'Noto Sans HK', sans-serif;
    line-height: 1.5;
  }
`
export const ProductName = styled.h1`
  font-size: 1.1rem;
  font-weight: 900;
  font-family: 'Noto Sans HK', sans-serif;
  line-height: 1.5;
`
export const MainButton = styled.button`
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Noto Sans HK', sans-serif;
  border: ${({ moreProducts }) =>
    moreProducts ? '1.5px solid var(--fourth-color)' : 'none'};
  background: transparent;
  color: var(--second-color);
  padding: 0.5rem;
  width: 95%;
  margin-top: ${({ moreProducts }) => (moreProducts ? '2rem' : 'none')};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`
export const Img = styled.img`
  width: 95%;
  object-fit: cover;
  border-radius: 10px;
  @media screen and (min-width: 1024px) {
    width: ${({ isBar }) => isBar && '70%'};
  }
`
