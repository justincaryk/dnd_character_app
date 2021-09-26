import gql from 'graphql-tag'

export default gql`
  mutation UpdateSkillSelected(
    $skillId: UUID, 
    $level: SkillLevelSel,
    $classFeatId: UUID,
    $subclassFeatId: UUID,
    $grantedByStartingProf: Boolean
    $skillSelId: UUID!
  )
  {
    updateSkillsSelectedBySkillSelId(input: 
      {
        skillSelId: $skillSelId,
        skillsSelectedPatch: { 
          skillId: $skillId, 
          level: $level,
          grantingClassFeatId: $classFeatId,
          grantingSubcclassFeatId: $subclassFeatId,
          grantedByStartingProf: $grantedByStartingProf
        }
      }) {
        skillsSelected {
          skillSelId
        }
      }
    }
  
  
`
