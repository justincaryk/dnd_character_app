import gql from 'graphql-tag'

export default gql`
  query GetAllLanguages {
    allLanguages {
      languages: nodes {
        name
        script
        type
        typicalSpeakers
      }
    }
  }
`
