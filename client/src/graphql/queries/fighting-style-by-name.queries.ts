import gql from 'graphql-tag'

export default gql`
  query FightingStyleByName($name: String!) {
    allFightingStyles(condition: { name: $name }) {
      nodes {
        fightingStyleId
        name
        entries
        options
      }
    }
  }
`
