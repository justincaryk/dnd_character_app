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