import gql from 'graphql-tag'

export default gql`
  mutation DeleteFeatSelById($featSelId: UUID!) {
    deleteFeatSelectedByFeatSelId(input: { featSelId: $featSelId }) {
      featSelected {
        featSelId
      }
    }
  }
`
