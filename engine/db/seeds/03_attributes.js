const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
    
    // Deletes ALL existing entries
    return knex('attributes')
        .del()
        .then(function () {
            return knex('attributes').insert([{
                    id: uuidv4(),
                    attribute: 'Strength'
                },
                {
                    id: uuidv4(),
                    attribute: 'Dexterity'
                },
                {
                    id: uuidv4(),
                    attribute: 'Constitution'
                },
                {
                    id: uuidv4(),
                    attribute: 'Intelligence'
                },
                {
                    id: uuidv4(),
                    attribute: 'Wisdom'
                },
                {
                    id: uuidv4(),
                    attribute: 'Charisma'
                },
            ])
        })
}