import gql from 'graphql-tag'

export default gql`
  query GetAllAsiSelections($characterId: UUID!) {
    allAsiSelecteds(condition: {characterId: $characterId}) {
      nodes {
        asiSelId
        count
        asiFrom
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
