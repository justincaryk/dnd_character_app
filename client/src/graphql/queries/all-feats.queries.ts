import gql from 'graphql-tag'

export default gql`
    query AllFeats {
        allFeats {
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