import gql from 'graphql-tag'

export default gql`
mutation CreateAsiSelected($characterId: UUID!, $from: AsiFromType!, $asiId: UUID, $count: Int!, $featId: UUID) {
  createAsiSelected(
    input: {
      asiSelected: {
        characterId: $characterId, 
        asiFrom: $from, 
        asiId: $asiId, 
        count: $count, 
        featId: $featId
      }
    }
  ) {
    asiSelected {
      asiSelId
    }
  }
}
`
