import gql from 'graphql-tag'

export default gql`
  mutation DeleteAsiSelected($asiSelId: UUID!) {
    deleteAsiSelectedByAsiSelId(input: { asiSelId: $asiSelId }) {
      asiSelected {
        asiSelId
      }
    }
  }
`
