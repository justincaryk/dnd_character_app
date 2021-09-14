import gql from 'graphql-tag'

export default gql`
  mutation SignUp($username: String!, $password: String!) {
    signup(input: { username: $username, password: $password }) {
      boolean
    }
  }
`
