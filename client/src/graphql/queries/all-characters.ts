import gql from 'graphql-tag'

export default gql`
  query GetAllCharacters {
    allCharacters {
      nodes {
        characterId
        name
        currentLevel
        raceByRaceId {
          name
        }
        subraceBySubraceId {
          name
        }
        classByClassId {
          name
        }
        subclassBySubclassId {
          name
        }
      }
    }
  }
`
