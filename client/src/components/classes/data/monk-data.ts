export const md = {
  class: {
    name: 'Monk',
    source: 'PHB',
    page: 76,
    srd: true,
    hd: {
      number: 1,
      faces: 8,
    },
    proficiency: ['str', 'dex'],
    startingProficiencies: {
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
    startingEquipment: {
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
        armor: []
      },
    },
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
    classFeatures: [
      'Unarmored Defense||1',
      'Martial Arts||1',
      'Ki||2',
      'Dedicated Weapon||2',
      'Unarmored Movement||2',
      'Deflect Missiles||3',
      {
        classFeature: 'Monastic Tradition||3',
        gainSubclassFeature: true,
      },
      'Ki-Fueled Attack||3',
      'Ability Score Improvement||4',
      'Slow Fall||4',
      'Quickened Healing||4',
      'Extra Attack||5',
      'Stunning Strike||5',
      'Focused Aim||5',
      'Ki-Empowered Strikes||6',
      {
        classFeature: 'Monastic Tradition feature||6',
        gainSubclassFeature: true,
      },
      'Evasion||7',
      'Stillness of Mind||7',
      'Ability Score Improvement||8',
      'Unarmored Movement improvement||9',
      'Purity of Body||10',
      {
        classFeature: 'Monastic Tradition feature||11',
        gainSubclassFeature: true,
      },
      'Ability Score Improvement||12',
      'Tongue of the Sun and Moon||13',
      'Diamond Soul||14',
      'Timeless Body||15',
      'Ability Score Improvement||16',
      {
        classFeature: 'Monastic Tradition feature||17',
        gainSubclassFeature: true,
      },
      'Empty Body||18',
      'Ability Score Improvement||19',
      'Perfect Self||20',
    ],
    subclassTitle: 'Monastic Tradition',
    subclasses: [
      {
        name: 'Way of Shadow',
        shortName: 'Shadow',
        source: 'PHB',
        page: 80,
        additionalSpells: [
          {
            innate: {
              '3': ['minor illusion'],
            },
          },
        ],
        subclassFeatures: [
          'Way of Shadow|Monk||Shadow||3',
          'Shadow Step|Monk||Shadow||6',
          'Cloak of Shadows|Monk||Shadow||11',
          'Opportunist|Monk||Shadow||17',
        ],
      },
      {
        name: 'Way of the Four Elements',
        shortName: 'Four Elements',
        source: 'PHB',
        page: 80,
        spellcastingAbility: 'wis',
        subclassFeatures: [
          'Way of the Four Elements|Monk||Four Elements||3',
          'Extra Elemental Discipline|Monk||Four Elements||6',
          'Extra Elemental Discipline|Monk||Four Elements||11',
          'Extra Elemental Discipline|Monk||Four Elements||17',
        ],
      },
      {
        name: 'Way of the Open Hand',
        shortName: 'Open Hand',
        source: 'PHB',
        page: 79,
        srd: true,
        subclassFeatures: [
          'Way of the Open Hand|Monk||Open Hand||3',
          'Wholeness of Body|Monk||Open Hand||6',
          'Tranquility|Monk||Open Hand||11',
          'Quivering Palm|Monk||Open Hand||17',
        ],
      },
      {
        name: 'Way of the Long Death',
        shortName: 'Long Death',
        source: 'SCAG',
        page: 130,
        subclassFeatures: [
          'Way of the Long Death|Monk||Long Death|SCAG|3',
          'Hour of Reaping|Monk||Long Death|SCAG|6',
          'Mastery of Death|Monk||Long Death|SCAG|11',
          'Touch of the Long Death|Monk||Long Death|SCAG|17',
        ],
      },
      {
        name: 'Way of the Drunken Master',
        shortName: 'Drunken Master',
        source: 'XGE',
        page: 33,
        subclassFeatures: [
          'Way of the Drunken Master|Monk||Drunken Master|XGE|3',
          'Tipsy Sway|Monk||Drunken Master|XGE|6',
          "Drunkard's Luck|Monk||Drunken Master|XGE|11",
          'Intoxicated Frenzy|Monk||Drunken Master|XGE|17',
        ],
      },
      {
        name: 'Way of the Kensei',
        shortName: 'Kensei',
        source: 'XGE',
        page: 34,
        subclassFeatures: [
          'Way of the Kensei|Monk||Kensei|XGE|3',
          'One with the Blade|Monk||Kensei|XGE|6',
          'Sharpen the Blade|Monk||Kensei|XGE|11',
          'Unerring Accuracy|Monk||Kensei|XGE|17',
        ],
      },
      {
        name: 'Way of the Sun Soul',
        shortName: 'Sun Soul',
        source: 'XGE',
        page: 35,
        otherSources: [
          {
            source: 'SCAG',
            page: 131,
          },
        ],
        subclassFeatures: [
          'Way of the Sun Soul|Monk||Sun Soul|XGE|3',
          'Searing Arc Strike|Monk||Sun Soul|XGE|6',
          'Searing Sunburst|Monk||Sun Soul|XGE|11',
          'Sun Shield|Monk||Sun Soul|XGE|17',
        ],
      },
      {
        name: 'Way of Mercy',
        shortName: 'Mercy',
        source: 'TCE',
        page: 49,
        subclassFeatures: [
          'Way of Mercy|Monk||Mercy|TCE|3',
          "Physician's Touch|Monk||Mercy|TCE|6",
          'Flurry of Healing and Harm|Monk||Mercy|TCE|11',
          'Hand of Ultimate Mercy|Monk||Mercy|TCE|17',
        ],
      },
      {
        name: 'Way of the Astral Self',
        shortName: 'Astral Self',
        source: 'TCE',
        page: 50,
        subclassFeatures: [
          'Way of the Astral Self|Monk||Astral Self|TCE|3',
          'Visage of the Astral Self|Monk||Astral Self|TCE|6',
          'Body of the Astral Self|Monk||Astral Self|TCE|11',
          'Awakened Astral Self|Monk||Astral Self|TCE|17',
        ],
      },
    ],
    fluff: [
      {
        name: 'Monk',
        type: 'section',
        entries: [
          'Her fists a blur as they deflect an incoming hail of arrows, a half-elf springs over a barricade and throws herself into the massed ranks of hobgoblins on the other side. She whirls among them, knocking their blows aside and sending them reeling, until at last she stands alone.',
          'Taking a deep breath, a human covered in tattoos settles into a battle stance. As the first charging orcs reach him, he exhales and a blast of fire roars from his mouth, engulfing his foes.',
          "Moving with the silence of the night, a black-clad halfling steps into a shadow beneath an arch and emerges from another inky shadow on a balcony a stone's throw away. She slides her blade free of its cloth-wrapped scabbard and peers through the open window at the tyrant prince, so vulnerable in the grip of sleep.",
          'Whatever their discipline, monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.',
          {
            type: 'entries',
            name: 'The Magic of Ki',
            entries: [
              "Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse—specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies' physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes.",
            ],
          },
          {
            type: 'entries',
            name: 'Training and Asceticism',
            entries: [
              "Small walled cloisters dot the landscapes of the worlds of D&D, tiny refuges from the flow of ordinary life, where time seems to stand still. The monks who live there seek personal perfection through contemplation and rigorous training. Many entered the monastery as children, sent to live there when their parents died, when food couldn't be found to support them, or in return for some kindness that the monks had performed for their families.",
              'Some monks live entirely apart from the surrounding population, secluded from anything that might impede their spiritual progress. Others are sworn to isolation, emerging only to serve as spies or assassins at the command of their leader, a noble patron, or some other mortal or divine power.',
              "The majority of monks don't shun their neighbors, making frequent visits to nearby towns or villages and exchanging their service for food and other goods. As versatile warriors, monks often end up protecting their neighbors from monsters or tyrants.",
              "For a monk, becoming an adventurer means leaving a structured, communal lifestyle to become a wanderer. This can be a harsh transition, and monks don't undertake it lightly. Those who leave their cloisters take their work seriously, approaching their adventures as personal tests of their physical and spiritual growth. As a rule, monks care little for material wealth and are driven by a desire to accomplish a greater mission than merely slaying monsters and plundering their treasure.",
            ],
          },
          {
            type: 'entries',
            name: 'Creating a Monk',
            entries: [
              "As you make your monk character, think about your connection to the monastery where you learned your skills and spent your formative years. Were you an orphan or a child left on the monastery's threshold? Did your parents promise you to the monastery in gratitude for a service performed by the monks? Did you enter this secluded life to hide from a crime you committed? Or did you choose the monastic life for yourself?",
              "Consider why you left. Did the head of your monastery choose you for a particularly important mission beyond the cloister? Perhaps you were cast out because of some violation of the community's rules. Did you dread leaving, or were you happy to go? Is there something you hope to accomplish outside the monastery? Are you eager to return to your home?",
              'As a result of the structured life of a monastic community and the discipline required to harness ki, monks are almost always lawful in alignment.',
              {
                type: 'entries',
                name: 'Quick Build',
                entries: [
                  'You can make a monk quickly by following these suggestions. First, make Dexterity your highest ability score, followed by Wisdom. Second, choose the hermit background.',
                ],
              },
            ],
          },
        ],
        source: 'PHB',
        page: 76,
      },
      {
        type: 'section',
        entries: [
          {
            type: 'quote',
            entries: [
              "Do not mistake my silence for acceptance of your villainy. While you blustered and threatened, I've planned four different ways to snap your neck with my bare hands.",
            ],
            by: 'Ember, grand master of flowers',
          },
          'Monks walk a path of contradiction. They study their art as a wizard does, and like a wizard, they wear no armor and typically eschew weapons. Yet they are deadly combatants, their abilities on a par with those of a raging barbarian or a superbly trained fighter. Monks embrace this seeming contradiction, for it speaks to the core of all monastic study. By coming to know oneself completely, one learns much of the wider world.',
          "A monk's focus on inner mastery leads many such individuals to become detached from society, more concerned with their personal experience than with happenings elsewhere. Adventuring monks are a rare breed of an already rare type of character, taking their quest for perfection beyond the walls of the monastery into the world at large.",
          'Playing a monk character offers many intriguing opportunities to try something different. To distinguish your monk character even further, consider the options in the sections that follow.',
          {
            type: 'entries',
            name: 'Monastery',
            entries: [
              'A monk studies in a monastery in preparation for a life of asceticism. Most of those who enter a monastery make it their home for the rest of their lives, with the exception of adventurers and others who have reason to leave. For those individuals, a monastery might serve as a refuge between excursions to the world or as a source of support in times of need.',
              'What sort of place was your monastery, and where is it located? Did attending it contribute to your experience in an unusual or distinctive way?',
              {
                type: 'table',
                caption: 'Monastery',
                colLabels: ['d6', 'Monastery'],
                colStyles: ['col-1 text-center', 'col-11'],
                rows: [
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 1,
                      },
                    },
                    'Your monastery is carved out of a mountainside, where it looms over a treacherous pass.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 2,
                      },
                    },
                    'Your monastery is high in the branches of an immense tree in the Feywild.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 3,
                      },
                    },
                    'Your monastery was founded long ago by a cloud giant and is inside a cloud castle that can be reached only by flying.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 4,
                      },
                    },
                    'Your monastery is built beside a volcanic system of hot springs, geysers, and sulfur pools. You regularly received visits from azer traders.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 5,
                      },
                    },
                    'Your monastery was founded by gnomes and is an underground labyrinth of tunnels and rooms.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 6,
                      },
                    },
                    'Your monastery was carved from an iceberg in the frozen reaches of the world.',
                  ],
                ],
              },
            ],
          },
          {
            type: 'entries',
            name: 'Icon',
            entries: [
              "Even in the monastic lifestyle, which eschews materialism and personal possessions, symbolism plays an important part in defining the identity of an order. Some monastic orders treat certain creatures with special regard, either because the creature is tied to the order's history or because it serves as an example of a quality the monks seek to emulate.",
              "If your character's monastery had a special icon, you might wear a crude image of the creature somewhere inconspicuous on your clothing to serve as an identifying mark. Or perhaps your order's icon does not have a physical form but is expressed through a gesture or a posture that you adopt, and which other monks might know how to interpret.",
              {
                type: 'table',
                caption: 'Icon',
                colLabels: ['d6', 'Icon'],
                colStyles: ['col-1 text-center', 'col-11'],
                rows: [
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 1,
                      },
                    },
                    'Monkey. Quick reflexes and the ability to travel through the treetops are two of the reasons why your order admires the monkey.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 2,
                      },
                    },
                    'Dragon Turtle. The monks of your seaside monastery venerate the dragon turtle, reciting ancient prayers and offering garlands of flowers to honor this living spirit of the sea.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 3,
                      },
                    },
                    'Ki-rin. Your monastery sees its main purpose as watching over and protecting the land in the manner of the ki-rin.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 4,
                      },
                    },
                    'Owlbear. The monks of your monastery revere a family of owlbears and have coexisted with them for generations.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 5,
                      },
                    },
                    'Hydra. Your order singles out the hydra for its ability to unleash several attacks simultaneously.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 6,
                      },
                    },
                    'Dragon. A dragon once laired within your monastery. Its influence remains long after its departure.',
                  ],
                ],
              },
            ],
          },
          {
            type: 'entries',
            name: 'Master',
            entries: [
              'During your studies, you were likely under the tutelage of a master who imparted to you the precepts of the order. Your master was the one most responsible for shaping your understanding of the martial arts and your attitude toward the world. What sort of person was your master, and how did your relationship with your master affect you?',
              {
                type: 'table',
                caption: 'Master',
                colLabels: ['d6', 'Master'],
                colStyles: ['col-1 text-center', 'col-11'],
                rows: [
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 1,
                      },
                    },
                    'Your master was a tyrant whom you had to defeat in single combat to complete your instruction.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 2,
                      },
                    },
                    'Your master was kindly and taught you to pursue the cause of peace.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 3,
                      },
                    },
                    'Your master was merciless in pushing you to your limits. You nearly lost an eye during one especially brutal practice session.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 4,
                      },
                    },
                    'Your master seemed goodhearted while tutoring you, but betrayed your monastery in the end.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 5,
                      },
                    },
                    'Your master was cold and distant. You suspect that the two of you might be related.',
                  ],
                  [
                    {
                      type: 'cell',
                      roll: {
                        exact: 6,
                      },
                    },
                    'Your master was kind and generous, never critical of your progress. Nevertheless, you feel you never fully lived up to the expectations placed on you.',
                  ],
                ],
              },
            ],
          },
        ],
        source: 'XGE',
        page: 32,
      },
    ],
  },
  classFeature: [
    {
      name: 'Martial Arts',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 1,
      entries: [
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
    {
      name: 'Unarmored Defense',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 1,
      entries: [
        'Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.',
      ],
    },
    {
      name: 'Dedicated Weapon',
      source: 'TCE',
      page: 48,
      className: 'Monk',
      classSource: 'PHB',
      level: 2,
      isClassFeatureVariant: true,
      entries: [
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
    {
      name: 'Ki',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 2,
      entries: [
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
    {
      name: 'Unarmored Movement',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 2,
      entries: [
        'Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.',
        'At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.',
      ],
    },
    {
      name: 'Deflect Missiles',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 3,
      entries: [
        'Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.',
        'If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack (range 20/60 feet) with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack.',
      ],
    },
    {
      name: 'Ki-Fueled Attack',
      source: 'TCE',
      page: 48,
      className: 'Monk',
      classSource: 'PHB',
      level: 3,
      isClassFeatureVariant: true,
      entries: [
        '3rd-level monk optional class features',
        'If you spend 1 ki point or more as part of your action on your turn, you can make one attack with an unarmed strike or a monk weapon as a bonus action before the end of the turn.',
      ],
    },
    {
      name: 'Monastic Tradition',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 3,
      entries: [
        'When you reach 3rd level, you commit yourself to a monastic tradition, chosen from the list of available traditions. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.',
      ],
    },
    {
      name: 'Ability Score Improvement',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 4,
      entries: [
        "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        'If your DM allows the use of feats, you may instead take a feat.',
      ],
    },
    {
      name: 'Quickened Healing',
      source: 'TCE',
      page: 48,
      className: 'Monk',
      classSource: 'PHB',
      level: 4,
      isClassFeatureVariant: true,
      entries: [
        '4th-level monk optional class features',
        'As an action, you can spend 2 ki points and roll a Martial Arts die. You regain a number of hit points equal to the number rolled plus your proficiency bonus.',
      ],
    },
    {
      name: 'Slow Fall',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 4,
      entries: [
        'Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.',
      ],
    },
    {
      name: 'Extra Attack',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 5,
      entries: [
        'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
      ],
    },
    {
      name: 'Focused Aim',
      source: 'TCE',
      page: 48,
      className: 'Monk',
      classSource: 'PHB',
      level: 5,
      isClassFeatureVariant: true,
      entries: [
        '5th-level monk optional class features',
        'When you miss with an attack roll, you can spend 1 to 3 ki points to increase your attack roll by 2 for each of these ki points you spend, potentially turning the miss into a hit.',
      ],
    },
    {
      name: 'Stunning Strike',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 5,
      entries: [
        "Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.",
      ],
    },
    {
      name: 'Ki-Empowered Strikes',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 6,
      entries: [
        'Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.',
      ],
    },
    {
      name: 'Monastic Tradition feature',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 6,
      entries: [
        'At 6th level, you gain one feature granted by your Monastic Tradition.',
      ],
    },
    {
      name: 'Evasion',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 7,
      entries: [
        "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
      ],
    },
    {
      name: 'Stillness of Mind',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 7,
      entries: [
        'Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.',
      ],
    },
    {
      name: 'Ability Score Improvement',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 8,
      entries: [
        "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        'If your DM allows the use of feats, you may instead take a feat.',
      ],
    },
    {
      name: 'Unarmored Movement improvement',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 9,
      entries: [
        'At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.',
      ],
    },
    {
      name: 'Purity of Body',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 10,
      entries: [
        'At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.',
      ],
    },
    {
      name: 'Monastic Tradition feature',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 11,
      entries: [
        'At 11th level, you gain one feature granted by your Monastic Tradition.',
      ],
    },
    {
      name: 'Ability Score Improvement',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 12,
      entries: [
        "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        'If your DM allows the use of feats, you may instead take a feat.',
      ],
    },
    {
      name: 'Tongue of the Sun and Moon',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 13,
      entries: [
        'Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.',
      ],
    },
    {
      name: 'Diamond Soul',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 14,
      entries: [
        'Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.',
        'Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.',
      ],
    },
    {
      name: 'Timeless Body',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 15,
      entries: [
        "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water.",
      ],
    },
    {
      name: 'Ability Score Improvement',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 16,
      entries: [
        "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        'If your DM allows the use of feats, you may instead take a feat.',
      ],
    },
    {
      name: 'Monastic Tradition feature',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 17,
      entries: [
        'At 17th level, you gain one feature granted by your Monastic Tradition.',
      ],
    },
    {
      name: 'Empty Body',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 18,
      entries: [
        'Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.',
        "Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you.",
      ],
    },
    {
      name: 'Ability Score Improvement',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 19,
      entries: [
        "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        'If your DM allows the use of feats, you may instead take a feat.',
      ],
    },
    {
      name: 'Perfect Self',
      source: 'PHB',
      page: 76,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      level: 20,
      entries: [
        'At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.',
      ],
    },
  ],
  subclassFeature: [
    {
      name: 'Way of the Four Elements',
      source: 'PHB',
      page: 80,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Four Elements',
      subclassSource: 'PHB',
      level: 3,
      entries: [
        'You follow a monastic tradition that teaches you to harness the elements. When you focus your ki, you can align yourself with the forces of creation and bend the four elements to your will, using them as an extension of your body. Some members of this tradition dedicate themselves to a single element, but others weave the elements together.',
        'Many monks of this tradition tattoo their bodies with representations of their ki powers, commonly imagined as coiling dragons, but also as phoenixes, fish, plants, mountains, and cresting waves.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Disciple of the Elements|Monk||Four Elements||3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Elemental Disciplines|Monk||Four Elements||3',
        },
      ],
    },
    {
      name: 'Disciple of the Elements',
      source: 'PHB',
      page: 80,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Four Elements',
      subclassSource: 'PHB',
      level: 3,
      header: 1,
      entries: [
        'You learn magical disciplines that harness the power of the four elements. A discipline requires you to spend ki points each time you use it.',
        'You know the Elemental Attunement discipline and one other elemental discipline of your choice. You learn one additional elemental discipline of your choice at 6th, 11th, and 17th level.',
        'Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.',
        {
          type: 'entries',
          name: 'Casting Elemental Spells',
          entries: [
            "Some elemental disciplines allow you to cast spells. See chapter 10 of the Player's Handbook for the general rules of spellcasting. To cast one of these spells, you use its casting time and other rules, but you don't need to provide material components for it.",
            "Once you reach 5th level in this class, you can spend additional ki points to increase the level of an elemental discipline spell that you cast, provided that the spell has an enhanced effect at a higher level, as burning hands does. The spell's level increases by 1 for each additional ki point you spend. For example, if you are a 5th-level monk and use Sweeping Cinder Strike to cast burning hands, you can spend 3 ki points to cast it as a 2nd-level spell (the discipline's base cost of 2 ki points plus 1).",
            'The maximum number of ki points you can spend to cast a spell in this way (including its base ki point cost and any additional ki points you spend to increase its level) is determined by your monk level, as shown in the Spells and Ki Points table. At 5th level, you may spend up to 3 ki points; this increases to 4 ki points at 9th level, 5 at 13th level, and 6 at 17th level.',
            {
              type: 'table',
              caption: 'Spells and Ki Points',
              colLabels: ['Monk Levels', 'Maximum Ki Points for a Spell'],
              colStyles: ['col-5 text-center', 'col-7 text-center'],
              rows: [
                ['5th-8th', 3],
                ['9th-12th', 4],
                ['13th-16th', 5],
                ['17th-20th', 6],
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Elemental Disciplines',
      source: 'PHB',
      page: 80,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Four Elements',
      subclassSource: 'PHB',
      level: 3,
      header: 1,
      entries: [
        'The elemental disciplines are presented in alphabetical order. If a discipline requires a level, you must be the level in this class to learn the discipline.',
        {
          type: 'options',
          count: 2,
          entries: [
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Breath of Winter',
              name: 'Breath of Winter (17th Level Required)',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Clench of the North Wind',
              name: 'Clench of the North Wind (6th Level Required)',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Elemental Attunement',
              data: {
                isRequiredOption: true,
              },
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Eternal Mountain Defense',
              name: 'Eternal Mountain Defense (17th Level Required)',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Fangs of the Fire Snake',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Fist of Four Thunders',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Unbroken Air',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Flames of the Phoenix',
              name: 'Flames of the Phoenix (11th Level Required)',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Gong of the Summit',
              name: 'Gong of the Summit (6th Level Required)',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Mist Stance',
              name: 'Mist Stance (11th Level Required)',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Ride the Wind',
              name: 'Ride the Wind (11th Level Required)',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'River of Hungry Flame',
              name: 'River of Hungry Flame (17th Level Required)',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Rush of the Gale Spirits',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Shape the Flowing River',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Sweeping Cinder Strike',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Water Whip',
            },
            {
              type: 'refOptionalfeature',
              optionalfeature: 'Wave of Rolling Earth',
              name: 'Wave of Rolling Earth (17th Level Required)',
            },
          ],
        },
      ],
    },
    {
      name: 'Extra Elemental Discipline',
      source: 'PHB',
      page: 80,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Four Elements',
      subclassSource: 'PHB',
      level: 6,
      header: 2,
      entries: [
        'You learn one additional elemental discipline of your choice. You should know 2 elemental disciplines, as well as Elemental Attunement.',
        'Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.',
      ],
    },
    {
      name: 'Extra Elemental Discipline',
      source: 'PHB',
      page: 80,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Four Elements',
      subclassSource: 'PHB',
      level: 11,
      header: 2,
      entries: [
        'You learn one additional elemental discipline of your choice. You should know 3 elemental disciplines, as well as Elemental Attunement.',
        'Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.',
      ],
    },
    {
      name: 'Extra Elemental Discipline',
      source: 'PHB',
      page: 80,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Four Elements',
      subclassSource: 'PHB',
      level: 17,
      header: 2,
      entries: [
        'You learn one additional elemental discipline of your choice. You should know 4 elemental disciplines, as well as Elemental Attunement.',
        'Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.',
      ],
    },
    {
      name: 'Way of the Open Hand',
      source: 'PHB',
      page: 79,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Open Hand',
      subclassSource: 'PHB',
      level: 3,
      entries: [
        'Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Open Hand Technique|Monk||Open Hand||3',
        },
      ],
    },
    {
      name: 'Open Hand Technique',
      source: 'PHB',
      page: 79,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Open Hand',
      subclassSource: 'PHB',
      level: 3,
      header: 1,
      entries: [
        "You can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target.",
        {
          type: 'list',
          items: [
            'It must succeed on a Dexterity saving throw or be knocked prone.',
            'It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.',
            "It can't take reactions until the end of your next turn.",
          ],
        },
      ],
    },
    {
      name: 'Wholeness of Body',
      source: 'PHB',
      page: 79,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Open Hand',
      subclassSource: 'PHB',
      level: 6,
      header: 2,
      entries: [
        'You gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.',
      ],
    },
    {
      name: 'Tranquility',
      source: 'PHB',
      page: 79,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Open Hand',
      subclassSource: 'PHB',
      level: 11,
      header: 2,
      entries: [
        'Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus.',
      ],
    },
    {
      name: 'Quivering Palm',
      source: 'PHB',
      page: 79,
      srd: true,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Open Hand',
      subclassSource: 'PHB',
      level: 17,
      header: 2,
      entries: [
        "You gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.",
        'You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.',
      ],
    },
    {
      name: 'Way of Shadow',
      source: 'PHB',
      page: 80,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Shadow',
      subclassSource: 'PHB',
      level: 3,
      entries: [
        "Monks of the Way of Shadow follow a tradition that values stealth and subterfuge. These monks might be called ninjas or shadowdancers, and they serve as spies and assassins. Sometimes the members of a ninja monastery are family members, forming a clan sworn to secrecy about their arts and missions. Other monasteries are more like thieves' guilds, hiring out their services to nobles, rich merchants, or anyone else who can pay their fees. Regardless of their methods, the heads of these monasteries expect the unquestioning obedience of their students.",
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Shadow Arts|Monk||Shadow||3',
        },
      ],
    },
    {
      name: 'Shadow Arts',
      source: 'PHB',
      page: 80,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Shadow',
      subclassSource: 'PHB',
      level: 3,
      header: 1,
      entries: [
        "You can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast darkness, darkvision, pass without trace, or silence, without providing material components. Additionally, you gain the minor illusion cantrip if you don't already know it.",
      ],
    },
    {
      name: 'Shadow Step',
      source: 'PHB',
      page: 80,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Shadow',
      subclassSource: 'PHB',
      level: 6,
      header: 2,
      entries: [
        'You gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn.',
      ],
    },
    {
      name: 'Cloak of Shadows',
      source: 'PHB',
      page: 80,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Shadow',
      subclassSource: 'PHB',
      level: 11,
      header: 2,
      entries: [
        'By 11th level, you have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light.',
      ],
    },
    {
      name: 'Opportunist',
      source: 'PHB',
      page: 80,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Shadow',
      subclassSource: 'PHB',
      level: 17,
      header: 2,
      entries: [
        "At 17th level, you can exploit a creature's momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature.",
      ],
    },
    {
      name: 'Way of the Long Death',
      source: 'SCAG',
      page: 130,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Long Death',
      subclassSource: 'SCAG',
      level: 3,
      entries: [
        'Monks of the Way of the Long Death are obsessed with the meaning and mechanics of dying. They capture creatures and prepare elaborate experiments to capture, record, and understand the moments of their demise. They use this knowledge to guide their understanding of martial arts, yielding a deadly fighting style.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Touch of Death|Monk||Long Death|SCAG|3',
        },
      ],
    },
    {
      name: 'Touch of Death',
      source: 'SCAG',
      page: 130,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Long Death',
      subclassSource: 'SCAG',
      level: 3,
      header: 1,
      entries: [
        'Starting when you choose this tradition at 3rd level, your study of death allows you to extract vitality from another creature as it nears its demise. When you reduce a creature within 5 feet of you to 0 hit points, you gain temporary hit points equal to your Wisdom modifier + your monk level (minimum of 1 temporary hit point).',
      ],
    },
    {
      name: 'Hour of Reaping',
      source: 'SCAG',
      page: 130,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Long Death',
      subclassSource: 'SCAG',
      level: 6,
      header: 2,
      entries: [
        'At 6th level, you gain the ability to unsettle or terrify those around you as an action, for your soul has been touched by the shadow of death. When you take this action, each creature within 30 feet of you that can see you must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.',
      ],
    },
    {
      name: 'Mastery of Death',
      source: 'SCAG',
      page: 130,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Long Death',
      subclassSource: 'SCAG',
      level: 11,
      header: 2,
      entries: [
        'Beginning at 11th level, you use your familiarity with death to escape its grasp. When you are reduced to 0 hit points, you can expend 1 ki point (no action required) to have 1 hit point instead.',
      ],
    },
    {
      name: 'Touch of the Long Death',
      source: 'SCAG',
      page: 130,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Long Death',
      subclassSource: 'SCAG',
      level: 17,
      header: 2,
      entries: [
        'Starting at 17th level, your touch can channel the energy of death into a creature. As an action, you touch one creature within 5 feet of you, and you expend 1 to 10 ki points. The target must make a Constitution saving throw, and it takes 2d10 necrotic damage per ki point spent on a failed save, or half as much damage on a successful one.',
      ],
    },
    {
      name: 'Way of the Astral Self',
      source: 'TCE',
      page: 50,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Astral Self',
      subclassSource: 'TCE',
      level: 3,
      entries: [
        'A monk who follows the Way of the Astral Self believes their body is an illusion. They see their ki as a representation of their true form, an astral self. This astral self has the capacity to be a force of order or disorder, with some monasteries training students to use their power to protect the weak and other instructing aspirants in how to manifest their true selves in service to the mighty.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Forms of Your Astral Self|Monk||Astral Self|TCE|3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Arms of the Astral Self|Monk||Astral Self|TCE|3',
        },
      ],
    },
    {
      name: 'Arms of the Astral Self',
      source: 'TCE',
      page: 50,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Astral Self',
      subclassSource: 'TCE',
      level: 3,
      header: 1,
      entries: [
        '3rd-level Way of the Astral Self feature',
        'Your mastery of your ki allows you to summon a portion of your astral self. As a bonus action, you can spend 1 ki point to summon the arms of your astral self. When you do so, each creature of your choice that you can see within 10 feet of you must succeed on a Dexterity saving throw or take force damage equal to two rolls of your Martial Arts die.',
        "For 10 minutes, these spectral arms hover near your shoulders or surround your arms (your choice). You determine the arms' appearance, and they vanish early if you are incapacitated or die.",
        'While the spectral arms are present, you gain the following benefits:',
        {
          type: 'list',
          items: [
            'You can use your Wisdom modifier in place of your Strength modifier when making Strength checks and Strength saving throws.',
            'You can use the spectral arms to make unarmed strikes.',
            'When you make an unarmed strike with the arms on your turn, your reach for it is 5 feet greater than normal.',
            'The unarmed strikes you make with the arms can use your Wisdom modifier in place of your Strength or Dexterity modifier for the attack and damage rolls, and their damage type is force.',
          ],
        },
      ],
    },
    {
      name: 'Forms of Your Astral Self',
      source: 'TCE',
      page: 50,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Astral Self',
      subclassSource: 'TCE',
      level: 3,
      header: 1,
      type: 'inset',
      entries: [
        "The astral self is a translucent embodiment of the monk's soul. As a result, an astral self can reflect aspects of a monk's background, ideals, flaws, and bonds, and an astral self doesn't necessarily look anything like the monk. For example, the astral self of a lanky human might be reminiscent of a minotaur-the strength of which the monk feels within. Similarly, an orc monk might manifest gossamer arms and a delicate visage, representing the gentle beauty of the orc's soul. Each astral self is unique, and some of the monks of this monastic tradition are known more for the appearance of their astral self than for their physical appearance.",
        'When choosing this path, consider the quirks that define your monk. Are you obsessed with something? Are you driven by justice or a selfish desire? Any of these motivations could manifest in the form of your astral self.',
      ],
    },
    {
      name: 'Visage of the Astral Self',
      source: 'TCE',
      page: 50,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Astral Self',
      subclassSource: 'TCE',
      level: 6,
      header: 2,
      entries: [
        '6th-level Way of the Astral Self feature',
        'You can summon the visage of your astral self. As a bonus action, or as part of the bonus action you take to activate Arms of the Astral Self, you can spend 1 ki point to summon this visage for 10 minutes. It vanishes early if you are incapacitated or die.',
        'The spectral visage covers your face like a helmet or mask. You determine its appearance.',
        'While the spectral visage is present, you gain the following benefits.',
        {
          type: 'entries',
          name: 'Astral Sight',
          entries: [
            'You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.',
          ],
        },
        {
          type: 'entries',
          name: 'Wisdom of the Spirit',
          entries: [
            'You have advantage on Wisdom (Insight}) and Charisma (Intimidation) checks.',
          ],
        },
        {
          type: 'entries',
          name: 'Word of the Spirit',
          entries: [
            'When you speak, you can direct your words to a creature of your choice that you can see within 60 feet of you, making it so only that creature can hear you. Alternatively, you can amplify your voice so that all creatures within 600 feet can hear you.',
          ],
        },
      ],
    },
    {
      name: 'Body of the Astral Self',
      source: 'TCE',
      page: 50,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Astral Self',
      subclassSource: 'TCE',
      level: 11,
      header: 2,
      entries: [
        '11th-level Way of the Astral Self feature',
        'When you have both your astral arms and visage summoned, you can cause the body of your astral self to appear (no action required). This spectral body covers your physical form like a suit of armor, connecting with the arms and visage. You determine its appearance.',
        'While the spectral body is present, you gain the following benefits.',
        {
          type: 'entries',
          name: 'Deflect Energy',
          entries: [
            'When you take acid, cold, fire, force, lightning, or thunder damage, you can use your reaction to deflect it. When you do so, the damage you take is reduced by 1d10 + your Wisdom modifier (minimum reduction of 1).',
          ],
        },
        {
          type: 'entries',
          name: 'Empowered Arms',
          entries: [
            'Once on each of your turns when you hit a target with the Arms of the Astral Self, you can deal extra damage to the target equal to your Martial Arts die.',
          ],
        },
      ],
    },
    {
      name: 'Awakened Astral Self',
      source: 'TCE',
      page: 50,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Astral Self',
      subclassSource: 'TCE',
      level: 17,
      header: 2,
      entries: [
        '17th-level Way of the Astral Self feature',
        'Your connection to your astral self is complete, allowing you to unleash its full potential. As a bonus action, you can spend 5 ki points to summon the arms, visage, and body of your astral self and awaken it for 10 minutes. This awakening ends early if you are incapacitated or die.',
        'While your astral self is awakened, you gain the following benefits.',
        {
          type: 'entries',
          name: 'Armor of the Spirit',
          entries: ['You gain a +2 bonus to Armor Class.'],
        },
        {
          type: 'entries',
          name: 'Astral Barrage',
          entries: [
            'Whenever you use the Extra Attack feature to attack twice, you can instead attack three times if all the attacks are made with your astral arms.',
          ],
        },
      ],
    },
    {
      name: 'Way of Mercy',
      source: 'TCE',
      page: 49,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Mercy',
      subclassSource: 'TCE',
      level: 3,
      entries: [
        'Monks of the Way of Mercy learn to manipulate the life force of others to bring aid to those in need. They are wandering physicians to the poor and hurt. However, to those beyond their help, they bring a swift end as an act of mercy.',
        'Those who follow the Way of Mercy might be members of a religious order, administering to the needy and making grim choices rooted in reality rather than idealism. Some might be gentle-voiced healers, beloved by their communities, while others might be masked bringers of macabre mercies.',
        'The walkers of this way usually don robes with deep cowls, and they often conceal their faces with masks, presenting themselves as the faceless bringers of life and death.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Implements of Mercy|Monk||Mercy|TCE|3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Hand of Healing|Monk||Mercy|TCE|3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Hand of Harm|Monk||Mercy|TCE|3',
        },
      ],
    },
    {
      name: 'Hand of Harm',
      source: 'TCE',
      page: 49,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Mercy',
      subclassSource: 'TCE',
      level: 3,
      header: 1,
      entries: [
        '3rd-level Way of Mercy feature',
        'You use your ki to inflict wounds. When you hit a creature with an unarmed strike, you can spend 1 ki point to deal extra necrotic damage equal to one roll of your Martial Arts die + your Wisdom modifier. You can use this feature only once per turn.',
      ],
    },
    {
      name: 'Hand of Healing',
      source: 'TCE',
      page: 49,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Mercy',
      subclassSource: 'TCE',
      level: 3,
      header: 1,
      entries: [
        '3rd-level Way of Mercy feature',
        'Your mystical touch can mend wounds. As an action, you can spend 1 ki point to touch a creature and restore a number of hit points equal to a roll of your Martial Arts die + your Wisdom modifier.',
        'When you use your Flurry of Blows, you can replace one of the unarmed strikes with a use of this feature without spending a ki point for the healing.',
      ],
    },
    {
      name: 'Implements of Mercy',
      source: 'TCE',
      page: 49,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Mercy',
      subclassSource: 'TCE',
      level: 3,
      header: 1,
      entries: [
        '3rd-level Way of Mercy feature',
        'You gain proficiency in the Insight and Medicine skills, and you gain proficiency with the herbalism kit.',
        'You also gain a special mask, which you often wear when using the features of this subclass. You determine its appearance, or generate it randomly by rolling on the Merciful Mask table.',
        {
          type: 'table',
          caption: 'Merciful Mask',
          colLabels: ['d6', 'Mask Appearance'],
          colStyles: ['col-2 text-center', 'col-10'],
          rows: [
            ['1', 'Raven'],
            ['2', 'Blank and white'],
            ['3', 'Crying visage'],
            ['4', 'Laughing visage'],
            ['5', 'Skull'],
            ['6', 'Butterfly'],
          ],
        },
      ],
    },
    {
      name: "Physician's Touch",
      source: 'TCE',
      page: 49,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Mercy',
      subclassSource: 'TCE',
      level: 6,
      header: 2,
      entries: [
        '6th-level Way of Mercy feature',
        "You can administer even greater cures with a touch, and if you feel it's necessary, you can use your knowledge to cause harm.",
        'When you use Hand of Healing on a creature, you can also end one disease or one of the following conditions affecting the creature: blinded, deafened, paralyzed, poisoned, or stunned.',
        'When you use Hand of Harm on a creature, you can subject that creature to the poisoned condition until the end of your next turn.',
      ],
    },
    {
      name: 'Flurry of Healing and Harm',
      source: 'TCE',
      page: 49,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Mercy',
      subclassSource: 'TCE',
      level: 11,
      header: 2,
      entries: [
        '11th-level Way of Mercy feature',
        'You can now mete out a flurry of comfort and hurt. When you use Flurry of Blows, you can now replace each of the unarmed strikes with a use of your Hand of Healing, without spending ki points for the healing.',
        'In addition, when you make an unarmed strike with Flurry of Blows, you can use Hand of Harm with that strike without spending the ki point for Hand of Harm. You can still use Hand of Harm only once per turn.',
      ],
    },
    {
      name: 'Hand of Ultimate Mercy',
      source: 'TCE',
      page: 49,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Mercy',
      subclassSource: 'TCE',
      level: 17,
      header: 2,
      entries: [
        '17th-level Way of Mercy feature',
        'Your mastery of life energy opens the door to the ultimate mercy. As an action, you can touch the corpse of a creature that died within the past 24 hours and expend 5 ki points. The creature then returns to life, regaining a number of hit points equal to 4d10 + your Wisdom modifier. If the creature died while subject to any of the following conditions, it revives with them removed: blinded, deafened, paralyzed, poisoned, and stunned.',
        "Once you use this feature, you can't use it again until you finish a long rest.",
      ],
    },
    {
      name: 'Way of the Drunken Master',
      source: 'XGE',
      page: 33,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Drunken Master',
      subclassSource: 'XGE',
      level: 3,
      entries: [
        "The Way of the Drunken Master teaches its students to move with the jerky, unpredictable movements of a drunkard. A drunken master sways, tottering on unsteady feet, to present what seems like an incompetent combatant who proves frustrating to engage. The drunken master's erratic stumbles conceal a carefully executed dance of blocks, parries, advances, attacks, and retreats.",
        'A drunken master often enjoys playing the fool to bring gladness to the despondent or to demonstrate humility to the arrogant, but when battle is joined, the drunken master can be a maddening, masterful foe.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Bonus Proficiencies|Monk||Drunken Master|XGE|3',
        },
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Drunken Technique|Monk||Drunken Master|XGE|3',
        },
      ],
    },
    {
      name: 'Bonus Proficiencies',
      source: 'XGE',
      page: 33,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Drunken Master',
      subclassSource: 'XGE',
      level: 3,
      header: 1,
      entries: [
        "When you choose this tradition at 3rd level, you gain proficiency in the Performance skill if you don't already have it. Your martial arts technique mixes combat training with the precision of a dancer and the antics of a jester. You also gain proficiency with brewer's supplies if you don't already have it.",
      ],
    },
    {
      name: 'Drunken Technique',
      source: 'XGE',
      page: 33,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Drunken Master',
      subclassSource: 'XGE',
      level: 3,
      header: 1,
      entries: [
        'At 3rd level, you learn how to twist and turn quickly as part of your Flurry of Blows. Whenever you use Flurry of Blows, you gain the benefit of the Disengage action, and your walking speed increases by 10 feet until the end of the current turn.',
      ],
    },
    {
      name: 'Tipsy Sway',
      source: 'XGE',
      page: 33,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Drunken Master',
      subclassSource: 'XGE',
      level: 6,
      header: 2,
      entries: [
        'Starting at 6th level, you can move in sudden, swaying ways. You gain the following benefits.',
        {
          type: 'options',
          entries: [
            {
              type: 'refSubclassFeature',
              subclassFeature:
                'Leap to Your Feet|Monk|XGE|Drunken Master|XGE|6',
            },
            {
              type: 'refSubclassFeature',
              subclassFeature: 'Redirect Attack|Monk|XGE|Drunken Master|XGE|6',
            },
          ],
        },
      ],
    },
    {
      name: "Drunkard's Luck",
      source: 'XGE',
      page: 33,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Drunken Master',
      subclassSource: 'XGE',
      level: 11,
      header: 2,
      entries: [
        'Starting at 11th level, you always seem to get a lucky bounce at the right moment. When you make an ability check, an attack roll, or a saving throw and have disadvantage on the roll, you can spend 2 ki points to cancel the disadvantage for that roll.',
      ],
    },
    {
      name: 'Intoxicated Frenzy',
      source: 'XGE',
      page: 33,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Drunken Master',
      subclassSource: 'XGE',
      level: 17,
      header: 2,
      entries: [
        'At 17th level, you gain the ability to make an overwhelming number of attacks against a group of enemies. When you use your Flurry of Blows, you can make up to three additional attacks with it (up to a total of five Flurry of Blows attacks), provided that each Flurry of Blows attack targets a different creature this turn.',
      ],
    },
    {
      name: 'Way of the Kensei',
      source: 'XGE',
      page: 34,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Kensei',
      subclassSource: 'XGE',
      level: 3,
      entries: [
        'Monks of the Way of the Kensei train relentlessly with their weapons, to the point where the weapon becomes an extension of the body. Founded on a mastery of sword fighting, the tradition has expanded to include many different weapons.',
        'A kensei sees a weapon in much the same way a calligrapher or painter regards a pen or brush. Whatever the weapon, the kensei views it as a tool used to express the beauty and precision of the martial arts. That such mastery makes a kensei a peerless warrior is but a side effect of intense devotion, practice, and study.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Path of the Kensei|Monk||Kensei|XGE|3',
        },
      ],
    },
    {
      name: 'Path of the Kensei',
      source: 'XGE',
      page: 34,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Kensei',
      subclassSource: 'XGE',
      level: 3,
      header: 1,
      entries: [
        'When you choose this tradition at 3rd level, your special martial arts training leads you to master the use of certain weapons. This path also includes instruction in the deft strokes of calligraphy or painting. You gain the following benefits.',
        {
          type: 'entries',
          name: 'Kensei Weapons',
          entries: [
            "Choose two types of weapons to be your kensei weapons: one melee weapon and one ranged weapon. Each of these weapons can be any simple or martial weapon that lacks the heavy and special properties. The longbow is also a valid choice. You gain proficiency with these weapons if you don't already have it. Weapons of the chosen types are monk weapons for you. Many of this tradition's features work only with your kensei weapons. When you reach 6th, 11th, and 17th level in this class, you can choose another type of weapon—either melee or ranged—to be a kensei weapon for you, following the criteria above.",
          ],
        },
        {
          type: 'options',
          entries: [
            {
              type: 'refSubclassFeature',
              subclassFeature: 'Agile Parry|Monk|XGE|Kensei|XGE|3',
            },
            {
              type: 'refSubclassFeature',
              subclassFeature: "Kensei's Shot|Monk|XGE|Kensei|XGE|3",
            },
          ],
        },
        {
          type: 'entries',
          name: 'Way of the Brush',
          entries: [
            "You gain proficiency with your choice of calligrapher's supplies or painter's supplies.",
          ],
        },
      ],
    },
    {
      name: 'One with the Blade',
      source: 'XGE',
      page: 34,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Kensei',
      subclassSource: 'XGE',
      level: 6,
      header: 2,
      entries: [
        'At 6th level, you extend your ki into your kensei weapons, granting you the following benefits.',
        {
          type: 'entries',
          name: 'Magic Kensei Weapons',
          entries: [
            'Your attacks with your kensei weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.',
          ],
        },
        {
          type: 'entries',
          name: 'Deft Strike',
          entries: [
            'When you hit a target with a kensei weapon, you can spend 1 ki point to cause the weapon to deal extra damage to the target equal to your Martial Arts die. You can use this feature only once on each of your turns.',
          ],
        },
      ],
    },
    {
      name: 'Sharpen the Blade',
      source: 'XGE',
      page: 34,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Kensei',
      subclassSource: 'XGE',
      level: 11,
      header: 2,
      entries: [
        'At 11th level, you gain the ability to augment your weapons further with your ki. As a bonus action, you can expend up to 3 ki points to grant one kensei weapon you touch a bonus to attack and damage rolls when you attack with it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute or until you use this feature again. This feature has no effect on a magic weapon that already has a bonus to attack and damage rolls.',
      ],
    },
    {
      name: 'Unerring Accuracy',
      source: 'XGE',
      page: 34,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Kensei',
      subclassSource: 'XGE',
      level: 17,
      header: 2,
      entries: [
        'At 17th level, your mastery of weapons grants you extraordinary accuracy. If you miss with an attack roll using a monk weapon on your turn, you can reroll it. You can use this feature only once on each of your turns.',
      ],
    },
    {
      name: 'Way of the Sun Soul',
      source: 'XGE',
      page: 35,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Sun Soul',
      subclassSource: 'XGE',
      level: 3,
      entries: [
        'Monks of the Way of the Sun Soul learn to channel their life energy into searing bolts of light. They teach that meditation can unlock the ability to unleash the indomitable light shed by the soul of every living creature.',
        {
          type: 'refSubclassFeature',
          subclassFeature: 'Radiant Sun Bolt|Monk||Sun Soul|XGE|3',
        },
      ],
    },
    {
      name: 'Radiant Sun Bolt',
      source: 'XGE',
      page: 35,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Sun Soul',
      subclassSource: 'XGE',
      level: 3,
      header: 1,
      entries: [
        'Starting when you choose this tradition at 3rd level, you can hurl searing bolts of magical radiance.',
        'You gain a new attack option that you can use with the Attack action. This special attack is a ranged spell attack with a range of 30 feet. You are proficient with it, and you add your Dexterity modifier to its attack and damage rolls. Its damage is radiant, and its damage die is a d4. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.',
        'When you take the Attack action on your turn and use this special attack as part of it, you can spend 1 ki point to make the special attack twice as a bonus action.',
        'When you gain the Extra Attack feature, this special attack can be used for any of the attacks you make as part of the Attack action.',
      ],
    },
    {
      name: 'Searing Arc Strike',
      source: 'XGE',
      page: 35,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Sun Soul',
      subclassSource: 'XGE',
      level: 6,
      header: 2,
      entries: [
        'At 6th level, you gain the ability to channel your ki into searing waves of energy. Immediately after you take the Attack action on your turn, you can spend 2 ki points to cast the burning hands spell as a bonus action.',
        "You can spend additional ki points to cast burning hands as a higher-level spell. Each additional ki point you spend increases the spell's level by 1. The maximum number of ki points (2 plus any additional points) that you can spend on the spell equals half your monk level.",
      ],
    },
    {
      name: 'Searing Sunburst',
      source: 'XGE',
      page: 35,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Sun Soul',
      subclassSource: 'XGE',
      level: 11,
      header: 2,
      entries: [
        'At 11th level, you gain the ability to create an orb of light that erupts into a devastating explosion. As an action, you magically create an orb and hurl it at a point you choose within 150 feet, where it erupts into a sphere of radiant light for a brief but deadly instant.',
        "Each creature in that 20-foot-radius sphere must succeed on a Constitution saving throw or take 2d6 radiant damage. A creature doesn't need to make the save if the creature is behind total cover that is opaque.",
        "You can increase the sphere's damage by spending ki points. Each point you spend, to a maximum of 3, increases the damage by 2d6.",
      ],
    },
    {
      name: 'Sun Shield',
      source: 'XGE',
      page: 35,
      className: 'Monk',
      classSource: 'PHB',
      subclassShortName: 'Sun Soul',
      subclassSource: 'XGE',
      level: 17,
      header: 2,
      entries: [
        'At 17th level, you become wreathed in a luminous, magical aura. You shed bright light in a 30-foot radius and dim light for an additional 30 feet. You can extinguish or restore the light as a bonus action.',
        'If a creature hits you with a melee attack while this light shines, you can use your reaction to deal radiant damage to the creature. The radiant damage equals 5 + your Wisdom modifier.',
      ],
    },
    {
      name: 'Leap to Your Feet',
      source: 'XGE',
      page: 34,
      className: 'Monk',
      classSource: 'XGE',
      subclassShortName: 'Drunken Master',
      subclassSource: 'XGE',
      level: 6,
      entries: [
        "When you're prone, you can stand up by spending 5 feet of movement, rather than half your speed.",
      ],
    },
    {
      name: 'Redirect Attack',
      source: 'XGE',
      page: 34,
      className: 'Monk',
      classSource: 'XGE',
      subclassShortName: 'Drunken Master',
      subclassSource: 'XGE',
      level: 6,
      entries: [
        'When a creature misses you with a melee attack roll, you can spend 1 ki point as a reaction to cause that attack to hit one creature of your choice, other than the attacker, that you can see within 5 feet of you.',
      ],
    },
    {
      name: 'Agile Parry',
      source: 'XGE',
      page: 34,
      className: 'Monk',
      classSource: 'XGE',
      subclassShortName: 'Kensei',
      subclassSource: 'XGE',
      level: 3,
      entries: [
        "If you make an unarmed strike as part of the Attack action on your turn and are holding a kensei weapon, you can use it to defend yourself if it is a melee weapon. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren't incapacitated.",
      ],
    },
    {
      name: "Kensei's Shot",
      source: 'XGE',
      page: 34,
      className: 'Monk',
      classSource: 'XGE',
      subclassShortName: 'Kensei',
      subclassSource: 'XGE',
      level: 3,
      entries: [
        "You can use a bonus action on your turn to make your ranged attacks with a kensei weapon more deadly. When you do so, any target you hit with a ranged attack using a kensei weapon takes an extra 1d4 damage of the weapon's type. You retain this benefit until the end of the current turn.",
      ],
    },
  ],
}
