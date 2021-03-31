
exports.up = knex => (
    knex.schema
        .createTable('languages', function(table) {
            table.uuid('id').unique()
            table.string('name').notNullable()
            table.string('script').notNullable()
            table.string('typical_speakers').notNullable()
            table.string('type').notNullable()
        })
)

exports.down = knex => (
    knex.schema.dropTable('languages')
)
