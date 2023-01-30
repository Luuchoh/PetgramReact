import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
from {
 filter: blur(5px);
 opacity: 0;
}
to {
 filter: blur(0);
 opacity: 1;
}
`
const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
 animation: ${time} ${fadeInKeyFrames} ${type};
`

const bounceDownKeyFrames = keyframes`
 0% {
    top: -80px;
  }

  25% {
    top: -20px;
  }

  40%{
    top: -10px
  }

  65%{
    top: -23px
  }

  100% {
    top: -20px;
  }
`
const bounceDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${bounceDownKeyFrames} ${type};
  `

const skeletonLoading = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -135% 0%;
  }
`
const skeletonBackground = () => (
  css`
    background: 
      linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%);
      background-size: 400% 400%;
      animation: ${skeletonLoading} 1.2s ease-in-out infinite;
  `
)
export {
  fadeIn,
  bounceDown,
  skeletonBackground
}
