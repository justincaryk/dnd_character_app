import gql from 'graphql-tag'

export default gql`
  mutation CreateSkillSelected(
    $skillId: UUID!
    $characterId: UUID!
    $level: SkillLevelSel
    $classFeatId: UUID
    $subclassFeatId: UUID
    $grantedByStartingProf: Boolean
  ) {
    createSkillsSelected(
      input: {
        skillsSelected: {
          characterId: $characterId
          skillId: $skillId
          level: $level
          grantingClassFeatId: $classFeatId
          grantingSubcclassFeatId: $subclassFeatId
          grantedByStartingProf: $grantedByStartingProf
        }
      }
    ) {
      skillsSelected {
        skillSelId
      }
    }
  }
`
