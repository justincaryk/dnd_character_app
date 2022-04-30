import gql from 'graphql-tag'

export default gql`
  query AllSkills {
    allSkills {
      skills: nodes {
        id
        skill
        attributeByAttrId {
          attribute
        }
      }
    }
  }
`
