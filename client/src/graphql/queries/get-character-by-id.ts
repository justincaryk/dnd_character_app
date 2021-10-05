import gql from 'graphql-tag'

export default gql`
  query GetCharacterById($characterId: UUID!) {
    characterByCharacterId(characterId: $characterId) {
      nodeId
      characterId
      name
      subraceId
      subclassId
      classId
      raceId
      description
      bgId
      currentLevel
    }
  }
`
