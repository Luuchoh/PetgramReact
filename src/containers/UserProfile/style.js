import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 185px);
`
const Title = styled.h2`
  padding: 16px 0;
`
const WrapperImg = styled.div`
  width: 150px;
  border-radius: 50%;
  overflow: hidden;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`
const WrapperInfo = styled.div`
  padding: 16px 0;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`
const Paragraph = styled.p`
  padding: 8px 0;
  text-align: center;
`
const Button = styled.button`
  border: none;
  border-radius: 4px;
  margin-top: 8px;
  color: #ffffff;
  width: 100%;
  padding: 8px 6px;
  background-color: #4774F4;
  transition: background-color .5s ease;
  
  &:hover {
      background-color: #2057F4;
  }
`
export {
  Container,
  Title,
  WrapperImg,
  Img,
  WrapperInfo,
  Paragraph,
  Button
}
