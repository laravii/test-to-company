import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 *{
     box-sizing: border-box;
     margin: 0;
     border:0;
    padding: 0;
 }
:root {
--primary-color: #FFFFFF;
--second-color: #EDEDE3;
--third-color: #D0CED1;
--fourth-color: #FF1430;
--fifth-color: #2FB640;
--sixth-color: #DDDDDD;
--seventh-color: #2B222F;
--eighth-color: #433B47;
--ninth-color: #726C75;
}
 a{
     text-decoration: none;
 }
 ul,li{
     list-style: none;
 }
  body {
    font-family: 'Didact Gothic', sans-serif;
    background-color: #18131F;
    color: #FFFFFF;
    font-size: 1.4rem;

@media (min-width: 768px) {
  font-size: .875rem;
}

@media (min-width: 1024px) {
  font-size: 1rem;
}
}
`
export const Warning = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--fourth-color);
  width: auto;
  height: 1rem;
  font-size: 0.8rem;
  border-radius: 5px;
  z-index: 3;
  padding: 5px;
  opacity: ${({ isNew }) => (isNew ? '1 ' : '0')};
`

export default GlobalStyle
