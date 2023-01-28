import React, { useContext } from 'react'
import { AppContext } from '../../context/AppProvider'
import useForm from '../../hooks/useForm'
import { Button, Container, Error, Form, Input, Paragraph, Svg, Title } from './style'

const UserForm = ({ onSubmit, data, error, loading }) => {
  const initialState = {
    name: '',
    email: '',
    password: ''
  }
  const { value: { name, email, password }, onChange } = useForm(initialState)
  const { stateForm, handleStateForm, activateAuth } = useContext(AppContext)

  if (data) {
    return activateAuth(data)
  }

  return (
    <Container>
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1253 1280'>
        <path d='M785.5.6c-12.7 2.1-30.4 8.6-39.6 14.4-2.7 1.8-7.3 5.9-10.3 9.1l-5.3 5.9-15.9.3c-10.1.2-18.8 1-23.9 2.1-45.5 9.9-84.3 37.8-100 71.9-12.5 27.2-14 65.5-4 97.7 1.5 4.7 6.9 18.8 12 31.5 11.6 28.8 13.8 35.7 17.5 56.1 3.9 20.8 7.1 31.8 12.1 41.5 10.5 20.1 30.3 32.9 50.8 32.9 14.2 0 24.5-4.8 38.5-18 13.4-12.6 20.8-26.1 24.5-44.5 4.2-21.3 3.7-36.2-2.4-76.5-4.2-27.9-5.5-38.1-5.5-44.2 0-3-.4-4.8-1.2-4.8-1.8 0-.2 26.5 3.3 54 4 31.1 4.3 47.3 1.1 57.6-6.8 21.9-24.8 33.8-50.7 33.6-8.3 0-11.6-.6-19.5-3.1-26.2-8.4-37.2-22.1-43.1-53.5-7.3-39.7-7.4-39.9-21-68.8-14.6-31.3-18.1-45.8-14.5-61.3 3.5-15 14.6-31.9 30.2-46.3 18.4-17 39-28.6 66.9-37.6 10.4-3.4 38-10.6 40.4-10.6.6 0 1.1 1.3 1.1 3 0 8 11.4 6.6 28.3-3.7 11-6.7 32.9-13.8 56.7-18.5 8.2-1.6 50.5-1.5 64.4.1 44.4 5.1 78.9 24.7 112.8 63.8 5.1 5.9 5.8 2.8.9-3.8-29.7-39.4-68-64.4-112.5-73.4-21.9-4.4-42.5-6.6-66.6-7-12.4-.2-23.8-.1-25.5.1z' />
        <path d='M935.7 76.7c-2.1 2-.3 5.3 5.6 10.3 18.9 16.1 36.6 22.9 61.7 23.7 12.8.4 16.9.1 34.3-2.6 38.1-6 53.6-6.2 71.5-.9l7.2 2.1v12.2c0 7.9.5 13.9 1.5 17.2 1.4 4.8 1.4 5.3-1 11.7-1.3 3.6-3.8 13.3-5.5 21.5-7.1 34.6-15.1 48-41.5 69.4-31.2 25.2-71.3 45.2-105.6 52.6-19.4 4.2-33.1 5.3-71.9 6l-37.5.6-.3 4.1c-.3 4-.2 4.1 4.5 6.2 56.5 24 136.1 7.8 201.1-41 14.5-10.9 31.4-27.7 38.3-38.1 7.4-11.3 10.9-21.2 14.9-41.7 4.1-21.6 6.8-27.4 18.8-40.1 11.5-12.1 13.4-15.9 14-26.9 1-19.9-6.6-32-17.3-27.6-2 .9-4.9 2.5-6.5 3.6-2.7 1.9-3.2 2-5.7.7-6.3-3.3-20-6.7-30.8-7.9-13-1.3-28.4-.3-48.5 3.3-23.8 4.2-44.1 3.5-63-2.3-7.8-2.4-25.5-10-32.6-13.9-2.8-1.6-5.4-2.6-5.7-2.2zm184 40c-.3 1-.5.2-.5-1.7s.2-2.7.5-1.8c.2 1 .2 2.6 0 3.5zm8.8 14.2c.3.5.1 1.2-.5 1.6-.5.3-1-.1-1-.9 0-1.8.6-2.1 1.5-.7zM872.4 99.1c-9.9 1.6-20.4 7.9-20.4 12.1 0 1.8.3 1.7 3.4-1 6.4-5.6 13.4-7.5 29.9-8 13.6-.4 14.7-.6 14.7-2.3 0-1.8-.8-1.9-11.2-1.8-6.2.1-13.6.5-16.4 1z' />
        <path d='M916.5 115.7c-13.3 8.1-23.1 10.9-41.9 12.3-9 .7-14.3 1.5-14.8 2.3-1.7 2.4.2 7.2 4.2 10.9 6 5.4 12.3 7.2 23.1 6.6 7.6-.5 9.8-1.1 17.3-4.7 10.5-5.1 19.1-12.9 20.1-18.4.8-4-.2-12.7-1.3-12.7-.4 0-3.4 1.6-6.7 3.7zm88.7 76.3c-3.2 2-7 8.6-5.6 9.9.4.3.9-.1 1.2-.9.7-1.9 5.3-6.5 7.1-7.1.7-.3 1.2-1.2 1-2.2-.4-1.6-.7-1.5-3.7.3zm31.8 6.9c-10.2 4.3-11 4.8-11 6.7 0 2.3 2.9 1.6 12.2-2.8 6.4-3 8.8-4.6 8.8-6 0-2.3.2-2.3-10 2.1zm-64.7.3c-2.3 2.5-3 4.8-1.5 4.8 1.6 0 4.4-3.8 4-5.5-.2-1.4-.6-1.3-2.5.7zm12 10.3c-5.3 2.3-4.2 4.9 1.5 3.3 2.2-.6 3.2-1.5 3.2-2.8 0-2.3-.4-2.4-4.7-.5zm17.7 13.4c0 1.2.6 2.1 1.6 2.1.9 0 1.4-.7 1.2-1.7-.5-2.5-2.8-2.8-2.8-.4zM581.4 329.2c-13.4 14.1-18 23.6-29.9 61.9-13.1 42.1-25.8 62.2-63.5 100-24 24-46.2 43.4-88 76.9-17.9 14.3-50.8 46.7-65.2 64-5.2 6.3-16.6 20.7-25.3 32-30.5 39.4-44.2 54.9-66 74.8-21.3 19.4-41.3 39.2-50.9 50.2-47.3 54.4-71.1 119.8-80 219.5-3.1 35-3.1 50.4 0 71.2.4 2.4.3 4.3-.2 4.3-2.4 0-22-12.8-36.1-23.6-34.1-26.2-47.8-39.8-55.3-54.9-12.6-25.5-12.6-59.9.2-99.3 7.1-22.1 15.3-36.3 38.8-67.7 28.1-37.5 36.4-54.3 43.5-87.7 6.2-29.5 6-70.5-.5-97.3-5.3-21.5-22.2-44.2-42.8-57.4-4.2-2.7-8.6-5.8-9.7-6.8-2.2-2-7.6-2.5-8.7-.8-2.1 2.9-.5 6.2 6.8 14 20 21.1 31.5 39.5 39.4 63.2 9.9 29.8 9.2 53.8-2.4 78.7-5.2 11.2-13.4 23.9-31.2 47.7-22.1 29.8-29.2 41.7-36.9 62.3C6 885.4-1.1 933.5.4 971c.8 21.6 3.9 35.1 10.4 45.4 3.4 5.5 30 31.8 46.2 45.7 23.2 19.9 37.7 29 52.1 32.5l6.6 1.6 1.7 6.2c2.4 8.5 9.3 22.8 15.6 32.2 10 14.8 28.4 30.5 46.4 39.6 5.2 2.6 22.7 9.8 24 9.8.8 0 1.7-7.1 1.1-8.9-.3-1-5.1-5.6-10.8-10.3-31.2-26-50.9-47.8-62.1-68.9-6.6-12.4-9.3-20.3-11.7-34.6-1.8-10.5-2-15.1-1.6-25.8.8-17.3 6.2-63 9.2-78 7.8-38.7 23.5-74.5 47.8-108.9 15.3-21.6 31.6-39.3 56.7-61.6 26-23 42-40.7 77.5-86 44.1-56.2 55.6-68 109.5-112.8 36.6-30.4 50.3-42.6 65.1-57.9 21.5-22.2 36.1-42.4 49-67.8 9.2-18.4 14.2-32 21.4-59.7 10-38 16.2-53.2 28.1-69.1 6.1-8.1 7.4-10.7 5.6-10.7-.5 0-3.6 2.8-6.8 6.2zm523.6 23.9c-5.2 2.1-16.5 6.5-25.1 9.9-22.1 8.6-30.9 14.1-44.6 27.6-15.8 15.7-19.7 16.8-38.4 11.4-26.6-7.7-47.4-7.9-78.4-.5-17.6 4.2-26.5 8.1-45.8 20.3-6.7 4.2-16 9.2-20.7 11.1-7.9 3.3-9.2 3.5-19 3.5-14.4-.1-21.5-2.5-53.5-18.4-26.8-13.4-31.5-15.3-31.5-12.9 0 .8-1.3 3.3-2.9 5.7-7 10.2-6.2 32.8 1.9 57.3 1.6 4.7 9.4 23 17.3 40.5 20.9 46.1 20.8 45.7 20.4 46.1-.2.2-4.7-.8-10-2.2-10.7-2.8-21.4-6.9-46.4-17.9-9.5-4.2-17.8-7.6-18.4-7.6-.6 0-.9.9-.7 2.1.2 1.6 4.4 3.8 19 10.4 26.5 11.9 39.1 16.3 56.8 19.9 2.1.5 3.6 2.9 9.5 15.3 7.7 16.4 41.5 82 47.6 92.5 2.1 3.6 3.9 6.9 3.9 7.1 0 .3-2.4 1.1-5.2 1.7-25.5 6.1-51.3 21.1-74.7 43.5-25.9 24.9-43.9 49.4-84.1 114.5-11.7 19-27.7 44.2-35.5 56-26.2 39.6-37.7 62-49.6 96.8-16.8 49.2-20.9 90.3-14.3 143.4 7.7 63 16.7 101.1 29.7 126.2 5.5 10.7 15.2 20.7 21.9 22.5 7.8 2.2 17.6-.6 25.6-7.3 2.3-2.1 4.1-2.6 8.1-2.6 15 0 33.1-3.3 60.8-11.1 21.6-6 41.4-10.1 63.3-13.1 13.9-1.8 21.3-2.2 47-2.2 36.6-.1 41.2.5 91.3 12 24.4 5.6 58.8 11.8 84.7 15.3 47.1 6.4 84.8 5.2 117-3.5 21.1-5.7 43.9-17 59.2-29.2 42.4-33.7 67.3-95.2 60.7-149.7-4.3-35.2-19.1-58.6-45.5-71.9-15.5-7.7-36-11.3-54.9-9.6-11.6 1.1-12.5 1.8-12.5 9.6 0 2.9.5 5.6 1.3 6.1.6.5 3.9 1.6 7.2 2.3 9.6 2 28.1 8.7 40.1 14.4 30.7 14.7 49 33.4 54.9 56.1 5.1 19.9-3.3 49.7-21.8 76.9-7.5 11.1-27 30.9-38.4 38.9-23.3 16.5-47.2 25.8-80.8 31.4-8.9 1.5-16.6 1.8-41 1.8-31.9 0-37.8-.5-77-6.5-54.4-8.3-78.8-10.4-123-10.4-52.9-.1-72.3 2.4-152.8 19.5-30.6 6.5-33 6.9-34.1 5.3-1-1.3-2.2-1.6-5.5-1.1-7.4 1-16.9-1.1-26.9-5.9-16.8-8.1-28.5-22.4-35.6-43.4-5.3-15.9-11.2-46.2-15.7-80.5-6.8-52.2 1-96.6 26.2-148 8.2-16.9 15.8-30.2 39.2-68.7 9.8-16.1 24.7-40.8 33-54.8 52.8-88.5 83.7-121 144.9-152.1 16.1-8.1 16.1-8.1 17-14.4.2-1.4 1.5-.1 4.5 4.8 7.2 11.4 9.1 10.5 10-4.5.8-14.9-1.1-20.9-12.2-37.3-4.6-6.9-11-17.4-14.1-23.3-19.4-36.6-53.6-100.3-65-120.9-7.4-13.2-14.9-27.4-16.8-31.5-7.5-16.7-12.6-33.2-12.6-41.1 0-4.9 1.7-9.7 2.9-8 1.1 1.6 56.4 28 64.6 30.8 5.7 2 10.7 2.9 17.6 3.3 15 .7 21.7-1.4 42.6-13.4 43.5-25 86.4-31.7 123-19.3 22.5 7.6 28.8 6 41.5-10.5 8.1-10.4 18.6-17.2 46.5-29.7 22.1-10 28.5-12.4 30.5-11.7 2.2.9 5.6 11.9 12.7 40.8 8.8 36.2 8.6 34.8 8.6 53.5 0 18.6-1.3 26.5-6.6 42.3-3 9-3.5 12.2-2 12.2 1.3 0 6.9-14.2 9.4-23.8 1.9-7.7 2.2-11.2 2.2-30.2 0-25.2-.7-29.4-11.5-74-3.7-15.7-7.4-31.4-8.2-34.9-.7-3.5-1.7-6.5-2.3-6.6-.5-.1-5.3 1.5-10.5 3.6z' />
        <path d='M775 473.9c0 2 .5 3.1 1.4 3.1.9 0 1.2-.8.8-2.5-.7-3.7-2.2-4.1-2.2-.6zm-88.2 98.8c-1.6.2-2.8 1.1-2.8 1.9 0 1.2 5.6 1.4 37.3 1.4 36.4 0 53.4.9 67 3.4 6.2 1.2 6.7 1.2 6.7-.4 0-2-.9-2.3-14.6-4.6-7.8-1.3-18.5-1.7-50.4-1.9-22.3-.2-41.7-.1-43.2.2zm92.1 25.4c-2 .5-12.2 1.8-22.5 2.9-19.1 2.1-35.3 4.5-36.2 5.4-.9 1 .7 3.6 2 3.1 1.9-.6 20.1-3.2 35.8-5 19.6-2.2 26-3.5 26-5 0-2-1.1-2.3-5.1-1.4zM376.5 817.6c-18 2.9-40.5 13.5-60.6 28.6-7.5 5.7-20.7 16.3-29.3 23.6-13.2 11.3-15.6 13.7-15.6 16.1 0 1.5.3 3 .6 3.3.3.4 3.6-1.1 7.2-3.2 15.1-8.5 35.3-18.9 45.2-23.2 35.7-15.7 66.1-17.9 94.6-6.9 33.1 12.8 62.1 44.3 71.6 77.7 1.7 6.2 2.2 10.4 2.2 19.4 0 10.3-.4 12.5-3.3 21-4 11.8-10.8 24-24.7 44-5.8 8.5-15.8 23.3-22 32.8-19.9 30.2-28.5 40.5-45.9 54.5-12.9 10.5-22.3 19.4-24.3 23.2-.9 1.7-1.6 5.7-1.6 9.3-.1 5.2.3 6.6 1.8 7.8 3.3 2.4 11.2 1.7 17.5-1.5l5.7-2.9 19.4 3.4c40.7 7.2 61.7 14 78.8 25.6 11.6 7.8 25.9 25.1 29.6 35.6 1.4 3.8 1.3 4.3-.5 6.6-4.4 5.6-15.9 10.4-31.4 13.2-9.5 1.7-41.1 1.9-59 .4-6.6-.6-25.5-2.7-42-4.6-44.9-5.4-55.7-4.3-91 9.1-8.2 3.1-20.5 7.7-27.2 10.2-11.8 4.4-12.3 4.7-12.3 7.4 0 1.9.5 2.9 1.4 2.9 1.4 0 17.4-2.7 54.1-9.1 28-4.9 39.3-4.9 79.5 0 46.2 5.6 57.7 6.4 83.8 5.9 25.4-.5 31.4-1.7 40.8-8.1 12.4-8.3 16.6-27.9 10.4-48.2-9.2-29.6-30.9-51.1-61-60.3-15.8-4.8-20.9-5.6-39.2-5.6l-17.6-.1 1.6-2.1c.9-1.2 5.1-6.7 9.3-12.1 8.3-10.8 47-68.4 53.9-80.3 10.2-17.6 17.7-36.6 21.7-55 2.4-11.5 2.4-39.6-.1-52.3-7.2-36.8-28.3-69.7-57.2-89-17.7-11.9-31.8-16.7-49.9-17.2-6.6-.2-13.3-.1-15 .1zm691.4 18.6c-17.4 17-21.8 22.5-27.9 34.6-15.2 30.6-19.5 69-17.2 154 1.6 56.2 2.7 68.7 7.9 87.2 2.4 8.5 7.1 18.2 8.5 17.8 3.6-1.2 7.6-23 6.4-34.3-.4-3.3-2-12.5-3.6-20.5-6.3-31.3-8.5-59.6-7.7-99.4.6-30.5 1.2-35.8 5.8-54.4 6.2-25.3 16.8-48.5 36-79.2 7.1-11.4 8-13.3 7.7-17l-.3-4.1-15.6 15.3z' />
      </Svg>
      <Title>{stateForm ? 'Registrarse' : 'Inicio Sesión'}</Title>
      <Paragraph>Descubre el increible mundo de las mascotas</Paragraph>
      {
        error && <Error>{error.message}</Error>
      }
      <Form onSubmit={(e) => onSubmit(e, email, password, name)}>
        {
          stateForm &&
            <Input
              disabled={loading}
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={onChange}
            />
        }
        <Input
          disabled={loading}
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
        />
        <Input
          disabled={loading}
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={onChange}
        />
        <Button disabled={loading} type='submit'>{stateForm ? 'Registrarse' : 'Iniciar Sesión'}</Button>
      </Form>
      {
        stateForm
          ? <Paragraph>Ya tienes una Cuenta <span onClick={handleStateForm}>Inicia Sesión</span></Paragraph>
          : <Paragraph>¿No tienes una Cuenta? <span onClick={handleStateForm}>Registrate</span></Paragraph>
      }
    </Container>
  )
}

export default UserForm
