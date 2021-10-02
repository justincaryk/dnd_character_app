import gql from 'graphql-tag'

export default gql`
  mutation DeleteAllCharacterAsiSels($characterId: UUID!) {
    deleteAllClassSkillsById(
      input: {
        characterId: $characterId
      }
    ) {
      boolean
    }
  }
`
