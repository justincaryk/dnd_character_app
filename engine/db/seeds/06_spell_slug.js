const {
    v4: uuidv4
} = require('uuid')

exports.seed = knex => (
    //Deletes ALL existing entries
    knex('spell_slugs')
    .del()
    .then(() => (
        knex('spell_slugs').insert([
            {
                'id': uuidv4(),
                'slug':'abi-dalzims-horrid-wilting',
                'name':'Abi-Dalzim\'s Horrid Wilting',
                'components':'V, S, M',
                'level':'8th-level',
                'level_int': 8,
                'school':'Necromancy',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'absorb-elements',
                'name':'Absorb Elements',
                'components':'S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer (Revisited), Druid, Ranger, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'aganazzars-scorcher',
                'name':'Aganazzar\'s Scorcher',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'beast-bond',
                'name':'Beast Bond',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Divination',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'bones-of-the-earth',
                'name':'Bones of the Earth',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Transmutation',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'catapult',
                'name':'Catapult',
                'components':'S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'catnap',
                'name':'Catnap',
                'components':'S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Enchantment',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'cause-fear',
                'name':'Cause Fear',
                'components':'V',
                'level':'1st-level',
                'level_int': 1,
                'school':'Necromancy',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'ceremony',
                'name':'Ceremony',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Abjuration',
                'dnd_class':'Cleric, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'chaos-bolt',
                'name':'Chaos Bolt',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Sorcerer'
            },
            {
                'id': uuidv4(),
                'slug':'charm-monster',
                'name':'Charm Monster',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'school':'Enchantment',
                'dnd_class':'Bard, Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'control-flames',
                'name':'Control Flames',
                'components':'S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Transmutation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'control-winds',
                'name':'Control Winds',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Transmutation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'create-bonfire',
                'name':'Create Bonfire',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Conjuration',
                'dnd_class':'Artificer, Artificer (Revisited), Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'create-homunculus',
                'name':'Create Homunculus',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Transmutation',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'crown-of-stars',
                'name':'Crown of Stars',
                'components':'V, S',
                'level':'7th-level',
                'level_int': 7,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'danse-macabre',
                'name':'Danse Macabre',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Necromancy',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'dawn',
                'name':'Dawn',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Cleric, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'dragons-breath',
                'name':'Dragon\'s Breath',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'druid-grove',
                'name':'Druid Grove',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Abjuration',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'dust-devil',
                'name':'Dust Devil',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Conjuration',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'earth-tremor',
                'name':'Earth Tremor',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Bard, Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'earthbind',
                'name':'Earthbind',
                'components':'V',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'elemental-bane',
                'name':'Elemental Bane',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'school': 'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Druid, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'enemies-abound',
                'name':'Enemies Abound',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school': 'Enchantment',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'enervation',
                'name':'Enervation',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Necromancy',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'erupting-earth',
                'name':'Erupting Earth',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'far-step',
                'name':'Far Step',
                'components':'V',
                'level':'5th-level',
                'level_int': 5,
                'school':'Conjuration',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'find-greater-steed',
                'name':'Find Greater Steed',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'school':'Conjuration',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'flame-arrows',
                'name':'Flame Arrows',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Druid, Ranger, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'frostbite',
                'name':'Frostbite',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Evocation',
                'dnd_class':'Artificer, Artificer (Revisited), Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'guardian-of-nature',
                'name':'Guardian of Nature',
                'components':'V',
                'level':'4th-level',
                'level_int': 4,
                'school':'Transmutation',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'gust',
                'name':'Gust',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Transmutation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'healing-spirit',
                'name':'Healing Spirit',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Conjuration',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'holy-weapon',
                'name':'Holy Weapon',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Cleric, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'ice-knife',
                'name':'Ice Knife',
                'components':'S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Conjuration',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'illusory-dragon',
                'name':'Illusory Dragon',
                'components':'S',
                'level':'8th-level',
                'level_int': 8,
                'school': 'Illusion',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'immolation',
                'name':'Immolation',
                'components':'V',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'infernal-calling',
                'name':'Infernal Calling',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Conjuration',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'infestation',
                'name':'Infestation',
                'components':'V, S, M',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Conjuration',
                'dnd_class':'Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'investiture-of-flame',
                'name':'Investiture of Flame',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Transmutation',
                'dnd_class':'Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'investiture-of-ice',
                'name':'Investiture of Ice',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Transmutation',
                'dnd_class':'Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'investiture-of-stone',
                'name':'Investiture of Stone',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Transmutation',
                'dnd_class':'Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'investiture-of-wind',
                'name':'Investiture of Wind',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Transmutation',
                'dnd_class':'Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'invulnerability',
                'name':'Invulnerability',
                'components':'V, S, M',
                'level':'9th-level',
                'level_int': 9,
                'school':'Abjuration',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'life-transference',
                'name':'Life Transference',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Necromancy',
                'dnd_class':'Cleric, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'maddening-darkness',
                'name':'Maddening Darkness',
                'components':'V, M',
                'level':'8th-level',
                'level_int': 8,
                'school':'Evocation',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'maelstrom',
                'name':'Maelstrom',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'magic-stone',
                'name':'Magic Stone',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Druid, Warlock'
            },
            {
                'id': uuidv4(),
                'slug':'mass-polymorph',
                'name':'Mass Polymorph',
                'components':'V, S, M',
                'level':'9th-level',
                'level_int': 9,
                'school':'Transmutation',
                'dnd_class':'Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'maximilians-earthen-grasp',
                'name':'Maximilian\'s Earthen Grasp',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'melfs-minute-meteors',
                'name':'Melf\'s Minute Meteors',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mental-prison',
                'name':'Mental Prison',
                'components':'S',
                'level':'6th-level',
                'level_int': 6,
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mighty-fortress',
                'name':'Mighty Fortress',
                'components':'V, S, M',
                'level':'8th-level',
                'level_int': 8,
                'school':'Conjuration',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mind-spike',
                'name':'Mind Spike',
                'components':'S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Divination',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mold-earth',
                'name':'Mold Earth',
                'components':'S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Transmutation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'negative-energy-flood',
                'name':'Negative Energy Flood',
                'components':'V, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Necromancy',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'power-word-pain',
                'name':'Power Word Pain',
                'components':'V',
                'level':'7th-level',
                'level_int': 7,
                'school':'Enchantment',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'primal-savagery',
                'name':'Primal Savagery',
                'components':'S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Transmutation',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'primordial-ward',
                'name':'Primordial Ward',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Abjuration',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'psychic-scream',
                'name':'Psychic Scream',
                'components':'S',
                'level':'9th-level',
                'level_int': 9,
                'school':'Enchantment',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'pyrotechnics',
                'name':'Pyrotechnics',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'scatter',
                'name':'Scatter',
                'components':'V',
                'level':'6th-level',
                'level_int': 6,
                'school':'Conjuration',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'shadow-blade',
                'name':'Shadow Blade',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'shadow-of-moil',
                'name':'Shadow of Moil',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Necromancy',
                'dnd_class':'Warlock'
            },
            {
                'id': uuidv4(),
                'slug':'shape-water',
                'name':'Shape Water',
                'components':'S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Transmutation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'sickening-radiance',
                'name':'Sickening Radiance',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'skill-empowerment',
                'name':'Skill Empowerment',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'skywrite',
                'name':'Skywrite',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Druid, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'snare',
                'name':'Snare',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer (Revisited), Druid, Ranger, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'snillocs-snowball-swarm',
                'name':'Snilloc\'s Snowball Swarm',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'soul-cage',
                'name':'Soul Cage',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Necromancy',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'steel-wind-strike',
                'name':'Steel Wind Strike',
                'components':'S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Conjuration',
                'dnd_class':'Ranger, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'storm-sphere',
                'name':'Storm Sphere',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'summon-greater-demon',
                'name':'Summon Greater Demon',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Conjuration',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'summon-lesser-demons',
                'name':'Summon Lesser Demons',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Conjuration',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'synaptic-static',
                'name':'Synaptic Static',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Enchantment',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'temple-of-the-gods',
                'name':'Temple of the Gods',
                'components':'V, S, M',
                'level':'7th-level',
                'level_int': 7,
                'school':'Conjuration',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'tensers-transformation',
                'name':'Tenser\'s Transformation',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Transmutation',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'thunder-step',
                'name':'Thunder Step',
                'components':'V',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Conjuration',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'thunderclap',
                'name':'Thunderclap',
                'components':'S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Evocation',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'tidal-wave',
                'name':'Tidal Wave',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Conjuration',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'tiny-servant',
                'name':'Tiny Servant',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'toll-the-dead',
                'name':'Toll the Dead',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Necromancy',
                'dnd_class':'Cleric, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'transmute-rock',
                'name':'Transmute Rock',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Druid, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'vitriolic-sphere',
                'name':'Vitriolic Sphere',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Evocation',
                'dnd_class':'Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'wall-of-light',
                'name':'Wall of Light',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'wall-of-sand',
                'name':'Wall of Sand',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Evocation',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'wall-of-water',
                'name':'Wall of Water',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Evocation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'warding-wind',
                'name':'Warding Wind',
                'components':'V',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Bard, Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'watery-sphere',
                'name':'Watery Sphere',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Conjuration',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'whirlwind',
                'name':'Whirlwind',
                'components':'V, M',
                'level':'7th-level',
                'level_int': 7,
                'school':'Evocation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'word-of-radiance',
                'name':'Word of Radiance',
                'components':'V, M',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Evocation',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'wrath-of-nature',
                'name':'Wrath of Nature',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'zephyr-strike',
                'name':'Zephyr Strike',
                'components':'V',
                'level':'1st-level',
                'level_int': 1,
                'school':'Transmutation',
                'dnd_class':'Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'acid-splash',
                'name':'Acid Splash',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Conjuration',
                'dnd_class':'Artificer, Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'aid',
                'name':'Aid',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Cleric, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'alarm',
                'name':'Alarm',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Ranger, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'alter-self',
                'name':'Alter Self',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'animal-friendship',
                'name':'Animal Friendship',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Enchantment',
                'dnd_class':'Bard, Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'animal-messenger',
                'name':'Animal Messenger',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Enchantment',
                'dnd_class':'Bard, Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'animal-shapes',
                'name':'Animal Shapes',
                'components':'V, S',
                'level':'8th-level',
                'level_int': 8,
                'school':'Transmutation',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'animate-dead',
                'name':'Animate Dead',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Necromancy',
                'dnd_class':'Cleric, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'animate-objects',
                'name':'Animate Objects',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'antilife-shell',
                'name':'Antilife Shell',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Abjuration',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'antimagic-field',
                'name':'Antimagic Field',
                'components':'V, S, M',
                'level':'8th-level',
                'level_int': 8,
                'school':'Abjuration',
                'dnd_class':'Cleric, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'antipathy/sympathy',
                'name':'Antipathy/Sympathy',
                'components':'V, S, M',
                'level':'8th-level',
                'level_int': 8,
                'school':'Enchantment',
                'dnd_class':'Druid, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'arcane-eye',
                'name':'Arcane Eye',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Divination',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'arcane-gate',
                'name':'Arcane Gate',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Conjuration',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'arcane-lock',
                'name':'Arcane Lock',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'armor-of-agathys',
                'name':'Armor of Agathys',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Abjuration',
                'dnd_class':'Warlock'
            },
            {
                'id': uuidv4(),
                'slug':'arms-of-hadar',
                'name':'Arms of Hadar',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Conjuration',
                'dnd_class':'Warlock'
            },
            {
                'id': uuidv4(),
                'slug':'astral-projection',
                'name':'Astral Projection',
                'components':'V, S, M',
                'level':'9th-level',
                'level_int': 9,
                'school':'Necromancy',
                'dnd_class':'Cleric, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'augury',
                'name':'Augury',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Divination',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'aura-of-life',
                'name':'Aura of Life',
                'components':'V',
                'level':'4th-level',
                'level_int': 4,
                'school':'Abjuration',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'aura-of-purity',
                'name':'Aura of Purity',
                'components':'V',
                'level':'4th-level',
                'level_int': 4,
                'school':'Abjuration',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'aura-of-vitality',
                'name':'Aura of Vitality',
                'components':'V',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Evocation',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'awaken',
                'name':'Awaken',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Transmutation',
                'dnd_class':'Bard, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'bane',
                'name':'Bane',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Enchantment',
                'dnd_class':'Bard, Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'banishing-smite',
                'name':'Banishing Smite',
                'components':'V',
                'level':'5th-level',
                'level_int': 5,
                'school':'Abjuration',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'banishment',
                'name':'Banishment',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Abjuration',
                'dnd_class':'Cleric, Paladin, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'barkskin',
                'name':'Barkskin',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'beacon-of-hope',
                'name':'Beacon of Hope',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Abjuration',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'beast-sense',
                'name':'Beast Sense',
                'components':'S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Divination',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'bestow-curse',
                'name':'Bestow Curse',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Necromancy',
                'dnd_class':'Bard, Cleric, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'bigbys-hand',
                'name':'Bigby\'s Hand',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Artificer, Artificer (Revisited), Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'blade-barrier',
                'name':'Blade Barrier',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Evocation',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'blade-ward',
                'name':'Blade Ward',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Abjuration',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'bless',
                'name':'Bless',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Enchantment',
                'dnd_class':'Cleric, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'blight',
                'name':'Blight',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'school':'Necromancy',
                'dnd_class':'Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'blinding-smite',
                'name':'Blinding Smite',
                'components':'V',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Evocation',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'blindness/deafness',
                'name':'Blindness/Deafness',
                'components':'V',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Necromancy',
                'dnd_class':'Bard, Cleric, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'blink',
                'name':'Blink',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'blur',
                'name':'Blur',
                'components':'V',
                'level':'2nd-level',
                'level_int': 2,
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'branding-smite',
                'name':'Branding Smite',
                'components':'V',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'burning-hands',
                'name':'Burning Hands',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'call-lightning',
                'name':'Call Lightning',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Conjuration',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'calm-emotions',
                'name':'Calm Emotions',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Enchantment',
                'dnd_class':'Bard, Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'chain-lightning',
                'name':'Chain Lightning',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'charm-person',
                'name':'Charm Person',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Enchantment',
                'dnd_class':'Bard, Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'chill-touch',
                'name':'Chill Touch',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Necromancy',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'chromatic-orb',
                'name':'Chromatic Orb',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'circle-of-death',
                'name':'Circle of Death',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Necromancy',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'circle-of-power',
                'name':'Circle of Power',
                'components':'V',
                'level':'5th-level',
                'level_int': 5,
                'school':'Abjuration',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'clairvoyance',
                'name':'Clairvoyance',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Divination',
                'dnd_class':'Bard, Cleric, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'clone',
                'name':'Clone',
                'components':'V, S, M',
                'level':'8th-level',
                'level_int': 8,
                'school':'Necromancy',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'cloud-of-daggers',
                'name':'Cloud of Daggers',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Conjuration',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'cloudkill',
                'name':'Cloudkill',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Conjuration',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'color-spray',
                'name':'Color Spray',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'command',
                'name':'Command',
                'components':'V',
                'level':'1st-level',
                'level_int': 1,
                'school':'Enchantment',
                'dnd_class':'Cleric, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'commune',
                'name':'Commune',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Divination',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'commune-with-nature',
                'name':'Commune with Nature',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Divination',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'compelled-duel',
                'name':'Compelled Duel',
                'components':'V',
                'level':'1st-level',
                'level_int': 1,
                'school':'Enchantment',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'comprehend-languages',
                'name':'Comprehend Languages',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Divination',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'compulsion',
                'name':'Compulsion',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'school':'Enchantment',
                'dnd_class':'Bard'
            },
            {
                'id': uuidv4(),
                'slug':'cone-of-cold',
                'name':'Cone of Cold',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'confusion',
                'name':'Confusion',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Enchantment',
                'dnd_class':'Bard, Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'conjure-animals',
                'name':'Conjure Animals',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Conjuration',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'conjure-barrage',
                'name':'Conjure Barrage',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Conjuration',
                'dnd_class':'Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'conjure-celestial',
                'name':'Conjure Celestial',
                'components':'V, S',
                'level':'7th-level',
                'level_int': 7,
                'school':'Conjuration',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'conjure-elemental',
                'name':'Conjure Elemental',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Conjuration',
                'dnd_class':'Druid, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'conjure-fey',
                'name':'Conjure Fey',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Conjuration',
                'dnd_class':'Druid, Warlock'
            },
            {
                'id': uuidv4(),
                'slug':'conjure-minor-elementals',
                'name':'Conjure Minor Elementals',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'school':'Conjuration',
                'dnd_class':'Druid, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'conjure-volley',
                'name':'Conjure Volley',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Conjuration',
                'dnd_class':'Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'conjure-woodland-beings',
                'name':'Conjure Woodland Beings',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Conjuration',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'contact-other-plane',
                'name':'Contact Other Plane',
                'components':'V',
                'level':'5th-level',
                'level_int': 5,
                'school':'Divination',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'contagion',
                'name':'Contagion',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Necromancy',
                'dnd_class':'Cleric, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'contingency',
                'name':'Contingency',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Evocation',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'continual-flame',
                'name':'Continual Flame',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Cleric, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'control-water',
                'name':'Control Water',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Transmutation',
                'dnd_class':'Cleric, Druid, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'control-weather',
                'name':'Control Weather',
                'components':'V, S, M',
                'level':'8th-level',
                'level_int': 8,
                'school':'Transmutation',
                'dnd_class':'Cleric, Druid, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'cordon-of-arrows',
                'name':'Cordon of Arrows',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'counterspell',
                'name':'Counterspell',
                'components':'S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Abjuration',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'create-food-and-water',
                'name':'Create Food and Water',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Conjuration',
                'dnd_class':'Artificer, Cleric, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'create-undead',
                'name':'Create Undead',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Necromancy',
                'dnd_class':'Cleric, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'create-or-destroy-water',
                'name':'Create or Destroy Water',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Transmutation',
                'dnd_class':'Cleric, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'creation',
                'name':'Creation',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'dnd_class':'Artificer, Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'crown-of-madness',
                'name':'Crown of Madness',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Enchantment',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'crusaders-mantle',
                'name':'Crusader\'s Mantle',
                'components':'V',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Evocation',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'cure-wounds',
                'name':'Cure Wounds',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Bard, Cleric, Druid, Paladin, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'dancing-lights',
                'name':'Dancing Lights',
                'components':'V, S, M',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Evocation',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'darkness',
                'name':'Darkness',
                'components':'V, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'darkvision',
                'name':'Darkvision',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Druid, Ranger, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'daylight',
                'name':'Daylight',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Evocation',
                'dnd_class':'Cleric, Druid, Paladin, Ranger, Sorcerer'
            },
            {
                'id': uuidv4(),
                'slug':'death-ward',
                'name':'Death Ward',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'school':'Abjuration',
                'dnd_class':'Artificer, Cleric, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'delayed-blast-fireball',
                'name':'Delayed Blast Fireball',
                'components':'V, S, M',
                'level':'7th-level',
                'level_int': 7,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'demiplane',
                'name':'Demiplane',
                'components':'S',
                'level':'8th-level',
                'level_int': 8,
                'school':'Conjuration',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'destructive-wave',
                'name':'Destructive Wave',
                'components':'V',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'detect-evil-and-good',
                'name':'Detect Evil and Good',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Divination',
                'dnd_class':'Cleric, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'detect-magic',
                'name':'Detect Magic',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Divination',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'detect-poison-and-disease',
                'name':'Detect Poison and Disease',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Divination',
                'dnd_class':'Cleric, Druid, Paladin, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'detect-thoughts',
                'name':'Detect Thoughts',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Divination',
                'dnd_class':'Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'dimension-door',
                'name':'Dimension Door',
                'components':'V',
                'level':'4th-level',
                'level_int': 4,
                'school':'Conjuration',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'disguise-self',
                'name':'Disguise Self',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'disintegrate',
                'name':'Disintegrate',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Transmutation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'dispel-evil-and-good',
                'name':'Dispel Evil and Good',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Abjuration',
                'dnd_class':'Cleric, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'dispel-magic',
                'name':'Dispel Magic',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Cleric, Druid, Paladin, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'dissonant-whispers',
                'name':'Dissonant Whispers',
                'components':'V',
                'level':'1st-level',
                'level_int': 1,
                'school':'Enchantment',
                'dnd_class':'Bard'
            },
            {
                'id': uuidv4(),
                'slug':'divination',
                'name':'Divination',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Divination',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'divine-favor',
                'name':'Divine Favor',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'divine-word',
                'name':'Divine Word',
                'components':'V',
                'level':'7th-level',
                'level_int': 7,
                'school':'Evocation',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'dominate-beast',
                'name':'Dominate Beast',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'school':'Enchantment',
                'dnd_class':'Druid, Sorcerer'
            },
            {
                'id': uuidv4(),
                'slug':'dominate-monster',
                'name':'Dominate Monster',
                'components':'V, S',
                'level':'8th-level',
                'level_int': 8,
                'school':'Enchantment',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'dominate-person',
                'name':'Dominate Person',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Enchantment',
                'dnd_class':'Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'drawmijs-instant-summons',
                'name':'Drawmij\'s Instant Summons',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Conjuration',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'dream',
                'name':'Dream',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'dnd_class':'Bard, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'druidcraft',
                'name':'Druidcraft',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Transmutation',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'earthquake',
                'name':'Earthquake',
                'components':'V, S, M',
                'level':'8th-level',
                'level_int': 8,
                'school':'Evocation',
                'dnd_class':'Cleric, Druid, Sorcerer'
            },
            {
                'id': uuidv4(),
                'slug':'eldritch-blast',
                'name':'Eldritch Blast',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Evocation',
                'dnd_class':'Warlock'
            },
            {
                'id': uuidv4(),
                'slug':'elemental-weapon',
                'name':'Elemental Weapon',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'enhance-ability',
                'name':'Enhance Ability',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Bard, Cleric, Druid, Sorcerer'
            },
            {
                'id': uuidv4(),
                'slug':'enlarge/reduce',
                'name':'Enlarge/Reduce',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'ensnaring-strike',
                'name':'Ensnaring Strike',
                'components':'V',
                'level':'1st-level',
                'level_int': 1,
                'school':'Conjuration',
                'dnd_class':'Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'entangle',
                'name':'Entangle',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Conjuration',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'enthrall',
                'name':'Enthrall',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Enchantment',
                'dnd_class':'Bard, Warlock'
            },
            {
                'id': uuidv4(),
                'slug':'etherealness',
                'name':'Etherealness',
                'components':'V, S',
                'level':'7th-level',
                'level_int': 7,
                'school':'Transmutation',
                'dnd_class':'Bard, Cleric, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'evards-black-tentacles',
                'name':'Evard\'s Black Tentacles',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Conjuration',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'expeditious-retreat',
                'name':'Expeditious Retreat',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'eyebite',
                'name':'Eyebite',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Necromancy',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'fabricate',
                'name':'Fabricate',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'faerie-fire',
                'name':'Faerie Fire',
                'components':'V',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'false-life',
                'name':'False Life',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Necromancy',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'fear',
                'name':'Fear',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'feather-fall',
                'name':'Feather Fall',
                'components':'V, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'feeblemind',
                'name':'Feeblemind',
                'components':'V, S, M',
                'level':'8th-level',
                'level_int': 8,
                'school':'Enchantment',
                'dnd_class':'Bard, Druid, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'feign-death',
                'name':'Feign Death',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Necromancy',
                'dnd_class':'Bard, Cleric, Druid, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'find-familiar',
                'name':'Find Familiar',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Conjuration',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'find-steed',
                'name':'Find Steed',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Conjuration',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'find-traps',
                'name':'Find Traps',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Divination',
                'dnd_class':'Cleric, Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'find-the-path',
                'name':'Find the Path',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Divination',
                'dnd_class':'Bard, Cleric, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'finger-of-death',
                'name':'Finger of Death',
                'components':'V, S',
                'level':'7th-level',
                'level_int': 7,
                'school':'Necromancy',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'fire-bolt',
                'name':'Fire Bolt',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Evocation',
                'dnd_class':'Artificer, Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'fire-shield',
                'name':'Fire Shield',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Evocation',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'fire-storm',
                'name':'Fire Storm',
                'components':'V, S',
                'level':'7th-level',
                'level_int': 7,
                'school':'Evocation',
                'dnd_class':'Cleric, Druid, Sorcerer'
            },
            {
                'id': uuidv4(),
                'slug':'fireball',
                'name':'Fireball',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'flame-blade',
                'name':'Flame Blade',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'flame-strike',
                'name':'Flame Strike',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'flaming-sphere',
                'name':'Flaming Sphere',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Conjuration',
                'dnd_class':'Druid, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'flesh-to-stone',
                'name':'Flesh to Stone',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Transmutation',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'fly',
                'name':'Fly',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'fog-cloud',
                'name':'Fog Cloud',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Conjuration',
                'dnd_class':'Druid, Ranger, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'forbiddance',
                'name':'Forbiddance',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Abjuration',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'forcecage',
                'name':'Forcecage',
                'components':'V, S, M',
                'level':'7th-level',
                'level_int': 7,
                'school':'Evocation',
                'dnd_class':'Bard, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'foresight',
                'name':'Foresight',
                'components':'V, S, M',
                'level':'9th-level',
                'level_int': 9,
                'school':'Divination',
                'dnd_class':'Bard, Druid, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'freedom-of-movement',
                'name':'Freedom of Movement',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Bard, Cleric, Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'friends',
                'name':'Friends',
                'components':'S, M',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Enchantment',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'gaseous-form',
                'name':'Gaseous Form',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'gate',
                'name':'Gate',
                'components':'V, S, M',
                'level':'9th-level',
                'level_int': 9,
                'school':'Conjuration',
                'dnd_class':'Cleric, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'geas',
                'name':'Geas',
                'components':'V',
                'level':'5th-level',
                'level_int': 5,
                'school':'Enchantment',
                'dnd_class':'Bard, Cleric, Druid, Paladin, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'gentle-repose',
                'name':'Gentle Repose',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Necromancy',
                'dnd_class':'Cleric, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'giant-insect',
                'name':'Giant Insect',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'school':'Transmutation',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'glibness',
                'name':'Glibness',
                'components':'V',
                'level':'8th-level',
                'level_int': 8,
                'school':'Transmutation',
                'dnd_class':'Bard, Warlock'
            },
            {
                'id': uuidv4(),
                'slug':'globe-of-invulnerability',
                'name':'Globe of Invulnerability',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Abjuration',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'glyph-of-warding',
                'name':'Glyph of Warding',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Bard, Cleric, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'goodberry',
                'name':'Goodberry',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Transmutation',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'grasping-vine',
                'name':'Grasping Vine',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'school':'Conjuration',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'grease',
                'name':'Grease',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Conjuration',
                'dnd_class':'Artificer, Artificer (Revisited), Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'greater-invisibility',
                'name':'Greater Invisibility',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'dnd_class':'Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'greater-restoration',
                'name':'Greater Restoration',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Cleric, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'guardian-of-faith',
                'name':'Guardian of Faith',
                'components':'V',
                'level':'4th-level',
                'level_int': 4,
                'school':'Conjuration',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'guards-and-wards',
                'name':'Guards and Wards',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Abjuration',
                'dnd_class':'Bard, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'guidance',
                'name':'Guidance',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Divination',
                'dnd_class':'Artificer, Artificer (Revisited), Cleric, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'guiding-bolt',
                'name':'Guiding Bolt',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'gust-of-wind',
                'name':'Gust of Wind',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'hail-of-thorns',
                'name':'Hail of Thorns',
                'components':'V',
                'level':'1st-level',
                'level_int': 1,
                'school':'Conjuration',
                'dnd_class':'Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'hallow',
                'name':'Hallow',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'hallucinatory-terrain',
                'name':'Hallucinatory Terrain',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'dnd_class':'Bard, Druid, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'harm',
                'name':'Harm',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Necromancy',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'haste',
                'name':'Haste',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'heal',
                'name':'Heal',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Evocation',
                'dnd_class':'Cleric, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'healing-word',
                'name':'Healing Word',
                'components':'V',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Bard, Cleric, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'heat-metal',
                'name':'Heat Metal',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'hellish-rebuke',
                'name':'Hellish Rebuke',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Warlock'
            },
            {
                'id': uuidv4(),
                'slug':'heroes-feast',
                'name':'Heroes\' Feast',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Conjuration',
                'dnd_class':'Cleric, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'heroism',
                'name':'Heroism',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Enchantment',
                'dnd_class':'Bard, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'hex',
                'name':'Hex',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Enchantment',
                'dnd_class':'Warlock'
            },
            {
                'id': uuidv4(),
                'slug':'hold-monster',
                'name':'Hold Monster',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Enchantment',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'hold-person',
                'name':'Hold Person',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Enchantment',
                'dnd_class':'Bard, Cleric, Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'holy-aura',
                'name':'Holy Aura',
                'components':'V, S, M',
                'level':'8th-level',
                'level_int': 8,
                'school':'Abjuration',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'hunger-of-hadar',
                'name':'Hunger of Hadar',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Conjuration',
                'dnd_class':'Warlock'
            },
            {
                'id': uuidv4(),
                'slug':'hunters-mark',
                'name':'Hunter\'s Mark',
                'components':'V',
                'level':'1st-level',
                'level_int': 1,
                'school':'Divination',
                'dnd_class':'Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'hypnotic-pattern',
                'name':'Hypnotic Pattern',
                'components':'S, M',
                'level':'3rd-level',
                'level_int': 3,
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'ice-storm',
                'name':'Ice Storm',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Evocation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'identify',
                'name':'Identify',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Divination',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'illusory-script',
                'name':'Illusory Script',
                'components':'S, M',
                'level':'1st-level',
                'level_int': 1,
                'dnd_class':'Bard, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'imprisonment',
                'name':'Imprisonment',
                'components':'V, S, M',
                'level':'9th-level',
                'level_int': 9,
                'school':'Abjuration',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'incendiary-cloud',
                'name':'Incendiary Cloud',
                'components':'V, S',
                'level':'8th-level',
                'level_int': 8,
                'school':'Conjuration',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'inflict-wounds',
                'name':'Inflict Wounds',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Necromancy',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'insect-plague',
                'name':'Insect Plague',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Conjuration',
                'dnd_class':'Cleric, Druid, Sorcerer'
            },
            {
                'id': uuidv4(),
                'slug':'invisibility',
                'name':'Invisibility',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'jump',
                'name':'Jump',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Druid, Ranger, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'knock',
                'name':'Knock',
                'components':'V',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'legend-lore',
                'name':'Legend Lore',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Divination',
                'dnd_class':'Bard, Cleric, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'leomunds-secret-chest',
                'name':'Leomund\'s Secret Chest',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Conjuration',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'leomunds-tiny-hut',
                'name':'Leomund\'s Tiny Hut',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Evocation',
                'dnd_class':'Bard, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'lesser-restoration',
                'name':'Lesser Restoration',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Bard, Cleric, Druid, Paladin, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'levitate',
                'name':'Levitate',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'light',
                'name':'Light',
                'components':'V, M',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Evocation',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Cleric, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'lightning-arrow',
                'name':'Lightning Arrow',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'lightning-bolt',
                'name':'Lightning Bolt',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'locate-animals-or-plants',
                'name':'Locate Animals or Plants',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Divination',
                'dnd_class':'Bard, Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'locate-creature',
                'name':'Locate Creature',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Divination',
                'dnd_class':'Bard, Cleric, Druid, Paladin, Ranger, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'locate-object',
                'name':'Locate Object',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Divination',
                'dnd_class':'Bard, Cleric, Druid, Paladin, Ranger, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'longstrider',
                'name':'Longstrider',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Bard, Druid, Ranger, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mage-armor',
                'name':'Mage Armor',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Abjuration',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mage-hand',
                'name':'Mage Hand',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Conjuration',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'magic-circle',
                'name':'Magic Circle',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Abjuration',
                'dnd_class':'Cleric, Paladin, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'magic-jar',
                'name':'Magic Jar',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Necromancy',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'magic-missile',
                'name':'Magic Missile',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'magic-mouth',
                'name':'Magic Mouth',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'magic-weapon',
                'name':'Magic Weapon',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Paladin, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'major-image',
                'name':'Major Image',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mass-cure-wounds',
                'name':'Mass Cure Wounds',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Bard, Cleric, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'mass-heal',
                'name':'Mass Heal',
                'components':'V, S',
                'level':'9th-level',
                'level_int': 9,
                'school':'Evocation',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'mass-healing-word',
                'name':'Mass Healing Word',
                'components':'V',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Evocation',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'mass-suggestion',
                'name':'Mass Suggestion',
                'components':'V, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Enchantment',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'maze',
                'name':'Maze',
                'components':'V, S',
                'level':'8th-level',
                'level_int': 8,
                'school':'Conjuration',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'meld-into-stone',
                'name':'Meld into Stone',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Cleric, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'melfs-acid-arrow',
                'name':'Melf\'s Acid Arrow',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mending',
                'name':'Mending',
                'components':'V, S, M',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Cleric, Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'message',
                'name':'Message',
                'components':'V, S, M',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'meteor-swarm',
                'name':'Meteor Swarm',
                'components':'V, S',
                'level':'9th-level',
                'level_int': 9,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mind-blank',
                'name':'Mind Blank',
                'components':'V, S',
                'level':'8th-level',
                'level_int': 8,
                'school':'Abjuration',
                'dnd_class':'Bard, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'minor-illusion',
                'name':'Minor Illusion',
                'components':'S, M',
                'level':'Cantrip',
                'level_int': 0,
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mirage-arcane',
                'name':'Mirage Arcane',
                'components':'V, S',
                'level':'7th-level',
                'level_int': 7,
                'dnd_class':'Bard, Druid, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mirror-image',
                'name':'Mirror Image',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mislead',
                'name':'Mislead',
                'components':'S',
                'level':'5th-level',
                'level_int': 5,
                'dnd_class':'Bard, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'misty-step',
                'name':'Misty Step',
                'components':'V',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Conjuration',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'modify-memory',
                'name':'Modify Memory',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Enchantment',
                'dnd_class':'Bard, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'moonbeam',
                'name':'Moonbeam',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'mordenkainens-faithful-hound',
                'name':'Mordenkainen\'s Faithful Hound',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Conjuration',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mordenkainens-magnificent-mansion',
                'name':'Mordenkainen\'s Magnificent Mansion',
                'components':'V, S, M',
                'level':'7th-level',
                'level_int': 7,
                'school':'Conjuration',
                'dnd_class':'Bard, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mordenkainens-private-sanctum',
                'name':'Mordenkainen\'s Private Sanctum',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'mordenkainens-sword',
                'name':'Mordenkainen\'s Sword',
                'components':'V, S, M',
                'level':'7th-level',
                'level_int': 7,
                'school':'Evocation',
                'dnd_class':'Bard, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'move-earth',
                'name':'Move Earth',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Transmutation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'nondetection',
                'name':'Nondetection',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Abjuration',
                'dnd_class':'Bard, Ranger, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'nystuls-magic-aura',
                'name':'Nystul\'s Magic Aura',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'otilukes-freezing-sphere',
                'name':'Otiluke\'s Freezing Sphere',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Evocation',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'otilukes-resilient-sphere',
                'name':'Otiluke\'s Resilient Sphere',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Evocation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'ottos-irresistible-dance',
                'name':'Otto\'s Irresistible Dance',
                'components':'V',
                'level':'6th-level',
                'level_int': 6,
                'school':'Enchantment',
                'dnd_class':'Bard, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'pass-without-trace',
                'name':'Pass without Trace',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Abjuration',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'passwall',
                'name':'Passwall',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Transmutation',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'phantasmal-force',
                'name':'Phantasmal Force',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'dnd_class':'Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'phantasmal-killer',
                'name':'Phantasmal Killer',
                'components':'V, S',
                'level':'4th-level',
                'level_int': 4,
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'phantom-steed',
                'name':'Phantom Steed',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'planar-ally',
                'name':'Planar Ally',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Conjuration',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'planar-binding',
                'name':'Planar Binding',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Abjuration',
                'dnd_class':'Bard, Cleric, Druid, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'plane-shift',
                'name':'Plane Shift',
                'components':'V, S, M',
                'level':'7th-level',
                'level_int': 7,
                'school':'Conjuration',
                'dnd_class':'Cleric, Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'plant-growth',
                'name':'Plant Growth',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Bard, Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'poison-spray',
                'name':'Poison Spray',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Conjuration',
                'dnd_class':'Artificer, Artificer (Revisited), Druid, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'polymorph',
                'name':'Polymorph',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Transmutation',
                'dnd_class':'Bard, Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'power-word-heal',
                'name':'Power Word Heal',
                'components':'V, S',
                'level':'9th-level',
                'level_int': 9,
                'school':'Evocation',
                'dnd_class':'Bard'
            },
            {
                'id': uuidv4(),
                'slug':'power-word-kill',
                'name':'Power Word Kill',
                'components':'V',
                'level':'9th-level',
                'level_int': 9,
                'school':'Enchantment',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'power-word-stun',
                'name':'Power Word Stun',
                'components':'V',
                'level':'8th-level',
                'level_int': 8,
                'school':'Enchantment',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'prayer-of-healing',
                'name':'Prayer of Healing',
                'components':'V',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'prestidigitation',
                'name':'Prestidigitation',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'prismatic-spray',
                'name':'Prismatic Spray',
                'components':'V, S',
                'level':'7th-level',
                'level_int': 7,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'prismatic-wall',
                'name':'Prismatic Wall',
                'components':'V, S',
                'level':'9th-level',
                'level_int': 9,
                'school':'Abjuration',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'produce-flame',
                'name':'Produce Flame',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Conjuration',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'programmed-illusion',
                'name':'Programmed Illusion',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'dnd_class':'Bard, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'project-image',
                'name':'Project Image',
                'components':'V, S, M',
                'level':'7th-level',
                'level_int': 7,
                'dnd_class':'Bard, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'protection-from-energy',
                'name':'Protection from Energy',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Cleric, Druid, Ranger, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'protection-from-evil-and-good',
                'name':'Protection from Evil and Good',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Abjuration',
                'dnd_class':'Cleric, Paladin, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'protection-from-poison',
                'name':'Protection from Poison',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Cleric, Druid, Paladin, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'purify-food-and-drink',
                'name':'Purify Food and Drink',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Transmutation',
                'dnd_class':'Artificer, Cleric, Druid, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'raise-dead',
                'name':'Raise Dead',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Necromancy',
                'dnd_class':'Bard, Cleric, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'rarys-telepathic-bond',
                'name':'Rary\'s Telepathic Bond',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Divination',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'ray-of-enfeeblement',
                'name':'Ray of Enfeeblement',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Necromancy',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'ray-of-frost',
                'name':'Ray of Frost',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Evocation',
                'dnd_class':'Artificer, Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'ray-of-sickness',
                'name':'Ray of Sickness',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Necromancy',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'regenerate',
                'name':'Regenerate',
                'components':'V, S, M',
                'level':'7th-level',
                'level_int': 7,
                'school':'Transmutation',
                'dnd_class':'Bard, Cleric, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'reincarnate',
                'name':'Reincarnate',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Transmutation',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'remove-curse',
                'name':'Remove Curse',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Abjuration',
                'dnd_class':'Cleric, Paladin, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'resistance',
                'name':'Resistance',
                'components':'V, S, M',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer (Revisited), Cleric, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'resurrection',
                'name':'Resurrection',
                'components':'V, S, M',
                'level':'7th-level',
                'level_int': 7,
                'school':'Necromancy',
                'dnd_class':'Bard, Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'reverse-gravity',
                'name':'Reverse Gravity',
                'components':'V, S, M',
                'level':'7th-level',
                'level_int': 7,
                'school':'Transmutation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'revivify',
                'name':'Revivify',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Necromancy',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Cleric, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'rope-trick',
                'name':'Rope Trick',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'sacred-flame',
                'name':'Sacred Flame',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Evocation',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'sanctuary',
                'name':'Sanctuary',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'scorching-ray',
                'name':'Scorching Ray',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'scrying',
                'name':'Scrying',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Divination',
                'dnd_class':'Bard, Cleric, Druid, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'searing-smite',
                'name':'Searing Smite',
                'components':'V',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'see-invisibility',
                'name':'See Invisibility',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Divination',
                'dnd_class':'Artificer, Artificer (Revisited), Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'seeming',
                'name':'Seeming',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'dnd_class':'Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'sending',
                'name':'Sending',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Evocation',
                'dnd_class':'Bard, Cleric, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'sequester',
                'name':'Sequester',
                'components':'V, S, M',
                'level':'7th-level',
                'level_int': 7,
                'school':'Transmutation',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'shapechange',
                'name':'Shapechange',
                'components':'V, S, M',
                'level':'9th-level',
                'level_int': 9,
                'school':'Transmutation',
                'dnd_class':'Druid, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'shatter',
                'name':'Shatter',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'shield',
                'name':'Shield',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Abjuration',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'shield-of-faith',
                'name':'Shield of Faith',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Abjuration',
                'dnd_class':'Artificer, Cleric, Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'shillelagh',
                'name':'Shillelagh',
                'components':'V, S, M',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Transmutation',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'shocking-grasp',
                'name':'Shocking Grasp',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Evocation',
                'dnd_class':'Artificer, Artificer (Revisited), Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'silence',
                'name':'Silence',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'dnd_class':'Bard, Cleric, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'silent-image',
                'name':'Silent Image',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'dnd_class':'Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'simulacrum',
                'name':'Simulacrum',
                'components':'V, S, M',
                'level':'7th-level',
                'level_int': 7,
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'sleep',
                'name':'Sleep',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Enchantment',
                'dnd_class':'Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'sleet-storm',
                'name':'Sleet Storm',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Conjuration',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'slow',
                'name':'Slow',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'spare-the-dying',
                'name':'Spare the Dying',
                'components':'V, S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Necromancy',
                'dnd_class':'Artificer, Artificer (Revisited), Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'speak-with-animals',
                'name':'Speak with Animals',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Divination',
                'dnd_class':'Bard, Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'speak-with-dead',
                'name':'Speak with Dead',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Necromancy',
                'dnd_class':'Bard, Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'speak-with-plants',
                'name':'Speak with Plants',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Bard, Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'spider-climb',
                'name':'Spider Climb',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'spike-growth',
                'name':'Spike Growth',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Transmutation',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'spirit-guardians',
                'name':'Spirit Guardians',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Conjuration',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'spiritual-weapon',
                'name':'Spiritual Weapon',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Evocation',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'staggering-smite',
                'name':'Staggering Smite',
                'components':'V',
                'level':'4th-level',
                'level_int': 4,
                'school':'Evocation',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'stinking-cloud',
                'name':'Stinking Cloud',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Conjuration',
                'dnd_class':'Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'stone-shape',
                'name':'Stone Shape',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Cleric, Druid, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'stoneskin',
                'name':'Stoneskin',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Abjuration',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Druid, Ranger, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'storm-of-vengeance',
                'name':'Storm of Vengeance',
                'components':'V, S',
                'level':'9th-level',
                'level_int': 9,
                'school':'Conjuration',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'suggestion',
                'name':'Suggestion',
                'components':'V, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Enchantment',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'sunbeam',
                'name':'Sunbeam',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Evocation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'sunburst',
                'name':'Sunburst',
                'components':'V, S, M',
                'level':'8th-level',
                'level_int': 8,
                'school':'Evocation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'swift-quiver',
                'name':'Swift Quiver',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Transmutation',
                'dnd_class':'Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'symbol',
                'name':'Symbol',
                'components':'V, S, M',
                'level':'7th-level',
                'level_int': 7,
                'school':'Abjuration',
                'dnd_class':'Bard, Cleric, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'tashas-hideous-laughter',
                'name':'Tasha\'s Hideous Laughter',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Enchantment',
                'dnd_class':'Bard, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'telekinesis',
                'name':'Telekinesis',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Transmutation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'telepathy',
                'name':'Telepathy',
                'components':'V, S, M',
                'level':'8th-level',
                'level_int': 8,
                'school':'Evocation',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'teleport',
                'name':'Teleport',
                'components':'V',
                'level':'7th-level',
                'level_int': 7,
                'school':'Conjuration',
                'dnd_class':'Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'teleportation-circle',
                'name':'Teleportation Circle',
                'components':'V, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Conjuration',
                'dnd_class':'Bard, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'tensers-floating-disk',
                'name':'Tenser\'s Floating Disk',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Conjuration',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'thaumaturgy',
                'name':'Thaumaturgy',
                'components':'V',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Transmutation',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'thorn-whip',
                'name':'Thorn Whip',
                'components':'V, S, M',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer (Revisited), Druid'
            },
            {
                'id': uuidv4(),
                'slug':'thunderous-smite',
                'name':'Thunderous Smite',
                'components':'V',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'thunderwave',
                'name':'Thunderwave',
                'components':'V, S',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Bard, Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'time-stop',
                'name':'Time Stop',
                'components':'V',
                'level':'9th-level',
                'level_int': 9,
                'school':'Transmutation',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'tongues',
                'name':'Tongues',
                'components':'V, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Divination',
                'dnd_class':'Bard, Cleric, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'transport-via-plants',
                'name':'Transport via Plants',
                'components':'V, S',
                'level':'6th-level',
                'level_int': 6,
                'school':'Conjuration',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'tree-stride',
                'name':'Tree Stride',
                'components':'V, S',
                'level':'5th-level',
                'level_int': 5,
                'school':'Conjuration',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'true-polymorph',
                'name':'True Polymorph',
                'components':'V, S, M',
                'level':'9th-level',
                'level_int': 9,
                'school':'Transmutation',
                'dnd_class':'Bard, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'true-resurrection',
                'name':'True Resurrection',
                'components':'V, S, M',
                'level':'9th-level',
                'level_int': 9,
                'school':'Necromancy',
                'dnd_class':'Cleric, Druid'
            },
            {
                'id': uuidv4(),
                'slug':'true-seeing',
                'name':'True Seeing',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Divination',
                'dnd_class':'Bard, Cleric, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'true-strike',
                'name':'True Strike',
                'components':'S',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Divination',
                'dnd_class':'Bard, Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'tsunami',
                'name':'Tsunami',
                'components':'V, S',
                'level':'8th-level',
                'level_int': 8,
                'school':'Conjuration',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'unseen-servant',
                'name':'Unseen Servant',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Conjuration',
                'dnd_class':'Bard, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'vampiric-touch',
                'name':'Vampiric Touch',
                'components':'V, S',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Necromancy',
                'dnd_class':'Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'vicious-mockery',
                'name':'Vicious Mockery',
                'components':'V',
                'level':'Cantrip',
                'level_int': 0,
                'school':'Enchantment',
                'dnd_class':'Bard'
            },
            {
                'id': uuidv4(),
                'slug':'wall-of-fire',
                'name':'Wall of Fire',
                'components':'V, S, M',
                'level':'4th-level',
                'level_int': 4,
                'school':'Evocation',
                'dnd_class':'Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'wall-of-force',
                'name':'Wall of Force',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'wall-of-ice',
                'name':'Wall of Ice',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Evocation',
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'wall-of-stone',
                'name':'Wall of Stone',
                'components':'V, S, M',
                'level':'5th-level',
                'level_int': 5,
                'school':'Evocation',
                'dnd_class':'Artificer, Artificer (Revisited), Druid, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'wall-of-thorns',
                'name':'Wall of Thorns',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Conjuration',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'warding-bond',
                'name':'Warding Bond',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Abjuration',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'water-breathing',
                'name':'Water Breathing',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Druid, Ranger, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'water-walk',
                'name':'Water Walk',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Transmutation',
                'dnd_class':'Artificer, Artificer, Artificer (Revisited), Cleric, Druid, Ranger, Sorcerer'
            },
            {
                'id': uuidv4(),
                'slug':'web',
                'name':'Web',
                'components':'V, S, M',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Conjuration',
                'dnd_class':'Artificer, Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'weird',
                'name':'Weird',
                'components':'V, S',
                'level':'9th-level',
                'level_int': 9,
                'dnd_class':'Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'wind-walk',
                'name':'Wind Walk',
                'components':'V, S, M',
                'level':'6th-level',
                'level_int': 6,
                'school':'Transmutation',
                'dnd_class':'Druid'
            },
            {
                'id': uuidv4(),
                'slug':'wind-wall',
                'name':'Wind Wall',
                'components':'V, S, M',
                'level':'3rd-level',
                'level_int': 3,
                'school':'Evocation',
                'dnd_class':'Druid, Ranger'
            },
            {
                'id': uuidv4(),
                'slug':'wish',
                'name':'Wish',
                'components':'V',
                'level':'9th-level',
                'level_int': 9,
                'school':'Conjuration',
                'dnd_class':'Sorcerer, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'witch-bolt',
                'name':'Witch Bolt',
                'components':'V, S, M',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Sorcerer, Warlock, Wizard'
            },
            {
                'id': uuidv4(),
                'slug':'word-of-recall',
                'name':'Word of Recall',
                'components':'V',
                'level':'6th-level',
                'level_int': 6,
                'school':'Conjuration',
                'dnd_class':'Cleric'
            },
            {
                'id': uuidv4(),
                'slug':'wrathful-smite',
                'name':'Wrathful Smite',
                'components':'V',
                'level':'1st-level',
                'level_int': 1,
                'school':'Evocation',
                'dnd_class':'Paladin'
            },
            {
                'id': uuidv4(),
                'slug':'zone-of-truth',
                'name':'Zone of Truth',
                'components':'V, S',
                'level':'2nd-level',
                'level_int': 2,
                'school':'Enchantment',
                'dnd_class':'Bard, Cleric, Paladin'
            }
        ])
    ))
)