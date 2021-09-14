const {
    v4: uuidv4
} = require('uuid')

exports.seed = knex => (
    knex('subclass_features')
        .then(() => (
            knex('subclass_features').insert([
                {
                    name: 'Invoke Authority: Devastator',
                    source: 'MCDM',
                    page: 11,
                    subclass_short_name: 'Painkiller',
                    subclass_source: 'MCDM',
                    level: 3,
                    entries: {
                        e: [
                            'As an action, you invoke the authority of Dispater. A number of allies equal to your Charisma modifier, whom you can see within 60 feet, and you, may use a reaction to make one weapon attack.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Invoke Authority: Infernal Surge',
                    source: 'MCDM',
                    page: 11,
                    subclass_short_name: 'Painkiller',
                    subclass_source: 'MCDM',
                    level: 3,
                    entries: {
                        e: [
                            'Upon invoking Dispater’s authority, you gain an extra action in addition to your normal action and any possible bonus action.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Interdict Improvement: I Am Death',
                    source: 'MCDM',
                    page: 11,
                    subclass_short_name: 'Painkiller',
                    subclass_source: 'MCDM',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, after placing a seal on a creature, your attacks against that creature have advantage until the end of your turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Interdict Improvement: Hell’s Fury',
                    source: 'MCDM',
                    page: 11,
                    subclass_short_name: 'Painkiller',
                    subclass_source: 'MCDM',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, the bonus action you use to place a seal on a creature now also grants you a weapon attack against them.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Interdict Improvement: Deathstrike',
                    source: 'MCDM',
                    page: 11,
                    subclass_short_name: 'Painkiller',
                    subclass_source: 'MCDM',
                    level: 18,
                    entries: {
                        e: [
                            'At 18th level, when you consume a seal after a successful attack roll against an interdicted creature, you may use your reaction to make the attack score a critical hit.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Bonus Proficiencies',
                    source: 'MCDM',
                    page: 11,
                    subclass_short_name: 'Painkiller',
                    subclass_source: 'MCDM',
                    level: 3,
                    entries: {
                        e: [
                            'When you choose Dispater as your archdevil, you gain proficiency with heavy armor.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'By the Throat',
                    source: 'MCDM',
                    page: 11,
                    subclass_short_name: 'Painkiller',
                    subclass_source: 'MCDM',
                    level: 7,
                    entries: {
                        e: [
                            'Starting at 7th level, you can, as an action, place a seal on an enemy within 30 feet. If they are Large or smaller, they must make a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier) or be grappled (escape DC 15), and the target is restrained until the grapple ends.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Telekinetic Seal',
                    source: 'MCDM',
                    page: 11,
                    subclass_short_name: 'Painkiller',
                    subclass_source: 'MCDM',
                    level: 9,
                    entries: {
                        e: [
                            'Starting at 9th level, you can, as a reaction to an enemy moving into a space adjacent to you, place a seal on them. If you do, they must make a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier). If they fail, they are thrown back 30 feet and knocked prone.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'You Die On My Command',
                    source: 'MCDM',
                    page: 13,
                    subclass_short_name: 'Painkiller',
                    subclass_source: 'MCDM',
                    level: 13,
                    entries: {
                        e: [
                            'Starting at 13th level, when an ally within 30 feet who can hear you drops to 0 hit points but is not outright killed, you can use your reaction to shout an order at them, causing them to drop to 1 hit point instead. You cannot use this feature again until you complete a short or long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Steelmind',
                    source: 'MCDM',
                    page: 11,
                    subclass_short_name: 'Painkiller',
                    subclass_source: 'MCDM',
                    level: 17,
                    entries: {
                        e: [
                            'Starting at 17th level, you gain advantage on Wisdom saving throws against spells and enemy abilities.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Paindevil',
                    source: 'MCDM',
                    page: 11,
                    subclass_short_name: 'Painkiller',
                    subclass_source: 'MCDM',
                    level: 20,
                    entries: {
                        e: [
                            'Starting at 20th level, you can use your action to become a pain devil for 1 minute. Your size becomes Large. You gain +3 to hit and damage with melee weapons. You gain 100 temporary hit points.',
                            'You emanate an aura of pain that forces every enemy starting their turn within 20 feet of you to make a DC 16 Constitution saving throw or suffer 4d12 force damage on a failed save (half that on a successful saving throw) as wounds in their flesh spontaneously open. Once a creature saves, they are immune to this ability for 24 hours.',
                            'While in this form, your type becomes fiend (devil) and Hell is your home plane. You cannot use this feature again until you complete a long rest.'
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Invoke Authority: Fade',
                    source: 'MCDM',
                    page: 13,
                    subclass_short_name: 'Shadowmaster',
                    subclass_source: 'MCDM',
                    level: 3,
                    entries: {
                        e: [
                            'As an action, you can become invisible and can, as part of this action, attempt to take the Hide action. The invisibility ends after 1 minute or if you make an attack or cast a spell.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Bonus Proficiencies',
                    source: 'MCDM',
                    page: 13,
                    subclass_short_name: 'Shadowmaster',
                    subclass_source: 'MCDM',
                    level: 3,
                    entries: {
                        e: [
                            'When you choose Moloch as your archdevil, you gain proficiency with Stealth, Acrobatics, and thieves’ tools.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Dagger Adept',
                    source: 'MCDM',
                    page: 13,
                    subclass_short_name: 'Shadowmaster',
                    subclass_source: 'MCDM',
                    level: 3,
                    entries: {
                        e: [
                            'Your training makes you skilled with certain light weapons. While two-weapon fighting with daggers and/or sickles, you can add your ability modifier to the damage of the second attack, and you can draw or stow two daggers or sickles when you would normally be able to draw or stow only one.',
                            'At 5th level, your daggers and sickles do 1d6 damage. At 11th level, your daggers and sickles do 1d8 damage. At 17th level, your daggers and sickles do 1d10 damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Relentless',
                    source: 'MCDM',
                    page: 13,
                    subclass_short_name: 'Shadowmaster',
                    subclass_source: 'MCDM',
                    level: 7,
                    entries: {
                        e: [
                            'At 7th level, your movement increases by 10 feet.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Only A Memory',
                    source: 'MCDM',
                    page: 13,
                    subclass_short_name: 'Shadowmaster',
                    subclass_source: 'MCDM',
                    level: 9,
                    entries: {
                        e: [
                            'Starting at 9th level, your mastery of shadow grants you advantage on Dexterity (Stealth) checks when taking the Hide action, and Hide becomes a bonus action for you.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Evasion',
                    source: 'MCDM',
                    page: 13,
                    subclass_short_name: 'Shadowmaster',
                    subclass_source: 'MCDM',
                    level: 13,
                    entries: {
                        e: [
                            'Starting at 13th level, when you are prompted to make a Dexterity saving throw to take only half damage from an effect, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Shadowkiller',
                    source: 'MCDM',
                    page: 13,
                    subclass_short_name: 'Shadowmaster',
                    subclass_source: 'MCDM',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you gain darkvision and can see normally in magical darkness. In addition you can see the exact location of any creatures within 60 feet using illusion spells to obfuscate their location, such as blur, mirror image, or invisibility.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Shadowform',
                    source: 'MCDM',
                    page: 13,
                    subclass_short_name: 'Shadowmaster',
                    subclass_source: 'MCDM',
                    level: 20,
                    entries: {
                        e: [
                            'Starting at 20th level, as an action, you can become a greater shadow for 1 minute. You gain damage resistance to acid, cold, fire, lightning, thunder, bludgeoning, piercing, and slashing damage. You gain Incorporeal Movement and a flying speed of 50 feet. You can move through other creatures and objects as if they were difficult terrain. You take 5 (1d10) force damage if you end your turn inside an object. Your weapon attacks deal necrotic damage, and successful attacks drain 1d4 Strength from the target. If this drain reduces the target’s Strength to 0, it dies. Otherwise, the drain lasts until the target finishes a short or long rest. If a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later. You cannot use this feature again until you complete a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Invoke Authority: Moloch\'s Blessing',
                    source: 'MCDM',
                    page: 13,
                    subclass_short_name: 'Shadowmaster',
                    subclass_source: 'MCDM',
                    level: 3,
                    entries: {
                        e: [
                            'As a bonus action, you can place all your remaining seals on a creature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Interdict Improvement: Marked for Death',
                    source: 'MCDM',
                    page: 13,
                    subclass_short_name: 'Shadowmaster',
                    subclass_source: 'MCDM',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, your connection to Moloch’s power deepens. If you hit an inter- dicted creature with a melee attack, you can mark them for death. The target has disadvantage on attack rolls that do not include you until the end of its next turn. While that creature is interdicted, it must make a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) whenever it tries to leave your reach.',
                            'On a failure, its speed instead becomes 0 until the start of its next turn. These effects last until it is no longer interdicted, you leave its reach, or it leaves your reach.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Interdict Improvement: He Is the Darkness',
                    source: 'MCDM',
                    page: 13,
                    subclass_short_name: 'Shadowmaster',
                    subclass_source: 'MCDM',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, while within 10 feet of an interdicted enemy, shadows envelop you and you gain the benefits of half cover.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Interdict Improvement: Hell’s Assassin',
                    source: 'MCDM',
                    page: 13,
                    subclass_short_name: 'Shadowmaster',
                    subclass_source: 'MCDM',
                    level: 18,
                    entries: {
                        e: [
                            'At 18th level, your seals do 3d10 damage each, rather than 3d6.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },


                {
                    name: 'Spellcasting',
                    source: 'MCDM',
                    page: 16,
                    subclass_short_name: 'Ruin',
                    subclass_source: 'MCDM',
                    level: 3,
                    entries: {
                        e: [
                            'When Asmodeus accepts you as an Architect of Ruin, you gain access to his infernal power and learn to access divine magic to cast illrigger spells.',
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Cantrips',
                                        entries: [
                                            'You learn two cantrips of your choice from the illrigger spell list. At 8th level, you learn an additional cantrip.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Spell Slots',
                                        entries: [
                                            'The Architect of Ruin Spellcasting table shows how many spell slots you have. To cast one of these spells, you must expend a slot of the spell\'s level or higher. When you finish a long rest, you regain all expended spell slots.'
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Spells Known of 1st-Level and Higher',
                                        entries: [
                                            'Spells Known of 1st Level and Higher. You prepare the list of illrigger spells that are available for you to cast, choosing from the illrigger spell list. When you do so, choose a number of illrigger spells equal to your Charisma modifier + half your illrig- ger level (rounded down), minimum of one spell. The spells must be of a level for which you have spell slots.',
                                            'For example, if you are a 5th-level illrigger, you have three 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level in any combination. If you prepare the 1st-level spell Hell’s lash, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.',
                                            'You can change your list of prepared spells when you finish a long rest. Preparing a new list of illrig- ger spells requires time spent in prayer and medita- tion: at least 1 minute per spell level for each spell on your list.'
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Spellcasting Ability',
                                        entries: [
                                            'Charisma is your spell- casting ability for your illrigger spells, since your power derives from your ability to command the attention of your patron archdevil. You use your Charisma whenever a spell refers to your spellcast- ing ability. In addition, you use your Charisma modifier when setting the saving throw DC for an illrigger spell you cast and when making an attack roll with one.',
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
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Spellmaster',
                    source: 'MCDM',
                    page: 16,
                    subclass_short_name: 'Ruin',
                    subclass_source: 'MCDM',
                    level: 7,
                    entries: {
                        e: [
                            'Starting at 7th level, you have advantage on Con- stitution saving throws that you make to maintain your concentration on a spell.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Instant Illusion',
                    source: 'MCDM',
                    page: 16,
                    subclass_short_name: 'Ruin',
                    subclass_source: 'MCDM',
                    level: 9,
                    entries: {
                        e: [
                            'Starting at 9th level, when you place a seal on an enemy, you can, as a reaction, cast an illusion spell that normally has a casting time of 1 action.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'By Will Alone',
                    source: 'MCDM',
                    page: 17,
                    subclass_short_name: 'Ruin',
                    subclass_source: 'MCDM',
                    level: 13,
                    entries: {
                        e: [
                            'At 13th level, your illusion spells no longer require any components. When casting an illusion spell, there is no indication you are casting the spell. You can cast illusion spells while blind, while gagged, and with your hands bound.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Asmoedus\'s Blessing',
                    source: 'MCDM',
                    page: 17,
                    subclass_short_name: 'Ruin',
                    subclass_source: 'MCDM',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you can, as a reaction to taking damage, cast fire shield. The shield is always a warm shield, deals fire damage, and deals 4d8 damage instead of 2d8. You cannot use this feature again until you complete a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Lore Devil',
                    source: 'MCDM',
                    page: 17,
                    subclass_short_name: 'Ruin',
                    subclass_source: 'MCDM',
                    level: 20,
                    entries: {
                        e: [
                            'Starting at 20th level, as an action, you can become a lore devil for 1 minute. You gain three extra seals. Enemies with seals on them automatically fail their saving throws against your spells. You emanate an interference aura, forcing any creature within 60 feet trying to cast a spell to first succeed at a DC 18 Intelligence saving throw or else the spell fails and they lose the spell slot.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Invoke Authority: Spellbreaker',
                    source: 'MCDM',
                    page: 16,
                    subclass_short_name: 'Ruin',
                    subclass_source: 'MCDM',
                    level: 3,
                    entries: {
                        e: [
                            'You call on Asmodeus\' authority to protect you from enemy magic. Any time you are targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, you are unaffected. On a 6, your are unaffected and the effect is reflected back at the caster as though it originated from you, turning the caster into the target.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Invoke Authority: Veteran of Sorcery',
                    source: 'MCDM',
                    page: 16,
                    subclass_short_name: 'Ruin',
                    subclass_source: 'MCDM',
                    level: 3,
                    entries: {
                        e: [
                            'As a reaction to failing a saving throw against a spell, you can choose to succeed instead.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Interdict Improvement: Hellmage',
                    source: 'MCDM',
                    page: 17,
                    subclass_short_name: 'Ruin',
                    subclass_source: 'MCDM',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, when you cast an illusion spell, you may choose to expend an unused seal instead of a spell slot'
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Interdict Improvement: Submit',
                    source: 'MCDM',
                    page: 17,
                    subclass_short_name: 'Ruin',
                    subclass_source: 'MCDM',
                    level: 10,
                    entries: {
                        e: [
                            'Starting at 10th level, as a reaction when you cast a spell, you can consume a seal on an interdicted creature to impose disadvantage on their saving throws against the spell.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },
                {
                    name: 'Interdict Improvement: Mage Resistance',
                    source: 'MCDM',
                    page: 17,
                    subclass_short_name: 'Ruin',
                    subclass_source: 'MCDM',
                    level: 18,
                    entries: {
                        e: [
                            'Starting at 18th level, you gain advantage on saving throws against spells and magicl effects from interdicted creatures.'
                        ],
                    },
                    id: uuidv4(),
                    class_id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
                },

            ])
        ))
)