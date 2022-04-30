import gql from 'graphql-tag'

export default gql`
  mutation UpdateFightStyle($fightStyleSelId: UUID!, $fightStyleId: UUID!) {
    updateFightStyleSelectedByFightStyleSelId(
      input: {
        fightStyleSelId: $fightStyleSelId
        fightStyleSelectedPatch: { fightStyleId: $fightStyleId }
      }
    ) {
      fightStyleSelected {
        fightStyleId
      }
    }
  }
`
