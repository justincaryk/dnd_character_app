import gql from 'graphql-tag'

export default gql`
  mutation CreateCharacter($name: String!) {
    createCharacter(input: { character: { name: $name } }) {
      character {
        characterId
        name
      }
    }
  }
`
