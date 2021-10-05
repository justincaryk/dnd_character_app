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
    if (typeof x === 'string' && x.toLowerCase().indexOf('subclass') === -1) {
      return {
        name: x.split('||')[0],
        level: x.split('||')[1]
      }
    } 
    
    if (hasSubclassFeats) {
      const y = {
        level: x
      }
      y.level = x.toLowerCase().split('||subclass')[0]
      y.level = y.level.split('||')[1]
      return y
    }
    
    const remainder = x.split('||subclass')[0]
    const name = remainder.split('||')[0]
    const level = name.split('||')[1] 
    return {
      name: name,
      level: level
    }
  })
)


export const getFeatures = (list: any, classFeats: any, subclassFeats?: any) => {
  const sortedList: any = sortFeatureList([...list])
  const parsedList: any = parseFeatureList(sortedList, subclassFeats !== undefined)
  
  const featsFormatted = []

  for (const key of parsedList) {
    //regular class feature
    if (key.name) {
      for (const feat of classFeats) {
        // filtering by name AND level ensures proper choice with dupe feat names (eg. ASI)
        if (feat.name === key.name && feat.level === Number(key.level)) {
          featsFormatted.push(feat)
          break;
        }
      }
      continue;
    }
    
    //subclass feature
    for (const feat of subclassFeats) {
      if (Number(key.level) === feat.level) {
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

export const numberToSpeakable = (num: number) => {
  if (num === 1) {
    return '1st'
  } 
  if (num === 2) {
    return '2nd'
  }
  if (num === 3) {
    return '3rd'
  }

  return `${num}th`
}

export const parseJwt = (token: string) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};


export type BonusesType = {
  [key: string]: number
}

export const bonuses: BonusesType = {
  '3': -4,
  '4': -3,
  '5': -3,
  '6': -2,
  '7': -2,
  '8': -1,
  '9': -1,
  '10': 0,
  '11': 0,
  '12': 1,
  '13': 1,
  '14': 2,
  '15': 2,
  '16': 3,
  '17': 3,
  '18': 4,
  '19': 4,
  '20': 5,
  '21': 5,
  '22': 6,
  '23': 6,
  '24': 7,
  '25': 7,
  '26': 8,
  '27': 8,
  '28': 9,
  '29': 9,
  '30': 10,
}