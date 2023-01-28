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
  const { loading, data, error } = useQuery(GET_PHOTOS, { variables: { categoryId }, fetchPolicy: 'cache-and-network' })
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

const GET_FAVORITES_PHOTOS = gql`
  query getFavs {
    favs {
      id
      categoryId
      liked
      likes
      src
      userId
    }
  }
`
export const useGetFavoritesPhoto = () => {
  const { loading, data, error } = useQuery(GET_FAVORITES_PHOTOS, { fetchPolicy:'cache-and-network' })
  return { loading, data, error }
}

/**
 * MUTATIONS
 */
const MUTATION_LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export const useMutationToggleLike = () => {
  const [likePhoto, { data, loading, error }] = useMutation(MUTATION_LIKE_PHOTO)
  return { likePhoto, data, loading, error }
}
