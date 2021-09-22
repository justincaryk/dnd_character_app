import gql from 'graphql-tag'

export default gql`
  mutation CreateFeatBaseSel(
    $characterId: UUID!,
    $featFrom: FeatFromType!,
    $featId: UUID!
  ) {
    createFeatSelected(
      input: {
        featSelected: {
          characterId: $characterId,
          featFrom: $featFrom,
          featId: $featId
        }
      }
    ) {
      featSelected {
        featId
      }
    }
  }
`
