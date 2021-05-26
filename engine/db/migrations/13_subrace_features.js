exports.up = knex => (
    knex.schema
        .createTable('subrace_features', table => {
            table.uuid('id').unique().notNullable()
            table.uuid('subrace_id')
                .unsigned()
                .references('id')
                .inTable('subraces')
            table.uuid('racial_feature_id')
                .unsigned()
                .references('id')
                .inTable('racial_features')
        })
)

exports.down = knex => (
    knex.schema.dropTable('subrace_features')
)