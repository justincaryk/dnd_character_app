exports.up = knex => (
    knex.schema
        .createTable('racial_features', table => {
            table.uuid('id').unique().notNullable()
            table.string('name').notNullable()
            table.text('description').notNullable()
        })
)

exports.down = knex => (
    knex.schema.dropTable('racial_features')
)
