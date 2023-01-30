import styled, { css } from 'styled-components'
import { bounceDown } from '../../styles/animation'

const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  margin-bottom: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
  ${props => props.fixed && css`
  {
    ${bounceDown()}
    background-color: #ffffff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;

  }
  `}
`
const Item = styled.li`
  padding: 0 8px;
`

export {
  List,
  Item
}
