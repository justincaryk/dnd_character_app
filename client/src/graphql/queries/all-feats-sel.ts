import gql from 'graphql-tag'

export default gql`
  query GetFeatSelectedByCharacterId(
    $characterId: UUID!
    $featFrom: FeatFromType
  ) {
    allFeatSelecteds(
      condition: { characterId: $characterId, featFrom: $featFrom }
    ) {
      nodes {
        featSelId
        characterId
        featFrom
        featId
        featByFeatId {
          name
          desc
          points
          prereq
          scores
        }
      }
    }
  }
`
