import gql from 'graphql-tag'

export default gql`
  query GetCharacterById($characterId: UUID!) {
    characterByCharacterId(characterId: $characterId) {
      characterId
      name
      subraceId
      subclassId
      classId
      raceId
      description
      bgId
    }
  }
`
