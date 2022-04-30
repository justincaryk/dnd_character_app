const { v4: uuidv4 } = require('uuid')

exports.seed = knex =>
  //Deletes ALL existing entries
  knex('diseases')
    .del()
    .then(() =>
      knex('diseases').insert([
        {
          name: 'Blinding Sickness',
          source: 'PHB',
          page: 227,
          entries: {
            e: [
              "Pain grips the creature's mind, and its eyes turn milky white. The creature has disadvantage on Wisdom checks and Wisdom saving throws and is blinded.",
              'This disease can be inflicted with the contagion spell.',
            ],
          },
          id: uuidv4(),
        },
        {
          name: 'Bluerot',
          source: 'GoS',
          page: 234,
          entries: {
            e: [
              "This disease targets humanoids. While afflicted with bluerot, a victim grows grotesque blue boils on their face and back. This disease is carried by undead (including the drowned ones in Tammeraut's Fate), and victims most often acquire it through wounds caused by infected creatures. The disease's boils manifest in 1d4 hours, causing the victim's Constitution and Charisma scores to decrease by 1d4 each, to a minimum of 3. This is quickly followed by a fever and tingling in the extremities. An infected creature is vulnerable to radiant damage and gains the ability to breathe underwater.",
              "At the end of each long rest, an infected creature makes a DC 12 Constitution saving throw. On a success, the victim regains 1 point of Constitution and 1 point of Charisma lost to the disease. If the infected creature regains all the points lost to the disease, it is cured. Other effects that raise the victim's ability scores do not cure the disease. On a failed saving throw, the victim takes 18 (4d8) necrotic damage as the boils burst and spread. A creature reduced to 0 hit points by this damage cannot regain hit points until the disease is cured, though it can be stabilized as normal.",
            ],
          },
          id: uuidv4(),
        },
        {
          name: 'Cackle Fever',
          source: 'DMG',
          page: 257,
          entries: {
            e: [
              'This disease targets humanoids, although gnomes are strangely immune. While in the grips of this disease, victims frequently succumb to fits of mad laughter, giving the disease its common name and its morbid nickname: "the shrieks."',
              "Symptoms manifest 1d4 hours after infection and include fever and disorientation. The infected creature gains one level of exhaustion that can't be removed until the disease is cured.",
              'Any event that causes the infected creature great stress-including entering combat, taking damage, experiencing fear, or having a nightmare-forces the creature to make a DC 13 Constitution saving throw.',
              'On a failed save, the creature takes 5 (1d10) psychic damage and becomes incapacitated with mad laughter for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the mad laughter and the incapacitated condition on a success. Any humanoid creature that starts its turn within 10 feet of an infected creature in the throes of mad laughter must succeed on a DC 10 Constitution saving throw or also become infected with the disease. Once a creature succeeds on this save, it is immune to the mad laughter of that particular infected creature for 24 hours.',
              {
                type: 'inline',
                entries: [
                  'At the end of each long rest, an infected creature can make a DC 13 Constitution saving throw. On a successful save, the DC for this save and for the save to avoid an attack of mad laughter drops by 1d6. When the saving throw DC drops to 0, the creature recovers from the disease. A creature that fails three of these saving throws gains a randomly determined form of ',
                  {
                    type: 'link',
                    href: {
                      type: 'internal',
                      path: 'variantrules.html',
                      hash: 'madness_dmg',
                      hashPreEncoded: true,
                    },
                    text: 'indefinite madness',
                  },
                  '.',
                ],
              },
            ],
          },
          id: uuidv4(),
        },
        {
          name: 'Filth Fever',
          source: 'PHB',
          page: 227,
          entries: {
            e: [
              "A raging fever sweeps through the creature's body. The creature has disadvantage on Strength checks, Strength saving throws, and attack rolls that use Strength.",
              'This disease can be inflicted with the contagion spell.',
            ],
          },
          id: uuidv4(),
        },
        {
          name: 'Flesh Rot',
          source: 'PHB',
          page: 227,
          entries: {
            e: [
              "The creature's flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage.",
              'This disease can be inflicted with the contagion spell.',
            ],
          },
          id: uuidv4(),
        },
        {
          name: 'Mad Monkey Fever',
          source: 'ToA',
          page: 40,
          entries: {
            e: [
              "A magical mist creeps through the jungles of Chult. Contact with this thin, blue, odorless mist can infect giants and humanoids with mad monkey fever. A dispel magic spell destroys the mist in a 20-foot square starting at a point chosen by the caster within the spell's range. An encounter with this mist typically covers 1d6 such areas (400-2,400 square feet).",
              "A giant or humanoid that comes into contact with the mist must succeed on a DC 13 Constitution saving throw or become infected with mad monkey fever. The infected creature gains a random form of long-term madness (roll on the Long-Term Madness table in chapter 8 of the Dungeon Master's Guide) that manifests 1d6 hours after infection and lasts for the duration (1d10 × 10 hours). If the madness is allowed to run its full course, the creature must repeat the saving throw at the end of the madness. If the second saving throw fails, the creature suffers another bout of long-term madness (roll again on the table) that lasts for the normal duration. The madness symptoms continue until the disease ends.",
            ],
          },
          id: uuidv4(),
        },
        {
          name: 'Mindfire',
          source: 'PHB',
          page: 227,
          entries: {
            e: [
              "The creature's mind becomes feverish. The creature has disadvantage on Intelligence checks and Intelligence saving throws, and the creature behaves as if under the effects of the confusion spell during combat.",
              'This disease can be inflicted with the contagion spell.',
            ],
          },
          id: uuidv4(),
        },
        {
          name: 'Seizure',
          source: 'PHB',
          page: 227,
          entries: {
            e: [
              'The creature is overcome with shaking. The creature has disadvantage on Dexterity checks, Dexterity saving throws, and attack rolls that use Dexterity.',
              'This disease can be inflicted with the contagion spell.',
            ],
          },
          id: uuidv4(),
        },
        {
          name: 'Sewer Plague',
          source: 'DMG',
          page: 257,
          entries: {
            e: [
              'Sewer plague is a generic term for a broad category of illnesses that incubate in sewers, refuse heaps, and stagnant swamps, and which are sometimes transmitted by creatures that dwell in those areas, such as rats and otyughs.',
              'When a humanoid creature is bitten by a creature that carries the disease, or when it comes into contact with filth or offal contaminated by the disease, the creature must succeed on a DC 11 Constitution saving throw or become infected.',
              "It takes 1d4 days for sewer plague's symptoms to manifest in an infected creature. Symptoms include fatigue and cramps. The infected creature suffers one level of exhaustion, and it regains only half the normal number of hit points from spending Hit Dice and no hit points from finishing a long rest.",
              'At the end of each long rest, an infected creature must make a DC 11 Constitution saving throw. On a failed save, the character gains one level of exhaustion.',
              "On a successful save, the character's exhaustion level decreases by one level. If a successful saving throw reduces the infected creature's level of exhaustion below 1, the creature recovers from the disease.",
            ],
          },
          id: uuidv4(),
        },
        {
          name: 'Shivering Sickness',
          source: 'ToA',
          page: 40,
          entries: {
            e: [
              'Insects native to the jungles and marshes of Chult carry this disease, shivering sickness. The easiest protection against it is a coating of insect-repelling salve on all exposed skin (for the cost of insect repellent, see Buying a Special Item.',
              "A giant or humanoid that takes damage from Swarm of Insects or from giant centipede, giant scorpion, or giant wasp is exposed to the disease at the end of the encounter. Those who haven't applied insect repellent since their previous long rest are exposed to the disease when they finish a long rest.",
              'A giant or humanoid exposed to the disease must succeed on a DC 11 Constitution saving throw or become infected. A creature with natural armor has advantage on the saving throw. It takes 2d6 hours for symptoms to manifest in an infected creature. Symptoms include blurred vision, disorientation, and a sudden drop in body temperature that causes uncontrollable shivering and chattering of the teeth.',
              'Once symptoms begin, the infected creature regains only half the normal number of hit points from spending Hit Dice and no hit points from a long rest. The infected creature also has disadvantage on ability checks and attack rolls. At the end of a long rest, an infected creature repeats the saving throw, shaking off the disease on a successful save.',
            ],
          },
          id: uuidv4(),
        },
        {
          name: 'Sight Rot',
          source: 'DMG',
          page: 257,
          entries: {
            e: [
              'This painful infection causes bleeding from the eyes and eventually blinds the victim.',
              "A beast or humanoid that drinks water tainted by sight rot must succeed on a DC 15 Constitution saving throw or become infected. One day after infection, the creature's vision starts to become blurry. The creature takes a -1 penalty to attack rolls and ability checks that rely on sight. At the end of each long rest after the symptoms appear, the penalty worsens by 1. When it reaches -5, the victim is blinded until its sight is restored by magic such as lesser restoration or heal.",
              'Sight rot can be cured using a rare flower called Eyebright, which grows in some swamps. Given an hour, a character who has proficiency with an herbalism kit can turn the flower into one dose of ointment. Applied to the eyes before a long rest, one dose of it prevents the disease from worsening after that rest. After three doses, the ointment cures the disease entirely.',
            ],
          },
          id: uuidv4(),
        },
        {
          name: 'Slimy Doom',
          source: 'PHB',
          page: 227,
          entries: {
            e: [
              'The creature begins to bleed uncontrollably. The creature has disadvantage on Constitution checks and Constitution saving throws. In addition, whenever the creature takes damage, it is stunned until the end of its next turn.',
              'This disease can be inflicted with the contagion spell.',
            ],
          },
          id: uuidv4(),
        },
        {
          name: 'Throat Leeches',
          source: 'ToA',
          page: 40,
          entries: {
            e: [
              "Minuscule parasites known as throat leeches infect the water in Chult's forests, swamps, and rivers. Any giant or humanoid that swallows tainted water must succeed on a DC 12 Constitution saving throw or be infested with throat leeches. Immediate symptoms include throat inflammation and shortness of breath. After 1d6 hours, the infected character gains 1 level of exhaustion that can't be removed (except as described below) until the disease is cured. At the end of each long rest, the infected creature must repeat the saving throw. On a failed save, the creature's exhaustion increases by 1 level; on a successful save, the creature's exhaustion decreases by 1 level. If a successful saving throw reduces the infected creature's level of exhaustion below 1, the creature recovers from the disease.",
              "Explorers can avoid contracting throat leeches by drinking only rainwater or water that's been boiled or magically purified.",
            ],
          },
          id: uuidv4(),
        },
      ])
    )
