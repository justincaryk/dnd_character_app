import gql from 'graphql-tag'

export default gql`
  query AllAttributes {
    allAttributes {
      attributes: nodes {
        attribute
        skillsByAttrId {
          nodes {
            skill
          }
        }
      }
    }
  }
`
