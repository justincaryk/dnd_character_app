import gql from 'graphql-tag'

export default gql`
  mutation DeleteSpellSelected($spellSelId: UUID!) {
    deleteSpellSelectedBySpellSelId(input: { spellSelId: $spellSelId }) {
      spellSelected {
        spellSelId
      }
    }
  }
`
