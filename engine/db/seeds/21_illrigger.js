exports.seed = knex =>
  knex('classes')
    // .del()
    .then(() =>
      knex('classes').insert([
        {
          id: '4e5a19eb-13d0-4925-a4f3-0a9733707329',
          name: 'Illrigger',
          source: 'MCDM',
          page: 1,
          hd_number: 1,
          hd_faces: 10,
          proficiency: ['cha', 'con'],
          starting_proficiencies: {
            armor: ['light', 'medium', 'shield'],
            weapons: ['simple', 'martial'],
            tools: [],
            skills: {
              choose: {
                from: [
                  'arcana',
                  'athletics',
                  'deception',
                  'insight',
                  'intimidation',
                  'investigation',
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
              '(a) chain shirt or (b) leather armor, longbow, and 20 arrows',
              "(a) a priets's pack or (b) a dungeoneer's pack",
              'A holy symbol, two daggers, and five javelins',
            ],
          },
          multiclassing: {
            requirements: {
              or: {
                str: 13,
                dex: 13,
              },
              cha: 13,
            },
            proficienciesGained: {
              armor: ['shield'],
              weapons: ['simple', 'martial'],
            },
          },
          class_features: [
            'Forked Tongue||1',
            'Infernal Conduit||1',
            'Fighting Style||1',
            'Baleful Interdict||2',
            'Hellsight||3',
            'Diabolic Contract||3||subclass',
            'Ability Score Improvement||4',
            'Extra Attack||5',
            'Baleful Interdict Improvement||6',
            'Diabolic Contract feature||7||subclass',
            'Ability Score Improvement||8',
            'Diabolic Contract feature||9||subclass',
            'Diabolic Contract feature||9||subclass',
            'Baleful Interdict Improvement||10',
            'Improved Infernal Conduit||11',
            'Ability Score Improvement||12',
            'Diabolic Contract feature||13||subclass',
            'Aura of Despair||14',
            'Summon Hell||15',
            'Ability Score Improvement||16',
            'Diabolic Contract feature||17||subclass',
            'Baleful Interdict Improvement||18',
            'Ability Score Improvement||19',
            'Diabolic Contract feature||20||subclass',
          ],
          meta: {
            classTableGroups: [
              {
                colLabels: ['Infernal Conduit'],
                rows: [
                  [1],
                  [1],
                  [2],
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
                ],
              },
            ],
          },
          subclass_title: 'Diabolic Contract',
        },
      ])
    )
