import gql from 'graphql-tag'

export default gql`
  query GetAllAsiSelections($characterId: UUID!, $asiFrom: AsiFromType) {
    allAsiSelecteds(
      condition: { characterId: $characterId, asiFrom: $asiFrom }
    ) {
      nodes {
        asiSelId
        count
        asiFrom
        featId
        asiByAsiId {
          asiId
          long
          short
        }
      }
    }
  }
`
