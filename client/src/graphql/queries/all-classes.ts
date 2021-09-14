import gql from 'graphql-tag'

export default gql`
query AllClasses {
    allClasses {
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
        subclassFeaturesByClassId {
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
        classFeaturesByClassId {
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
