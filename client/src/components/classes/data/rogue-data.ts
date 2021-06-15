export const rgd = {
  class: {
    name: 'Rogue',
    source: 'PHB',
    page: 94,
    srd: true,
    hd: {
      number: 1,
      faces: 8,
    },
    proficiency: ['dex', 'int'],
    startingProficiencies: {
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
    startingEquipment: {
      additionalFromBackground: true,
      default: [
        '(a) a rapier or (b) a shortsword',
        '(a) a shortbow and quiver of arrows (20) or (b) a shortsword',
        "(a) a burglar's pack, (b) a dungeoneer's pack, or (c) an explorer's pack",
        "Leather armor, two daggers, and thieves' tools",
      ],
      goldAlternative: '4d4 × 10'
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
        weapons: []
      },
    },
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
    classFeatures: [
      'Expertise||1',
      'Sneak Attack||1',
      "Thieves' Cant||1",
      'Cunning Action||2',
      {
        classFeature: 'Roguish Archetype||3',
        gainSubclassFeature: true,
      },
      'Steady Aim||3',
      'Ability Score Improvement||4',
      'Uncanny Dodge||5',
      'Expertise||6',
      'Evasion||7',
      'Ability Score Improvement||8',
      {
        classFeature: 'Roguish Archetype feature||9',
        gainSubclassFeature: true,
      },
      'Ability Score Improvement||10',
      'Reliable Talent||11',
      'Ability Score Improvement||12',
      {
        classFeature: 'Roguish Archetype feature||13',
        gainSubclassFeature: true,
      },
      'Blindsense||14',
      'Slippery Mind||15',
      'Ability Score Improvement||16',
      {
        classFeature: 'Roguish Archetype feature||17',
        gainSubclassFeature: true,
      },
      'Elusive||18',
      'Ability Score Improvement||19',
      'Stroke of Luck||20',
    ],
    subclassTitle: 'Roguish Archetype',
    subclasses: [
      {
        name: 'Arcane Trickster',
        shortName: 'Arcane Trickster',
        source: 'PHB',
        page: 97,
        spellcastingAbility: 'int',
        casterProgression: '1/3',
        cantripProgression: [
          0, 0, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
        ],
        spellsKnownProgression: [
          0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13,
        ],
        additionalSpells: [
          {
            prepared: {
              '3': ['mage hand'],
            },
          },
        ],
        subclassTableGroups: [
          {
            subclasses: [
              {
                name: 'Arcane Trickster',
                source: 'PHB',
              },
            ],
            colLabels: [
              'Cantrips Known',
              'Spells Known',
            ],
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
            colLabels: [
              '1st',
              '2nd',
              '3rd',
              '4th',
            ],
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
        subclassFeatures: [
          'Arcane Trickster|Rogue||Arcane Trickster||3',
          'Magical Ambush|Rogue||Arcane Trickster||9',
          'Versatile Trickster|Rogue||Arcane Trickster||13',
          'Spell Thief|Rogue||Arcane Trickster||17',
        ],
      },
      {
        name: 'Assassin',
        shortName: 'Assassin',
        source: 'PHB',
        page: 97,
        subclassFeatures: [
          'Assassin|Rogue||Assassin||3',
          'Infiltration Expertise|Rogue||Assassin||9',
          'Impostor|Rogue||Assassin||13',
          'Death Strike|Rogue||Assassin||17',
        ],
      },
      {
        name: 'Thief',
        shortName: 'Thief',
        source: 'PHB',
        page: 97,
        srd: true,
        subclassFeatures: [
          'Thief|Rogue||Thief||3',
          'Supreme Sneak|Rogue||Thief||9',
          'Use Magic Device|Rogue||Thief||13',
          "Thief's Reflexes|Rogue||Thief||17",
        ],
      },
      {
        name: 'Inquisitive',
        shortName: 'Inquisitive',
        source: 'XGE',
        page: 45,
        subclassFeatures: [
          'Inquisitive|Rogue||Inquisitive|XGE|3',
          'Steady Eye|Rogue||Inquisitive|XGE|9',
          'Unerring Eye|Rogue||Inquisitive|XGE|13',
          'Eye for Weakness|Rogue||Inquisitive|XGE|17',
        ],
      },
      {
        name: 'Mastermind',
        shortName: 'Mastermind',
        source: 'XGE',
        page: 46,
        otherSources: [
          {
            source: 'SCAG',
            page: 135,
          },
        ],
        subclassFeatures: [
          'Mastermind|Rogue||Mastermind|XGE|3',
          'Insightful Manipulator|Rogue||Mastermind|XGE|9',
          'Misdirection|Rogue||Mastermind|XGE|13',
          'Soul of Deceit|Rogue||Mastermind|XGE|17',
        ],
      },
      {
        name: 'Scout',
        shortName: 'Scout',
        source: 'XGE',
        page: 47,
        subclassFeatures: [
          'Scout|Rogue||Scout|XGE|3',
          'Superior Mobility|Rogue||Scout|XGE|9',
          'Ambush Master|Rogue||Scout|XGE|13',
          'Sudden Strike|Rogue||Scout|XGE|17',
        ],
      },
      {
        name: 'Swashbuckler',
        shortName: 'Swashbuckler',
        source: 'XGE',
        page: 48,
        otherSources: [
          {
            source: 'SCAG',
            page: 135,
          },
        ],
        subclassFeatures: [
          'Swashbuckler|Rogue||Swashbuckler|XGE|3',
          'Panache|Rogue||Swashbuckler|XGE|9',
          'Elegant Maneuver|Rogue||Swashbuckler|XGE|13',
          'Master Duelist|Rogue||Swashbuckler|XGE|17',
        ],
      },
      {
        name: 'Phantom',
        shortName: 'Phantom',
        source: 'TCE',
        page: 62,
        subclassFeatures: [
          'Phantom|Rogue||Phantom|TCE|3',
          'Tokens of the Departed|Rogue||Phantom|TCE|9',
          'Ghost Walk|Rogue||Phantom|TCE|13',
          "Death's Friend|Rogue||Phantom|TCE|17",
        ],
      },
      {
        name: 'Soulknife',
        shortName: 'Soulknife',
        source: 'TCE',
        page: 63,
        subclassFeatures: [
          'Soulknife|Rogue||Soulknife|TCE|3',
          'Soul Blades|Rogue||Soulknife|TCE|9',
          'Psychic Veil|Rogue||Soulknife|TCE|13',
          'Rend Mind|Rogue||Soulknife|TCE|17',
        ],
      },
    ],
    fluff: [
      {
        name: 'Rogue',
        type: 'section',
        entries: [
          'Signaling for her companions to wait, a halfling creeps forward through the dungeon hall. She presses an ear to the door, then pulls out a set of tools and picks the lock in the blink of an eye. Then she disappears into the shadows as her fighter friend moves forward to kick the door open.',
          "A human lurks in the shadows of an alley while his accomplice prepares for her part in the ambush. When their target—a notorious slaver—passes the alleyway, the accomplice cries out, the slaver comes to investigate, and the assassin's blade cuts his throat before he can make a sound.",
          "Suppressing a giggle, a gnome waggles her fingers and magically lifts the key ring from the guard's belt. In a moment, the keys are in her hand, the cell door is open, and she and her companions are free to make their escape.",
          "Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
          {
            type: 'entries',
            name: 'Skill and Precision',
            entries: [
              'Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.',
              'When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent down with a barrage of attacks. Rogues have an almost supernatural knack for avoiding danger, and a few learn magical tricks to supplement their other abilities.',
            ],
          },
          {
            type: 'entries',
            name: 'A Shady Living',
            entries: [
              "Every town and city has its share of rogues. Most of them live up to the worst stereotypes of the class, making a living as burglars, assassins, cutpurses, and con artists. Often, these scoundrels are organized into thieves' guilds or crime families. Plenty of rogues operate independently, but even they sometimes recruit apprentices to help them in their scams and heists. A few rogues make an honest living as locksmiths, investigators, or exterminators, which can be a dangerous job in a world where dire rats—and wererats—haunt the sewers.",
              'As adventurers, rogues fall on both sides of the law. Some are hardened criminals who decide to seek their fortune in treasure hoards, while others take up a life of adventure to escape from the law. Some have learned and perfected their skills with the explicit purpose of infiltrating ancient ruins and hidden crypts in search of treasure.',
            ],
          },
          {
            type: 'entries',
            name: 'Creating a Rogue',
            entries: [
              "As you create your rogue character, consider the character's relationship to the law. Do you have a criminal past—or present? Are you on the run from the law or from an angry thieves' guild master? Or did you leave your guild in search of bigger risks and bigger rewards? Is it greed that drives you in your adventures, or some other desire or ideal?",
              'What was the trigger that led you away from your previous life? Did a great con or heist gone terribly wrong cause you to reevaluate your career? Maybe you were lucky and a successful robbery gave you the coin you needed to escape the squalor of your life. Did wanderlust finally call you away from your home? Perhaps you suddenly found yourself cut off from your family or your mentor, and you had to find a new means of support. Or maybe you made a new friend—another member of your adventuring party—who showed you new possibilities for earning a living and employing your particular talents.',
              {
                type: 'entries',
                name: 'Quick Build',
                entries: [
                  'You can make a rogue quickly by following these suggestions. First, Dexterity should be your highest ability score. Make Intelligence your next-highest if you want to excel at Investigation or plan to take up the Arcane Trickster archetype. Choose Charisma instead if you plan to emphasize deception and social interaction. Second, choose the charlatan background.',
                ],
              },
            ],
          },
        ],
        page: 94,
        source: 'PHB',
      },
      {
        type: 'section',
        entries: [
          {
            type: 'quote',
            entries: [
              "People forget that the entire point of venturing down into a dusty tomb is to bring back the prizes hidden away there. Fighting is for fools. Dead men can't spend their fortunes.",
            ],
            by: 'Barnabas Bladecutter',
          },
          "When brute force won't get the job done, or when magic isn't available or appropriate, the rogue rises to the fore. With skills tied to stealth, subterfuge, and trickery, rogues can get into and out of trouble in ways that few other characters can emulate.",
          'Some rogues who turn to adventuring are former criminals who have decided that dodging monsters is preferable to remaining one step ahead of the law. Others are professional killers in search of a profitable application of their talents between contracts. Some simply love the thrill of overcoming any challenge that stands in their way.',
          "On adventures, a rogue is likely to mix an outwardly cautious approach—few rogues enjoy combat—with a ravenous hunger for loot. Most of the time, in a rogue's mind, taking up arms against a creature is not about killing the creature but about becoming the new owner of its treasure.",
          'The following sections explore certain facets of what it means to be a rogue, which you can use to add depth to your character.',
          {
            type: 'entries',
            name: 'Guilty Pleasures',
            entries: [
              'Most of what rogues do revolves around obtaining treasure and preventing others from doing the same. Little gets in the way of attaining those goals, except that many rogues are enticed away from that path by a compulsion that clouds their thinking—an irresistible need that must be satisfied, even if doing so is risky.',
              "A rogue's guilty pleasure could be the acquisition of a physical item, something to be experienced, or a way of conducting oneself at certain times. One rogue might not be able to pass up any loot made of silver, for instance, even if said loot is hanging around the neck of a castle guard. Another one can't go through a day in the city without lifting a purse or two, just to keep in practice.",
              "What's the one form of temptation that your rogue character can't resist when the opportunity presents itself, even if giving into it might mean trouble for you and your companions?",
              {
                type: 'table',
                caption: 'Guilty Pleasures',
                colLabels: ['d6', 'Pleasure'],
                colStyles: ['col-1 text-center', 'col-11'],
                rows: [
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 1,
                      },
                    },
                    'Large gems',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 2,
                      },
                    },
                    'A smile from a pretty face',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 3,
                      },
                    },
                    'A new ring for your finger',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 4,
                      },
                    },
                    "The chance to deflate someone's ego",
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 5,
                      },
                    },
                    'The finest food and drink',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 6,
                      },
                    },
                    'Adding to your collection of exotic coins',
                  ],
                ],
              },
            ],
          },
          {
            type: 'entries',
            name: 'Adversaries',
            entries: [
              "Naturally, those who enforce the law are bound to come up against those who break it, and it's the rare rogue who isn't featured on at least one wanted poster. Beyond that, it's in the nature of their profession that rogues often come into contact with criminal elements, whether out of choice or necessity. Some of those people can be adversaries too, and they're likely to be harder to deal with than the average member of the city watch.",
              "If your character's backstory doesn't already include a personage of this sort, you could work with your DM to come up with a reason why an adversary has appeared in your life. Perhaps you've been the subject of scrutiny for a while from someone who wants to use you for nefarious purposes and has just now become known to you. Such an incident could be the basis for an upcoming adventure.",
              'Does your rogue character have an adversary who also happens to be a criminal? If so, how is this relationship affecting your life?',
              {
                type: 'table',
                caption: 'Adversaries',
                colLabels: ['d6', 'Adversary'],
                colStyles: ['col-1 text-center', 'col-11'],
                rows: [
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 1,
                      },
                    },
                    'The pirate captain on whose ship you once served; what you call moving on, the captain calls mutiny',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 2,
                      },
                    },
                    'A master spy to whom you unwittingly fed bad information, which led to the assassination of the wrong target',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 3,
                      },
                    },
                    "The master of the local thieves' guild, who wants you to join the organization or leave town",
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 4,
                      },
                    },
                    'An art collector who uses illegal means to acquire masterpieces',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 5,
                      },
                    },
                    'A fence who uses you as a messenger to set up illicit meetings',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 6,
                      },
                    },
                    'The proprietor of an illegal pit fighting arena where you once took bets',
                  ],
                ],
              },
            ],
          },
          {
            type: 'entries',
            name: 'Benefactor',
            entries: [
              "Few rogues make it far in life before needing someone's help, which means thereafter owing that benefactor a significant debt.",
              "If your character's backstory doesn't already include a personage of this sort, you could work with your DM to determine why a benefactor has appeared in your life. Perhaps you benefited from something your benefactor did for you without realizing who was responsible, and that person has now just become known to you. Who helped you in the past, whether or not you knew it at the time, and what do you owe that person as recompense?",
              {
                type: 'table',
                caption: 'Benefactors',
                colLabels: ['d6', 'Benefactor'],
                colStyles: ['col-1 text-center', 'col-11'],
                rows: [
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 1,
                      },
                    },
                    'A smuggler kept you from getting caught but lost a valuable shipment in doing so. Now you owe that person an equally valuable favor.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 2,
                      },
                    },
                    'The Beggar King has hidden you from your pursuers many times, in return for future considerations.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 3,
                      },
                    },
                    'A magistrate once kept you out of jail in return for information on a powerful crime lord.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 4,
                      },
                    },
                    'Your parents used their savings to bail you out of trouble in your younger days and are now destitute.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 5,
                      },
                    },
                    "A dragon didn't eat you when it had a chance, and in return you promised to set aside choice pieces of treasure for it.",
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 6,
                      },
                    },
                    'A druid once helped you out of a tight spot; now any random animal you see could be that benefactor, perhaps come to claim a return favor.',
                  ],
                ],
              },
            ],
          },
        ],
        page: 44,
        source: 'XGE',
      },
    ],
  },
  classFeature: [
    {
      name: 'Expertise',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 1,
      entries: [
        "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
        "At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit.",
      ],
    },
    {
      name: 'Sneak Attack',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 1,
      entries: [
        "Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.",
        "You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.",
        'The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.',
      ],
    },
    {
      name: "Thieves' Cant",
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 1,
      entries: [
        "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.",
        "In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.",
      ],
    },
    {
      name: 'Cunning Action',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 2,
      entries: [
        'Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.',
      ],
    },
    {
      name: 'Roguish Archetype',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 3,
      entries: [
        'At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities from the list of available archetypes. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.',
      ],
    },
    {
      name: 'Steady Aim',
      source: 'TCE',
      page: 62,
      className: 'Rogue',
      classSource: 'PHB',
      level: 3,
      isClassFeatureVariant: true,
      entries: [
        '3rd-level rogue optional class features',
        "As a bonus action, you give yourself advantage on your next attack roll on the current turn. You can use this bonus action only if you haven't moved during this turn, and after you use the bonus action, your speed is 0 until the end of the current turn.",
      ],
    },
    {
      name: 'Ability Score Improvement',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 4,
      entries: [
        "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        'If your DM allows the use of feats, you may instead take a feat.',
      ],
    },
    {
      name: 'Uncanny Dodge',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 5,
      entries: [
        "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
      ],
    },
    {
      name: 'Expertise',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 6,
      entries: [
        "At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain the benefit of Expertise.",
      ],
    },
    {
      name: 'Evasion',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 7,
      entries: [
        "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
      ],
    },
    {
      name: 'Ability Score Improvement',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 8,
      entries: [
        "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        'If your DM allows the use of feats, you may instead take a feat.',
      ],
    },
    {
      name: 'Roguish Archetype feature',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 9,
      entries: [
        'At 9th level, you gain a feature granted by your Roguish Archetype.',
      ],
    },
    {
      name: 'Ability Score Improvement',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 10,
      entries: [
        "When you reach 10th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        'If your DM allows the use of feats, you may instead take a feat.',
      ],
    },
    {
      name: 'Reliable Talent',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 11,
      entries: [
        'By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.',
      ],
    },
    {
      name: 'Ability Score Improvement',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 12,
      entries: [
        "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        'If your DM allows the use of feats, you may instead take a feat.',
      ],
    },
    {
      name: 'Roguish Archetype feature',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 13,
      entries: [
        'At 13th level, you gain a feature granted by your Roguish Archetype.',
      ],
    },
    {
      name: 'Blindsense',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 14,
      entries: [
        'Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.',
      ],
    },
    {
      name: 'Slippery Mind',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 15,
      entries: [
        'By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.',
      ],
    },
    {
      name: 'Ability Score Improvement',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 16,
      entries: [
        "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        'If your DM allows the use of feats, you may instead take a feat.',
      ],
    },
    {
      name: 'Roguish Archetype feature',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 17,
      entries: [
        'At 17th level, you gain a feature granted by your Roguish Archetype.',
      ],
    },
    {
      name: 'Elusive',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 18,
      entries: [
        "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated.",
      ],
    },
    {
      name: 'Ability Score Improvement',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 19,
      entries: [
        "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        'If your DM allows the use of feats, you may instead take a feat.',
      ],
    },
    {
      name: 'Stroke of Luck',
      source: 'PHB',
      page: 94,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      level: 20,
      entries: [
        'At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.',
        "Once you use this feature, you can't use it again until you finish a short or long rest.",
      ],
    },
  ],
  subclassFeature: [
    {
      name: 'Arcane Trickster',
      source: 'PHB',
      page: 97,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Arcane Trickster',
      subclassSource: 'PHB',
      level: 3,
      entries: [
        'Some rogues enhance their fine-honed skills of stealth and agility with magic, learning tricks of enchantment and illusion. These rogues include pickpockets and burglars, but also pranksters, mischief-makers, and a significant number of adventurers.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Spellcasting|Rogue||Arcane Trickster||3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Mage Hand Legerdemain|Rogue||Arcane Trickster||3',
        },
      ],
    },
    {
      name: 'Mage Hand Legerdemain',
      source: 'PHB',
      page: 97,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Arcane Trickster',
      subclassSource: 'PHB',
      level: 3,
      header: 1,
      entries: [
        'Starting at 3rd level, when you cast mage hand, you can make the spectral hand invisible, and you can perform the following additional tasks with it:',
        {
          type: 'list',
          items: [
            'You can stow one object the hand is holding in a container worn or carried by another creature.',
            'You can retrieve an object in a container worn or carried by another creature.',
            "You can use thieves' tools to pick locks and disarm traps at range.",
          ],
        },
        "You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature's Wisdom (Perception) check.",
        'In addition, you can use the bonus action granted by your Cunning Action to control the hand.',
      ],
    },
    {
      name: 'Spellcasting',
      source: 'PHB',
      page: 97,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Arcane Trickster',
      subclassSource: 'PHB',
      level: 3,
      header: 1,
      entries: [
        'When you reach 3rd level, you gain the ability to cast spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the wizard spell list.',
        {
          type: 'entries',
          entries: [
            {
              type: 'entries',
              name: 'Cantrips',
              entries: [
                'You learn three cantrips: mage hand and two other cantrips of your choice from the wizard spell list. You learn another wizard cantrip of your choice at 10th level.',
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
                "The Arcane Trickster Spellcasting table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                'For example, if you know the 1st-level spell charm person and have a 1st-level and a 2nd-level spell slot available, you can cast charm person using either slot.',
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
                'You know three 1st-level wizard spells of your choice, two of which you must choose from the enchantment and illusion spells on the wizard spell list.',
                'The Spells Known column of the Arcane Trickster Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an enchantment or illusion spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.',
                'The spells you learn at 8th, 14th, and 20th level can come from any school of magic.',
                "Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an enchantment or illusion spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic.",
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
                'Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.',
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
          ],
        },
      ],
    },
    {
      name: 'Magical Ambush',
      source: 'PHB',
      page: 97,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Arcane Trickster',
      subclassSource: 'PHB',
      level: 9,
      header: 2,
      entries: [
        'Starting at 9th level, if you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn.',
      ],
    },
    {
      name: 'Versatile Trickster',
      source: 'PHB',
      page: 97,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Arcane Trickster',
      subclassSource: 'PHB',
      level: 13,
      header: 2,
      entries: [
        'At 13th level, you gain the ability to distract targets with your mage hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn.',
      ],
    },
    {
      name: 'Spell Thief',
      source: 'PHB',
      page: 97,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Arcane Trickster',
      subclassSource: 'PHB',
      level: 17,
      header: 2,
      entries: [
        'At 17th level, you gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.',
        "Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn't need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can't cast that spell until the 8 hours have passed.",
        "Once you use this feature, you can't use it again until you finish a long rest.",
      ],
    },
    {
      name: 'Assassin',
      source: 'PHB',
      page: 97,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Assassin',
      subclassSource: 'PHB',
      level: 3,
      entries: [
        'You focus your training on the grim art of death. Those who adhere to this archetype are diverse - hired killers, spies, bounty hunters, and even specially anointed priests trained to exterminate the enemies of their deity. Stealth, poison, and disguise help you eliminate your foes with deadly efficiency.',
        'Your archetype grants you features at 3rd level and then again at 9th, 13th, and 17th level.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Assassinate|Rogue||Assassin||3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Bonus Proficiencies|Rogue||Assassin||3',
        },
      ],
    },
    {
      name: 'Assassinate',
      source: 'PHB',
      page: 97,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Assassin',
      subclassSource: 'PHB',
      level: 3,
      header: 1,
      entries: [
        "Starting at 3rd level, you are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.",
      ],
    },
    {
      name: 'Bonus Proficiencies',
      source: 'PHB',
      page: 97,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Assassin',
      subclassSource: 'PHB',
      level: 3,
      header: 1,
      entries: [
        "When you choose this archetype at 3rd level, you gain proficiency with the disguise kitand the poisoner's kit.",
      ],
    },
    {
      name: 'Infiltration Expertise',
      source: 'PHB',
      page: 97,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Assassin',
      subclassSource: 'PHB',
      level: 9,
      header: 2,
      entries: [
        "Starting at 9th level, you can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can't establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and official-looking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants.",
        'Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to.',
      ],
    },
    {
      name: 'Impostor',
      source: 'PHB',
      page: 97,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Assassin',
      subclassSource: 'PHB',
      level: 13,
      header: 2,
      entries: [
        "At 13th level, you gain the ability to unerringly mimic another person's speech, writing, and behavior. You must spend at least three hours studying these three components of the person's behavior, listening to speech, examining handwriting, and observing mannerism.",
        'Your ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection.',
      ],
    },
    {
      name: 'Death Strike',
      source: 'PHB',
      page: 97,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Assassin',
      subclassSource: 'PHB',
      level: 17,
      header: 2,
      entries: [
        'Starting at 17th level, you become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.',
      ],
    },
    {
      name: 'Thief',
      source: 'PHB',
      page: 97,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Thief',
      subclassSource: 'PHB',
      level: 3,
      entries: [
        "You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ.",
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Fast Hands|Rogue||Thief||3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Second-Story Work|Rogue||Thief||3',
        },
      ],
    },
    {
      name: 'Fast Hands',
      source: 'PHB',
      page: 97,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Thief',
      subclassSource: 'PHB',
      level: 3,
      header: 1,
      entries: [
        "Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action.",
      ],
    },
    {
      name: 'Second-Story Work',
      source: 'PHB',
      page: 97,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Thief',
      subclassSource: 'PHB',
      level: 3,
      header: 1,
      entries: [
        'When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.',
        'In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.',
      ],
    },
    {
      name: 'Supreme Sneak',
      source: 'PHB',
      page: 97,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Thief',
      subclassSource: 'PHB',
      level: 9,
      header: 2,
      entries: [
        'Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.',
      ],
    },
    {
      name: 'Use Magic Device',
      source: 'PHB',
      page: 97,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Thief',
      subclassSource: 'PHB',
      level: 13,
      header: 2,
      entries: [
        'By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.',
      ],
    },
    {
      name: "Thief's Reflexes",
      source: 'PHB',
      page: 97,
      srd: true,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Thief',
      subclassSource: 'PHB',
      level: 17,
      header: 2,
      entries: [
        "When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.",
      ],
    },
    {
      name: 'Phantom',
      source: 'TCE',
      page: 62,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Phantom',
      subclassSource: 'TCE',
      level: 3,
      entries: [
        "Many rogues walk a fine line between life and death, risking their own lives and taking the lives of others. While adventuring on that line, some rogues discover a mystical connection to death itself. These rogues take knowledge from the dead and become immersed in negative energy, eventually becoming like ghosts. Thieves' guilds value them as highly effective information gatherers and spies.",
        "Many shadar-kai of the Shadowfell are masters of these macabre techniques, and some are willing to teach this path. In places like Thay in the Forgotten Realms and Karrnath in Eberron, where many necromancers practice their craft, a Phantom can become a wizard's confidant and right hand. In temples of gods of death, the Phantom might work as an agent to track down those who try to cheat death and to recover knowledge that might otherwise be lost to the grave.",
        "How did you discover this grim power? Did you sleep in a graveyard and awaken to your new abilities? Or did you cultivate them in a temple or thieves' guild dedicated to a deity of death?",
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Whispers of the Dead|Rogue||Phantom|TCE|3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Wails from the Grave|Rogue||Phantom|TCE|3',
        },
      ],
    },
    {
      name: 'Wails from the Grave',
      source: 'TCE',
      page: 62,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Phantom',
      subclassSource: 'TCE',
      level: 3,
      header: 1,
      entries: [
        '3rd-level Phantom feature',
        "As you nudge someone closer to the grave, you can channel the power of death to harm someone else as well. Immediately after you deal your Sneak Attack damage to a creature on your turn, you can target a second creature that you can see within 30 feet of the first creature. Roll half the number of Sneak Attack dice for your level (round up), and the second creature takes necrotic damage equal to the roll's total, as wails of the dead sound around them for a moment.",
        'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
      ],
    },
    {
      name: 'Whispers of the Dead',
      source: 'TCE',
      page: 62,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Phantom',
      subclassSource: 'TCE',
      level: 3,
      header: 1,
      entries: [
        '3rd-level Phantom feature',
        'Echoes of those who have died cling to you. Whenever you finish a short or long rest, you can choose one skill or tool proficiency that you lack and gain it, as a ghostly presence shares its knowledge with you. You lose this proficiency when you use this feature to choose a different proficiency that you lack.',
      ],
    },
    {
      name: 'Tokens of the Departed',
      source: 'TCE',
      page: 62,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Phantom',
      subclassSource: 'TCE',
      level: 9,
      header: 2,
      entries: [
        '9th-level Phantom feature',
        "When a life ends in your presence, you're able to snatch a token from the departing soul, a sliver of its life essence that takes physical form: as a reaction when a creature you can see dies within 30 feet of you, you can open your free hand and cause a Tiny trinket to appear there, a soul trinket. The DM determines the trinket's form or has you roll on the Trinkets table in the Player's Handbook to generate it. You can have a maximum number of soul trinkets equal to your proficiency bonus, and you can't create one while at your maximum.",
        'You can use soul trinkets in the following ways:',
        {
          type: 'list',
          items: [
            'While a soul trinket is on your person, you have advantage on death saving throws and Constitution saving throws, for your vitality is enhanced by the life essence within the object.',
            "When you deal Sneak Attack damage on your turn, you can destroy one of your soul trinkets that's on your person and then immediately use Wails from the Grave, without expending a use of that feature.",
            "As an action, you can destroy one of your soul trinkets, no matter where it's located. When you do so, you can ask the spirit associated with the trinket one question. The spirit appears to you and answers in a language it knew in life. It's under no obligation to be truthful, and it answers as concisely as possible, eager to be free. The spirit knows only what it knew in life, as determined by the DM.",
          ],
        },
      ],
    },
    {
      name: 'Ghost Walk',
      source: 'TCE',
      page: 62,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Phantom',
      subclassSource: 'TCE',
      level: 13,
      header: 2,
      entries: [
        '13th-level Phantom feature',
        'You can phase partially into the realm of the dead, becoming like a ghost. As a bonus action, you assume a spectral form. While in this form, you have a flying speed of 10 feet, you can hover, and attack rolls have disadvantage against you. You can also move through creatures and objects as if they were difficult terrain, but you take 1d10 force damage if you end your turn inside a creature or an object.',
        'You stay in this form for 10 minutes or until you end it as a bonus action. To use this feature again, you must finish a long rest or destroy one of your soul trinkets as part of the bonus action you use to activate Ghost Walk.',
      ],
    },
    {
      name: "Death's Friend",
      source: 'TCE',
      page: 62,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Phantom',
      subclassSource: 'TCE',
      level: 17,
      header: 2,
      entries: [
        '17th-level Phantom feature',
        'Your association with death has become so close that you gain the following benefits:',
        {
          type: 'list',
          items: [
            'When you use your Wails from the Grave, you can deal the necrotic damage to both the first and the second creature.',
            "At the end of a long rest, a soul trinket appears in your hand if you don't have any soul trinkets, as the spirits of the dead are drawn to you.",
          ],
        },
      ],
    },
    {
      name: 'Soulknife',
      source: 'TCE',
      page: 63,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Soulknife',
      subclassSource: 'TCE',
      level: 3,
      entries: [
        "Most assassins strike with physical weapons, and many burglars and spies use thieves' tools to infiltrate secure locations. In contrast, a Soulknife strikes and infiltrates with the mind, cutting through barriers both physical and psychic. These rogues discover psionic power within themselves and channel it to do their roguish work. They find easy employment as members of thieves' guilds, though they are often mistrusted by rogues who are leery of anyone using strange mind powers to conduct their business. Most governments would also be happy to employ a Soulknife as a spy.",
        'Amid the trees of ancient forests on the Material Plane and in the Feywild, some wood elves walk the path of the Soulknife, serving as silent, lethal guardians of their woods. In the endless war among the gith, a githzerai is encouraged to become a Soulknife when stealth is required against the githyanki foe.',
        'As a Soulknife, your psionic abilities might have haunted you since you were a child, only revealing their full potential as you experienced the stress of adventure. Or you might have sought out a reclusive order of psychic adepts and spent years learning how to manifest your power.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Psionic Power|Rogue||Soulknife|TCE|3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Psychic Blades|Rogue||Soulknife|TCE|3',
        },
      ],
    },
    {
      name: 'Psionic Power',
      source: 'TCE',
      page: 63,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Soulknife',
      subclassSource: 'TCE',
      level: 3,
      header: 1,
      entries: [
        '3rd-level Soulknife feature',
        'You harbor a wellspring of psionic energy within yourself. This energy is represented by your Psionic Energy dice, which are each a d6. You have a number of these dice equal to twice your proficiency bonus, and they fuel various psionic powers you have, which are detailed below.',
        "Some of your powers expend the Psionic Energy die they use, as specified in a power's description, and you can't use a power if it requires you to use a die when your dice are all expended. You regain all your expended Psionic Energy dice when you finish a long rest. In addition, as a bonus action, you can regain one expended Psionic Energy die, but you can't do so again until you finish a short or long rest.",
        'When you reach certain levels in this class, the size of your Psionic Energy dice increases: at 5th level (d8), 11th level (d10), and 17th level (d12).',
        'The powers below use your Psionic Energy dice.',
        {
          type: 'options',
          entries: [
            {
              type: 'refSubclassFeature',
              subclassFeature: 'Psi-Bolstered Knack|Rogue|TCE|Soulknife|TCE|3',
            },
            {
              type: 'refSubclassFeature',
              subclassFeature: 'Psychic Whispers|Rogue|TCE|Soulknife|TCE|3',
            },
          ],
        },
      ],
    },
    {
      name: 'Psychic Blades',
      source: 'TCE',
      page: 63,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Soulknife',
      subclassSource: 'TCE',
      level: 3,
      header: 1,
      entries: [
        '3rd-level Soulknife feature',
        'You can manifest your psionic power as shimmering blades of psychic energy. Whenever you take the Attack action, you can manifest a psychic blade from your free hand and make the attack with that blade. This magic blade is a simple melee weapon with the finesse and thrown properties. It has a normal range of 60 feet and no long range, and on a hit, it deals psychic damage equal to 1d6 plus the ability modifier you used for the attack roll. The blade vanishes immediately after it hits or misses its target, and it leaves no mark on its target if it deals damage.',
        'After you attack with the blade, you can make a melee or ranged weapon attack with a second psychic blade as a bonus action on the same turn, provided your other hand is free to create it. The damage die of this bonus attack is 1d4, instead of 1d6.',
      ],
    },
    {
      name: 'Soul Blades',
      source: 'TCE',
      page: 63,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Soulknife',
      subclassSource: 'TCE',
      level: 9,
      header: 2,
      entries: [
        '9th-level Soulknife feature',
        'Your Psychic Blades are now an expression of your psi-suffused soul, giving you these powers that use your Psionic Energy dice:',
        {
          type: 'options',
          entries: [
            {
              type: 'refSubclassFeature',
              subclassFeature: 'Homing Strikes|Rogue|TCE|Soulknife|TCE|9',
            },
            {
              type: 'refSubclassFeature',
              subclassFeature:
                'Psychic Teleportation|Rogue|TCE|Soulknife|TCE|9',
            },
          ],
        },
      ],
    },
    {
      name: 'Psychic Veil',
      source: 'TCE',
      page: 63,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Soulknife',
      subclassSource: 'TCE',
      level: 13,
      header: 2,
      entries: [
        '13th-level Soulknife feature',
        'You can weave a veil of psychic static to mask yourself. As an action, you can magically become invisible, along with anything you are wearing or carrying, for 1 hour or until you dismiss this effect (no action required). This invisibility ends early immediately after you deal damage to a creature or you force a creature to make a saving throw.',
        "Once you use this feature, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to use this feature again.",
      ],
    },
    {
      name: 'Rend Mind',
      source: 'TCE',
      page: 63,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Soulknife',
      subclassSource: 'TCE',
      level: 17,
      header: 2,
      entries: [
        '17th-level Soulknife feature',
        "You can sweep your Psychic Blades directly through a creature's mind. When you use your Psychic Blades to deal Sneak Attack damage to a creature, you can force that target to make a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Dexterity modifier). If the save fails, the target is stunned for 1 minute. The stunned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        "Once you use this feature, you can't do so again until you finish a long rest, unless you expend three Psionic Energy dice to use it again.",
      ],
    },
    {
      name: 'Inquisitive',
      source: 'XGE',
      page: 45,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Inquisitive',
      subclassSource: 'XGE',
      level: 3,
      entries: [
        'As an archetypal Inquisitive, you excel at rooting out secrets and unraveling mysteries. You rely on your sharp eye for detail, but also on your finely honed ability to read the words and deeds of other creatures to determine their true intent. You excel at defeating creatures that hide among and prey upon ordinary folk, and your mastery of lore and your keen deductions make you well equipped to expose and end hidden evils.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Ear for Deceit|Rogue||Inquisitive|XGE|3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Eye for Detail|Rogue||Inquisitive|XGE|3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Insightful Fighting|Rogue||Inquisitive|XGE|3',
        },
      ],
    },
    {
      name: 'Ear for Deceit',
      source: 'XGE',
      page: 45,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Inquisitive',
      subclassSource: 'XGE',
      level: 3,
      header: 1,
      entries: [
        'When you choose this archetype at 3rd level, you develop a talent for picking out lies. Whenever you make a Wisdom (Insight) check to determine whether a creature is lying, treat a roll of 7 or lower on the d20 as an 8.',
      ],
    },
    {
      name: 'Eye for Detail',
      source: 'XGE',
      page: 45,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Inquisitive',
      subclassSource: 'XGE',
      level: 3,
      header: 1,
      entries: [
        'Starting at 3rd level, you can use a bonus action to make a Wisdom (Perception) check to spot a hidden creature or object or to make an Intelligence (Investigation) check to uncover or decipher clues.',
      ],
    },
    {
      name: 'Insightful Fighting',
      source: 'XGE',
      page: 45,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Inquisitive',
      subclassSource: 'XGE',
      level: 3,
      header: 1,
      entries: [
        "At 3rd level, you gain the ability to decipher an opponent's tactics and develop a counter to them. As a bonus action, you can make a Wisdom (Insight) check against a creature you can see that isn't incapacitated, contested by the target's Charisma (Deception) check. If you succeed, you can use your Sneak Attack against that target even if you don't have advantage on the attack roll, but not if you have disadvantage on it.",
        'This benefit lasts for 1 minute or until you successfully use this feature against a different target.',
      ],
    },
    {
      name: 'Steady Eye',
      source: 'XGE',
      page: 45,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Inquisitive',
      subclassSource: 'XGE',
      level: 9,
      header: 2,
      entries: [
        'Starting at 9th level, you have advantage on any Wisdom (Perception) or Intelligence (Investigation) check if you move no more than half your speed on the same turn.',
      ],
    },
    {
      name: 'Unerring Eye',
      source: 'XGE',
      page: 45,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Inquisitive',
      subclassSource: 'XGE',
      level: 13,
      header: 2,
      entries: [
        "Beginning at 13th level, your senses are almost impossible to foil. As an action, you sense the presence of illusions, shapechangers not in their original form, and other magic designed to deceive the senses within 30 feet of you, provided you aren't blinded or deafened. You sense that an effect is attempting to trick you, but you gain no insight into what is hidden or into its true nature.",
        'You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.',
      ],
    },
    {
      name: 'Eye for Weakness',
      source: 'XGE',
      page: 45,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Inquisitive',
      subclassSource: 'XGE',
      level: 17,
      header: 2,
      entries: [
        "At 17th level, you learn to exploit a creature's weaknesses by carefully studying its tactics and movement. While your Insightful Fighting feature applies to a creature, your Sneak Attack damage against that creature increases by 3d6.",
      ],
    },
    {
      name: 'Mastermind',
      source: 'XGE',
      page: 46,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Mastermind',
      subclassSource: 'XGE',
      level: 3,
      entries: [
        'Your focus is on people and on the influence and secrets they have. Many spies, courtiers, and schemers follow this archetype, leading lives of intrigue. Words are your weapons as often as knives or poison, and secrets and favors are some of your favorite treasures.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Master of Intrigue|Rogue||Mastermind|XGE|3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Master of Tactics|Rogue||Mastermind|XGE|3',
        },
      ],
    },
    {
      name: 'Master of Intrigue',
      source: 'XGE',
      page: 46,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Mastermind',
      subclassSource: 'XGE',
      level: 3,
      header: 1,
      entries: [
        'When you choose this archetype at 3rd level, you gain proficiency with the disguise Kit, the forgery kit, and one gaming set of your choice. You also learn two languages of your choice.',
        'Additionally, you can unerringly mimic the speech patterns and accent of a creature that you hear speak for at least 1 minute, enabling you to pass yourself off as a native speaker of a particular land, provided that you know the language.',
      ],
    },
    {
      name: 'Master of Tactics',
      source: 'XGE',
      page: 46,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Mastermind',
      subclassSource: 'XGE',
      level: 3,
      header: 1,
      entries: [
        'Starting at 3rd level, you can use the Help action as a bonus action. Additionally, when you use the Help action to aid an ally in attacking a creature, the target of that attack can be within 30 feet of you, rather than within 5 feet of you, if the target can see or hear you.',
      ],
    },
    {
      name: 'Insightful Manipulator',
      source: 'XGE',
      page: 46,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Mastermind',
      subclassSource: 'XGE',
      level: 9,
      header: 2,
      entries: [
        'Starting at 9th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:',
        {
          type: 'list',
          items: [
            'Intelligence score',
            'Wisdom score',
            'Charisma score',
            'Class levels (if any)',
          ],
        },
        "At the DM's option, you might also realize you know a piece of the creature's history or one of its personality traits, if it has any.",
      ],
    },
    {
      name: 'Misdirection',
      source: 'XGE',
      page: 46,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Mastermind',
      subclassSource: 'XGE',
      level: 13,
      header: 2,
      entries: [
        'Beginning at 13th level, you can sometimes cause another creature to suffer an attack meant for you. When you are targeted by an attack while a creature within 5 feet of you is granting you cover against that attack, you can use your reaction to have the attack target that creature instead of you.',
      ],
    },
    {
      name: 'Soul of Deceit',
      source: 'XGE',
      page: 46,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Mastermind',
      subclassSource: 'XGE',
      level: 17,
      header: 2,
      entries: [
        "Starting at 17th level, your thoughts can't be read by telepathy or other means, unless you allow it. You can present false thoughts by succeeding on a Charisma (Deception) check contested by the mind reader's Wisdom (Insight) check.",
        "Additionally, no matter what you say, magic that would determine if you are telling the truth indicates you are being truthful if you so choose, and you can't be compelled to tell the truth by magic.",
      ],
    },
    {
      name: 'Scout',
      source: 'XGE',
      page: 47,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Scout',
      subclassSource: 'XGE',
      level: 3,
      entries: [
        'You are skilled in stealth and surviving far from the streets of a city, allowing you to scout ahead of your companions during expeditions. Rogues who embrace this archetype are at home in the wilderness and among barbarians and rangers, and many Scouts serve as the eyes and ears of war bands. Ambusher, spy, bounty hunter—these are just a few of the roles that Scouts assume as they range the world.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Skirmisher|Rogue||Scout|XGE|3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Survivalist|Rogue||Scout|XGE|3',
        },
      ],
    },
    {
      name: 'Skirmisher',
      source: 'XGE',
      page: 47,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Scout',
      subclassSource: 'XGE',
      level: 3,
      header: 1,
      entries: [
        "Starting at 3rd level, you are difficult to pin down during a fight. You can move up to half your speed as a reaction when an enemy ends its turn within 5 feet of you. This movement doesn't provoke opportunity attacks.",
      ],
    },
    {
      name: 'Survivalist',
      source: 'XGE',
      page: 47,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Scout',
      subclassSource: 'XGE',
      level: 3,
      header: 1,
      entries: [
        "When you choose this archetype at 3rd level, you gain proficiency in the Nature and Survival skills if you don't already have it. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies.",
      ],
    },
    {
      name: 'Superior Mobility',
      source: 'XGE',
      page: 47,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Scout',
      subclassSource: 'XGE',
      level: 9,
      header: 2,
      entries: [
        'At 9th level, your walking speed increases by 10 feet. If you have a climbing or swimming speed, this increase applies to that speed as well.',
      ],
    },
    {
      name: 'Ambush Master',
      source: 'XGE',
      page: 47,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Scout',
      subclassSource: 'XGE',
      level: 13,
      header: 2,
      entries: [
        'Starting at 13th level, you excel at leading ambushes and acting first in a fight.',
        'You have advantage on initiative rolls. In addition, the first creature you hit during the first round of a combat becomes easier for you and others to strike; attack rolls against that target have advantage until the start of your next turn.',
      ],
    },
    {
      name: 'Sudden Strike',
      source: 'XGE',
      page: 47,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Scout',
      subclassSource: 'XGE',
      level: 17,
      header: 2,
      entries: [
        "Starting at 17th level, you can strike with deadly speed. If you take the Attack action on your turn, you can make one additional attack as a bonus action. This attack can benefit from your Sneak Attack even if you have already used it this turn, but you can't use your Sneak Attack against the same target more than once in a turn.",
      ],
    },
    {
      name: 'Swashbuckler',
      source: 'XGE',
      page: 48,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Swashbuckler',
      subclassSource: 'XGE',
      level: 3,
      entries: [
        'You focus your training on the art of the blade, relying on speed, elegance, and charm in equal parts. While some warriors are brutes clad in heavy armor, your method of fighting looks almost like a performance. Duelists and pirates typically belong to this archetype.',
        'A Swashbuckler excels in single combat, and can fight with two weapons while safely darting away from an opponent.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Fancy Footwork|Rogue||Swashbuckler|XGE|3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Rakish Audacity|Rogue||Swashbuckler|XGE|3',
        },
      ],
    },
    {
      name: 'Fancy Footwork',
      source: 'XGE',
      page: 48,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Swashbuckler',
      subclassSource: 'XGE',
      level: 3,
      header: 1,
      entries: [
        "When you choose this archetype at 3rd level, you learn how to land a strike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.",
      ],
    },
    {
      name: 'Rakish Audacity',
      source: 'XGE',
      page: 48,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Swashbuckler',
      subclassSource: 'XGE',
      level: 3,
      header: 1,
      entries: [
        'Starting at 3rd level, your confidence propels you into battle. You can give yourself a bonus to your initiative rolls equal to your Charisma modifier.',
        "You also gain an additional way to use your Sneak Attack; you don't need advantage on the attack roll to use your Sneak Attack against a creature if you are within 5 feet of it, no other creatures are within 5 feet of you, and you don't have disadvantage on the attack roll. All the other rules for Sneak Attack still apply to you.",
      ],
    },
    {
      name: 'Panache',
      source: 'XGE',
      page: 48,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Swashbuckler',
      subclassSource: 'XGE',
      level: 9,
      header: 2,
      entries: [
        "At 9th level, your charm becomes extraordinarily beguiling. As an action, you can make a Charisma (Persuasion) check contested by a creature's Wisdom (Insight) check. The creature must be able to hear you, and the two of you must share a language.",
        "If you succeed on the check and the creature is hostile to you, it has disadvantage on attack rolls against targets other than you and can't make opportunity attacks against targets other than you. This effect lasts for 1 minute, until one of your companions attacks the target or affects it with a spell, or until you and the target are more than 60 feet apart.",
        "If you succeed on the check and the creature isn't hostile to you, it is charmed by you for 1 minute. While charmed, it regards you as a friendly acquaintance. This effect ends immediately if you or your companions do anything harmful to it.",
      ],
    },
    {
      name: 'Elegant Maneuver',
      source: 'XGE',
      page: 48,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Swashbuckler',
      subclassSource: 'XGE',
      level: 13,
      header: 2,
      entries: [
        'Starting at 13th level, you can use a bonus action on your turn to gain advantage on the next Dexterity (Acrobatics) or Strength (Athletics) check you make during the same turn.',
      ],
    },
    {
      name: 'Master Duelist',
      source: 'XGE',
      page: 48,
      className: 'Rogue',
      classSource: 'PHB',
      subclassShortName: 'Swashbuckler',
      subclassSource: 'XGE',
      level: 17,
      header: 2,
      entries: [
        "Beginning at 17th level, your mastery of the blade lets you turn failure into success in combat. If you miss with an attack roll, you can roll it again with advantage. Once you do so, you can't use this feature again until you finish a short or long rest.",
      ],
    },
    {
      name: 'Psi-Bolstered Knack',
      source: 'TCE',
      page: 63,
      className: 'Rogue',
      classSource: 'TCE',
      subclassShortName: 'Soulknife',
      subclassSource: 'TCE',
      level: 3,
      entries: [
        'When your nonpsionic training fails you, your psionic power can help: if you fail an ability check using a skill or tool with which you have proficiency, you can roll one Psionic Energy die and add the number rolled to the check, potentially turning failure into success. You expend the die only if the roll succeeds.',
      ],
    },
    {
      name: 'Psychic Whispers',
      source: 'TCE',
      page: 63,
      className: 'Rogue',
      classSource: 'TCE',
      subclassShortName: 'Soulknife',
      subclassSource: 'TCE',
      level: 3,
      entries: [
        "You can establish telepathic communication between yourself and others-perfect for quiet infiltration. As an action, choose one or more creatures you can see, up to a number of creatures equal to your proficiency bonus, and then roll one Psionic Energy die. For a number of hours equal to the number rolled, the chosen creatures can speak telepathically with you, and you can speak telepathically with them. To send or receive a message (no action required), you and the other creature must be within 1 mile of each other. A creature can't use this telepathy if it can't speak any languages, and a creature can end the telepathic connection at any time (no action required). You and the creature don't need to speak a common language to understand each other.",
        "The first time you use this power after each long rest, you don't expend the Psionic Energy die. All other times you use the power, you expend the die.",
      ],
    },
    {
      name: 'Homing Strikes',
      source: 'TCE',
      page: 63,
      className: 'Rogue',
      classSource: 'TCE',
      subclassShortName: 'Soulknife',
      subclassSource: 'TCE',
      level: 9,
      entries: [
        'If you make an attack roll with your Psychic Blades and miss the target, you can roll one Psionic Energy die and add the number rolled to the attack roll. If this causes the attack to hit, you expend the Psionic Energy die.',
      ],
    },
    {
      name: 'Psychic Teleportation',
      source: 'TCE',
      page: 63,
      className: 'Rogue',
      classSource: 'TCE',
      subclassShortName: 'Soulknife',
      subclassSource: 'TCE',
      level: 9,
      entries: [
        'As a bonus action, you manifest one of your Psychic Blades, expend one Psionic Energy die and roll it, and throw the blade at an unoccupied space you can see, up to a number of feet away equal to 10 times the number rolled. You then teleport to that space, and the blade vanishes.',
      ],
    },
  ],
}
