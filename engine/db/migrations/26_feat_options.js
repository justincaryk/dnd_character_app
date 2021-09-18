exports.up = knex => (
    knex.schema
        .raw(`
            ALTER TABLE feats
            ADD COLUMN scores text[];
        `)
)

exports.down = knex => (
    knex.schema.dropTable('class_features')
)