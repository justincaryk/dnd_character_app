import gql from 'graphql-tag'

export default gql`
  mutation DeleteSkillSelected($skillSelId: UUID!) {
    deleteSkillsSelectedBySkillSelId(input: { skillSelId: $skillSelId }) {
      skillsSelected {
        skillSelId
      }
    }
  }
`
