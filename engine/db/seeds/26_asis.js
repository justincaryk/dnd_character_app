exports.seed = knex => (
    knex('asi')
        .then(() => (
            knex('asi').insert([
                {
                    long: 'strength',
                    short: 'str',
                },
                {
                    long: 'dexterity',
                    short: 'dex',
                },
                {
                    long: 'constitution',
                    short: 'con',
                },
                {
                    long: 'intelligence',
                    short: 'int',
                },
                {
                    long: 'wisdom',
                    short: 'wis',
                },
                {
                    long: 'charisma',
                    short: 'cha',
                },
            ])
        ))
)