import gql from 'graphql-tag'

export default gql`
    query AllClassNames {
        allClasses(orderBy: NAME_ASC) {
            nodes {
                name
                id
            }
        }
    }
`
