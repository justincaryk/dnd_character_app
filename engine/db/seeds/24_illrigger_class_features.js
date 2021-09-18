const {
    v4: uuidv4
} = require('uuid')

exports.seed = knex => (
    knex('class_features')
        .then(() => (
            knex('class_features').insert([
                {
                    name: 'Forked Tongue',
                    source: 'MDCDM',
                    page: 7,
                    class_source: 'MCDM',
                    level: 1,
                    entries: {
                        e: [
                            'You have a facility with speech and know how to manipulate an audience. Whenever you make an ability check to persuade, deceive, or intimidate, you can treat a d20 roll of 7 or lower as an 8. Additionally you learn the Infernal language.'
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Infernal Conduit',
                    source: 'MDCDM',
                    page: 7,
                    class_source: 'MCDM',
                    level: 1,
                    entries: {
                        e: [
                            'There is a pool of infernal power within you that replenishes after you take a long rest. This pool is represented by dice, starting with 1d10 at 1st level. Your pool gains dice as shown on the Illrigger table. With these dice you can transfer hit points between your illrigger and other targets, healing allies at the expense of your own health or draining the life force of enemies to rejuvenate your own vitality.',
                            'As an action, choose a number of dice from your remaining pool and touch another creature. If they are unwilling, this is a melee spell attack with which you are proficient, using Charisma as your spellcasting ability. If you miss, nothing happens—you do not roll or lose dice from your pool. If you hit, or if you’re targeting a willing creature, roll the chosen dice.',
                            'The result of your roll is the number of hit points you transfer. If you’re touching an ally, they gain that many hit points, ignoring any hit points in excess of their maximum. You lose hit points equal to the number of hit points they gained. If your sacrifice reduces you to 0 hit points, you fall unconscious.',
                            'If you\'re touching an enemy, they take necrotic damage equal to your roll, and you gain that many hit points. If you would gain hit points in excess of your maximum, you gain that number of temporary hit points instead.',
                            'Beginning at 11th level, in addition to draining the life force of an enemy, you can also inflict one level of exhaustion on them. They may recover this exhaustion normally. This ability does not work if the target already has three or more levels of exhaustion, or if you have no dice left in your pool, and you cannot choose to inflict exhaustion instead of draining life.'
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Fighting Style',
                    source: 'MCDM',
                    page: 82,
                    class_source: 'MCDM',
                    level: 2,
                    entries: {
                        e: [
                            "At 2nd level, you choose an illrigger fighting style:",
                            {
                                type: 'fightStyleOptions',
                                options: {
                                    choose: {
                                        count: 1,
                                        from: ['Treachery', 'Bravado', 'Schemes', 'Lies']
                                    }
                                },
                            },
                        ],
                    },
                    id: uuidv4(),
                    has_options: true,
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329'
                },
                {
                    name: 'Baleful Interdict',
                    source: 'MDCDM',
                    page: 7,
                    class_source: 'MCDM',
                    level: 2,
                    entries: {
                        e: [
                            'When you reach 2nd level, you learn to use the power of Hell to censure other creatures. As a bonus action, you can place a seal on a target you can see within 30 feet. You can do this a number of times equal to your Charisma modifier. When you finish a short or long rest, you regain all your seals.',
                            'When you or an ally hits a target you can see with any seals on it, you can consume the seals to make the attack deal an extra 2d6 necrotic damage to the target per seal consumed.1 If you are within 30 feet of the target, you regain 2 hit points for each die of damage your seals deals.',
                            'A creature with a seal on them is an interdicted creature.',
                            'Seals evaporate if not used after 1 minute. Only the illrigger who placed the seal knows it’s there; it appears to the illrigger as a glowing glyph on the creature\'s forehead. If a creature with any of your seals on it dies, you can move all of its seals to another creature within range.',
                            'When you reach 10th level, you feel your connection to your archdevil increase. Your seals deal an extra 1d6 damage.',
                            'Your seals improve differently based on which contract you choose. These improvements are listed under “Diabolic Contract,” below.'
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Hellsight',
                    source: 'MDCDM',
                    page: 7,
                    class_source: 'MCDM',
                    level: 3,
                    entries: {
                        e: [
                            'When you reach 3rd level, your mastery of deception makes it easy for you to recognize the use of concealing sorcery. As an action, you extend your awareness out from you. Until the end of your next turn, you know the location of creatures within 60 feet using magic to hide or disguise themselves. You can use this feature a number of times equal to your Charisma modifier. When you finish a long rest, you regain your expended uses.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Invoke Authority',
                    source: 'MDCDM',
                    page: 7,
                    class_source: 'MCDM',
                    level: 3,
                    entries: {
                        e: [
                            'You invoke the authority granted you by your archdevil, channelling baleful energy to fuel magical effects. Each Invoke Authority option provided by your archdevil explains how to use it.',
                            'When you use your Invoke Authority, you choose which option to use. Once you use this feature, you must finish a long rest to use it again.'
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Aura of Despair',
                    source: 'MDCDM',
                    page: 9,
                    class_source: 'MCDM',
                    level: 14,
                    entries: {
                        e: [
                            'Beginning at 14th level, you radiate a magical aura of evil. Whenever a hostile creature within 15 feet of you makes an attack roll or a saving throw, it must roll a d4 and subtract the number rolled from the result.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
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
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
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
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
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
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
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
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
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
                            'If your DM allows the use of feats, you may instead take a feat.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Summon Hell',
                    source: 'MDCDM',
                    page: 9,
                    class_source: 'MCDM',
                    level: 15,
                    entries: {
                        e: [
                            'Beginning at 15th level, as an action, you can summon a bone devil to serve you for 1 minute. The devil appears in an unoccupied space within 30 feet. It is bound to you and must obey your com- mands to the best of its ability. It acts on the same initiative that you act on, and may both act and move on the turn you summon it. If you die or fall unconscious, the devil returns to Hell. Once you use this feature, you must wait 1 week before you can use it again.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
            ])
        ))
)