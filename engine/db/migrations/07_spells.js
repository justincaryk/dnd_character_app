exports.up = knex => (
    knex.schema
        .createTable('spells', table => {
            table.uuid('id').unique()
            table.text('slug')
            table.text('name')
            table.specificType('desc', 'TEXT ARRAY')
            table.string('page')
            table.jsonb('range')
            table.string('components')
            table.text('material')
            table.string('ritual')
            table.text('duration')
            table.boolean('concentration')
            table.string('casting_time')
            table.string('level')
            table.integer('level_int')
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