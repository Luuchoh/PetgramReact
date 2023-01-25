import { useQuery, gql, useMutation } from '@apollo/client'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetPhotos = (categoryId) => {
  const { loading, data, error } = useQuery(GET_PHOTOS, { variables: { categoryId } })
  return { loading, data, error }
}

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id:ID!) {
      photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetSinglePhoto = (id) => {
  const { loading, data, error } = useQuery(GET_SINGLE_PHOTO, { variables: { id } })
  return { loading, data, error }
}

/**
 * MUTATIONS
 */
const MUTATION_LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export const useMutationToggleLike = () => {
  const [likeAnonymousPhoto, { data, loading, error }] = useMutation(MUTATION_LIKE_PHOTO)
  return [likeAnonymousPhoto, data, loading, error]
}
