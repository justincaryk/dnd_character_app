exports.up = function (knex) {
    return knex.schema
        .createTable('skills', function (table) {
            table.uuid('id').unique()
            table.string('skill').notNullable()
            table.uuid('attr_ref').unsigned()
            table.foreign('attr_ref').references('id').inTable('attributes')
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('skills')
};
