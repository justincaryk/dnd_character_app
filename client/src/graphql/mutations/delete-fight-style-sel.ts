import gql from 'graphql-tag'

export default gql`
  mutation DeleteFightStyle($fightStyleSelId: UUID!) {
    deleteFightStyleSelectedByFightStyleSelId(
      input: { fightStyleSelId: $fightStyleSelId }
    ) {
      fightStyleSelected {
        fightStyleSelId
      }
    }
  }
`
