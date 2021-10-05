import gql from 'graphql-tag'

export default gql`
  query GetAllSpellsSelected($characterId: UUID!) {
    allSpellSelecteds(condition: { characterId: $characterId }) {
      nodes {
        spellSelId
        spellId
        spellBook
        prepared
      }
    }
  }
`
