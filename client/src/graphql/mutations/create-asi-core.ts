import gql from 'graphql-tag'

export default gql`
  mutation CreateAsiCore(
    $characterId: UUID!
    $strength: Int
    $dexterity: Int
    $constitution: Int
    $intelligence: Int
    $wisdom: Int
    $charisma: Int
    $method: AsiCoreMethod!
  ) {
    createAsiSelectedCore(
      input: {
        asiSelectedCore: {
          characterId: $characterId
          method: $method
          strength: $strength
          dexterity: $dexterity
          constitution: $constitution
          intelligence: $intelligence
          wisdom: $wisdom
          charisma: $charisma
        }
      }
    ) {
      asiSelectedCore {
        asiSelBaseId
      }
    }
  }
`
