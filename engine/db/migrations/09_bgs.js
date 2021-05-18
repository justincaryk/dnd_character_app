exports.up = knex => (
    knex.schema
        .createTable('bgs', table => {
            table.uuid('id').unique().notNullable()
            table.string('name').notNullable()
            table.text('description').notNullable()
            table.integer('numberOfExtraLanguages')
            table.json('languageOptions')
            table.integer('numberOfToolsGranted')
            table.json('toolOptions')
            table.integer('numberOfSkillsGranted')
            table.json('skillOptions')
            table.uuid('backgroundFeature')
                .unsigned()
                .references('id')
                .inTable('bg_features')
            table.uuid('alternateBackgroundFeature')
                .unsigned()
                .references('id')
                .inTable('bg_features')
        })
)

exports.down = knex => (
    knex.schema.dropTable('bgs')
)
