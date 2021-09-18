const {
    v4: uuidv4
} = require('uuid')

exports.seed = knex => (
    //Deletes ALL existing entries
    knex('class_features')
        .del()
        .then(() => (
            knex('class_features').insert([
                {
                    name: 'Rage',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.',
                            "While raging, you gain the following benefits if you aren't wearing heavy armor:",
                            {
                                type: 'list',
                                items: [
                                    'You have advantage on Strength checks and Strength saving throws.',
                                    'When you make a melee weapon attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.',
                                    'You have resistance to bludgeoning, piercing, and slashing damage.',
                                ],
                            },
                            "If you are able to cast spells, you can't cast them or concentrate on them while raging.",
                            "Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.",
                            'Once you have raged the maximum number of times for your barbarian level, you must finish a long rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Unarmored Defense',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Danger Sense',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Reckless Attack',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Primal Knowledge',
                    source: 'TCE',
                    page: 24,
                    class_source: 'PHB',
                    level: 3,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '3rd-level barbarian optional class features',
                            'When you reach 3rd level and again at 10th level, you gain proficiency in one skill of your choice from the list of skills available to barbarians at 1st level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Primal Path',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you choose a path that shapes the nature of your rage from the list of available paths. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.',
                            {
                                type: 'subclass'
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Extra Attack',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 5,
                    entries: {
                        e: [
                            'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Fast Movement',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 5,
                    entries: {
                        e: [
                            "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Path Feature',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: ['At 6th level, you gain a feature from your Primal Path.'],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Feral Instinct',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            'By 7th level, your instincts are so honed that you have advantage on initiative rolls.',
                            "Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Instinctive Pounce',
                    source: 'TCE',
                    page: 24,
                    class_source: 'PHB',
                    level: 7,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '7th-level barbarian optional class features',
                            'As part of the bonus action you take to enter your rage, you can move up to half your speed.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM uses the optional Feats, you can instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Brutal Critical (1 die)',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 9,
                    entries: {
                        e: [
                            'Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.',
                            'This increases to two additional dice at 13th level and three additional dice at 17th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Path feature',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: ['At 10th level, you gain a feature from your Primal Path.'],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Relentless Rage',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.",
                            'Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 12,
                    entries: {
                        e: [
                            "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM uses the optional Feats, you can instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Brutal Critical (2 dice)',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 13,
                    entries: {
                        e: [
                            'At 13th level, you can roll two additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.',
                            'This increases to three additional dice at 17th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Path feature',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: ['At 14th level, you gain a feature from your Primal Path.'],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Persistent Rage',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 16,
                    entries: {
                        e: [
                            "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM uses the optional Feats, you can instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Brutal Critical (3 dice)',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you can roll three additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Indomitable Might',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            'Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 19,
                    entries: {
                        e: [
                            "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM uses the optional Feats, you can instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Primal Champion',
                    source: 'PHB',
                    page: 46,
                    class_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Bardic Inspiration',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.',
                            'Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.',
                            'You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.',
                            'Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Spellcasting',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See chapter 10 for the general rules of spellcasting and chapter 11 for the bard spell list.',
                            {
                                type: 'entries',
                                name: 'Cantrips',
                                entries: [
                                    'You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, learning a 3rd cantrip at 4th level and a 4th at 10th level.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spell Slots',
                                entries: [
                                    "The Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                                    'For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spells Known of 1st Level and Higher',
                                entries: [
                                    'You know four 1st-level spells of your choice from the bard spell list.',
                                    'You learn an additional bard spell of your choice at each level except 12th, 16th, 19th, and 20th. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.',
                                    'Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Ability',
                                entries: [
                                    'Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.',
                                    {
                                        type: 'abilityDc',
                                        name: 'Spell',
                                        attributes: ['cha'],
                                    },
                                    {
                                        type: 'abilityAttackMod',
                                        name: 'Spell',
                                        attributes: ['cha'],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Ritual Casting',
                                entries: [
                                    'You can cast any bard spell you know as a ritual if that spell has the ritual tag.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Focus',
                                entries: [
                                    'You can use a musical instrument as a spellcasting focus for your bard spells.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Jack of All Trades',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Magical Inspiration',
                    source: 'TCE',
                    page: 27,
                    class_source: 'PHB',
                    level: 2,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '2nd-level bard optional class feature',
                            'If a creature has a Bardic Inspiration die from you and casts a spell that restores hit points or deals damage, the creature can roll that die and choose a target affected by the spell. Add the number rolled as a bonus to the hit points regained or the damage dealt. The Bardic Inspiration die is then lost.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Song of Rest (d6)',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points by spending Hit Dice at the end of the short rest, each of those creatures regains an extra 1d6 hit points.',
                            'The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Bard College',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you delve into the advanced techniques of a bard college of your choice from the list of available colleges. Your choice grants you features at 3rd level and again at 6th and 14th level.',
                            {
                                type: 'subclass'
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Expertise',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.',
                            'At 10th level, you can choose another two skill proficiencies to gain this benefit.',
                            {
                                type: 'skillOptions',
                                options: {
                                    choose: {
                                        count: 2,
                                        from: 'known'
                                    }
                                }
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Bardic Versatility',
                    source: 'TCE',
                    page: 27,
                    class_source: 'PHB',
                    level: 4,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '4th-level bard optional class feature',
                            'Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, representing a change in focus as you use your skills and magic:',
                            {
                                type: 'list',
                                items: [
                                    "Replace one of the skills you chose for the Expertise feature with one of your other skill proficiencies that isn't benefiting from Expertise.",
                                    "Replace one cantrip you learned from this class's Spellcasting feature with another cantrip from the bard spell list.",
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Bardic Inspiration (d8)',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 5,
                    entries: {
                        e: ['At 5th level, your Bardic Inspiration die changes to a d8.'],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Font of Inspiration',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 5,
                    entries: {
                        e: [
                            'Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Bard College feature',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: ['At 6th level, you gain a feature from your Bard College.'],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Countercharm',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Song of Rest (d8)',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 9,
                    entries: {
                        e: [
                            'At 9th level, the extra hit points gained from Song of Rest increases to 1d8.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Bardic Inspiration (d10)',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: ['At 10th level, your Bardic Inspiration die changes to a d10.'],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Expertise',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, you can choose another two skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.',
                            {
                                type: 'skillOptions',
                                options: {
                                    choose: {
                                        count: 2,
                                        from: 'known'
                                    }
                                }
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Magical Secrets',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.',
                            'The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.',
                            'You learn two additional spells from any classes at 14th level and again at 18th level.',
                            {
                                type: 'magicalSecretOptions',
                                options: {
                                    choose: {
                                        count: 2,
                                        from: 'any'
                                    }
                                }
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 12,
                    entries: {
                        e: [
                            "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Song of Rest (d10)',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 13,
                    entries: {
                        e: [
                            'At 13th level, the extra hit points gained from Song of Rest increases to 1d10.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Bard College feature',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: ['At 14th level, you gain a feature from your Bard College.'],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Magical Secrets',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, choose two additional spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.',
                            'The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.',
                            {
                                type: 'magicalSecretOptions',
                                options: {
                                    choose: {
                                        count: 2,
                                        from: 'any'
                                    }
                                }
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Bardic Inspiration (d12)',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 15,
                    entries: {
                        e: ['At 15th level, your Bardic Inspiration die changes to a d12.'],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 16,
                    entries: {
                        e: [
                            "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Song of Rest (d12)',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, the extra hit points gained from Song of Rest increases to 1d12.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Magical Secrets',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            'At 18th level, choose two additional spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.',
                            'The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.',
                            {
                                type: 'magicalSecretOptions',
                                options: {
                                    choose: {
                                        count: 2,
                                        from: 'any'
                                    }
                                }
                            }
                        ],
                    },
                    id: uuidv4(),
                    has_options: true,
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 19,
                    entries: {
                        e: [
                            "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Superior Inspiration',
                    source: 'PHB',
                    page: 51,
                    class_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Divine Domain',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Choose one domain related to your deity from the list of available domains. Each domain is detailed in their own feature, and each one provides examples of gods associated with it. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.',
                            {
                                type: 'entries',
                                name: 'Domain Spells',
                                entries: [
                                    "Each domain has a list of spells—its domain spells—that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
                                    "If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.",
                                ],
                            },
                            {
                                type: 'subclass'
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Spellcasting',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'As a conduit for divine power, you can cast cleric spells. See chapter 10 for the general rules of spellcasting and chapter 11 for a selection of cleric spells.',
                            {
                                type: 'entries',
                                name: 'Cantrips',
                                entries: [
                                    'At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Preparing and Casting Spells',
                                entries: [
                                    "The Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                                    'You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.',
                                    "For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
                                    'You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Ability',
                                entries: [
                                    'Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.',
                                    {
                                        type: 'abilityDc',
                                        name: 'Spell',
                                        attributes: ['wis'],
                                    },
                                    {
                                        type: 'abilityAttackMod',
                                        name: 'Spell',
                                        attributes: ['wis'],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Ritual Casting',
                                entries: [
                                    'You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Focus',
                                entries: [
                                    'You can use a holy symbol as a spellcasting focus for your cleric spells.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Channel Divinity (1/rest)',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.',
                            'When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.',
                            'Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.',
                            'Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.',
                            {
                                type: 'refClassFeature',
                                classFeature: 'Turn Undead|Cleric||2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Channel Divinity: Harness Divine Power',
                    source: 'TCE',
                    page: 30,
                    class_source: 'PHB',
                    level: 2,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '2nd-level cleric optional class feature',
                            "You can expend a use of your Channel Divinity to fuel your spells. As a bonus action, you touch your holy symbol, utter a prayer, and regain one expended spell slot, the level of which can be no higher than half your proficiency bonus (rounded up). The number of times you can use this feature is based on the level you've reached in this class: 2nd level, once; 6th level, twice; and 18th level, thrice. You regain all expended uses when you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Divine Domain feature',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: ['At 2nd level, you gain a feature from your Divine Domain.'],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Turn Undead',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.',
                            "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Cantrip Versatility',
                    source: 'TCE',
                    page: 30,
                    class_source: 'PHB',
                    level: 4,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '4th-level cleric optional class features',
                            "Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace one cantrip you learned from this class's Spellcasting feature with another cantrip from the cleric spell list.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Destroy Undead (CR 1/2)',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 5,
                    entries: {
                        e: [
                            'Starting at 5th level, when an undead of CR 1/2 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Channel Divinity (2/rest)',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'Beginning at 6th level, you can use your Channel Divinity twice between rests.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Divine Domain feature',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: ['At 6th level, you gain a feature from your Divine Domain.'],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Destroy Undead (CR 1)',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            'Starting at 8th level, when an undead of CR 1 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Divine Domain feature',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: ['At 8th level, you gain a feature from your Divine Domain.'],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Divine Intervention',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.',
                            "Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.",
                            'At 20th level, your call for intervention succeeds automatically, no roll required.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Destroy Undead (CR 2)',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            'Starting at 11th level, when an undead of CR 2 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 12,
                    entries: {
                        e: [
                            "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Destroy Undead (CR 3)',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, when an undead of CR 3 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 16,
                    entries: {
                        e: [
                            "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Destroy Undead (CR 4)',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'Starting at 17th level, when an undead of CR 4 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Divine Domain feature',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 17,
                    entries: {
                        e: ['At 17th level, you gain a feature from your Divine Domain.'],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Channel Divinity (3/rest)',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            'Beginning at 18th level, you can use your Channel Divinity three times between rests.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 19,
                    entries: {
                        e: [
                            "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Divine Intervention Improvement',
                    source: 'PHB',
                    page: 56,
                    class_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, your call for intervention succeeds automatically, no roll required.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e'
                },
                {
                    name: 'Druidic',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Spellcasting',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. See chapter 10 for the general rules of spellcasting and chapter 11 for the druid spell list.',
                            {
                                type: 'entries',
                                name: 'Cantrips',
                                entries: [
                                    'At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Preparing and Casting Spells',
                                entries: [
                                    "The Druid table shows how many spell slots you have to cast your druid spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                                    'You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.',
                                    "For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
                                    'You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Ability',
                                entries: [
                                    'Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.',
                                    {
                                        type: 'abilityDc',
                                        name: 'Spell',
                                        attributes: ['wis'],
                                    },
                                    {
                                        type: 'abilityAttackMod',
                                        name: 'Spell',
                                        attributes: ['wis'],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Ritual Casting',
                                entries: [
                                    'You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Focus',
                                entries: [
                                    'You can use a druidic focus as a spellcasting focus for your druid spells',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Druid Circle',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'At 2nd level, you choose to identify with a circle of druids from the list of available circles. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.',
                            {
                                type: 'subclass'
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Wild Companion',
                    source: 'TCE',
                    page: 35,
                    class_source: 'PHB',
                    level: 2,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '2nd-level druid optional class feature',
                            'You gain the ability to summon a spirit that assumes an animal form: as an action, you can expend a use of your Wild Shape feature to cast the find familiar spell, without material components.',
                            'When you cast the spell in this way, the familiar is a fey instead of a beast, and the familiar disappears after a number of hours equal to half your druid level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Wild Shape',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.',
                            "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
                            {
                                type: 'table',
                                caption: 'Beast Shapes',
                                colLabels: ['Level', 'Max. CR', 'Limitations', 'Example'],
                                colStyles: [
                                    'col-2 text-center',
                                    'col-2 text-center',
                                    'col-5',
                                    'col-3',
                                ],
                                rows: [
                                    ['2nd', '1/4', 'No flying or swimming speed', 'Wolf'],
                                    ['4th', '1/2', 'No flying speed', 'Crocodile'],
                                    ['8th', '1', '—', 'Giant eagle'],
                                ],
                            },
                            'You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.',
                            'While you are transformed, the following rules apply:',
                            {
                                type: 'list',
                                items: [
                                    "Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
                                    "When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
                                    "You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
                                    "You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
                                    "You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form.",
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Cantrip Versatility',
                    source: 'TCE',
                    page: 35,
                    class_source: 'PHB',
                    level: 4,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '4th-level druid optional class feature',
                            "Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace one cantrip you learned from this class's Spellcasting feature with another cantrip from the druid spell list.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Wild Shape Improvement',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            'At 4th level, your Wild Shape improves as shown on the Beast Shapes table.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Druid Circle feature',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: ['At 6th level, you gain a feature granted by your Druid Circle.'],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Wild Shape Improvement',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            'At 8th level, your Wild Shape improves as shown on the Beast Shapes table.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Druid Circle feature',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, you gain a feature granted by your Druid Circle feature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 12,
                    entries: {
                        e: [
                            "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Druid Circle feature',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, you gain a feature granted by your Druid Circle feature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 16,
                    entries: {
                        e: [
                            "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Beast Spells',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Timeless Body',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            'Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 19,
                    entries: {
                        e: [
                            "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Archdruid',
                    source: 'PHB',
                    page: 64,
                    class_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, you can use your Wild Shape an unlimited number of times.',
                            "Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Fighting Style',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take the same Fighting Style option more than once, even if you get to choose again.",
                            {
                                type: 'fightStyleOptions',
                                options: {
                                    choose: {
                                        count: 1,
                                        from: ['Archery', 'Defense', 'Dueling', 'Great Weapon Fighting', 'Protection', 'Two-Weapon Fighting', 'Blind Fighting', 'Interception','Superior Technique','Thrown Weapon Fighting','Unarmed Fighting']
                                    }
                                },
                            },
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Second Wind',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.',
                            'Once you use this feature, you must finish a short or long rest before you can use it again.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Action Surge',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.',
                            'Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Martial Archetype',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you choose an archetype from the list available that you strive to emulate in your combat styles and techniques. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.',
                            {
                                type: 'subclass'
                            }
                        ],
                    },
                    id: uuidv4(),
                    has_options: true,
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Martial Versatility',
                    source: 'TCE',
                    page: 41,
                    class_source: 'PHB',
                    level: 4,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '4th-level fighter optional class features',
                            'Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, as you shift the focus of your martial practice:',
                            {
                                type: 'list',
                                items: [
                                    'Replace a fighting style you know with another fighting style available to fighters.',
                                    'If you know any maneuvers from the Battle Master archetype, you can replace one maneuver you know with a different maneuver.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Extra Attack',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 5,
                    entries: {
                        e: [
                            'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
                            'The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "When you reach 6th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Martial Archetype feature',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            'At 7th level, you gain a feature granted by your Martial Archetype.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Indomitable',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 9,
                    entries: {
                        e: [
                            "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.",
                            'You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Martial Archetype feature',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, you gain a feature granted by your Martial Archetype.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Extra Attack (2)',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            'At 11th level, you can attack three times whenever you take the Attack action on your turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 12,
                    entries: {
                        e: [
                            "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Indomitable (two uses)',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 13,
                    entries: {
                        e: ['At 13th level, you can use Indomitable twice between long rests.'],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            "When you reach 14th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Martial Archetype feature',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'At 15th level, you gain a feature granted by your Martial Archetype.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 16,
                    entries: {
                        e: [
                            "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Action Surge (two uses)',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you can use Action Surge twice before a rest, but only once on the same turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Indomitable (three uses)',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you can use Indomitable three times between long rests.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Martial Archetype feature',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            'At 18th level, you gain a feature granted by your Martial Archetype.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 19,
                    entries: {
                        e: [
                            "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Extra Attack (3)',
                    source: 'PHB',
                    page: 72,
                    class_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, you can attack four times whenever you take the Attack action on your turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Martial Arts',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.",
                            "You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield.",
                            {
                                type: 'list',
                                items: [
                                    'You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.',
                                    'You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.',
                                    "When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.",
                                ],
                            },
                            'Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama).',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Unarmored Defense',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Dedicated Weapon',
                    source: 'TCE',
                    page: 48,
                    class_source: 'PHB',
                    level: 2,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '2nd-level monk optional class features',
                            'You train yourself to use a variety of weapons as monk weapons, not just simple melee weapons and shortswords. Whenever you finish a short or long rest, you can touch one weapon, focus your ki on it, and then count that weapon as a monk weapon until you use this feature again.',
                            'The chosen weapon must meet these criteria:',
                            {
                                type: 'list',
                                items: [
                                    'The weapon must be a simple or martial weapon.',
                                    'You must be proficient with it.',
                                    'It must lack the heavy and special properties.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Ki',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.',
                            'You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.',
                            'When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.',
                            "Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:",
                            {
                                type: 'abilityDc',
                                name: 'Ki',
                                attributes: ['wis'],
                            },
                            {
                                type: 'entries',
                                name: 'Flurry of Blows',
                                entries: [
                                    'Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Patient Defense',
                                entries: [
                                    'You can spend 1 ki point to take the Dodge action as a bonus action on your turn.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Step of the Wind',
                                entries: [
                                    'You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Unarmored Movement',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.',
                            'At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Deflect Missiles',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.',
                            'If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack (range 20/60 feet) with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Ki-Fueled Attack',
                    source: 'TCE',
                    page: 48,
                    class_source: 'PHB',
                    level: 3,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '3rd-level monk optional class features',
                            'If you spend 1 ki point or more as part of your action on your turn, you can make one attack with an unarmed strike or a monk weapon as a bonus action before the end of the turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Monastic Tradition',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'When you reach 3rd level, you commit yourself to a monastic tradition, chosen from the list of available traditions. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.',
                            {
                                type: 'subclass'
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Quickened Healing',
                    source: 'TCE',
                    page: 48,
                    class_source: 'PHB',
                    level: 4,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '4th-level monk optional class features',
                            'As an action, you can spend 2 ki points and roll a Martial Arts die. You regain a number of hit points equal to the number rolled plus your proficiency bonus.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Slow Fall',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            'Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Extra Attack',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 5,
                    entries: {
                        e: [
                            'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Focused Aim',
                    source: 'TCE',
                    page: 48,
                    class_source: 'PHB',
                    level: 5,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '5th-level monk optional class features',
                            'When you miss with an attack roll, you can spend 1 to 3 ki points to increase your attack roll by 2 for each of these ki points you spend, potentially turning the miss into a hit.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Stunning Strike',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 5,
                    entries: {
                        e: [
                            "Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Ki-Empowered Strikes',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Monastic Tradition feature',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you gain one feature granted by your Monastic Tradition.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Evasion',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Stillness of Mind',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            'Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Unarmored Movement improvement',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 9,
                    entries: {
                        e: [
                            'At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Purity of Body',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Monastic Tradition feature',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            'At 11th level, you gain one feature granted by your Monastic Tradition.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 12,
                    entries: {
                        e: [
                            "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Tongue of the Sun and Moon',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 13,
                    entries: {
                        e: [
                            'Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Diamond Soul',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.',
                            'Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Timeless Body',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 16,
                    entries: {
                        e: [
                            "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Monastic Tradition feature',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you gain one feature granted by your Monastic Tradition.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Empty Body',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            'Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.',
                            "Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 19,
                    entries: {
                        e: [
                            "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Perfect Self',
                    source: 'PHB',
                    page: 76,
                    class_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Divine Sense',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.',
                            'You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Lay on Hands',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.',
                            'As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.',
                            'Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.',
                            'This feature has no effect on undead and constructs.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Divine Smite',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Fighting Style',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            "At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take the same Fighting Style option more than once, even if you get to choose again.",
                            {
                                type: 'fightStyleOptions',
                                options: {
                                    choose: {
                                        count: 1,
                                        from: ['Defense','Dueling','Great Weapon Fighting','Protection','Blessed Warrior', 'Blind Fighting','Interception']
                                    }
                                },
                            },
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Spellcasting',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does. See chapter 10|PHB|10} for the general rules of spellcasting and chapter 11 for the paladin spell list.',
                            {
                                type: 'entries',
                                name: 'Preparing and Casting Spells',
                                entries: [
                                    "The Paladin table shows how many spell slots you have to cast your paladin spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                                    'You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.',
                                    "For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd-level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
                                    'You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Ability',
                                entries: [
                                    'Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.',
                                    {
                                        type: 'abilityDc',
                                        name: 'Spell',
                                        attributes: ['cha'],
                                    },
                                    {
                                        type: 'abilityAttackMod',
                                        name: 'Spell',
                                        attributes: ['cha'],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Focus',
                                entries: [
                                    'You can use a holy symbol as a spellcasting focus for your paladin spells.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Channel Divinity: Harness Divine Power',
                    source: 'TCE',
                    page: 52,
                    class_source: 'PHB',
                    level: 3,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '3rd-level paladin optional class feature',
                            "You can expend a use of your Channel Divinity to fuel your spells. As a bonus action, you touch your holy symbol, utter a prayer, and regain one expended spell slot, the level of which can be no higher than half your proficiency bonus (rounded up). The number of times you can use this feature is based on the level you've reached in this class: 3rd level, once; 7th level, twice; and 15th level, thrice. You regain all expended uses when you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Divine Health',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'By 3rd level, the divine magic flowing through you makes you immune to disease.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Sacred Oath',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose from the list of available oaths.',
                            'Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.',
                            {
                                name: 'Oath Spells',
                                type: 'entries',
                                entries: [
                                    "Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don't count against the number of spells you can prepare each day.",
                                    "If you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you.",
                                ],
                            },
                            {
                                name: 'Channel Divinity',
                                type: 'entries',
                                entries: [
                                    'Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.',
                                    'When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.',
                                    'Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC.',
                                ],
                            },
                            {
                                type: 'refClassFeature',
                                classFeature: 'Channel Divinity: Harness Divine Power|Paladin||3|TCE',
                            },
                            {
                                name: 'Breaking Your Oath',
                                type: 'inset',
                                entries: [
                                    'A paladin tries to hold to the highest standards of conduct, but even the most virtuous paladin is fallible. Sometimes the right path proves too demanding, sometimes a situation calls for the lesser of two evils, and sometimes the heat of emotion causes a paladin to transgress his or her oath.',
                                    'A paladin who has broken a vow typically seeks absolution from a cleric who shares his or her faith or from another paladin of the same order. The paladin might spend an all-night vigil in prayer as a sign of penitence, or undertake a fast or similar act of self-denial. After a rite of confession and forgiveness, the paladin starts fresh.',
                                    "If a paladin willfully violates his or her oath and shows no sign of repentance, the consequences can be more serious. At the DM's discretion, an impenitent paladin might be forced to abandon this class and adopt another, or perhaps to take the Oathbreaker paladin option that appears in the Dungeon Master's Guide.",
                                ],
                            },
                            {
                                type: 'subclass'
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Martial Versatility',
                    source: 'TCE',
                    page: 52,
                    class_source: 'PHB',
                    level: 4,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '4th-level paladin optional class feature',
                            'Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace a fighting style you know with another fighting style available to paladins. This replacement represents a shift of focus in your martial practice.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Extra Attack',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 5,
                    entries: {
                        e: [
                            'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Aura of Protection',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.',
                            'At 18th level, the range of this aura increases to 30 feet.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Sacred Oath feature',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            'At 7th level, you gain a feature granted to you by your Sacred Oath.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Aura of Courage',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            "Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious.",
                            'At 18th level, the range of this aura increases to 30 feet.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Improved Divine Smite',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            'By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 12,
                    entries: {
                        e: [
                            "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Cleansing Touch',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.',
                            'You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Sacred Oath feature',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'At 15th level, you gain a feature granted to you by your Sacred Oath.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 16,
                    entries: {
                        e: [
                            "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Aura improvements',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            'At 18th level, the range of your Aura of Protection increases to 30 feet.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 19,
                    entries: {
                        e: [
                            "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Sacred Oath feature',
                    source: 'PHB',
                    page: 82,
                    class_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, you gain a feature granted to you by your Sacred Oath.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22'
                },
                {
                    name: 'Deft Explorer',
                    source: 'TCE',
                    page: 56,
                    class_source: 'PHB',
                    level: 1,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '1st-level ranger optional class feature, which replaces the Natural Explorer feature}',
                            'You are an unsurpassed explorer and survivor, both in the wilderness and in dealing with others on your travels. You gain the Canny benefit below, and you gain an additional benefit below when you reach 6th level and 10th level in this class.',
                            {
                                name: 'Canny',
                                type: 'entries',
                                entries: [
                                    'Choose one of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses the chosen skill.',
                                    'You can also speak, read, and write two additional languages of your choice.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Favored Enemy',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.',
                            'Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.',
                            'You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.',
                            'When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.',
                            'You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Favored Foe',
                    source: 'TCE',
                    page: 56,
                    class_source: 'PHB',
                    level: 1,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '1st-level ranger optional class features, which replaces the Favored Enemy feature and works with the Foe Slayer feature',
                            'When you hit a creature with an attack roll, you can call on your mystical bond with nature to mark the target as your favored enemy for 1 minute or until you lose your concentration (as if you were concentrating on a spell).',
                            'The first time on each of your turns that you hit the favored enemy and deal damage to it, including when you mark it, you can increase that damage by 1d4.',
                            'You can use this feature to mark a favored enemy a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                            "This feature's extra damage increases when you reach certain levels in this class: to 1d6 at 6th level and to 1d8 at 14th level.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Natural Explorer',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.",
                            'While traveling for an hour or more in your favored terrain, you gain the following benefits:',
                            {
                                type: 'list',
                                items: [
                                    "Difficult terrain doesn't slow your group's travel.",
                                    "Your group can't become lost except by magical means.",
                                    'Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.',
                                    'If you are traveling alone, you can move stealthily at a normal pace.',
                                    'When you forage, you find twice as much food as you normally would.',
                                    'While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.',
                                ],
                            },
                            'You choose additional favored terrain types at 6th and 10th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Fighting Style',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            "At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
                            {
                                type: 'fightStyleOptions',
                                options: {
                                    choose: {
                                        count: 1,
                                        from: ['Archery','Defense','Dueling', 'Two-Weapon Fighting','Blind Fighting','Druidic Warrior','Thrown Weapon Fighting']
                                    }
                                },
                            },
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Spellcasting',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See chapter 10 for the general rules of spellcasting and chapter 11 for the ranger spell list.',
                            {
                                type: 'entries',
                                name: 'Spell Slots',
                                entries: [
                                    "The Ranger table shows how many spell slots you have to cast your ranger spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                                    'For example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spells Known of 1st Level and Higher',
                                entries: [
                                    'You know two 1st-level spells of your choice from the ranger spell list.',
                                    'The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.',
                                    'Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Ability',
                                entries: [
                                    'Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.',
                                    {
                                        type: 'abilityDc',
                                        name: 'Spell',
                                        attributes: ['wis'],
                                    },
                                    {
                                        type: 'abilityAttackMod',
                                        name: 'Spell',
                                        attributes: ['wis'],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Spellcasting Focus',
                    source: 'TCE',
                    page: 56,
                    class_source: 'PHB',
                    level: 2,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '2nd-level ranger optional class features',
                            'You can use a druidic focus as a spellcasting focus for your ranger spells. A druidic focus might be a sprig of mistletoe or holly, a wand or rod made of yew or another special wood, a staff drawn whole from a living tree, or an object incorporating feathers, fur, bones, and teeth from sacred animals.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Primal Awareness',
                    source: 'TCE',
                    page: 56,
                    class_source: 'PHB',
                    level: 3,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '3rd-level ranger optional class features, which replaces the Primeval Awareness feature',
                            "You can focus your awareness through the interconnections of nature: you learn additional spells when you reach certain levels in this class if you don't already know them, as shown in the Primal Awareness Spells table. These spells don't count against the number of ranger spells you know.",
                            {
                                type: 'table',
                                caption: 'Primal Awareness Spells',
                                colLabels: ['Ranger Level', 'Spell'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'speak with animals'],
                                    ['5th', 'beast sense'],
                                    ['9th', 'speak with plants'],
                                    ['13th', 'locate creature'],
                                    ['17th', 'commune with nature'],
                                ],
                            },
                            "You can cast each of these spells once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Primeval Awareness',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Ranger Archetype',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you choose an archetype that you strive to emulate from the list of available archetypes. Your choice grants features at 3rd level, and again at 7th, 11th, and 15th level.',
                            {
                                type: 'subclass'
                            },
                        ],
                    },
                    id: uuidv4(),
                    has_options: true,
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Martial Versatility',
                    source: 'TCE',
                    page: 56,
                    class_source: 'PHB',
                    level: 4,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '4th-level ranger optional class features',
                            'Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace a fighting style you know with another fighting style available to rangers. This replacement represents a shift of focus in your martial practice.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Extra Attack',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 5,
                    entries: {
                        e: [
                            'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Deft Explorer Improvement',
                    source: 'TCE',
                    page: 56,
                    class_source: 'PHB',
                    level: 6,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            'You gain an additional benefit when you reach 6th level in this class.',
                            {
                                type: 'entries',
                                name: 'Roving',
                                entries: [
                                    'Your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Favored Enemy and Natural Explorer improvements',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you gain an additional favored terrain.',
                            'At 6th level, you choose one additional favored enemy, as well as an associated language. Your choice should reflect the types of monsters you have encountered on your adventures.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Ranger Archetype feature',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            'At 7th level, you gain a feature granted to you by your Ranger Archetype.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: "Land's Stride",
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            'Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.',
                            'In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Deft Explorer Improvement',
                    source: 'TCE',
                    page: 56,
                    class_source: 'PHB',
                    level: 10,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            'You gain an additional benefit when you reach 10th level in this class.',
                            {
                                type: 'entries',
                                name: 'Tireless',
                                entries: [
                                    'As an action, you can give yourself a number of temporary hit points equal to 1d8 + your Wisdom modifier (minimum of 1 temporary hit point). You can use this action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                                    'In addition, whenever you finish a short rest, your exhaustion level, if any, is decreased by 1.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Hide in Plain Sight',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.',
                            'Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Natural Explorer improvement',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: ['You gain an additional favored terrain.'],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: "Nature's Veil",
                    source: 'TCE',
                    page: 56,
                    class_source: 'PHB',
                    level: 10,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '10th-level ranger optional class features, which replaces the Hide in Plain Sight feature',
                            'You draw on the powers of nature to hide yourself from view briefly. As a bonus action, you can magically become invisible, along with any equipment you are wearing or carrying, until the start of your next turn.',
                            'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Ranger Archetype feature',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            'At 11th level, you gain a feature granted to you by your Ranger Archetype.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 12,
                    entries: {
                        e: [
                            "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Favored Enemy improvement',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, you choose one additional favored enemy, as well as an associated language. Your choice should reflect the types of monsters you have encountered on your adventures.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Vanish',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Ranger Archetype feature',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'At 15th level, you gain a feature granted to you by your Ranger Archetype.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 16,
                    entries: {
                        e: [
                            "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Feral Senses',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            "At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 19,
                    entries: {
                        e: [
                            "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Foe Slayer',
                    source: 'PHB',
                    page: 89,
                    class_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Expertise',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
                            "At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit.",
                            {
                                type: 'skillOptions',
                                options: {
                                    choose: {
                                        count: 2,
                                        from: 'known'
                                    }
                                }
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Sneak Attack',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.",
                            "You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.",
                            'The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: "Thieves' Cant",
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.",
                            "In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Cunning Action',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Roguish Archetype',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities from the list of available archetypes. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.',
                            {
                                type: 'subclass'
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Steady Aim',
                    source: 'TCE',
                    page: 62,
                    class_source: 'PHB',
                    level: 3,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '3rd-level rogue optional class features',
                            "As a bonus action, you give yourself advantage on your next attack roll on the current turn. You can use this bonus action only if you haven't moved during this turn, and after you use the bonus action, your speed is 0 until the end of the current turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Uncanny Dodge',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 5,
                    entries: {
                        e: [
                            "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Expertise',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain the benefit of Expertise.",
                            {
                                type: 'skillOptions',
                                options: {
                                    choose: {
                                        count: 2,
                                        from: 'known'
                                    }
                                }
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Evasion',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Roguish Archetype feature',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 9,
                    entries: {
                        e: [
                            'At 9th level, you gain a feature granted by your Roguish Archetype.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            "When you reach 10th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Reliable Talent',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            'By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 12,
                    entries: {
                        e: [
                            "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Roguish Archetype feature',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 13,
                    entries: {
                        e: [
                            'At 13th level, you gain a feature granted by your Roguish Archetype.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Blindsense',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Slippery Mind',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 16,
                    entries: {
                        e: [
                            "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Roguish Archetype feature',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you gain a feature granted by your Roguish Archetype.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Elusive',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 19,
                    entries: {
                        e: [
                            "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Stroke of Luck',
                    source: 'PHB',
                    page: 94,
                    class_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.',
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Sorcerous Origin',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Choose a sorcerous origin, which describes the source of your innate magical power, from the list of available origins.',
                            'Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.',
                            {
                                type: 'subclass'
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Spellcasting',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the sorcerer spell list.',
                            {
                                type: 'entries',
                                name: 'Cantrips',
                                entries: [
                                    'At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn an additional sorcerer cantrip of your choice at 4th level and another at 10th level.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spell Slots',
                                entries: [
                                    "The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                                    'For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spells Known of 1st Level and Higher',
                                entries: [
                                    'You know two 1st-level spells of your choice from the sorcerer spell list.',
                                    'You learn an additional sorcerer spell of your choice at each level except 12th, 14th, 16th, 18th, 19th, and 20th. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.',
                                    'Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Ability',
                                entries: [
                                    'Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.',
                                    {
                                        type: 'abilityDc',
                                        name: 'Spell',
                                        attributes: ['cha'],
                                    },
                                    {
                                        type: 'abilityAttackMod',
                                        name: 'Spell',
                                        attributes: ['cha'],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Focus',
                                entries: [
                                    'You can use an arcane focus as a spellcasting focus for your sorcerer spells.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Flexible Casting',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.',
                            {
                                type: 'entries',
                                name: 'Creating Spell Slots',
                                entries: [
                                    'You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The created spell slots vanish at the end of a long rest. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th.',
                                    {
                                        type: 'table',
                                        caption: 'Creating Spell Slots',
                                        colLabels: ['Spell Slot Level', 'Sorcery Point Cost'],
                                        colStyles: ['col-6 text-center', 'col-6 text-center'],
                                        rows: [
                                            ['1st', '2'],
                                            ['2nd', '3'],
                                            ['3rd', '5'],
                                            ['4th', '6'],
                                            ['5th', '7'],
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Converting a Spell Slot to Sorcery Points',
                                entries: [
                                    "As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level.",
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Metamagic',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.',
                            'You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.',
                            {
                                type: 'options',
                                options: {
                                    choose: {
                                        count: 1,
                                        from: ['Careful Spell','Distant Spell','Empowered Spell','Extended Spell','Heightened Spell','Quickened Spell','Subtle Spell','Twinned Spell','Seeking Spell','Transmuted Spell']
                                    }
                                },
                            },
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Sorcerous Versatility',
                    source: 'TCE',
                    page: 65,
                    class_source: 'PHB',
                    level: 4,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '4th-level sorcerer optional class features',
                            'Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, representing the magic within you flowing in new ways:',
                            {
                                type: 'list',
                                items: [
                                    'Replace one of the options you chose for the Metamagic feature with a different Metamagic option available to you.',
                                    "Replace one cantrip you learned from this class's Spellcasting feature with another cantrip from the sorcerer spell list.",
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Magical Guidance',
                    source: 'TCE',
                    page: 65,
                    class_source: 'PHB',
                    level: 5,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '5th-level sorcerer optional class features',
                            'You can tap into your inner wellspring of magic to try to conjure success from failure. When you make an ability check that fails, you can spend 1 sorcery point to reroll the d20, and you must use the new roll, potentially turning the failure into a success.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Sorcerous Origin feature',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: ['At 6th level, you gain a feature granted by your Sorcerous Origin.'],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Metamagic',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: ['At 10th level, you learn an additional metamagic option.'],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Sorcerous Origin feature',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, you gain a feature granted by your Sorcerous Origin.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Metamagic',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 17,
                    entries: {
                        e: ['At 17th level, you learn an additional metamagic option.'],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Sorcerous Origin feature',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            'At 18th level, you gain a feature granted by your Sorcerous Origin.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Sorcerous Restoration',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Font of Magic',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.',
                            {
                                type: 'entries',
                                name: 'Sorcery Points',
                                entries: [
                                    'You have 2 sorcery points, and you gain one additional point every time you level up, to a maximum of 20 at level 20. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.',
                                ],
                            },
                            {
                                type: 'refClassFeature',
                                classFeature: 'Flexible Casting|Sorcerer||2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 12,
                    entries: {
                        e: [
                            "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 16,
                    entries: {
                        e: [
                            "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 99,
                    class_source: 'PHB',
                    level: 19,
                    entries: {
                        e: [
                            "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Otherworldly Patron',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'At 1st level, you have struck a bargain with an otherworldly being chosen from the list of available patrons. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.',
                            {
                                type: 'subclass'
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Pact Magic',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the warlock spell list',
                            {
                                type: 'entries',
                                name: 'Cantrips',
                                entries: [
                                    'You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spell Slots',
                                entries: [
                                    'The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.',
                                    'For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spells Known of 1st Level and Higher',
                                entries: [
                                    'At 1st level, you know two 1st-level spells of your choice from the warlock spell list.',
                                    "The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.",
                                    'Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Ability',
                                entries: [
                                    'Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.',
                                    {
                                        type: 'abilityDc',
                                        name: 'Spell',
                                        attributes: ['cha'],
                                    },
                                    {
                                        type: 'abilityAttackMod',
                                        name: 'Spell',
                                        attributes: ['cha'],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Focus',
                                entries: [
                                    'You can use an arcane focus as a spellcasting focus for your warlock spells.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Eldritch Invocations',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.',
                            'At 2nd level, you gain two eldritch invocations of your choice. A list of the available options can be found on the Optional Features page. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.',
                            'Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.',
                            'If an eldritch invocation has prerequisites, you must meet them to learn it. You can learn the invocation at the same time that you meet its prerequisites. A level prerequisite refers to your level in this class.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Pact Boon',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.',
                            {
                                type: 'options',
                                count: 1,
                                entries: [
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Pact of the Chain',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Pact of the Blade',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Pact of the Tome',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Pact of the Talisman',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Eldritch Versatility',
                    source: 'TCE',
                    page: 70,
                    class_source: 'PHB',
                    level: 4,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '4th-level warlock optional class features',
                            'Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, representing a change of focus in your occult studies:',
                            {
                                type: 'list',
                                items: [
                                    "Replace one cantrip you learned from this class's Pact Magic feature with another cantrip from the warlock spell list.",
                                    "Replace the option you chose for the Pact Boon feature with one of that feature's other options.",
                                    "If you're 12th level or higher, replace one spell from your Mystic Arcanum feature with another warlock spell of the same level.",
                                ],
                            },
                            'If this change makes you ineligible for any of your Eldritch Invocations, you must also replace them now, choosing invocations for which you qualify.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Otherworldly Patron feature',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you gain a feature granted by your Otherworldly Patron.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Otherworldly Patron feature',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, you gain a feature granted by your Otherworldly Patron.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Mystic Arcanum (6th level)',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            'At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.',
                            'You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.',
                            'At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 12,
                    entries: {
                        e: [
                            "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Mystic Arcanum (7th level)',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 13,
                    entries: {
                        e: [
                            'At 13th level, your patron bestows upon you a magical secret called an arcanum. Choose one 7th-level spell from the warlock spell list as this arcanum.',
                            'You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Otherworldly Patron feature',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, you gain a feature granted by your Otherworldly Patron.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Mystic Arcanum (8th level)',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'At 15th level, your patron bestows upon you a magical secret called an arcanum. Choose one 8th-level spell from the warlock spell list as this arcanum.',
                            'You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 16,
                    entries: {
                        e: [
                            "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Mystic Arcanum (9th level)',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, your patron bestows upon you a magical secret called an arcanum. Choose one 9th-level spell from the warlock spell list as this arcanum.',
                            'You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 19,
                    entries: {
                        e: [
                            "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Eldritch Master',
                    source: 'PHB',
                    page: 105,
                    class_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Arcane Recovery',
                    source: 'PHB',
                    page: 112,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.',
                            "For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots.",
                            'You can recover either a 2nd-level spell slot or two 1st-level spell slots.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Spellcasting',
                    source: 'PHB',
                    page: 112,
                    class_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power. See chapter 10|PHB|10} for the general rules of spellcasting and chapter 11 for the wizard spell list.',
                            {
                                type: 'entries',
                                name: 'Cantrips',
                                entries: [
                                    'At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellbook',
                                entries: [
                                    'At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Preparing and Casting Spells',
                                entries: [
                                    "The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                                    'You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.',
                                    "For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
                                    'You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Ability',
                                entries: [
                                    'Intelligence is your spellcasting ability for your wizard spells, since you learn your wizard spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.',
                                    {
                                        type: 'abilityDc',
                                        name: 'Spell',
                                        attributes: ['int'],
                                    },
                                    {
                                        type: 'abilityAttackMod',
                                        name: 'Spell',
                                        attributes: ['int'],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Ritual Casting',
                                entries: [
                                    "You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.",
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Spellcasting Focus',
                                entries: [
                                    'You can use an arcane focus as a spellcasting focus for your wizard spells.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Learning Spells of 1st Level and Higher',
                                entries: [
                                    'Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook (see "Your Spellbook").',
                                ],
                            },
                            {
                                type: 'inset',
                                name: 'Your Spellbook',
                                entries: [
                                    "The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard's chest, for example, or in a dusty tome in an ancient library.",
                                    "A spellbook doesn't contain cantrips.",
                                    {
                                        type: 'entries',
                                        entries: [
                                            {
                                                type: 'entries',
                                                name: 'Copying a Spell into the Book',
                                                entries: [
                                                    'When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it.',
                                                    'Copying a spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required, then transcribe it into your spellbook using your own notation.',
                                                    'For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells.',
                                                    {
                                                        type: 'entries',
                                                        name: 'Copying from a Spell Scroll',
                                                        source: 'DMG',
                                                        page: 139,
                                                        entries: [
                                                            "A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When you copy a spell from a spell scroll, you must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        entries: [
                                            {
                                                type: 'entries',
                                                name: 'Replacing the Book',
                                                entries: [
                                                    'You can copy a spell from your own spellbook into another book—for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell.',
                                                    'If you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.',
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        entries: [
                                            {
                                                type: 'entries',
                                                name: "The Book's Appearance",
                                                entries: [
                                                    'Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library, or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.',
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Arcane Tradition',
                    source: 'PHB',
                    page: 112,
                    class_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'When you reach 2nd level, you choose an arcane tradition from the list of available traditions, shaping your practice of magic. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.',
                            {
                                type: 'subclass'
                            }
                        ],
                    },
                    has_options: true,
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Cantrip Formulas',
                    source: 'TCE',
                    page: 75,
                    class_source: 'PHB',
                    level: 3,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '3rd-level wizard optional class features',
                            'You have scribed a set of arcane formulas in your spellbook that you can use to formulate a cantrip in your mind. Whenever you finish a long rest and consult those formulas in your spellbook, you can replace one wizard cantrip you know with another cantrip from the wizard spell list.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 112,
                    class_source: 'PHB',
                    level: 4,
                    entries: {
                        e: [
                            "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Arcane Tradition feature',
                    source: 'PHB',
                    page: 112,
                    class_source: 'PHB',
                    level: 6,
                    entries: {
                        e: ['At 6th level, you gain a feature granted by your Arcane Tradition.'],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 112,
                    class_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Arcane Tradition feature',
                    source: 'PHB',
                    page: 112,
                    class_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, you gain a feature granted by your Arcane Tradition.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 112,
                    class_source: 'PHB',
                    level: 12,
                    entries: {
                        e: [
                            "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Arcane Tradition feature',
                    source: 'PHB',
                    page: 112,
                    class_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, you gain a feature granted by your Arcane Tradition.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 112,
                    class_source: 'PHB',
                    level: 16,
                    entries: {
                        e: [
                            "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Spell Mastery',
                    source: 'PHB',
                    page: 112,
                    class_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            'At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.',
                            'By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Ability Score Improvement',
                    source: 'PHB',
                    page: 112,
                    class_source: 'PHB',
                    level: 19,
                    entries: {
                        e: [
                            "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Signature Spells',
                    source: 'PHB',
                    page: 112,
                    class_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.",
                            'If you want to cast either spell at a higher level, you must expend a spell slot as normal.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
            ])
        ))
)