import gql from 'graphql-tag'

export default gql`
  query GetAllRaces {
    allRaces {
      nodes {
        id
        name
        movement
        lifespan
        languages
        asis
        alignment
        size
        summary
        raceFeaturesByRaceId {
          nodes {
            racialFeatureByRacialFeatureId {
              name
              description
            }
          }
        }
        subracesByRaceId {
          nodes {
            id
            name
            summary
            asis
            subraceFeaturesBySubraceId {
              nodes {
                racialFeatureByRacialFeatureId {
                  name
                  description
                }
              }
            }
          }
        }
      }
    }
  }
`
