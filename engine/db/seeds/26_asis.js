exports.seed = knex => (
    knex('asi')
        .then(() => (
            knex('asi').insert([
                {
                    long: 'Strength',
                    short: 'str',
                },
                {
                    long: 'Dexterity',
                    short: 'dex',
                },
                {
                    long: 'Constitution',
                    short: 'con',
                },
                {
                    long: 'Intelligence',
                    short: 'int',
                },
                {
                    long: 'Wisdom',
                    short: 'wis',
                },
                {
                    long: 'Charisma',
                    short: 'cha',
                },
            ])
        ))
)