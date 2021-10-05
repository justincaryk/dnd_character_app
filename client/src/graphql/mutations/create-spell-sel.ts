import gql from 'graphql-tag'

export default gql`
  mutation CreateSpellSelected(
    $characterId: UUID!
    $spellId: UUID!
    $spellBook: Boolean
    $prepared: Boolean!
  ) {
    createSpellSelected(
      input: {
        spellSelected: {
          characterId: $characterId
          spellId: $spellId
          spellBook: $spellBook
          prepared: $prepared
        }
      }
    ) {
      spellSelected {
        spellSelId
      }
    }
  }
`
