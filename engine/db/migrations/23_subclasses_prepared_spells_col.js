exports.up = knex => (
    knex.schema
        .raw(`
            ALTER TABLE subclasses
            ADD COLUMN prepared_spells varchar(30);
        `)
)

exports.down = knex => (
    knex.schema.dropTable('')
)