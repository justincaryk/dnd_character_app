exports.up = knex => (
    knex.schema
        .createTable('spells', table => {
            table.uuid('id').unique()
            table.text('slug').notNullable()
            table.text('name').notNullable()
            table.specificType('desc', 'TEXT ARRAY').notNullable()
            table.string('page')
            table.json('range').notNullable()
            table.string('components').notNullable()
            table.text('material').notNullable()
            table.string('ritual').notNullable()
            table.text('duration').notNullable()
            table.boolean('concentration').notNullable()
            table.string('casting_time').notNullable()
            table.string('level').notNullable()
            table.integer('level_int').notNullable()
            table.string('school')
            table.text('higher_level')
            table.text('dnd_class')
            table.string('archetype')
            table.string('circles')
        })
)

exports.down = knex => (
    knex.schema.dropTable('spells')
)