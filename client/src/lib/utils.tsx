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

export const getFeatures = (list: any, classFeats: any, subclassFeats?: any) => {
  const sortedList = list.sort((a: any, b: any) => {
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
  
  const parsedList = sortedList.map((x: any) => {
    if (typeof x === 'string') {
      return x.split('||')[0]
    } 

    if (subclassFeats) {
      x.classFeature = x.classFeature.split('||')[1]
      return x
    }

    return x.classFeature.split('||')[0]
  })

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
