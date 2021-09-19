import gql from 'graphql-tag'

export default gql`
  mutation UpdateCharacter($subclassId: UUID, $bgId: UUID, $classId: UUID, $description: JSON, $raceId: UUID, $name: String, $subraceId: UUID, $characterId: UUID!) {
    updateCharacterByCharacterId(input: {characterId: $characterId, characterPatch: {subclassId: $subclassId, bgId: $bgId, classId: $classId, description: $description, name: $name, raceId: $raceId, subraceId: $subraceId}}) {
      character {
        characterId
      }
    }
  }
`
