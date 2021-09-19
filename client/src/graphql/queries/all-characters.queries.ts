import gql from 'graphql-tag'

export default gql`
  query {
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
