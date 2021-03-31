import gql from 'graphql-tag'

export default gql`
  query AllBgFeatures {
    allBgFeatures {
        bgFeatures: nodes {
            conferringBg
            description
            name
        }
    }
  }
`