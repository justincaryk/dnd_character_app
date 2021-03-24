
const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('languages')
        .del()
        .then(function () {
            return knex('languages').insert([{
                    id: uuidv4(),
                    name: 'Abyssal',
                    script: 'Infernal',
                    typical_speakers: 'Demons, chaotic evil outsiders',
                    type: 'exotic'
                },
                {
                    id: uuidv4(),
                    name: 'Aquan',
                    script: 'Elvish',
                    typical_speakers: 'Water-based creatures',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Auran',
                    script: 'Draconic',
                    typical_speakers: 'Air-based creatures',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Celestial',
                    script: 'Celestial',
                    typical_speakers: 'Celestials (angels, devas)',
                    type: 'exotic'
                },
                {
                    id: uuidv4(),
                    name: 'Common',
                    script: 'Common',
                    typical_speakers: 'Humans, halflings, half-elves, half-orcs',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Deep Speech',
                    script: '--',
                    typical_speakers: 'Mind flayers, beholders',
                    type: 'exotic'
                },
                {
                    id: uuidv4(),
                    name: 'Draconic',
                    script: 'Draconic',
                    typical_speakers: 'Kobolds, troglodytes, lizardfolk, dragons, dragonborn',
                    type: 'exotic'
                },
                {
                    id: uuidv4(),
                    name: 'Dwarvish',
                    script: 'Dwarvish',
                    typical_speakers: 'Dwarves',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Elvish',
                    script: 'Elvish',
                    typical_speakers: 'Elves',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Giant',
                    script: 'Dwarvish',
                    typical_speakers: 'Ogres, giants',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Gnomish',
                    script: 'Dwarvish',
                    typical_speakers: 'Gnomes',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Goblin',
                    script: 'Dwarvish',
                    typical_speakers: 'Goblinoids, hobgoblins, bugbears',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Gnoll',
                    script: 'Common',
                    typical_speakers: 'Gnolls',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Halfling',
                    script: 'Common',
                    typical_speakers: 'Halflings',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Ignan',
                    script: 'Draconic',
                    typical_speakers: 'Fire-based creatures',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Infernal',
                    script: 'Infernal',
                    typical_speakers: 'Devils, Tieflings',
                    type: 'exotic'
                },
                {
                    id: uuidv4(),
                    name: 'Loxodon',
                    script: 'Loxodon',
                    typical_speakers: 'Elvish',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Minotaur',
                    script: 'Minotaur',
                    typical_speakers: 'Minotaurs',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Orc',
                    script: 'Dwarvish',
                    typical_speakers: 'Orcs',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Primordial',
                    script: 'Dwarvish',
                    typical_speakers: 'Elementals',
                    type: 'exotic'
                },
                {
                    id: uuidv4(),
                    name: 'Quori',
                    script: 'Quori',
                    typical_speakers: 'Kalashtar',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Riedran',
                    script: 'UNKNOWN',
                    typical_speakers: 'UNKNOWN',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Sylvan',
                    script: 'Elvish',
                    typical_speakers: 'Fey creatures (dryads, brownies, leprechauns)',
                    type: 'exotic'
                },
                {
                    id: uuidv4(),
                    name: 'Terran',
                    script: 'Dwarvish',
                    typical_speakers: 'Xorns and other earth-based creatures',
                    type: 'standard'
                },
                {
                    id: uuidv4(),
                    name: 'Undercommon',
                    script: 'Elvish',
                    typical_speakers: 'Drow, Underdark traders',
                    type: 'exotic'
                },
                {
                    id: uuidv4(),
                    name: 'Vedalken',
                    script: 'Vedalken',
                    typical_speakers: 'Vedalken',
                    type: 'standard'
                }
            ])
        })
}