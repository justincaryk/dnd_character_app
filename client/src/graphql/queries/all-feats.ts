import gql from 'graphql-tag'

export default gql`
  query AllFeats {
    allFeats(orderBy: NAME_ASC) {
      feats: nodes {
        id
        name
        desc
        points
        prereq
        scores
      }
    }
  }
`
