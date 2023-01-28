import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 185px);
`
const Svg = styled.svg`
  width: 180px;
`
const Title = styled.h2`
  margin: 8px 0;
`
const Paragraph = styled.p`
  font-style: italic;
  text-align: center;

  & span {
    font-weight: bold;
    color: #2057F4;

    &:hover {
      color: #4774F4;
    }
  }
`
const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px;
  box-sizing: border-box;
`
const Input = styled.input`
  width: 100%;
  padding: 8px 4px;
  border: none;
  border-radius: 8px;
  border-bottom: 1px solid transparent;
  transition: border-bottom .5s ease-in;

  &:focus-visible {
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
  }

  &:disabled {
    opacity: .7;
  }
`
const Button = styled.button`
  width: 100%;
  padding: 8px 0;
  border-radius: 8px;
  background-color: #4774F4;
  border: none;
  color: #ffffff;
  font-weight: bold;
  transition: background-color .5s ease-in;

  &:hover {
    background-color: #2057F4;
  }

  &:disabled {
    opacity: .7;
  }
`

const Error = styled.span`
  width: 80%;
  margin: 0 auto;
  font-size: 14px;
  color: red;
  text-align: center;
`

export {
  Container,
  Svg,
  Title,
  Paragraph,
  Form,
  Input,
  Button,
  Error
}
