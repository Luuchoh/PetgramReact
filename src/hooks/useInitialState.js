import { useState } from 'react'

const useInitialState = () => {
  const [isAuth, setIsAuth] = useState(() => {
    if (!!sessionStorage.getItem('token')){
      return true
    }
    return false
  })
  const [stateForm, setStateForm] = useState(false)

  const handleStateForm = () => {
    setStateForm(!stateForm)
  }
  const activateAuth = (token) => {
    sessionStorage.setItem('token', token)
    setIsAuth(true)
  }
  const removeAuth = (token) => {
    sessionStorage.clear()
    setIsAuth(false)
  }

  return {
    isAuth,
    activateAuth,
    removeAuth,
    stateForm,
    handleStateForm
  }
}

export default useInitialState
