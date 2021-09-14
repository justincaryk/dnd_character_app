import gql from 'graphql-tag'

export default gql`
query AllClasses {
  allClasses(orderBy: NAME_ASC) {
    nodes {
      name
      id
      cantripProgression
      casterProgression
      classFeatures
      hdFaces
      hdNumber
      meta
      multiclassing
      optionalFeatureProgression
      page
      preparedSpells
      proficiency
      source
      spellcastingAbility
      spellsKnownProgression
      spellsKnownProgressionFixed
      spellsKnownProgressionFixedAllowLowerLevel
      spellsKnownProgressionFixedByLevel
      srd
      startingEquipment
      startingProficiencies
      subclassTitle
      subclassesByClassId {
        nodes {
          additionalSpells
          cantripProgression
          casterProgression
          name
          page
          shortName
          source
          spellcastingAbility
          spellsKnownProgression
          subclassFeatures
          subclassTableGroups
          id
          preparedSpells
        }
      }
      subclassFeaturesByClassId(orderBy: NAME_ASC) {
        nodes {
          entries
          id
          level
          isClassFeatureVariant
          nodeId
          name
          page
          subclassShortName
          subclassSource
          source
        }
      }
      classFeaturesByClassId(condition: {}) {
        nodes {
          id
          entries
          classSource
          isClassFeatureVariant
          level
          name
          page
          source
        }
      }
    }
  }
}
`
