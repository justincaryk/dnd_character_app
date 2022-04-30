import gql from 'graphql-tag'

export default gql`
  query GetAllSkillsSelected(
    $characterId: UUID!
    $classFeatId: UUID
    $subclassFeatId: UUID
    $grantedByStartingProf: Boolean
  ) {
    allSkillsSelecteds(
      condition: {
        characterId: $characterId
        grantingClassFeatId: $classFeatId
        grantingSubcclassFeatId: $subclassFeatId
        grantedByStartingProf: $grantedByStartingProf
      }
    ) {
      nodes {
        skillSelId
        characterId
        skillId
        level
        grantedByStartingProf
        grantingClassFeatId
        grantingSubcclassFeatId
        skillBySkillId {
          skill
        }
      }
    }
  }
`
