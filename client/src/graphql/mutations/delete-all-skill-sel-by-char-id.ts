import gql from 'graphql-tag'

export default gql`
  mutation DeleteAllCharacterSkills($characterId: UUID!) {
    deleteAllClassSkillsById(input: { characterId: $characterId }) {
      boolean
    }
  }
`
