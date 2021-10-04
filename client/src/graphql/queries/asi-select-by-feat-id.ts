import gql from 'graphql-tag'

export default gql`
  query GetAllAsiSelectionsByFeatId($characterId: UUID!, $featId: UUID!) {
    allAsiSelecteds(
      condition: { characterId: $characterId, featId: $featId, asiFrom: POINTS }
    ) {
      nodes {
        asiSelId
        count
        asiFrom
        featId
        asiId
        asiByAsiId {
          asiId
          long
          short
        }
      }
    }
  }
`
