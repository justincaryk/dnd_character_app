import gql from 'graphql-tag'

export default gql`
  query AllCharacters {
    allCharacters {
      nodes {
        name
        characterId
        raceByRaceId {
            name
        }
      }
    }
  }
`
