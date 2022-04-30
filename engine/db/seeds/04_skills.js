const { v4: uuidv4 } = require('uuid')

exports.seed = knex =>
  // Deletes ALL existing entries
  knex('skills')
    .del()
    .then(() =>
      knex('skills').insert([
        {
          id: uuidv4(),
          skill: 'Acrobatics',
          attr_id: '51b9746c-f065-44de-84d6-5f2d37d16af0',
        },
        {
          id: uuidv4(),
          skill: 'Animal Handling',
          attr_id: 'f295fc83-41f0-4e4f-a13d-ec0d19a90bec',
        },
        {
          id: uuidv4(),
          skill: 'Arcana',
          attr_id: '570397b7-965b-46a2-a6c5-0d661ff6de37',
        },
        {
          id: uuidv4(),
          skill: 'Athletics',
          attr_id: '6b4b7fc9-937a-4146-95d8-12f313acf182',
        },
        {
          id: uuidv4(),
          skill: 'Deception',
          attr_id: '17715a19-7c73-4db3-8ff3-744143b6a7aa',
        },
        {
          id: uuidv4(),
          skill: 'History',
          attr_id: '570397b7-965b-46a2-a6c5-0d661ff6de37',
        },
        {
          id: uuidv4(),
          skill: 'Insight',
          attr_id: 'f295fc83-41f0-4e4f-a13d-ec0d19a90bec',
        },
        {
          id: uuidv4(),
          skill: 'Intimidation',
          attr_id: '17715a19-7c73-4db3-8ff3-744143b6a7aa',
        },
        {
          id: uuidv4(),
          skill: 'Investigation',
          attr_id: '570397b7-965b-46a2-a6c5-0d661ff6de37',
        },
        {
          id: uuidv4(),
          skill: 'Medicine',
          attr_id: 'f295fc83-41f0-4e4f-a13d-ec0d19a90bec',
        },
        {
          id: uuidv4(),
          skill: 'Nature',
          attr_id: '570397b7-965b-46a2-a6c5-0d661ff6de37',
        },
        {
          id: uuidv4(),
          skill: 'Perception',
          attr_id: 'f295fc83-41f0-4e4f-a13d-ec0d19a90bec',
        },
        {
          id: uuidv4(),
          skill: 'Performance',
          attr_id: '17715a19-7c73-4db3-8ff3-744143b6a7aa',
        },
        {
          id: uuidv4(),
          skill: 'Persuasion',
          attr_id: '17715a19-7c73-4db3-8ff3-744143b6a7aa',
        },
        {
          id: uuidv4(),
          skill: 'Religion',
          attr_id: '570397b7-965b-46a2-a6c5-0d661ff6de37',
        },
        {
          id: uuidv4(),
          skill: 'Sleight of Hand',
          attr_id: '51b9746c-f065-44de-84d6-5f2d37d16af0',
        },
        {
          id: uuidv4(),
          skill: 'Stealth',
          attr_id: '51b9746c-f065-44de-84d6-5f2d37d16af0',
        },
        {
          id: uuidv4(),
          skill: 'Survival',
          attr_id: 'f295fc83-41f0-4e4f-a13d-ec0d19a90bec',
        },
      ])
    )
