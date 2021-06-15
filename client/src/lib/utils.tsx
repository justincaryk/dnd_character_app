import { Hash } from './types';

export const tryParseInt = (str: any, defaultValue: boolean) => {
    let returnValue: number | boolean = defaultValue;

    if(str !== null) {
        if(str.length > 0) {
            if (!isNaN(str)) {
                returnValue = parseInt(str);
            }
        }
    }
    return returnValue;
}

export const getProficiencyRules = (level: number) => {
    if (level < 5) return 2
    if (level < 9) return 3
    if (level < 13) return 4
    if (level < 17) return 5
    return 6
}

export const getLongFormAbilityScore = (asiAbbrev: string): string => {
    const hash: Hash = {
        'str': 'Strength',
        'dex': 'Dexterity',
        'con': 'Constitution',
        'int': 'Intelligence',
        'wis': 'Wisdom',
        'cha': 'Charisma'
    }

    return hash[asiAbbrev]
}

const sortFeatureList = (list: any[]) => (
  list.sort((a: any, b: any) => {
    if (typeof a == 'string' && typeof b === 'string') {
      return Number(a.split('||')[1]) - Number(b.split('||')[1])
    }
    if (a.classFeature && b.classFeature) {
      return (
        Number(a.classFeature.split('||')[1]) -
        Number(b.classFeature.split('||')[1])
      )
    }
    if (b.classFeature) {
      return Number(a.split('||')[1]) - Number(b.classFeature.split('||')[1])
    }
    // a.classFeature only
    return Number(a.classFeature.split('||')[1]) - Number(b.split('||')[1])
  })
)

const parseFeatureList = (list: any[], hasSubclassFeats: boolean) => (
  list.map((x: any) => {
    if (typeof x === 'string') {
      return x.split('||')[0]
    } 

    if (hasSubclassFeats) {
      const y = {...x}
      y.classFeature = x.classFeature.split('||')[1]
      return y
    }

    return x.classFeature.split('||')[0]
  })
)

export const getFeatures = (list: any, classFeats: any, subclassFeats?: any) => {
  const sortedList = sortFeatureList(list)
  const parsedList = parseFeatureList(sortedList, subclassFeats !== undefined)

  const featsFormatted = []

  for (const key of parsedList) {

    //regular class feature
    if (typeof key === 'string') {
      for (const feat of classFeats) {
        if (feat.name === key) {
          featsFormatted.push(feat)
          break;
        }
      }
      continue;
    }
    
    //subclass feature
    for (const feat of subclassFeats) {
      if (Number(key.classFeature) === feat.level) {
        featsFormatted.push(feat)  
      }
    }
  }

  return featsFormatted
}


export const parsedFeatures = (classFeatures: any) => {
  const hashFeatures: any = {}

  classFeatures.forEach((f: any) => {
    if (typeof f === 'string') {
      const feature = f.split('||')[0]
      const level = f.split('||')[1]
      hashFeatures[level]
        ? hashFeatures[level].push(feature)
        : (hashFeatures[level] = [feature])
    } else {
      const feature = f.classFeature.split('||')[0]
      const level = f.classFeature.split('||')[1]
      hashFeatures[level]
        ? hashFeatures[level].push(feature)
        : (hashFeatures[level] = [feature])
    }
  })

  return hashFeatures
}
