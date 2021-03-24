exports.up = function (knex) {
    return knex.schema
        .createTable('attributes', function (table) {
            table.uuid('id').unique()
            table.string('attribute').notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('attributes')
};
