import gql from 'graphql-tag'

export default gql`
    query AllEquipment {
        allEquipment {
            items: nodes {
                name
                type
            }
        }
    }
`