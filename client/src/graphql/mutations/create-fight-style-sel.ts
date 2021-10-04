import gql from 'graphql-tag'

export default gql`
  mutation CreateFightStyle($characterId: UUID!, $fightStyleId: UUID!) {
    createFightStyleSelected(input: {
      fightStyleSelected: {
        characterId: $characterId, 
        fightStyleId: $fightStyleId
      }}) {
      fightStyleSelected {
        fightStyleId
      }
    }
  }
`
