import React, { useContext } from 'react'
import Helmet from '../../components/Helmet'
import UserForm from '../../containers/UserForm'
import { AppContext } from '../../context/AppProvider'
import { useMutationLogin, useMutationRegister } from '../../hooks/useUsers'

const NotRegisteredUser = () => {
  const { stateForm } = useContext(AppContext)
  const { Register, data: signup, loading: loadingRegister, error: errorRegister } = useMutationRegister()
  const { Login, data: login, loading: loadingLogin, error: errorLogin } = useMutationLogin()

  const handleSubmit = (e, email, password, name) => {
    e.preventDefault()
    if (stateForm) {
      Register({ variables: { input: { name, email, password } } })
      return
    }
    Login({ variables: { input: { email, password } } })
  }

  return (
    <>
      <Helmet title={stateForm ? 'Rrgistro' : 'Inicio Sesion'} />
      {
        stateForm
          ? <UserForm onSubmit={handleSubmit} data={signup?.signup} error={errorRegister} loading={loadingRegister} />
          : <UserForm onSubmit={handleSubmit} data={login?.login} error={errorLogin} loading={loadingLogin} />
      }
    </>
  )
}

export default NotRegisteredUser
