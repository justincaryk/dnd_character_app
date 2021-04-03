
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

export type RaceAsiType = {
    [key: string]: number
}
export type RaceFeatureType = {
    [key: string]: string | number
}
export type SubraceType = {
    id: string
    name: string
    summary: string
    asis: RaceAsiType[]
    features: RaceFeatureType[]
}

export type RaceType = {
    id: number
    name: string
    summary: string
    asis: RaceAsiType[]
    movement: number
    size: string
    languages: string[]
    lifespan: string
    alignment: string
    features: RaceFeatureType[]
    subraces: SubraceType[]
}

export type SpellType = {
    slug: string
    name: string
    desc: any // this is ugly
    page: string
    range: {
        type: string
        distance: {
            type: string
            amount: number
        }
    }
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

export type LanguagesDictType = {
    ALL: LanguageType[]
    STANDARD: LanguageType[]
    EXOTIC: LanguageType[]
}