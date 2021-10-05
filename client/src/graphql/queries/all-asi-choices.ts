import gql from 'graphql-tag'

export default gql`
  query GetAllAsiChoices($characterId: UUID!) {
    allAsiSelecteds(condition: { characterId: $characterId }) {
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
    allAsiSelectedCores(condition: { characterId: $characterId }) {
      nodes {
        strength
        dexterity
        constitution
        intelligence
        wisdom
        charisma
      }
    }
  }
`
