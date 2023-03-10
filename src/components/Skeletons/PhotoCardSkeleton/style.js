import styled from 'styled-components'
import { skeletonBackground } from '../../../styles/animation'

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
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  ${skeletonBackground}
`
const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 4px;
  }
`

export {
  ImgWrapper,
  Img,
  Button
}
