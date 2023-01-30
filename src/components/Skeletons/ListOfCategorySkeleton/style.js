import styled from 'styled-components'
import { skeletonBackground } from '../../../styles/animation'

const ContainerCategorySkeleton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 8px;
`

const CategoryImage = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    ${skeletonBackground}
`

const CategoryTitle = styled.div`
    width: 26px;
    height: 15px;
    margin-top: 8px;
    ${skeletonBackground}
`
export {
  ContainerCategorySkeleton,
  CategoryImage,
  CategoryTitle
}
