
//TODO: 
// 1. figure out which ones are deprecated and remove

export type BgOptionGenericType = {
    name: string
    isAutoGranted: boolean
}

export type BackgroundDataType = {
    name: string
    description: string
    numberOfExtraLanguages: number
    languageOptions: BgOptionGenericType[]
    numberOfToolsGranted: number
    toolOptions: BgOptionGenericType[]
    numberOfSkillsGranted: number
    skillOptions: BgOptionGenericType[]
    backgroundFeature: {
        name: string
        description: string
    }
    alternateBackgroundFeature: {
        name: string
        description: string
    }
}

export type BackgroundFeatureDataType = {
    name: string
    conferringBg: string
    description: string
}

export type LanguageType = {
    name: string
    script: string
    typicalSpeakers: string
    type: string
}

export type SkillDataType = {
    attributeByAttrId: {
        attribute: string
    }
    skill: string
}

export type EquipmentDataType = {
    type: string
    name: string
}

export type AttributeInterface = {
    id: number
    name: string
    previousAssignedScore: number
    currentAssignedScore: number
}

export type RaceFeatureType = {
    name: string
    description: string
}
export type SubraceType = {
    id: string
    name: string
    summary: string
    asis: string // json
    features: RaceFeatureType[]
}

export type SpellType = {
    slug: string
    name: string
    desc: any // this is ugly
    page: string
    range: string
    higher_level?: string
    components: string
    material: string
    ritual: string
    duration: string
    concentration: boolean
    casting_time: string
    level: string
    level_int: number
    school: string
    dnd_class: string
    archetype: string
    circles: string
}

export type LinkType = {
    link: string
    text: string
}

export type Hash = {
    [key: string]: any
}

export type ClassClassType = {
    gen: {
      name: string
      hd: {
        number: number
        faces: number
      }
      proficiency: string[]
      startingProficiencies: {
        armor: string[]
        weapons: string[]
        tools: string[]
        skills: {
          choose: {
            from: string[]
            count: number
          }
        }
      }
      startingEquipment: {
        additionalFromBackground: boolean
        default: string[]
        goldAlternative: string
      }
      multiclassing: {
        requirements: any
        proficienciesGained: {
          armor: string[]
          weapons: string[]
        }
      }
    }
  }