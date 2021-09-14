import gql from 'graphql-tag'

export default gql`
  mutation Signin($username: String!, $password: String!) {
    signin(input: { username: $username, password: $password }) {
      jwtToken
    }
  }
`
