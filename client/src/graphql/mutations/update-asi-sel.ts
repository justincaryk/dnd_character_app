import gql from 'graphql-tag'

export default gql`
  mutation UpdateAsiSelect($asiSelId: UUID!, $asiId: UUID!) {
    updateAsiSelectedByAsiSelId(input: {
      asiSelId: $asiSelId
      asiSelectedPatch: {
        asiId: $asiId
      }
    }) {
      asiSelected {
        asiId
      }
    }
  }
`
