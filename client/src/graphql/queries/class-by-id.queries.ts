import gql from 'graphql-tag'

export default gql`
  query ClassById($id: UUID!, $subclassId: UUID) {
    classById(id: $id) {
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
      subclassFeaturesByClassId(
        condition: { id: $subclassId }
        orderBy: NAME_ASC
      ) {
        nodes {
          entries
          id
          level
          isClassFeatureVariant
          nodeId
          hasOptions
          name
          page
          isSuboption
          subclassId
          subclassShortName
          subclassSource
          source
        }
      }
      classFeaturesByClassId(orderBy: LEVEL_ASC) {
        nodes {
          id
          entries
          classSource
          isClassFeatureVariant
          level
          name
          page
          source
          hasOptions
          classId
        }
      }
    }
  }
`
