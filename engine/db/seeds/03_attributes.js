const { v4: uuidv4 } = require('uuid')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('attributes')
    .del()
    .then(function () {
      return knex('attributes').insert([
        {
          id: '6b4b7fc9-937a-4146-95d8-12f313acf182',
          attribute: 'Strength',
        },
        {
          id: '51b9746c-f065-44de-84d6-5f2d37d16af0',
          attribute: 'Dexterity',
        },
        {
          id: '26002bec-aeaf-4e30-b7ce-7d53ff429d9a',
          attribute: 'Constitution',
        },
        {
          id: '570397b7-965b-46a2-a6c5-0d661ff6de37',
          attribute: 'Intelligence',
        },
        {
          id: 'f295fc83-41f0-4e4f-a13d-ec0d19a90bec',
          attribute: 'Wisdom',
        },
        {
          id: '17715a19-7c73-4db3-8ff3-744143b6a7aa',
          attribute: 'Charisma',
        },
      ])
    })
}
