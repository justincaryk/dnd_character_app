const {
    v4: uuidv4
} = require('uuid')

exports.seed = knex => (
    //Deletes ALL existing entries
    knex('classes')
        .del()
        .then(() => (
            knex('classes').insert([
                {
                    id: '8be354f0-4707-41a5-be97-127d1218c446',
                    name: 'Barbarian',
                    source: 'PHB',
                    page: 46,
                    hd_number: 1,
                    hd_faces: 12,
                    proficiency: ['str', 'con'],
                    starting_proficiencies: {
                        armor: ['light', 'medium', 'shield'],
                        weapons: ['simple', 'martial'],
                        tools: [],
                        skills: {
                            choose: {
                                from: [
                                    'animal handling',
                                    'athletics',
                                    'intimidation',
                                    'nature',
                                    'perception',
                                    'survival',
                                ],
                                count: 2,
                            },
                        },
                    },
                    starting_equipment: {
                        additionalFromBackground: true,
                        default: [
                            '(a) a greataxe or (b) any martial melee weapon',
                            '(a) two handaxes or (b) any simple weapon',
                            "An explorer's pack, and four javelin",
                        ],
                        goldAlternative: '2d4 × 10 Starting Gold',
                    },
                    multiclassing: {
                        requirements: {
                            str: 13,
                        },
                        proficienciesGained: {
                            armor: ['shield'],
                            weapons: ['simple', 'martial'],
                        },
                    },
                    class_features: [
                        'Rage||1',
                        'Unarmored Defense||1',
                        'Danger Sense||2',
                        'Survival Instincts||2',
                        'Reckless Attack||2',
                        'Primal Path||3||Subclass',
                        'Primal Knowledge||3',
                        'Ability Score Improvement||4',
                        'Extra Attack||5',
                        'Fast Movement||5',
                        'Instinctive Pounce||5',
                        'Path Feature||6||Subclass',
                        'Feral Instinct||7',
                        'Instinctive Pounce||7',
                        'Ability Score Improvement||8',
                        'Brutal Critical (1 die)||9',
                        'Path feature||10||Subclass',
                        'Relentless Rage||11',
                        'Ability Score Improvement||12',
                        'Brutal Critical (2 dice)||13',
                        'Path feature||14||Subclass',
                        'Persistent Rage||15',
                        'Ability Score Improvement||16',
                        'Brutal Critical (3 dice)||17',
                        'Indomitable Might||18',
                        'Ability Score Improvement||19',
                        'Primal Champion||20',
                    ],
                    meta: {
                        classTableGroups: [
                            {
                                colLabels: ['Rages', 'Rage Damage'],
                                rows: [
                                    [
                                        '2',
                                        {
                                            type: 'bonus',
                                            value: 2,
                                        },
                                    ],
                                    [
                                        '2',
                                        {
                                            type: 'bonus',
                                            value: 2,
                                        },
                                    ],
                                    [
                                        '3',
                                        {
                                            type: 'bonus',
                                            value: 2,
                                        },
                                    ],
                                    [
                                        '3',
                                        {
                                            type: 'bonus',
                                            value: 2,
                                        },
                                    ],
                                    [
                                        '3',
                                        {
                                            type: 'bonus',
                                            value: 2,
                                        },
                                    ],
                                    [
                                        '4',
                                        {
                                            type: 'bonus',
                                            value: 2,
                                        },
                                    ],
                                    [
                                        '4',
                                        {
                                            type: 'bonus',
                                            value: 2,
                                        },
                                    ],
                                    [
                                        '4',
                                        {
                                            type: 'bonus',
                                            value: 2,
                                        },
                                    ],
                                    [
                                        '4',
                                        {
                                            type: 'bonus',
                                            value: 3,
                                        },
                                    ],
                                    [
                                        '4',
                                        {
                                            type: 'bonus',
                                            value: 3,
                                        },
                                    ],
                                    [
                                        '4',
                                        {
                                            type: 'bonus',
                                            value: 3,
                                        },
                                    ],
                                    [
                                        '5',
                                        {
                                            type: 'bonus',
                                            value: 3,
                                        },
                                    ],
                                    [
                                        '5',
                                        {
                                            type: 'bonus',
                                            value: 3,
                                        },
                                    ],
                                    [
                                        '5',
                                        {
                                            type: 'bonus',
                                            value: 3,
                                        },
                                    ],
                                    [
                                        '5',
                                        {
                                            type: 'bonus',
                                            value: 3,
                                        },
                                    ],
                                    [
                                        '5',
                                        {
                                            type: 'bonus',
                                            value: 4,
                                        },
                                    ],
                                    [
                                        '6',
                                        {
                                            type: 'bonus',
                                            value: 4,
                                        },
                                    ],
                                    [
                                        '6',
                                        {
                                            type: 'bonus',
                                            value: 4,
                                        },
                                    ],
                                    [
                                        '6',
                                        {
                                            type: 'bonus',
                                            value: 4,
                                        },
                                    ],
                                    [
                                        'Unlimited',
                                        {
                                            type: 'bonus',
                                            value: 4,
                                        },
                                    ],
                                ],
                            },
                        ],
                    },
                    subclass_title: 'Primal Path',
                },
                {
                    id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                    name: 'Bard',
                    source: 'PHB',
                    page: 51,
                    hd_number: 1,
                    hd_faces: 8,
                    proficiency: ['dex', 'cha'],
                    spellcasting_ability: 'cha',
                    caster_progression: 'full',
                    cantrip_progression: [
                        2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                    ],
                    spells_known_progression: [
                        4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 15, 16, 18, 19, 19, 20, 22, 22, 22,
                    ],
                    starting_proficiencies: {
                        armor: ['light'],
                        weapons: [
                            'simple',
                            'hand crossbow|phb|hand crossbows',
                            'longsword|phb|longswords',
                            'rapier|phb|rapiers',
                            'shortsword|phb|shortswords',
                        ],
                        tools: [
                            'three musical instruments of your choice',
                        ],
                        skills: {
                            choose: {
                                from: [
                                    'athletics',
                                    'acrobatics',
                                    'sleight of hand',
                                    'stealth',
                                    'arcana',
                                    'history',
                                    'investigation',
                                    'nature',
                                    'religion',
                                    'animal handling',
                                    'insight',
                                    'medicine',
                                    'perception',
                                    'survival',
                                    'deception',
                                    'intimidation',
                                    'performance',
                                    'persuasion',
                                ],
                                count: 3,
                            },
                        },
                    },
                    starting_equipment: {
                        additionalFromBackground: true,
                        default: [
                            '(a) a rapier, (b) a longsword, or (c) any simple weapon',
                            "(a) a diplomat's pack or (b) an entertainer's pack",
                            '(a) a lute or (b) any other musical instrument',
                            'Leather armor, and a dagger',
                        ],
                        goldAlternative: '5d4 × 10',
                    },
                    multiclassing: {
                        requirements: {
                            cha: 13,
                        },
                        proficienciesGained: {
                            armor: ['light'],
                            skills: [
                                {
                                    choose: {
                                        from: [
                                            'athletics',
                                            'acrobatics',
                                            'sleight of hand',
                                            'stealth',
                                            'arcana',
                                            'history',
                                            'investigation',
                                            'nature',
                                            'religion',
                                            'animal handling',
                                            'insight',
                                            'medicine',
                                            'perception',
                                            'survival',
                                            'deception',
                                            'intimidation',
                                            'performance',
                                            'persuasion',
                                        ],
                                        count: 1,
                                    },
                                },
                            ],
                            tools: ['one musical instrument of your choice'],
                            weapons: []
                        },
                    },
                    class_features: [
                        'Bardic Inspiration||1',
                        'Spellcasting||1',
                        'Jack of All Trades||2',
                        'Song of Rest (d6)||2',
                        'Magical Inspiration||2',
                        'Bard College||3||Subclass',
                        'Expertise|Bard||3',
                        'Ability Score Improvement||4',
                        'Bardic Versatility||4',
                        'Bardic Inspiration (d8)||5',
                        'Font of Inspiration||5',
                        'Countercharm||6',
                        'Bard College feature||6||Subclass',
                        'Ability Score Improvement||8',
                        'Song of Rest (d8)||9',
                        'Bardic Inspiration (d10)||10',
                        'Expertise||10',
                        'Magical Secrets||10',
                        'Ability Score Improvement||12',
                        'Song of Rest (d10)||13',
                        'Magical Secrets||14',
                        'Bard College feature||14||Subclass',
                        'Bardic Inspiration (d12)||15',
                        'Ability Score Improvement||16',
                        'Song of Rest (d12)||17',
                        'Magical Secrets||18',
                        'Ability Score Improvement||19',
                        'Superior Inspiration||20',
                    ],
                    meta: {
                        classTableGroups: [
                            {
                                colLabels: [
                                    'Cantrips Known',
                                    'Spells Known',
                                ],
                                rows: [
                                    [2, 4],
                                    [2, 5],
                                    [2, 6],
                                    [3, 7],
                                    [3, 8],
                                    [3, 9],
                                    [3, 10],
                                    [3, 11],
                                    [3, 12],
                                    [4, 14],
                                    [4, 15],
                                    [4, 15],
                                    [4, 16],
                                    [4, 18],
                                    [4, 19],
                                    [4, 19],
                                    [4, 20],
                                    [4, 22],
                                    [4, 22],
                                    [4, 22],
                                ],
                            },
                            {
                                title: 'Spell Slots per Spell Level',
                                colLabels: [
                                    '1st',
                                    '2nd',
                                    '3rd',
                                    '4th',
                                    '5th',
                                    '6th',
                                    '7th',
                                    '8th',
                                    '9th',
                                ],
                                rows: [
                                    [2, 0, 0, 0, 0, 0, 0, 0, 0],
                                    [3, 0, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 2, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 2, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 1, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 2, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 1, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 1, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 2, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 2, 2, 1, 1],
                                ],
                            },
                        ]
                    },
                    subclass_title: 'Bard College',
                },
                {
                    id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                    name: 'Cleric',
                    source: 'PHB',
                    page: 56,
                    srd: true,
                    hd_number: 1,
                    hd_faces: 8,
                    proficiency: ['wis', 'cha'],
                    spellcasting_ability: 'wis',
                    caster_progression: 'full',
                    prepared_spells: '<$level$> + <$wis_mod$>',
                    cantrip_progression: [
                        3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
                    ],
                    starting_proficiencies: {
                        armor: ['light', 'medium', 'shields'],
                        weapons: ['simple'],
                        skills: {
                            choose: {
                                from: ['history', 'insight', 'medicine', 'persuasion', 'religion'],
                                count: 2,
                            },
                        },
                        tools: [],
                    },
                    starting_equipment: {
                        additionalFromBackground: true,
                        default: [
                            '(a) a mace or (b) a warhammer (if proficient)',
                            '(a) scale mail, (b) leather armor, or (c) chain mail (if proficient)',
                            '(a) a light crossbow and Crossbow Bolts (20) or (b) any simple weapon',
                            "(a) a priest's pack or (b) an explorer's pack",
                            'A shield and a holy symbol',
                        ],
                        goldAlternative: '5d4 × 10',
                    },
                    multiclassing: {
                        requirements: {
                            wis: 13,
                        },
                        proficienciesGained: {
                            armor: ['light', 'medium', 'shields'],
                            weapons: [],
                        },
                    },
                    class_features: [
                        'Spellcasting||1',
                        'Divine Domain||1||Subclass',
                        'Channel Divinity (1/rest)||2',
                        'Channel Divinity: Harness Divine Power||2',
                        'Divine Domain feature||2||Subclass',
                        'Ability Score Improvement||4',
                        'Cantrip Versatility||4',
                        'Destroy Undead (CR 1/2)||5',
                        'Channel Divinity (2/rest)||6',
                        'Divine Domain feature||6||Subclass',
                        'Ability Score Improvement||8',
                        'Destroy Undead (CR 1)||8',
                        'Divine Domain feature||8||Subclass',
                        'Divine Intervention||10',
                        'Destroy Undead (CR 2)||11',
                        'Ability Score Improvement||12',
                        'Destroy Undead (CR 3)||14',
                        'Ability Score Improvement||16',
                        'Destroy Undead (CR 4)||17',
                        'Divine Domain feature||17|Subclass',
                        'Channel Divinity (3/rest)||18',
                        'Ability Score Improvement||19',
                        'Divine Intervention Improvement||20',
                    ],
                    meta: {
                        classTableGroups: [
                            {
                                colLabels: ['Cantrips Known'],
                                rows: [
                                    [3],
                                    [3],
                                    [3],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                ],
                            },
                            {
                                title: 'Spell Slots per Spell Level',
                                colLabels: [
                                    '1st',
                                    '2nd',
                                    '3rd',
                                    '4th',
                                    '5th',
                                    '6th',
                                    '7th',
                                    '8th',
                                    '9th',
                                ],
                                rows: [
                                    [2, 0, 0, 0, 0, 0, 0, 0, 0],
                                    [3, 0, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 2, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 2, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 1, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 2, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 1, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 1, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 2, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 2, 2, 1, 1],
                                ],
                            },
                        ],
                        subclass_title: 'Divine Domain',
                        subclasses: [
                            {
                                name: 'Knowledge Domain',
                                shortName: 'Knowledge',
                                source: 'PHB',
                                page: 59,
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['command', 'identify'],
                                            '3': ['augury', 'suggestion'],
                                            '5': ['nondetection', 'speak with dead'],
                                            '7': ['arcane eye', 'confusion'],
                                            '9': ['legend lore', 'scrying'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'Knowledge Domain|Cleric||Knowledge||1',
                                    'Channel Divinity: Knowledge of the Ages|Cleric||Knowledge||2',
                                    'Channel Divinity: Read Thoughts|Cleric||Knowledge||6',
                                    'Potent Spellcasting|Cleric||Knowledge||8',
                                    'Blessed Strikes|Cleric||Knowledge||8|UAClassFeatureVariants',
                                    'Blessed Strikes|Cleric||Knowledge||8|TCE',
                                    'Visions of the Past|Cleric||Knowledge||17',
                                ],
                            },
                            {
                                name: 'Life Domain',
                                shortName: 'Life',
                                source: 'PHB',
                                page: 60,
                                srd: true,
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['bless', 'cure wounds'],
                                            '3': ['lesser restoration', 'spiritual weapon'],
                                            '5': ['beacon of hope', 'revivify'],
                                            '7': ['death ward', 'guardian of faith'],
                                            '9': ['mass cure wounds', 'raise dead'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'Life Domain|Cleric||Life||1',
                                    'Channel Divinity: Preserve Life|Cleric||Life||2',
                                    'Blessed Healer|Cleric||Life||6',
                                    'Divine Strike|Cleric||Life||8',
                                    'Blessed Strikes|Cleric||Life||8|UAClassFeatureVariants',
                                    'Blessed Strikes|Cleric||Life||8|TCE',
                                    'Supreme Healing|Cleric||Life||17',
                                ],
                            },
                            {
                                name: 'Light Domain',
                                shortName: 'Light',
                                source: 'PHB',
                                page: 60,
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['burning hands', 'faerie fire'],
                                            '3': ['flaming sphere', 'scorching ray'],
                                            '5': ['daylight', 'fireball'],
                                            '7': ['guardian of faith', 'wall of fire'],
                                            '9': ['flame strike', 'scrying'],
                                        },
                                        innate: {
                                            '1': ['light'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'Light Domain|Cleric||Light||1',
                                    'Channel Divinity: Radiance of the Dawn|Cleric||Light||2',
                                    'Improved Flare|Cleric||Light||6',
                                    'Potent Spellcasting|Cleric||Light||8',
                                    'Blessed Strikes|Cleric||Light||8|UAClassFeatureVariants',
                                    'Blessed Strikes|Cleric||Light||8|TCE',
                                    'Corona of Light|Cleric||Light||17',
                                ],
                            },
                            {
                                name: 'Nature Domain',
                                shortName: 'Nature',
                                source: 'PHB',
                                page: 61,
                                additionalSpells: [
                                    {
                                        innate: {
                                            '1': {
                                                _: [
                                                    {
                                                        choose: 'level=0|class=Druid',
                                                    },
                                                ],
                                            },
                                        },
                                        prepared: {
                                            '1': ['animal friendship', 'speak with animals'],
                                            '3': ['barkskin', 'spike growth'],
                                            '5': ['plant growth', 'wind wall'],
                                            '7': ['dominate beast', 'grasping vine'],
                                            '9': ['insect plague', 'tree stride'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'Nature Domain|Cleric||Nature||1',
                                    'Channel Divinity: Charm Animals and Plants|Cleric||Nature||2',
                                    'Dampen Elements|Cleric||Nature||6',
                                    'Divine Strike|Cleric||Nature||8',
                                    'Blessed Strikes|Cleric||Nature||8|UAClassFeatureVariants',
                                    'Blessed Strikes|Cleric||Nature||8|TCE',
                                    'Master of Nature|Cleric||Nature||17',
                                ],
                            },
                            {
                                name: 'Tempest Domain',
                                shortName: 'Tempest',
                                source: 'PHB',
                                page: 62,
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['fog cloud', 'thunderwave'],
                                            '3': ['gust of wind', 'shatter'],
                                            '5': ['call lightning', 'sleet storm'],
                                            '7': ['control water', 'ice storm'],
                                            '9': ['destructive wave', 'insect plague'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'Tempest Domain|Cleric||Tempest||1',
                                    'Channel Divinity: Destructive Wrath|Cleric||Tempest||2',
                                    'Thunderbolt Strike|Cleric||Tempest||6',
                                    'Divine Strike|Cleric||Tempest||8',
                                    'Blessed Strikes|Cleric||Tempest||8|UAClassFeatureVariants',
                                    'Blessed Strikes|Cleric||Tempest||8|TCE',
                                    'Stormborn|Cleric||Tempest||17',
                                ],
                            },
                            {
                                name: 'Trickery Domain',
                                shortName: 'Trickery',
                                source: 'PHB',
                                page: 62,
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['charm person', 'disguise self'],
                                            '3': ['mirror image', 'pass without trace'],
                                            '5': ['blink', 'dispel magic'],
                                            '7': ['dimension door', 'polymorph'],
                                            '9': ['dominate person', 'modify memory'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'Trickery Domain|Cleric||Trickery||1',
                                    'Channel Divinity: Invoke Duplicity|Cleric||Trickery||2',
                                    'Channel Divinity: Cloak of Shadows|Cleric||Trickery||6',
                                    'Divine Strike|Cleric||Trickery||8',
                                    'Blessed Strikes|Cleric||Trickery||8|UAClassFeatureVariants',
                                    'Blessed Strikes|Cleric||Trickery||8|TCE',
                                    'Improved Duplicity|Cleric||Trickery||17',
                                ],
                            },
                            {
                                name: 'War Domain',
                                shortName: 'War',
                                source: 'PHB',
                                page: 63,
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['divine favor', 'shield of faith'],
                                            '3': ['magic weapon', 'spiritual weapon'],
                                            '5': ["crusader's mantle", 'spirit guardians'],
                                            '7': ['freedom of movement', 'stoneskin'],
                                            '9': ['flame strike', 'hold monster'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'War Domain|Cleric||War||1',
                                    'Channel Divinity: Guided Strike|Cleric||War||2',
                                    "Channel Divinity: War God's Blessing|Cleric||War||6",
                                    'Divine Strike|Cleric||War||8',
                                    'Blessed Strikes|Cleric||War||8|UAClassFeatureVariants',
                                    'Blessed Strikes|Cleric||War||8|TCE',
                                    'Avatar of Battle|Cleric||War||17',
                                ],
                            },
                            {
                                name: 'Death Domain',
                                shortName: 'Death',
                                source: 'DMG',
                                page: 96,
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['false life', 'ray of sickness'],
                                            '3': ['blindness/deafness', 'ray of enfeeblement'],
                                            '5': ['animate dead', 'vampiric touch'],
                                            '7': ['blight', 'death ward'],
                                            '9': ['antilife shell', 'cloudkill'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'Death Domain|Cleric||Death|DMG|1',
                                    'Channel Divinity: Touch of Death|Cleric||Death|DMG|2',
                                    'Inescapable Destruction|Cleric||Death|DMG|6',
                                    'Divine Strike|Cleric||Death|DMG|8',
                                    'Blessed Strikes|Cleric||Death|DMG|8|UAClassFeatureVariants',
                                    'Blessed Strikes|Cleric||Death|DMG|8|TCE',
                                    'Improved Reaper|Cleric||Death|DMG|17',
                                ],
                            },
                            {
                                name: 'Arcana Domain',
                                shortName: 'Arcana',
                                source: 'SCAG',
                                page: 125,
                                additionalSpells: [
                                    {
                                        innate: {
                                            '1': {
                                                _: [
                                                    {
                                                        choose: 'level=0|class=Wizard',
                                                        count: 2,
                                                    },
                                                ],
                                            },
                                        },
                                        prepared: {
                                            '1': ['detect magic', 'magic missile'],
                                            '3': ['magic weapon', "Nystul's magic aura"],
                                            '5': ['dispel magic', 'magic circle'],
                                            '7': ['arcane eye', "Leomund's secret chest"],
                                            '9': ['planar binding', 'teleportation circle'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'Arcana Domain|Cleric||Arcana|SCAG|1',
                                    'Channel Divinity: Arcane Abjuration|Cleric||Arcana|SCAG|2',
                                    'Spell Breaker|Cleric||Arcana|SCAG|6',
                                    'Potent Spellcasting|Cleric||Arcana|SCAG|8',
                                    'Blessed Strikes|Cleric||Arcana|SCAG|8|UAClassFeatureVariants',
                                    'Blessed Strikes|Cleric||Arcana|SCAG|8|TCE',
                                    'Arcane Mastery|Cleric||Arcana|SCAG|17',
                                ],
                            },
                            {
                                name: 'Forge Domain',
                                shortName: 'Forge',
                                source: 'XGE',
                                page: 18,
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['identify', 'searing smite'],
                                            '3': ['heat metal', 'magic weapon'],
                                            '5': ['elemental weapon', 'protection from energy'],
                                            '7': ['fabricate', 'wall of fire'],
                                            '9': ['animate objects', 'creation'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'Forge Domain|Cleric||Forge|XGE|1',
                                    "Channel Divinity: Artisan's Blessing|Cleric||Forge|XGE|2",
                                    'Soul of the Forge|Cleric||Forge|XGE|6',
                                    'Divine Strike|Cleric||Forge|XGE|8',
                                    'Blessed Strikes|Cleric||Forge|XGE|8|UAClassFeatureVariants',
                                    'Blessed Strikes|Cleric||Forge|XGE|8|TCE',
                                    'Saint of Forge and Fire|Cleric||Forge|XGE|17',
                                ],
                            },
                            {
                                name: 'Grave Domain',
                                shortName: 'Grave',
                                source: 'XGE',
                                page: 19,
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['bane', 'false life'],
                                            '3': ['gentle repose', 'ray of enfeeblement'],
                                            '5': ['revivify', 'vampiric touch'],
                                            '7': ['blight', 'death ward'],
                                            '9': ['antilife shell', 'raise dead'],
                                        },
                                        innate: {
                                            '1': ['spare the dying'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'Grave Domain|Cleric||Grave|XGE|1',
                                    'Channel Divinity: Path to the Grave|Cleric||Grave|XGE|2',
                                    "Sentinel at Death's Door|Cleric||Grave|XGE|6",
                                    'Potent Spellcasting|Cleric||Grave|XGE|8',
                                    'Blessed Strikes|Cleric||Grave|XGE|8|UAClassFeatureVariants',
                                    'Blessed Strikes|Cleric||Grave|XGE|8|TCE',
                                    'Keeper of Souls|Cleric||Grave|XGE|17',
                                ],
                            },
                            {
                                name: 'Order Domain',
                                shortName: 'Order',
                                source: 'TCE',
                                page: 31,
                                otherSources: [
                                    {
                                        source: 'GGR',
                                        page: 25,
                                    },
                                ],
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['command', 'heroism'],
                                            '3': ['hold person', 'zone of truth'],
                                            '5': ['mass healing word', 'slow'],
                                            '7': ['compulsion', 'locate creature'],
                                            '9': ['commune', 'dominate person'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'Order Domain|Cleric||Order|TCE|1',
                                    "Channel Divinity: Order's Demand|Cleric||Order|TCE|2",
                                    'Embodiment of the Law|Cleric||Order|TCE|6',
                                    'Divine Strike|Cleric||Order|TCE|8',
                                    'Blessed Strikes|Cleric||Order|TCE|8|UAClassFeatureVariants',
                                    'Blessed Strikes|Cleric||Order|TCE|8|TCE',
                                    "Order's Wrath|Cleric||Order|TCE|17",
                                ],
                            },
                            {
                                name: 'Peace Domain',
                                shortName: 'Peace',
                                source: 'TCE',
                                page: 32,
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['heroism', 'sanctuary'],
                                            '3': ['aid', 'warding bond'],
                                            '5': ['beacon of hope', 'sending'],
                                            '7': ['aura of purity', "Otiluke's resilient sphere"],
                                            '9': ['greater restoration', "Rary's telepathic bond"],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'Peace Domain|Cleric||Peace|TCE|1',
                                    'Channel Divinity: Balm of Peace|Cleric||Peace|TCE|2',
                                    'Protective Bond|Cleric||Peace|TCE|6',
                                    'Potent Spellcasting|Cleric||Peace|TCE|8',
                                    'Blessed Strikes|Cleric||Peace|TCE|8|TCE',
                                    'Expansive Bond|Cleric||Peace|TCE|17',
                                ],
                            },
                            {
                                name: 'Twilight Domain',
                                shortName: 'Twilight',
                                source: 'TCE',
                                page: 34,
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['faerie fire', 'sleep'],
                                            '3': ['moonbeam', 'see invisibility'],
                                            '5': ['aura of vitality', "Leomund's tiny hut"],
                                            '7': ['aura of life', 'greater invisibility'],
                                            '9': ['circle of power', 'mislead'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'Twilight Domain|Cleric||Twilight|TCE|1',
                                    'Channel Divinity: Twilight Sanctuary|Cleric||Twilight|TCE|2',
                                    'Steps of Night|Cleric||Twilight|TCE|6',
                                    'Divine Strike|Cleric||Twilight|TCE|8',
                                    'Blessed Strikes|Cleric||Twilight|TCE|8|TCE',
                                    'Twilight Shroud|Cleric||Twilight|TCE|17',
                                ],
                            },
                        ],
                    },
                },
                {
                    id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                    name: 'Druid',
                    source: 'PHB',
                    page: 64,
                    hd_number: 1,
                    hd_faces: 8,
                    proficiency: ['int', 'wis'],
                    spellcasting_ability: 'wis',
                    caster_progression: 'full',
                    prepared_spells: '<$level$> + <$wis_mod$>',
                    cantrip_progression: [
                        2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                    ],
                    starting_proficiencies: {
                        armor: [
                            'light',
                            'medium',
                            'shield',
                            ' (druids will not wear armor or use shields made of metal)',
                        ],
                        weapons: [
                            'clubs',
                            'daggers',
                            'darts',
                            'javelins',
                            'maces',
                            'quarterstaffs',
                            'scimitars',
                            'sickles',
                            'slings',
                            'spears',
                        ],
                        tools: ['Herbalism kit'],
                        skills: {
                            choose: {
                                from: [
                                    'arcana',
                                    'animal handling',
                                    'insight',
                                    'medicine',
                                    'nature',
                                    'perception',
                                    'religion',
                                    'survival',
                                ],
                                count: 2,
                            },
                        },
                    },
                    starting_equipment: {
                        additionalFromBackground: true,
                        default: [
                            '(a) a wooden shield or (b) any simple weapon',
                            '(a) a scimitar or (b) any simple melee weapon',
                            "Leather armor, an explorer's pack, and a druidic focus",
                        ],
                        goldAlternative: '2d4 × 10',
                    },
                    multiclassing: {
                        requirements: {
                            wis: 13,
                        },
                        proficienciesGained: {
                            armor: [
                                'light',
                                'medium',
                                'shields',
                                ' (druids will not wear armor or use shields made of metal)',
                            ],
                            weapons: [],
                            tools: [],
                        },
                    },
                    class_features: [
                        'Druidic||1',
                        'Spellcasting||1',
                        'Wild Shape||2',
                        'Wild Companion||2',
                        'Druid Circle||2||Subclass',
                        'Wild Shape Improvement||4',
                        'Ability Score Improvement||4',
                        'Cantrip Versatility||4',
                        'Druid Circle feature||6||Subclass',
                        'Wild Shape Improvement||8',
                        'Ability Score Improvement||8',
                        'Druid Circle feature||10||Subclass',
                        'Ability Score Improvement||12',
                        'Druid Circle feature||14||Subclass',
                        'Ability Score Improvement||16',
                        'Timeless Body||18',
                        'Beast Spells||18',
                        'Ability Score Improvement||19',
                        'Archdruid||20',
                    ],
                    meta: {
                        classTableGroups: [
                            {
                                colLabels: ['Cantrips Known'],
                                rows: [
                                    [2],
                                    [2],
                                    [2],
                                    [3],
                                    [3],
                                    [3],
                                    [3],
                                    [3],
                                    [3],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                ],
                            },
                            {
                                title: 'Spell Slots per Spell Level',
                                colLabels: [
                                    '1st',
                                    '2nd',
                                    '3rd',
                                    '4th',
                                    '5th',
                                    '6th',
                                    '7th',
                                    '8th',
                                    '9th',
                                ],
                                rows: [
                                    [2, 0, 0, 0, 0, 0, 0, 0, 0],
                                    [3, 0, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 2, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 2, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 1, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 2, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 1, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 1, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 2, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 2, 2, 1, 1],
                                ],
                            },
                        ],
                    },
                    subclass_title: 'Druid Circle',
                },
                {
                    id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                    name: 'Fighter',
                    source: 'PHB',
                    page: 70,
                    hd_number: 1,
                    hd_faces: 10,
                    proficiency: ['str', 'con'],
                    starting_proficiencies: {
                        armor: ['light', 'medium', 'heavy', 'shields'],
                        weapons: ['simple', 'martial'],
                        tools: [],
                        skills: {
                            choose: {
                                from: [
                                    'acrobatics',
                                    'animal handling',
                                    'athletics',
                                    'history',
                                    'insight',
                                    'intimidation',
                                    'perception',
                                    'survival',
                                ],
                                count: 2,
                            },
                        },
                    },
                    starting_equipment: {
                        additionalFromBackground: true,
                        default: [
                            '(a) chain mail or (b) leather armor, longbow, and arrows (20)',
                            '(a) a martial weapon and a shield or (b) two martial weapons',
                            '(a) a light crossbow and crossbow bolts (20) or (b) two handaxes',
                            "(a) a dungeoneer's pack or (b) an explorer's pack",
                        ],
                        goldAlternative: '5d4 × 10',
                    },
                    multiclassing: {
                        requirements: {
                            or: {
                                str: 13,
                                dex: 13,
                            },
                        },
                        proficienciesGained: {
                            armor: ['light', 'medium', 'shields'],
                            weapons: ['simple', 'martial'],
                        },
                    },
                    class_features: [
                        'Fighting Style||1',
                        'Second Wind||1',
                        'Action Surge||2',
                        'Martial Archetype||3||subclass',
                        'Ability Score Improvement||4',
                        'Martial Versatility||4|TCE',
                        'Extra Attack||5',
                        'Ability Score Improvement||6',
                        'Martial Archetype feature||7||subclass',
                        'Ability Score Improvement||8',
                        'Indomitable||9',
                        'Martial Archetype feature||10||subclass',
                        'Extra Attack (2)||11',
                        'Ability Score Improvement||12',
                        'Indomitable (two uses)||13',
                        'Ability Score Improvement||14',
                        'Martial Archetype feature||15||subclass',
                        'Ability Score Improvement||16',
                        'Action Surge (two uses)||17',
                        'Indomitable (three uses)||17',
                        'Martial Archetype feature||18||subclass',
                        'Ability Score Improvement||19',
                        'Extra Attack (3)||20',
                    ],
                    meta: {},
                    subclass_title: 'Martial Archetype',
                },
                {
                    id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                    name: 'Monk',
                    source: 'PHB',
                    page: 76,
                    hd_number: 1,
                    hd_faces: 8,
                    proficiency: ['str', 'dex'],
                    starting_proficiencies: {
                        weapons: ['simple', 'shortswords'],
                        tools: [
                            "any one type of artisan's tools or any one musical instrument of your choice",
                        ],
                        armor: [],
                        skills: {
                            choose: {
                                from: [
                                    'acrobatics',
                                    'athletics',
                                    'history',
                                    'insight',
                                    'religion',
                                    'stealth',
                                ],
                                count: 2,
                            },
                        },
                    },
                    starting_equipment: {
                        additionalFromBackground: true,
                        default: [
                            '(a) a shortsword or (b) any simple weapon',
                            "(a) a dungeoneer's pack or (b) an explorer's pack",
                            '10 dart',
                        ],
                        goldAlternative: '5d4 x 10',
                    },
                    multiclassing: {
                        requirements: {
                            dex: 13,
                            wis: 13,
                        },
                        proficienciesGained: {
                            weapons: ['simple', 'shortswords'],
                            armor: [],
                        },
                    },
                    class_features: [
                        'Unarmored Defense||1',
                        'Martial Arts||1',
                        'Ki||2',
                        'Dedicated Weapon||2',
                        'Unarmored Movement||2',
                        'Deflect Missiles||3',
                        'Monastic Tradition||3||Subclass',
                        'Ki-Fueled Attack||3',
                        'Ability Score Improvement||4',
                        'Slow Fall||4',
                        'Quickened Healing||4',
                        'Extra Attack||5',
                        'Stunning Strike||5',
                        'Focused Aim||5',
                        'Ki-Empowered Strikes||6',
                        'Monastic Tradition feature||6||Subclass',
                        'Evasion||7',
                        'Stillness of Mind||7',
                        'Ability Score Improvement||8',
                        'Unarmored Movement improvement||9',
                        'Purity of Body||10',
                        'Monastic Tradition feature||11||Subclass',
                        'Ability Score Improvement||12',
                        'Tongue of the Sun and Moon||13',
                        'Diamond Soul||14',
                        'Timeless Body||15',
                        'Ability Score Improvement||16',
                        'Monastic Tradition feature||17||Subclass',
                        'Empty Body||18',
                        'Ability Score Improvement||19',
                        'Perfect Self||20',
                    ],
                    meta: {
                        classTableGroups: [
                            {
                                colLabels: ['Martial Arts', 'Ki Points', 'Unarmored Movement'],
                                rows: [
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 4,
                                                },
                                            ],
                                        },
                                        0,
                                        {
                                            type: 'bonusSpeed',
                                            value: 0,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 4,
                                                },
                                            ],
                                        },
                                        2,
                                        {
                                            type: 'bonusSpeed',
                                            value: 10,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 4,
                                                },
                                            ],
                                        },
                                        3,
                                        {
                                            type: 'bonusSpeed',
                                            value: 10,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 4,
                                                },
                                            ],
                                        },
                                        4,
                                        {
                                            type: 'bonusSpeed',
                                            value: 10,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                        5,
                                        {
                                            type: 'bonusSpeed',
                                            value: 10,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                        6,
                                        {
                                            type: 'bonusSpeed',
                                            value: 15,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                        7,
                                        {
                                            type: 'bonusSpeed',
                                            value: 15,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                        8,
                                        {
                                            type: 'bonusSpeed',
                                            value: 15,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                        9,
                                        {
                                            type: 'bonusSpeed',
                                            value: 15,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                        10,
                                        {
                                            type: 'bonusSpeed',
                                            value: 20,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 8,
                                                },
                                            ],
                                        },
                                        11,
                                        {
                                            type: 'bonusSpeed',
                                            value: 20,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 8,
                                                },
                                            ],
                                        },
                                        12,
                                        {
                                            type: 'bonusSpeed',
                                            value: 20,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 8,
                                                },
                                            ],
                                        },
                                        13,
                                        {
                                            type: 'bonusSpeed',
                                            value: 20,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 8,
                                                },
                                            ],
                                        },
                                        14,
                                        {
                                            type: 'bonusSpeed',
                                            value: 25,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 8,
                                                },
                                            ],
                                        },
                                        15,
                                        {
                                            type: 'bonusSpeed',
                                            value: 25,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 8,
                                                },
                                            ],
                                        },
                                        16,
                                        {
                                            type: 'bonusSpeed',
                                            value: 25,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 10,
                                                },
                                            ],
                                        },
                                        17,
                                        {
                                            type: 'bonusSpeed',
                                            value: 25,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 10,
                                                },
                                            ],
                                        },
                                        18,
                                        {
                                            type: 'bonusSpeed',
                                            value: 30,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 10,
                                                },
                                            ],
                                        },
                                        19,
                                        {
                                            type: 'bonusSpeed',
                                            value: 30,
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 10,
                                                },
                                            ],
                                        },
                                        20,
                                        {
                                            type: 'bonusSpeed',
                                            value: 30,
                                        },
                                    ],
                                ],
                            },
                        ],
                    },
                    subclass_title: 'Monastic Tradition',
                },
                {
                    id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                    name: 'Paladin',
                    source: 'PHB',
                    page: 82,
                    hd_number: 1,
                    hd_faces: 10,
                    proficiency: ['wis', 'cha'],
                    spellcasting_ability: 'cha',
                    caster_progression: '1/2',
                    prepared_spells: '<$level$> / 2 + <$cha_mod$>',
                    starting_proficiencies: {
                        armor: ['light', 'medium', 'heavy', 'shields'],
                        weapons: ['simple', 'martial'],
                        tools: [],
                        skills: {
                            choose: {
                                from: [
                                    'athletics',
                                    'insight',
                                    'intimidation',
                                    'medicine',
                                    'persuasion',
                                    'religion',
                                ],
                                count: 2,
                            },
                        },
                    },
                    starting_equipment: {
                        additionalFromBackground: true,
                        default: [
                            '(a) a martial weapon and a shield or (b) two martial weapons',
                            '(a) five javelins or (b) any simple melee weapon',
                            "(a) a priest's pack or (b) an explorer's pack",
                            'Chain Mail and a holy symbol',
                        ],
                        goldAlternative: '5d4 × 10',
                    },
                    multiclassing: {
                        requirements: {
                            str: 13,
                            cha: 13,
                        },
                        proficienciesGained: {
                            armor: ['light', 'medium', 'shields'],
                            weapons: ['simple', 'martial'],
                        },
                    },
                    class_features: [
                        'Divine Sense||1',
                        'Lay on Hands||1',
                        'Divine Smite||2',
                        'Fighting Style||2',
                        'Spellcasting||2',
                        'Divine Health||3',
                        'Sacred Oath||3||Subclass',
                        'Ability Score Improvement||4',
                        'Martial Versatility||4',
                        'Extra Attack||5',
                        'Aura of Protection||6',
                        'Sacred Oath feature||7||Subclass',
                        'Ability Score Improvement||8',
                        'Aura of Courage||10',
                        'Improved Divine Smite||11',
                        'Ability Score Improvement||12',
                        'Cleansing Touch||14',
                        'Sacred Oath feature||15||Subclass',
                        'Ability Score Improvement||16',
                        'Aura improvements||18',
                        'Ability Score Improvement||19',
                        'Sacred Oath feature||20||Subclass',
                    ],
                    meta: {
                        classTableGroups: [
                            {
                                title: 'Spell Slots per Spell Level',
                                colLabels: ['1st', '2nd', '3rd', '4th', '5th'],
                                rows: [
                                    [0, 0, 0, 0, 0],
                                    [2, 0, 0, 0, 0],
                                    [3, 0, 0, 0, 0],
                                    [3, 0, 0, 0, 0],
                                    [4, 2, 0, 0, 0],
                                    [4, 2, 0, 0, 0],
                                    [4, 3, 0, 0, 0],
                                    [4, 3, 0, 0, 0],
                                    [4, 3, 2, 0, 0],
                                    [4, 3, 2, 0, 0],
                                    [4, 3, 3, 0, 0],
                                    [4, 3, 3, 0, 0],
                                    [4, 3, 3, 1, 0],
                                    [4, 3, 3, 1, 0],
                                    [4, 3, 3, 2, 0],
                                    [4, 3, 3, 2, 0],
                                    [4, 3, 3, 3, 1],
                                    [4, 3, 3, 3, 1],
                                    [4, 3, 3, 3, 2],
                                    [4, 3, 3, 3, 2],
                                ],
                            },
                        ],
                    },
                    subclass_title: 'Sacred Oath',
                },
                {
                    id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                    name: 'Ranger',
                    source: 'PHB',
                    page: 89,
                    hd_number: 1,
                    hd_faces: 10,
                    proficiency: ['str', 'dex'],
                    spellcasting_ability: 'wis',
                    caster_progression: '1/2',
                    spells_known_progression: [
                        0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11,
                    ],
                    starting_proficiencies: {
                        armor: ['light', 'medium', 'shields'],
                        weapons: ['simple', 'martial'],
                        skills: {
                            choose: {
                                from: [
                                    'animal handling',
                                    'athletics',
                                    'insight',
                                    'investigation',
                                    'nature',
                                    'perception',
                                    'stealth',
                                    'survival',
                                ],
                                count: 3,
                            },
                        },
                        tools: [],
                    },
                    starting_equipment: {
                        additionalFromBackground: true,
                        default: [
                            '(a) scale mail or (b) leather armor',
                            '(a) two shortswords or (b) two simple melee weapons',
                            "(a) a dungeoneer's pack or (b) an explorer's pack",
                            'A longbow and a quiver of arrows (20)',
                        ],
                        goldAlternative: '5d4 × 10'
                    },
                    multiclassing: {
                        requirements: {
                            dex: 13,
                            wis: 13,
                        },
                        proficienciesGained: {
                            armor: ['light', 'medium', 'shields'],
                            skills: [
                                {
                                    choose: {
                                        from: [
                                            'animal handling',
                                            'athletics',
                                            'insight',
                                            'investigation',
                                            'nature',
                                            'perception',
                                            'stealth',
                                            'survival',
                                        ],
                                        count: 1,
                                    },
                                },
                            ],
                            weapons: ['simple', 'martial'],
                        },
                    },
                    class_features: [
                        'Favored Enemy||1',
                        'Favored Foe||1',
                        'Natural Explorer|',
                        'Deft Explorer||1',
                        'Fighting Style||2',
                        'Spellcasting||2',
                        'Spellcasting Focus||2',
                        'Ranger Archetype||3||Subclass',
                        'Primeval Awareness||3',
                        'Primal Awareness||3',
                        'Ability Score Improvement||4',
                        'Martial Versatility||4',
                        'Extra Attack||5',
                        'Favored Enemy and Natural Explorer improvements||6',
                        'Deft Explorer Improvement||6',
                        'Ranger Archetype feature||7||Subclass',
                        'Ability Score Improvement||8',
                        "Land's Stride||8",
                        'Hide in Plain Sight||10',
                        "Nature's Veil||10",
                        'Natural Explorer improvement||10',
                        'Deft Explorer Improvement||10',
                        'Ranger Archetype feature||11||Subclass',
                        'Ability Score Improvement||12',
                        'Vanish||14',
                        'Favored Enemy improvement||14',
                        'Ranger Archetype feature||15||Subclass',
                        'Ability Score Improvement||16',
                        'Feral Senses||18',
                        'Ability Score Improvement||19',
                        'Foe Slayer||20',
                    ],
                    meta: {
                        classTableGroups: [
                            {
                                colLabels: ['Spells Known'],
                                rows: [
                                    [0],
                                    [2],
                                    [3],
                                    [3],
                                    [4],
                                    [4],
                                    [5],
                                    [5],
                                    [6],
                                    [6],
                                    [7],
                                    [7],
                                    [8],
                                    [8],
                                    [9],
                                    [9],
                                    [10],
                                    [10],
                                    [11],
                                    [11],
                                ],
                            },
                            {
                                title: 'Spell Slots per Spell Level',
                                colLabels: ['1st', '2nd', '3rd', '4th', '5th'],
                                rows: [
                                    [0, 0, 0, 0, 0],
                                    [2, 0, 0, 0, 0],
                                    [3, 0, 0, 0, 0],
                                    [3, 0, 0, 0, 0],
                                    [4, 2, 0, 0, 0],
                                    [4, 2, 0, 0, 0],
                                    [4, 3, 0, 0, 0],
                                    [4, 3, 0, 0, 0],
                                    [4, 3, 2, 0, 0],
                                    [4, 3, 2, 0, 0],
                                    [4, 3, 3, 0, 0],
                                    [4, 3, 3, 0, 0],
                                    [4, 3, 3, 1, 0],
                                    [4, 3, 3, 1, 0],
                                    [4, 3, 3, 2, 0],
                                    [4, 3, 3, 2, 0],
                                    [4, 3, 3, 3, 1],
                                    [4, 3, 3, 3, 1],
                                    [4, 3, 3, 3, 2],
                                    [4, 3, 3, 3, 2],
                                ],
                            },
                        ]
                    },
                    subclass_title: 'Ranger Archetype',
                },
                {
                    id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                    name: 'Rogue',
                    source: 'PHB',
                    page: 94,
                    hd_number: 1,
                    hd_faces: 8,
                    proficiency: ['dex', 'int'],
                    starting_proficiencies: {
                        armor: ['light'],
                        weapons: [
                            'simple',
                            'hand crossbows',
                            'longswords',
                            'rapiers',
                            'shortswords',
                        ],
                        tools: ["thieves' tools"],
                        skills: {
                            choose: {
                                from: [
                                    'acrobatics',
                                    'athletics',
                                    'deception',
                                    'insight',
                                    'intimidation',
                                    'investigation',
                                    'perception',
                                    'performance',
                                    'persuasion',
                                    'sleight of hand',
                                    'stealth',
                                ],
                                count: 4,
                            },
                        },
                    },
                    starting_equipment: {
                        additionalFromBackground: true,
                        default: [
                            '(a) a rapier or (b) a shortsword',
                            '(a) a shortbow and quiver of arrows (20) or (b) a shortsword',
                            "(a) a burglar's pack, (b) a dungeoneer's pack, or (c) an explorer's pack",
                            "Leather armor, two daggers, and thieves' tools",
                        ],
                        goldAlternative: '4d4 × 10',
                    },
                    multiclassing: {
                        requirements: {
                            dex: 13,
                        },
                        proficienciesGained: {
                            armor: ['light'],
                            skills: [
                                {
                                    choose: {
                                        from: [
                                            'acrobatics',
                                            'athletics',
                                            'deception',
                                            'insight',
                                            'intimidation',
                                            'investigation',
                                            'perception',
                                            'performance',
                                            'persuasion',
                                            'sleight of hand',
                                            'stealth',
                                        ],
                                        count: 1,
                                    },
                                },
                            ],
                            tools: ["thieves' tools"],
                            weapons: [],
                        },
                    },
                    class_features: [
                        'Expertise||1',
                        'Sneak Attack||1',
                        "Thieves' Cant||1",
                        'Cunning Action||2',
                        'Roguish Archetype||3||Subclass',
                        'Steady Aim||3',
                        'Ability Score Improvement||4',
                        'Uncanny Dodge||5',
                        'Expertise||6',
                        'Evasion||7',
                        'Ability Score Improvement||8',
                        'Roguish Archetype feature||9||Subclass',
                        'Ability Score Improvement||10',
                        'Reliable Talent||11',
                        'Ability Score Improvement||12',
                        'Roguish Archetype feature||13||Subclass',
                        'Blindsense||14',
                        'Slippery Mind||15',
                        'Ability Score Improvement||16',
                        'Roguish Archetype feature||17||Subclass',
                        'Elusive||18',
                        'Ability Score Improvement||19',
                        'Stroke of Luck||20',
                    ],
                    meta: {
                        classTableGroups: [
                            {
                                colLabels: ['Sneak Attack'],
                                rows: [
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 1,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 2,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 2,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 3,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 3,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 4,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 4,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 5,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 5,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 6,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 6,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 7,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 7,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 8,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 8,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 9,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 9,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 10,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                    [
                                        {
                                            type: 'dice',
                                            toRoll: [
                                                {
                                                    number: 10,
                                                    faces: 6,
                                                },
                                            ],
                                        },
                                    ],
                                ],
                            },
                        ],
                    },
                    subclass_title: 'Roguish Archetype',
                },
                {
                    id: 'e1068650-2673-4835-af88-adddd16d5095',
                    name: 'Sorcerer',
                    source: 'PHB',
                    page: 99,
                    hd_number: 1,
                    hd_faces: 6,
                    proficiency: ['con', 'cha'],
                    spellcasting_ability: 'cha',
                    caster_progression: 'full',
                    cantrip_progression: [
                        4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
                    ],
                    spells_known_progression: [
                        2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15,
                    ],
                    starting_proficiencies: {
                        weapons: [
                            'daggers',
                            'darts',
                            'slings',
                            'quarterstaffs',
                            'light crossbows',
                        ],
                        armor: [],
                        tools: [],
                        skills: {
                            choose: {
                                from: [
                                    'arcana',
                                    'deception',
                                    'insight',
                                    'intimidation',
                                    'persuasion',
                                    'religion',
                                ],
                                count: 2,
                            },
                        },
                    },
                    starting_equipment: {
                        additionalFromBackground: true,
                        default: [
                            '(a) a light crossbow and crossbow bolts (20) or (b) any simple weapon',
                            '(a) a component pouch or (b) an arcane focus',
                            "(a) a dungeoneer's pack or (b) an explorer's pack",
                            'Two daggers',
                        ],
                        goldAlternative: '3d4 × 10',
                    },
                    multiclassing: {
                        requirements: {
                            cha: 13,
                        },
                        proficienciesGained: {
                            weapons: [],
                            armor: [],
                        },
                    },
                    class_features: [
                        'Spellcasting||1',
                        'Sorcerous Origin||1||Subclass',
                        'Font of Magic||2',
                        'Metamagic||3',
                        'Metamagic Options||3',
                        'Ability Score Improvement||4',
                        'Sorcerous Versatility||4|TCE',
                        'Magical Guidance||5|TCE',
                        'Sorcerous Origin feature||6||Subclass',
                        'Ability Score Improvement||8',
                        'Metamagic|Sorcerer||10',
                        'Ability Score Improvement||12',
                        'Sorcerous Origin feature||14||Subclass',
                        'Ability Score Improvement||16',
                        'Metamagic||17',
                        'Sorcerous Origin feature||18||Subclass',
                        'Ability Score Improvement||19',
                        'Sorcerous Restoration||20',
                    ],
                    meta: {
                        classTableGroups: [
                            {
                                colLabels: ['Sorcery Points'],
                                rows: [
                                    [0],
                                    [2],
                                    [3],
                                    [4],
                                    [5],
                                    [6],
                                    [7],
                                    [8],
                                    [9],
                                    [10],
                                    [11],
                                    [12],
                                    [13],
                                    [14],
                                    [15],
                                    [16],
                                    [17],
                                    [18],
                                    [19],
                                    [20],
                                ],
                            },
                            {
                                colLabels: ['Cantrips Known', 'Spells Known'],
                                rows: [
                                    [4, 2],
                                    [4, 3],
                                    [4, 4],
                                    [5, 5],
                                    [5, 6],
                                    [5, 7],
                                    [5, 8],
                                    [5, 9],
                                    [5, 10],
                                    [6, 11],
                                    [6, 12],
                                    [6, 12],
                                    [6, 13],
                                    [6, 13],
                                    [6, 14],
                                    [6, 14],
                                    [6, 15],
                                    [6, 15],
                                    [6, 15],
                                    [6, 15],
                                ],
                            },
                            {
                                title: 'Spell Slots per Spell Level',
                                colLabels: [
                                    '1st',
                                    '2nd',
                                    '3rd',
                                    '4th',
                                    '5th',
                                    '6th',
                                    '7th',
                                    '8th',
                                    '9th',
                                ],
                                rows: [
                                    [2, 0, 0, 0, 0, 0, 0, 0, 0],
                                    [3, 0, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 2, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 2, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 1, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 2, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 1, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 1, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 2, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 2, 2, 1, 1],
                                ],
                            },
                        ],
                    },
                    subclass_title: 'Sorcerous Origin',
                },
                {
                    id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                    name: 'Warlock',
                    source: 'PHB',
                    page: 105,
                    hd_number: 1,
                    hd_faces: 8,
                    proficiency: ['wis', 'cha'],
                    spellcasting_ability: 'cha',
                    caster_progression: 'pact',
                    cantrip_progression: [
                        2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                    ],
                    spells_known_progression: [
                        2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15,
                    ],
                    spells_known_progression_fixed_by_level: {
                        '11': {
                            '6': 1,
                        },
                        '13': {
                            '7': 1,
                        },
                        '15': {
                            '8': 1,
                        },
                        '17': {
                            '9': 1,
                        },
                    },
                    optional_feature_progression: {
                        name: 'Eldritch Invocations',
                        featureType: 'EI',
                        progression: [
                            0, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8,
                        ],
                    },
                    starting_proficiencies: {
                        armor: ['light'],
                        weapons: ['simple'],
                        skills: {
                            choose: {
                                from: [
                                    'arcana',
                                    'deception',
                                    'history',
                                    'intimidation',
                                    'investigation',
                                    'nature',
                                    'religion',
                                ],
                                count: 2,
                            },
                        },
                        tools: [],
                    },
                    starting_equipment: {
                        additionalFromBackground: true,
                        default: [
                            '(a) a light crossbow and crossbow bolts (20) or (b) any simple weapon',
                            '(a) a component pouch or (b) an arcane focus',
                            "(a) a scholar's pack or (b) a dungeoneer's pack",
                            'Leather armor, any simple weapon, and two dagger',
                        ],
                        goldAlternative: '4d4 × 10',
                    },
                    multiclassing: {
                        requirements: {
                            cha: 13,
                        },
                        proficienciesGained: {
                            armor: ['light'],
                            weapons: ['simple'],
                            tools: [],
                        },
                    },
                    class_features: [
                        'Pact Magic||1',
                        'Otherworldly Patron|Warlock||1||Subclass',
                        'Eldritch Invocations||2',
                        'Pact Boon||3',
                        'Ability Score Improvement||4',
                        'Eldritch Versatility||4',
                        'Otherworldly Patron feature||6||Subclass',
                        'Ability Score Improvement||8',
                        'Otherworldly Patron feature||10||Subclass',
                        'Mystic Arcanum (6th level)||11',
                        'Ability Score Improvement||12',
                        'Mystic Arcanum (7th level)||13',
                        'Otherworldly Patron feature||14||Subclass',
                        'Mystic Arcanum (8th level)||15',
                        'Ability Score Improvement||16',
                        'Mystic Arcanum (9th level)||17',
                        'Ability Score Improvement||19',
                        'Eldritch Master||20',
                    ],
                    meta: {
                        classTableGroups: [
                            {
                                colLabels: [
                                    'Cantrips Known',
                                    'Spells Known',
                                    'Spell Slots',
                                    'Slot Level',
                                    'Invocations Known',
                                ],
                                rows: [
                                    [2, 2, 1, '1st', 0],
                                    [2, 3, 2, '1st', 2],
                                    [2, 4, 2, '2nd', 2],
                                    [3, 5, 2, '2nd', 2],
                                    [3, 6, 2, '3rd', 3],
                                    [3, 7, 2, '3rd', 3],
                                    [3, 8, 2, '4th', 4],
                                    [3, 9, 2, '4th', 4],
                                    [3, 10, 2, '5th', 5],
                                    [4, 10, 2, '5th', 5],
                                    [4, 11, 3, '5th', 5],
                                    [4, 11, 3, '5th', 6],
                                    [4, 12, 3, '5th', 6],
                                    [4, 12, 3, '5th', 6],
                                    [4, 13, 3, '5th', 7],
                                    [4, 13, 3, '5th', 7],
                                    [4, 14, 4, '5th', 7],
                                    [4, 14, 4, '5th', 8],
                                    [4, 15, 4, '5th', 8],
                                    [4, 15, 4, '5th', 8],
                                ],
                            },
                        ],
                        subclasses: [
                            {
                                name: 'The Archfey',
                                shortName: 'Archfey',
                                source: 'PHB',
                                page: 108,
                                additionalSpells: [
                                    {
                                        expanded: {
                                            '1': ['faerie fire', 'sleep'],
                                            '2': ['calm emotions', 'phantasmal force'],
                                            '3': ['blink', 'plant growth'],
                                            '4': ['dominate beast', 'greater invisibility'],
                                            '5': ['dominate person', 'seeming'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'The Archfey|Warlock||Archfey||1',
                                    'Misty Escape|Warlock||Archfey||6',
                                    'Beguiling Defenses|Warlock||Archfey||10',
                                    'Dark Delirium|Warlock||Archfey||14',
                                ],
                            },
                            {
                                name: 'The Fiend',
                                shortName: 'Fiend',
                                source: 'PHB',
                                page: 109,
                                srd: true,
                                additionalSpells: [
                                    {
                                        expanded: {
                                            '1': ['burning hands', 'command'],
                                            '2': ['blindness/deafness', 'scorching ray'],
                                            '3': ['fireball', 'stinking cloud'],
                                            '4': ['fire shield', 'wall of fire'],
                                            '5': ['flame strike', 'hallow'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'The Fiend|Warlock||Fiend||1',
                                    "Dark One's Own Luck|Warlock||Fiend||6",
                                    'Fiendish Resilience|Warlock||Fiend||10',
                                    'Hurl Through Hell|Warlock||Fiend||14',
                                ],
                            },
                            {
                                name: 'The Great Old One',
                                shortName: 'Great Old One',
                                source: 'PHB',
                                page: 109,
                                additionalSpells: [
                                    {
                                        expanded: {
                                            '1': ['dissonant whispers', "Tasha's hideous laughter"],
                                            '2': ['detect thoughts', 'phantasmal force'],
                                            '3': ['clairvoyance', 'sending'],
                                            '4': ['dominate beast', "Evard's black tentacles"],
                                            '5': ['dominate person', 'telekinesis'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'The Great Old One|Warlock||Great Old One||1',
                                    'Entropic Ward|Warlock||Great Old One||6',
                                    'Thought Shield|Warlock||Great Old One||10',
                                    'Create Thrall|Warlock||Great Old One||14',
                                ],
                            },
                            {
                                name: 'The Undying',
                                shortName: 'Undying',
                                source: 'SCAG',
                                page: 139,
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['spare the dying'],
                                        },
                                        expanded: {
                                            '1': ['false life', 'ray of sickness'],
                                            '2': ['blindness/deafness', 'silence'],
                                            '3': ['feign death', 'speak with dead'],
                                            '4': ['aura of life', 'death ward'],
                                            '5': ['contagion', 'legend lore'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'The Undying|Warlock||Undying|SCAG|1',
                                    'Defy Death|Warlock||Undying|SCAG|6',
                                    'Undying Nature|Warlock||Undying|SCAG|10',
                                    'Indestructible Life|Warlock||Undying|SCAG|14',
                                ],
                            },
                            {
                                name: 'The Celestial',
                                shortName: 'Celestial',
                                source: 'XGE',
                                page: 54,
                                additionalSpells: [
                                    {
                                        prepared: {
                                            '1': ['sacred flame', 'light'],
                                        },
                                        expanded: {
                                            '1': ['cure wounds', 'guiding bolt'],
                                            '2': ['flaming sphere', 'lesser restoration'],
                                            '3': ['daylight', 'revivify'],
                                            '4': ['guardian of faith', 'wall of fire'],
                                            '5': ['flame strike', 'greater restoration'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'The Celestial|Warlock||Celestial|XGE|1',
                                    'Radiant Soul|Warlock||Celestial|XGE|6',
                                    'Celestial Resilience|Warlock||Celestial|XGE|10',
                                    'Searing Vengeance|Warlock||Celestial|XGE|14',
                                ],
                            },
                            {
                                name: 'The Hexblade',
                                shortName: 'Hexblade',
                                source: 'XGE',
                                page: 55,
                                additionalSpells: [
                                    {
                                        expanded: {
                                            '1': ['shield', 'wrathful smite'],
                                            '2': ['blur', 'branding smite'],
                                            '3': ['blink', 'elemental weapon'],
                                            '4': ['phantasmal killer', 'staggering smite'],
                                            '5': ['banishing smite', 'cone of cold'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'The Hexblade|Warlock||Hexblade|XGE|1',
                                    'Accursed Specter|Warlock||Hexblade|XGE|6',
                                    'Armor of Hexes|Warlock||Hexblade|XGE|10',
                                    'Master of Hexes|Warlock||Hexblade|XGE|14',
                                ],
                            },
                            {
                                name: 'The Fathomless',
                                shortName: 'Fathomless',
                                source: 'TCE',
                                page: 72,
                                additionalSpells: [
                                    {
                                        expanded: {
                                            '1': ['create or destroy water', 'thunderwave'],
                                            '2': ['gust of wind', 'silence'],
                                            '3': ['lightning bolt', 'sleet storm'],
                                            '4': ['control water', 'summon elemental|tce'],
                                            '5': ["Bigby's hand", 'cone of cold'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'The Fathomless|Warlock||Fathomless|TCE|1',
                                    'Oceanic Soul|Warlock||Fathomless|TCE|6',
                                    'Guardian Coil|Warlock||Fathomless|TCE|6',
                                    'Grasping Tentacles|Warlock||Fathomless|TCE|10',
                                    'Fathomless Plunge|Warlock||Fathomless|TCE|14',
                                ],
                            },
                            {
                                name: 'The Genie',
                                shortName: 'Genie',
                                source: 'TCE',
                                page: 73,
                                additionalSpells: [
                                    {
                                        name: 'Dao',
                                        expanded: {
                                            '1': ['detect evil and good', 'sanctuary'],
                                            '2': ['phantasmal force', 'spike growth'],
                                            '3': ['create food and water', 'meld into stone'],
                                            '4': ['phantasmal killer', 'stone shape'],
                                            '5': ['creation', 'wall of stone'],
                                            '9': ['wish'],
                                        },
                                    },
                                    {
                                        name: 'Djinni',
                                        expanded: {
                                            '1': ['detect evil and good', 'thunderwave'],
                                            '2': ['phantasmal force', 'gust of wind'],
                                            '3': ['create food and water', 'wind wall'],
                                            '4': ['phantasmal killer', 'greater invisibility'],
                                            '5': ['creation', 'seeming'],
                                            '9': ['wish'],
                                        },
                                    },
                                    {
                                        name: 'Efreeti',
                                        expanded: {
                                            '1': ['detect evil and good', 'burning hands'],
                                            '2': ['phantasmal force', 'scorching ray'],
                                            '3': ['create food and water', 'fireball'],
                                            '4': ['phantasmal killer', 'fire shield'],
                                            '5': ['creation', 'flame strike'],
                                            '9': ['wish'],
                                        },
                                    },
                                    {
                                        name: 'Marid',
                                        expanded: {
                                            '1': ['detect evil and good', 'fog cloud'],
                                            '2': ['phantasmal force', 'blur'],
                                            '3': ['create food and water', 'sleet storm'],
                                            '4': ['phantasmal killer', 'control water'],
                                            '5': ['creation', 'cone of cold'],
                                            '9': ['wish'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'The Genie|Warlock||Genie|TCE|1',
                                    'Elemental Gift|Warlock||Genie|TCE|6',
                                    'Sanctuary Vessel|Warlock||Genie|TCE|10',
                                    'Limited Wish|Warlock||Genie|TCE|14',
                                ],
                            },
                            {
                                name: 'The Undead',
                                shortName: 'Undead',
                                source: 'VRGR',
                                page: 30,
                                additionalSpells: [
                                    {
                                        expanded: {
                                            '1': ['bane', 'false life'],
                                            '2': ['blindness/deafness', 'phantasmal force'],
                                            '3': ['phantom steed', 'speak with dead'],
                                            '4': ['death ward', 'greater invisibility'],
                                            '5': ['antilife shell', 'cloudkill'],
                                        },
                                    },
                                ],
                                subclassFeatures: [
                                    'The Undead|Warlock||Undead|VRGR|1',
                                    'Grave Touched|Warlock||Undead|VRGR|6',
                                    'Necrotic Husk|Warlock||Undead|VRGR|10',
                                    'Spirit Projection|Warlock||Undead|VRGR|14',
                                ],
                            },
                        ],
                    },
                    subclass_title: 'Otherworldly Patron',
                },
                {
                    id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'Wizard',
                    source: 'PHB',
                    page: 112,
                    hd_number: 1,
                    hd_faces: 6,
                    proficiency: ['int', 'wis'],
                    spellcasting_ability: 'int',
                    caster_progression: 'full',
                    prepared_spells: '<$level$> + <$int_mod$>',
                    cantrip_progression: [
                        3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
                    ],
                    spells_known_progression_fixed: [
                        6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                    ],
                    spells_known_progression_fixed_allow_lower_level: true,
                    starting_proficiencies: {
                        weapons: [
                            'daggers',
                            'darts',
                            'slings',
                            'quarterstaffs',
                            'light crossbows',
                        ],
                        armor: [],
                        tools: [],
                        skills: {
                            choose: {
                                from: [
                                    'arcana',
                                    'history',
                                    'insight',
                                    'investigation',
                                    'medicine',
                                    'religion',
                                ],
                                count: 2,
                            },
                        },
                    },
                    starting_equipment: {
                        additionalFromBackground: true,
                        default: [
                            '(a) a quarterstaffor (b) a dagger',
                            '(a) a component pouch or (b) an arcane focus',
                            "(a) a scholar's pack or (b) an explorer's pack",
                            'A spellbook',
                        ],
                        goldAlternative: '4d4 × 10',
                    },
                    multiclassing: {
                        requirements: {
                            int: 13,
                        },
                        proficienciesGained: {
                            armor: [],
                            weapons: [],
                        },
                    },
                    class_features: [
                        'Arcane Recovery||1',
                        'Spellcasting||1',
                        'Arcane Tradition||2||Subclass',
                        'Cantrip Formulas||3',
                        'Ability Score Improvement||4',
                        'Arcane Tradition feature||6||Subclass',
                        'Ability Score Improvement||8',
                        'Arcane Tradition feature||10||Subclass',
                        'Ability Score Improvement||12',
                        'Arcane Tradition feature||14||Subclass',
                        'Ability Score Improvement||16',
                        'Spell Mastery||18',
                        'Ability Score Improvement||19',
                        'Signature Spells||20',
                    ],
                    meta: {
                        classTableGroups: [
                            {
                                colLabels: ['Cantrips Known'],
                                rows: [
                                    [3],
                                    [3],
                                    [3],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                    [4],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                    [5],
                                ],
                            },
                            {
                                title: 'Spell Slots per Spell Level',
                                colLabels: [
                                    '1st',
                                    '2nd',
                                    '3rd',
                                    '4th',
                                    '5th',
                                    '6th',
                                    '7th',
                                    '8th',
                                    '9th',
                                ],
                                rows: [
                                    [2, 0, 0, 0, 0, 0, 0, 0, 0],
                                    [3, 0, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 2, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 0, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 2, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 0, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 1, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 2, 0, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 1, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 0, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 0, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 0, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 0],
                                    [4, 3, 3, 3, 2, 1, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 1, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 2, 1, 1, 1],
                                    [4, 3, 3, 3, 3, 2, 2, 1, 1],
                                ],
                            },
                        ],
                    },
                    subclass_title: 'Arcane Tradition',
                },
            ])
        ))
)