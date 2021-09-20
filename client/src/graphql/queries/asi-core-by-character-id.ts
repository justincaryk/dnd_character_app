import gql from 'graphql-tag'

export default gql`
  query GetAsiCoreByCharacterId($characterId: UUID!) {
    allAsiSelectedCores(condition: {
      characterId: $characterId
    }) {
      nodes {
        asiSelBaseId,
        characterId,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        method
      }
    }
  }
`
