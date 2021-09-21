import gql from 'graphql-tag'

export default gql`
  mutation UpdateFeatSelectedById(
    $featSelId: UUID!,
    $featFrom: FeatFromType!,
    $featId: UUID!
  ) {
    updateFeatSelectedByFeatSelId(
      input: {
        featSelId: $featSelId
        featSelectedPatch: {
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
