import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

const Article = styled.article`
  min-height: 200px;
`
const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`
const Img = styled.img`
  ${fadeIn()} 
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
const ContainerToggle = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: grid;
  place-items: center;
  z-index: 1001;
  background-color: rgba(0, 0, 0, .2);
`
const Toggle = styled.div`
  ${fadeIn}
  width: 80%;
  padding: 32px 0;
  display: grid;
  place-items: center;
  background-color: #ffffff;
  border-radius: 8px;

  & svg {
    font-size: 64px;
  }

  & h3 {
    text-align: center;
    margin: 8px 0;
  }

`
const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
`
const Link = styled(LinkRouter)`
  padding: 4px 8px;
  color: #ffffff;
  border-radius: 4px;
  
  &:nth-child(1){
    background-color: #2057F4;
  }

  &:nth-child(2){
    background-color: #F44771;
  }
`

export {
  Article,
  ImgWrapper,
  Img,
  ContainerToggle,
  Toggle,
  ButtonsWrapper,
  Link
}
