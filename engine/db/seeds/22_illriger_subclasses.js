const {
    v4: uuidv4
} = require('uuid')

exports.seed = knex => (
    knex('subclasses')
        .then(() => (
            knex('subclasses').insert([
                {

                    id: '24c00ee1-3e91-49e9-b1a8-691c084923c0',
                    name: 'Painkiller',
                    short_name: 'Painkiller',
                    source: 'MCDM',
                    page: 10,
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                    subclass_features: [
                        'Invoke Authority: Devastator|Illrigger||Painkiller||3',
                        'Invoke Authority: Infernal Surge|Illrigger||Painkiller||3',
                        'Interdict Improvement: I Am Death|Illrigger||Painkiller||6',
                        'By the Throat|Illrigger||Painkiller||7',
                        'Telekinetic Seal|Illrigger||Painkiller||9',
                        'Interdict Improvement: Hell\'s Fury|Illrigger||Painkiller||10',
                        'You Die On My Command|Illrigger||Painkiller||13',
                        'Retaliation|Illrigger||Painkiller||17',
                        'Interdict Improvement: Deathstrike|Illrigger||Painkiller||18',
                        'Retaliation|Illrigger||Painkiller||20',
                    ],
                },
                {

                    id: '00d0991a-e026-4b62-b43a-aca18bcf5bb4',
                    name: 'Shadowmaster',
                    short_name: 'Shadowmaster',
                    source: 'MCDM',
                    page: 12,
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                    subclass_features: [
                        'Invoke Authority: Fade|Illrigger||Shadowmaster||3',
                        'Invoke Authority: Moloch\'s Blessing|Illrigger||Shadowmaster||3',
                        'Flash of Brimstone|Illrigger||Shadowmaster||3',
                        'Dagger Adept|Illrigger||Shadowmaster||3',
                        'Interdict Improvement: Marked for Death|Illrigger||Shadowmaster||6',
                        'Relentless|Illrigger||Shadowmaster||7',
                        'Only A Memory|Illrigger||Shadowmaster||9',
                        'Interdict Improvement: He Is the Darkness|Illrigger||Shadowmaster||10',
                        'Evasion|Illrigger||Shadowmaster||13',
                        'Shadowkiller|Illrigger||Shadowmaster||17',
                        'Interdict Improvement: Hell’s Assassin|Illrigger||Shadowmaster||18',
                        'Shadowform|Illrigger||Shadowmaster||20',
                    ],
                },
                {

                    id: '37b84de0-f94e-427f-b7ee-77d026963cb3',
                    name: 'Architect of Ruin',
                    short_name: 'Ruin',
                    source: 'MCDM',
                    page: 12,
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                    subclass_features: [
                        'Invoke Authority: Veteran of Sorcery|Illrigger||Ruin||3',
                        'Invoke Authority: Spellbreaker|Illrigger||Ruin||3',
                        'Flash of Brimstone|Illrigger||Ruin||3',
                        'Spellcasting|Illrigger||Ruin||3',
                        'Interdict Improvement: Hellmage|Illrigger||Ruin||6',
                        'Spellmaster|Illrigger||Ruin||7',
                        'Instant Illusion|Illrigger||Ruin||9',
                        'Interdict Improvement: Submit|Illrigger||Ruin||10',
                        'By Will Alone|Illrigger||Ruin||13',
                        'Asmoedus’s Blessing|Illrigger||Ruin||17',
                        'Interdict Improvement: Magic Resistance|Illrigger||Ruin||18',
                        'Lore Devil|Illrigger||Ruin||20',
                    ],
                    spellcasting_ability: 'int',
                    caster_progression: '3/4',
                    cantrip_progression: [
                        2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                    ],
                    prepared_spells: '<$level$> / 2 + <$cha_mod$>',
                    subclass_table_groups: [
                        {
                            subclasses: [
                                {
                                    name: 'Architect of Ruin',
                                    source: 'MCDM',
                                },
                            ],
                            colLabels: ['Cantrips Known'],
                            rows: [
                                [0],
                                [0],
                                [3],
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
                            subclasses: [
                                {
                                    name: 'Arcane Trickster',
                                    source: 'PHB',
                                },
                            ],
                            colLabels: ['1st', '2nd', '3rd', '4th', '5th', '6th'],
                            rows: [
                                [2, 0, 0, 0, 0, 0, 0],
                                [3, 0, 0, 0, 0, 0, 0],
                                [3, 2, 0, 0, 0, 0, 0],
                                [3, 2, 0, 0, 0, 0, 0],
                                [4, 2, 2, 0, 0, 0, 0],
                                [4, 3, 2, 0, 0, 0, 0],
                                [4, 3, 2, 2, 0, 0, 0],
                                [4, 3, 3, 2, 0, 0, 0],
                                [4, 3, 3, 2, 1, 0, 0],
                                [4, 3, 3, 3, 2, 0, 0],
                                [4, 3, 3, 3, 3, 1, 0],
                                [4, 3, 3, 3, 3, 1, 0],
                                [4, 3, 3, 3, 3, 1, 0],
                                [4, 3, 3, 3, 3, 1, 0],
                                [4, 3, 3, 3, 3, 1, 1],
                                [4, 3, 3, 3, 3, 1, 1],
                                [4, 3, 3, 3, 3, 1, 1],
                                [4, 3, 3, 3, 3, 1, 1],
                                [4, 3, 3, 3, 3, 2, 1],
                                [4, 3, 3, 3, 3, 2, 1],
                            ],
                        },
                    ],
                },
            ])
        )
    )
)