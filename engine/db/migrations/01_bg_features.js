
exports.up = function(knex) {
    return knex.schema
        .createTable('bg_features', function(table) {
            table.uuid('id').unique()
            table.string('name').notNullable()
            table.string('conferring_bg').notNullable()
            table.text('description', 'longtext').notNullable()
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('bg_features')
};
