import styled from 'styled-components'
import { Link as LinkRoute } from 'react-router-dom'

const Link = styled(LinkRoute)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px; 
`
const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px regba(0, 0, 0, .2);
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`

export {
  Link,
  Image
}
