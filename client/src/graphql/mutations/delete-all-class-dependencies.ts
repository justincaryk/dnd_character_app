import gql from 'graphql-tag'

export default gql`
  mutation DeleteClassDependencies($characterId: UUID!) {
    deleteClassDependencies(input: { characterId: $characterId }) {
      boolean
    }
  }
`
