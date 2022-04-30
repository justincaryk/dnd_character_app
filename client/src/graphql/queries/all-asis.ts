import gql from 'graphql-tag'

export default gql`
  query AllAsis {
    allAsis {
      nodes {
        asiId
        short
        long
      }
    }
  }
`
