/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react'

import { AppContext } from '@context/AppProvider'
import { useGetUser } from '@hooks/useUsers'
import { Button, Container, Img, Paragraph, Title, WrapperImg, WrapperInfo } from '@containers/UserProfile/style'

const UserProfile = () => {
  const { removeAuth } = useContext(AppContext)
  const { data, loading } = useGetUser()

  return (
    <>
      {
        loading
          ? <></>
          : data?.user &&
          <Container>
            <Title>Perfil</Title>
            <WrapperImg>
              <Img src={data?.user[0].avatar} alt={`avatar-${data?.user[0].id}`} />
            </WrapperImg>
            <WrapperInfo>
              <Paragraph>{data?.user[0].name}</Paragraph>
              <Paragraph>{data?.user[0].email}</Paragraph>
              <Button onClick={removeAuth}>Cerrar Sesión</Button>
            </WrapperInfo>
          </Container>
      }
    </>
  )
}

export default UserProfile
