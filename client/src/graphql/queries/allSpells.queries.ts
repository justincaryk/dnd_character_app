import gql from 'graphql-tag'

export default gql`
    query GetAllSpells {
        allSpells {
            spells: nodes {
                archetype
                castingTime
                circles
                components
                concentration
                desc
                dndClass
                duration
                higherLevel
                levelInt
                level
                material
                name
                page
                range
                ritual
                school
                slug
            }
        }
    }
`
