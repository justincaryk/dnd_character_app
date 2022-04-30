import gql from 'graphql-tag'

export default gql`
  mutation UpdateAsiCoreById(
    $asiSelBaseId: UUID!
    $strength: Int
    $dexterity: Int
    $constitution: Int
    $intelligence: Int
    $wisdom: Int
    $charisma: Int
    $method: AsiCoreMethod
  ) {
    updateAsiSelectedCoreByAsiSelBaseId(
      input: {
        asiSelBaseId: $asiSelBaseId
        asiSelectedCorePatch: {
          strength: $strength
          dexterity: $dexterity
          constitution: $constitution
          intelligence: $intelligence
          wisdom: $wisdom
          charisma: $charisma
          method: $method
        }
      }
    ) {
      asiSelectedCore {
        asiSelBaseId
      }
    }
  }
`
