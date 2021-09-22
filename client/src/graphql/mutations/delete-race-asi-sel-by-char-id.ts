import gql from 'graphql-tag'

export default gql`
  mutation DeleteAsiSelByCharId($characterId:UUID!) {
    deleteAllRaceAsiSelByCharacterId(input: {
      characterId: $characterId
    }) {
      boolean
    }
  }
`
