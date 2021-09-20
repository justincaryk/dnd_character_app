import gql from 'graphql-tag'

export default gql`
  mutation CreateAsiSelected($characterId: UUID!, $from: AsiFromType!, $asiId: UUID, $count: Int!) {
    createAsiSelected(input: {
      asiSelected: {
        characterId: $characterId,
        asiFrom: $from,
        asiId: $asiId,
        count: $count
      }
    }) {
      asiSelected {
        asiSelId
      }
    }
  }
`
