const {
    v4: uuidv4
} = require('uuid')

exports.seed = knex => (
    //Deletes ALL existing entries
    knex('subclasses')
        .del()
        .then(() => (
            knex('subclasses').insert([
                {

                    id: 'f5106f19-6314-4584-a362-81565b7a2ac3',
                    name: 'Path of the Berserker',
                    short_name: 'Berserker',
                    source: 'PHB',
                    page: 49,
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                    subclass_features: [
                        'Path of the Berserker|Barbarian||Berserker||3',
                        'Mindless Rage|Barbarian||Berserker||6',
                        'Intimidating Presence|Barbarian||Berserker||10',
                        'Retaliation|Barbarian||Berserker||14',
                    ],
                },
                {
                    id: '0bdbf120-88fb-4f00-b537-58b635928091',
                    name: 'Path of the Totem Warrior',
                    short_name: 'Totem Warrior',
                    source: 'PHB',
                    page: 50,
                    additional_spells: [
                        {
                            innate: {
                                '3': ['beast sense', 'speak with animals'],
                                '10': ['commune with nature'],
                            },
                        },
                    ],
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                    subclass_features: [
                        'Path of the Totem Warrior|Barbarian||Totem Warrior||3',
                        'Aspect of the Beast|Barbarian||Totem Warrior||6',
                        'Spirit Walker|Barbarian||Totem Warrior||10',
                        'Totemic Attunement|Barbarian||Totem Warrior||14',
                    ],
                },
                {
                    id: 'f9ec7489-6745-448b-ba7c-c52a693839d1',
                    name: 'Path of the Battlerager',
                    short_name: 'Battlerager',
                    source: 'SCAG',
                    page: 121,
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                    subclass_features: [
                        'Path of the Battlerager|Barbarian||Battlerager|SCAG|3',
                        'Reckless Abandon|Barbarian||Battlerager|SCAG|6',
                        'Battlerager Charge|Barbarian||Battlerager|SCAG|10',
                        'Spiked Retribution|Barbarian||Battlerager|SCAG|14',
                    ],
                },
                {
                    id: 'b3ded45c-513f-4c06-9547-6cbf4b9cca72',
                    name: 'Path of the Ancestral Guardian',
                    short_name: 'Ancestral Guardian',
                    source: 'XGE',
                    page: 9,
                    spellcasting_ability: 'wis',
                    additional_spells: [
                        {
                            innate: {
                                '10': ['augury', 'clairvoyance'],
                            },
                        },
                    ],
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                    subclass_features: [
                        'Path of the Ancestral Guardian|Barbarian||Ancestral Guardian|XGE|3',
                        'Spirit Shield|Barbarian||Ancestral Guardian|XGE|6',
                        'Consult the Spirits|Barbarian||Ancestral Guardian|XGE|10',
                        'Vengeful Ancestors|Barbarian||Ancestral Guardian|XGE|14',
                    ],
                },
                {
                    id: '237f13ed-86c8-4f42-871d-4fc932f0b30c',
                    name: 'Path of the Storm Herald',
                    short_name: 'Storm Herald',
                    source: 'XGE',
                    page: 10,
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                    subclass_features: [
                        'Path of the Storm Herald|Barbarian||Storm Herald|XGE|3',
                        'Storm Soul|Barbarian||Storm Herald|XGE|6',
                        'Shielding Storm|Barbarian||Storm Herald|XGE|10',
                        'Raging Storm|Barbarian||Storm Herald|XGE|14',
                    ],
                },
                {
                    id: '074ce21c-97e7-4e82-8ed4-6c09def06f9f',
                    name: 'Path of the Zealot',
                    short_name: 'Zealot',
                    source: 'XGE',
                    page: 11,
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                    subclass_features: [
                        'Path of the Zealot|Barbarian||Zealot|XGE|3',
                        'Fanatical Focus|Barbarian||Zealot|XGE|6',
                        'Zealous Presence|Barbarian||Zealot|XGE|10',
                        'Rage beyond Death|Barbarian||Zealot|XGE|14',
                    ],
                },
                {
                    id: 'dcb9f92d-5526-496b-a942-c2549cd9c608',
                    name: 'Path of the Beast',
                    short_name: 'Beast',
                    source: 'TCE',
                    page: 24,
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                    subclass_features: [
                        'Path of the Beast|Barbarian||Beast|TCE|3',
                        'Bestial Soul|Barbarian||Beast|TCE|6',
                        'Infectious Fury|Barbarian||Beast|TCE|10',
                        'Call the Hunt|Barbarian||Beast|TCE|14',
                    ],
                },
                {
                    id: '3f02738a-5b95-4616-bec3-7d43e5ae1cba',
                    name: 'Path of Wild Magic',
                    short_name: 'Wild Magic',
                    source: 'TCE',
                    page: 25,
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                    subclass_features: [
                        'Path of Wild Magic|Barbarian||Wild Magic|TCE|3',
                        'Bolstering Magic|Barbarian||Wild Magic|TCE|6',
                        'Unstable Backlash|Barbarian||Wild Magic|TCE|10',
                        'Controlled Surge|Barbarian||Wild Magic|TCE|14',
                    ],
                },
                {
                    id: '9e2bfb7d-6a86-4d62-a230-3705328b1d18',
                    name: 'College of Lore',
                    short_name: 'Lore',
                    source: 'PHB',
                    page: 54,
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                    subclass_features: [
                        'College of Lore|Bard||Lore||3',
                        'Additional Magical Secrets|Bard||Lore||6',
                        'Peerless Skill|Bard||Lore||14',
                    ],
                },
                {
                    id: 'af87decd-bb31-4319-9246-2b0c983e9313',
                    name: 'College of Valor',
                    short_name: 'Valor',
                    source: 'PHB',
                    page: 55,
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                    subclass_features: [
                        'College of Valor|Bard||Valor||3',
                        'Extra Attack|Bard||Valor||6',
                        'Battle Magic|Bard||Valor||14',
                    ],
                },
                {
                    id: '1c053f0e-4602-4558-a1c3-1f21a019041f',
                    name: 'College of Glamour',
                    short_name: 'Glamour',
                    source: 'XGE',
                    page: 14,
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                    additional_spells: [
                        {
                            innate: {
                                '6': ['command'],
                            },
                        },
                    ],
                    subclass_features: [
                        'College of Glamour|Bard||Glamour|XGE|3',
                        'Mantle of Majesty|Bard||Glamour|XGE|6',
                        'Unbreakable Majesty|Bard||Glamour|XGE|14',
                    ],
                },
                {
                    id: '89935e49-a48c-4969-ad9a-0b260386c834',
                    name: 'College of Swords',
                    short_name: 'Swords',
                    source: 'XGE',
                    page: 15,
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                    subclass_features: [
                        'College of Swords|Bard||Swords|XGE|3',
                        'Extra Attack|Bard||Swords|XGE|6',
                        "Master's Flourish|Bard||Swords|XGE|14",
                    ],
                },
                {
                    id: '48d54aa7-5643-46de-87f7-5018095293f4',
                    name: 'College of Whispers',
                    short_name: 'Whispers',
                    source: 'XGE',
                    page: 16,
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                    subclass_features: [
                        'College of Whispers|Bard||Whispers|XGE|3',
                        'Mantle of Whispers|Bard||Whispers|XGE|6',
                        'Shadow Lore|Bard||Whispers|XGE|14',
                    ],
                },
                {
                    id: '9f8f7140-5569-44c6-bead-58acaf564246',
                    name: 'College of Creation',
                    short_name: 'Creation',
                    source: 'TCE',
                    page: 28,
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                    subclass_features: [
                        'College of Creation|Bard||Creation|TCE|3',
                        'Animating Performance|Bard||Creation|TCE|6',
                        'Creative Crescendo|Bard||Creation|TCE|14',
                    ],
                },
                {
                    id: '67dbeac2-7abc-4ed8-8c86-be90c84343e3',
                    name: 'College of Eloquence',
                    short_name: 'Eloquence',
                    source: 'TCE',
                    page: 29,
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                    subclass_features: [
                        'College of Eloquence|Bard||Eloquence|TCE|3',
                        'Unfailing Inspiration|Bard||Eloquence|TCE|6',
                        'Universal Speech|Bard||Eloquence|TCE|6',
                        'Infectious Inspiration|Bard||Eloquence|TCE|14',
                    ],
                },
                {
                    id: '844e85b3-27d7-4acb-9866-a7abdd3d2d8c',
                    name: 'College of Spirits',
                    short_name: 'Spirits',
                    source: 'VRGR',
                    page: 28,
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                    additional_spells: [
                        {
                            innate: {
                                '3': ['guidance'],
                            },
                        },
                    ],
                    subclass_features: [
                        'College of Spirits|Bard||Spirits|VRGR|3',
                        'Spirit Session|Bard||Spirits|VRGR|6',
                        'Mystical Connection|Bard||Spirits|VRGR|14',
                    ],
                },
                {
                    "name": "Knowledge Domain",
                    "short_name": "Knowledge",
                    "source": "PHB",
                    "page": 59,
                    "additional_spells": [{
                        "prepared": {
                            "1": [
                                "command",
                                "identify"
                            ],
                            "3": [
                                "augury",
                                "suggestion"
                            ],
                            "5": [
                                "nondetection",
                                "speak with dead"
                            ],
                            "7": [
                                "arcane eye",
                                "confusion"
                            ],
                            "9": [
                                "legend lore",
                                "scrying"
                            ]
                        }
                    }],
                    "subclass_features": [
                        "Knowledge Domain|Cleric||Knowledge||1",
                        "Channel Divinity: Knowledge of the Ages|Cleric||Knowledge||2",
                        "Channel Divinity: Read Thoughts|Cleric||Knowledge||6",
                        "Potent Spellcasting|Cleric||Knowledge||8",
                        "Blessed Strikes|Cleric||Knowledge||8|UAClassFeatureVariants",
                        "Blessed Strikes|Cleric||Knowledge||8|TCE",
                        "Visions of the Past|Cleric||Knowledge||17"
                    ],
                    "id": 'e0e15786-094a-46bb-9bed-75bf9d5d3325',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    "name": "Life Domain",
                    "short_name": "Life",
                    "source": "PHB",
                    "page": 60,
                    "additional_spells": [
                        {
                            "prepared": {
                                "1": [
                                    "bless",
                                    "cure wounds"
                                ],
                                "3": [
                                    "lesser restoration",
                                    "spiritual weapon"
                                ],
                                "5": [
                                    "beacon of hope",
                                    "revivify"
                                ],
                                "7": [
                                    "death ward",
                                    "guardian of faith"
                                ],
                                "9": [
                                    "mass cure wounds",
                                    "raise dead"
                                ]
                            }
                        }
                    ],
                    "subclass_features": [
                        "Life Domain|Cleric||Life||1",
                        "Channel Divinity: Preserve Life|Cleric||Life||2",
                        "Blessed Healer|Cleric||Life||6",
                        "Divine Strike|Cleric||Life||8",
                        "Blessed Strikes|Cleric||Life||8|UAClassFeatureVariants",
                        "Blessed Strikes|Cleric||Life||8|TCE",
                        "Supreme Healing|Cleric||Life||17"
                    ],
                    "id": '25162155-aec5-45f1-b91d-3d9bcd4ca6e4',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    "name": "Light Domain",
                    "short_name": "Light",
                    "source": "PHB",
                    "page": 60,
                    "additional_spells": [
                        {
                            "prepared": {
                                "1": [
                                    "burning hands",
                                    "faerie fire"
                                ],
                                "3": [
                                    "flaming sphere",
                                    "scorching ray"
                                ],
                                "5": [
                                    "daylight",
                                    "fireball"
                                ],
                                "7": [
                                    "guardian of faith",
                                    "wall of fire"
                                ],
                                "9": [
                                    "flame strike",
                                    "scrying"
                                ]
                            },
                            "innate": {
                                "1": [
                                    "light"
                                ]
                            }
                        }
                    ],
                    "subclass_features": [
                        "Light Domain|Cleric||Light||1",
                        "Channel Divinity: Radiance of the Dawn|Cleric||Light||2",
                        "Improved Flare|Cleric||Light||6",
                        "Potent Spellcasting|Cleric||Light||8",
                        "Blessed Strikes|Cleric||Light||8|UAClassFeatureVariants",
                        "Blessed Strikes|Cleric||Light||8|TCE",
                        "Corona of Light|Cleric||Light||17"
                    ],
                    "id": '3257b2f4-10a4-4175-94e6-cdba18dccc7a',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    "name": "Nature Domain",
                    "short_name": "Nature",
                    "source": "PHB",
                    "page": 61,
                    "additional_spells": [
                        {
                            "innate": {
                                "1": {
                                    "_": [
                                        {
                                            "choose": "level=0|class=Druid"
                                        }
                                    ]
                                }
                            },
                            "prepared": {
                                "1": [
                                    "animal friendship",
                                    "speak with animals"
                                ],
                                "3": [
                                    "barkskin",
                                    "spike growth"
                                ],
                                "5": [
                                    "plant growth",
                                    "wind wall"
                                ],
                                "7": [
                                    "dominate beast",
                                    "grasping vine"
                                ],
                                "9": [
                                    "insect plague",
                                    "tree stride"
                                ]
                            }
                        }
                    ],
                    "subclass_features": [
                        "Nature Domain|Cleric||Nature||1",
                        "Channel Divinity: Charm Animals and Plants|Cleric||Nature||2",
                        "Dampen Elements|Cleric||Nature||6",
                        "Divine Strike|Cleric||Nature||8",
                        "Blessed Strikes|Cleric||Nature||8|UAClassFeatureVariants",
                        "Blessed Strikes|Cleric||Nature||8|TCE",
                        "Master of Nature|Cleric||Nature||17"
                    ],
                    "id": 'bdb26150-5b48-4b9a-abe3-16300394855c',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    "name": "Tempest Domain",
                    "short_name": "Tempest",
                    "source": "PHB",
                    "page": 62,
                    "additional_spells": [
                        {
                            "prepared": {
                                "1": [
                                    "fog cloud",
                                    "thunderwave"
                                ],
                                "3": [
                                    "gust of wind",
                                    "shatter"
                                ],
                                "5": [
                                    "call lightning",
                                    "sleet storm"
                                ],
                                "7": [
                                    "control water",
                                    "ice storm"
                                ],
                                "9": [
                                    "destructive wave",
                                    "insect plague"
                                ]
                            }
                        }
                    ],
                    "subclass_features": [
                        "Tempest Domain|Cleric||Tempest||1",
                        "Channel Divinity: Destructive Wrath|Cleric||Tempest||2",
                        "Thunderbolt Strike|Cleric||Tempest||6",
                        "Divine Strike|Cleric||Tempest||8",
                        "Blessed Strikes|Cleric||Tempest||8|UAClassFeatureVariants",
                        "Blessed Strikes|Cleric||Tempest||8|TCE",
                        "Stormborn|Cleric||Tempest||17"
                    ],
                    "id": '3bd5cc14-a268-44b6-a590-8fee4910f8ce',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    "name": "Trickery Domain",
                    "short_name": "Trickery",
                    "source": "PHB",
                    "page": 62,
                    "additional_spells": [
                        {
                            "prepared": {
                                "1": [
                                    "charm person",
                                    "disguise self"
                                ],
                                "3": [
                                    "mirror image",
                                    "pass without trace"
                                ],
                                "5": [
                                    "blink",
                                    "dispel magic"
                                ],
                                "7": [
                                    "dimension door",
                                    "polymorph"
                                ],
                                "9": [
                                    "dominate person",
                                    "modify memory"
                                ]
                            }
                        }
                    ],
                    "subclass_features": [
                        "Trickery Domain|Cleric||Trickery||1",
                        "Channel Divinity: Invoke Duplicity|Cleric||Trickery||2",
                        "Channel Divinity: Cloak of Shadows|Cleric||Trickery||6",
                        "Divine Strike|Cleric||Trickery||8",
                        "Blessed Strikes|Cleric||Trickery||8|UAClassFeatureVariants",
                        "Blessed Strikes|Cleric||Trickery||8|TCE",
                        "Improved Duplicity|Cleric||Trickery||17"
                    ],
                    "id": '55ff6902-2fe2-454e-a496-8c9189a9f7d8',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    "name": "War Domain",
                    "short_name": "War Domain",
                    "source": "PHB",
                    "page": 63,
                    "additional_spells": [
                        {
                            "prepared": {
                                "1": [
                                    "divine favor",
                                    "shield of faith"
                                ],
                                "3": [
                                    "magic weapon",
                                    "spiritual weapon"
                                ],
                                "5": [
                                    "crusader's mantle",
                                    "spirit guardians"
                                ],
                                "7": [
                                    "freedom of movement",
                                    "stoneskin"
                                ],
                                "9": [
                                    "flame strike",
                                    "hold monster"
                                ]
                            }
                        }
                    ],
                    "subclass_features": [
                        "War Domain|Cleric||War||1",
                        "Channel Divinity: Guided Strike|Cleric||War||2",
                        "Channel Divinity: War God's Blessing|Cleric||War||6",
                        "Divine Strike|Cleric||War||8",
                        "Blessed Strikes|Cleric||War||8|UAClassFeatureVariants",
                        "Blessed Strikes|Cleric||War||8|TCE",
                        "Avatar of Battle|Cleric||War||17"
                    ],
                    "id": '252d31b3-28e1-4680-b2e9-c948785bc2e9',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    "name": "Death Domain",
                    "short_name": "Death",
                    "source": "DMG",
                    "page": 96,
                    "additional_spells": [
                        {
                            "prepared": {
                                "1": [
                                    "false life",
                                    "ray of sickness"
                                ],
                                "3": [
                                    "blindness/deafness",
                                    "ray of enfeeblement"
                                ],
                                "5": [
                                    "animate dead",
                                    "vampiric touch"
                                ],
                                "7": [
                                    "blight",
                                    "death ward"
                                ],
                                "9": [
                                    "antilife shell",
                                    "cloudkill"
                                ]
                            }
                        }
                    ],
                    "subclass_features": [
                        "Death Domain|Cleric||Death|DMG|1",
                        "Channel Divinity: Touch of Death|Cleric||Death|DMG|2",
                        "Inescapable Destruction|Cleric||Death|DMG|6",
                        "Divine Strike|Cleric||Death|DMG|8",
                        "Blessed Strikes|Cleric||Death|DMG|8|UAClassFeatureVariants",
                        "Blessed Strikes|Cleric||Death|DMG|8|TCE",
                        "Improved Reaper|Cleric||Death|DMG|17"
                    ],
                    "id": 'cd48025f-06f7-4108-b456-242254671023',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    "name": "Arcana Domain",
                    "short_name": "Arcana",
                    "source": "SCAG",
                    "page": 125,
                    "additional_spells": [
                        {
                            "innate": {
                                "1": {
                                    "_": [
                                        {
                                            "choose": "level=0|class=Wizard",
                                            "count": 2
                                        }
                                    ]
                                }
                            },
                            "prepared": {
                                "1": [
                                    "detect magic",
                                    "magic missile"
                                ],
                                "3": [
                                    "magic weapon",
                                    "Nystul's magic aura"
                                ],
                                "5": [
                                    "dispel magic",
                                    "magic circle"
                                ],
                                "7": [
                                    "arcane eye",
                                    "Leomund's secret chest"
                                ],
                                "9": [
                                    "planar binding",
                                    "teleportation circle"
                                ]
                            }
                        }
                    ],
                    "subclass_features": [
                        "Arcana Domain|Cleric||Arcana|SCAG|1",
                        "Channel Divinity: Arcane Abjuration|Cleric||Arcana|SCAG|2",
                        "Spell Breaker|Cleric||Arcana|SCAG|6",
                        "Potent Spellcasting|Cleric||Arcana|SCAG|8",
                        "Blessed Strikes|Cleric||Arcana|SCAG|8|UAClassFeatureVariants",
                        "Blessed Strikes|Cleric||Arcana|SCAG|8|TCE",
                        "Arcane Mastery|Cleric||Arcana|SCAG|17"
                    ],
                    "id": 'cdf73810-91e5-42da-809e-6668af2c4f47',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    "name": "Forge Domain",
                    "short_name": "Forge",
                    "source": "XGE",
                    "page": 18,
                    "additional_spells": [
                        {
                            "prepared": {
                                "1": [
                                    "identify",
                                    "searing smite"
                                ],
                                "3": [
                                    "heat metal",
                                    "magic weapon"
                                ],
                                "5": [
                                    "elemental weapon",
                                    "protection from energy"
                                ],
                                "7": [
                                    "fabricate",
                                    "wall of fire"
                                ],
                                "9": [
                                    "animate objects",
                                    "creation"
                                ]
                            }
                        }
                    ],
                    "subclass_features": [
                        "Forge Domain|Cleric||Forge|XGE|1",
                        "Channel Divinity: Artisan's Blessing|Cleric||Forge|XGE|2",
                        "Soul of the Forge|Cleric||Forge|XGE|6",
                        "Divine Strike|Cleric||Forge|XGE|8",
                        "Blessed Strikes|Cleric||Forge|XGE|8|UAClassFeatureVariants",
                        "Blessed Strikes|Cleric||Forge|XGE|8|TCE",
                        "Saint of Forge and Fire|Cleric||Forge|XGE|17"
                    ],
                    "id": '8dadf414-ad6c-4f7b-ab6e-f050fc89c1f3',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    "name": "Grave Domain",
                    "short_name": "Grave",
                    "source": "XGE",
                    "page": 19,
                    "additional_spells": [
                        {
                            "prepared": {
                                "1": [
                                    "bane",
                                    "false life"
                                ],
                                "3": [
                                    "gentle repose",
                                    "ray of enfeeblement"
                                ],
                                "5": [
                                    "revivify",
                                    "vampiric touch"
                                ],
                                "7": [
                                    "blight",
                                    "death ward"
                                ],
                                "9": [
                                    "antilife shell",
                                    "raise dead"
                                ]
                            },
                            "innate": {
                                "1": [
                                    "spare the dying"
                                ]
                            }
                        }
                    ],
                    "subclass_features": [
                        "Grave Domain|Cleric||Grave|XGE|1",
                        "Channel Divinity: Path to the Grave|Cleric||Grave|XGE|2",
                        "Sentinel at Death's Door|Cleric||Grave|XGE|6",
                        "Potent Spellcasting|Cleric||Grave|XGE|8",
                        "Blessed Strikes|Cleric||Grave|XGE|8|UAClassFeatureVariants",
                        "Blessed Strikes|Cleric||Grave|XGE|8|TCE",
                        "Keeper of Souls|Cleric||Grave|XGE|17"
                    ],
                    "id": 'd0a5477a-a116-4a07-84b7-0c308c8727dd',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    "name": "Order Domain",
                    "short_name": "Order",
                    "source": "TCE",
                    "page": 31,
                    "additional_spells": [
                        {
                            "prepared": {
                                "1": [
                                    "command",
                                    "heroism"
                                ],
                                "3": [
                                    "hold person",
                                    "zone of truth"
                                ],
                                "5": [
                                    "mass healing word",
                                    "slow"
                                ],
                                "7": [
                                    "compulsion",
                                    "locate creature"
                                ],
                                "9": [
                                    "commune",
                                    "dominate person"
                                ]
                            }
                        }
                    ],
                    "subclass_features": [
                        "Order Domain|Cleric||Order|TCE|1",
                        "Channel Divinity: Order's Demand|Cleric||Order|TCE|2",
                        "Embodiment of the Law|Cleric||Order|TCE|6",
                        "Divine Strike|Cleric||Order|TCE|8",
                        "Blessed Strikes|Cleric||Order|TCE|8|UAClassFeatureVariants",
                        "Blessed Strikes|Cleric||Order|TCE|8|TCE",
                        "Order's Wrath|Cleric||Order|TCE|17"
                    ],
                    "id": 'e2c4944d-04d9-406a-8dcb-745f91e82200',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    "name": "Peace Domain",
                    "short_name": "Peace",
                    "source": "TCE",
                    "page": 32,
                    "additional_spells": [
                        {
                            "prepared": {
                                "1": [
                                    "heroism",
                                    "sanctuary"
                                ],
                                "3": [
                                    "aid",
                                    "warding bond"
                                ],
                                "5": [
                                    "beacon of hope",
                                    "sending"
                                ],
                                "7": [
                                    "aura of purity",
                                    "Otiluke's resilient sphere"
                                ],
                                "9": [
                                    "greater restoration",
                                    "Rary's telepathic bond"
                                ]
                            }
                        }
                    ],
                    "subclass_features": [
                        "Peace Domain|Cleric||Peace|TCE|1",
                        "Channel Divinity: Balm of Peace|Cleric||Peace|TCE|2",
                        "Protective Bond|Cleric||Peace|TCE|6",
                        "Potent Spellcasting|Cleric||Peace|TCE|8",
                        "Blessed Strikes|Cleric||Peace|TCE|8|TCE",
                        "Expansive Bond|Cleric||Peace|TCE|17"
                    ],
                    "id": '3cc36fe6-dd52-441f-a67e-199767e6bfee',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    "name": "Twilight Domain",
                    "short_name": "Twilight",
                    "source": "TCE",
                    "page": 34,
                    "additional_spells": [
                        {
                            "prepared": {
                                "1": [
                                    "faerie fire",
                                    "sleep"
                                ],
                                "3": [
                                    "moonbeam",
                                    "see invisibility"
                                ],
                                "5": [
                                    "aura of vitality",
                                    "Leomund's tiny hut"
                                ],
                                "7": [
                                    "aura of life",
                                    "greater invisibility"
                                ],
                                "9": [
                                    "circle of power",
                                    "mislead"
                                ]
                            }
                        }
                    ],
                    "subclass_features": [
                        "Twilight Domain|Cleric||Twilight|TCE|1",
                        "Channel Divinity: Twilight Sanctuary|Cleric||Twilight|TCE|2",
                        "Steps of Night|Cleric||Twilight|TCE|6",
                        "Divine Strike|Cleric||Twilight|TCE|8",
                        "Blessed Strikes|Cleric||Twilight|TCE|8|TCE",
                        "Twilight Shroud|Cleric||Twilight|TCE|17"
                    ],
                    "id": '8dfd372a-d55c-4a9d-951d-e25a39510194',
                    "class_id": "7e5e677d-59d2-484e-8e96-0dd940a2c25e"
                },
                {
                    id: 'b995558b-0f05-483c-8242-23b4d08a7f9a',
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                    name: 'Circle of the Land',
                    short_name: 'Land',
                    source: 'PHB',
                    page: 68,

                    additional_spells: [
                        {
                            name: 'Arctic',
                            prepared: {
                                '3': ['hold person', 'spike growth'],
                                '5': ['sleet storm', 'slow'],
                                '7': ['freedom of movement', 'ice storm'],
                                '9': ['commune with nature', 'cone of cold'],
                            },
                        },
                        {
                            name: 'Coast',
                            prepared: {
                                '3': ['mirror image', 'misty step'],
                                '5': ['water breathing', 'water walk'],
                                '7': ['control water', 'freedom of movement'],
                                '9': ['conjure elemental', 'scrying'],
                            },
                        },
                        {
                            name: 'Desert',
                            prepared: {
                                '3': ['blur', 'silence'],
                                '5': ['create food and water', 'protection from energy'],
                                '7': ['blight', 'hallucinatory terrain'],
                                '9': ['insect plague', 'wall of stone'],
                            },
                        },
                        {
                            name: 'Forest',
                            prepared: {
                                '3': ['barkskin', 'spider climb'],
                                '5': ['call lightning', 'plant growth'],
                                '7': ['divination', 'freedom of movement'],
                                '9': ['commune with nature', 'tree stride'],
                            },
                        },
                        {
                            name: 'Grassland',
                            prepared: {
                                '3': ['invisibility', 'pass without trace'],
                                '5': ['daylight', 'haste'],
                                '7': ['divination', 'freedom of movement'],
                                '9': ['dream', 'insect plague'],
                            },
                        },
                        {
                            name: 'Mountain',
                            prepared: {
                                '3': ['spider climb', 'spike growth'],
                                '5': ['lightning bolt', 'meld into stone'],
                                '7': ['stone shape', 'stoneskin'],
                                '9': ['passwall', 'wall of stone'],
                            },
                        },
                        {
                            name: 'Swamp',
                            prepared: {
                                '3': ['darkness', "Melf's acid arrow"],
                                '5': ['water walk', 'stinking cloud'],
                                '7': ['freedom of movement', 'locate creature'],
                                '9': ['insect plague', 'scrying'],
                            },
                        },
                        {
                            name: 'Underdark',
                            prepared: {
                                '3': ['spider climb', 'web'],
                                '5': ['gaseous form', 'stinking cloud'],
                                '7': ['greater invisibility', 'stone shape'],
                                '9': ['cloudkill', 'insect plague'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Circle of the Land|Druid||Land||2',
                        "Land's Stride|Druid||Land||6",
                        "Nature's Ward|Druid||Land||10",
                        "Nature's Sanctuary|Druid||Land||14",
                    ],
                },
                {
                    id: 'b545b4bb-e33f-424f-a3aa-ce51353221e0',
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                    name: 'Circle of the Moon',
                    short_name: 'Moon',
                    source: 'PHB',
                    page: 69,
                    additional_spells: [
                        {
                            innate: {
                                '14': ['alter self'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Circle of the Moon|Druid||Moon||2',
                        'Primal Strike|Druid||Moon||6',
                        'Elemental Wild Shape|Druid||Moon||10',
                        'Thousand Forms|Druid||Moon||14',
                    ],
                },
                {
                    id: '684a1dd4-541f-4e8e-ab1a-b51c35bd86e3',
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                    name: 'Circle of Dreams',
                    short_name: 'Dreams',
                    source: 'XGE',
                    page: 22,
                    subclass_features: [
                        'Circle of Dreams|Druid||Dreams|XGE|2',
                        'Hearth of Moonlight and Shadow|Druid||Dreams|XGE|6',
                        'Hidden Paths|Druid||Dreams|XGE|10',
                        'Walker in Dreams|Druid||Dreams|XGE|14',
                    ],
                },
                {
                    id: 'e00db9f1-b94d-4fdf-a963-6e21f63c265f',
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                    name: 'Circle of the Shepherd',
                    short_name: 'Shepherd',
                    source: 'XGE',
                    page: 23,
                    subclass_features: [
                        'Circle of the Shepherd|Druid||Shepherd|XGE|2',
                        'Mighty Summoner|Druid||Shepherd|XGE|6',
                        'Guardian Spirit|Druid||Shepherd|XGE|10',
                        'Faithful Summons|Druid||Shepherd|XGE|14',
                    ],
                },
                {
                    id: '58eef9f2-ced4-4981-a50c-f3674358f6fe',
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                    name: 'Circle of Spores',
                    short_name: 'Spores',
                    source: 'TCE',
                    page: 36,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['blindness/deafness', 'gentle repose'],
                                '5': ['animate dead', 'gaseous form'],
                                '7': ['blight', 'confusion'],
                                '9': ['cloudkill', 'contagion'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Circle of Spores|Druid||Spores|TCE|2',
                        'Fungal Infestation|Druid||Spores|TCE|6',
                        'Spreading Spores|Druid||Spores|TCE|10',
                        'Fungal Body|Druid||Spores|TCE|14',
                    ],
                },
                {
                    id: 'f198b72a-8dc9-4b5e-94df-e648a25c4ed0',
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                    name: 'Circle of Stars',
                    short_name: 'Stars',
                    source: 'TCE',
                    page: 38,
                    subclass_features: [
                        'Circle of Stars|Druid||Stars|TCE|2',
                        'Cosmic Omen|Druid||Stars|TCE|6',
                        'Twinkling Constellations|Druid||Stars|TCE|10',
                        'Full of Stars|Druid||Stars|TCE|14',
                    ],
                },
                {
                    id: 'c6f1a6aa-b00b-4ab0-bb68-c738bf2a33bb',
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                    name: 'Circle of Wildfire',
                    short_name: 'Wildfire',
                    source: 'TCE',
                    page: 39,
                    additional_spells: [
                        {
                            prepared: {
                                '2': ['burning hands', 'cure wounds'],
                                '3': ['flaming sphere', 'scorching ray'],
                                '5': ['plant growth', 'revivify'],
                                '7': ['aura of life', 'fire shield'],
                                '9': ['flame strike', 'mass cure wounds'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Circle of Wildfire|Druid||Wildfire|TCE|2',
                        'Enhanced Bond|Druid||Wildfire|TCE|6',
                        'Cauterizing Flames|Druid||Wildfire|TCE|10',
                        'Blazing Revival|Druid||Wildfire|TCE|14',
                    ],
                },
                {
                    id: '5894cd05-4e4c-4690-af71-0ddd806acc50',
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                    name: 'Battle Master',
                    short_name: 'Battle Master',
                    source: 'PHB',
                    page: 73,
                    subclass_features: [
                        'Battle Master|Fighter||Battle Master||3',
                        'Additional Maneuvers|Fighter||Battle Master||7',
                        'Additional Superiority Die|Fighter||Battle Master||7',
                        'Know Your Enemy|Fighter||Battle Master||7',
                        'Additional Maneuvers|Fighter||Battle Master||10',
                        'Improved Combat Superiority (d10)|Fighter||Battle Master||10',
                        'Additional Maneuvers|Fighter||Battle Master||15',
                        'Additional Superiority Die|Fighter||Battle Master||15',
                        'Relentless|Fighter||Battle Master||15',
                        'Improved Combat Superiority (d12)|Fighter||Battle Master||18',
                    ],
                },
                {
                    id: 'c732884f-e52c-41e7-8dd3-c6a3a90f35a7',
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                    name: 'Champion',
                    short_name: 'Champion',
                    source: 'PHB',
                    page: 72,

                    subclass_features: [
                        'Champion|Fighter||Champion||3',
                        'Remarkable Athlete|Fighter||Champion||7',
                        'Additional Fighting Style|Fighter||Champion||10',
                        'Superior Critical|Fighter||Champion||15',
                        'Survivor|Fighter||Champion||18',
                    ],
                },
                {
                    id: '5e1ac9aa-baee-4ee5-8be0-a0fd1e7b2aa7',
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                    name: 'Eldritch Knight',
                    short_name: 'Eldritch Knight',
                    source: 'PHB',
                    page: 74,
                    spellcasting_ability: 'int',
                    caster_progression: '1/3',
                    cantrip_progression: [
                        0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                    ],
                    spells_known_progression: [
                        0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13,
                    ],
                    subclass_table_groups: [
                        {
                            subclasses: [
                                {
                                    name: 'Eldritch Knight',
                                    source: 'PHB',
                                },
                            ],
                            colLabels: ['Cantrips Known', 'Spells Known'],
                            rows: [
                                [0, 0],
                                [0, 0],
                                [2, 3],
                                [2, 4],
                                [2, 4],
                                [2, 4],
                                [2, 5],
                                [2, 6],
                                [2, 6],
                                [3, 7],
                                [3, 8],
                                [3, 8],
                                [3, 9],
                                [3, 10],
                                [3, 10],
                                [3, 11],
                                [3, 11],
                                [3, 11],
                                [3, 12],
                                [3, 13],
                            ],
                        },
                        {
                            title: 'Spell Slots per Spell Level',
                            subclasses: [
                                {
                                    name: 'Eldritch Knight',
                                    source: 'PHB',
                                },
                            ],
                            colLabels: ['1st', '2nd', '3rd', '4th'],
                            rows: [
                                [0, 0, 0, 0],
                                [0, 0, 0, 0],
                                [2, 0, 0, 0],
                                [3, 0, 0, 0],
                                [3, 0, 0, 0],
                                [3, 0, 0, 0],
                                [4, 2, 0, 0],
                                [4, 2, 0, 0],
                                [4, 2, 0, 0],
                                [4, 3, 0, 0],
                                [4, 3, 0, 0],
                                [4, 3, 0, 0],
                                [4, 3, 2, 0],
                                [4, 3, 2, 0],
                                [4, 3, 2, 0],
                                [4, 3, 3, 0],
                                [4, 3, 3, 0],
                                [4, 3, 3, 0],
                                [4, 3, 3, 1],
                                [4, 3, 3, 1],
                            ],
                        },
                    ],
                    subclass_features: [
                        'Eldritch Knight|Fighter||Eldritch Knight||3',
                        'War Magic|Fighter||Eldritch Knight||7',
                        'Eldritch Strike|Fighter||Eldritch Knight||10',
                        'Arcane Charge|Fighter||Eldritch Knight||15',
                        'Improved War Magic|Fighter||Eldritch Knight||18',
                    ],
                },
                {
                    id: '4c0f028e-6de5-4e2a-9b5a-70ebaa87c616',
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                    name: 'Purple Dragon Knight (Banneret)',
                    short_name: 'Purple Dragon Knight (Banneret)',
                    source: 'SCAG',
                    page: 128,
                    subclass_features: [
                        'Purple Dragon Knight (Banneret)|Fighter||Purple Dragon Knight (Banneret)|SCAG|3',
                        'Royal Envoy|Fighter||Purple Dragon Knight (Banneret)|SCAG|7',
                        'Inspiring Surge|Fighter||Purple Dragon Knight (Banneret)|SCAG|10',
                        'Bulwark|Fighter||Purple Dragon Knight (Banneret)|SCAG|15',
                        'Inspiring Surge|Fighter||Purple Dragon Knight (Banneret)|SCAG|18',
                    ],
                },
                {
                    id: '8f541077-245b-4c40-b781-f07fc24e48a7',
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                    name: 'Arcane Archer',
                    short_name: 'Arcane Archer',
                    source: 'XGE',
                    page: 28,
                    additional_spells: [
                        {
                            innate: {
                                '3': ['prestidigitation'],
                            },
                        },
                        {
                            innate: {
                                '3': ['druidcraft'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Arcane Archer|Fighter||Arcane Archer|XGE|3',
                        'Magic Arrow|Fighter||Arcane Archer|XGE|7',
                        'Curving Shot|Fighter||Arcane Archer|XGE|7',
                        'Additional Arcane Shot Option|Fighter||Arcane Archer|XGE|7',
                        'Additional Arcane Shot Option|Fighter||Arcane Archer|XGE|10',
                        'Ever-Ready Shot|Fighter||Arcane Archer|XGE|15',
                        'Additional Arcane Shot Option|Fighter||Arcane Archer|XGE|15',
                        'Additional Arcane Shot Option|Fighter||Arcane Archer|XGE|18',
                    ],
                },
                {
                    id: 'b8c46aab-d984-43e3-b42d-bd619ab6b0cf',
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                    name: 'Cavalier',
                    short_name: 'Cavalier',
                    source: 'XGE',
                    page: 30,
                    subclass_features: [
                        'Cavalier|Fighter||Cavalier|XGE|3',
                        'Warding Maneuver|Fighter||Cavalier|XGE|7',
                        'Hold the Line|Fighter||Cavalier|XGE|10',
                        'Ferocious Charger|Fighter||Cavalier|XGE|15',
                        'Vigilant Defender|Fighter||Cavalier|XGE|18',
                    ],
                },
                {
                    id: '77f53fb4-23d4-4c80-80ca-eaedad90efbf',
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                    name: 'Samurai',
                    short_name: 'Samurai',
                    source: 'XGE',
                    page: 31,
                    subclass_features: [
                        'Samurai|Fighter||Samurai|XGE|3',
                        'Elegant Courtier|Fighter||Samurai|XGE|7',
                        'Tireless Spirit|Fighter||Samurai|XGE|10',
                        'Rapid Strike|Fighter||Samurai|XGE|15',
                        'Strength before Death|Fighter||Samurai|XGE|18',
                    ],
                },
                {
                    id: '4c72d589-f164-415b-9a4d-063a093465c0',
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                    name: 'Echo Knight',
                    short_name: 'Echo Knight',
                    source: 'EGW',
                    page: 183,
                    subclass_features: [
                        'Echo Knight|Fighter||Echo Knight|EGW|3',
                        'Echo Avatar|Fighter||Echo Knight|EGW|7',
                        'Shadow Martyr|Fighter||Echo Knight|EGW|10',
                        'Reclaim Potential|Fighter||Echo Knight|EGW|15',
                        'Legion of One|Fighter||Echo Knight|EGW|18',
                    ],
                },
                {
                    id: '7f9d27bb-79a4-479b-b2ce-c7270b198bba',
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                    name: 'Psi Warrior',
                    short_name: 'Psi Warrior',
                    source: 'TCE',
                    page: 42,
                    subclass_features: [
                        'Psi Warrior|Fighter||Psi Warrior|TCE|3',
                        'Telekinetic Adept|Fighter||Psi Warrior|TCE|7',
                        'Guarded Mind|Fighter||Psi Warrior|TCE|10',
                        'Bulwark of Force|Fighter||Psi Warrior|TCE|15',
                        'Telekinetic Master|Fighter||Psi Warrior|TCE|18',
                    ],
                },
                {
                    id: 'c784b48e-c7bd-41c8-9b6a-c3f725258ae7',
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                    name: 'Rune Knight',
                    short_name: 'Rune Knight',
                    source: 'TCE',
                    page: 44,
                    subclass_features: [
                        'Rune Knight|Fighter||Rune Knight|TCE|3',
                        'Runic Shield|Fighter||Rune Knight|TCE|7',
                        'Additional Rune Known|Fighter||Rune Knight|TCE|7',
                        'Great Stature|Fighter||Rune Knight|TCE|10',
                        'Additional Rune Known|Fighter||Rune Knight|TCE|10',
                        'Master of Runes|Fighter||Rune Knight|TCE|15',
                        'Additional Rune Known|Fighter||Rune Knight|TCE|15',
                        'Runic Juggernaut|Fighter||Rune Knight|TCE|18',
                    ],
                },
                {
                    id: '3f112332-73db-4b0b-abd5-16505cdd473f',
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                    name: 'Way of Shadow',
                    short_name: 'Way of Shadow',
                    source: 'PHB',
                    page: 80,
                    additional_spells: [
                        {
                            innate: {
                                '3': ['minor illusion'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Way of Shadow|Monk||Shadow||3',
                        'Shadow Step|Monk||Shadow||6',
                        'Cloak of Shadows|Monk||Shadow||11',
                        'Opportunist|Monk||Shadow||17',
                    ],
                },
                {
                    id: '89d1061f-8976-4e9a-b01e-6eac1d47ec98',
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                    name: 'Way of the Four Elements',
                    short_name: 'Four Elements',
                    source: 'PHB',
                    page: 80,
                    spellcasting_ability: 'wis',
                    subclass_features: [
                        'Way of the Four Elements|Monk||Four Elements||3',
                        'Extra Elemental Discipline|Monk||Four Elements||6',
                        'Extra Elemental Discipline|Monk||Four Elements||11',
                        'Extra Elemental Discipline|Monk||Four Elements||17',
                    ],
                },
                {
                    id: '66a90984-598f-42d0-8561-3c408f387fea',
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                    name: 'Way of the Open Hand',
                    short_name: 'Open Hand',
                    source: 'PHB',
                    page: 79,
                    subclass_features: [
                        'Way of the Open Hand|Monk||Open Hand||3',
                        'Wholeness of Body|Monk||Open Hand||6',
                        'Tranquility|Monk||Open Hand||11',
                        'Quivering Palm|Monk||Open Hand||17',
                    ],
                },
                {
                    id: 'dae057c1-2342-4599-859f-2b7a07e4726e',
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                    name: 'Way of the Long Death',
                    short_name: 'Long Death',
                    source: 'SCAG',
                    page: 130,
                    subclass_features: [
                        'Way of the Long Death|Monk||Long Death|SCAG|3',
                        'Hour of Reaping|Monk||Long Death|SCAG|6',
                        'Mastery of Death|Monk||Long Death|SCAG|11',
                        'Touch of the Long Death|Monk||Long Death|SCAG|17',
                    ],
                },
                {
                    id: 'ba225eff-cc40-4c37-9377-4889e697e972',
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                    name: 'Way of the Drunken Master',
                    short_name: 'Drunken Master',
                    source: 'XGE',
                    page: 33,
                    subclass_features: [
                        'Way of the Drunken Master|Monk||Drunken Master|XGE|3',
                        'Tipsy Sway|Monk||Drunken Master|XGE|6',
                        "Drunkard's Luck|Monk||Drunken Master|XGE|11",
                        'Intoxicated Frenzy|Monk||Drunken Master|XGE|17',
                    ],
                },
                {
                    id: 'f37ac38b-d258-4297-8118-1e63ad20bd46',
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                    name: 'Way of the Kensei',
                    short_name: 'Kensei',
                    source: 'XGE',
                    page: 34,
                    subclass_features: [
                        'Way of the Kensei|Monk||Kensei|XGE|3',
                        'One with the Blade|Monk||Kensei|XGE|6',
                        'Sharpen the Blade|Monk||Kensei|XGE|11',
                        'Unerring Accuracy|Monk||Kensei|XGE|17',
                    ],
                },
                {
                    id: '6610f30f-eee8-43a7-8cce-6b849a03ca87',
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                    name: 'Way of the Sun Soul',
                    short_name: 'Sun Soul',
                    source: 'XGE',
                    page: 35,
                    subclass_features: [
                        'Way of the Sun Soul|Monk||Sun Soul|XGE|3',
                        'Searing Arc Strike|Monk||Sun Soul|XGE|6',
                        'Searing Sunburst|Monk||Sun Soul|XGE|11',
                        'Sun Shield|Monk||Sun Soul|XGE|17',
                    ],
                },
                {
                    id: '424a5e25-7ebd-460b-9efb-207c1d1fd77b',
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                    name: 'Way of Mercy',
                    short_name: 'Mercy',
                    source: 'TCE',
                    page: 49,
                    subclass_features: [
                        'Way of Mercy|Monk||Mercy|TCE|3',
                        "Physician's Touch|Monk||Mercy|TCE|6",
                        'Flurry of Healing and Harm|Monk||Mercy|TCE|11',
                        'Hand of Ultimate Mercy|Monk||Mercy|TCE|17',
                    ],
                },
                {
                    id: '6f5a2d4f-91ec-4d9c-82c9-7ea81f4b74cb',
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                    name: 'Way of the Astral Self',
                    short_name: 'Astral Self',
                    source: 'TCE',
                    page: 50,
                    subclass_features: [
                        'Way of the Astral Self|Monk||Astral Self|TCE|3',
                        'Visage of the Astral Self|Monk||Astral Self|TCE|6',
                        'Body of the Astral Self|Monk||Astral Self|TCE|11',
                        'Awakened Astral Self|Monk||Astral Self|TCE|17',
                    ],
                },
                {
                    id: '4bd8e37f-ee17-4a82-923e-8975ff64b203',
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                    name: 'Oath of Devotion',
                    short_name: 'Devotion',
                    source: 'PHB',
                    page: 85,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['protection from evil and good', 'sanctuary'],
                                '5': ['lesser restoration', 'zone of truth'],
                                '9': ['beacon of hope', 'dispel magic'],
                                '13': ['freedom of movement', 'guardian of faith'],
                                '17': ['commune', 'flame strike'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Oath of Devotion|Paladin||Devotion||3',
                        'Aura of Devotion|Paladin||Devotion||7',
                        'Purity of Spirit|Paladin||Devotion||15',
                        'Holy Nimbus|Paladin||Devotion||20',
                    ],
                },
                {
                    id: 'f2c28e2e-b948-4a71-93eb-b379e1f53c9d',
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                    name: 'Oath of the Ancients',
                    short_name: 'Ancients',
                    source: 'PHB',
                    page: 86,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['ensnaring strike', 'speak with animals'],
                                '5': ['moonbeam', 'misty step'],
                                '9': ['plant growth', 'protection from energy'],
                                '13': ['ice storm', 'stoneskin'],
                                '17': ['commune with nature', 'tree stride'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Oath of the Ancients|Paladin||Ancients||3',
                        'Aura of Warding|Paladin||Ancients||7',
                        'Undying Sentinel|Paladin||Ancients||15',
                        'Elder Champion|Paladin||Ancients||20',
                    ],
                },
                {
                    id: 'e9c4ff00-3b14-4357-b736-8b4b98eedaa8',
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                    name: 'Oath of Vengeance',
                    short_name: 'Vengeance',
                    source: 'PHB',
                    page: 87,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['bane', "hunter's mark"],
                                '5': ['hold person', 'misty step'],
                                '9': ['haste', 'protection from energy'],
                                '13': ['banishment', 'dimension door'],
                                '17': ['hold monster', 'scrying'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Oath of Vengeance|Paladin||Vengeance||3',
                        'Relentless Avenger|Paladin||Vengeance||7',
                        'Soul of Vengeance|Paladin||Vengeance||15',
                        'Avenging Angel|Paladin||Vengeance||20',
                    ],
                },
                {
                    id: 'f483c8ed-589e-4cd8-af1d-da6ad6b469bd',
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                    name: 'Oathbreaker',
                    short_name: 'Oathbreaker',
                    source: 'DMG',
                    page: 97,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['hellish rebuke', 'inflict wounds'],
                                '5': ['crown of madness', 'darkness'],
                                '9': ['animate dead', 'bestow curse'],
                                '13': ['blight', 'confusion'],
                                '17': ['contagion', 'dominate person'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Oathbreaker|Paladin||Oathbreaker|DMG|3',
                        'Aura of Hate|Paladin||Oathbreaker|DMG|7',
                        'Supernatural Resistance|Paladin||Oathbreaker|DMG|15',
                        'Dread Lord|Paladin||Oathbreaker|DMG|20',
                    ],
                },
                {
                    id: '5b836264-d23b-4cb8-918f-632946a2975d',
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                    name: 'Oath of the Crown',
                    short_name: 'Crown',
                    source: 'SCAG',
                    page: 132,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['command', 'compelled duel'],
                                '5': ['warding bond', 'zone of truth'],
                                '9': ['aura of vitality', 'spirit guardians'],
                                '13': ['banishment', 'guardian of faith'],
                                '17': ['circle of power', 'geas'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Oath of the Crown|Paladin||Crown|SCAG|3',
                        'Divine Allegiance|Paladin||Crown|SCAG|7',
                        'Unyielding Spirit|Paladin||Crown|SCAG|15',
                        'Exalted Champion|Paladin||Crown|SCAG|20',
                    ],
                },
                {
                    id: '897d18a2-8756-4eec-b2d5-5c153f9870f9',
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                    name: 'Oath of Conquest',
                    short_name: 'Conquest',
                    source: 'XGE',
                    page: 37,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['armor of Agathys', 'command'],
                                '5': ['hold person', 'spiritual weapon'],
                                '9': ['bestow curse', 'fear'],
                                '13': ['dominate beast', 'stoneskin'],
                                '17': ['cloudkill', 'dominate person'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Oath of Conquest|Paladin||Conquest|XGE|3',
                        'Aura of Conquest|Paladin||Conquest|XGE|7',
                        'Scornful Rebuke|Paladin||Conquest|XGE|15',
                        'Invincible Conqueror|Paladin||Conquest|XGE|20',
                    ],
                },
                {
                    id: '56052d2b-2e5e-4313-b892-61fb82eb4065',
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                    name: 'Oath of Redemption',
                    short_name: 'Redemption',
                    source: 'XGE',
                    page: 38,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['sanctuary', 'sleep'],
                                '5': ['calm emotions', 'hold person'],
                                '9': ['counterspell', 'hypnotic pattern'],
                                '13': ["Otiluke's resilient sphere", 'stoneskin'],
                                '17': ['hold monster', 'wall of force'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Oath of Redemption|Paladin||Redemption|XGE|3',
                        'Aura of the Guardian|Paladin||Redemption|XGE|7',
                        'Protective Spirit|Paladin||Redemption|XGE|15',
                        'Emissary of Redemption|Paladin||Redemption|XGE|20',
                    ],
                },
                {
                    id: 'c9549a70-96d4-43ff-9130-e0c177353d12',
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                    name: 'Oath of Glory',
                    short_name: 'Glory',
                    source: 'TCE',
                    page: 53,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['guiding bolt', 'heroism'],
                                '5': ['enhance ability', 'magic weapon'],
                                '9': ['haste', 'protection from energy'],
                                '13': ['compulsion', 'freedom of movement'],
                                '17': ['commune', 'flame strike'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Oath of Glory|Paladin||Glory|TCE|3',
                        'Aura of Alacrity|Paladin||Glory|TCE|7',
                        'Glorious Defense|Paladin||Glory|TCE|15',
                        'Living Legend|Paladin||Glory|TCE|20',
                    ],
                },
                {
                    id: '53293e45-2f28-4bd8-a316-1e8de1e05bbb',
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                    name: 'Oath of the Watchers',
                    short_name: 'Watchers',
                    source: 'TCE',
                    page: 54,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['alarm', 'detect magic'],
                                '5': ['moonbeam', 'see invisibility'],
                                '9': ['counterspell', 'nondetection'],
                                '13': ['aura of purity', 'banishment'],
                                '17': ['hold monster', 'scrying'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Oath of the Watchers|Paladin||Watchers|TCE|3',
                        'Aura of the Sentinel|Paladin||Watchers|TCE|7',
                        'Vigilant Rebuke|Paladin||Watchers|TCE|15',
                        'Mortal Bulwark|Paladin||Watchers|TCE|20',
                    ],
                },
                {
                    id: '41d393de-3554-4cf0-8188-0ba781292555',
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                    name: 'Beast Master',
                    short_name: 'Beast Master',
                    source: 'PHB',
                    page: 93,
                    subclass_features: [
                        'Beast Master|Ranger||Beast Master||3',
                        'Exceptional Training|Ranger||Beast Master||7',
                        'Bestial Fury|Ranger||Beast Master||11',
                        'Share Spells|Ranger||Beast Master||15',
                    ],
                },
                {
                    id: 'c7c1c6e6-c9d7-4709-b5f7-45c49b2d7143',
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                    name: 'Hunter',
                    short_name: 'Hunter',
                    source: 'PHB',
                    page: 93,
                    subclass_features: [
                        'Hunter|Ranger||Hunter||3',
                        'Defensive Tactics|Ranger||Hunter||7',
                        'Multiattack|Ranger||Hunter||11',
                        "Superior Hunter's Defense|Ranger||Hunter||15",
                    ],
                },
                {
                    id: '29a9832a-0f09-4635-bd33-8334d2a2634e',
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                    name: 'Gloom Stalker',
                    short_name: 'Gloom Stalker',
                    source: 'XGE',
                    page: 41,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['disguise self'],
                                '5': ['rope trick'],
                                '9': ['fear'],
                                '13': ['greater invisibility'],
                                '17': ['seeming'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Gloom Stalker|Ranger||Gloom Stalker|XGE|3',
                        'Iron Mind|Ranger||Gloom Stalker|XGE|7',
                        "Stalker's Flurry|Ranger||Gloom Stalker|XGE|11",
                        'Shadowy Dodge|Ranger||Gloom Stalker|XGE|15',
                    ],
                },
                {
                    id: '966aa360-6eb8-4512-aadd-882c9c3fbdef',
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                    name: 'Horizon Walker',
                    short_name: 'Horizon Walker',
                    source: 'XGE',
                    page: 42,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['protection from evil and good'],
                                '5': ['misty step'],
                                '9': ['haste'],
                                '13': ['banishment'],
                                '17': ['teleportation circle'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Horizon Walker|Ranger||Horizon Walker|XGE|3',
                        'Ethereal Step|Ranger||Horizon Walker|XGE|7',
                        'Distant Strike|Ranger||Horizon Walker|XGE|11',
                        'Spectral Defense|Ranger||Horizon Walker|XGE|15',
                    ],
                },
                {
                    id: 'f1fcb321-f6b1-4619-b2c4-f84fba861c93',
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                    name: 'Monster Slayer',
                    short_name: 'Monster Slayer',
                    source: 'XGE',
                    page: 43,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['protection from evil and good'],
                                '5': ['zone of truth'],
                                '9': ['magic circle'],
                                '13': ['banishment'],
                                '17': ['hold monster'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Monster Slayer|Ranger||Monster Slayer|XGE|3',
                        'Supernatural Defense|Ranger||Monster Slayer|XGE|7',
                        "Magic-User's Nemesis|Ranger||Monster Slayer|XGE|11",
                        "Slayer's Counter|Ranger||Monster Slayer|XGE|15",
                    ],
                },
                {
                    id: '177cad39-6006-454b-83fe-8655051f17a2',
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                    name: 'Fey Wanderer',
                    short_name: 'Fey Wanderer',
                    source: 'TCE',
                    page: 58,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['charm person'],
                                '5': ['misty step'],
                                '9': ['dispel magic'],
                                '13': ['dimension door'],
                                '17': ['mislead'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Fey Wanderer|Ranger||Fey Wanderer|TCE|3',
                        'Beguiling Twist|Ranger||Fey Wanderer|TCE|7',
                        'Fey Reinforcements|Ranger||Fey Wanderer|TCE|11',
                        'Misty Wanderer|Ranger||Fey Wanderer|TCE|15',
                    ],
                },
                {
                    id: '91e2079a-e43d-444e-8f82-0920c6eafba4',
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                    name: 'Swarmkeeper',
                    short_name: 'Swarmkeeper',
                    source: 'TCE',
                    page: 59,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['mage hand', 'faerie fire'],
                                '5': ['web'],
                                '9': ['gaseous form'],
                                '13': ['arcane eye'],
                                '17': ['insect plague'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Swarmkeeper|Ranger||Swarmkeeper|TCE|3',
                        'Writhing Tide|Ranger||Swarmkeeper|TCE|7',
                        'Mighty Swarm|Ranger||Swarmkeeper|TCE|11',
                        'Swarming Dispersal|Ranger||Swarmkeeper|TCE|15',
                    ],
                },
                {
                    id: 'b2247aaa-babb-48f8-9f5f-ba907ee60054',
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                    name: 'Arcane Trickster',
                    short_name: 'Arcane Trickster',
                    source: 'PHB',
                    page: 97,
                    spellcasting_ability: 'int',
                    caster_progression: '1/3',
                    cantrip_progression: [
                        0, 0, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                    ],
                    spells_known_progression: [
                        0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13,
                    ],
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['mage hand'],
                            },
                        },
                    ],
                    subclass_table_groups: [
                        {
                            subclasses: [
                                {
                                    name: 'Arcane Trickster',
                                    source: 'PHB',
                                },
                            ],
                            colLabels: ['Cantrips Known', 'Spells Known'],
                            rows: [
                                [0, 0],
                                [0, 0],
                                [3, 3],
                                [3, 4],
                                [3, 4],
                                [3, 4],
                                [3, 5],
                                [3, 6],
                                [3, 6],
                                [4, 7],
                                [4, 8],
                                [4, 8],
                                [4, 9],
                                [4, 10],
                                [4, 10],
                                [4, 11],
                                [4, 11],
                                [4, 11],
                                [4, 12],
                                [4, 13],
                            ],
                        },
                        {
                            title: 'Spell Slots per Spell Level',
                            subclasses: [
                                {
                                    name: 'Arcane Trickster',
                                    source: 'PHB',
                                },
                            ],
                            colLabels: ['1st', '2nd', '3rd', '4th'],
                            rows: [
                                [0, 0, 0, 0],
                                [0, 0, 0, 0],
                                [2, 0, 0, 0],
                                [3, 0, 0, 0],
                                [3, 0, 0, 0],
                                [3, 0, 0, 0],
                                [4, 2, 0, 0],
                                [4, 2, 0, 0],
                                [4, 2, 0, 0],
                                [4, 3, 0, 0],
                                [4, 3, 0, 0],
                                [4, 3, 0, 0],
                                [4, 3, 2, 0],
                                [4, 3, 2, 0],
                                [4, 3, 2, 0],
                                [4, 3, 3, 0],
                                [4, 3, 3, 0],
                                [4, 3, 3, 0],
                                [4, 3, 3, 1],
                                [4, 3, 3, 1],
                            ],
                        },
                    ],
                    subclass_features: [
                        'Arcane Trickster|Rogue||Arcane Trickster||3',
                        'Magical Ambush|Rogue||Arcane Trickster||9',
                        'Versatile Trickster|Rogue||Arcane Trickster||13',
                        'Spell Thief|Rogue||Arcane Trickster||17',
                    ],
                },
                {
                    id: '2cd12960-117d-4b1d-9068-2528a0df54db',
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                    name: 'Assassin',
                    short_name: 'Assassin',
                    source: 'PHB',
                    page: 97,
                    subclass_features: [
                        'Assassin|Rogue||Assassin||3',
                        'Infiltration Expertise|Rogue||Assassin||9',
                        'Impostor|Rogue||Assassin||13',
                        'Death Strike|Rogue||Assassin||17',
                    ],
                },
                {
                    id: '95045e9a-964f-4434-84d9-2f03ca44875f',
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                    name: 'Thief',
                    short_name: 'Thief',
                    source: 'PHB',
                    page: 97,
                    subclass_features: [
                        'Thief|Rogue||Thief||3',
                        'Supreme Sneak|Rogue||Thief||9',
                        'Use Magic Device|Rogue||Thief||13',
                        "Thief's Reflexes|Rogue||Thief||17",
                    ],
                },
                {
                    id: 'd5fd7ed3-849e-4d74-8152-cc9f8c289993',
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                    name: 'Inquisitive',
                    short_name: 'Inquisitive',
                    source: 'XGE',
                    page: 45,
                    subclass_features: [
                        'Inquisitive|Rogue||Inquisitive|XGE|3',
                        'Steady Eye|Rogue||Inquisitive|XGE|9',
                        'Unerring Eye|Rogue||Inquisitive|XGE|13',
                        'Eye for Weakness|Rogue||Inquisitive|XGE|17',
                    ],
                },
                {
                    id: '64a69982-da3e-485b-874a-5611de38e610',
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                    name: 'Mastermind',
                    short_name: 'Mastermind',
                    source: 'XGE',
                    page: 46,
                    subclass_features: [
                        'Mastermind|Rogue||Mastermind|XGE|3',
                        'Insightful Manipulator|Rogue||Mastermind|XGE|9',
                        'Misdirection|Rogue||Mastermind|XGE|13',
                        'Soul of Deceit|Rogue||Mastermind|XGE|17',
                    ],
                },
                {
                    id: '3fb61bee-17ff-4356-a1e5-849e20327ff7',
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                    name: 'Scout',
                    short_name: 'Scout',
                    source: 'XGE',
                    page: 47,
                    subclass_features: [
                        'Scout|Rogue||Scout|XGE|3',
                        'Superior Mobility|Rogue||Scout|XGE|9',
                        'Ambush Master|Rogue||Scout|XGE|13',
                        'Sudden Strike|Rogue||Scout|XGE|17',
                    ],
                },
                {
                    id: '221705cd-db67-4e50-9cce-48186f040cfd',
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                    name: 'Swashbuckler',
                    short_name: 'Swashbuckler',
                    source: 'XGE',
                    page: 48,
                    subclass_features: [
                        'Swashbuckler|Rogue||Swashbuckler|XGE|3',
                        'Panache|Rogue||Swashbuckler|XGE|9',
                        'Elegant Maneuver|Rogue||Swashbuckler|XGE|13',
                        'Master Duelist|Rogue||Swashbuckler|XGE|17',
                    ],
                },
                {
                    id: '5bc2eb08-5aba-4801-a74b-5c651de487e1',
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                    name: 'Phantom',
                    short_name: 'Phantom',
                    source: 'TCE',
                    page: 62,
                    subclass_features: [
                        'Phantom|Rogue||Phantom|TCE|3',
                        'Tokens of the Departed|Rogue||Phantom|TCE|9',
                        'Ghost Walk|Rogue||Phantom|TCE|13',
                        "Death's Friend|Rogue||Phantom|TCE|17",
                    ],
                },
                {
                    id: '5a460cb3-1052-4302-9de9-9c1863307177',
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                    name: 'Soulknife',
                    short_name: 'Soulknife',
                    source: 'TCE',
                    page: 63,
                    subclass_features: [
                        'Soulknife|Rogue||Soulknife|TCE|3',
                        'Soul Blades|Rogue||Soulknife|TCE|9',
                        'Psychic Veil|Rogue||Soulknife|TCE|13',
                        'Rend Mind|Rogue||Soulknife|TCE|17',
                    ],
                },
                {
                    id: '971fddc9-e7c9-4c2c-a968-331f067e1646',
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                    name: 'Draconic Bloodline',
                    short_name: 'Draconic',
                    source: 'PHB',
                    page: 102,

                    subclass_features: [
                        'Draconic Bloodline||Draconic||1',
                        'Elemental Affinity||Draconic||6',
                        'Dragon Wings||Draconic||14',
                        'Draconic Presence||Draconic||18',
                    ],
                },
                {
                    id: '78b73df4-9cc1-407f-802a-0423712d8dd6',
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                    name: 'Wild Magic',
                    short_name: 'Wild',
                    source: 'PHB',
                    page: 103,
                    subclass_features: [
                        'Wild Magic||Wild||1',
                        'Bend Luck||Wild||6',
                        'Controlled Chaos||Wild||14',
                        'Spell Bombardment||Wild||18',
                    ],
                },
                {
                    id: 'f570e1f2-15d9-4ea7-a4a5-a54d8b54de38',
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                    name: 'Pyromancer (PSK)',
                    short_name: 'Pyromancer (PSK)',
                    source: 'PSK',
                    page: 9,
                    subclass_features: [
                        'Pyromancer (PSK)||Pyromancer (PSK)|PSK|1',
                        'Fire in the Veins||Pyromancer (PSK)|PSK|6',
                        "Pyromancer's Fury||Pyromancer (PSK)|PSK|14",
                        'Fiery Soul||Pyromancer (PSK)|PSK|18',
                    ],
                },
                {
                    id: '5e3e6220-10ca-437e-910b-6c4c54843b5c',
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                    name: 'Divine Soul',
                    short_name: 'Divine Soul',
                    source: 'XGE',
                    page: 50,
                    additional_spells: [
                        {
                            name: 'Good',
                            prepared: {
                                '1': ['cure wounds'],
                            },
                        },
                        {
                            name: 'Evil',
                            prepared: {
                                '1': ['inflict wounds'],
                            },
                        },
                        {
                            name: 'Law',
                            prepared: {
                                '1': ['bless'],
                            },
                        },
                        {
                            name: 'Chaos',
                            prepared: {
                                '1': ['bane'],
                            },
                        },
                        {
                            name: 'Neutrality',
                            prepared: {
                                '1': ['protection from evil and good'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Divine Soul|Sorcerer||Divine Soul|XGE|1',
                        'Empowered Healing|Sorcerer||Divine Soul|XGE|6',
                        'Otherworldly Wings|Sorcerer||Divine Soul|XGE|14',
                        'Unearthly Recovery|Sorcerer||Divine Soul|XGE|18',
                    ],
                },
                {
                    id: 'b67debd4-2026-4949-bba0-3f0e343fd486',
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                    name: 'Shadow Magic',
                    short_name: 'Shadow Magic',
                    source: 'XGE',
                    page: 50,
                    additional_spells: [
                        {
                            prepared: {
                                '3': ['darkness'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Shadow Magic|Sorcerer||Shadow|XGE|1',
                        'Hound of Ill Omen|Sorcerer||Shadow|XGE|6',
                        'Shadow Walk|Sorcerer||Shadow|XGE|14',
                        'Umbral Form|Sorcerer||Shadow|XGE|18',
                    ],
                },
                {
                    id: '46a6bbdd-aba9-4fd1-b2bc-9a7ed5bd940d',
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                    name: 'Storm Sorcery',
                    short_name: 'Storm',
                    source: 'XGE',
                    page: 51,
                    subclass_features: [
                        'Storm Sorcery|Sorcerer||Storm|XGE|1',
                        'Heart of the Storm|Sorcerer||Storm|XGE|6',
                        'Storm Guide|Sorcerer||Storm|XGE|6',
                        "Storm's Fury|Sorcerer||Storm|XGE|14",
                        'Wind Soul|Sorcerer||Storm|XGE|18',
                    ],
                },
                {
                    id: '411f3237-29be-4f53-b802-2ee97131983b',
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                    name: 'Aberrant Mind',
                    short_name: 'Aberrant Mind',
                    source: 'TCE',
                    page: 66,
                    additional_spells: [
                        {
                            prepared: {
                                '1': ['arms of Hadar', 'dissonant whispers', 'mind sliver|tce'],
                                '3': ['calm emotions', 'detect thoughts'],
                                '5': ['hunger of Hadar', 'sending'],
                                '7': ["Evard's black tentacles", 'summon aberration|TCE'],
                                '9': ["Rary's telepathic bond", 'telekinesis'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Aberrant Mind|Sorcerer||Aberrant Mind|TCE|1',
                        'Psionic Sorcery|Sorcerer||Aberrant Mind|TCE|6',
                        'Psychic Defenses|Sorcerer||Aberrant Mind|TCE|6',
                        'Revelation in Flesh|Sorcerer||Aberrant Mind|TCE|14',
                        'Warping Implosion|Sorcerer||Aberrant Mind|TCE|18',
                    ],
                },
                {
                    id: '7b2102b1-7a4f-4e22-b1be-54e6e5d21556',
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                    name: 'Clockwork Soul',
                    short_name: 'Clockwork Soul',
                    source: 'TCE',
                    page: 68,
                    additional_spells: [
                        {
                            prepared: {
                                '1': ['alarm', 'protection from evil and good'],
                                '3': ['aid', 'lesser restoration'],
                                '5': ['dispel magic', 'protection from energy'],
                                '7': ['freedom of movement', 'summon construct|TCE'],
                                '9': ['greater restoration', 'wall of force'],
                            },
                        },
                    ],
                    subclass_features: [
                        'Clockwork Soul|Sorcerer||Clockwork Soul|TCE|1',
                        'Bastion of Law|Sorcerer||Clockwork Soul|TCE|6',
                        'Trance of Order|Sorcerer||Clockwork Soul|TCE|14',
                        'Clockwork Cavalcade|Sorcerer||Clockwork Soul|TCE|18',
                    ],
                },
                {
                    id: '2bba6a46-9ea2-444f-bd04-8371833e1e01',
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                    name: 'The Archfey',
                    short_name: 'Archfey',
                    source: 'PHB',
                    page: 108,
                    additional_spells: [
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
                    subclass_features: [
                        'The Archfey|Warlock||Archfey||1',
                        'Misty Escape|Warlock||Archfey||6',
                        'Beguiling Defenses|Warlock||Archfey||10',
                        'Dark Delirium|Warlock||Archfey||14',
                    ],
                },
                {
                    id: '2214c5b5-d34d-4920-a180-0ee7563871e7',
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                    name: 'The Fiend',
                    short_name: 'Fiend',
                    source: 'PHB',
                    page: 109,

                    additional_spells: [
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
                    subclass_features: [
                        'The Fiend|Warlock||Fiend||1',
                        "Dark One's Own Luck|Warlock||Fiend||6",
                        'Fiendish Resilience|Warlock||Fiend||10',
                        'Hurl Through Hell|Warlock||Fiend||14',
                    ],
                },
                {
                    id: '0beea624-6747-4517-9234-cd5458fee338',
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                    name: 'The Great Old One',
                    short_name: 'Great Old One',
                    source: 'PHB',
                    page: 109,
                    additional_spells: [
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
                    subclass_features: [
                        'The Great Old One|Warlock||Great Old One||1',
                        'Entropic Ward|Warlock||Great Old One||6',
                        'Thought Shield|Warlock||Great Old One||10',
                        'Create Thrall|Warlock||Great Old One||14',
                    ],
                },
                {
                    id: '64fa2272-a52c-40eb-ba10-60ea24deaa05',
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                    name: 'The Undying',
                    short_name: 'Undying',
                    source: 'SCAG',
                    page: 139,
                    additional_spells: [
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
                    subclass_features: [
                        'The Undying|Warlock||Undying|SCAG|1',
                        'Defy Death|Warlock||Undying|SCAG|6',
                        'Undying Nature|Warlock||Undying|SCAG|10',
                        'Indestructible Life|Warlock||Undying|SCAG|14',
                    ],
                },
                {
                    id: 'c87d4c5f-37d1-456d-841d-7b0b3dd560eb',
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                    name: 'The Celestial',
                    short_name: 'Celestial',
                    source: 'XGE',
                    page: 54,
                    additional_spells: [
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
                    subclass_features: [
                        'The Celestial|Warlock||Celestial|XGE|1',
                        'Radiant Soul|Warlock||Celestial|XGE|6',
                        'Celestial Resilience|Warlock||Celestial|XGE|10',
                        'Searing Vengeance|Warlock||Celestial|XGE|14',
                    ],
                },
                {
                    id: 'ee52fef1-dcb4-47d7-977f-d098f8018874',
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                    name: 'The Hexblade',
                    short_name: 'Hexblade',
                    source: 'XGE',
                    page: 55,
                    additional_spells: [
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
                    subclass_features: [
                        'The Hexblade|Warlock||Hexblade|XGE|1',
                        'Accursed Specter|Warlock||Hexblade|XGE|6',
                        'Armor of Hexes|Warlock||Hexblade|XGE|10',
                        'Master of Hexes|Warlock||Hexblade|XGE|14',
                    ],
                },
                {
                    id: '2f53b095-a374-4b59-9268-c1955a39675d',
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                    name: 'The Fathomless',
                    short_name: 'Fathomless',
                    source: 'TCE',
                    page: 72,
                    additional_spells: [
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
                    subclass_features: [
                        'The Fathomless|Warlock||Fathomless|TCE|1',
                        'Oceanic Soul|Warlock||Fathomless|TCE|6',
                        'Guardian Coil|Warlock||Fathomless|TCE|6',
                        'Grasping Tentacles|Warlock||Fathomless|TCE|10',
                        'Fathomless Plunge|Warlock||Fathomless|TCE|14',
                    ],
                },
                {
                    id: 'c50bfde0-9bf7-43f6-8d6f-754474e15b1b',
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                    name: 'The Genie',
                    short_name: 'Genie',
                    source: 'TCE',
                    page: 73,
                    additional_spells: [
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
                    subclass_features: [
                        'The Genie|Warlock||Genie|TCE|1',
                        'Elemental Gift|Warlock||Genie|TCE|6',
                        'Sanctuary Vessel|Warlock||Genie|TCE|10',
                        'Limited Wish|Warlock||Genie|TCE|14',
                    ],
                },
                {
                    id: '20d098ef-cb7c-4887-9fe4-0a5d3aefd3c2',
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                    name: 'The Undead',
                    short_name: 'Undead',
                    source: 'VRGR',
                    page: 30,
                    additional_spells: [
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
                    subclass_features: [
                        'The Undead|Warlock||Undead|VRGR|1',
                        'Grave Touched|Warlock||Undead|VRGR|6',
                        'Necrotic Husk|Warlock||Undead|VRGR|10',
                        'Spirit Projection|Warlock||Undead|VRGR|14',
                    ],
                },
                {
                    id: 'ebadb0b2-46db-4134-b93a-03c8eb4ced20',
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'School of Abjuration',
                    short_name: 'Abjuration',
                    source: 'PHB',
                    page: 115,
                    subclass_features: [
                        'School of Abjuration|Wizard||Abjuration||2',
                        'Projected Ward|Wizard||Abjuration||6',
                        'Improved Abjuration|Wizard||Abjuration||10',
                        'Spell Resistance|Wizard||Abjuration||14',
                    ],
                },
                {
                    id: 'a53428da-5c46-431d-be00-d17fb6bebd30',
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'School of Conjuration',
                    short_name: 'Conjuration',
                    source: 'PHB',
                    page: 116,
                    subclass_features: [
                        'School of Conjuration|Wizard||Conjuration||2',
                        'Benign Transposition|Wizard||Conjuration||6',
                        'Focused Conjuration|Wizard||Conjuration||10',
                        'Durable Summons|Wizard||Conjuration||14',
                    ],
                },
                {
                    id: '04c4fb92-5553-4eca-87ce-ac26d7f51998',
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'School of Divination',
                    short_name: 'Divination',
                    source: 'PHB',
                    page: 116,
                    subclass_features: [
                        'School of Divination|Wizard||Divination||2',
                        'Expert Divination|Wizard||Divination||6',
                        'The Third Eye|Wizard||Divination||10',
                        'Greater Portent|Wizard||Divination||14',
                    ],
                },
                {
                    id: '64184115-b209-4db3-a43c-3909d1bb8d5e',
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'School of Enchantment',
                    short_name: 'Enchantment',
                    source: 'PHB',
                    page: 117,
                    subclass_features: [
                        'School of Enchantment|Wizard||Enchantment||2',
                        'Instinctive Charm|Wizard||Enchantment||6',
                        'Split Enchantment|Wizard||Enchantment||10',
                        'Alter Memories|Wizard||Enchantment||14',
                    ],
                },
                {
                    id: '030a9b0c-2ebb-4ed4-a38d-85ab55ecf706',
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'School of Evocation',
                    short_name: 'Evocation',
                    source: 'PHB',
                    page: 117,
                    subclass_features: [
                        'School of Evocation|Wizard||Evocation||2',
                        'Potent Cantrip|Wizard||Evocation||6',
                        'Empowered Evocation|Wizard||Evocation||10',
                        'Overchannel|Wizard||Evocation||14',
                    ],
                },
                {
                    id: 'a9349f5d-5868-4e85-9cac-4c44acb1cd75',
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'School of Illusion',
                    short_name: 'Illusion',
                    source: 'PHB',
                    page: 118,
                    additional_spells: [
                        {
                            prepared: {
                                '1': ['minor illusion'],
                            },
                        },
                    ],
                    subclass_features: [
                        'School of Illusion|Wizard||Illusion||2',
                        'Malleable Illusions|Wizard||Illusion||6',
                        'Illusory Step|Wizard||Illusion||10',
                        'Illusory Reality|Wizard||Illusion||14',
                    ],
                },
                {
                    id: 'e1a9ef50-6ade-43fc-a843-79cd4ab4a70f',
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'School of Necromancy',
                    short_name: 'Necromancy',
                    source: 'PHB',
                    page: 118,
                    subclass_features: [
                        'School of Necromancy|Wizard||Necromancy||2',
                        'Undead Thralls|Wizard||Necromancy||6',
                        'Inured to Undeath|Wizard||Necromancy||10',
                        'Command Undead|Wizard||Necromancy||14',
                    ],
                },
                {
                    id: 'f6eb118d-3883-449d-aa77-db575537ab8f',
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'School of Transmutation',
                    short_name: 'Transmutation',
                    source: 'PHB',
                    page: 119,
                    subclass_features: [
                        'School of Transmutation|Wizard||Transmutation||2',
                        "Transmuter's Stone|Wizard||Transmutation||6",
                        'Shapechanger|Wizard||Transmutation||10',
                        'Master Transmuter|Wizard||Transmutation||14',
                    ],
                },
                {
                    id: 'ca70bedd-0a46-47e3-8b01-81402eeb4faa',
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'War Magic',
                    short_name: 'War Magic',
                    source: 'XGE',
                    page: 59,
                    subclass_features: [
                        'War Magic|Wizard||War|XGE|2',
                        'Power Surge|Wizard||War|XGE|6',
                        'Durable Magic|Wizard||War|XGE|10',
                        'Deflecting Shroud|Wizard||War|XGE|14',
                    ],
                },
                {
                    id: 'd6e950dc-7b29-4d61-b62a-e6c31dd5bb11',
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'Chronurgy Magic',
                    short_name: 'Chronurgy',
                    source: 'EGW',
                    page: 184,
                    subclass_features: [
                        'Chronurgy Magic|Wizard||Chronurgy|EGW|2',
                        'Momentary Stasis|Wizard||Chronurgy|EGW|6',
                        'Arcane Abeyance|Wizard||Chronurgy|EGW|10',
                        'Convergent Future|Wizard||Chronurgy|EGW|14',
                    ],
                },
                {
                    id: 'd6b260d4-d970-4b2f-96f1-5dc8520a2903',
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'Graviturgy Magic',
                    short_name: 'Graviturgy',
                    source: 'EGW',
                    page: 185,
                    subclass_features: [
                        'Graviturgy Magic|Wizard||Graviturgy|EGW|2',
                        'Gravity Well|Wizard||Graviturgy|EGW|6',
                        'Violent Attraction|Wizard||Graviturgy|EGW|10',
                        'Event Horizon|Wizard||Graviturgy|EGW|14',
                    ],
                },
                {
                    id: '832afe69-cbad-483e-9463-c0dc9db09dd0',
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'Bladesinging',
                    short_name: 'Bladesinging',
                    source: 'TCE',
                    page: 76,
                    subclass_features: [
                        'Bladesinging|Wizard||Bladesinging|TCE|2',
                        'Extra Attack|Wizard||Bladesinging|TCE|6',
                        'Song of Defense|Wizard||Bladesinging|TCE|10',
                        'Song of Victory|Wizard||Bladesinging|TCE|14',
                    ],
                },
                {
                    id: '675ebfd8-2765-4d83-af7b-6ad5319ee17d',
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                    name: 'Order of Scribes',
                    short_name: 'Scribes',
                    source: 'TCE',
                    page: 77,
                    subclass_features: [
                        'Order of Scribes|Wizard||Scribes|TCE|2',
                        'Manifest Mind|Wizard||Scribes|TCE|6',
                        'Master Scrivener|Wizard||Scribes|TCE|10',
                        'One with the Word|Wizard||Scribes|TCE|14',
                    ],
                },

            ])
        )))

