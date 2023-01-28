import { gql, useMutation, useQuery } from '@apollo/client'

const GET_USER = gql`
  query User {
    user {
      avatar
      email
      id
      name
    }
  }
`

export const useGetUser = (categoryId) => {
  const { loading, data, error } = useQuery(GET_USER, { fetchPolicy: 'cache-and-network' })
  return { loading, data, error }
}

/**
 * MUTATIONS
 */
const REGISTER = gql`
mutation Register($input: UserCredentials!) {
  signup(input: $input)
}
`
export const useMutationRegister = () => {
  const [Register, { data, loading, error }] = useMutation(REGISTER)
  return { Register, data, loading, error }
}

const LOGIN = gql`
mutation Login($input: UserCredentials!) {
  login(input: $input)
}
`
export const useMutationLogin = () => {
  const [Login, { data, loading, error }] = useMutation(LOGIN)
  return { Login, data, loading, error }
}
