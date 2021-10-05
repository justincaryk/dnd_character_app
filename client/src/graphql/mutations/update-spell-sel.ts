import gql from 'graphql-tag'

export default gql`
  mutation UpdateSpellSelected($spellSelId: UUID!, $prepared: Boolean!) {
    updateSpellSelectedBySpellSelId(
      input: {
        spellSelId: $spellSelId
        spellSelectedPatch: { prepared: $prepared }
      }
    ) {
      spellSelected {
        spellSelId
      }
    }
  }
`
