import gql from 'graphql-tag'

export default gql`
  query GetSpellsByClassName($className: String!) {
    getSpellsByClassName (className: $className) {
      nodes {
        id,
        archetype,
        castingTime,
        circles,
        components,
        concentration,
        desc,
        dndClass,
        duration,
        higherLevel,
        levelInt,
        level,
        material,
        name,
        page,
        range,
        ritual,
        school,
        slug
      }
    }
  }
`
