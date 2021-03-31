exports.up = knex => (
    knex.schema
        .createTable('skills', table => {
            table.uuid('id').unique()
            table.string('skill').notNullable()
            table.uuid('attr_id')
                // .unsigned()
                .notNullable()
                .references('id')
                .inTable('attributes')
                
                
        })
)

exports.down = knex => (
    knex.schema.dropTable('skills')
)
