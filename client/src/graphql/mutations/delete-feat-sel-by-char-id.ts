import gql from 'graphql-tag'

export default gql`
  mutation DeleteAllRacialFeatsByCharacterId($characterId: UUID!) {
    deleteAllRaceFeatSelByCharacterId(input: { characterId: $characterId }) {
      boolean
    }
  }
`
